const fs = require('fs');
const moment = require('moment');
import connectDatabase from '../../../utils/connectDatabase';
import Users from '../../../models/users';
import generateId from '../../../utils/generateId';
import cookie from 'cookie';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function Register(req, res) {
  let { username, email, password } = req.body;
  await connectDatabase();

  if (!username || !email || !password) {
    return res.status(400).send({
      success: false,
      message: 'Lütfen boş bırakılan alanları doldurunuz.'
    });
  }

  try {
    const existingUser = await Users.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(409).send({
          success: false,
          message: 'Bu kullanıcı adı daha önceden başkası tarafından alınmış.'
        });
      }
      if (existingUser.email === email) {
        return res.status(410).send({
          success: false,
          message: 'Bu eposta adresi daha önceden başkası tarafından alınmış.'
        });
      }
    }

    const AccountId = generateId();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ username, email, hashedPassword, AccountId }, 'gizliAnahtar', { expiresIn: '30d' });

    const cookiesString = cookie.serialize('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 gün süreyle geçerli
      path: '/',
    });
    res.setHeader('Set-Cookie', cookiesString);

    const newUser = new Users({
      username: username,
      id: AccountId,
      email: email,
      password: hashedPassword,
      token: token
    });

    await newUser.save();
    return res.status(201).send({
      success: true,
      message: "Hesabın başarıyla oluşturuldu.",
      data: {
        id: AccountId,
        token: token,
        email: email,
        password: hashedPassword
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: 'Bir hata oluştu.',
    });
  }
}
