export default function(err) {
    switch (err.status) {
        case 404:
            return {
                status_code: 404,
                message: "Aradığınız kullanıcı bulunamadı." 
            }
            break;
        default:
            return {
                status_code: 500,
                message: "Bir hata ile karşılaşıldı."
            }
            break;
    }
}