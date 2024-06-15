import React from 'react';
import Navbar from './Navbar';

const Chatbot = () => {
  return (

    <div>

<div className='fixed top-0 left-0 w-full z-50'>
    <Navbar />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', height: '78vh' }}>
      <style>
        {`
          .center-div {
            align-self: center;
            margin-top: 2vh;
            width: 50vw;
            height: 60vh;
            border:2px solid rgb(102, 71, 255);
            background-color: black;
            border-radius: 15px;
            padding: 5px;
            box-sizing: border-box;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            {/* box-shadow: 0 0 70px rgba(128, 0, 128, 9); */}
          }

          @media only screen and (max-width: 600px) {
            .center-div {
              height: 40vh;
              width: 80vw;
              background-color: rgb(102, 71, 255);
              border-radius: 15px;
              padding: 5px;
              box-sizing: border-box;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
          }
        `}
      </style>

      <div className="absolute inset-4 flex justify-center items-center">
        <div className="center-div relative h-full w-full overflow-clip rounded-md px-8 py-0">
          <iframe
            style={{ border: 'none' }}
            srcDoc={`<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                'composerPlaceholder': 'Chat with bot',
                'botConversationDescription': 'The Conversational Genius',
                'botName': 'Eklavya.AI',
                'botId': 'aa77449c-c123-4ca5-aa26-45e57964f414',
                'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                'messagingUrl': 'https://messaging.botpress.cloud',
                'clientId': 'aa77449c-c123-4ca5-aa26-45e57964f414',
                'enableConversationDeletion': true,
                'showPoweredBy': false,
                'className': 'webchatIframe',
                'containerWidth': '100%25',
                'layoutWidth': '100%25',
                'hideWidget': true,
                'showCloseButton': false,
                'disableAnimations': true,
                'closeOnEscape': false,
                'showConversationsButton': true,
                'enableTranscriptDownload': true,
                'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/112bad15-cf19-44e5-97dc-dd4bd8de19df/v25018/style.css'
              });
              window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>`}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;
