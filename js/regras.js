var barraVida = new Sprite();
var width = 300;
var height = 20;
var x = 70;
var y = 50;
var health = 10;	
var maxHealth = 10;


// Função responsável pelo controle da vida do personagem, caso a vida chegue a zero, chama o fim de jogo
barraVida.descresce = function (){
	if(health > 1 ){
		health = health-1;
		console.log(health);
	}else{
	console.log("Fim de Jogo");
	localStorage.setItem("score", pc.score);
	window.open("deadEnd.html", "_self" );
	}
	
}

//Função para desenhar a barra de vida
barraVida.desenhar = function (){
	// fundo da barra da vida cinza
	ctx.fillStyle = "lightgrey";
	ctx.rect(x, y, width, height);
	ctx.fill();
	
	
	
	//barra da vida, muda de cor conforme perde vida
	ctx.beginPath();
	ctx.strokeStyle = 'green';
	if((health / maxHealth) >= 0.5)				
		ctx.fillStyle = '#6dff33';
	else if((health / maxHealth) >= 0.2){	
		ctx.fillStyle = '#ff8000';
		ctx.strokeStyle = 'orange';
	}					
	else{
		ctx.fillStyle = '#ff3333';
		ctx.strokeStyle = 'red';
	}	
	ctx.rect(x, y, width * (health / maxHealth), height);
	ctx.fillRect(x,y,width * (health / maxHealth),height);			
	ctx.stroke();
	ctx.beginPath();

	
	//Pontuação do jogador
	ctx.fillStyle = 'black';
	ctx.font = "18px sans-serif";
	ctx.fillText("Score:" +pc.score, x, y+17);
	ctx.stroke();
	
	
	
	
	/*Informa o jogador para recarregar o goku
	if(resfriamento == 15){
		ctx.fillStyle = 'black';
		ctx.font = "28px sans-serif";
		ctx.fillText("Aperte R para recarregar o Ki", (tela.width/4.5), 30);
		ctx.stroke();
	}*/
}