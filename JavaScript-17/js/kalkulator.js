let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#tampil");

tampil.value = btn[8].innerHTML;

//console.log(btn[9].innerHTML);

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = function () {
        //console.log(btn[9].innerHTML);
        tampil.value = btn[index].innerHTML;
    }
}