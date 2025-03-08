// Numbers
let sonuc ;
sonuc = 10;
sonuc = "10";
sonuc = parseFloat("110.7");
sonuc = parseInt("10a");//çevirebildiği kısımı çevirir a başta olursa NaN dönüş verir
sonuc = isNaN("a110"); //true döner

sonuc = Number.isInteger(10.2);//false döner

let sayi = 10.5456;
sonuc = sayi.toPrecision(5);//5 basamaklı dönüş verir string tipte
sonuc = sayi.toFixed(2); //ondalıklı kısım 2 basamaklı gelir
//ceil her zaman üste yuvarlar  , floor her zaman aşağı yuvarlar
//round en yakına yuvarlar
sonuc = Math.sqrt(25); //5 çıktısı verir 
//pow üst alma işleminde kullanılır
sonuc= Math.pow(2,4); //16 çıktısı verir
sonuc = Math.floor(Math.random()*10);//0 ile 10 arasında random değer üretir +1 diyerek 1den başlayabilir
// math.floor ile üretilen random değer alt değere yuvarlanır 
console.log(typeof sonuc);
console.log(sonuc);