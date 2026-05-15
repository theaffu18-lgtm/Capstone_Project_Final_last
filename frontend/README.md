# Blog App

A full-stack MERN Blog Application with authentication, role-based authorization, article publishing, commenting system, admin moderation, and profile management.

---

# Features

## Authentication & Authorization

* JWT-based authentication
* Secure cookie authentication
* Role-based access control
* Protected routes
* Persistent login sessions

## User Features

* Register/Login
* Upload profile image
* View articles
* Read article details
* Add comments to articles
* Manage profile

## Author Features

* Create articles
* Edit articles
* Delete/restore articles
* Manage published articles
* View comments on articles

## Admin Features

* View all users
* View all authors
* Block/unblock users
* Platform moderation

## Article System

* Create articles
* Edit articles
* Soft delete/restore articles
* Categorized articles
* Comment system
* Dynamic article pages

## UI Features

* Responsive design
* Modern dashboard layout
* Toast notifications
* Loading states
* Protected navigation
* Reusable styling system

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Zustand
* React Hook Form
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary
* Cookie Parser
* CORS

---

# Folder Structure

## Frontend

```txt
src/
│
├── components/
├── store/
├── styles/
├── config/
├── constants/
├── services/
└── App.jsx
```

## Backend

```txt
backend/
│
├── routes/
├── models/
├── middleware/
├── services/
├── config/
├── controllers/
└── server.js
```

---

# Installation

## Clone Repository

git clone <repository-url>

---

# Frontend Setup

## Navigate to frontend

cd frontend

## Install dependencies
npm install

## Run frontend
npm run dev

Frontend runs on:
http://localhost:5173

---

# Backend Setup

## Navigate to backend

cd backend

## Install dependencies

npm install

## Start server

npm run dev

Backend runs on:
http://localhost:4000

---

# Environment Variables

Create a `.env` file in backend:

PORT=4000
MONGO_URI=your_mongodb_connection
SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

---

# Authentication Flow

1. User logs in
2. Backend generates JWT token
3. Token stored in HTTP-only cookie
4. Frontend sends requests with credentials
5. Middleware verifies token
6. Protected routes authorize user roles

---

# API Endpoints

## Auth Routes

### Register User

```http
POST /user-api/users
```

### Login

```http
POST /common-api/login
```

### Check Authentication

```http
GET /common-api/check-auth
```

---

# User Routes

### Get All Articles

```http
GET /user-api/articles
```

### Get Article By ID

```http
GET /user-api/article/:id
```

### Add Comment

```http
PUT /user-api/articles
```

---

# Author Routes

### Create Article

```http
POST /author-api/articles
```

### Update Article

```http
PUT /author-api/articles
```

### Toggle Article Status

```http
PATCH /author-api/articles/:id/status
```

---

# Admin Routes

### Get All Users

```http
GET /admin-api/users
```

### Block User

```http
PUT /admin-api/block
```

### Unblock User

```http
PUT /admin-api/unblock
```

---

# Security Features

* JWT authentication
* HTTP-only cookies
* Role-based middleware
* Protected routes
* Secure password storage
* Input validation
* Cookie-based authentication

---

# Deployment

## Frontend Deployment

Recommended:

* Vercel
* Netlify

## Backend Deployment

Recommended:

* Render
* Railway

## Database

* MongoDB Atlas

---

# Important Production Configurations

## CORS

```js
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}))
```

## Cookies

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
})
```

---

# Future Improvements

* React Query integration
* Markdown editor
* Article likes
* Saved articles
* Notifications
* Pagination
* Search functionality
* Rich text editor
* Dark mode
* Realtime comments
* Analytics dashboard
* Email verification
* Password reset

---

# Common Issues

## Unauthorized Error

Check:

* JWT secret key
* Cookie settings
* CORS configuration
* `withCredentials: true`

## Cloudinary Upload Failure

Check:

* Cloudinary environment variables
* Multer configuration

## MongoDB Connection Error

Check:

* MongoDB Atlas IP whitelist
* Connection string

---

# Author

Developed as a MERN full-stack project with role-based architecture a
