import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    des: String,
}, {timestamps:true})
const Post =  mongoose.models.Post || mongoose.model("Post", PostSchema)
export default Post