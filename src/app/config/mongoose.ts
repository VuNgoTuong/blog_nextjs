import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.MONGO_DB}`)
        console.log('connect ok!');
    } catch (error) {
        console.log('connect DB fail', error)
    }
}
export default connectDB