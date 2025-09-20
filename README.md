# Auth Backend (Express + Postgres + JWT)

## Description
This is a backend API for user authentication using Node.js, Express, PostgreSQL, and JWT.  
It supports user signup, signin, and protected profile routes.

## Features
- User registration with validation
- Password hashing using bcrypt
- JWT-based authentication
- Protected profile route (`/api/me`)

## Project Structure
backend/
├─ src/
│ ├─ db.js # PostgreSQL connection
│ ├─ index.js # Main server
│ ├─ routes/
│ │ └─ users.js # Signup & signin routes
│ └─ middleware/
│ └─ auth.js # JWT authentication middleware
├─ .env # Environment variables (not pushed)
├─ package.json
├─ package-lock.json
└─ README.md


## Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/<username>/<repo-name>.git
cd day2-task2/backend


Install dependencies

npm install


Create .env file (copy from .env.example):

DB_USER=intern
DB_PASSWORD=intern123
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=day1db

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

PORT=3000


Run the server

npm run dev


Server will start at http://localhost:3000

API Endpoints
1. Sign Up
POST /api/users/signup
Body: { name, phone, email, password }

2. Sign In
POST /api/users/signin
Body: { email, password }

3. Profile (Protected)
GET /api/me
Header: Authorization: Bearer <token>

Testing (Postman / Browser)

Sign up with new email → should succeed
<img width="1920" height="1200" alt="Screenshot 2025-09-21 010723" src="https://github.com/user-attachments/assets/29b010e9-b66e-4ac4-8f86-b062f48b6325" />



Sign up with existing email → should return error
<img width="1920" height="1200" alt="Screenshot 2025-09-21 012938" src="https://github.com/user-attachments/assets/014d79b2-901c-4030-82ad-3bdf943962a8" />


Sign in with correct credentials → should succeed
<img width="1920" height="1200" alt="Screenshot 2025-09-21 011002" src="https://github.com/user-attachments/assets/25122192-06d2-47bc-95a6-7104d0a9b9c5" />

Sign in with wrong credentials → should return error
<img width="1920" height="1200" alt="Screenshot 2025-09-21 014137" src="https://github.com/user-attachments/assets/2512e31b-3d17-425a-94b4-c600fbf7fac8" />


Access protected route with token → should succeed
<img width="1920" height="1200" alt="Screenshot 2025-09-21 011523" src="https://github.com/user-attachments/assets/b9ebd454-c2e8-4565-91f6-d479f14a91ff" />
<img width="1920" height="1200" alt="Screenshot 2025-09-21 011603" src="https://github.com/user-attachments/assets/3e0c399e-0a69-4aa3-b6fe-7df281a07578" />




Access protected route without/invalid token → should return unauthorized
<img width="1920" height="1200" alt="Screenshot 2025-09-21 015900" src="https://github.com/user-attachments/assets/0f68502b-4b49-4d9b-935d-9ef216886c80" />


