//Aperte o botão de play logo acima.
//Como jogar:
//Use as teclas seta para cima, baixo, esquerda e direita ou W A S D


//necessário consertar:
//arrumar a posição do placar conforme abaixa e aumenta resolução
//criar modo hard

function incluiPontos(){
  textAlign(CENTER);
  textSize((xTela/35.5)+(yTela/31.1));
  fill(color(30,144,255));
  rect(xTela/3.365, yTela/65, 60, 40, 12);
  fill(255);
  text(pontos1, xTela/3, yTela/15);
  fill(color(255,0,0));
  rect(xTela/1.587, yTela/65, 60, 40, 12);
  fill(255);
  text(pontos2, xTela/1.5, yTela/15);
}

function marcaPonto1(){
  if(yVaquinha < 0){
    pontos1 += 1;
    pontos.play();
    vacaMugindo3.play();
    xVaquinha = xTela/3;
    yVaquinha = yTela*0.92;
  }
}

function marcaPonto2(){
  if(yVaquinha2 < 0){
    pontos2 += 1;
    pontos.play();
    vacaMugindo3.play();
    xVaquinha2 = xTela/1.75;
    yVaquinha2 = yTela*0.92;
  }
}