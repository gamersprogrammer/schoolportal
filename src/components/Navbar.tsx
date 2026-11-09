import React from 'react';
import {Menu, Search, Bell } from 'lucide-react';

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
    <header className='h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30'>
        <div className="flex items-center flex-1">
            <button
                onClick={toggleSidebar}
                className='p-2 mr-3 -ml-2 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden'
            >
                <Menu className="w-6 h-6" />
            </button>

            <div className='max-w-md w-full hidden md:flex items-center relative'>
                <Search className="w-4 h-4 text-gray-400 absolute left-3" />
                <input
                    type="text"
                    placeholder='Search anything...'
                    className='w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-sm'
                />
            </div>
        </div>
        
        <div className='flex items-center space-x-4 lg:space-x-6'>
            <button
                className='md:hidden text-gray-500 hover:text-gray-700'
            >
                <Search className="w-5 h-5" />
            </button>

            <button 
                className="relative text-gray-500 hover:text-gray-700 transition-colors"
            >
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            <div className='w-px h-6 bg-gray-200 hidden sm:block'></div>

            <div className="flex items-center space-x-3 cursor-pointer">
                <div className="hidden sm:block text-right">
                    <p className="text-sm font-semibold text-gray-700">John Student</p>
                    <p className="text-xs text-gray-500">Student</p>
                </div>
                <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede" 
                    alt="John Student" 
                    className="w-10 h-10 rounded-full border border-gray-200 bg-gray-100"
                />
            </div>
        </div>
    </header>
);

export default Navbar;