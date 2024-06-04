//Comprimento e altura
let comprimentoCarro = xTela/10;
let alturaCarro = yTela/10;

//Posição dos carros
let xCarros = [xTela, xTela, xTela, xTela, xTela, xTela];
let yCarros = [yTela*0.1, yTela*0.24, yTela*0.37, yTela*0.525, yTela*0.655, yTela*0.795];

//let xCarro4 = -xTela/20; //para ir no sentido contrario

function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  xCarros[0] -= xVelocidadeCarro1;
  xCarros[1] -= xVelocidadeCarro2;
  xCarros[2] -= xVelocidadeCarro3;
  xCarros[3] -= xVelocidadeCarro4;
  xCarros[4] -= xVelocidadeCarro5;
  xCarros[5] -= xVelocidadeCarro6;
}

function saiuTela(){
  for(let i = 0; i < imgCarros.length; i++){
    if(xCarros[i] < -(xTela*0.1)){
      xCarros[i] = xTela;
    }
  }
}
