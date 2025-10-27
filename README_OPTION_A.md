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
