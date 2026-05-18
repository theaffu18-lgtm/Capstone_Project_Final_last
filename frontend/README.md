Blog App

Overview

Blog App is a modern full-stack blogging platform where:

Authors can create and manage articles
Users can explore and comment on articles
Admins can manage users and authors

This frontend is built using React and provides a responsive and user-friendly interface for all roles.

Tech Stack
Frontend Technologies
React.js
React Router DOM
Axios
Tailwind CSS
Zustand (State Management)
React Hot Toast
Features
Authentication
User Signup
User Login
Role-based Authentication
JWT Authentication using Cookies
Protected Routes
User Features
View all articles
Read article by ID
Add comments on articles
View profile
Responsive UI
Author Features
Create articles
Edit articles
Delete/Restore articles
View authored articles
View comments on articles
Admin Features
View all users
Block users
Unblock users
Manage platform users
Folder Structure
src/
│
├── components/
├── pages/
├── store/
├── styles/
├── config/
├── routes/
└── assets/
Installation
Clone Repository
git clone <repository-url>
Move to Frontend Folder
cd frontend
Install Dependencies
npm install
Environment Variables

Create .env file:

VITE_API_BASE_URL=http://localhost:4000
Run Development Server
npm run dev
Main Pages
Page	Description
Home	Landing page
Signin	User login
Signup	User registration
UserProfile	User dashboard
AuthorProfile	Author dashboard
AdminProfile	Admin dashboard
ArticleByID	Single article view
API Integration

Frontend communicates with backend using Axios.

Example:

axios.get(`${API_BASE}/user-api/articles`, {
  withCredentials: true
})
State Management

Zustand is used for:

Authentication state
Current user details
Loading state

Example:

const currentUser = useAuth(
  state => state.currentUser
)
Routing

React Router DOM is used for navigation.

Example:

<Route
  path="/article/:id"
  element={<ArticleByID />}
/>
Styling

Tailwind CSS is used for:

Responsive layouts
Modern UI components
Utility-first styling
Security
JWT Authentication
Protected Routes
Role-based Authorization
Secure Cookie Authentication
Future Improvements
Rich Text Editor
Like & Bookmark System
Search & Filter
Notifications
Dark Mode
Pagination
Markdown Support
Author

Developed by Harish Kodimala

License

This project is developed for educational and learning purposes.