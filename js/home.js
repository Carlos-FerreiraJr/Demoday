let paginas = document.querySelectorAll("section");
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");

botao1.onclick = function(){
    paginas[1].style.transform = "translateX(0)";
}

botao2.onclick = function(){
    paginas[2].style.transform = "translateX(0)";
}
