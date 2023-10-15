import cookie from 'cookie';

export default async function getLabel(req, res) {  
    var cookies = cookie.parse(req.headers.cookie || '');

    if(cookies.myLabel) {
        return res.status(200).json({
            status: true,
            message: 'Kullanıcı bulundu.'
        })
    } else {
        return res.status(200).json({
            status: false,
            message: 'Kullanıcı bulunamadı.'
        })
    }
} 