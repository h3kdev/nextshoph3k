import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // MongoDB bağlantı URL'sini buraya yapıştırın
    const url = 'mongodb+srv://admin:keskinemre35@cluster0.vocp8ar.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız oldu:', error);
  }
};

export default connectDB;



