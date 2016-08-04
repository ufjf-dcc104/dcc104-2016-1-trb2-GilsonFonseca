// Inicialização das Variavéis que receberão as imagens de fundo
	var tela = document.getElementById("tela");
	var ctx = tela.getContext("2d");
	var cooldown = 50;
	var audioLib;
	var TS = 40;
	var fps = 50;
	var dt = 1/fps;
	var G = 200;
	var dontPlay = 1;
	//carregando todas as imagens
	var imgLib = new ImageResources();
	imgLib.addImage("frente", "img/backgrounds/block2.png");
	imgLib.addImage("fundo", "img/backgrounds/backcamp.png");
	imgLib.addImage("montanha", "img/backgrounds/backrocks.png");
	imgLib.addImage("bloco", "img/backgrounds/block.png");
	imgLib.addImage("bloco2", "img/backgrounds/block2.png");
	imgLib.addImage("hero","img/goku.png");
		
	// Função responsável pela geração de inimigos
	function gimmeBlood(){
		if(inimigos.length < 2)
			while(inimigos.length < 2 ){
				criaInimigo(439, 40);
			}			
	};

	function passo(){
		
		//Limpar a tela
			ctx.clearRect(0,0, tela.width, tela.height);
			
		audioLib = new AudioResources(1);
		audioLib.load("soundt", "sound/DBAA001.ogg");
		if(isPlaying == 0)
			audioLib.play("soundt");
		
		trocaMapa();
		cooldownTempo --;
		desenhaMapa();
		barraVida.desenhar();		
		
		
		pc.movePC(dt);			
		pc.restricoes();
		pc.desenhar();
		
		for (var i in tiros) 
			tiros[i].mover();
		for (var i in tiros)
			tiros[i].restricoes();
		for (var i in tiros)
			tiros[i].desenhar();
		
		for (var i in inimigos) 
				inimigos[i].mover();
		for (var i in inimigos)
			inimigos[i].restricoes();
		for (var i in inimigos) {
			inimigos[i].desenhar();
			}
			
		for (var i in tirosInimigos) 
				tirosInimigos[i].mover();
		for (var i in tirosInimigos)
				tirosInimigos[i].restricoes();
		for (var i in tirosInimigos) {
				tirosInimigos[i].desenhar();
			}
		 //Tratamento das Colisões
			for (var i in inimigos) {
				if(pc.danificado<=0 && pc.colidiuComCircular(inimigos[i])){
					if(pc.isPunching == false){
						pc.danificado = cooldown;
						barraVida.descresce();
						if(inimigos[i].x>pc.x){
							pc.vx -=800;
							pc.vy = -200;
						}
						else{
							pc.vx +=200;
							pc.vy = -200;	
						}
					}else{
						
						inimigos[i].vx=0;
						inimigos[i].ax=0;
						inimigos[i].vy=0;
						inimigos[i].ay=0;
						if(pc.punching == 10){
							excluir.push(inimigos[i]);	
							pc.score = pc.score+10;
						}						
					}
					
					//inimigos[i].danificado = cooldown;
					
										
				}
				for(var j in tiros)
				if(tiros[j].colidiuComCircular(inimigos[i])){
					pc.score = pc.score+10;
					excluir.push(inimigos[i]);
					console.log(tiros[j].elimina);
					if(tiros[j].elimina == true){
						excluirTiros.push(tiros[j]);
						tiros[j].x = -1200;
						tiros[j].vx = 0;
					}
					else
						if(tiros[j].x > tela.width+20){
							excluirTiros.push(tiros[j]);
							tiros[j].x = -1200;
							tiros[j].vx = 0;
						}
				}
			}
			for(var j in tirosInimigos){
				if(pc.colidiuComCircular(tirosInimigos[j])){
						
						pc.danificado = cooldown;
						barraVida.descresce();
						excluirTirosInimigos.push(tirosInimigos[j]);
						tirosInimigos[j].x = -1200;
						tirosInimigos[j].vx = 0;
						
						
					}
			}
			for(var e in excluirTirosInimigos){
				tirosInimigos.splice(tirosInimigos.indexOf(excluirTirosInimigos[e]),1);
			}
			for(var e in excluirTiros){
				tiros.splice(tiros.indexOf(excluirTiros[e]),1);
			}
			
			for(var e in excluir){
				inimigos.splice(inimigos.indexOf(excluir[e]),1);
			}
			excluir = [];
			excluirTiros = [];
			excluirTirosInimigos = [];
		gimmeBlood();
	}
	
	setInterval(passo, 1000/fps);
		
	addEventListener("keydown", teclaPressionada, false);
	addEventListener("keyup", teclaSolta, false);
