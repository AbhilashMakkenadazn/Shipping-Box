# 📦 Box Shipping Calculator (React + Node)

A **Single Page Application (SPA)** built using **ReactJS** (frontend) and **Node.js + Express** (backend) to manage and calculate box shipping costs per destination.  
It demonstrates clean architecture with state management, responsive design, and environment-based configuration.

---

## 🚀 Features

✅ Add new boxes with receiver, weight, color, and destination.  
✅ Inline validation — missing fields and invalid (negative) weights show errors.  
✅ Automatically defaults negative weights to **0**.  
✅ Calculates shipping cost dynamically based on destination multipliers.  
✅ Responsive and clean UI across devices.  
✅ Loads environment configuration from `.env`.  
✅ SPA with **Context API** for state management.  
✅ Two backend endpoints — one to save boxes, another to retrieve them.  
✅ Separation of concerns (MVC-style architecture).

---

## 🧩 Tech Stack

**Frontend:**

- ReactJS (Hooks, Context API)
- Axios (HTTP Client)
- CSS (Responsive, modern styling)

**Backend:**

- Node.js + Express
- CORS enabled
- In-memory store (no database)

---


## ⚙️ Project Setup

### 1️⃣ Clone the Repository

git clone https://github.com/AbhilashMakkenadazn/Shipping-Box.git
cd shopping-box

2️⃣ Setup Backend (Server)

cd server
npm install

Create a .env file inside the server folder:
PORT=5050

Start the backend server:
npm start
The backend will run at 👉 http://localhost:5050

| Method | Endpoint   | Description                  |
| ------ | ---------- | ---------------------------- |
| POST   | /api/boxes | Save a new box               |
| GET    | /api/boxes | Retrieve all boxes with cost |


3️⃣ Setup Frontend (Client)

cd ../client
npm install

Create a .env file inside the client folder:
REACT_APP_API_URL= http://localhost:5050/
REACT_APP_SWEDEN_MULTIPLIER=7.35
REACT_APP_CHINA_MULTIPLIER=11.53
REACT_APP_BRAZIL_MULTIPLIER=15.63
REACT_APP_AUSTRALIA_MULTIPLIER=50.09

Start the frontend:
npm start

-----


🧠 Application Flow
📝 Add Box Form

User enters:

Receiver Name

Weight (negative → defaults to 0)

Box Color (picker)

Destination

On submit → Validated → Sent via POST /api/boxes

📋 Box List View

Fetches all boxes from backend (GET /api/boxes)

Displays:

Receiver

Weight

Color preview

Destination

Calculated cost (based on destination multiplier)

-----

⚡ State Management

Implemented using React Context + useReducer

Stores all data in memory (no backend database)

Keeps the app fast and self-contained

-----

📱 Responsive Design

Works seamlessly across desktop, tablet, and mobile

Clean layout with CSS flexbox and media queries

------


🧱 Folder Structure
Always show details
box-shipping-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── state/
│   │   ├── views/
│   │   ├── App.js
│   │   └── index.js
│   └── .env
│
├── server/
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md

-------

🧪 Testing

You can manually test the API using Postman or curl:

Always show details
curl http://localhost:5050/api/boxes


Or test the complete UI in your browser:
👉 http://localhost:3000

-------


🧰 Environment Variables Summary
Key	Description	Example
PORT	Backend server port	5050
REACT_APP_API_URL	API base URL for frontend	http://localhost:5050/api

REACT_APP_SWEDEN_MULTIPLIER	Sweden cost multiplier	7.35
REACT_APP_CHINA_MULTIPLIER	China cost multiplier	11.53
REACT_APP_BRAZIL_MULTIPLIER	Brazil cost multiplier	15.63
REACT_APP_AUSTRALIA_MULTIPLIER	Australia cost multiplier	50.09

------

🧾 License

This project is open-source and available under the MIT License.


---------

🌐 Optional: Hosting

You can host the:

Frontend → Vercel / Netlify / GitHub Pages

Backend → Render / Railway / Vercel Functions

-------

👨‍💻 Author

Abhilash Chowdary
📧 abhilashmakkena987@example.com
💻 https://github.com/AbhilashMakkenadazn



