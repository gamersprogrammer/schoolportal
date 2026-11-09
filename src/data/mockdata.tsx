import React from 'react';
import { 
  Calendar, BookOpen, FileText, LayoutDashboard, 
  Users, Book, GraduationCap, Users2, CheckCircle, 
  PenTool, UserCircle, Settings 
} from 'lucide-react';

export const MOCK_COURSES = [
  { id: 1, title: 'Web Development', instructor: 'Mr. David Green', progress: 75, color: 'bg-blue-500', icon: '💻' },
  { id: 2, title: 'Data Structures', instructor: 'Mrs. Emily Johnson', progress: 60, color: 'bg-green-500', icon: '🧮' },
  { id: 3, title: 'UI/UX Design', instructor: 'Mr. Michael Brown', progress: 45, color: 'bg-purple-500', icon: '🎨' },
  { id: 4, title: 'Database Management', instructor: 'Miss Sarah Wilson', progress: 80, color: 'bg-yellow-500', icon: '🗄️' },
];

export const MOCK_SCHEDULE = [
  { id: 1, date: '24', month: 'MAY', title: 'Web Development Lecture', time: '09:00 AM - 11:00 AM', type: 'Online', typeColor: 'text-blue-600 bg-blue-100' },
  { id: 2, date: '25', month: 'MAY', title: 'Data Structures Lab', time: '11:00 AM - 01:00 PM', type: 'Lab', typeColor: 'text-green-600 bg-green-100' },
  { id: 3, date: '28', month: 'MAY', title: 'UI/UX Design Lecture', time: '02:00 PM - 04:00 PM', type: 'Online', typeColor: 'text-blue-600 bg-blue-100' },
  { id: 4, date: '30', month: 'MAY', title: 'Database Management Lecture', time: '10:00 AM - 11:30 AM', type: 'Room 207', typeColor: 'text-yellow-700 bg-yellow-100' },
];

export const MOCK_ANNOUNCEMENTS = [
  { id: 1, title: 'Mid-Term Exam Schedule Released', desc: 'The mid-term exam schedule is now available. Please check the exams page for details.', date: 'May 20, 2026', icon: <FileText className="w-5 h-5 text-blue-600" /> },
  { id: 2, title: 'Holiday Notice', desc: 'School will remain closed on May 29th on account of Memorial Day.', date: 'May 18, 2026', icon: <Calendar className="w-5 h-5 text-green-600" /> },
  { id: 3, title: 'New Course Material Added', desc: 'New materials have been added to your Web Development course. Check it out!', date: 'May 15, 2026', icon: <BookOpen className="w-5 h-5 text-purple-600" /> },
];

export const SIDEBAR_LINKS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" /> },
  { id: 'courses', label: 'Courses', icon: <Book className="w-5 h-5" /> },
  { id: 'teachers', label: 'Teachers', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'classes', label: 'Classes', icon: <Users2 className="w-5 h-5" /> },
  { id: 'exams', label: 'Exams', icon: <FileText className="w-5 h-5" /> },
  { id: 'attendance', label: 'Attendance', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'assignments', label: 'Assignments', icon: <PenTool className="w-5 h-5" /> },
];

export const ACCOUNT_LINKS = [
  { id: 'profile', label: 'Profile', icon: <UserCircle className="w-5 h-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
];