# 🌱 Grow With Time — Habit & Virtual Plant Sanctuary

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-emerald?style=for-the-badge&logo=spring" alt="Version" />
  <img src="https://img.shields.io/badge/Frontend-JSP%20%7C%20TailwindCSS%20%7C%20Vanilla%20JS-38bdf8?style=for-the-badge&logo=javascript" alt="Frontend" />
  <img src="https://img.shields.io/badge/Backend-Java%20Servlets%20%7C%20JDBC-orange?style=for-the-badge&logo=openjdk" alt="Backend" />
  <img src="https://img.shields.io/badge/Database-Oracle%20DB-red?style=for-the-badge&logo=oracle" alt="Database" />
  <img src="https://img.shields.io/badge/Server-Apache%20Tomcat-amber?style=for-the-badge&logo=apachetomcat" alt="Server" />
</p>

---

## 📖 1. Project Overview

**Grow With Time** is an interactive virtual plant companion and habit-tracking web application designed to promote mindful self-care. 

The core concept establishes a direct symbiotic connection between real-world consistency and digital botanical growth:
* 💧 **Daily Nurturing**: Cultivating mindfulness and regular care interactions keeps your plant thriving, hydrated, and bursting into blossom.
* 🍂 **Neglect & Recovery**: Prolonged inactivity drains vitality, gradually withering the plant. Consistent care restores life and brings it back to full vitality.

---

## ✨ 2. Core Mechanism & Features

### 🔐 User Authentication & Private Sanctuary
* **Multi-User System**: Secure registration and login powered by **SHA-256 password hashing**.
* **Personal Greenhouse**: Each gardener maintains an isolated habitat and garden state linked directly to their user ID.

### 🌿 The Growth Engine (Care Interactions)
* 💧 **Watering**: Hydrates the root system (**+15% Moisture / Health**).
* 🍃 **Gentle Breeze**: Enhances airflow and photosynthetic vitality (**+10% Vitality**).
* **Smart Stage Progression**: Health transitions determine the lifecycle stage in real time:

$$\text{Seed (0-29\%)} \longrightarrow \text{Sprout (30-59\%)} \longrightarrow \text{Lush Foliage (60-89\%)} \longrightarrow \text{Blooming Blossom (90-100\%)}$$

```
   [ 🌱 Seed ] ──(+Care)──> [ 🌿 Sprout ] ──(+Care)──> [ 🪴 Foliage ] ──(+Care)──> [ 🌸 Blossom ]
         │                        │                         │                          │
         └────────────────────────┴──────── (Neglect) ──────┴──────────────────────────┘
                                                   │
                                                   ▼
                                        [ 🥀 Withered State ]
```

### 🎨 Visual Aesthetics & Claymorphism
* Soft, soothing pastel aesthetic with warm natural tones.
* Custom inline SVG vector illustrations dynamically responding to species, health levels, and growth stages.
* Ambient micro-interactions: drifting clouds, soaring birds, swaying leaves, and tactile claymorphic cards.

---

## 🗄️ 3. Database Architecture & Operations (CRUD)

| Operation | Feature | Description |
| :--- | :--- | :--- |
| **Create (C)** | 🪴 **Adopt Plant** | Choose and nickname a new companion from a catalog of 12 distinct plant species. |
| **Read (R)** | 📊 **Garden View** | Real-time dashboard rendering health metrics, growth stages, species badges, and care history. |
| **Update (U)** | ✏️ **Rename & Care** | Modify plant nicknames anytime; apply watering/breeze actions to update metrics & timestamp. |
| **Delete (D)** | 🗑️ **Habitat Pruning** | Safely release or delete unwanted plants from the user's habitat. |
| **Audit Log** | 📜 **Activity Logs** | Logs every single care interaction (`WATER`, `BREEZE`) with boost amounts and exact timestamps (`CURRENT_TIMESTAMP`). |

### 📊 Relational Database Schema (Oracle SQL)

