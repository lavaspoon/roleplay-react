import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css';

const Sidebar = ({ onSelectCharacter }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All'); // 현재 선택된 탭
    const [selectedCharacter, setSelectedCharacter] = useState(null); // 선택된 캐릭터

    // 연령별 데이터
    const characterData = {
        All: [
            { name: 'Alice', ageGroup: '20대', avatar: 'alice.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Hello, I'm Alice!" }, { type: "user", text: "Hi Alice!" }] }, { date: "2024-11-02", messages: [{ type: "ai", text: "How can I assist you today?" }, { type: "user", text: "Tell me a joke." }] }] },
            { name: 'Bob', ageGroup: '30대', avatar: 'bob.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Hi, I'm Bob!" }, { type: "user", text: "Hello Bob!" }] }] },
            { name: 'Cathy', ageGroup: '40대', avatar: 'cathy.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Greetings, I'm Cathy!" }, { type: "user", text: "Hi Cathy!" }] }] }
        ],
        '20': [{ name: 'Alice', ageGroup: '20대', avatar: 'alice.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Hello, I'm Alice!" }, { type: "user", text: "Hi Alice!" }] }, { date: "2024-11-02", messages: [{ type: "ai", text: "How can I assist you today?" }, { type: "user", text: "Tell me a joke." }] }] }],
        '30': [{ name: 'Bob', ageGroup: '30대', avatar: 'bob.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Hi, I'm Bob!" }, { type: "user", text: "Hello Bob!" }] }] }],
        '40': [{ name: 'Cathy', ageGroup: '40대', avatar: 'cathy.png', chatHistory: [{ date: "2024-11-01", messages: [{ type: "ai", text: "Greetings, I'm Cathy!" }, { type: "user", text: "Hi Cathy!" }] }] }]
    };

    // 현재 선택된 탭의 캐릭터 목록
    const characters = characterData[activeTab];

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        onSelectCharacter(character); // 캐릭터 객체 전달
        navigate('/'); // 채팅 화면으로 이동
    };

    return (
        <aside className="sidebar">
            <section className="top-characters">
                <h3>연령별 AI</h3>
                <div className="tabs">
                    {Object.keys(characterData).map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="character-list">
                    {characters.map((character, idx) => (
                        <div
                            key={idx}
                            className="character-card"
                            onClick={() => handleCharacterSelect(character)}
                        >
                            <div className="character-avatar">
                                <img
                                    src={require(`../assets/images/${character.avatar}`)}
                                    alt={character.name}
                                />
                            </div>
                            <div className="character-name">{character.name}</div>
                            <div className="character-age">{character.ageGroup}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 날짜 리스트 */}
            {selectedCharacter && (
                <div className="sidebar-middle">
                    <div className="character-history active">
                        {selectedCharacter.chatHistory.map((history, idx) => (
                            <div key={idx} className="chat-date">
                                {history.date}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
