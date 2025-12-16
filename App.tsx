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
  Shield, PlusCircle, Banknote, FileCheck2, UserCheck, Trash2, Edit, Save, RefreshCw, Copy,
  Home, Menu, ChevronRight, Globe
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

// Public Home Page Component
const PublicLanding = ({ onNavigateLogin }: { onNavigateLogin: () => void }) => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<Application | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const apps = StorageService.getApplications();
    const found = apps.find(a => a.id === searchId);
    if (found) {
      setSearchResult(found);
      setShowResult(true);
    } else {
      alert("Application not found. Please check Ref ID.");
      setSearchResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                 <Globe size={24} />
              </div>
              <div>
                 <h1 className="text-xl font-black text-slate-800 leading-none">DIGITAL SEVA</h1>
                 <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">District Portal</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <a href="#services" className="hidden md:block text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#track" className="hidden md:block text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">Track Status</a>
              <button 
                onClick={onNavigateLogin}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-colors flex items-center gap-2 shadow-lg"
              >
                Agent Login <ChevronRight size={16} />
              </button>
           </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90 z-10"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
         
         <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
            <span className="bg-blue-500/20 text-blue-200 border border-blue-400/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
               Official District Service Portal
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
               Government Services <br/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Made Simple & Accessible</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-10">
               Apply for PAN Card, Ration Card, Income Certificate, and more from the comfort of your home or nearest Digital Seva Kendra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg">
                <a href="#track" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
                   <Search size={20} /> Track Application
                </a>
                <a href="#services" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors border border-indigo-500 shadow-lg shadow-indigo-900/50">
                   View Services
                </a>
            </div>
         </div>
      </div>

      {/* Track Status Section */}
      <section id="track" className="py-20 bg-slate-50">
         <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 text-center -mt-32 relative z-30">
               <div className="inline-flex p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
                  <Search size={32} />
               </div>
               <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">Track Application Status</h2>
               <p className="text-slate-500 mb-8">Enter your Reference ID to check the real-time status of your request.</p>
               
               <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                  <input 
                     type="text" 
                     placeholder="Enter Reference ID (e.g. APP-173...)" 
                     className="flex-1 p-4 border-2 border-slate-200 rounded-xl font-bold text-lg outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all uppercase placeholder:normal-case"
                     value={searchId}
                     onChange={e => setSearchId(e.target.value)}
                     required
                  />
                  <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-lg">
                     Check Status
                  </button>
               </form>

               {showResult && searchResult && (
                  <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left animate-fade-in">
                     <div className="flex justify-between items-start mb-4 border-b border-slate-200 pb-4">
                        <div>
                           <p className="text-xs font-bold text-slate-400 uppercase">Service Type</p>
                           <p className="font-bold text-slate-800">{SERVICE_CONFIGS[searchResult.serviceType].label}</p>
                        </div>
                        <div className="text-right">
                           <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase ${
                                searchResult.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' :
                                searchResult.status === 'REJECTED' ? 'bg-rose-100 text-rose-700' :
                                'bg-amber-100 text-amber-700'
                           }`}>
                              <span className={`w-2 h-2 rounded-full ${
                                 searchResult.status === 'APPROVED' ? 'bg-emerald-500' :
                                 searchResult.status === 'REJECTED' ? 'bg-rose-500' :
                                 'bg-amber-500'
                              }`}></span>
                              {searchResult.status}
                           </span>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <p className="text-xs font-bold text-slate-400 uppercase">Applicant</p>
                           <p className="font-medium text-slate-700">{searchResult.applicantName}</p>
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-400 uppercase">Submitted Date</p>
                           <p className="font-medium text-slate-700">{formatDate(searchResult.submittedAt)}</p>
                        </div>
                     </div>
                     {searchResult.adminComments && (
                        <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm text-blue-800 border border-blue-100">
                           <span className="font-bold">Remarks:</span> {searchResult.adminComments}
                        </div>
                     )}
                     {searchResult.status === 'APPROVED' && searchResult.pdfUrl && (
                        <a href={searchResult.pdfUrl} className="mt-4 block w-full bg-emerald-500 text-white text-center py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
                           Download Certificate
                        </a>
                     )}
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Everything You Need</h2>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Object.values(SERVICE_CONFIGS).map(service => (
               <div key={service.type} className="group bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:border-indigo-100 transition-all text-center">
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform ${getServiceStyle(service.type)}`}>
                     {getServiceIcon(service.type)}
                  </div>
                  <h3 className="font-bold text-slate-700 text-sm">{service.label}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <h2 className="text-2xl font-black text-white mb-2">SANDHYA INFOTECH</h2>
               <p className="text-sm">Empowering citizens with digital services.</p>
            </div>
            <div className="flex gap-8 text-sm font-bold">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; 2025 Sandhya Infotech. All Rights Reserved.
         </div>
      </footer>
    </div>
  );
};

// Login Component
const Login = ({ onLogin, onBack }: { onLogin: (user: User) => void, onBack: () => void }) => {
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
      setError('Invalid credentials. Please check your Agent ID or contact Admin.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Back Button */}
      <button onClick={onBack} className="absolute top-6 left-6 text-white/70 hover:text-white flex items-center gap-2 z-20 font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-colors">
         <ArrowRight size={18} className="rotate-180" /> Back to Home
      </button>

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
                DISTRICT PANEL
            </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl animate-scale-up">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full shadow-inner ring-1 ring-white/30">
                <Users className="text-cyan-300 w-10 h-10" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-6 text-center">Secure Login</h3>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-xl mb-4 text-sm flex items-center gap-2 backdrop-blur-sm">
              <AlertCircle size={16}/> {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-blue-200 uppercase mb-1.5 ml-1">User ID / Agent ID</label>
              <input 
                type="text" 
                required
                className="w-full p-4 bg-white/5 border border-blue-300/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-blue-200/50 transition-all"
                placeholder="Enter Login ID"
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
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 mt-4">
              Secure Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-xs text-blue-200/60 flex flex-col items-center gap-1">
             <span>&copy; 2025 Sandhya Infotech. District Panel.</span>
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
             <div className="text-center