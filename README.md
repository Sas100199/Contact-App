# 📬 Contact Us Web App

A simple full-stack "Contact Us" web application that allows users to submit queries and lets the admin view them through an admin dashboard.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** JSON file (`queries.json`) for storing submissions

---

## 🚀 Features

### ✅ User Side
- Contact form for submitting name, email, and message
- Sends data to the backend on form submission
- Shows confirmation once submitted

### 🔐 Admin Side
- View all user-submitted queries in a clean table
- Data is auto-fetched from the backend
- No database setup required — stores data in a JSON file

---

## 🗂️ Project Structure

📦 contact-us-app/
│
├── public/
│ ├── contact.html # Contact form page
│ ├── admin.html # Admin dashboard page
│ ├── style.css # CSS styles
│
├── queries.json # Stores submitted form data
├── server.js # Express server handling routes
├── package.json # Project config
└── README.md # Project documentation


## 📥 How to Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/contact-us-app.git
cd contact-us-app

Install dependencies

bash
Copy
Edit
npm install
Start the server

bash
Copy
Edit
node server.js
Open in browser

Visit: http://localhost:3000/contact.html to access the Contact form

Visit: http://localhost:3000/admin.html to view submitted queries

🌐 Deployment
You can deploy this project on platforms like:

Render

Railway

Vercel (frontend) + Render (backend)

Any Node.js-compatible hosting (like cPanel, DigitalOcean, Heroku)

📄 API Endpoints
POST /submit
Submits a new query from the user

Payload:

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello there!"
}
GET /queries
Returns an array of all submitted queries

👤 Author
Satyajeeth Ophir Peruka
Founder of SkillUpNation | Aspiring Full-Stack & Hardware Innovator

📜 License
This project is licensed under the MIT License — use it freely for learning or building your own apps!

🙌 Contributions
Pull requests and feedback are welcome. For major changes, please open an issue first to discuss what you’d like to change.

yaml
Copy
Edit

---

Let me know if you'd like a professional GitHub description or a logo badge section added.
