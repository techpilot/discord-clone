import React, {useEffect, useState} from 'react'
import './Chat.css'
import Message from './Message'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { CardGiftcard, Gif, EmojiEmotions } from '@material-ui/icons'
import { useSelector } from "react-redux"
import { selectChannelId, selectChannelName } from "../features/appSlice"
import { selectUser } from "../features/userSlice"
import db from "./firebaseConfig"
import firebase from 'firebase/compat/app'

function Chat() {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
          setMessages(snapshot.docs.map((doc) => doc.data())) 
        )
    }
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user
      })
    
    setInput("")
  }

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages?.map((message) => (
          <Message
            message={message.message}
            user={message.user}
            timestamp={message.timestamp}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            className='chat__inputButton'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize='large' />
          <Gif fontSize='large' /> 
          <EmojiEmotions fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Chat
