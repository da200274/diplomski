import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema(
    {
        price: Number,
        name: String
    }
);

const orderSchema = new mongoose.Schema(
    {
        username: String,
        price: Number,
        status: Number,
        content: [contentSchema]
    },{
        versionKey:false,
        timestamps: { createdAt: 'created_at' }
    }
);

export default mongoose.model('OrderM', orderSchema, 'order');