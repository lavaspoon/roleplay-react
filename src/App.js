import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatPage from './pages/ChatPage';
import './App.css';

const App = () => {
    const [activeCharacter, setActiveCharacter] = useState(null);
    const characters = [
        {
            name: "Alice",
            ageGroup: "20대",
            avatar: "alice.png",
            chatHistory: [
                {
                    date: "2024-11-01",
                    messages: [
                        { type: "ai", text: "Hello, I'm Alice!" },
                        { type: "user", text: "Hi Alice!" }
                    ]
                },
                {
                    date: "2024-11-02",
                    messages: [
                        { type: "ai", text: "How can I assist you today?" },
                        { type: "user", text: "Tell me a joke." }
                    ]
                }
            ]
        },
        {
            name: "Bob",
            ageGroup: "30대",
            avatar: "bob.png",
            chatHistory: [
                {
                    date: "2024-11-01",
                    messages: [
                        { type: "ai", text: "Hi, I'm Bob!" },
                        { type: "user", text: "Hello Bob!" }
                    ]
                }
            ]
        }
    ];

    return (
        <Router>
            <div className="app-container">
                <Sidebar onSelectCharacter={setActiveCharacter} characters={characters} />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<ChatPage activeCharacter={activeCharacter} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
