

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey:process.env.googleapi });

async function main(data) {
  try {
     const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: data,
  });
  return response.text;
  } catch (error) {
    console.log("google api error",error.message)
    return "Ai error occurred"
  }
 
}

export {main}