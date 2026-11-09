import React from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';

export interface LandingPageProps {
    navigate: (view: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ navigate }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <div className="max-w-lg w-full bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <GraduationCap className="w-10 h-10 text-blue-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to School Portal</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Your unified academic hub. Access your enrolled courses, keep track of upcoming assignments, check your attendance, and stay updated with the latest school announcements.
      </p>
      <button 
        onClick={() => navigate('login')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-2"
      >
        <span>Go to Login</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default LandingPage;