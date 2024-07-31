import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema(
    {
        notification: String,
        seen: Boolean,
        username: String,
    
        order_id: String
    },{
      versionKey:false  
    }
);

export default mongoose.model('NotificationM', notificationSchema, 'notification');