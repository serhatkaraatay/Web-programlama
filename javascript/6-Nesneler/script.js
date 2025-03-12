// Nesneler (Objects)
let kullanici = {
    "ad": "Murat",
    "soyad": "Duyar",
    "yas": 40,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "spor"]
};

let sonuc;
sonuc = kullanici;
//sonuc = kullanici.ad;
//sonuc = kullanici["ad"];
//sonuc = kullanici["adres"]["ilce"]; izmit çıktısı verir.
//sonuc = kullanici.adres.ilce;  izmit çıktısı verir.
sonuc = kullanici.hobiler[0];//sinema çıktısı verir.
console.log(sonuc);

//NESNELER UYGULAMA
let siparis1 = {
    "siparisid": 101,
    "musteriid": 12,
    "siparistarihi": "31.12.2025",
    "odemesekli": "Kredi Kartı",
    "adres": {
        "mahalle": "Yahya Kaptan mah.",
        "il": "Kocaeli",
        "ilce": "İzmit"
    },
    "satinalinanlar": [{
        "urunid": 5,
        "urunbasligi": "Iphone 16 Pro",
        "urunurl ": "http://abc.com/iphone-16-pro",
        "urunfiyati": 75000,
    },{
        "urunid": 6,
        "urunbasligi": "Iphone 16 Pro Max",
        "urunurl": "http://abc.com/iphone-16-pro-max",
        "urunfiyati": 85000
    }
]
}
let siparis2 = {
    "siparisid": 102,
    "musteriid": 12,
    "siparistarihi": "31.12.2025",
    "odemesekli": "Kredi Kartı",
    "adres": {
        "mahalle": "Yahya Kaptan mah.",
        "il": "Kocaeli",
        "ilce": "İzmit"
    },
    "satinalinanlar":[{
        "urunid": 6,
        "urunbasligi": "Iphone 16 Pro Max",
        "urunurl": "http://abc.com/iphone-16-pro-max",
        "urunfiyati": 85000
    }
    ]
}

let siparis1_toplam = (siparis1.satinalinanlar[0].urunfiyati + siparis1.satinalinanlar[1].urunfiyati)*1.2;
let siparis2_toplam = (siparis2.satinalinanlar[0].urunfiyati)*1.2;

console.log(`Sipariş 1 Toplamı : ${siparis1_toplam}`);
console.log(`Sipariş 2 Toplamı : ${siparis2_toplam}`);