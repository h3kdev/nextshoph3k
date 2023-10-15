import connectDatabase from "../../utils/connectDatabase";
import cookie from 'cookie';

export default async function add(req, res) {
    const { label } = req.body; // Veriyi daha spesifik bir şekilde çıkarın
    await connectDatabase();


    const cookiesString = cookie.serialize('token', label, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 gün süreyle geçerli
        path: '/',
    });
    res.setHeader('Set-Cookie', cookiesString);

    return res.status(200).json({
        success: true,
        message: "Data kaydedildi.",
        data: {
            label: label, // Veritabanına kaydedilen veriyi kullanın
        },
    });
}
