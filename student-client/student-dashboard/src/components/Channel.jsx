import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

function Channel() {
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  const createRoom = async () => {
    try {
      const response = await fetch('/room');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse response as JSON
      setRoomId(data.roomId);
      joinRoom(data.roomId);
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };
  
  const joinRoom = (id) => {
    socket.emit('joinRoom', id);
    setJoinedRoom(true);
  };

  const handleJoinRoom = () => {
    if (roomId) {
      joinRoom(roomId);
    }
  };

  const sendMessage = () => {
    socket.emit('message', { roomId, message });
    setMessage('');
  };

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <div>
      {!joinedRoom ? (
        <div>
          <button onClick={() => setIsCreatingRoom(true)}>Create Room</button>
          <div>
            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button onClick={handleJoinRoom}>Join Room</button>
          </div>
          {isCreatingRoom && (
            <button onClick={createRoom}>Generate Room ID and Join</button>
          )}
        </div>
      ) : (
        <div>
          <h2>Room ID: {roomId}</h2>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default Channel;
