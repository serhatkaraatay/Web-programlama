let urunler = ["Kiraz","Karpuz","Kavun","Erik"];
let adet = urunler.length;
let urun1 = urunler[0];
let urun_son = urunler[adet-1];
let kavun_index = urunler.indexOf("Kavun");
urunler.push("Çilek");
urunler.pop();
urunler.pop();
console.log(`Ürünler ${adet} adettir.`)
console.log(`Listedeki ilk ürün ${urun1}, son ürün ${urun_son} `)
console.log(`Kavun dizinin ${kavun_index}. indexindedir.`)
console.log(urunler);
//---------------------------------------------------
let ogrenci1 = ["Yiğit","Bilgi",2010,[60,90,80]];
let ogrenci2 = ["Ada","Bilgi",2012,[60,80,80]];
let ogrenci3 = ["Çınar","Turan",2017,[60,50,80]];
let ogrenciler = [ogrenci1,ogrenci2,ogrenci3];
//Yaş Bilgileri
console.log(`${ogrenci1[0]}, ${2025-ogrenci1[2]} yaşında.`);
console.log(`${ogrenci2[0]}, ${2025-ogrenci2[2]} yaşında.`);
console.log(`${ogrenci3[0]}, ${2025-ogrenci3[2]} yaşında.`);
//Not ortalamaları
let yigit_not = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2])/3;
let ada_not = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2])/3;
let cinar_not = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2])/3;
console.log(`Yiğit'in ders notu ortalaması : ${yigit_not}`);
console.log(`Ada'nın ders notu ortalaması : ${ada_not}`);
console.log(`Çınar'ın ders notu ortalaması : ${cinar_not}`);

console.log(ogrenciler);