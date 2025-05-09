import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import reminderRoutes from './routes/reminderroutes.js';

config();

const app = express();
app.use(json());

// Routes
app.use('/api/reminders', reminderRoutes);

// DB Connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
}).catch(err => console.log(err));
