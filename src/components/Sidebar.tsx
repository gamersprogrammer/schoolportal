import React from 'react';
import { X, GraduationCap, LogOut } from 'lucide-react';
import { SIDEBAR_LINKS, ACCOUNT_LINKS } from '../data/mockdata';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, navigate }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-16 flex items-center px-6 border-b border-gray-100 justify-between">
          <div className="flex items-center space-x-2 text-blue-600">
            <GraduationCap className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-900">School Portal</span>
          </div>
          <button className="lg:hidden text-gray-500 hover:bg-gray-100 p-1 rounded-md" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          <div>
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Main</p>
            <nav className="space-y-1">
              {SIDEBAR_LINKS.map((link) => (
                <a 
                  key={link.id} 
                  href="#"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (link.id === 'dashboard') navigate('dashboard'); 
                    setIsOpen(false); 
                  }}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${link.id === 'dashboard' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</p>
            <nav className="space-y-1">
              {ACCOUNT_LINKS.map((link) => (
                <a 
                  key={link.id} 
                  href="#"
                  onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => navigate('landing')}
            className="flex items-center space-x-3 text-gray-600 hover:text-red-600 hover:bg-red-50 w-full px-3 py-2.5 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;