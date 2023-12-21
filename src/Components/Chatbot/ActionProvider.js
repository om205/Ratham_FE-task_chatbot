import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  

  const handleAcknowledgement = (props) => {

    const clientResponse = createClientMessage ('Got it!', {
      withAvatar: true,
      delay: 500
    });
    
    const botMessage = createChatBotMessage ('Select a slot', {
      widget: "dateTimePicker",
      withAvatar: true,
      delay: 500
    });

    setState(prev => {
      prev.messages[prev.messages.length-1].widget = "" ;
      return {...prev, messages: [...prev.messages, clientResponse, botMessage]}})
  }

  const handleDateTime = (date, day, time) => {
    const clientResponse = createClientMessage (`${date}, ${day} ${time}`, {
      withAvatar: true,
      delay: 500
    });

    const botMessage = createChatBotMessage('Enter your name', {
      withAvatar: true,
      delay: 500
    });

    window.document.getElementsByClassName("react-chatbot-kit-chat-input-container")[0].style.display = "flex";

    setState((prev) => {
      prev.messages[prev.messages.length-1].widget = "" ;
      return {
      ...prev,
      date: `${date}, ${day} ${time}`,
      messages: [...prev.messages, clientResponse,botMessage],
    }});
  }

  const handleName = (name) => {
    window.document.getElementsByClassName("react-chatbot-kit-chat-input-container")[0].style.display = "none";

    const botMessage = createChatBotMessage('Enter your age', {
      widget: "ageInput",
      withAvatar: true,
      delay: 500
    });

    setState((prev) => ({
      ...prev,
      name: name,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge = (age) => {
    const clientResponse = createClientMessage (`${age}`, {
      withAvatar: true,
      delay: 500
    });

    const botMessage1 = createChatBotMessage('Thank You.', {
      withAvatar: true,
      delay: 500
    })
    const botMessage2 = createChatBotMessage('The bot will exit In 5 seconds.', {
      widget: "endOfChat",
      withAvatar: true,
      delay: 1000
    });

    setState((prev) => {
      prev.messages[prev.messages.length-1].widget = "" ;
      return {
      ...prev,
      age,
      messages: [...prev.messages, clientResponse,botMessage1, botMessage2],
    }});
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleAcknowledgement,
            handleDateTime,
            handleName,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;