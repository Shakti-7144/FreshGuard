# FreshGuard AI ❄️🥗

Smart Refrigerator Food Safety & Spoilage Monitoring Dashboard powered by Firebase, Gemini AI, and Firebase Cloud Messaging (FCM).

---

## 📌 Overview

FreshGuard AI is an AI-powered smart refrigerator monitoring system designed to:

* Detect food nearing spoilage
* Reduce food waste
* Provide AI recipe & usage suggestions
* Monitor food freshness from Firebase database
* Send real-time notification alerts
* Display live food status in a clean dashboard

The platform uses:

* Firebase Firestore
* Firebase Cloud Messaging (FCM)
* Gemini AI API
* HTML/CSS/JavaScript frontend
* Node.js backend

---

# ✨ Features

## 🥗 Smart Food Dashboard

* Real-time Firebase food item fetching
* Freshness monitoring
* Spoilage status classification
* Expiry tracking
* Smell/Gas status display

---

## 🔔 Real-Time Alerts

* Firebase Cloud Messaging notifications
* Browser push notifications
* Spoilage alerts
* Consume-soon warnings

---

## 🤖 Gemini AI Suggestions

AI-powered:

* Recipe suggestions
* Usage ideas before spoilage
* Food waste reduction tips
* Storage recommendations

If food becomes unsafe, Gemini recommends discarding it.

---

## 📱 Responsive UI

* Mobile responsive
* No horizontal scrolling
* Clean dashboard layout
* Lightweight frontend

---

# 🧠 AI Workflow

```text
Sensor / Manual Entry
        ↓
Firebase Firestore
        ↓
Dashboard Fetch
        ↓
Status Classification
        ↓
Gemini AI Suggestion
        ↓
FCM Notification Alerts
```

---

# 🛠️ Tech Stack

| Technology                | Purpose            |
| ------------------------- | ------------------ |
| HTML/CSS/JS               | Frontend           |
| Firebase Firestore        | Database           |
| Firebase Cloud Messaging  | Push Notifications |
| Gemini API                | AI Suggestions     |
| Node.js + Express         | Backend API        |
| Firebase Hosting / Vercel | Deployment         |

---

# 📂 Project Structure

```text
FreshGuard-AI/
│
├── index.html
├── firebase-messaging-sw.js
├── server.js
├── package.json
├── .env
├── .env.example
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Project

```bash
git clone <your-repo-url>
cd FreshGuard-AI
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env`

Create:

```text
.env
```

Add:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=3003
```

---

# 🔥 Firebase Setup

## Enable:

* Firestore Database
* Firebase Cloud Messaging

---

## Add Firebase Config

Inside `index.html`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

# 🔔 Firebase Cloud Messaging Setup

## Create:

```text
firebase-messaging-sw.js
```

This handles:

* Background notifications
* Push alerts
* Browser notifications

---

## Enable Notifications

Click:

```text
Enable Alerts
```

inside dashboard sidebar.

Browser permission popup will appear.

---

# 🤖 Gemini AI Integration

Gemini is used for:

* Recipe suggestions
* Food usage ideas
* Food waste reduction recommendations

Example:

```text
Milk nearing spoilage?
→ Make paneer
→ Prepare smoothie
→ Use in white sauce
```

If food becomes unsafe:

```text
Discard immediately.
```

---

# ▶️ Run Project

## Start Backend

```bash
node server.js
```

---

## Open Frontend

Open:

```text
http://localhost:3003
```

---

# 📡 Firebase Database Structure

Example Firestore collection:

```text
foodItems
```

Example document:

```json
{
  "name": "Milk",
  "freshness": 42,
  "status": "Consume Soon",
  "expiry": "2026-05-10",
  "smell": "Slight Sour",
  "updatedAt": "timestamp"
}
```

---

# 🚨 Notification System

FreshGuard AI automatically generates alerts for:

* Spoiled food
* High gas/smell levels
* Expiry approaching
* Unsafe items

---

# 📱 Responsive Improvements

Optimized for:

* Desktop
* Tablets
* Mobile devices

Includes:

* Overflow fixes
* Responsive tables
* Mobile-safe layout
* Internal table scrolling only

---

# 🔮 Future Scope

* ESP32 live sensor integration
* MQ gas sensor support
* Camera-based spoilage detection
* IoT refrigerator integration
* Mobile application
* Voice assistant support
* Smart grocery automation

---


# 📄 License

This project is for educational, research, and hackathon purposes.
