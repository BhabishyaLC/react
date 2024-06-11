import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-center items-center z-50 gap-4">
      <div className="border-8  border-t-8 border-blue-500 rounded-full w-20 h-20 animate-spin"></div>
      <div className="mt-4 text-lg font-semibold text-gray-700">Loading...</div>
    </div>
  );
};

export default Loading;
