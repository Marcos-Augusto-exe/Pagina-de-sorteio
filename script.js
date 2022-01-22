let sorteio1 = document.getElementById("sorteio1");
let sorteio2 = document.getElementById("sorteio2");
let btniniciar = document.getElementById("btniniciar");
let body = document.getElementsByTagName("body")[0];


sorteio1.addEventListener('click', numeros);
sorteio2.addEventListener('click', nomes);


function numeros(){
    sorteio1.classList.toggle('nuClicado');
    btniniciar.classList.toggle('iniciarNu');
    body.classList.toggle('bodyNu');
    
    

    if(sorteio1.classList =="tbnSorteio nuClicado" ){
    let a = document.getElementById("a");
    a.href = "./sorteio_numeros/sorteio_numeros.html"
    sorteio2.classList.remove('noClicado');
    body.classList.remove('bodyNo');
    }
    else{a.href = ''}
}

function nomes(){
    sorteio2.classList.toggle('noClicado');
    body.classList.toggle('bodyNo');

    if(sorteio2.classList =="tbnSorteio noClicado" ){
    let a = document.getElementById("a");
    a.href = './sorteio_nomes/sorteio_nomes.html'
    sorteio1.classList.remove('nuClicado');
    body.classList.remove('bodyNu');
    }
    else{a.href = ''}
}