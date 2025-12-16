export enum Role {
  ADMIN = 'ADMIN',
  AGENT = 'AGENT'
}

export enum ServiceType {
  PAN_NEW = 'PAN_NEW',
  PAN_UPDATE = 'PAN_UPDATE',
  PAN_PRINT = 'PAN_PRINT',
  INCOME = 'INCOME',
  CASTE = 'CASTE',
  DOMICILE = 'DOMICILE',
  RATION_NEW = 'RATION_NEW',
  RATION_UPDATE = 'RATION_UPDATE',
  RATION_PRINT = 'RATION_PRINT',
  VOTER_PRINT = 'VOTER_PRINT',
  AADHAAR_PRINT = 'AADHAAR_PRINT',
  FAMILY_PRINT = 'FAMILY_PRINT',
  MNREGA_JOB_CARD = 'MNREGA_JOB_CARD',
  AADHAAR_LINK = 'AADHAAR_LINK',
  PM_KISAN_NEW = 'PM_KISAN_NEW',
  FAMILY_ID_NEW = 'FAMILY_ID_NEW',
  CYBER_CRIME = 'CYBER_CRIME',
  CHARACTER_CERT = 'CHARACTER_CERT',
  // New Free Services
  AADHAAR_PORTAL = 'AADHAAR_PORTAL',
  VOTER_PORTAL = 'VOTER_PORTAL',
  POLICE_FIR = 'POLICE_FIR',
  VIRASAT = 'VIRASAT',
  RTI = 'RTI',
  JOB_NOTIFICATIONS = 'JOB_NOTIFICATIONS',
  SEVAYOJAN = 'SEVAYOJAN'
}

export const ServiceLabels: Record<ServiceType, string> = {
  [ServiceType.PAN_NEW]: 'New PAN Card',
  [ServiceType.PAN_UPDATE]: 'PAN Card Amendment',
  [ServiceType.PAN_PRINT]: 'PAN Card Print (Manual)',
  [ServiceType.INCOME]: 'Income Certificate',
  [ServiceType.CASTE]: 'Caste Certificate',
  [ServiceType.DOMICILE]: 'Domicile Certificate',
  [ServiceType.RATION_NEW]: 'New Ration Card',
  [ServiceType.RATION_UPDATE]: 'Ration Card Amendment',
  [ServiceType.RATION_PRINT]: 'Ration Card Print',
  [ServiceType.VOTER_PRINT]: 'Voter Card Print',
  [ServiceType.AADHAAR_PRINT]: 'Aadhaar Card Print',
  [ServiceType.FAMILY_PRINT]: 'Family Card Print',
  [ServiceType.MNREGA_JOB_CARD]: 'MNREGA Job Card',
  [ServiceType.AADHAAR_LINK]: 'Aadhaar Mobile Link',
  [ServiceType.PM_KISAN_NEW]: 'PM Kisan New Registration',
  [ServiceType.FAMILY_ID_NEW]: 'New Family Card Apply',
  [ServiceType.CYBER_CRIME]: 'Cyber Crime Complaint',
  [ServiceType.CHARACTER_CERT]: 'Character Certificate',
  // New Services
  [ServiceType.AADHAAR_PORTAL]: 'Aadhaar Services (Free)',
  [ServiceType.VOTER_PORTAL]: 'Voter Services (Free)',
  [ServiceType.POLICE_FIR]: 'Police FIR (Free)',
  [ServiceType.VIRASAT]: 'Virasat Aavedan (Free)',
  [ServiceType.RTI]: 'RTI Online (Free)',
  [ServiceType.JOB_NOTIFICATIONS]: 'Job Notifications (Free)',
  [ServiceType.SEVAYOJAN]: 'Sevayojan Portal (Free)',
};

export interface User {
  id: string;
  username: string;
  password: string; // Plain text for demo purposes
  role: Role;
  name: string;
  district: string;
  walletBalance: number;
  mobile?: string;
  email?: string;
  centerName?: string;
  address?: string;
  centerPhotoUrl?: string;
  agentPhotoUrl?: string;
}

export interface Application {
  id: string;
  serviceType: ServiceType;
  userId: string;
  userName: string;
  applicantName: string;
  data: Record<string, string>;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
  amountPaid: number;
  adminComments?: string;
  pdfUrl?: string;
}

export interface Transaction {
  id: string;
  fromId: string;
  toId: string;
  amount: number;
  timestamp: string;
  type: 'TRANSFER' | 'DEDUCTION' | 'DEPOSIT';
  description: string;
}

export interface PaymentRequest {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  utr: string; // UTR or Reference Number
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  timestamp: string;
}

export interface ServiceConfig {
  type: ServiceType;
  label: string;
  price: number;
  externalLink?: string; // URL to open after payment/submission
  fields: { 
    name: string; 
    label: string; 
    type: string; 
    placeholder?: string; 
    required?: boolean;
    options?: string[];
  }[];
}