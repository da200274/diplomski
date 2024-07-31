import mongoose from 'mongoose'
import product, { productSchema } from './product';

const contentSchema = new mongoose.Schema(
    {
        product: productSchema,
        amount: Number
    }
);

const orderSchema = new mongoose.Schema(
    {
        username: String,
        price: Number,
        status: String,
        content: [contentSchema]
    },{
        versionKey:false,
        timestamps: { createdAt: 'created_at'}
    }
);

export default mongoose.model('OrderM', orderSchema, 'order');