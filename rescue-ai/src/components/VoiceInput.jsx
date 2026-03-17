import { useState } from "react"

export default function VoiceInput() {

  const [listening, setListening] = useState(false)
  const [response, setResponse] = useState("")

  async function startVoice() {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert("Speech recognition not supported")
      return
    }

    const recognition = new SpeechRecognition()

    recognition.start()
    setListening(true)

    recognition.onresult = async (event) => {

      const text = event.results[0][0].transcript
      console.log("User said:", text)

      try {

        // Send voice text to AI backend
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message: text })
        })

        const data = await res.json()

        setResponse(data.reply)

        // 🔊 Speak the AI response
        const speech = new SpeechSynthesisUtterance(data.reply)
        window.speechSynthesis.speak(speech)

      } catch {
        setResponse("Server not connected")
      }

      setListening(false)
    }

    recognition.onerror = () => {
      alert("Voice error")
      setListening(false)
    }

  }

  return (
    <div>

      <button onClick={startVoice}>
        {listening ? "🎤 Listening..." : "🎤 Speak to Rescue AI"}
      </button>

      <p style={{ marginTop: "10px" }}>
        {response && <>🤖 {response}</>}
      </p>

    </div>
  )
}