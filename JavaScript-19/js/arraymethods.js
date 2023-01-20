// array - strings, number, objek, function, campuran

let nilai = [
    {nama:"canva", ipa:90, bahasa:70, matematika:80},
    {nama:"abel", ipa:95, bahasa:85, matematika:70},
    {nama:"genta", ipa:90, bahasa:70, matematika:60},
    {nama:"leta", ipa:90, bahasa:80, matematika:95},
]
    
let nama = ["canva", "abel", "genta", "leta"];
nama.push("ani", "rose");

//console.log(nama.shift());

nama.unshift("bobi", "koko");

console.log(nama.slice(0, 3));

//console.log(nama.splice(5,4));

//console.log(nama.pop());

//console.log(nilai[0].nama);
console.log(nama);