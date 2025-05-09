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
