//Imagens do jogo
let imgEstrada;
let imgVaquinha;
let imgVaquinha2;
let imgCarro;
let imgCarro2;
let imgCarro3;
let imgCarro4;

//Sons do jogo
let musica;
let colidiu;
let pontos;
let vacaMugindo1;
let vacaMugindo2;
let vacaMugindo3;

function preload(){
  musica = loadSound("sons/trilha.wav");
  pontos = loadSound("sons/pontos.wav");
  colidiu = loadSound("sons/colidiu.wav");
  vacaMugindo1 = loadSound("sons/vaca-mugindo1.wav");
  vacaMugindo2 = loadSound("sons/vaca-mugindo2.wav");
  vacaMugindo3 = loadSound("sons/vaca-mugindo3.wav");
  imgEstrada = loadImage("imagens/estrada.png");
  imgVaquinha = loadImage("imagens/imgvaquinha.png");
  imgVaquinha2 = loadImage("imagens/imgvaquinha-2.png");
  imgCarro = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarro4 = loadImage("imagens/carro-4.png")
  imgCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro4, imgCarro2, imgCarro3];

  
  //musica = loadSound("sons/trilha.mp3");
  //colidiu = loadSound("sons/colidiu.mp3"); //vai na função de colisão depois
  //pontos = loadSound("sons/pontos.wav"); //vai nas funções dos pontos depois
}