# Better Buy - A Product Recommendation System

## 🚀 Overview

This is a **MERN Stack**-based **Product Recommendation Platform** where users can:

- Add, update, and delete queries regarding products.
- View and interact with other users' queries.
- Add and remove recommendations for specific products.
- Modify and delete their comments.
- Browse recommendations tailored specifically for them.

## 🌍 Live Demo

🔗 [Live Website URL](#) _(https://ph-assignment-11-94a71.web.app/)_

## 🏗 Tech Stack

- **Frontend**: React.js (Vite), Material Tailwind, Axios
- **Backend**: Express.js, Node.js, MongoDB (Mongoose ODM)
- **Authentication**: Firebase Authentication, JWT
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)
- **Database**: MongoDB Atlas
- **State Management**: React Context API

## 🔑 Key Features

### 🔹 User Authentication

- Email/password-based login
- Google OAuth authentication
- JWT-based session management (tokens stored client-side)

### 🔹 Query Management

- Users can create, update, and delete their queries.
- Each query contains a **product name, brand, image URL, query title, and reason for boycotting.**
- Query data includes **user info, timestamp, and recommendation count**.

### 🔹 Recommendations System

- Users can recommend alternative products for queries.
- Recommendations include **title, product name, image, and reasoning**.
- Each query's recommendation count updates dynamically.

### 🔹 Query Details Page

- Displays full query information.
- Users can add recommendations.
- Displays all recommendations as comments.

### 🔹 Search & Filtering

- **Search functionality** to filter queries by product name.
- **Toggle grid layout** (1/2/3-column view) for the queries page.

### 🔹 Protected Routes & Authorization

- Private pages protected using JWT authentication.
- Prevents unauthorized access to critical routes.

### 🔹 Responsive Design

- Fully responsive across **mobile, tablet, and desktop**.
- Eye-pleasing color contrast and intuitive layout.

### 🔹 Error Handling & Security

- Secure environment variables for Firebase and MongoDB credentials.
- Proper error messages for failed login/registration.
- Custom **404 page** with a redirect to home.
