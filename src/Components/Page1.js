import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  const onEnrollClick = () => {
    navigate('/chatbot');
  };
  return (
  <div className="flex flex-col items-center justify-center h-screen bg-sky-500 text-white">
    <p className="text-2xl mb-6">Enter into Student Info System</p>
    <button
      className="bg-white text-blue-500 py-2 px-4 rounded"
      onClick={onEnrollClick}
    >
      Enroll Now!
    </button>
  </div>
)};

export default Page1;
