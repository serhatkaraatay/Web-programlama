// Diziler
let urunler = ["Iphone 15","Iphone 16","Iphone 17"];
let fiyatlar = [50000,60000,70000];
let renkler = ["Gold","Black","Silver"];
let sonuc1 ;
sonuc1 = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]} `
sonuc1 = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]} `
sonuc1 = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[1]} `
let urun1 = ["Iphone 15",50000,["Gold","Black","Silver"]];


//güncelleme
urun1[0] = "Iphone 15 Pro";

sonuc1 = `${urun1[0]} ${urun1[1]} ${urun1[2][2]}`;

console.log(sonuc1);

// Dizi metodları

let ogrenciler = ["Çınar","Yiğit","Ada"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");
//eleman silme
sonuc = ogrenciler.pop(); //sondaki eleman silinir
// sonuc=ogrenciler.shift() ise ilk eleman silinir.
sonuc = ogrenciler.push("Sena");//sona eklenir
sonuc = ogrenciler.unshift("Ahmet");//başa eklenir.
//eleman arama
//sonuc = ogrenciler.indexOf("Yiğit"); //elemanın indeksini verir.
sonuc = ogrenciler.includes("Yiğit"); //boolean türünde dönüş verir aranan eleman varsa true döner
//silme , ekleme
//sonuc = ogrenciler.splice(0,1);//0. konumdan itibaren 1 eleman sil
sonuc = ogrenciler.splice(0,0,"Ali","Demir");//eleman silinmez ekleme yapılır
console.log(sonuc);
console.log(ogrenciler);
