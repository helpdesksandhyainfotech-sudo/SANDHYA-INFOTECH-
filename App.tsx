import React, { useState, useEffect } from 'react';
import { 
  Users, FileText, Wallet, UserPlus, CheckCircle, X, 
  SendHorizontal, Video, Download, FileCheck, Upload, 
  AlertCircle, Check, LogOut, LayoutDashboard, FilePlus,
  History, CreditCard, Printer, ExternalLink,
  IdCard, FileBadge, Scroll, ShoppingBasket, Fingerprint,
  Briefcase, Sprout, Smartphone, UsersRound, FileSignature,
  Landmark, Wheat, Baby, ShieldAlert, ShieldCheck, Mail, MapPin, Building,
  MessageCircle, Phone, Search, QrCode, ArrowRight, Loader2,
  Shield, PlusCircle, Banknote, FileCheck2, UserCheck, Trash2, Edit, Save, RefreshCw
} from 'lucide-react';
import { User, Role, Application, ServiceType, PaymentRequest } from './types';
import { SERVICE_CONFIGS, STATUS_LINKS } from './constants';
import { StorageService } from './services/storage';
import { WhatsAppService } from './services/whatsappService';
import AIHelp from './components/AIHelp';

// --- Helper Functions for Icons & Themes ---

const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
};

const getServiceIcon = (type: ServiceType) => {
  switch (type) {
    case ServiceType.PAN_NEW:
    case ServiceType.PAN_UPDATE:
    case ServiceType.PAN_PRINT:
      return <IdCard size={32} />;
    case ServiceType.INCOME:
    case ServiceType.CASTE:
    case ServiceType.DOMICILE:
      return <FileBadge size={32} />;
    case ServiceType.RATION_NEW:
    case ServiceType.RATION_UPDATE:
    case ServiceType.RATION_PRINT:
      return <ShoppingBasket size={32} />;
    case ServiceType.VOTER_PRINT:
    case ServiceType.VOTER_PORTAL:
      return <FileSignature size={32} />;
    case ServiceType.AADHAAR_PRINT:
    case ServiceType.AADHAAR_LINK:
    case ServiceType.AADHAAR_PORTAL:
      return <Fingerprint size={32} />;
    case ServiceType.MNREGA_JOB_CARD:
    case ServiceType.JOB_NOTIFICATIONS:
    case ServiceType.SEVAYOJAN:
      return <Briefcase size={32} />;
    case ServiceType.PM_KISAN_NEW:
      return <Sprout size={32} />;
    case ServiceType.FAMILY_ID_NEW:
    case ServiceType.FAMILY_PRINT:
      return <UsersRound size={32} />;
    case ServiceType.CYBER_CRIME:
    case ServiceType.POLICE_FIR:
      return <ShieldAlert size={32} />;
    case ServiceType.CHARACTER_CERT:
      return <ShieldCheck size={32} />;
    case ServiceType.VIRASAT:
      return <Scroll size={32} />;
    case ServiceType.RTI:
      return <FileText size={32} />;
    default:
      return <FileText size={32} />;
  }
};

const getServiceStyle = (type: ServiceType) => {
  switch (type) {
    case ServiceType.PAN_NEW:
    case ServiceType.PAN_UPDATE:
    case ServiceType.PAN_PRINT:
      return 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-200';
    case ServiceType.INCOME:
    case ServiceType.CASTE:
    case ServiceType.DOMICILE:
      return 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-200';
    case ServiceType.RATION_NEW:
    case ServiceType.RATION_UPDATE:
    case ServiceType.RATION_PRINT:
      return 'bg-gradient-to-br from-orange-400 to-red-500 shadow-orange-200';
    case ServiceType.AADHAAR_PRINT:
    case ServiceType.AADHAAR_LINK:
    case ServiceType.AADHAAR_PORTAL:
      return 'bg-gradient-to-br from-slate-600 to-slate-800 shadow-slate-300';
    case ServiceType.PM_KISAN_NEW:
      return 'bg-gradient-to-br from-lime-500 to-green-600 shadow-lime-200';
    case ServiceType.VOTER_PRINT:
    case ServiceType.VOTER_PORTAL:
      return 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-purple-200';
    case ServiceType.MNREGA_JOB_CARD:
    case ServiceType.JOB_NOTIFICATIONS:
    case ServiceType.SEVAYOJAN:
      return 'bg-gradient-to-br from-amber-500 to-yellow-600 shadow-amber-200';
    case ServiceType.FAMILY_ID_NEW:
    case ServiceType.FAMILY_PRINT:
      return 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-200';
    case ServiceType.CYBER_CRIME:
    case ServiceType.POLICE_FIR:
      return 'bg-gradient-to-br from-red-600 to-rose-600 shadow-red-200';
    case ServiceType.CHARACTER_CERT:
      return 'bg-gradient-to-br from-cyan-600 to-blue-700 shadow-cyan-200';
    case ServiceType.VIRASAT:
      return 'bg-gradient-to-br from-fuchsia-600 to-pink-700 shadow-pink-200';
    case ServiceType.RTI:
      return 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-teal-200';
    default:
      return 'bg-gradient-to-br from-gray-500 to-gray-600';
  }
};

// --- Components ---

