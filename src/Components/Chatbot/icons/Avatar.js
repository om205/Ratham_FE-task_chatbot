import React from 'react'

const Avatar= ({ icon }) => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div className="react-chatbot-kit-chat-bot-avatar-container w-10 bg-white rounded-full p-2">
                <img src={icon} alt="Bot" />
            </div>
        </div>
    )
}
    
export default Avatar ;