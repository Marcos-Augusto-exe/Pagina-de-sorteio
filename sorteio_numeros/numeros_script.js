let inpuntNumero = document.getElementById("numero");
let display = document.getElementById("display");
let btnSortear = document.getElementById("sortear");
let janelaSorteio = document.getElementById("janelaSorteio");
let btnNovoSorteio = document.getElementById("novoSorteio");
let btnFechar = document.getElementById("fechar");

btnSortear.addEventListener('click', abrirJanela);
btnNovoSorteio.addEventListener('click', sortear);
btnFechar.addEventListener('click', janelaSorteios);

function abrirJanela(){

    if(inpuntNumero.value > '0'){
    janelaSorteios()
    sortear()
    }else{alert("Campo vazio!")}
}

function sortear(){

    let numeros = inpuntNumero.value;
    let numerosSorteados = Math.ceil(Math.random() * numeros )
    display.innerHTML = numerosSorteados
    }
       


function  janelaSorteios(){
    
    janelaSorteio.classList.toggle('abrir');
    let fundo = document.getElementById('fundo');
    fundo.classList.toggle('abrir');
 }
