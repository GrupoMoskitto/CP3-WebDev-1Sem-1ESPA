/* Criando slideShow */

// declarando as variaveis

let imagens = [
    './src/assets/img1.jpg',
    './src/assets/img2.jpeg',
    './src/assets/img3.jpg'
];

let i = 0;
let time = 5000;

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){i=0;}
        setTimeout('slideShow()',time)
}
slideShow();

// funcao para trocar background color

function trocar(color){
    document.body.style.background = color;
}

alert('Seja bem vindo! Aqui você encontra dicas sobre o que fazer na Suiça.')