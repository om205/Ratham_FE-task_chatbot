// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import userIcon from '../../assets/icons/user-icon.png'
import botIcon from '../../assets/icons/chatbot-icon.png'
import Avatar from './icons/Avatar.js'
import Acknowledgement from './widgets/Acknowledgement.js';
import DateTimePicker from './widgets/DateTimePicker.js';
import AgePicker from './widgets/AgePicker.js';
import CountDown from './widgets/CountDown.js';

const botName = 'Bot';

const initialMessage = createChatBotMessage("Hello, Welcome to Student Info System!", {
  widget: "acknowledgement",
  withAvatar: true,
  delay: 500,
});

const config = {
  initialMessages: [initialMessage],
  botName: botName,
  customComponents: {
    header: () => <div className="react-chatbot-kit-chat-header bg-sky-500">Student Info System</div>,
    userAvatar: () => <Avatar icon={userIcon} />, 
    botAvatar: () => <Avatar icon={botIcon} />, 
    InputForm: () => <div className="react-chatbot-kit-chat-input-from">From:</div>,
  },
  state: {},
  widgets: [
    {
      widgetName: "acknowledgement",
      widgetFunc: (props) => <Acknowledgement {...props} />
    },
    {
      widgetName: "dateTimePicker",
      widgetFunc: (props) => <DateTimePicker {...props} />
    },
    {
      widgetName: "ageInput",
      widgetFunc: (props) => <AgePicker {...props}/>
    },
    {
      widgetName: "endOfChat",
      widgetFunc: (props) => <CountDown {...props} />
    }
  ]
};

export default config;