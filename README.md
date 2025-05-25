# 🔐 JWT Full Stack User Authentication Web App

A complete user authentication system using **Node.js**, **Express**, **PostgreSQL**, and **JWT**, with a beautiful front-end in **HTML/CSS**. Secure, simple, and perfect for learning or production use!

---

## 🚀 Features

✨ User Registration  
🔐 Secure Login with Password Hashing  
🔑 JWT-based Authentication  
🛡️ Protected Dashboard Route  
🧼 Logout Functionality  
🎨 Clean & Responsive UI (HTML/CSS)  
🗄️ PostgreSQL Database Integration  

---

## 🧰 Tech Stack

- Backend: `Node.js`, `Express.js`
- Frontend: `HTML`, `CSS`, `Vanilla JS`
- Database: `PostgreSQL`
- Authentication: `JWT`
- Libraries: `bcrypt`, `jsonwebtoken`, `pg`

---


## 🛠️ Setup Instructions

### 1️⃣ Clone the Repo & Navigate
```bash
git clone <your-repo-url>
cd auth_project
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Your PostgreSQL Database

```sql
CREATE DATABASE auth;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);
```

### 4️⃣ Create `.env` File

```env
PORT=3000
DATABASE_URL=postgresql://your-user-name:your-password@localhost:5432/database-name
JWT_SECRET=your_jwt_secret_key
```

💡 Tip: Use a long random string for `JWT_SECRET`.

### 5️⃣ Run the Server

```bash
node server.js
```

You should see:
`Server running on http://localhost:3000 ✅`

---

## 🌐 How to Use

### 🔹 Register

* Open `http://localhost:3000/register.html`
* Create a new user

### 🔹 Login

* Go to `http://localhost:3000/login.html`
* Enter credentials
* On success, you’re redirected to:

### 🔹 Dashboard

* `dashboard.html` shows a protected message
* Token is stored in `localStorage`
* If token is missing or invalid → redirects to login

### 🔹 Logout

* Click **Logout**
* Token is removed and you're redirected to login

---

## 🧪 Test with Postman

To access `/dashboard` via API:

* Go to Headers
* Add:

  ```
  Authorization: Bearer <your-token>
  ```

---

## 📃 License

MIT © 2025

---

## 🙋‍♂️ Author
TANMAY GUHA

Email:- tanmayguha15@gmail.com

---
