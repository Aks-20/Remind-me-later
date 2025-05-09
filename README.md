Please complete the below mentioned initial screening exercise to move to the next level of hiring process.

Project: Remind-me-later

This web app does one thing and one thing well. It allows users to setup a reminder with a message. The JS developers have gone ahead and created a nice UI to accept date and time, to know when to send the message, and the actual text message to send. They have also given an option to select how to remind. Right now the app support reminding through SMS and Email. Going forward the app might support other ways to send the reminder.

Now the JS devs need an API to call to save the state to the db. Design and implement an API endpoint using django for the above requirement. If you are not familiar with Django, please use another Python framework for creating this endpoint. Please note that you do not need to take care of actual message delivery logic. You are only required to create an endpoint which accepts these datapoints: date, time and message and store the info in database.

Note: In case you have not worked with Python and associated frameworks before, you are free to code in a language and framework of your choice, be it JS, Java, Go , etc.

Upon completion, please share the github repo link.

Remind-me-later (REST API)

## 💡 Description
This backend API lets users set reminders by specifying:
- Date
- Time
- Message
- Delivery Method (SMS or Email)

The API saves the reminder to MongoDB. Actual delivery (sending the message) is not part of this project scope.

Frontend sends a POST request to /api/reminders with reminder details
Backend validates input and stores it in MongoDB
The project uses modular routing (reminderRoutes.js)
Uses Mongoose schema validation for strict input checking

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📦 Installation

```bash
git clone https://github.com/Aks-20/remind-me-later.git
cd remind-me-later
npm install
