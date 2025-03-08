//Strings
var ad = "Salih";
console.log(ad[1]);//a çıktısı verilir
var soyad = "Turan";
var yas = 40;
var sehir = "Kocaeli";
var mesaj = "Adım" + " " + ad + " ve soyadım " + soyad + ". " + sehir + "\'de yaşıyorum.Emekliliğe " + (65-yas) + " yılım kaldı";
console.log(mesaj);

//Template Strings
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`
console.log(mesaj);

//String metotları

var kursAdi = " Web geliştirme eğitimi ";
var sonuc ;
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.length;
sonuc = kursAdi[21];//i çıktısı verilir.
sonuc = kursAdi.slice(0,5);//web g çıktısı verilir. 5. karakter alınmaz
sonuc=kursAdi.slice(10); //10. indexten sonraki tüm kısmı alır
sonuc = kursAdi.substring(0,6);//slice ile aynı mantıkta
sonuc = kursAdi.replace("eğitimi","kursu");
console.log(kursAdi);
sonuc = kursAdi.trim();//baştaki ve sondaki boşlukları siler.
//trimEnd ve trimStart komutları da bulunuyor.
sonuc = kursAdi.indexOf("Web");//1 çıktısı verir w karakteri 1. indexten başlar
sonuc = kursAdi.split(" ");//belirtilen karaktere göre elemanlar bölünür ve listeye ayrı ayrı eklenir
sonuc = kursAdi.startsWith(" Web");
console.log(sonuc);