function yazdir() {
    console.log("beni caistir");
}
// yazdir();


function isimileyazdir(isim) {
    console.log(isim);
}
isimileyazdir("Liverpool tuttugum takim");

function toplama(a,b) {

    var sonuc = document.getElementById("islemsonucu");
    sonuc.innerHTML = a+b;
}
toplama(3,5);

function carpma(aa,bb) {
    console.log(aa*bb);
}
carpma(99,56);

function islem(a,b,islemcesidi) {
    if(islemcesidi=="*") {
        console.log("islem sonucu: " + a*b);
    }
        else if(islemcesidi=="+"){
            console.log("islem sonucu: " + (a+b));
        }
            else if(islemcesidi=="/"){
                console.log("islem sonucu: " + a/b);
        }
    }

    islem(88,123,"*");
