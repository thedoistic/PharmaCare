import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <div className="chatbot-button-container">
        <button className="chatbot-button" onClick={toggleChatbot}>
          <img 
            src="./src/assets/favicon/logo.svg" 
            alt="chat-icon" 
            className="chatbot-icon"
          />
        </button>
      </div>

      {isChatbotOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <strong>Chat with Us</strong>
            <button className="chatbot-close" onClick={toggleChatbot}>
              ✖
            </button>
          </div>

          <iframe
            src="https://www.chatbase.co/chatbot-iframe/4dxkHIGQznvRsVTyXx11d"
            title="Pharmacy Chatbot"
            className="chatbot-iframe"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
