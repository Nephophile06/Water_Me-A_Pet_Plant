# 🌱 Water Me [A Pet Plant] - Take Care . Watch It Grow

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-emerald?style=for-the-badge&logo=spring" alt="Version" />
  <img src="https://img.shields.io/badge/Frontend-JSP%20%7C%20TailwindCSS%20%7C%20Vanilla%20JS-38bdf8?style=for-the-badge&logo=javascript" alt="Frontend" />
  <img src="https://img.shields.io/badge/Backend-JSP%20%7C%20JDBC-orange?style=for-the-badge&logo=openjdk" alt="Backend" />
  <img src="https://img.shields.io/badge/Database-Oracle%2021C-red?style=for-the-badge&logo=oracle" alt="Database" />
  <img src="https://img.shields.io/badge/Server-Apache%20Tomcat-amber?style=for-the-badge&logo=apachetomcat" alt="Server" />
</p>


> **A virtual pet plant that grows with your care and consistency.**

**Water Me** is an interactive virtual plant companion and habit-tracking web application designed to encourage consistent regular care through a simple and engaging plant-growth experience.

The idea is simple: **take care of your plant, maintain its health, and watch it progress through different growth stages.** When neglected for too long, the plant gradually loses energy/liveliness and can become dried-up.


## 1. Project Overview

Water Me connects regular consistency with a visual plant-growth system.

### Core Concept

* **Daily Care** - Watering and gentle breeze interactions improve the plant's health.
* **Growth** - As the health level increases, the plant progresses through different growth stages.
* **Neglect** - Prolonged inactivity reduces plant energy and can eventually lead to a dried-up state.
* **Recovery** - Consistent care can restore a weakened plant and help it progress again.

### Growth Cycle

```text
Seed → Sprout → Lush Foliage → Blooming Blossom
  ↑                                      ↓
  └──────────── Care & Recovery ─────────┘

                    Neglect  
                       ↓
                   Shrunken
```

# 2. Features

### User Authentication

* User registration and login
* Password hashing using **SHA-256**
* Session-based authentication
* User-specific plant data
* Private garden for each user

### Virtual Plant Care

Users can interact with their plants through different care actions:

| Action        | Effect                 |
| :------------ | :--------------------- |
| Water         | +15% Health / Moisture |
| Gentle Breeze | +10% Energy            |

Care actions also update the plant's latest care timestamp.

### Growth Stages

The plant's growth stage is determined by its health level:

|  Health   | Growth Stage     |
| :-------- | :--------------- |
| 0 - 29%   | Seed             |
| 30 - 59%  | Sprout           |
| 60 - 89%  | Lush Foliage     |
| 90 - 100% | Blooming Blossom |

If the plant is neglected, its health gradually decreases and it can enter a **Shrunken** state.


### Plant Management

Users can:

* Adopt a plant
* Choose from a catalog of plant species
* Give their plant a custom nickname
* View plant health and growth stage
* Rename existing plants
* Care for plants
* Remove unwanted plants

The application currently supports a catalog of **12 plant species**.


### Personal Garden Dashboard

Each user has a private garden dashboard displaying:

* Plant nickname
* Plant species
* Current health
* Growth stage
* Care status
* Care history


### Care Activity Logs

Every care interaction is recorded in the database.

Each log contains:

* Plant ID
* Action type (`WATER` / `BREEZE`)
* Boost amount
* Action timestamp

This provides a simple history of how each plant has been maintained.


# 3. UI & Visual Design

The application uses a soft, friendly visual style.

### Design Characteristics

* Soft pastel color palette
* Warm natural tones
* Claymorphism-inspired cards
* Rounded UI elements
* Soft shadows
* Animated environmental elements
* Responsive plant illustrations

### Dynamic Plant Illustrations

Custom **inline SVG illustrations** are used to represent different plant species and growth conditions.

The visual state changes according to:

```text
Plant Species
      +
Health Level
      +
Growth Stage
      ↓
Dynamic Plant Illustration
```

The interface also includes subtle ambient animations such as:

* Floating clouds
* Flying birds
* Swaying leaves
* Environmental motion
* Interactive cards and controls


# 4. Database Architecture

The project uses **Oracle Database** with a relational structure connecting users, plants, species, and care activities.

### Database Entities

```text
plant_users
     │
     └── user_plants
             │
             └── plant_care_logs

plant_species
```

### CRUD Operations

| Operation  | Feature       | Description                                   |
| :--------- | :------------ | :-------------------------------------------- |
| **Create** | Adopt Plant   | Add a new plant to the user's garden          |
| **Read**   | Garden View   | Display plants, health, stages, and activity  |
| **Update** | Rename & Care | Update nickname, health, stage, and care time |
| **Delete** | Remove Plant  | Delete a plant from the user's garden         |
| **Audit**  | Care Logs     | Record every care interaction                 |


# 5. Database Schema

### `plant_species`

Stores the available plant species.

```sql
CREATE TABLE plant_species (
    species_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    species_name VARCHAR2(100) UNIQUE NOT NULL,
    description VARCHAR2(255),
    growth_rate NUMBER DEFAULT 1
);
```

### `plant_users`

Stores registered users.

