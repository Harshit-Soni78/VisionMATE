<h1 align="center">VisionMATE: Assistive Technology for Visually Impaired</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center">
A comprehensive web application designed to assist visually impaired students with features like object detection, text-to-speech, speech-to-text, and task management using voice commands.
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Solution](#solution)
- [Features](#features)
- [System Architecture](#architecture)
- [Technology Stack](#tech_stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)

## 🧐 Problem Statement <a name="problem_statement"></a>

Visually impaired students face significant challenges in accessing educational materials, managing tasks, and interacting with their environment. Traditional learning materials and tools often lack accessibility features, creating barriers to education and daily activities.

## 💡 Solution <a name="solution"></a>

VisionMATE provides an integrated platform with multiple assistive features:
- Real-time object detection for environmental awareness
- Text-to-Speech conversion for reading documents
- Speech-to-Text for note-taking and communication
- Voice-controlled navigation
- Task management system with voice commands

## ✨ Features <a name="features"></a>

- Object Detection using TensorFlow.js and COCO-SSD model
- Text-to-Speech functionality for document reading
- Speech-to-Text for live captioning
- Voice-controlled navigation throughout the application
- Interactive To-Do list with voice commands
- User authentication system
- Responsive and accessible interface

## 🏗 System Architecture <a name="architecture"></a>

1. **Frontend Layer**: 
   - React.js based user interface
   - TensorFlow.js for object detection
   - Web Speech API integration
   
2. **Backend Layer**: 
   - Node.js/Express server
   - MongoDB database
   - RESTful API architecture

## ⚡ Technology Stack <a name="tech_stack"></a>

**Frontend:**
- React.js
- TensorFlow.js
- Web Speech API
- Styled Components
- Tailwind CSS
- Framer Motion

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📋 Prerequisites <a name="prerequisites"></a>

- Node.js (v14 or higher)
- MongoDB
- Modern web browser
- Webcam
- Microphone

## 🔧 Installation <a name="installation"></a>

1. Clone the repository:
```bash
git clone https://github.com/akshitjain16/VisionMATE.git
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd client
npm install
```

4. Start the server:
```bash
cd server
npm start
```

5. Start the client:
```bash
cd client
npm start
```

## 🎈 Usage <a name="usage"></a>

1. Sign up/Login to access the application
2. Use voice commands for navigation:
   - "Go to home"
   - "Go to object detection"
   - "Go to text to speech"
   - "Go to todo list"
3. Access different features through the intuitive interface
4. Use voice commands or manual controls to interact with each feature

## 👥 Contributors <a name="contributors"></a>

- [Harshit Soni](https://github.com/Harshit-Soni78/)
- [Akshit Jain](https://github.com/akshitjain16)
- [Vishnu Kumar Jangid](https://github.com/vishnujangid88/)
- [Darshil Pungalia](https://github.com/DarshilPungalia)
- [Mukand Jirawla](https://github.com/Mukandjirawla)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
