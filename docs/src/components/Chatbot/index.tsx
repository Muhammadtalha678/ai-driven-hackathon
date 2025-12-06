import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI assistant. Ask me anything about this course.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, text: "I'm just a UI demo for now!", sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <span>AI Assistant</span>
            <button onClick={toggleChat} className={styles.closeBtn}>&times;</button>
          </div>
          <div className={styles.messages}>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className={styles.inputArea}>
            <input
              type="text"
              className={styles.input}
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className={styles.sendBtn}>Send</button>
          </form>
        </div>
      )}
      <button className={styles.toggleBtn} onClick={toggleChat}>
        {isOpen ? '💬' : '🤖'}
      </button>
    </div>
  );
}
