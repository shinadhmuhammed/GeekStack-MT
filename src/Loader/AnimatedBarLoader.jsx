import React from 'react';

const AnimatedBarLoader = () => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-900 min-h-44">
      <div className="text-blue-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div className="flex flex-col space-y-2 flex-grow">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-full h-full bg-blue-500 rounded-full animate-loader-1"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-blue-500 rounded-full animate-loader-2"></div>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-3/5 h-full bg-blue-500 rounded-full animate-loader-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBarLoader;
