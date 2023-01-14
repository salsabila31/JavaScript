zodiak(4, 25);

function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln >0 && bln <13 && tgl >0 && tgl <32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "capricorn";
        }
        if (tgl >19 ) {
            hasil = "aquarius";
        }
        if (bln == 2) {
            hasil = "aquarius";
            if (tgl >18 && tgl <30) {
                hasil = "pisces";
            }
        }
        if (bln == 4) {
            hasil = "aries";
            if (tgl > 18 && tgl <31) {
                hasil = "taurus";
            }
        }
    }
    console.log(hasil);
}

lulus(75);
function lulus(angka) {
    let hasil = "Nilai tidak valid";
    if (angka >0 && angka <=100) {
        
    }
    if (angka >=75 ) {
        hasil = "Anda lulus";
    }
    else {
        hasil = "Anda tidak lulus"
    }
    console.log(hasil);
}

console.log(terbilang(587600));
function terbilang(angka) {
    var huruf = [" ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];

    if (angka < 12) {
        return huruf[angka];
    } 
    else if (angka <20) {
        return terbilang(angka-10)+" belas ";
    }
    else if (angka <100) {
        return terbilang(Math.floor((angka)/10))+" puluh "+terbilang((angka)%10);
    }
    else if (angka <200) {
        return "seratus"+terbilang((angka)-100);
    }
    else if (angka <1000) {
        return terbilang(Math.floor((angka)/100))+" ratus "+terbilang((angka)%100);
    }
    else if (angka <2000) {
        return "seribu"+terbilang((angka)-1000);
    }
    else if (angka <10000) {
        return terbilang(Math.floor((angka)/1000))+" ribu "+terbilang((angka)%1000);
    }
    else if (angka <1000000) {
        return terbilang(Math.floor((angka)/10000))+" juta "+terbilang((angka)%10000);
    }
    else if (angka <1000000000) {
        return terbilang(Math.floor((angka)/100000))+" milyar "+terbilang((angka)%1000000);
    }
    else if (angka <1000000000000) {
        return terbilang(Math.floor((angka)/1000000))+" triliun "+terbilang((angka)%1000000000);
    }
}

console.log(prima(9));
function prima(bilangan) {
    let pembagi = 0;
    for (let i = 1; i <= bilangan; i++) {
        if (bilangan%i == 0) {
            pembagi++
        }
    }
    if (pembagi == 2) {
        return "prima";
    }
    else{
        return "bukan prima";
    }
}