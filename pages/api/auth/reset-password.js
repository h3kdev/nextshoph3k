const fs = require('fs');
const moment = require('moment');
import connectDatabase from '../../../utils/connectDatabase';
import Users from '../../../models/users';
import cookie from 'cookie';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function ResetPassword(req, res) {
  const { newPassword } = req.body;

  try {
    await connectDatabase();

    var cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;
    const existingUser = await Users.findOne({ token });

    if (!token) {
      return res.status(401).json({
        status: false,
        message: 'Kullanıcı giriş yapmamış.',
      });
    }
    if (!existingUser) {
      return res.status(401).json({
        status: false,
        message: 'Kullanıcı doğrulanamadı.',
      });
    }

    // Şifreyi güvenli bir şekilde hashle
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Şifreyi güncelle
    await Users.findOneAndUpdate({ token }, { password: hashedPassword });

    return res.status(201).send({
      success: true,
      message: "Hesabınızın şifresi başarıyla değiştirildi.",
      data: {
        id: existingUser.id,
        email: existingUser.email,
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
