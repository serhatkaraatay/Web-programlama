var ogr1_ad = "Ada";
var ogr1_soyad = "Bilgi";
var ogr1_dogum = 2012;
var ogr1_ortalama = (70+70+80)/3;
var ogr1_yas = 2025 - ogr1_dogum;
console.log(ogr1_ortalama);
console.log(parseInt(ogr1_ortalama));//int veri tipine dönüştürür


var ogr2_ad = "Yiğit";
var ogr2_soyad = "Bilgi";
var ogr2_dogum = 2010;
var ogr2_ortalama = (40+40+50)/3;
var ogr2_yas = 2025 - ogr2_dogum;
console.log(ogr2_ortalama);

var gecme_notu = 50;
console.log(ogr1_ortalama >= gecme_notu);
var basarili_ogr1 = (ogr1_ortalama>=gecme_notu);//boolean tipinde olan geri dönüş değerini basarili_ogr1 değişkenine atama işlemi
console.log(basarili_ogr1);
console.log(ogr2_ortalama >= gecme_notu);
