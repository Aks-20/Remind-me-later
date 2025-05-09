import { Schema, model } from 'mongoose';

const ReminderSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    method: {
        type: String,
        enum: ['sms', 'email'],
        required: true
    }
}, { timestamps: true });

export default model('Reminder', ReminderSchema);
