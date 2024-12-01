// api.js
import axios from 'axios';

export const fetchChatHistory = (characterName) => {
    return axios.get(`/api/chat-history`, { params: { character: characterName } })
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching chat history:", error);
            return [];
        });
};
