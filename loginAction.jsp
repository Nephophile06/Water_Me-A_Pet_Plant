<%@page import="com.petplant.utils.DBConnection" %>
    <%@ page import="java.sql.*, java.security.MessageDigest, java.nio.charset.StandardCharsets" %>
        <%! private String hashPassword(String password) { try { MessageDigest
            digest=MessageDigest.getInstance("SHA-256"); byte[]
            encodedHash=digest.digest(password.getBytes(StandardCharsets.UTF_8)); StringBuilder hexString=new
            StringBuilder(); for (byte b : encodedHash) { String hex=Integer.toHexString(0xff & b); if (hex.length()==1)
            hexString.append('0'); hexString.append(hex); } return hexString.toString(); } catch (Exception e) { throw
            new RuntimeException("Error hashing password", e); } } %>
            <% String action=request.getParameter("action"); String user=request.getParameter("username"); String
                pass=request.getParameter("password"); if (user==null || pass==null || user.trim().isEmpty() ||
                pass.trim().isEmpty()) { response.sendRedirect("auth.jsp?error=invalid_input"); return; } String
                hashedPassword=hashPassword(pass.trim()); try (Connection conn=DBConnection.getConnection()) { if
                ("register".equals(action)) { String checkSql="SELECT user_id FROM plant_users WHERE username = ?" ;
                PreparedStatement checkPs=conn.prepareStatement(checkSql); checkPs.setString(1, user.trim()); ResultSet
                rs=checkPs.executeQuery(); if (rs.next()) { response.sendRedirect("auth.jsp?error=user_exists"); return;
                } String insertSql="INSERT INTO plant_users (username, password_hash) VALUES (?, ?)" ; PreparedStatement
                insertPs=conn.prepareStatement(insertSql, new String[]{"USER_ID"}); insertPs.setString(1, user.trim());
                insertPs.setString(2, hashedPassword); insertPs.executeUpdate(); ResultSet
                genKeys=insertPs.getGeneratedKeys(); int newUserId=0; if (genKeys.next()) newUserId=genKeys.getInt(1);
                if (newUserId> 0) {
                String plantSql = "INSERT INTO user_plants (user_id, nickname, species_name, health_points,
                growth_stage) " +
                "SELECT ?, 'First Sprout', species_name, 20, 1 " +
                "FROM plant_species WHERE species_name = 'Money Plant'";
                PreparedStatement plantPs = conn.prepareStatement(plantSql);
                plantPs.setInt(1, newUserId);
                plantPs.executeUpdate();
                }

                session.setAttribute("user_id", newUserId);
                session.setAttribute("username", user.trim());
                response.sendRedirect("index.jsp");

                } else {
                String loginSql = "SELECT user_id, password_hash FROM plant_users WHERE username = ?";
                PreparedStatement ps = conn.prepareStatement(loginSql);
                ps.setString(1, user.trim());
                ResultSet rs = ps.executeQuery();

                if (rs.next() && rs.getString("password_hash").equals(hashedPassword)) {
                session.setAttribute("user_id", rs.getInt("user_id"));
                session.setAttribute("username", user.trim());
                response.sendRedirect("index.jsp");
                } else {
                response.sendRedirect("auth.jsp?error=invalid_credentials");
                }
                }
                } catch (Exception e) {
                e.printStackTrace();
                response.sendRedirect("auth.jsp?error=server_error");
                }
                %>