import React, { useState, useRef } from 'react';
import './Chat.css';

export default function Chat() {
    // Chatbox toggle
    const [hidden, setHidden] = useState(false);
    const chatRef = useRef(null); //reference to the chatbox element
    const toggleChat = () => {
        chatRef.current.style.animation = hidden ? 'showChat 0.5s forwards' : 'hideChat 0.5s forwards';
        setHidden(!hidden);
    }


    // Message handling
    const [messages, setMessages] = useState([]);
    function handleMessageSubmit(message) {
        setMessages([...messages, message]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const message = event.target.elements.message.value;
        handleMessageSubmit(message);
        event.target.reset();
    }

    const logs = [
        {
            id: 1,
            text: 'Hello',
            sender: 'rizzler',
            time: '12:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 3,
            text: 'How are you?',
            sender: 'rizzler',
            time: '2:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
        {
            id: 2,
            text: 'Sup',
            sender: 'me',
            time: '1:00'
        },
    ]

    return (
        <div className='wrapper'>
            <div ref={chatRef} className='chatbox'>
                <div className='chatbox-contents'>
                    <div className='logs'>
                        {logs.map(log => 
                            <Message message={log} />
                        )   
                        }
                    </div>
                    <form onSubmit={handleSubmit} id='message-box'>
                        <input type="text" name="message" id='message'/>
                        <button variant='success' id='send'>Send</button>
                    </form>
                </div>
                <button onClick={toggleChat} className='chatbox-toggle'>{'<'}</button>
            </div>
        </div>
    );
}

function Message({ message }) {
    return (
        <>
            <div className='message'>
                <span className='sender'>{message.sender}</span>
                <span className='time'>{message.time}</span>
                <p className='text'>{message.text}</p>
            </div>
            <div style={{ borderBottom: '1px solid black' }}></div>
        </>
    );
}