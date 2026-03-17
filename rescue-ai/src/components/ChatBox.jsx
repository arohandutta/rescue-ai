import { useState } from "react"
import "../App.css"

export default function ChatBox() {

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  async function sendMessage() {

    if (!message) return

    const userMsg = { sender: "user", text: message }
    setMessages(prev => [...prev, userMsg])

    try {

      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      })

      const data = await response.json()

      const aiMsg = {
        sender: "ai",
        text: data.reply
      }

      setMessages(prev => [...prev, aiMsg])

    } catch {

      setMessages(prev => [
        ...prev,
        { sender: "system", text: "Server not connected." }
      ])

    }

    setMessage("")
  }

  return (
    <div>

      {/* Chat Messages */}
      <div className="chat-box">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input Area */}
      <div className="chat-input">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your emergency..."
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  )
}