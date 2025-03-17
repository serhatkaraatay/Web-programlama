// Fonksiyonlar

function selamlama(mesaj){
    console.log(`Merhaba ${mesaj}`);
}

selamlama("Mehmet");

function yashesapla(dogum_yili){
    let simdi = new Date().getFullYear();//uygulamanın çalıştığı bilgisayardaki güncel yıl bilgisi 
    return simdi-dogum_yili; //yaş bilgisini geri döndüren bir fonksiyon
}
console.log(yashesapla(2000));
function emeklilige_kalan_yil(dogum_yili,isim){
   // let simdi = new Date().getFullYear();
   // let yas = simdi-dogum_yili;
   //yas hesapla fonksiyonunu çağralım
    let yas = yashesapla(dogum_yili);
    let kalan_sene = 65-yas;
    if (kalan_sene>0){
        console.log(`Sayın ${isim}, emekli olmanıza ${kalan_sene} sene kaldı`)
    }
    else{
        console.log(`${isim} emekli oldunuz..`)
    }
}
emeklilige_kalan_yil(2000,"Ali");
