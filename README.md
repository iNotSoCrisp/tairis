# Tairis

**AI-Powered First Aid & Medical Emergency Assistant**

Tairis is a web application designed to provide immediate guidance during medical emergencies. It leverages artificial intelligence and real-time location services to help users make informed decisions quickly.

## Live Demo
- **Frontend:** https://tairis-ecru.vercel.app/
- **Backend:** https://tairis-server-production.up.railway.app

## Overview
The primary goal of Tairis is to bridge the gap between an emergency occurrence and professional medical arrival. By providing structured triage advice and locating nearby medical facilities, Tairis aims to assist users in managing critical situations effectively.

## Key Features

- **AI Emergency Assistant**: A specialized chatbot named "Tairis", powered by Google's Gemini 2.5 Flash model. It provides structured first-aid advice, prioritizes safety, and instructs users to contact emergency services for life-threatening conditions.
- **Nearby Medical Facilities**: Integrates with mapping services to locate doctors, hospitals, and pharmacies in the user's vicinity.
- **Secure Authentication**: User account management and authentication handled via Supabase.
- **Responsive Design**: A modern, dark-themed interface optimized for both desktop and mobile devices.

## Technology Stack

### Frontend
- **React (Vite)**: For building a fast and interactive user interface.
- **CSS**: Custom styling using modern CSS variables and layouts.
- **React Leaflet**: For rendering interactive maps.
- **Vercel**: For frontend hosting and deployment.

### Backend
- **Node.js & Express.js**: For the server-side API and logic.
- **Supabase**: For database management and authentication.
- **Google Gemini API**: For the generative AI capabilities.
- **Railway**: For backend hosting and deployment.

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)
- A Supabase project (for database URL and API key)
- A Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/mrgear111/tairis.git
cd tairis
```

### 2. Backend Configuration
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=3000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Configuration
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The application should now be running at `http://localhost:5173`.

## Project Structure

- **backend/**: Contains the Express server, API routes, controllers, and configuration files.
- **frontend/**: Contains the React application, components, pages, and styles.

## License
MIT License