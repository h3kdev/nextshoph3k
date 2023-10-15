import mongoose from 'mongoose';

const helloSchema = new mongoose.Schema({
  label: { type: String, required: true }
})

export default mongoose.models.hello || mongoose.model('hello', userSchema);