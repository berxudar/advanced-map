/*
app.service('$language', function($http, $q){


        this.getData = function() {
            return $http({
                method: 'GET',
                url: '/map-system/scripts/languages/lang-tr.json',
                // cache will ensure calling ajax only once
                cache: true
            }).then(function (data) {
                // this will ensure that we get clear data in our service response
                return data.data;
            });
        };

});
*/
var lang ={};
lang.tr={
    general : {
        title:"BalistaGIS Software",
        close:"Kapat",
        save:"Kaydet",
        have:"Mevcut",
        add:"Ekle",
        createLayer:"Katman Oluştur",
        leafletAttr:"Balista Bilişim Yazılım A.Ş",
        moduls:"Modüller",
        signup:"Kayıt Ol",
        ignore:"Vazgeç",
        cancel:"İptal",
        smallint:"Küçük Sayı",
        integer:"Normal Sayı",
        bigint:"Büyük Sayı",
        real:"Küçük Ondalıklı Sayı",
        double:"Büyük Ondalıklı Sayı",
        text:"Yazı",
        date:"Tarih",
        timestamp:"Tarih - Saat",
        boolean:"Mantıksal Değer 1/0",
        delete:"Sil"

    },
    toolEdit:{
        label:"Edit",
        draw:{
            polygon:"Yeni Bir Polygon Çiz",
            polyRectangle:"Yeni Bir Dikdörtgen Çiz",
            polyCircile:"Yeni Bir Daire Çiz",
            polyEllips:"Yeni Bir Elips Çiz",
            polyArc:"Yeni Bir Kapalı Yay Çiz",
            polyLineBezier:"Yeni Bir Kapalı Bezier Çiz",
            line:"Yeni Bir Çizgi Çiz",
            lineRectangle:"Yeni Bir Dikdörtgen Çiz",
            lineCircle:"Yeni Bir Çember Çiz",
            lineArc:"Yeni Bir Yay Çiz",
            lineBezier:"Yeni Bir Bezier Çiz",
            point:"Yeni Bir Nokta At",
            marker:"Yeni Bir Marker At",
            edit:"Çizili Geometrileri Düzenle",
            delete:"Çizili Katmanları Sil"
        }
    },
    login:{
      login:"Giriş Yap",
      signin:"Kullanıcı Girişi",
      signinForm:"Üye Giriş Formu",
      signUpForm:"Yeni Üye Kayıt Formu",
      name:"Ad Soyad",
      phoneNumber:"Telefon Numarası",
      email:"Email Adresi",
      adress:"Adresi",
      contract:"<a href='#' accept-agreement>Sözleşme</a>'yi Okudum Kabul Ediyorum"
    },
    searchBox:{
        btnMenuOnOff:"Menü Aç/Kapat",
        inptSearchBox:"İlçe, Mahalle, Hastane, Okul ...",
        btnSearch:"Arama Yap",
        btnLayer:"Katman Kutusunu Aç"
    },
    leftmenu:{
        label:"Basemap Haritalar & Analizler",
        basemap:"Basemap Haritalar",
        satallite:"Uydu Görüntüleri",
        analysis:"Analizler",
        freemaps:"Ücretsiz Haritalar",
        opacity:"Şeffaflık"
    },
    vlList:{
        label:"Vektör Katman Listesi",
        iconAdLayer:"Yeni Katman Ekle",
        iconConnectDB:"Veritabanına Bağlan",
        iconSearchDB:"Veritabanını Listele",
        iconRefresh:"Seçili Katmanı Güncelle",
        iconEdit:"Seçili Katmanın Çizim Özelliklerini Aç",
        iconDown:"Katmanı Alt Kata İndir",
        iconUp:"Katmanı Üst Kata Çıkar",
        iconBottom:"Katmanı En Alta İndir",
        iconTop:"Katmanı En Üste Çıkar",
        iconSettings:"Seçili Katmanın Ayar Panelini Aç",
        iconCloudDown:"Seçili Katmanı İndir",
        iconCloudUp:"Seçili Katmanı Sisteme Gönder",
        iconZoom:"Katmanı Haritaya Sığdır",
        iconSnap:"Katmanın Nokta Yakalama Özelliğini Aç",
        iconLayerSetting:"Katmanın Ayar Panelini Aç",
        iconRemove:"Katmanı Listeden Kaldır",
        dialogs:{
            laySet : {
                label:"Katman Ayarı",
                tab1:{
                    label:"Veriler"
                },
                tab2:{
                    label:"Genel",
                    h1:"Katmanın Genel bilgileri",
                    inptLayNam:"Katman Adı",
                    inptLayDesc:"Katmanın Açıklaması",
                    inptMinZoom:"Görünebilir Minimum Zoom Seviyesi",
                    inptMaxZoom:"Görünebilir Maximum Zoom Seviyesi",
                    inptAutoSave:"Otomatik Kayıt Hatırlatma Süresi (dk)"
                },
                tab3:{
                    label:"Görünüm",
                    h11:"KATMANIN İLK AÇILIŞINDAKİ GÖRÜNÜR SİTİLİ",
                    h12:"MOUSE KATMANIN ÜZERİNDEYKEN GÖRÜNÜM SİTİLİ",
                    h13:"KATMAN SEÇİLİ DURUMDAYKEN GÖRÜNÜM SİTİLİ",
                    layObj:"KATMANIN NESNESİ",
                    layStatus:"DURUM",
                    layColor:"RENK",
                    layHex:"HEX",
                    layWidth:"KALINLIK",
                    layOpacity:"OPAKLIK",
                    layLineStyle:"Çizgi Özellikleri",
                    layFillStyle:"Dolgu Özellikleri"
                },
                tab4:{
                    label:"Sorgular"
                },

            },
            addNewVecLay:{
                label:"Yeni Katman Ekleme Paneli",
                createNewLayer:"Yeni Katman Oluştur",
                tab1:{
                    label:"Yetkili Katmanlar"
                },
                tab2:{
                    label:"Oluşturulan Katmanlar"
                }
            },
            createNewVecLay:{
                label:"YENİ VEKTÖR KATMANI OLUŞTURMA",
                layname:"Katman Adı Giriniz",
                descrpt:"Açıklama Giriniz",
                type:"Vektör Katman Tipi Seçiniz",
                crs:"Crs giriniz",
                layerMainInfo:"Katman Bilgileri Giriş Formu",
                layTabProp:"Katman Tablo Sütunları Giriş Formu",
                select : 'BİR TİP SEÇ',
                alreadyHavefile:"VAR OLAN SUTUNLAR",
                writeFieldName:"Sütün Adı Giriniz"

            }
        }
    }

};


