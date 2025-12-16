/**
 * Simulated SMS Service
 * In a real application, this would call an external API like Twilio, TextLocal, or AWS SNS.
 */
export const SmsService = {
  send: async (mobile: string, message: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Log to console for demonstration
    console.log(`%c[SMS SENT] To: ${mobile}`, 'color: green; font-weight: bold; font-size: 12px;');
    console.log(`%cMessage: ${message}`, 'color: #333; background: #eee; padding: 4px;');
    
    return true;
  }
};