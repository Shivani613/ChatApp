import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '1b431343-88bc-4d0a-b6fe-3c8308b9d60e';

const App = () => {
 

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Shivani"
      userSecret="2526"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;