// Login Component
const Login = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const users = StorageService.getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      onLogin(user);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in-down">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200 mb-2 drop-shadow-sm">
                SANDHYA INFOTECH
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest border-b-2 border-cyan-400/30 inline-block pb-1">
                SERVICE PORTAL
            </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl animate-scale-up">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full shadow-inner ring-1 ring-white/30">
                <Users className="text-cyan-300 w-10 h-10" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-6 text-center">Login to Dashboard</h3>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-xl mb-4 text-sm flex items-center gap-2 backdrop-blur-sm">
              <AlertCircle size={16}/> {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-blue-200 uppercase mb-1.5 ml-1">Username / Agent ID</label>
              <input 
                type="text" 
                required
                className="w-full p-4 bg-white/5 border border-blue-300/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-blue-200/50 transition-all"
                placeholder="Enter your ID"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-200 uppercase mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                required
                className="w-full p-4 bg-white/5 border border-blue-300/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-blue-200/50 transition-all"
                placeholder="Enter your Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 mt-4">
              Secure Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-xs text-blue-200/60 flex flex-col items-center gap-1">
             <span>&copy; 2025 Sandhya Infotech. All Rights Reserved.</span>
             <span className="flex items-center gap-1"><Phone size={12}/> Admin Support: 9639614408</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Receipt Modal
const ReceiptModal = ({ app, onClose }: { app: Application, onClose: () => void }) => {
  const config = SERVICE_CONFIGS[app.serviceType];
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative overflow-hidden border-4 border-white">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-b-[40%]"></div>
          
          <div className="relative z-10 flex flex-col items-center mt-4">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 p-1">
                <div className="w-full h-full bg-green-50 rounded-full flex items-center justify-center border-2 border-green-500 border-dashed">
                    <Check size={40} className="text-green-600" strokeWidth={4} />
                </div>
             </div>
             <h2 className="text-2xl font-black text-slate-800">Payment Success!</h2>
             <p className="text-sm text-slate-500 font-bold opacity-75">Transaction Completed</p>
          </div>
          
          {/* Receipt Details */}
          <div className="bg-slate-50 rounded-2xl p-5 space-y-4 text-sm my-6 border border-slate-200 relative">
             <div className="absolute -left-2 top-1/2 w-4 h-4 bg-white rounded-full border-r border-slate-200"></div>
             <div className="absolute -right-2 top-1/2 w-4 h-4 bg-white rounded-full border-l border-slate-200"></div>

             <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-3">
                 <span className="text-slate-500 font-bold uppercase text-xs">Ref ID</span> 
                 <span className="font-mono font-bold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">{app.id}</span>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-slate-500">Service</span> 
                    <span className="font-bold text-slate-800 text-right">{config.label}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-500">Applicant</span> 
                    <span className="font-bold text-slate-800 uppercase text-right">{app.applicantName}</span>
                </div>
             </div>
             <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl border border-blue-100">
                 <span className="text-blue-700 font-bold">Total Paid</span> 
                 <span className="font-black text-2xl text-blue-700">₹{app.amountPaid}</span>
             </div>
             <div className="text-center pt-1">
                 <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">{new Date(app.submittedAt).toLocaleString()}</span>
             </div>
          </div>

          <div className="space-y-3">
             <button onClick={() => window.print()} className="w-full bg-slate-800 text-white py-3.5 rounded-xl font-bold hover:bg-slate-900 flex items-center justify-center gap-2 transition-all shadow-lg">
                <Printer size={18} /> Print Receipt
             </button>
             
             {config.externalLink && (
                <a 
                  href={config.externalLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2 animate-pulse transition-all"
                >
                    Proceed to Portal <ExternalLink size={18} />
                </a>
             )}
             
             <button onClick={onClose} className="w-full text-slate-400 text-xs hover:text-slate-600 py-2 font-bold uppercase tracking-widest">
                Close Window
             </button>
          </div>
       </div>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard = ({ currentUser, onLogout }: { currentUser: User, onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'applications'>('agents');
  const [agents, setAgents] = useState<User[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [refresh, setRefresh] = useState(0);

  // Modal States
  const [isAddAgentOpen, setIsAddAgentOpen] = useState(false);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [isProcessAppOpen, setIsProcessAppOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<User | null>(null);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Form States
  const [newAgent, setNewAgent] = useState({
    name: '', centerName: '', mobile: '', district: '', username: '', password: ''
  });
  const [topUpAmount, setTopUpAmount] = useState('');
  const [processData, setProcessData] = useState({ status: 'APPROVED', comments: '', pdfUrl: '' });

  useEffect(() => {
    setAgents(StorageService.getUsers().filter(u => u.role === Role.AGENT));
    setApplications(StorageService.getApplications());
  }, [refresh, activeTab]);

  const refreshData = () => setRefresh(prev => prev + 1);

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgent.username || !newAgent.password) return;

    // Validation: Check if username already exists
    const users = StorageService.getUsers();
    if (users.some(u => u.username === newAgent.username)) {
        alert("This Agent ID (Username) is already taken. Please choose another.");
        return;
    }
    
    const agent: User = {
      id: `AGT-${Date.now()}`,
      role: Role.AGENT,
      walletBalance: 0,
      ...newAgent
    };
    StorageService.saveUser(agent);
    setIsAddAgentOpen(false);
    setNewAgent({ name: '', centerName: '', mobile: '', district: '', username: '', password: '' });
    refreshData();
  };

  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAgent || !topUpAmount) return;
    const amount = parseFloat(topUpAmount);
    
    if (StorageService.transferBalance(currentUser.id, selectedAgent.id, amount)) {
      setIsTopUpOpen(false);
      setTopUpAmount('');
      setSelectedAgent(null);
      refreshData();
    } else {
      alert("Transfer failed. Please check admin wallet balance.");
    }
  };

  const handleProcessApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedApp) return;

    const updatedApp: Application = {
      ...selectedApp,
      status: processData.status as any,
      adminComments: processData.comments,
      pdfUrl: processData.pdfUrl
    };

    StorageService.updateApplication(updatedApp);
    
    // Notify via WhatsApp (Simulated)
    const mobile = selectedApp.data.mobile || selectedApp.data.mobileNumber;
    if (mobile) {
      WhatsAppService.send(mobile, `Your application ${selectedApp.id} has been ${processData.status}. ${processData.comments}`);
    }

    setIsProcessAppOpen(false);
    setSelectedApp(null);
    refreshData();
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <nav className="bg-slate-900 text-white p-4 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="bg-indigo-600 p-2 rounded-lg">
                <Shield size={24} />
             </div>
             <div>
                <h1 className="text-xl font-bold tracking-tight">Admin District Panel</h1>
                <p className="text-xs text-slate-400">Sandhya Infotech</p>
             </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:block text-right">
                <p className="text-xs font-bold text-slate-400 uppercase">Wallet Balance</p>
                <p className="text-xl font-mono text-emerald-400">₹{(currentUser.walletBalance || 0).toLocaleString()}</p>
             </div>
             <button 
                onClick={onLogout}
                className="bg-slate-800 hover:bg-rose-900 text-white p-2.5 rounded-full transition-colors"
                title="Logout"
             >
                <LogOut size={20} />
             </button>
          </div>
        </div>
      </nav>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Users size={24}/></div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">TOTAL</span>
              </div>
              <p className="text-3xl font-black text-slate-800">{agents.length}</p>
              <p className="text-sm text-slate-500 font-medium">Registered Agents</p>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><FileText size={24}/></div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">PENDING</span>
              </div>
              <p className="text-3xl font-black text-slate-800">{applications.filter(a => a.status === 'PENDING').length}</p>
              <p className="text-sm text-slate-500 font-medium">Applications to Review</p>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600"><CheckCircle size={24}/></div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">APPROVED</span>
              </div>
              <p className="text-3xl font-black text-slate-800">{applications.filter(a => a.status === 'APPROVED').length}</p>
              <p className="text-sm text-slate-500 font-medium">Processed Apps</p>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600"><Wallet size={24}/></div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">SYSTEM</span>
              </div>
              <p className="text-3xl font-black text-slate-800 truncate">₹{currentUser.walletBalance?.toLocaleString()}</p>
              <p className="text-sm text-slate-500 font-medium">Pool Balance</p>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-slate-200 pb-1">
           <button 
             onClick={() => setActiveTab('agents')} 
             className={`px-6 py-3 font-bold rounded-t-xl transition-all ${activeTab === 'agents' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Manage Agents
           </button>
           <button 
             onClick={() => setActiveTab('applications')} 
             className={`px-6 py-3 font-bold rounded-t-xl transition-all ${activeTab === 'applications' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Application Requests
           </button>
        </div>

        {activeTab === 'agents' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-fade-in">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Agent List</h2>
                <button 
                  onClick={() => setIsAddAgentOpen(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 flex items-center gap-2"
                >
                   <UserPlus size={18} /> Create New Agent
                </button>
             </div>
             
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                      <tr>
                         <th className="p-4 rounded-l-lg">Center Info</th>
                         <th className="p-4">Owner Name</th>
                         <th className="p-4">Login Credentials</th>
                         <th className="p-4">Wallet</th>
                         <th className="p-4 rounded-r-lg">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {agents.map(agent => (
                         <tr key={agent.id} className="hover:bg-slate-50">
                            <td className="p-4">
                               <div className="font-bold text-slate-800">{agent.centerName || 'No Center Name'}</div>
                               <div className="text-xs text-slate-500">{agent.district}</div>
                            </td>
                            <td className="p-4 font-medium text-slate-700">{agent.name}</td>
                            <td className="p-4 text-sm font-mono text-slate-600">
                               <div>ID: {agent.username}</div>
                               <div className="text-xs text-slate-400">Pass: {agent.password}</div>
                            </td>
                            <td className="p-4 font-bold text-emerald-600">₹{agent.walletBalance?.toLocaleString()}</td>
                            <td className="p-4">
                               <button 
                                 onClick={() => { setSelectedAgent(agent); setIsTopUpOpen(true); }}
                                 className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-green-200 flex items-center gap-1"
                               >
                                  <Banknote size={14} /> Add Funds
                               </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        )}

        {activeTab === 'applications' && (
           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Recent Applications</h2>
                <button onClick={refreshData} className="p-2 hover:bg-slate-100 rounded-full"><RefreshCw size={18}/></button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                       <tr>
                          <th className="p-4 rounded-l-lg">Ref ID</th>
                          <th className="p-4">Service</th>
                          <th className="p-4">Applicant</th>
                          <th className="p-4">Agent/Center</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 rounded-r-lg">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {applications.map(app => (
                          <tr key={app.id} className="hover:bg-slate-50">
                             <td className="p-4 font-mono text-xs font-bold text-slate-500">{app.id}</td>
                             <td className="p-4 text-sm font-bold text-slate-700">{SERVICE_CONFIGS[app.serviceType].label}</td>
                             <td className="p-4 text-sm font-medium">{app.applicantName}</td>
                             <td className="p-4 text-sm text-slate-600">{app.userName}</td>
                             <td className="p-4">
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                                   app.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : 
                                   app.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                }`}>
                                   {app.status}
                                </span>
                             </td>
                             <td className="p-4">
                                <button 
                                  onClick={() => { setSelectedApp(app); setProcessData({ status: app.status === 'PENDING' ? 'APPROVED' : app.status, comments: app.adminComments || '', pdfUrl: app.pdfUrl || '' }); setIsProcessAppOpen(true); }}
                                  className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-100 flex items-center gap-1"
                                >
                                   <Edit size={14} /> Process
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        )}
      </div>

      {/* Modals */}
      {isAddAgentOpen && (
         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
               <h3 className="text-xl font-bold mb-4">Create New Agent</h3>
               <form onSubmit={handleCreateAgent} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <input placeholder="Full Name" required className="p-3 border rounded-xl" value={newAgent.name} onChange={e => setNewAgent({...newAgent, name: e.target.value})} />
                     <input placeholder="Center/Shop Name" required className="p-3 border rounded-xl" value={newAgent.centerName} onChange={e => setNewAgent({...newAgent, centerName: e.target.value})} />
                     <input placeholder="Mobile Number" required className="p-3 border rounded-xl" value={newAgent.mobile} onChange={e => setNewAgent({...newAgent, mobile: e.target.value})} />
                     <input placeholder="District" required className="p-3 border rounded-xl" value={newAgent.district} onChange={e => setNewAgent({...newAgent, district: e.target.value})} />
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                     <p className="text-xs font-bold text-slate-400 uppercase mb-2">Login Credentials</p>
                     <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Agent Login ID" required className="p-3 border rounded-xl" value={newAgent.username} onChange={e => setNewAgent({...newAgent, username: e.target.value})} />
                        <input placeholder="Password" required className="p-3 border rounded-xl" value={newAgent.password} onChange={e => setNewAgent({...newAgent, password: e.target.value})} />
                     </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                     <button type="button" onClick={() => setIsAddAgentOpen(false)} className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold">Cancel</button>
                     <button type="submit" className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold">Create Agent</button>
                  </div>
               </form>
            </div>
         </div>
      )}

      {isTopUpOpen && selectedAgent && (
         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
             <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                   <Banknote size={32} />
                </div>
                <h3 className="text-xl font-bold mb-1">Add Balance</h3>
                <p className="text-slate-500 mb-6">Transfer funds to <span className="font-bold text-slate-800">{selectedAgent.centerName}</span></p>
                <form onSubmit={handleTopUp} className="space-y-4">
                   <input 
                      type="number" 
                      placeholder="Amount (₹)" 
                      required 
                      className="w-full text-center text-3xl font-bold p-4 border-2 border-slate-200 rounded-xl focus:border-green-500 outline-none" 
                      value={topUpAmount}
                      onChange={e => setTopUpAmount(e.target.value)}
                   />
                   <div className="flex gap-3">
                      <button type="button" onClick={() => setIsTopUpOpen(false)} className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold">Cancel</button>
                      <button type="submit" className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold">Transfer</button>
                   </div>
                </form>
             </div>
         </div>
      )}

      {isProcessAppOpen && selectedApp && (
         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
             <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-xl font-bold">Process Application</h3>
                   <button onClick={() => setIsProcessAppOpen(false)} className="p-2 hover:bg-slate-100 rounded-full"><X size={20}/></button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">Application Details</h4>
                         <div className="space-y-2 text-sm">
                            <p><span className="text-slate-500">Ref ID:</span> <span className="font-mono font-bold">{selectedApp.id}</span></p>
                            <p><span className="text-slate-500">Service:</span> <span className="font-bold">{SERVICE_CONFIGS[selectedApp.serviceType].label}</span></p>
                            <p><span className="text-slate-500">Applicant:</span> <span className="font-bold">{selectedApp.applicantName}</span></p>
                            <p><span className="text-slate-500">Agent:</span> {selectedApp.userName}</p>
                         </div>
                      </div>
                      
                      <div>
                         <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Action</label>
                         <select 
                           className="w-full p-3 border rounded-xl font-bold"
                           value={processData.status}
                           onChange={e => setProcessData({...processData, status: e.target.value})}
                         >
                            <option value="APPROVED">APPROVE</option>
                            <option value="REJECTED">REJECT</option>
                            <option value="PENDING">PENDING</option>
                         </select>
                      </div>

                      {processData.status === 'APPROVED' && (
                         <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Upload Certificate / PDF URL</label>
                            <input 
                               type="text" 
                               placeholder="https://..."
                               className="w-full p-3 border rounded-xl"
                               value={processData.pdfUrl}
                               onChange={e => setProcessData({...processData, pdfUrl: e.target.value})}
                            />
                            <p className="text-[10px] text-slate-400 mt-1">Paste a link to the generated document here.</p>
                         </div>
                      )}
                   </div>
                   
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 h-full overflow-y-auto max-h-[400px]">
                      <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">Form Data</h4>
                      <div className="space-y-3">
                         {Object.entries(selectedApp.data).map(([key, value]) => (
                            <div key={key} className="text-sm">
                               <p className="text-xs font-bold text-slate-400 uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                               {typeof value === 'string' && value.startsWith('data:image') ? (
                                  <div className="mt-1">
                                     <img src={value} alt={key} className="h-20 w-auto rounded border bg-white" />
                                     <a href={value} download={`doc-${key}.png`} className="text-xs text-blue-600 hover:underline block mt-1">Download Image</a>
                                  </div>
                               ) : (
                                  <p className="font-medium text-slate-700 break-words">{String(value)}</p>
                               )}
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="mb-6">
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Admin Comments / Rejection Reason</label>
                   <textarea 
                      className="w-full p-3 border rounded-xl h-24"
                      placeholder="Enter details for the agent..."
                      value={processData.comments}
                      onChange={e => setProcessData({...processData, comments: e.target.value})}
                   />
                </div>

                <button 
                   onClick={handleProcessApp} 
                   className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                   <Save size={18} /> Save & Notify Agent
                </button>
             </div>
         </div>
      )}
    </div>
  );
};

// Agent Dashboard
const AgentDashboard = ({ currentUser, onBalanceChange }: { currentUser: User, onBalanceChange: () => void }) => {
  const [activeTab, setActiveTab] = useState<'services' | 'history' | 'wallet' | 'status'>('services');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // Wallet & Payment State
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [walletStep, setWalletStep] = useState<'INPUT' | 'QR' | 'SUCCESS'>('INPUT');
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  
  // Receipt State
  const [lastReceipt, setLastReceipt] = useState<Application | null>(null);

  // Status Check State
  const [statusSearchId, setStatusSearchId] = useState('');
  const [foundApplication, setFoundApplication] = useState<Application | null>(null);
  const [showStatusResult, setShowStatusResult] = useState(false);

  useEffect(() => {
    // Load agent's applications
    const apps = StorageService.getApplications().filter(a => a.userId === currentUser.id);
    setApplications(apps);
  }, [currentUser.id, activeTab]);

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const config = SERVICE_CONFIGS[selectedService];
    if ((currentUser.walletBalance || 0) < config.price) {
      alert('Insufficient wallet balance!');
      return;
    }

    // Deduct balance
    StorageService.updateUserBalance(currentUser.id, -config.price);
    onBalanceChange();

    // Create Application
    const newApp: Application = {
      id: `APP-${Date.now()}`,
      serviceType: selectedService,
      userId: currentUser.id,
      userName: currentUser.name,
      applicantName: formData['applicantName'] || formData['firstName'] || 'Unknown',
      data: formData,
      status: 'PENDING',
      submittedAt: new Date().toISOString(),
      amountPaid: config.price
    };

    StorageService.saveApplication(newApp);

    // Send WhatsApp Notification to Customer
    const customerMobile = formData['mobile'] || formData['mobileNumber'];
    if (customerMobile) {
        const msg = `Dear ${newApp.applicantName}, your application for *${config.label}* has been submitted successfully.\nRef ID: *${newApp.id}*\nStatus: *PENDING*\nThank you,\n*SANDHYA INFOTECH*`;
        await WhatsAppService.send(customerMobile, msg);
    }
    
    // Show Receipt Modal
    setLastReceipt(newApp);
    
    // Reset Form
    setSelectedService(null);
    setFormData({});
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleFileChange = (field: string, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(field, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePaymentQR = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(rechargeAmount);
    if (!amount || amount <= 0) return;

    // Generate UPI URL
    // Format: upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&cu=INR
    const upiId = "9639614408@paytm"; // Admin's UPI
    const name = "Sandhya Infotech";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
    
    // Generate QR using an API
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`);
    setWalletStep('QR');
  };

  const verifyPayment = () => {
    setPaymentLoading(true);
    // Simulate Gateway verification time
    setTimeout(() => {
        const amount = parseFloat(rechargeAmount);
        const txnRef = `TXN-UPI-${Date.now()}`;
        
        // Auto Credit Wallet
        StorageService.autoAddBalance(currentUser.id, amount, txnRef);
        onBalanceChange(); // Update UI
        
        setPaymentLoading(false);
        setWalletStep('SUCCESS');
        
        // Redirect after success
        setTimeout(() => {
            setWalletStep('INPUT');
            setRechargeAmount('');
            setActiveTab('services'); // Redirect to Home Page
        }, 3000);
    }, 2000);
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const allApps = StorageService.getApplications(); 
    const app = allApps.find(a => a.id === statusSearchId);
    if (app) {
        setFoundApplication(app);
        setShowStatusResult(true);
    } else {
        alert('Application ID not found in system.');
        setFoundApplication(null);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen">
        {/* Receipt Modal Overlay */}
        {lastReceipt && (
            <ReceiptModal 
                app={lastReceipt} 
                onClose={() => {
                    setLastReceipt(null);
                    setActiveTab('history');
                }} 
            />
        )}

        {/* Status Result Modal */}
        {showStatusResult && foundApplication && (
             <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 border-2 border-white">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                        <h3 className="font-bold text-lg text-slate-800">Application Status</h3>
                        <button onClick={() => setShowStatusResult(false)} className="hover:bg-slate-100 p-1 rounded-full"><X size={20}/></button>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs font-bold text-slate-400 uppercase">Service</p>
                            <p className="font-bold text-slate-800">{SERVICE_CONFIGS[foundApplication.serviceType].label}</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex-1">
                                <p className="text-xs font-bold text-slate-400 uppercase">Applicant</p>
                                <p className="font-bold text-slate-700">{foundApplication.applicantName}</p>
                             </div>
                             <div className="flex-1">
                                <p className="text-xs font-bold text-slate-400 uppercase">Date</p>
                                <p className="font-medium text-slate-600 text-sm">{formatDate(foundApplication.submittedAt)}</p>
                             </div>
                        </div>
                        <div className="text-center py-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-black border shadow-sm inline-flex items-center gap-2
                                ${foundApplication.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                foundApplication.status === 'REJECTED' ? 'bg-rose-100 text-rose-700 border-rose-200' :
                                'bg-amber-100 text-amber-700 border-amber-200'
                            }`}>
                                {foundApplication.status === 'APPROVED' ? <CheckCircle size={16}/> : 
                                 foundApplication.status === 'REJECTED' ? <AlertCircle size={16}/> : <History size={16}/>}
                                {foundApplication.status}
                            </span>
                        </div>
                        {foundApplication.adminComments && (
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-blue-800">
                                <span className="font-bold block text-xs uppercase opacity-70 mb-1">Admin Remarks:</span>
                                {foundApplication.adminComments}
                            </div>
                        )}
                        {foundApplication.status === 'APPROVED' && foundApplication.pdfUrl && (
                             <a href={foundApplication.pdfUrl} download className="block w-full bg-slate-900 text-white text-center py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
                                <Download size={18}/> Download Certificate
                             </a>
                        )}
                    </div>
                </div>
             </div>
        )}

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-800">Agent Dashboard</h2>
              <p className="text-slate-500 font-medium">Welcome back, {currentUser.name}</p>
            </div>
            <div className="flex items-center gap-4">
                 {/* Admin Support Button */}
                 <a 
                   href="https://wa.me/919639614408" 
                   target="_blank" 
                   rel="noreferrer"
                   className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg shadow-green-200 items-center gap-2 hover:bg-green-600 transition-all"
                 >
                     <MessageCircle size={20} />
                     <div>
                         <div className="text-[10px] font-bold opacity-90 uppercase">Admin WhatsApp</div>
                         <div className="text-sm font-bold">9639614408</div>
                     </div>
                 </a>

                 {/* Center Info Badge */}
                 {currentUser.centerName && (
                     <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                         {currentUser.centerPhotoUrl ? (
                             <img src={currentUser.centerPhotoUrl} alt="Center" className="w-10 h-10 rounded-lg object-cover border border-slate-100" />
                         ) : (
                             <Building className="text-slate-400" />
                         )}
                         <div>
                             <p className="text-xs font-bold text-slate-400 uppercase">Center</p>
                             <p className="text-sm font-bold text-slate-700">{currentUser.centerName}</p>
                         </div>
                     </div>
                 )}

                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-4 rounded-2xl shadow-lg shadow-indigo-200 flex items-center gap-4 transform hover:scale-105 transition-transform cursor-default">
                    <div className="bg-white/20 p-2 rounded-full">
                    <Wallet size={24} />
                    </div>
                    <div>
                    <div className="text-xs font-bold opacity-80 uppercase tracking-wider">Wallet Balance</div>
                    <div className="text-2xl font-mono font-bold">₹{(currentUser.walletBalance || 0).toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Fancy Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl shadow-md border border-slate-100 inline-flex flex-wrap gap-1 justify-center">
            <button onClick={() => setActiveTab('services')} className={`px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'services' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>
                <LayoutDashboard size={18} /> Services
            </button>
            <button onClick={() => setActiveTab('status')} className={`px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'status' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>
                <Search size={18} /> Check Status
            </button>
            <button onClick={() => setActiveTab('history')} className={`px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'history' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>
                <History size={18} /> History
            </button>
            <button onClick={() => setActiveTab('wallet')} className={`px-4 md:px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'wallet' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>
                <CreditCard size={18} /> Wallet
            </button>
          </div>
        </div>

        {activeTab === 'services' && (
            <>
                {!selectedService ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
                        {Object.values(SERVICE_CONFIGS).map(service => (
                            <button 
                                key={service.type}
                                onClick={() => setSelectedService(service.type)}
                                className={`relative overflow-hidden group p-6 rounded-3xl shadow-lg text-left transition-all hover:-translate-y-2 hover:shadow-xl border border-white/10 ${getServiceStyle(service.type)}`}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 group-hover:rotate-12">
                                  {getServiceIcon(service.type)}
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                  <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-inner backdrop-blur-sm">
                                    {getServiceIcon(service.type)}
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-lg text-white leading-tight mb-1">{service.label}</h3>
                                    <p className="text-white/80 text-sm font-medium">Processing Fee: ₹{service.price}</p>
                                  </div>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-3xl mx-auto animate-scale-up">
                        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-2xl text-white shadow-md ${getServiceStyle(selectedService).split(' ')[0]}`}>
                                {getServiceIcon(selectedService)}
                              </div>
                              <div>
                                <h3 className="text-2xl font-black text-slate-800">{SERVICE_CONFIGS[selectedService].label}</h3>
                                <p className="text-slate-500 font-medium">Please fill all required details carefully</p>
                              </div>
                            </div>
                            <button onClick={() => setSelectedService(null)} className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2.5 rounded-full transition-colors">
                              <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleServiceSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {SERVICE_CONFIGS[selectedService].fields.map(field => (
                                <div key={field.name} className={`${field.type === 'address' || field.type === 'member_list' ? 'col-span-1 md:col-span-2' : ''}`}>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">
                                        {field.label} {field.required && <span className="text-rose-500">*</span>}
                                    </label>
                                    {field.type === 'select' ? (
                                        <select 
                                            required={field.required}
                                            className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-700"
                                            onChange={e => handleInputChange(field.name, e.target.value)}
                                        >
                                            <option value="">Select Option...</option>
                                            {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    ) : field.type === 'file' ? (
                                        <div className="relative group">
                                            <input 
                                                type="file"
                                                required={field.required}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                onChange={e => handleFileChange(field.name, e.target.files?.[0] || null)}
                                            />
                                            <div className="bg-slate-50 border-2 border-dashed border-slate-300 p-3.5 rounded-xl flex items-center justify-between group-hover:border-indigo-400 group-hover:bg-indigo-50 transition-colors">
                                                <span className="text-sm text-slate-500 font-medium truncate">
                                                    {formData[field.name] ? 'File Selected' : 'Choose File...'}
                                                </span>
                                                <Upload size={18} className="text-slate-400 group-hover:text-indigo-500"/>
                                            </div>
                                        </div>
                                    ) : field.type === 'member_list' ? (
                                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                            <p className="text-xs text-slate-400 mb-2 font-bold uppercase">Add Names (Comma Separated)</p>
                                            <textarea 
                                                className="w-full bg-white border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
                                                rows={3}
                                                placeholder="e.g. John Doe, Jane Doe"
                                                onChange={e => handleInputChange(field.name, JSON.stringify(e.target.value.split(',')))}
                                            />
                                        </div>
                                    ) : (
                                        <input 
                                            type={field.type}
                                            required={field.required}
                                            placeholder={field.placeholder}
                                            className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-700"
                                            onChange={e => handleInputChange(field.name, e.target.value)}
                                        />
                                    )}
                                </div>
                            ))}
                            </div>
                            
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-sm text-amber-800 flex items-start gap-3 mt-6">
                                <div className="bg-amber-100 p-1.5 rounded-full shrink-0 text-amber-600">
                                  <AlertCircle size={18} />
                                </div>
                                <div>
                                    <span className="font-bold text-base block mb-1">Confirm Payment</span> 
                                    A fee of <span className="font-bold">₹{SERVICE_CONFIGS[selectedService].price}</span> will be deducted from your wallet immediately.
                                    {SERVICE_CONFIGS[selectedService].externalLink && (
                                        <span className="block mt-2 font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block border border-blue-100">
                                            Note: You will be redirected to official portal after payment.
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-blue-700 shadow-xl shadow-indigo-200 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                                Pay & Submit Application
                            </button>
                        </form>
                    </div>
                )}
            </>
        )}

        {/* Status Check Tab */}
        {activeTab === 'status' && (
            <div className="animate-fade-in space-y-8">
                {/* Internal Search */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
                    <h3 className="text-xl font-black text-slate-800 mb-2 flex items-center gap-2">
                        <Search className="text-indigo-600" /> Check Application Status
                    </h3>
                    <p className="text-slate-500 mb-6 text-sm">Enter the Reference ID to check status of applications submitted here.</p>
                    <form onSubmit={handleStatusSearch} className="flex gap-4">
                        <input 
                            type="text" 
                            placeholder="Enter Reference ID (e.g. APP-173...)" 
                            className="flex-1 bg-slate-50 border border-slate-200 p-4 rounded-xl font-medium outline-none focus:ring-2 focus:ring-indigo-500"
                            value={statusSearchId}
                            onChange={e => setStatusSearchId(e.target.value)}
                            required
                        />
                        <button type="submit" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
                            Search
                        </button>
                    </form>
                </div>

                {/* External Links */}
                <div>
                     <h3 className="text-xl font-bold text-slate-700 mb-6 px-2 flex items-center gap-2">
                        <ExternalLink size={20}/> Official Government Tracking Links
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {STATUS_LINKS.map((link, idx) => (
                            <a 
                                key={idx} 
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all group flex items-center justify-between"
                            >
                                <div className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                                    {link.label}
                                </div>
                                <ExternalLink size={20} className="text-slate-400 group-hover:text-indigo-500" />
                            </a>
                        ))}
                     </div>
                </div>
            </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-wider">Service</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-wider">Applicant</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {applications.length === 0 ? (
                           <tr><td colSpan={5} className="p-10 text-center text-slate-400 italic">No history found. Start applying!</td></tr>
                        ) : (
                        applications.map(app => (
                            <tr key={app.id} className="hover:bg-slate-50/80 transition-colors group">
                                <td className="p-5">
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg text-white shadow-sm ${getServiceStyle(app.serviceType).split(' ')[0]}`}>
                                      {getServiceIcon(app.serviceType)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{SERVICE_CONFIGS[app.serviceType]?.label}</span>
                                  </div>
                                </td>
                                <td className="p-5 text-sm font-medium text-slate-600">{app.applicantName}</td>
                                <td className="p-5 text-xs text-slate-500 font-bold">{formatDate(app.submittedAt)}</td>
                                <td className="p-5">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-black border shadow-sm flex w-fit items-center gap-1.5 ${
                                        app.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                        app.status === 'REJECTED' ? 'bg-rose-100 text-rose-700 border-rose-200' :
                                        'bg-amber-50 text-amber-700 border-amber-200'
                                    }`}>
                                        <span className={`w-2 h-2 rounded-full ${
                                            app.status === 'APPROVED' ? 'bg-emerald-500' :
                                            app.status === 'REJECTED' ? 'bg-rose-500' :
                                            'bg-amber-500'
                                        }`}></span>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="p-5">
                                    {app.status === 'APPROVED' && app.pdfUrl && (
                                        <a href={app.pdfUrl} download className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-blue-100 transition-colors w-fit border border-blue-100">
                                            <Download size={14} /> Download File
                                        </a>
                                    )}
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
                </div>
            </div>
        )}

        {/* Wallet Tab - Updated with QR Payment Flow */}
        {activeTab === 'wallet' && (
             <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-scale-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <QrCode size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800">Instant Wallet Recharge</h3>
                </div>
                
                {walletStep === 'INPUT' && (
                    <form onSubmit={generatePaymentQR} className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800">
                            <p className="font-bold mb-1">How it works:</p>
                            <ul className="list-disc list-inside space-y-1 opacity-80">
                                <li>Enter Amount to add</li>
                                <li>Scan UPI QR Code</li>
                                <li>Instant Balance Credit</li>
                            </ul>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Enter Amount (₹)</label>
                            <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                            <input 
                                type="number" 
                                required
                                min="1"
                                className="w-full bg-slate-50 border border-slate-200 p-4 pl-8 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-lg text-slate-800"
                                placeholder="0.00"
                                value={rechargeAmount}
                                onChange={e => setRechargeAmount(e.target.value)}
                            />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                            Pay Now <ArrowRight size={20} />
                        </button>
                    </form>
                )}

                {walletStep === 'QR' && (
                    <div className="text-center animate-fade-in">
                        <p className="text-slate-500 font-medium mb-4">Scan using GPay, PhonePe, Paytm</p>
                        <div className="bg-white p-4 border-2 border-dashed border-indigo-200 rounded-xl inline-block mb-6 relative">
                             {qrCodeUrl ? (
                                <img src={qrCodeUrl} alt="UPI QR Code" className="w-48 h-48 object-contain" />
                             ) : (
                                <div className="w-48 h-48 bg-slate-100 flex items-center justify-center text-slate-400">Loading QR...</div>
                             )}
                             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-indigo-600 font-bold text-xs">
                                ₹{rechargeAmount}
                             </div>
                        </div>
                        
                        <p className="text-xs text-slate-400 mb-6">Completing payment securely...</p>

                        <button 
                            onClick={verifyPayment}
                            disabled={paymentLoading}
                            className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            {paymentLoading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <CheckCircle size={20} />
                            )}
                            {paymentLoading ? 'Verifying Payment...' : 'I Have Paid'}
                        </button>
                        
                        <button 
                            onClick={() => setWalletStep('INPUT')}
                            className="mt-4 text-slate-400 text-xs font-bold hover:text-slate-600"
                        >
                            Cancel Transaction
                        </button>
                    </div>
                )}

                {walletStep === 'SUCCESS' && (
                    <div className="text-center py-8 animate-scale-up">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                            <Check size={40} strokeWidth={4} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">Payment Successful!</h3>
                        <p className="text-slate-500 font-medium">₹{rechargeAmount} added to wallet.</p>
                        <p className="text-xs text-slate-400 mt-8">Redirecting to Home...</p>
                    </div>
                )}
             </div>
        )}
    </div>
  );
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const refreshUser = () => {
    if (user) {
       const updated = StorageService.getUser(user.id);
       if (updated) setUser(updated);
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen relative font-sans text-slate-900">
       <div className="fixed top-6 right-6 z-50 no-print flex gap-2">
       </div>

       {user.role === Role.ADMIN ? (
           <AdminDashboard currentUser={user} onLogout={handleLogout} />
       ) : (
           <div>
               <div className="fixed top-6 right-6 z-50 no-print flex gap-2">
                  <button 
                    onClick={handleLogout}
                    className="bg-white text-slate-500 p-3 rounded-full shadow-lg border border-slate-100 hover:bg-rose-50 hover:text-rose-600 transition-all group flex items-center gap-2"
                    title="Logout"
                  >
                      <LogOut size={20} />
                  </button>
               </div>
               <AgentDashboard currentUser={user} onBalanceChange={refreshUser} />
           </div>
       )}

       <AIHelp />
    </div>
  );
};

export default App;