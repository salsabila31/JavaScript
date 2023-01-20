// array - strings, number, objek, function, campuran

let nilai = [
    {nama:"canva", ipa:90, bahasa:70, matematika:80},
    {nama:"abel", ipa:95, bahasa:85, matematika:70},
    {nama:"genta", ipa:90, bahasa:70, matematika:60},
    {nama:"leta", ipa:90, bahasa:80, matematika:95},
]
    
let nama = ["canva", "abel", "genta", "leta"];
//nama.push("ani", "rose");

//console.log(nama.shift());

// nama.unshift("bobi", "koko");

// console.log(nama.slice(0, 3));

let mapel = ["ipa", "bahasa", "matematika"];

//console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn", "jawa"]));

//console.log(nama.splice(5,4));

//console.log(nama.pop());

//console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// })

//console.log(nilai);

nilai.filter((a) => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null));

