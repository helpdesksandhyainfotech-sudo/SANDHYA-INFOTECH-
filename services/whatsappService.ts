/**
 * Simulated WhatsApp Service
 */
export const WhatsAppService = {
  send: async (mobile: string, message: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Log to console for demonstration
    console.log(`%c[WHATSAPP SENT] To: ${mobile}`, 'color: #25D366; font-weight: bold; font-size: 14px; padding: 4px; border: 1px solid #25D366; border-radius: 4px;');
    console.log(`%cMessage: ${message}`, 'color: #333; background: #e5ffe5; padding: 8px; border-radius: 4px;');
    
    return true;
  }
};