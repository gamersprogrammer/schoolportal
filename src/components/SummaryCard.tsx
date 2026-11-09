import React from 'react';

interface SummaryCardProps {
    icon: React.ReactNode;
    count: string | number;
    label: string;
    bgColorClass: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({icon, count, label, bgColorClass}) => (
    <div className='bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center space-x-4'>
        <div className={`p-4 rounded-xl flex-shrink-0 ${bgColorClass}`}>
            {icon}
        </div>
        <div>
            <h3 className='text-2xl font-bold text-gray-900'>{count}</h3>
            <p className='text-sm font-medium text-gray-500'>{label}</p>
        </div>
    </div>
);

export default SummaryCard;