<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ page import="java.sql.*, com.petplant.utils.DBConnection" %>
        <% Integer userId=(Integer) session.getAttribute("user_id"); if (userId==null) {
            response.sendRedirect("auth.jsp"); return; } String action=request.getParameter("action"); int
            activePlantId=-1; try (Connection conn=DBConnection.getConnection()) { if ("create".equals(action)) { String
            nickname=request.getParameter("nickname"); String species=request.getParameter("species_name"); if
            (nickname==null || nickname.trim().isEmpty()) nickname="Sprout" ; else nickname=nickname.trim(); if
            (species==null || species.trim().isEmpty()) species="Money Plant" ; else species=species.trim(); String
            sql="INSERT INTO user_plants (user_id, nickname, species_name, health_points, growth_stage) "
            + "VALUES (?, ?, ?, 20, 1)" ; PreparedStatement ps=conn.prepareStatement(sql, new String[]{"PLANT_ID"});
            ps.setInt(1, userId); ps.setString(2, nickname); ps.setString(3, species); ps.executeUpdate(); ResultSet
            rs=ps.getGeneratedKeys(); if (rs.next()) activePlantId=rs.getInt(1); } else if ("rename".equals(action)) {
            String pIdStr=request.getParameter("plant_id"); String nickname=request.getParameter("nickname"); if (pIdStr
            !=null) activePlantId=Integer.parseInt(pIdStr); if (pIdStr !=null && nickname !=null &&
            !nickname.trim().isEmpty()) { String
            sql="UPDATE user_plants SET nickname = ? WHERE plant_id = ? AND user_id = ?" ; PreparedStatement
            ps=conn.prepareStatement(sql); ps.setString(1, nickname.trim()); ps.setInt(2, activePlantId); ps.setInt(3,
            userId); ps.executeUpdate(); } } else if ("delete".equals(action)) { String
            pIdStr=request.getParameter("plant_id"); if (pIdStr !=null) { int plantId=Integer.parseInt(pIdStr); String
            sql="DELETE FROM user_plants WHERE plant_id = ? AND user_id = ?" ; PreparedStatement
            ps=conn.prepareStatement(sql); ps.setInt(1, plantId); ps.setInt(2, userId); ps.executeUpdate(); } } else if
            ("care".equals(action)) { String pIdStr=request.getParameter("plant_id"); String
            type=request.getParameter("type"); if (pIdStr !=null && type !=null) {
            activePlantId=Integer.parseInt(pIdStr); int boost="water" .equalsIgnoreCase(type) ? 15 : 10; String
            selectSql="SELECT NVL(health_points, 20) as current_hp, NVL(growth_stage, 1) as current_stage, last_cared_at, created_at FROM user_plants WHERE plant_id = ? AND user_id = ?"
            ; int baseHp=20; int currentStage=1; Timestamp lastCaredTs=null; try (PreparedStatement
            selectPs=conn.prepareStatement(selectSql)) { selectPs.setInt(1, activePlantId); selectPs.setInt(2, userId);
            try (ResultSet rs=selectPs.executeQuery()) { if (rs.next()) { baseHp=rs.getInt("current_hp");
            currentStage=rs.getInt("current_stage"); lastCaredTs=rs.getTimestamp("last_cared_at"); if
            (lastCaredTs==null) { lastCaredTs=rs.getTimestamp("created_at"); } } } } long
            now=System.currentTimeMillis(); long lastCaredMillis=(lastCaredTs !=null) ? lastCaredTs.getTime() : now;
            double hoursElapsed=(now - lastCaredMillis) / (1000.0 * 60.0 * 60.0); int decay=0; if (hoursElapsed>= 2.0) {
            decay = (int) Math.floor((hoursElapsed / 2.0) * 6.0);
            }
            int effectiveHp = Math.max(0, baseHp - decay);

            int newHp = Math.min(100, effectiveHp + boost);

            // Stage calculation - 100% এ Stage 4
            int newStage;
            if (newHp >= 100) {
            newStage = 4;
            } else if (newHp >= 60) {
            newStage = 3;
            } else if (newHp >= 30) {
            newStage = 2;
            } else {
            newStage = 1;
            }

            String updateSql = "UPDATE user_plants SET health_points = ?, growth_stage = ?, last_cared_at = CURRENT_TIMESTAMP WHERE plant_id = ? AND user_id = ?";
            try (PreparedStatement updatePs = conn.prepareStatement(updateSql)) {
            updatePs.setInt(1, newHp);
            updatePs.setInt(2, newStage);
            updatePs.setInt(3, activePlantId);
            updatePs.setInt(4, userId);
            updatePs.executeUpdate();
            }

            String logSql = "INSERT INTO plant_care_logs (plant_id, action_type, boost_amount) VALUES (?, ?, ?)";
            try (PreparedStatement logPs = conn.prepareStatement(logSql)) {
            logPs.setInt(1, activePlantId);
            logPs.setString(2, type.toUpperCase());
            logPs.setInt(3, boost);
            logPs.executeUpdate();
            }
            }
            }

            } catch (Exception e) {
            e.printStackTrace();
            }

            if (activePlantId > 0) {
            response.sendRedirect("index.jsp?activePlantId=" + activePlantId);
            } else {
            response.sendRedirect("index.jsp");
            }
            %>