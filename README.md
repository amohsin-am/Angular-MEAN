# 🧩 Angular MEAN Project – User Management System

---

## 📌 Project Title  
**User Management System**

---

## 📋 Description  
A full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The system allows users to manage their profile data, while providing admin users the ability to manage the entire system through a secured dashboard. The project demonstrates the integration of a frontend Angular app with a backend API, storing data in MongoDB.

---

## 🧑‍💻 Technologies Used  

| Layer     | Tech Stack                      |
|-----------|---------------------------------|
| Frontend  | Angular                         |
| Backend   | Node.js + Express.js            |
| Database  | MongoDB                         |
| Runtime   | Node.js                         |
| Styling   | Angular Material / Bootstrap    |
| Tools     | Visual Studio Code, Git, GitHub |

---

## ⚙️ Installation & Setup Instructions

### ✅ Prerequisites  
- Node.js & npm installed  
- Angular CLI installed globally (`npm install -g @angular/cli`)  
- MongoDB running locally or Atlas DB connected  
- Git installed  

---

### 💻 Clone the Repository  
```bash
git clone https://github.com/yourusername/Angular-MEAN.git
cd Angular-MEAN

🚀 Backend Setup
cd backend
npm install

⚙️ Frontend Setup
cd ../
npm install

🧪 Run MongoDB (if local)

Ensure MongoDB service is running or update DB connection string in backend/server.js

▶️ Start Backend Server
node backend/server.js

▶️ Start Angular Frontend
ng serve


Open browser and navigate to:
👉 http://localhost:4200

🗂️ Project Structure
Angular-MEAN/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   └── server.js
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   └── styles.css
├── public/
├── package.json
├── angular.json
└── README.md

🌐 Features
👤 User Panel

Home page

Contact page

User info form page

Info list and detail pages

Profile management

🔐 Admin Panel

Add/Edit/Delete users

Add/Edit/Delete products

View full user info

Manage all system data from dashboard

🧼 Security & Clean Code

✅ No hardcoded passwords, API keys, or secrets committed

✅ .gitignore in place to avoid committing node_modules, .env, etc.

✅ Sensitive data handled securely

To double-check, run:

git grep -i 'password\|secret\|apikey\|token'

🧪 Testing Criteria

App starts without errors ✅

GET request loads user list ✅

POST request adds a new user to database ✅

📑 Future Improvements

Add JWT-based authentication

Add form validation using Angular Reactive Forms

Add product image uploads

Setup deployment on Vercel/Render/Heroku

🤝 Contributions

This project is proudly created and maintained by:

Abdul

With help from:

Abhay
GitHub
Google
ChatGPT
Gemini

📃 License

This project is licensed under the MIT License
