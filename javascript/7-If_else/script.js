// If Else Koşul İfadeleri
let username = "serhatka";
let parola = "1234";
if (username == "serhatka") {
    if (parola == "1234") {
        console.log("Giriş yapıldı...");

    }
    else {
        console.log("Şifre bilgisi hatalı...");
    }
}
else {
    console.log("Username bilgisi hatalı..");
}

// If Else Koşul İfadeleri 2
let yas = 18;
let mezuniyet = "universitse";

if (yas >= 18) {
    if (mezuniyet == "lise" || mezuniyet == "universite") {
        console.log("Ehliyet alabilirsiniz");
    }
    else {
        console.log("Mezuniyet durumunuz ehliyet almaya uygun değil.");
    }

}
else {
    console.log("Ehliyet almaya uygun değilsiniz.");
}