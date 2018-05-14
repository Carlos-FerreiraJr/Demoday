let paginativa = document.querySelector("section");
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let back = document.querySelectorAll(".back");
let next = document.querySelectorAll(".next");
let quadrado2 = document.querySelector(".quadradinho2");
let quadrado3 = document.querySelector(".quadradinho3");
let quadrado4 = document.querySelector(".quadradinho4");
let quadrado5 = document.querySelector(".quadradinho5");
let quadrado6 = document.querySelector(".quadradinho6");
let quadrado7 = document.querySelector(".quadradinho7");

let quadrado02 = document.querySelector(".quadradinho02");
let quadrado03 = document.querySelector(".quadradinho03");
let quadrado04 = document.querySelector(".quadradinho04");
let quadrado05 = document.querySelector(".quadradinho05");
let quadrado06 = document.querySelector(".quadradinho06");
let quadrado07 = document.querySelector(".quadradinho07");

let quadrado002 = document.querySelector(".quadradinho002");
let quadrado003 = document.querySelector(".quadradinho003");
let quadrado004 = document.querySelector(".quadradinho004");
let quadrado005 = document.querySelector(".quadradinho005");
let quadrado006 = document.querySelector(".quadradinho006");
let quadrado007 = document.querySelector(".quadradinho007");

let quadrado0002 = document.querySelector(".quadradinho0002");
let quadrado0003 = document.querySelector(".quadradinho0003");
let quadrado0004 = document.querySelector(".quadradinho0004");
let quadrado0005 = document.querySelector(".quadradinho0005");
let quadrado0006 = document.querySelector(".quadradinho0006");
let quadrado0007 = document.querySelector(".quadradinho0007");

let i = 0;
let j = 0;
let k = 0;

for(i;i<back.length;i++){
    back[0].onclick = function(){  
        quadrado2.style.display="block";
        quadrado3.style.display="block";
        quadrado4.style.display="block";
        quadrado5.style.display="none";
        quadrado6.style.display="none";
        quadrado7.style.display="none";
    }
    back[1].onclick = function(){  
        quadrado02.style.display="block";
        quadrado03.style.display="block";
        quadrado04.style.display="block";
        quadrado05.style.display="none";
        quadrado06.style.display="none";
        quadrado07.style.display="none";
    }
    back[2].onclick = function(){  
        quadrado002.style.display="block";
        quadrado003.style.display="block";
        quadrado004.style.display="block";
        quadrado005.style.display="none";
        quadrado006.style.display="none";
        quadrado007.style.display="none";
    }
    back[3].onclick = function(){  
        quadrado0002.style.display="block";
        quadrado0003.style.display="block";
        quadrado0004.style.display="block";
        quadrado0005.style.display="none";
        quadrado0006.style.display="none";
        quadrado0007.style.display="none";
    }
}

setTimeout(function(){
    paginativa.style.marginTop="-4em";
    paginativa.style.paddingBottom="4em";
    
},2000)

for (j;j<next.length;j++){
    next[0].onclick = function (){
        quadrado2.style.display="none";
        quadrado3.style.display="none";
        quadrado4.style.display="none";
        quadrado5.style.display="block";
        quadrado6.style.display="block";
        quadrado7.style.display="block";
    }
    next[1].onclick = function(){
        quadrado02.style.display="none";
        quadrado03.style.display="none";
        quadrado04.style.display="none";
        quadrado05.style.display="block";
        quadrado06.style.display="block";
        quadrado07.style.display="block";  
    } 
    next[2].onclick = function(){
        quadrado002.style.display="none";
        quadrado003.style.display="none";
        quadrado004.style.display="none";
        quadrado005.style.display="block";
        quadrado006.style.display="block";
        quadrado007.style.display="block";  
    }
    next[3].onclick = function(){
        quadrado0002.style.display="none";
        quadrado0003.style.display="none";
        quadrado0004.style.display="none";
        quadrado0005.style.display="block";
        quadrado0006.style.display="block";
        quadrado0007.style.display="block";  
    }
}









// botao1.onclick = function(){
//     paginas[1].style.transform = "translateX(0)";
// }

// botao2.onclick = function(){
//     paginas[2].style.transform = "translateX(0)";
// }


