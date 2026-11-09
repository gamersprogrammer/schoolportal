import React from 'react';
import { BookOpen, ClipboardList, Calendar, CheckCircle, MoreVertical, Clock } from 'lucide-react';
import SummaryCard from '../components/SummaryCard';
import { MOCK_COURSES, MOCK_SCHEDULE, MOCK_ANNOUNCEMENTS } from '../data/mockdata';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Welcome back, John! <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 mt-1">Here's what's happening in your school portal today.</p>
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition">
          View Full Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <SummaryCard 
          icon={<BookOpen className="w-6 h-6 text-blue-600" />} 
          count="6" 
          label="Enrolled Courses" 
          bgColorClass="bg-blue-50"
        />
        <SummaryCard 
          icon={<ClipboardList className="w-6 h-6 text-green-600" />} 
          count="4" 
          label="Assignments" 
          bgColorClass="bg-green-50"
        />
        <SummaryCard 
          icon={<Calendar className="w-6 h-6 text-purple-600" />} 
          count="2" 
          label="Upcoming Events" 
          bgColorClass="bg-purple-50"
        />
        <SummaryCard 
          icon={<CheckCircle className="w-6 h-6 text-yellow-600" />} 
          count="92%" 
          label="Attendance" 
          bgColorClass="bg-yellow-50"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">My Courses</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_COURSES.map((course) => (
                <div key={course.id} className="p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${course.color} bg-opacity-20`}>
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                        <p className="text-xs text-gray-500">{course.instructor}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-600">Progress</span>
                      <span className="font-bold text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Performance Overview</h2>
            <div className="h-48 flex items-end justify-between space-x-2 text-xs text-gray-400 relative">
               <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between items-end pr-2 w-10">
                 <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
               </div>
               <div className="pl-10 w-full h-full flex items-end justify-between gap-2 pb-6 border-b border-gray-100">
                 {[40, 70, 60, 90, 85, 95].map((val, idx) => (
                    <div key={idx} className="w-full bg-blue-100 hover:bg-blue-200 rounded-t-sm relative group cursor-pointer transition-colors" style={{ height: `${val}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {val}%
                      </div>
                    </div>
                 ))}
               </div>
               <div className="absolute left-10 right-0 bottom-0 flex justify-between pt-2 px-4">
                 <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
               </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Schedule</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="p-2">
              {MOCK_SCHEDULE.map((item, idx) => (
                <div key={item.id} className={`flex items-start p-4 ${idx !== MOCK_SCHEDULE.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-2 min-w-[60px] text-center border border-gray-100 mr-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase">{item.month}</span>
                    <span className="text-lg font-bold text-gray-900 leading-tight">{item.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {item.time}
                    </p>
                    <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.typeColor}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Recent Announcements</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="p-6 space-y-6">
              {MOCK_ANNOUNCEMENTS.map((item) => (
                <div key={item.id} className="flex space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{item.desc}</p>
                    <p className="text-[11px] font-medium text-gray-400 mt-2">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;