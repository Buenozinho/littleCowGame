//variáveis da vaquinha
let xVaquinha2 = xTela/2;
let yVaquinha2 = yTela*0.92;
let comprimentoVaquinha2 = yTela*0.07;
let alturaVaquinha2 = yTela*0.07;
let diametroVaquinha2 = comprimentoVaquinha2/2;

function mostraVaquinha2(){
  image(imgVaquinha2, xVaquinha2, yVaquinha2, comprimentoVaquinha2, alturaVaquinha2);
}

function movimentaVaquinha2(){

  if(keyIsDown(87)){ //Tecla pra cima
    if(yVaquinha2 < 0){
      yVaquinha2 += 0;
    }
    else{
      yVaquinha2 -= yVelocidadeVaquinha2;
    }
  }
  if(keyIsDown(83)){ //Tecla pra baixo
    if(yVaquinha2+alturaVaquinha2 > yTela){
      yVaquinha2 += 0;
    }
    else{
      yVaquinha2 += yVelocidadeVaquinha2;
    }
  }
  if(keyIsDown(65)){ //Tecla pra esquerda
    if(xVaquinha2 < 0){
      xVelocidadeVaquinha2 += 0;
    }
    else{
      xVaquinha2 -= xVelocidadeVaquinha2;
    }
  }
  if(keyIsDown(68)){ //Tecla pra direita
    if(xVaquinha2 + comprimentoVaquinha2 > xTela){
      xVaquinha2 += 0;
    }
    else{
      xVaquinha2 += xVelocidadeVaquinha2;
    }
  }
}

function verificaColisaoCarro2(){
  for(let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro*0.83, xVaquinha2, yVaquinha2, diametroVaquinha2);
    if(colisao){
      xVaquinha2 = xTela/1.75;
      yVaquinha2 = yTela*0.92;
      colidiu.play();
      vacaMugindo1.play();
    }
    if(xVaquinha2 < xCarros[i]){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,alturaCarro*0.83, xVaquinha2, yVaquinha2+alturaVaquinha2*0.68, diametroVaquinha2);
      if(colisao){
        xVaquinha2 = xTela/1.75;
        yVaquinha2 = yTela*0.92;
        colidiu.play();
        vacaMugindo2.play();
      }
    }
  }
}