```sql
CREATE TABLE plant_users (
    user_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR2(50) UNIQUE NOT NULL,
    password_hash VARCHAR2(64) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `user_plants`

Stores plants adopted by users.

```sql
CREATE TABLE user_plants (
    plant_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id NUMBER NOT NULL
        REFERENCES plant_users(user_id) ON DELETE CASCADE,
    nickname VARCHAR2(60) NOT NULL,
    species_name VARCHAR2(100) NOT NULL,
    health_points NUMBER DEFAULT 20
        CHECK (health_points BETWEEN 0 AND 100),
    growth_stage NUMBER DEFAULT 1
        CHECK (growth_stage BETWEEN 1 AND 4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_cared_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `plant_care_logs`

Stores the history of plant-care interactions.

```sql
CREATE TABLE plant_care_logs (
    log_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    plant_id NUMBER NOT NULL
        REFERENCES user_plants(plant_id) ON DELETE CASCADE,
    action_type VARCHAR2(20) NOT NULL,
    boost_amount NUMBER NOT NULL,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 6. Technical Stack

### Frontend

* **JSP** — Server-side page rendering
* **Tailwind CSS** — Utility-based styling
* **Custom CSS** — Claymorphism, animations, and visual effects
* **Vanilla JavaScript (ES6+)** — UI interactions, modals, dynamic content, and SVG rendering

### Backend

* **Java**
* **JSP**
* **JDBC**
* **Session Management**
* **SHA-256 Password Hashing**

### Database

**Oracle Database** - Oracle XE, Oracle 21c

### Server

**Apache Tomcat 10.1.36**


# 7. Project Structure

```text
WaterMe/
└── src/
    └── main/
        └── webapp/
            ├── assets/
            │   ├── css/
            │   │   └── style.css
            │   └── js/
            │       ├── app.js
            │       ├── auth.js
            │       └── dashboard.js
            │
            ├── WEB-INF/
            │   └── lib/
            │       ├── ojdbc17.jar
            │       └── JSTL
            │
            ├── auth.jsp
            ├── index.jsp
            ├── loginAction.jsp
            ├── plantAction.jsp
            ├── logout.jsp
            └── README.md
```

### Main Components

| File              | Responsibility                           |
| ----------------- | ---------------------------------------- |
| `auth.jsp`        | Login and registration interface         |
| `index.jsp`       | Main plant dashboard                     |
| `loginAction.jsp` | Authentication and password verification |
| `plantAction.jsp` | Plant CRUD and care operations           |
| `logout.jsp`      | Session invalidation                     |
| `auth.js`         | Authentication UI interactions           |
| `dashboard.js`    | Dynamic plant/SVG rendering              |
| `app.js`          | General UI utilities and modal controls  |
| `style.css`       | Custom styling and animations            |


# 8. Application Flow

```text
             ┌───────────────┐
             │ Register/Login│
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │  Plant Garden │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │  Adopt Plant  │
             └───────┬───────┘
                     ↓
              ┌─────────────┐
              │ Care Plant  │
              └──────┬──────┘
                     ↓
        ┌────────────┴────────────┐
        ↓                         ↓
 Health Increases              Neglect
        ↓                         ↓
   Growth Stage              Health Drops
        ↓                         ↓
  Blooming State            Shrunken State
        │                         │
        └───────────┬─────────────┘
                    ↓
              Recovery / Care
```


# 9. Setup & Installation

### Prerequisites

Before running the project, install:

1. **JDK** - JDK 21 recommended
2. **Apache Tomcat 10+**
3. **Oracle Database XE / Enterprise**
4. **Oracle JDBC Driver (`ojdbc7.jar`)**
5. IDE such as Eclipse, IntelliJ IDEA, or NetBeans


## Database Setup

Create the required tables using the SQL schema provided above.

Then populate the plant catalog.

```sql
INSERT INTO plant_species
    (species_name, description)
VALUES
    ('Money Plant',
     'Vibrant climber known for its hardy leaves.');

INSERT INTO plant_species
    (species_name, description)
VALUES
    ('Monstera',
     'Iconic tropical plant with distinctive split leaves.');

INSERT INTO plant_species
    (species_name, description)
VALUES
    ('Jasmine',
     'Fragrant flowering plant.');

INSERT INTO plant_species
    (species_name, description)
VALUES
    ('Bonsai',
     'Miniature tree requiring patient and consistent care.');

COMMIT;
```

> Add the remaining species according to the application's plant catalog.


## Database Configuration

Configure the Oracle connection in the application's database connection class:

```java
String url = "jdbc:oracle:thin:@localhost:1521:XE";
String user = "YOUR_DB_USER";
String password = "YOUR_DB_PASSWORD";
```

Make sure the Oracle JDBC driver is available in:

```text
WEB-INF/lib/
```

and in the Tomcat library directory.


# 10. Future Enhancements

The current application can be extended with:

* [ ] **Plant care reminders** and push notifications
* [ ] **Daily care streaks**
* [ ] **Achievement and reward system**
* [ ] **More plant species and unlockable plants**
* [ ] **Garden customization**
* [ ] **Weather API integration**
* [ ] **Plant accessories and customization**
* [ ] **Care statistics and progress charts**
* [ ] **Mobile-responsive improvements**
* [ ] **More advanced habit tracking**


# 11. Project Highlights

* Multi-user authentication system
* User-specific virtual plant environments
* Plant lifecycle and health system
* CRUD-based plant management
* Care interaction tracking
* Relational Oracle database
* Audit logging
* Dynamic SVG-based plant visualization
* Claymorphism-inspired UI
* Java Servlet/JSP backend
* JDBC database integration


## Project Concept

**Water Me turns everyday consistency into something users can see, interact with, and grow.**


### Crafted with care for mindful habits and healthier routines.