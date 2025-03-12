// If Else uygulama


//Sayının 50 ile 100 arasında olup olmadığının kontrolü
let sayi = 23;
if (sayi > 50 && sayi < 100) {
    console.log(`${sayi}, 50 ile 100 arasında bir değerdir.`);
}
else {
    console.log(`${sayi}, 50 ile 100 arasında bir değer değildir`);
}


//Sayının Pozitif çift sayı mı olduğunun kontrolü
if (sayi > 0) {
    if (sayi % 2 == 0) {
        console.log(`${sayi}, Pozitif çift bir sayıdır..`);
    }
    else {
        console.log(`${sayi}, pozitif tek bir sayıdır`);
    }
}
else {
    console.log(`${sayi}, Negatif bir sayıdır..`);
}


//Üç sayıdan en büyüğünün bulunması
let x = 23;
let y = 221;
let z = 14;
if (x > y && x > z) {
    console.log(`En büyük sayı X'tir değeri  :  ${x} `);
}
else {//else if bloğu kullanılarak da yazılabilir.
    if (y > x && y > z) {
        console.log(`En büyük sayı Y'dir değeri : ${y}`);
    }
    else {
        console.log(`En büyük sayi Z'dir değeri : ${z}`);
    }
}


//Vizelerin yüzde 40'ı ve finalin yüzde 60'ını toplayarak bir ortalama hesapla
//bu değer 50'den büyükse geçti , küçükse kaldı
//Final 70e eşitse ve büyükse ortalama 50'den düşük olsa da geçti
//Final 50'den küçükse ortalama 50'den büyük olsa da kaldı
let vize1 = 94;
let vize2 = 74;
let final = 45;
let ortalama = ((vize1 + vize2) / 2) * 0.4 + (final * 0.6);
console.log(`Ortalamanız : ${ortalama}`);
if (ortalama >= 50) {
    if (final > 50) {
        console.log("Geçti");
    }
    else {
        console.log("Final notu 50'nin altında olduğu için kaldı");
    }
}
else {
    if (final >= 70) {
        console.log(`Geçti`);
    }
    else {
        console.log("Kaldı");
    }
}