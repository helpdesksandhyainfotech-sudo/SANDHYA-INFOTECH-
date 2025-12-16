import { GoogleGenAI } from "@google/genai";
import { ServiceType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const GeminiService = {
  /**
   * Helps user understand requirements for a service
   */
  getServiceRequirements: async (serviceType: ServiceType): Promise<string> => {
    try {
      const model = 'gemini-2.5-flash';
      const prompt = `I need to apply for ${serviceType.replace('_', ' ')} in India. 
      Briefly list the mandatory documents required and the eligibility criteria in a clean bulleted list. 
      Keep it under 100 words.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      return response.text || "Could not fetch requirements at this time.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "AI Service is currently unavailable.";
    }
  },

  /**
   * Chat bot helper
   */
  askAssistant: async (query: string): Promise<string> => {
    try {
      const model = 'gemini-2.5-flash';
      const systemInstruction = `You are a helpful assistant for SANDHYA INFOTECH SERVICE PANEL web application. 
      Your users are either Agents (who fill forms) or Admins (who approve them).
      Answer questions about government services like PAN Cards, Ration Cards, Income Certificates, etc.
      Keep answers concise and professional.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: query,
        config: { systemInstruction }
      });

      return response.text || "I didn't understand that.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Sorry, I am having trouble connecting to the server.";
    }
  }
};