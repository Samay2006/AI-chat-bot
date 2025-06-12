# AI Fullstack Backend

This is the backend for an AI-powered application using Node.js, Express, MongoDB, and Google GenAI.

## Project Structure

```
backend/
  .env
  package.json
  src/
    app.js
    index.js
    controler/
      chat.js
      refreshtoken.js
    database/
      database.js
    router/
      api.js
    sevices/
      ai.js
      ruf.js
```

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the `backend/` directory with the following variables:
   ```
   googleapi=YOUR_GOOGLE_GENAI_API_KEY
   databaseapi=YOUR_MONGODB_CONNECTION_STRING
   port=7000
   ```

3. **Run the server:**
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## API Endpoints

- `GET /api/v1/user/chat?data=your_prompt`  
  Sends a prompt to the AI model and returns the response.

- `POST /api/v1/user/refreshtoken`  
  Refreshes the access token. Requires a JSON body with a `prompt` field.

## Technologies Used

- Node.js
- Express
- MongoDB (via Mongoose)
- Google GenAI API
- dotenv
- CORS
- cookie-parser

## License
