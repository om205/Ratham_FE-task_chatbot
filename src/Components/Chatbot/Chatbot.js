import React, { useEffect, useRef } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = (props) => {
  return (
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        placeholderText='Enter your name'
        validator={(input) => (input.length > 0) }
      />
  );
};

export default ChatbotComponent;
