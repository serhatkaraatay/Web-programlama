// Scopes

// global scope
var isim = "Mehmet";
function yazdir() {//function scope
    var isim = "ahmet";
    var yas = 18;
    console.log(isim);
    console.log(yas);
}
//function scope'ta tekrar bir değer atandı ve fonksiyon çalıştırıldığında function scope içinde tanımlanan değer yazdırılır
yazdir();
console.log(isim);
//yas değişkenini console.log ile yazdırmak istediğimizde hata alırız.
//global scope içerisinde tanımlanmayan değişken özel scope içerisinden alınıp kullanılamaz
//glocal scope içerisinde tanımlanan değişken özel scope içerisinde de erişilir olur

if (true){
    let isim = "Canan";
    console.log(isim);
}
//if bloğunda tanımlanan bir değişken aslında global kapsamda tanımlanmış olur.
//for ve while blokları içerisinde de yeni bir scope oluşmaz.(let, cons)
//eğer let ile tanımlanırsa bir scope geçerli olur
//let ile blok içerisinde tanımlandığında global scope içerisinde değişkenin değeri değişmez


console.log(isim);