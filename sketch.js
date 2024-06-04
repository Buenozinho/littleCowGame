//Como jogar:
//Use as teclas seta para cima, baixo, esquerda e direita ou W A S D

//arrumar a posição do placar conforme abaixa e aumenta resolução
//criar modo hard

//Resolução da Tela
let xTela = 800;
let yTela = 700;
let colisao = false;

//Placar
let pontos1 = 0;
let pontos2 = 0;

//Variáveis da vaquinha
let xVelocidadeVaquinha = xTela/400;
let yVelocidadeVaquinha = yTela/350;

//Varáveis da vaquinha2
let xVelocidadeVaquinha2 = xTela/400;
let yVelocidadeVaquinha2 = yTela/350;

//Váriaveis dos carros
let xVelocidadeCarro1 = xTela/185;
let xVelocidadeCarro2 = xTela/165;
let xVelocidadeCarro3 = xTela/145;
let xVelocidadeCarro4 = xTela/135;
let xVelocidadeCarro5 = xTela/155;
let xVelocidadeCarro6 = xTela/170;

function setup() {
  createCanvas(xTela, yTela);
  musica.loop();
}

function draw() {
  background(imgEstrada);
  mostraVaquinha();
  mostraVaquinha2();
  mostraCarro();
  movimentaCarro();
  movimentaVaquinha();
  movimentaVaquinha2();
  saiuTela();
  verificaColisaoCarro();
  verificaColisaoCarro2()
  incluiPontos();
  marcaPonto1();
  marcaPonto2();
  //multiplayer();
}




