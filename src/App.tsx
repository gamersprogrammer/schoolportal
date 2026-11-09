import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const navigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (currentView === 'landing') {
    return <LandingPage navigate={navigate} />;
  }

  if (currentView === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        navigate={navigate} 
      />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 transition-all duration-300">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto">
          {currentView === 'dashboard' && <DashboardPage />}
        </main>
      </div>
    </div>
  );
};

export default App;