💬 AI Chatbot Application
A full-stack AI chatbot application with a React frontend and Node.js/Express backend, integrated with Google GenAI API. It features secure user authentication, dynamic AI responses, and an elegant, responsive chat interface.

🖼️ Frontend
The frontend is built using React and Vite. It provides a user-friendly, responsive UI for interacting with the chatbot in real-time.

✨ Features
Responsive chat UI

Real-time communication with backend

Code highlighting (if code editor components used)

Handles loading, error, and empty states gracefully

Backend API integration via Axios or Fetch

🚀 Getting Started
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start development server:

bash
Copy
Edit
npm run dev
Visit:
Open http://localhost:5173 in your browser.

🔧 Configuration
Create a .env file in the frontend root to specify your backend URL:

ini
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000
🛠️ Backend
The backend is built with Node.js, Express, and MongoDB, and serves as the core API for chatbot interactions and authentication.

✨ Features
RESTful APIs for chat and auth

Google GenAI API integration for AI responses

MongoDB storage (chat history, user data)

Secure token handling (access & refresh)

CORS and cookies enabled for cross-origin access

📁 Project Structure (simplified)
pgsql
Copy
Edit
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── utils/
└── server.js
📡 API Endpoints
🔹 Chat
GET /api/v1/user/chat?data=your_prompt

Sends a user prompt to the AI model and returns a generated response.

🔹 Refresh Token
POST /api/v1/user/refreshtoken

Refreshes the access token.
Requires JSON body:

json
Copy
Edit
{
  "prompt": "your_refresh_token"
}
🧰 Technologies Used
Frontend:
React

Vite

Axios / Fetch API

Tailwind CSS

PrismJS (optional for syntax highlighting)

Backend:
Node.js

Express

MongoDB (Mongoose)

Google GenAI API

dotenv

CORS

cookie-parser

📄 License
This project is licensed under the ISC License.
