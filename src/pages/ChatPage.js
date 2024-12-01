import React from 'react';
import ChatScreen from '../components/ChatScreen';

const ChatPage = ({ activeCharacter }) => {
    return <ChatScreen selectedCharacter={activeCharacter} />;
};

export default ChatPage;
