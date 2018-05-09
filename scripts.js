// declaração de variavéis
let paginas = document.querySelectorAll("section");
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let btnVoltar = document.querySelector('.btnVoltar');
let option = document.querySelector("header span");
let sidebar = document.querySelector(".sidebar");
let mais = document.querySelector(".details1");
let missao = document.querySelector(".missao");
let cadastro = document.querySelector(".Cadastro1");
let home = document.querySelector(".home");
let duvidas = document.querySelector(".duvidas");
let cadastro2 = document.querySelector(".Cadastro2");
// fim declaração de variavéis


// verificação de cadastro
let botaoCadastrar = document.querySelector("#botaoCadastrar").addEventListener("click",cadastrado);
function cadastrado(){
        let fun = document.querySelector("#fun").value;
        let ap = document.querySelector("#ap").value;
        let num = document.querySelector("#num").value;
        let nasc = document.querySelector("#nasc").value;
        let email = document.querySelector("#email").value;
        let cpf = document.querySelector("#cpf").value;
        let ender = document.querySelector("#ender").value;

        let info = [fun, ap, num,nasc,email,cpf,ender];
        for(let dados of info){
            console.log(dados);
            if( dados != ""){
                document.getElementById("cad").innerHTML = "Cadastrado";
                document.getElementById("cad").style.color="green";
                }else{
                    document.getElementById("cad").innerHTML = "Preencha todos os campos";
                     document.getElementById("cad").style.color="red";}
        }
  
    }

let botaoCadastrar2 = document.querySelector("#botaoCadastrar2").addEventListener("click",cadastrado2);
function cadastrado2(){
    let cadName = document.querySelector("#name").value;
    let cadNumber = document.querySelector("#number").value;
    let cadBorn = document.querySelector("#born").value;
    let cadEmail = document.querySelector("#email").value;
    let cadCpf = document.querySelector("#cpf").value;
    let cadAdress = document.querySelector("#adress").value;
    let cadAbility = document.querySelector("#ability").value;

    let cadData = [cadName,cadNumber,cadBorn,cadEmail,cadCpf,cadAdress,cadAbility];
    for(let data of cadData){
        console.log(data);
        if(data != "" ){
            document.querySelector("#cadValidation").innerHTML="Cadastrado";
            document.querySelector("#cadValidation").style.color="green";
        }else{
            document.querySelector("#cadValidation").innerHTML="Preencha todos os campos";
            document.querySelector("#cadValidation").style.color="red";
        }
    }
}
// fim verificação de cadastro
 
// funções dos botoes
botao1.onclick = function(){
    paginas[1].style.transform = "translateX(0)"; 
}
botao2.onclick = function(){
    paginas[5].style.transform = "translateX(0)";
}
btnVoltar.onclick = function(){
    paginas[5].style.transform = "translateX(-100%)";
    paginas[4].style.transform = "translateX(-100%)";
    paginas[3].style.transform= "translateX(-100%)";
    paginas[2].style.transform= "translateX(-100%)";
    paginas[1].style.transform = "translateX(-100%)";

}
// fim da funcoes deos botoes

// ao passar o mouse pela sidebar
option.onpointerenter = function(){
    sidebar.style.display= "block";
    // funções ao clicar na lista do sidebar
    mais.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(0)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    missao.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(0)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    cadastro.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(0)";
    }
    home.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    duvidas.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(0)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    cadastro2.onclick = function(){
        paginas[5].style.transform = "translateX(0)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)"; 
    }
// fim ao passar o mouse pela sidebar
 }  

// ao tirar o mouse da sidebar
sidebar.onpointerleave = function(){
    sidebar.style.display= "none";
 }
//  fim aoo tirar o mouse da sidebar