```sql
-- 1. Plant Species Catalog
CREATE TABLE plant_species (
    species_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    species_name VARCHAR2(100) UNIQUE NOT NULL,
    description VARCHAR2(255),
    growth_rate NUMBER DEFAULT 1
);

-- 2. User Accounts
CREATE TABLE plant_users (
    user_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR2(50) UNIQUE NOT NULL,
    password_hash VARCHAR2(64) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Cultivated Plants
CREATE TABLE user_plants (
    plant_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id NUMBER NOT NULL REFERENCES plant_users(user_id) ON DELETE CASCADE,
    nickname VARCHAR2(60) NOT NULL,
    species_name VARCHAR2(100) NOT NULL,
    health_points NUMBER DEFAULT 20 CHECK (health_points BETWEEN 0 AND 100),
    growth_stage NUMBER DEFAULT 1 CHECK (growth_stage BETWEEN 1 AND 4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_cared_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Care Interaction Audit Logs
CREATE TABLE plant_care_logs (
    log_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    plant_id NUMBER NOT NULL REFERENCES user_plants(plant_id) ON DELETE CASCADE,
    action_type VARCHAR2(20) NOT NULL, -- 'WATER', 'BREEZE'
    boost_amount NUMBER NOT NULL,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🛠️ 4. Technical Stack

* **Frontend**:
  * **JSP (JavaServer Pages)**: Dynamic server-side page templates.
  * **Tailwind CSS & Custom Vanilla CSS**: Claymorphism, soft shadow tokens, keyframe animations.
  * **Vanilla JavaScript (ES6+)**: Reactive UI switching, modals, SVG rendering engine.
* **Backend**:
  * **Java (JSP / Servlets)**: Core business logic, session orchestration, security.
  * **JDBC (Java Database Connectivity)**: Direct connection pooling and transaction handling.
  * **SHA-256 Hashing**: Cryptographic password encryption (`java.security.MessageDigest`).
* **Database**:
  * **Oracle Database (11g / 19c / 21c / XE)**
* **Web Server / Runtime**:
  * **Apache Tomcat (v9.x / v10.x)**

---

## 📂 5. Project Directory Structure

```plaintext
GrowWithTime/
└── src/
    └── main/
        └── webapp/
            ├── assets/
            │   ├── css/
            │   │   └── style.css            # Claymorphic tokens & nature ambient keyframes
            │   └── js/
            │       ├── app.js               # Modal controllers & client utilities
            │       ├── auth.js              # Interactive login/registration mode toggle
            │       └── dashboard.js         # Custom SVG botanical rendering engine
            ├── WEB-INF/
            │   └── lib/                     # Oracle JDBC Driver (ojdbc8.jar) & JSTL
            ├── auth.jsp                     # Scenic pastel login & signup portal
            ├── index.jsp                    # Main greenhouse habitat dashboard
            ├── loginAction.jsp              # Authentication & SHA-256 verification
            ├── plantAction.jsp              # CRUD actions (care, adopt, rename, delete)
            ├── logout.jsp                   # Session invalidation & safe logout
            └── README.md                    # Project documentation
```

---

## 🚀 6. Setup & Installation Guide

### Prerequisites
1. **Java Development Kit (JDK 8 or higher / JDK 17 recommended)**
2. **Apache Tomcat (v9.0+ or v10.1+)**
3. **Oracle Database (XE / Enterprise)**
4. **Oracle JDBC Driver (`ojdbc8.jar`)** in `WEB-INF/lib` or Tomcat `lib/`

### Step 1: Database Setup
1. Log into your Oracle DB instance via SQL*Plus or Oracle SQL Developer:
   ```sql
   -- Execute the table creation DDL provided in Section 3
   ```
2. Insert the standard catalog species:
   ```sql
   INSERT INTO plant_species (species_name, description) VALUES ('Money Plant', 'Vibrant climber known for prosperity and hardy leaves.');
   INSERT INTO plant_species (species_name, description) VALUES ('Monstera', 'Iconic split-leaf tropical beauty with fast vigor.');
   INSERT INTO plant_species (species_name, description) VALUES ('Jasmine', 'Fragrant blooming flora that flourishes with gentle breeze.');
   INSERT INTO plant_species (species_name, description) VALUES ('Bonsai', 'Refined ancient miniature tree requiring patient mindful care.');
   COMMIT;
   ```

### Step 2: Configure Database Connection
Ensure your database credentials in `DBConnection.java` match your Oracle configuration:
```java
String url = "jdbc:oracle:thin:@localhost:1521:XE"; // or your ORCL service
String user = "YOUR_DB_USER";
String password = "YOUR_DB_PASSWORD";
```

### Step 3: Deploy on Apache Tomcat
1. Clone / Copy the project into your Tomcat `webapps` directory or deploy via Eclipse / IntelliJ / NetBeans.
2. Start the Tomcat server.
3. Open your browser and navigate to:
   ```text
   http://localhost:8080/GrowWithTime/auth.jsp
   ```

---

## 🌸 7. Roadmap & Future Enhancements

- [x] Claymorphic soft pastel UI and animated ambient backdrop.
- [x] Multi-species SVG generative illustration engine.
- [x] Habit-to-hydration mapping & audit logs.
- [ ] Push notifications for habit reminders and plant thirst alerts.
- [ ] Weather API integration to dynamically mirror local ambient climate.
- [ ] Seed shop & garden accessory unlocks with care streaks.

---

<p align="center">
  Crafted with 💚 for mindful living and healthy habits.
</p>
