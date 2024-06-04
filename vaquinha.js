//variáveis da vaquinha
let xVaquinha = xTela/2.25;
let yVaquinha = yTela*0.92;
let comprimentoVaquinha = yTela*0.07;
let alturaVaquinha = yTela*0.07;
let diametroVaquinha = comprimentoVaquinha/2;

function mostraVaquinha(){
  image(imgVaquinha, xVaquinha, yVaquinha, comprimentoVaquinha, alturaVaquinha);
}

function movimentaVaquinha(){

  if(keyIsDown(38)){ //Tecla pra cima
    if(yVaquinha < 0){
      yVaquinha += 0;
    }
    else{
      yVaquinha -= yVelocidadeVaquinha;
    }
  }
  if(keyIsDown(40)){ //Tecla pra baixo
    if(yVaquinha+alturaVaquinha > yTela){
      yVaquinha += 0;
    }
    else{
      yVaquinha += yVelocidadeVaquinha;
    }
  }
  if(keyIsDown(37)){ //Tecla pra esquerda
    if(xVaquinha < 0){
      xVelocidadeVaquinha += 0;
    }
    else{
      xVaquinha -= xVelocidadeVaquinha;
    }
  }
  if(keyIsDown(39)){ //Tecla pra direita
    if(xVaquinha + comprimentoVaquinha > xTela){
      xVaquinha += 0;
    }
    else{
      xVaquinha += xVelocidadeVaquinha;
    }
  }
}

function verificaColisaoCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro*0.83, xVaquinha, yVaquinha, diametroVaquinha);
    if(colisao){
      xVaquinha = xTela/2.25;
      yVaquinha = yTela*0.92;
      colidiu.play();
      vacaMugindo1.play();
    }
    if(xVaquinha < xCarros[i]){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,alturaCarro*0.83, xVaquinha, yVaquinha+alturaVaquinha*0.68, diametroVaquinha);
      if(colisao){
        xVaquinha = xTela/2.25;
        yVaquinha = yTela*0.92;
        colidiu.play();
        vacaMugindo2.play();
      }
    }
  }
}