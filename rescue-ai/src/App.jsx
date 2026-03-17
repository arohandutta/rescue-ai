import './App.css'

import EmergencyButtons from './components/EmergencyButtons'
import VoiceInput from './components/VoiceInput'
import MapView from './components/MapView'
import ChatBox from './components/ChatBox'

export default function App() {
  return (
    <div className="container">

      <h1 className="title">🚑 Rescue AI</h1>
      <p className="subtitle">Disaster Response Assistant</p>

      <div className="grid">

        <div className="card">
          <h2>🚨 Emergency Actions</h2>
          <EmergencyButtons />
        </div>

        <div className="card">
          <h2>🎤 Voice Assistant</h2>
          <VoiceInput />
        </div>

        <div className="card full">
          <h2>🌍 Rescue Map</h2>
          <MapView />
        </div>

        <div className="card full">
          <h2>💬 Chat with Rescue AI</h2>
          <ChatBox />
        </div>

      </div>

    </div>
  )
}