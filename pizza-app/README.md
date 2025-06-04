
```markdown
# 🍕 Pizza App

A simple pizza ordering application built with Node.js, Express, and React. The backend serves pizza product data while the frontend displays and interacts with the API.

---

# 📁 Project Structure

pizza-app/ <br>
│── backend-pizza-app/ # Node.js & Express backend <br>
│── frontend-pizza-app/ # React frontend
```

## 🚀 Backend - `backend-pizza-app`

```
# 🔹 Tech Stack:
- Node.js
- Express

# 📌 Features:
- Returns hardcoded values of pizza `id`, `name`, `image`, `price`, and `size`.
- Defines RESTful API endpoints.

# 📍 API Routes:
| Method | Endpoint | Description |
|--------|---------|------------|
| GET  | `/`                | Home Route
| GET  | `/api/products`    | Fetch all products
| POST | `/api/products`    | Fetch product by post(mention/send) ID
| GET  | `/api/product/:_id`| Fetch product by ID
```

---

## 🎨 Frontend - `frontend-pizza-app`

### 🔹 Tech Stack:

- React
- Tailwind CSS

### 📌 Features:

- Uses React components for UI.
- Fetches data from the backend using API requests.
- Styles using Tailwind CSS.

---

## 📌 Learning Concepts:

- API integration using React and Express.
- Handling CORS for cross-origin requests.
- Basic state management for frontend interactions.

---
