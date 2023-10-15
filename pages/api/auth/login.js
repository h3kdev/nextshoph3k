const fs = require('fs');
const moment = require('moment');
import connectDatabase from '../../../utils/connectDatabase';
import Users from '../../../models/users';
import generateId from '../../../utils/generateId';
import cookie from 'cookie';
const jwt = require('jsonwebtoken');

export default async function Login(req, res) {
  const { email, password } = req.body;

  try {
    // Veritabanına bağlantı oluştur
    await connectDatabase();

    // Kullanıcıyı e-posta ile ara
    const existingUser = await Users.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı bulunamazsa veya şifre eşleşmezse hata ver
    if (!existingUser || existingUser.password !== hashedPassword) {
      return res.status(401).send({
        success: false,
        message: 'Eposta veya şifre hatalı.',
      });
    }

    const cookiesString = cookie.serialize('token', existingUser.token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 gün süreyle geçerli
        path: '/',
      });
      res.setHeader('Set-Cookie', cookiesString);

    return res.status(201).send({
      success: true,
      message: "Hesabına başarıyla giriş yapıldı.",
      data: {
        id: existingUser.id,
        email: existingUser.email,
        password: existingUser.password,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: 'Bir hata oluştu.',
    });
  }
}
