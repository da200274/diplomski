import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
    {
        comment: String,
        username: String,
    
        product_id: String
    },{
      versionKey:false  
    }
);

export default mongoose.model('CommentM', commentSchema, 'comment');