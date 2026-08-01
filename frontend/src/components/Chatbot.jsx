import React, { useState, useRef, useEffect, useContext } from 'react';
import { AiOutlineMessage, AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import ChatMessage from './ChatMessage';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I'm your Yumzy AI assistant. Ask me anything about our menu, your order, or food recommendations!", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { url } = useContext(StoreContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await axios.post(`${url}/api/ai/chat`, { message: userMsg });
      setIsTyping(false);
      if (response.data.success) {
        setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: 'I am having trouble right now. Please try again later!', isBot: true }]);
      }
    } catch (err) {
      console.error(err);
      setIsTyping(false);
      setMessages(prev => [...prev, { text: 'Sorry, I am offline right now!', isBot: true }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[360px] h-[540px] flex flex-col border border-gray-100 overflow-hidden animate-fadein">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">🤖</div>
              <div>
                <h3 className="font-bold text-base leading-tight">Yumzy AI</h3>
                <p className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                  Online · Food Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <AiOutlineClose size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isBot={msg.isBot}
              />
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-400 text-sm pl-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
                <span>Yumzy AI is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-4 bg-white flex-shrink-0">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about food, orders..."
                className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="w-11 h-11 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl flex items-center justify-center hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-105 transition-all"
              >
                <AiOutlineSend size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-gray-800' : 'bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_20px_rgba(249,115,22,0.4)]'}`}
      >
        {isOpen ? <AiOutlineClose size={24} color="white" /> : <AiOutlineMessage size={26} color="white" />}
      </button>
    </div>
  );
};

export default Chatbot;
