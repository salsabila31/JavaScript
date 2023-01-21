let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Anggur", gambar:"anggur.jpg", harga:9000},
    {idmenu:2, idkategori:1, menu:"Jeruk", gambar:"jeruk.jpg", harga:5000},
    {idmenu:3, idkategori:1, menu:"Mangga", gambar:"mangga.jpeg", harga:8000},
    {idmenu:4, idkategori:1, menu:"Semangka", gambar:"615693a118407.jpg", harga:10000},
    {idmenu:5, idkategori:2, menu:"Nasi", gambar:"nasi.jpeg", harga:1500},
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
    <div class="image">
        <img src="/javascript/images/${kolom.gambar}" alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    <div>

    </div>
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2>
    </div>
    </div>
`;
})

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

console.log(tampil)