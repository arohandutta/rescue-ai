export default function EmergencyButtons() {

  function showAlert(type) {

    let message = ""

    if (type === "medical") {
      message = "🚑 Medical emergency reported!\nHelp is on the way."
    }

    if (type === "fire") {
      message = "🔥 Fire emergency reported!\nEvacuate immediately."
    }

    if (type === "flood") {
      message = "🌊 Flood emergency reported!\nMove to higher ground."
    }

    alert(message)
  }

  function sendSOS() {

    if (!navigator.geolocation) {
      alert("Geolocation not supported")
      return
    }

    navigator.geolocation.getCurrentPosition((pos) => {

      const lat = pos.coords.latitude
      const lon = pos.coords.longitude

      alert(`🚨 SOS SENT!\nLocation:\nLat: ${lat}\nLon: ${lon}`)

    })

  }

  return (
    <div>

      <button onClick={sendSOS}>
        🚨 SEND SOS
      </button>

      <button onClick={() => showAlert("medical")}>
        🚑 Medical Emergency
      </button>

      <button onClick={() => showAlert("fire")}>
        🔥 Fire Emergency
      </button>

      <button onClick={() => showAlert("flood")}>
        🌊 Flood Emergency
      </button>

    </div>
  )
}