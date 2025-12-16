import { User, Application, Role, Transaction, PaymentRequest } from '../types';

const USERS_KEY = 'dsp_users';
const APPS_KEY = 'dsp_applications';
const TXN_KEY = 'dsp_transactions';
const PAY_REQ_KEY = 'dsp_payment_requests';

// Initialize with default admin if not exists
const initStorage = () => {
  const usersStr = localStorage.getItem(USERS_KEY);
  let users: User[] = usersStr ? JSON.parse(usersStr) : [];

  const adminExists = users.some(u => u.role === Role.ADMIN);
  
  if (!adminExists) {
    const defaultAdmin: User = {
      id: 'admin-1',
      username: 'admin',
      password: 'password',
      role: Role.ADMIN,
      name: 'System Admin',
      district: 'Central',
      walletBalance: 9999999999999, // High balance as requested
      mobile: '9639614408', // Admin WhatsApp Number
      centerName: 'Head Office'
    };
    users.push(defaultAdmin);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } else {
    // Migration: Update admin details if needed
    const adminIndex = users.findIndex(u => u.role === Role.ADMIN);
    if (adminIndex !== -1) {
       let updated = false;
       if ((users[adminIndex].walletBalance || 0) < 1000000) {
         users[adminIndex].walletBalance = 9999999999999;
         updated = true;
       }
       // Ensure admin has the correct mobile number
       if (!users[adminIndex].mobile || users[adminIndex].mobile === '9999999999') {
         users[adminIndex].mobile = '9639614408';
         updated = true;
       }
       if (updated) {
         localStorage.setItem(USERS_KEY, JSON.stringify(users));
       }
    }
  }

  if (!localStorage.getItem(APPS_KEY)) {
    localStorage.setItem(APPS_KEY, JSON.stringify([]));
  }
  
  if (!localStorage.getItem(TXN_KEY)) {
    localStorage.setItem(TXN_KEY, JSON.stringify([]));
  }

  if (!localStorage.getItem(PAY_REQ_KEY)) {
    localStorage.setItem(PAY_REQ_KEY, JSON.stringify([]));
  }
};

initStorage();

export const StorageService = {
  getUsers: (): User[] => {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  },

  getUser: (id: string): User | undefined => {
    const users = StorageService.getUsers();
    return users.find(u => u.id === id);
  },

  saveUser: (user: User) => {
    const users = StorageService.getUsers();
    // Ensure walletBalance is set
    if (user.walletBalance === undefined) user.walletBalance = 0;
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  updateUser: (updatedUser: User) => {
    const users = StorageService.getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
  },

  deleteUser: (userId: string) => {
    let users = StorageService.getUsers();
    users = users.filter(u => u.id !== userId);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  updateUserBalance: (userId: string, amount: number): User | null => {
    const users = StorageService.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      // Initialize if undefined (migration for old data)
      const currentBalance = users[index].walletBalance || 0;
      users[index].walletBalance = currentBalance + amount;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      return users[index];
    }
    return null;
  },

  // Used for instant gateway simulation
  autoAddBalance: (userId: string, amount: number, txnRef: string): boolean => {
    const users = StorageService.getUsers();
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
      users[index].walletBalance = (users[index].walletBalance || 0) + amount;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      // Create Transaction Log
      const txn: Transaction = {
        id: txnRef,
        fromId: 'GATEWAY',
        toId: userId,
        amount: amount,
        timestamp: new Date().toISOString(),
        type: 'DEPOSIT',
        description: `Instant UPI Wallet Top-up`
      };
      StorageService.saveTransaction(txn);
      return true;
    }
    return false;
  },

  getTransactions: (userId?: string): Transaction[] => {
    const txns: Transaction[] = JSON.parse(localStorage.getItem(TXN_KEY) || '[]');
    if (userId) {
      return txns.filter(t => t.fromId === userId || t.toId === userId);
    }
    return txns;
  },

  saveTransaction: (txn: Transaction) => {
    const txns = StorageService.getTransactions();
    txns.unshift(txn);
    localStorage.setItem(TXN_KEY, JSON.stringify(txns));
  },

  transferBalance: (fromId: string, toId: string, amount: number): boolean => {
    const users = StorageService.getUsers();
    const fromIndex = users.findIndex(u => u.id === fromId);
    const toIndex = users.findIndex(u => u.id === toId);

    if (fromIndex !== -1 && toIndex !== -1) {
      const fromBalance = users[fromIndex].walletBalance || 0;
      if (fromBalance >= amount) {
        // Deduct from Admin
        users[fromIndex].walletBalance = fromBalance - amount;
        // Add to Agent
        users[toIndex].walletBalance = (users[toIndex].walletBalance || 0) + amount;
        
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Create Transaction Record
        const txn: Transaction = {
          id: `TXN-${Date.now()}`,
          fromId: fromId,
          toId: toId,
          amount: amount,
          timestamp: new Date().toISOString(),
          type: 'TRANSFER',
          description: `Fund Transfer from ${users[fromIndex].name} to ${users[toIndex].name}`
        };
        StorageService.saveTransaction(txn);

        return true;
      }
    }
    return false;
  },

  getApplications: (): Application[] => {
    return JSON.parse(localStorage.getItem(APPS_KEY) || '[]');
  },

  saveApplication: (app: Application) => {
    const apps = StorageService.getApplications();
    apps.unshift(app); // Add to top
    localStorage.setItem(APPS_KEY, JSON.stringify(apps));
  },

  updateApplication: (updatedApp: Application) => {
    const apps = StorageService.getApplications();
    const index = apps.findIndex(a => a.id === updatedApp.id);
    if (index !== -1) {
      apps[index] = updatedApp;
      localStorage.setItem(APPS_KEY, JSON.stringify(apps));
    }
  },

  // Payment Requests
  getPaymentRequests: (): PaymentRequest[] => {
    return JSON.parse(localStorage.getItem(PAY_REQ_KEY) || '[]');
  },

  savePaymentRequest: (req: PaymentRequest) => {
    const reqs = StorageService.getPaymentRequests();
    reqs.unshift(req);
    localStorage.setItem(PAY_REQ_KEY, JSON.stringify(reqs));
  },

  updatePaymentRequest: (updatedReq: PaymentRequest) => {
    const reqs = StorageService.getPaymentRequests();
    const index = reqs.findIndex(r => r.id === updatedReq.id);
    if (index !== -1) {
      reqs[index] = updatedReq;
      localStorage.setItem(PAY_REQ_KEY, JSON.stringify(reqs));
    }
  },

  approvePaymentRequest: (requestId: string): boolean => {
    const reqs = StorageService.getPaymentRequests();
    const index = reqs.findIndex(r => r.id === requestId);
    
    if (index !== -1 && reqs[index].status === 'PENDING') {
      const req = reqs[index];
      
      // Credit User Wallet
      const updatedUser = StorageService.updateUserBalance(req.userId, req.amount);
      
      if (updatedUser) {
        // Update Request Status
        req.status = 'APPROVED';
        reqs[index] = req;
        localStorage.setItem(PAY_REQ_KEY, JSON.stringify(reqs));

        // Create Transaction Log
        const txn: Transaction = {
          id: `DEP-${Date.now()}`,
          fromId: 'SYSTEM',
          toId: req.userId,
          amount: req.amount,
          timestamp: new Date().toISOString(),
          type: 'DEPOSIT',
          description: `Wallet Top-up via UPI (UTR: ${req.utr})`
        };
        StorageService.saveTransaction(txn);
        
        return true;
      }
    }
    return false;
  }
};