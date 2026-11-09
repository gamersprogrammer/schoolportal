import React from 'react';
import { GraduationCap } from 'lucide-react';
import type { LandingPageProps } from './LandingPage';


const LoginPage: React.FC<LandingPageProps> = ({ navigate }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">School Portal</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Student Login</h2>
        <p className="text-gray-500 text-sm mt-1">Please enter your credentials to continue</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); navigate('dashboard'); }} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            defaultValue="john.student@school.edu"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            defaultValue="password123"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
            required
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-600 cursor-pointer">
            <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-600" defaultChecked />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline font-medium">Forgot Password?</a>
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm mt-2"
        >
          Login to Portal
        </button>
      </form>
    </div>
  </div>
);

export default LoginPage;