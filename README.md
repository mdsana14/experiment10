# JWT-Protected Student CRUD API (Express.js)

This project is a simple Node.js + Express.js application that performs CRUD operations on student data, protected using JWT (JSON Web Tokens).

## 🔧 Features

- 🔐 Login endpoint that returns a JWT token
- ✅ Protected CRUD endpoints for student data
- 🧪 Testable via Postman
- 🧱 Mock user authentication
- 🔒 JWT middleware for route protection

---

## 🚀 How to Run

### 1. Clone and Navigate

```bash
unzip jwt_student_crud_project.zip
cd jwt_student_crud
```

### 2. Install Dependencies

```bash
npm install express jsonwebtoken bcryptjs body-parser
```

### 3. Start the Server

```bash
node server.js
```

Server will run on: `http://localhost:3000`

---

## 🔐 Authentication Flow

### ➤ Login (to get JWT Token)

**POST** `/auth/login`

#### Body (JSON):
```json
{
  "username": "admin",
  "password": "admin123"
}
```

#### Response:
```json
{
  "token": "your.jwt.token"
}
```

---

## 🧪 CRUD API (Protected)

Add Header to all requests:
```
Authorization: Bearer your.jwt.token
```

### ➤ Get All Students

**GET** `/students`

### ➤ Add New Student

**POST** `/students`  
Body:
```json
{
  "name": "Jane Doe"
}
```

### ➤ Delete Student

**DELETE** `/students/1`

---

## 📁 Project Structure

```
.
├── server.js
├── routes/
│   ├── auth.js
│   └── students.js
├── middleware/
│   └── authMiddleware.js
├── data/
│   └── users.js
```

---

## ✅ Output Example

- On `/auth/login`, you get a JWT token.
- Use this token to `GET`, `POST`, and `DELETE` student records securely.
- Without the token, you'll receive a `401 Unauthorized`.

---

github link:
https://github.com/mdsana14/experiment10.git

Screenshots:

![Screenshot (12)](https://github.com/user-attachments/assets/5eb97ece-5023-4fc6-9ba1-1618af4abf12)

![Screenshot (1)](https://github.com/user-attachments/assets/9c65aaf1-9892-422c-9bee-010a91a155ea)

![2025-06-03](https://github.com/user-attachments/assets/dba392b4-95cc-4ddf-8a29-d6211a5d9f4b)

