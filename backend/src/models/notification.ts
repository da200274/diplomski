import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        question: String,
        answer: String,
        name: String,
        surname: String,
        address: String,
        contact: String,
        mail: String,
        type: String,
        profile_pic: String
    },{
      versionKey:false  
    }
);

export default mongoose.model('NotificationM', notificationSchema, 'notification');