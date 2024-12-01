import React, { useState } from 'react';
import '../assets/css/ChatScreen.css';

const ChatScreen = ({ selectedCharacter }) => {
    const [messages, setMessages] = useState([
        { type: 'ai', text: `Hi! I'm ${selectedCharacter?.name}, your AI assistant. How can I help you today?` },
    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { type: 'user', text: input }]);
        setInput('');
        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { type: 'ai', text: 'Let me process that for you. One moment, please!' },
            ]);
        }, 1000);
    };

    return (
        <div className="chat-screen">
            <header className="chat-header">
                <div className="chat-avatar">
                    {selectedCharacter?.avatar ? (
                        <img src={require(`../assets/images/${selectedCharacter.avatar}`)} alt={selectedCharacter.name} />
                    ) : (
                        '🤖'
                    )}
                </div>
                <div className="chat-title">{selectedCharacter?.name || 'AI Assistant'}</div>
            </header>

            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-message ${msg.type === 'ai' ? 'ai-message' : 'user-message'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <footer className="chat-footer">
                <button className="voice-button" title="Hold to talk">
                    🎙️
                </button>
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="send-button" onClick={handleSendMessage}>
                    ➤
                </button>
            </footer>
        </div>
    );
};

export default ChatScreen;
