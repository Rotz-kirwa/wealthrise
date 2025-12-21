import React from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
  if (!message) return null;
  const bg = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-gray-800';

  return (
    <div className={`fixed top-6 right-6 z-50 ${bg} text-white px-4 py-2 rounded shadow`}>
      <div className="flex items-center space-x-3">
        <div>{message}</div>
        <button onClick={onClose} className="ml-2 opacity-80">✕</button>
      </div>
    </div>
  );
};

export default Toast;
