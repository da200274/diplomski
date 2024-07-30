import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        content: String,
        price: Number,
        picture: String,
        type: String
    },{
      versionKey:false  
    }
);

export {productSchema};
export default mongoose.model('ProductM', productSchema, 'product');