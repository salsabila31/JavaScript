let object = {
    nama : "smk revit",
    telp : 6543282,

    buah : ['apel', 'mangga', 'pisang'],

    coba : function () {
        return "coba function dalam object"
    },

    boleh : true,
    "tulis aja" : 1237632907484,
};

console.log(object.nama);
console.log(object.telp);
console.log(object.boleh);
console.log(object.coba());
console.log(object.buah[1]);
console.log(object["tulis aja"]);