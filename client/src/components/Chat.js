import './Chat.css';
import Header from '../components/Header'
import React from 'react'
import socketClient from 'socket.io-client';

export default function chat() {
    const socket = socketClient('http://localhost:8080', { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });
    let audio = new Audio('../sounds/messagetone.mp3')
    let audio1 = new Audio('../sounds/messagetone1.mp3')

    const form = document.getElementById('send__container');
    const messageInput = document.getElementById('send__container__message')
    const messageContainer = document.querySelector('.messagearea')
    // const add = (message, position) => {
    //     const messageElement = document.createElement('div')
    //     messageElement.innerHTML = message
    //     messageElement.classList.add('container__message')
    //     messageElement.classList.add(position)
    //     if (position === 'container__left') {
    //         audio.play();
    //     }

    //     if (position === 'container__middle') {
    //         audio1.play();
    //     }
    //     messageContainer.append(messageElement)
    //     messageContainer.scrollTop = messageContainer.scrollHeight;

    // }

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     if (messageInput.value) {
    //         const message = messageInput.value;
    //         add(`You: ${message}`, 'container__right');
    //         socket.emit('send', message);
    //         messageInput.value = '';
    //     }
    // })
    const namee = prompt('Enter your name to join:')
    if (namee) {
        socket.emit('new-user-joined', namee)
    }

    // socket.on('user-joined', name => {
    //     add(`${name} joined the chat`, 'container__middle')
    // })

    // socket.on('receive', data => {
    //     add(`${data.name}: ${data.message}`, 'container__left')
    // })

    // socket.on('left', data => {
    //     if (data) {
    //         add(`${data} left the chat`, 'container__middle')
    //     }
    // })

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='container__header'>ImeSSages</div>
                <div className='messagearea'>
                </div>
            </div>
            <div className='send'>
                <form action='' id='send__container'>
                    <input type="text" name="message" id="send__container__message" />
                    <button className="btn" type='submit'>Enter</button>
                </form>
            </div>



        </div>
    )
}