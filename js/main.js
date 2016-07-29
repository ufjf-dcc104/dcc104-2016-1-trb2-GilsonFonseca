// Inicialização das Variavéis que receberão as imagens de fundo
		var tela = document.getElementById("tela");
		var ctx = tela.getContext("2d");
		var cooldown = 50;
		var imgLib;
		var audioLib;
		var TS = 40;
		var fps = 50;
		var dt = 1/fps;
		var G = 200;


		
	// Função responsável pela geração de inimigos
	function gimmeBlood(){
		if(inimigos.length < 2)
			while(inimigos.length < 10 ){
				criaInimigo(tela.width+39, 40);
			}			
	};

	function passo(){
		
		//Limpar a tela
			ctx.clearRect(0,0, tela.width, tela.height);
			
		audioLib = new AudioResources(1);
		audioLib.load("soundt", "sound/DBAA001.ogg");
		//if(isPlaying == 0)
			//audioLib.play("soundt");
		
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
		gimmeBlood();
	}
	
	setInterval(passo, 1000/fps);
		
	addEventListener("keydown", teclaPressionada, false);
	addEventListener("keyup", teclaSolta, false);
