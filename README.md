# 🔐 Secure Student Portal

A full-stack **MERN Authentication System** with secure login, JWT-based authentication, protected routes, and environment variable configuration.

---

## 🚀 Techtph Stack

### Frontend

* React (Vite)
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv

---

## 📂 Project Structure

```
Secure-Student-Portal
│
├── BACKEND
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
│
├── myapp (Frontend)
│   ├── src
│   └── vite.config.js
│
└── .gitignore
```

---

## ✨ Features

* ✅ Student Registration
* ✅ Secure Login System
* ✅ Password Hashing using bcrypt
* ✅ JWT Token Authentication
* ✅ Protected Routes
* ✅ Environment Variable Protection
* ✅ REST API Architecture

---

## 🔐 Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. User logs in
4. Server generates JWT token
5. Token is stored on client side
6. Protected routes verify token

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/Secure-Student-Portal.git
cd Secure-Student-Portal
```

### 2️⃣ Backend Setup

```
cd BACKEND
npm install
```

Create a `.env` file inside BACKEND:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key व्यवहार
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd myapp
npm install
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| POST   | /register | Register new student |
| POST   | /login    | Login student        |
| GET    | /profile  | Protected route      |

---

## 🧠 What I Learned

* How authentication works in real-world apps
* JWT token structure and verification
* Secure password storage
* Backend & frontend integration
* Environment variable management
* Git & GitHub workflow

---

## 📈 Future Improvements

* Add Role-based Authorization
* Add Refresh Token System
* Deploy on Render / Vercel
* Add Email Verification

---

## 👨‍💻 Author

Rahul Ramesh Mane

---

⭐ If you like this project, give it a star!
