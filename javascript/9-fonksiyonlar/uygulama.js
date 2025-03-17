// Fonksiyonlar Uygulama
//Kendisine gönderilen kelimeyi belirtilen kez ekrana yazan fonksiyon
function kelime_yazdir(kelime, tekrar) {
    for (let i = 0; i < tekrar; i++) {
        console.log(kelime);
    }
}
kelime_yazdir("Merhaba", 3);


//Dikdörtgenin alan ve çevresini hesaplayan fonksiyon
function alan_cevre_hesapla(uzunkenar, kisakenar) {
    let alan = uzunkenar * kisakenar;
    let cevre = (uzunkenar + kisakenar) * 2;
    console.log(`Dikdörtgenin alanı : ${alan}`);
    console.log(`Dikdörtgenin çevresi : ${cevre}`);
}
alan_cevre_hesapla(8, 3);


//Yazı tura uygulaması
function yazi_tura(){
    let random = Math.random();//0 1 arasında random değer
    if (random<0.5){
        console.log("Yazı");
    }
    else{
        console.log("Tura");
    }
}
yazi_tura();


//Kendisine gönderilen sayının tam bölenlerini dizi şeklinde döndüren fonksiyon
function bolenleri_dondur(sayi) {
    let bolenler = [];
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            bolenler.push(i);
        }
    }
    return bolenler;
}
console.log(bolenleri_dondur(30));

//Değişken sayıda parametre alan toplam isminde bir fonksiyon
function toplam(){
    let toplam = 0 ;
    console.log(arguments);
    for(let i = 0; i<arguments.length ; i++){
        toplam += arguments[i];
    }
    return toplam;
}
console.log(toplam(23,32,1,2,3));