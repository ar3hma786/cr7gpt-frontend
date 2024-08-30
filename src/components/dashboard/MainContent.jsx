import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowUp } from 'react-icons/fa';
import { CgAttachment } from "react-icons/cg";

const MainContent = ({ isOpen }) => {
  const [prompts, setPrompts] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Automatically scroll to the bottom of the chat when a new message is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!prompts.trim()) return; // Avoid sending empty prompts

    // Add user prompt to the messages
    const newMessages = [...messages, { sender: 'user', text: prompts }];
    setMessages(newMessages);
    
    try {
      const response = await axios.post('http://localhost:8080/api/cr7gpt/generate', { prompt: prompts });
      
      // Extract the actual response and SIUUUUUUU
      const botResponse = response.data;

      // Add the bot response to the messages
      const updatedMessages = [...newMessages, { sender: 'bot', text: botResponse }];

      // Add the SIUUUUUUU as a separate message
      const finalMessages = [...updatedMessages, { sender: 'bot', text: "SIUUUUUUU" }];

      // Update the state with the final set of messages
      setMessages(finalMessages);
      
      setPrompts(''); // Clear the input field after sending
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-[#901b23] text-white min-h-screen flex flex-col items-center justify-center"> 
      <div className="flex flex-col items-center w-full max-w-2xl p-4">
        {/* Chat messages display */}
        <div className="w-full flex-grow p-4 mb-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`p-3 rounded-lg max-w-xs shadow-lg ${message.sender === 'user' ? 'bg-[#5f2025]' : 'bg-[#5f2025]'}`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message input functionality */}
        <div className={`fixed bottom-2 left-0 right-0 px-4 transition-all duration-300 ${isOpen ? 'w-[calc(100%-16rem)] ml-64' : 'w-full ml-0'}`}>
          <div className="bg-[#5f2025] rounded-full flex items-center justify-between p-2 mx-auto w-full max-w-2xl shadow-lg">
            <div className="flex items-center space-x-2 w-full">
              <CgAttachment className="text-lg text-gray-400" />
              <input 
                type="text" 
                placeholder="Message CR7GPT" 
                className="bg-transparent text-gray-200 w-full focus:outline-none"
                value={prompts}
                onChange={(e) => setPrompts(e.target.value)}
                onKeyPress={handleKeyPress} // Handle Enter key press
              />
            </div>
            <button className="bg-[#5f2025] text-gray-400 rounded-full p-2" onClick={handleSend}>
              <FaArrowUp className="text-lg" /> 
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            CR7GPT can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
