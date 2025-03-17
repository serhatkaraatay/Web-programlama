// Dates and Times
let simdi = new Date();
//get methods
sonuc = simdi.getDate();//gün bilgisi 
sonuc = simdi.getDay();//0-6 arasında bir değer verir haftanın günlerini temsil eder
sonuc = simdi.getFullYear(); //yıl bilgisini verir


//set methods

simdi.setFullYear(2027); 
simdi.setMonth(4);
simdi.setDate(21);

let dogum_tarihi = new Date(1990,5,15);//ay yıl gün şeklinde bir tarih oluşturulur.


sonuc = simdi;
//sonuc = dogum_tarihi;
let yas_bilgisi = simdi.getFullYear()-dogum_tarihi.getFullYear();
console.log(yas_bilgisi);
console.log(sonuc);