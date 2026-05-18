Overview

The Blog App Backend is built using Node.js, Express.js, and MongoDB.
It provides REST APIs for:

Authentication
Article Management
Comment System
Role-based Authorization
Admin Controls

The backend supports three roles:

USER
AUTHOR
ADMIN
Tech Stack
Backend Technologies
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Multer
Cloudinary
Cookie Parser
bcryptjs
Features
Authentication
User Registration
Login Authentication
JWT Token Generation
Cookie-based Authentication
Protected Routes
User Features
Read all articles
Read article by ID
Add comments to articles
Author Features
Create articles
Update articles
Delete articles
Restore deleted articles
Read authored articles
Admin Features
View all users
Block users
Unblock users
Manage platform access
Project Structure
backend/
│
├── APIs/
├── models/
├── middleware/
├── services/
├── config/
├── uploads/
├── server.js
└── package.json
Installation
Clone Repository
git clone <repository-url>
Move to Backend Folder
cd backend
Install Dependencies
npm install
Environment Variables

Create .env file:

PORT=4000

MONGO_DB_URL=your_mongodb_connection

JWT_SECRETKEY=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Run Server
npm run dev
Database Models
User Model

Stores:

First Name
Last Name
Email
Password
Role
Profile Image
Account Status
Article Model

Stores:

Author
Title
Category
Content
Comments
Active Status
Authentication Flow
User logs in
JWT token generated
Token stored in cookies
Protected APIs verify token
Role-based access granted
Middleware
verifyToken

Used for:

Authentication
Token validation
Role verification

Example:

verifyToken("AUTHOR")
checkAdmin

Ensures only admins access admin routes.

checkAuthor

Ensures authors access only their resources.

API Routes
User APIs
Method	Endpoint	Description
POST	/user-api/users	Register user
GET	/user-api/articles	Get all articles
GET	/user-api/article/:id	Get article by ID
PUT	/user-api/articles	Add comment
Author APIs
Method	Endpoint	Description
POST	/author-api/articles	Create article
GET	/author-api/articles/:authorId	Get author articles
GET	/author-api/article/:id	Get single article
PUT	/author-api/articles/:id	Edit article
PUT	/author-api/delete/:id	Delete article
PUT	/author-api/restore/:id	Restore article
Admin APIs
Method	Endpoint	Description
GET	/admin-api/users	Get all users
PUT	/admin-api/block/:userId	Block user
PUT	/admin-api/unblock/:userId	Unblock user
File Uploads

Multer is used for:

Profile image upload
Handling multipart/form-data

Cloudinary is used for:

Cloud image storage
Optimized image delivery
Comment System

Users can comment on articles.

Comments store:

User Reference
Comment Text

Example:

comments: [
  {
    user: ObjectId,
    comment: "Great article"
  }
]
Security Features
JWT Authentication
Password Hashing
Protected Routes
Role-based Authorization
Cookie Authentication
Error Handling

Centralized error handling middleware is used for:

Validation Errors
Authentication Errors
Server Errors
Future Improvements
Rich Text Editor
Search Functionality
Pagination
Notifications
Bookmark System
Like System
Real-time Comments
Dark Mode Support
Author

Developed by Harish Kodimala

License

This project is developed for educational and learning purposes.


### backend devolopment

1.create git repo
    git init

2.add .gitignore file

3.create .env file fror environment variables & read data from .env with "dotenv"

4.generate package.json
    npm init -y

5.install mongoose

6.connect to database

7.add middleware (body parser,error handler)

8.design schema and create model

9.design rest apis for all resources

###