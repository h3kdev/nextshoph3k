import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  id: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.user || mongoose.model('user', userSchema);
