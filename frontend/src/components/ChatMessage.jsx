import React from 'react';

const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      {isBot && (
        <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-1">
          🤖
        </div>
      )}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed ${
          isBot
            ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
            : 'bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-tr-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
