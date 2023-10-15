import cookie from 'cookie';

export default async function deleteLabel(req, res) {
    // Çerez adını ve diğer ayarları içeren "set-cookie" başlığını oluşturun
    const deleteCookie = cookie.serialize('myLabel', '', {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 0, // Çerezin hemen sona ermesini sağlar
        path: '/',
    });

    // "set-cookie" başlığını yanıta ekleyin
    res.setHeader('Set-Cookie', deleteCookie);

    return res.send({
        success: true,
        message: "Kullanıcı etiketi başarıyla silindi.",
    });
}