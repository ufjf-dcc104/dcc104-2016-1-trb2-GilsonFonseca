		var tela = document.getElementsByTagName("canvas")[0];
		var ctx = tela.getContext("2d");
		var fps = 50;
		var dt = 1/fps;
		var cooldown = 50;
		var audioLib;
		
		
		
		
		// Função responsável pela geração de inimigos
		function gimmeBlood(){
			if(inimigos.length < 2)
				while(inimigos.length < 10 ){
					criaInimigo(tela.width+39, 40);
				}
					
		};
		
			
		
		function passo(){
			
			audioLib = new AudioResources(1);
			audioLib.load("soundt", "sound/DBAA001.ogg");
			if(isPlaying == 0)
			audioLib.play("soundt");
			
			pc.mover();
			
			for (var i in inimigos) 
				inimigos[i].mover();
			
			for (var i in tiros) 
				tiros[i].mover();
			
			for (var i in tirosInimigos) 
				tirosInimigos[i].mover();
			
						
			pc.restricoes();
			
			for (var i in inimigos)
				inimigos[i].restricoes();
			
			for (var i in tiros)
				tiros[i].restricoes();
			
			for (var i in tirosInimigos)
				tirosInimigos[i].restricoes();
			
		
			//Limpar a tela
			ctx.clearRect(0,0, tela.width, tela.height);
			
			frente.desenhar();
			barraVida.desenhar();		
			pc.desenhar();
			for (var i in inimigos) {
				inimigos[i].desenhar();
			}
			
			for (var i in tiros) {
				tiros[i].desenhar();
			}
			
			for (var i in tirosInimigos) {
				tirosInimigos[i].desenhar();
			}

			
			// Tratamento das Colisões
			for (var i in inimigos) {
				if(pc.danificado<=0 && pc.colidiuComCircular(inimigos[i])){
					pc.danificado = cooldown;
					barraVida.descresce();
					inimigos[i].x = tela.width+50;
					inimigos[i].danificado = cooldown;
					
										
				}
				for(var j in tiros)
				if(tiros[j].colidiuComCircular(inimigos[i])){
					pc.score = pc.score+10;
					excluir.push(inimigos[i]);
					excluirTiros.push(tiros[j]);
					tiros[j].x = -1200;
					tiros[j].vx = 0;
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
		
	



