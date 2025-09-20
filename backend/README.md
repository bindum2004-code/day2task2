# Auth Backend (Express + Postgres + JWT)

## Description
This is a backend API for user authentication using Node.js, Express, PostgreSQL, and JWT.  
It supports user signup, signin, and protected profile routes.

## Features
- User registration with validation
- Password hashing using bcrypt
- JWT-based authentication
- Protected profile route (`/api/me`)

## Setup

1. Clone the repository
```bash
git clone https://github.com/bindum2004-code/day2task2

Install dependencies

npm install


Create .env file in the root directory

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

API Endpoints
Sign Up
POST /api/users/signup
Body: { name, phone, email, password }

Sign In
POST /api/users/signin
Body: { email, password }

Profile (Protected)
GET /api/me
Header: Authorization: Bearer <token>

Testing

Use Postman to test API endpoints.

Sign up with new email → success

Sign up with existing email → error

Sign in with correct credentials → success

Sign in with wrong credentials → error

Access protected routes with token → success

Access protected routes without/invalid token → unauthorized