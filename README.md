# Qrius - A Product Recommendation System

## 🌐 Live Demo

Visit the live site: [Qrius](https://ph-assignment-11-94a71.web.app/)

## 🚀 Project Overview

Qrius is a modern MERN Stack-based Product Recommendation Platform that connects users seeking product recommendations. Users can create queries about products, share experiences, and get recommendations from the community. The platform features a robust authentication system, real-time updates, and a responsive design that works seamlessly across all devices.

## 🎯 Key Features

- **📱 Responsive Design**

  - Fully responsive across mobile, tablet, and desktop devices
  - Intuitive layout with optimal color contrast
  - Grid/List view toggle for query displays

- **🔐 Authentication & Security**

  - Email/Password and Google OAuth sign-in
  - JWT-based session management
  - Protected routes for authenticated users
  - Secure credential handling

- **💬 Query Management**

  - Create, read, update, and delete queries
  - Rich query content with product details and images
  - Dynamic recommendation count updates
  - Search and filter functionality

- **👥 Community Features**

  - Add recommendations to queries
  - View and manage personal recommendations
  - Interactive community sections
  - Real-time updates for user interactions

- **🎨 UI/UX Features**
  - Dark/Light theme support
  - Animated transitions and loading states
  - Intuitive navigation system
  - Error handling with user feedback

## 🛠 Tech Stack

### Frontend

- **Framework**: React.js (Vite)
- **UI Libraries**:
  - Material Tailwind
  - TailwindCSS
  - React Icons
- **State Management**: React Context API
- **HTTP Client**: Axios

### Backend

- **Server**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth + JWT

### Deployment

- **Frontend**: Firebase Hosting
- **Backend**: Vercel
- **Database**: MongoDB Atlas

## 🚀 Local Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ph-assignment-11-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-messaging-sender-id
   VITE_appId=your-firebase-app-id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

Visit `http://localhost:5173` to see the application running locally.
