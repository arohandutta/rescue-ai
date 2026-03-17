# 🚑 Rescue AI

A simple disaster response web app I built during a hackathon to help users react quickly in emergency situations.

The idea is to combine quick emergency actions, location awareness, voice input, and an AI chat assistant — all in one place.

---

## 🧠 What it does

* Lets users trigger emergency actions like:

  * SOS
  * Medical emergency
  * Fire emergency
  * Flood emergency

* Shows a live map (using Leaflet) so users can see their location

* Includes a chat box where users can describe their situation and get AI responses

* Has a voice input feature so users can speak instead of typing

---

## ⚙️ How it works

* Frontend built with React (Vite)
* Backend built with Node.js + Express
* Chat messages are sent to the backend and processed there
* Map is handled using Leaflet
* Voice input uses the browser’s Speech Recognition API

---

## 🚀 Running the project

Clone the repo:

```bash
git clone https://github.com/arohandutta/rescue-ai.git
cd rescue-ai
```

Install frontend:

```bash
npm install
```

Install backend:

```bash
cd backend
npm install
```

Run backend:

```bash
node server.cjs
```

Run frontend:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📸 Screenshots

Screenshots drive link:
https://drive.google.com/drive/folders/1QTIpZ_bAAJz3-j2W5thnYocBsnVFsICx?usp=drive_link



## 🎥 Demo

demo video drive link:
https://drive.google.com/file/d/11uhU3gb4pEOaO3vLA6NlyDTWaRQO1TcA/view?usp=sharing



## 🤔 Why I built this

During disasters, people often panic and don’t know what to do first.
I wanted to create something simple that gives quick actions + guidance in one place.



## 🔧 Things I’d improve

* Add real emergency service integration (ambulance, police, etc.)
* Make the voice assistant respond back (text-to-speech)
* Improve UI design (right now it’s basic)
* Make it mobile-friendly


## 👨‍💻 Author

Arohan Dutta
https://github.com/arohandutta

