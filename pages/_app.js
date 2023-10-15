//import '@/static/styles/globals.css'
import '../static/styles/globals.css'

import { useEffect } from 'react';
import connectDB from '../utils/connectDatabase';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Sadece 'npm run dev' komutuyla çalıştırıldığında veritabanına bağlan
    if (process.env.DEV_DB_CONNECT === 'true') {
      connectDB();
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;