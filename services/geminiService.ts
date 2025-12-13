// import { GoogleGenAI } from "@google/genai";
// import { RESUME_DATA } from '../constants';

// // Initialize Gemini AI
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// export const generateBio = async (tone: 'professional' | 'creative' | 'funny'): Promise<string> => {
//   if (!process.env.API_KEY) {
//     return "API Key not configured. Using default bio.";
//   }

//   try {
//     const prompt = `
//       Write a short, engaging 'About Me' bio (max 150 words) for a portfolio website.
      
//       Person:
//       ${RESUME_DATA}
      
//       Tone: ${tone}
      
//       Output only the bio text.
//     `;

//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: prompt,
//     });

//     return response.text || "Could not generate bio.";
//   } catch (error) {
//     console.error("Error generating bio:", error);
//     return "Pasindu is a passionate Software Engineer and UI/UX Designer dedicated to building intuitive and impactful digital experiences.";
//   }
// };

// export const chatWithPortfolioAI = async (userMessage: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
//   if (!process.env.API_KEY) {
//     return "I'm sorry, my brain (API Key) is missing!";
//   }

//   try {
//     const chat = ai.chats.create({
//       model: 'gemini-2.5-flash',
//       config: {
//         systemInstruction: `
//           You are an AI Assistant for Pasindu Nimesh Subasingha's portfolio website.
//           Your goal is to answer questions about Pasindu based on the following information:
//           ${RESUME_DATA}
          
//           Guidelines:
//           - Be friendly, professional, and slightly witty.
//           - If asked about contact info, suggest looking at the contact section.
//           - Keep answers concise (under 50 words usually).
//           - If you don't know something, say "I'm not sure, but you can ask Pasindu directly!"
//         `,
//       },
//       history: history // Pass previous chat history for context
//     });

//     const result = await chat.sendMessage({ message: userMessage });
//     return result.text || "I'm speechless!";
//   } catch (error) {
//     console.error("Chat error:", error);
//     return "Sorry, I encountered a glitch in the matrix.";
//   }
// };


// We are switching to a local, rule-based response system to ensure the chatbot is 
// freely available without requiring an API key or incurring costs.

export const generateBio = async (tone: 'professional' | 'creative' | 'funny'): Promise<string> => {
  // Mocking the generation locally based on the requested tone
  const bios = {
    professional: "Pasindu Nimesh Subasingha is a Software Engineer and UI/UX Designer dedicated to building robust, user-centric digital solutions using modern technologies like React, Flutter, and .NET Core.",
    creative: "I weave logic with aesthetics. As a Software Engineer & Designer, I craft digital experiences that not only function flawlessly but breathe life into user interactions.",
    funny: "I turn coffee into code and bugs into features. Software Engineer by day, pixel perfectionist by night. I promise my code compiles (mostly)."
  };
  return bios[tone] || bios.professional;
};

export const chatWithPortfolioAI = async (userMessage: string, history: any[]): Promise<string> => {
  // Simulate a small network delay for a natural feel (typing effect timing)
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerMsg = userMessage.toLowerCase();

  // 1. Greetings
  if (lowerMsg.match(/\b(hi|hello|hey|yo|start|morning|evening)\b/)) {
     return "Hello! I'm Pasindu's digital assistant. I can tell you about his work, skills, or how to get in touch. What's on your mind?";
  }

  // 2. Contact Info
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('hire') || lowerMsg.includes('reach')) {
     return "You can connect with Pasindu via email at subasinghapasindunimesh@gmail.com or call him at +94 70 26 18 113. He's always open to interesting opportunities! Check the Contact section below.";
  }

  // 3. Skills / Tech Stack
  if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack') || lowerMsg.includes('language') || lowerMsg.includes('framework')) {
     return "Pasindu is a full-stack wizard! He works with Flutter, React.js, and .NET Core. He's also proficient in Python, Java, C#, and SQL, and he designs beautiful UIs in Figma.";
  }

  // 4. Projects / Work
  if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('experience') || lowerMsg.includes('portfolio') || lowerMsg.includes('app')) {
     return "He's built some impressive things, including a Sinhala Handwritten OCR mobile app, a Sales Management System, and the 'TheBae' mobile app. He also creates automated systems like Vizo Vote. Check the 'Work' section to see them!";
  }

  // 5. Education
  if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('university') || lowerMsg.includes('degree') || lowerMsg.includes('school')) {
     return "He is currently reading for his BSc(Hons) in Software Engineering at General Sir John Kotelawala Defence University (KDU).";
  }
  
  // 6. Location
  if (lowerMsg.includes('location') || lowerMsg.includes('where') || lowerMsg.includes('country')) {
     return "Pasindu is based in Colombo, Sri Lanka.";
  }

  // 7. Socials
  if (lowerMsg.includes('github') || lowerMsg.includes('linkedin') || lowerMsg.includes('behance')) {
     return "You can find his links in the Contact section! He is active on GitHub (PasinduNimeshS), LinkedIn, and Behance.";
  }

  // 8. Identity
  if (lowerMsg.includes('who are you') || lowerMsg.includes('bot') || lowerMsg.includes('ai')) {
      return "I'm a custom-built portfolio assistant running locally on this browser";
  }

  // Default response
  return "That's an interesting topic! While I'm just a simple bot trained on Pasindu's professional background, you can ask me about his 'skills', 'projects', or 'contact' info.";
};
