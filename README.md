# LMS API

A RESTful API for a Course Management System within an LMS.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/SursaChauhan/Sql_LmsApi.git
   cd lms-api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and configure your environment variables:

   ```plaintext
   DATABASE_URL=mysql://yourusername:yourpassword@localhost:3306/lms_api
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```sh
   npm start
   ```

## Configuration

- **Database URL**: The connection string for your MySQL database.
- **JWT Secret**: The secret key for JWT authentication.

## API Endpoints

### User Authentication

- **Register a new user (student or teacher)**

  ```http
  POST /auth/register
  ```

  Request Body:

  ```json
  {
    "username": "johndoe",
    "password": "mypassword",
    "role": "student"
  }
  ```

- **Authenticate a user and provide a token**

  ```http
  POST /auth/login
  ```

  Request Body:

  ```json
  {
    "username": "johndoe",
    "password": "mypassword"
  }
  ```

### Course Management

- **Retrieve a list of all courses**

  ```http
  GET /courses
  ```

- **Retrieve details of a specific course**

  ```http
  GET /courses/:id
  ```

- **Create a new course (teachers only)**

  ```http
  POST /courses
  ```

- **Update a course (teachers only)**

  ```http
  PUT /courses/:id
  ```

- **Delete a course (teachers only)**

  ```http
  DELETE /courses/:id
  ```

### Progress Tracking

- **Retrieve progress for a specific user**

  ```http
  GET /users/:id/progress
  ```

- **Update progress for a specific user**

  ```http
  POST /users/:id/progress
  ```

## Database Schema

### Tables

- **Users**

  | Column   | Type    |
  | -------- | ------- |
  | id       | bigint  |
  | email    | varchar |
  | password | varchar |
  | role_id  | bigint  |

- **Roles**

  | Column | Type    |
  | ------ | ------- |
  | id     | bigint  |
  | role   | varchar |

- **Courses**

  | Column           | Type      |
  | ---------------- | --------- |
  | id               | bigint    |
  | title            | mediumtext|
  | description      | text      |
  | created_date_time| datetime  |
  | teacher_id       | bigint    |

- **Enrollment Table**

  | Column           | Type      |
  | ---------------- | --------- |
  | id               | bigint    |
  | user_id          | bigint    |
  | course_id        | bigint    |
  | enrollment_date  | datetime  |

- **Progress Level**

  | Column        | Type    |
  | ------------- | ------- |
  | id            | bigint  |
  | user_id       | bigint  |
  | course_status | enum    |
  | course_id     | bigint  |

## Relationships

- **Users** to **Roles**: Many-to-One
- **Courses** to **Users** (Teacher): Many-to-One
- **Users** to **Courses** (Enrollment): Many-to-Many (via Enrollment Table)
- **Users** to **Courses** (Progress): Many-to-Many (via Progress Level Table)

---
