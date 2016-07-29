		/*Responsável pela criação do fundo do jogo*/		
		// Inicialização das Variavéis que receberão as imagens de fundo
		imgLib = new ImageResources();
		imgLib.addImage("frente", "img/backgrounds/block2.png");
		imgLib.addImage("fundo", "img/backgrounds/backcamp.png");
		imgLib.addImage("montanha", "img/backgrounds/backrocks.png");
		imgLib.addImage("bloco", "img/backgrounds/block.png");
		imgLib.addImage("bloco2", "img/backgrounds/block2.png");
		var TS = 40;
		var TX = 40;
		var TY = 80;
		var mx = 15;
		var my = 200;
		G = 200;
		var cooldownTempo = 0;
		var parafrente = 40;
		var parafundo = 0;
		var paralagrama = 0;
		Array.matrix = function(numrows, numcols, initial) {
			var arr = [];
			for (var i = 0; i < numrows; ++i) {
				var columns = [];
				for (var j = 0; j < numcols; ++j) {
					columns[j] = 0;
				}
				arr[i] = columns;
			}
			return arr;
		}
		
		var mapa = Array.matrix(50,50,0)
		function trocaMapa(){
			if(cooldownTempo == 0){
				for(var i=10; i<mx; i++){
					for (var j=7; j<my; j++){
						mapa[14][j] = Math.floor((Math.random() * 2) + 0);
						minimizado(j);
						//mapa[14][j] = 1;
						
					}
				}
			cooldownTempo = 300;
			}
		}
		for(var i=0; i<7; i++){
			mapa[14][i] = 1;
		}
		
		function minimizado(j){
			if(mapa[14][j-1] == 0 && mapa[14][j+1] == 0 && mapa[14][j] == 0)
				mapa[14][j] = 1;
			
				
		}
		
		function desenhaMapa(){
			
			imgLib.draw(ctx,"fundo",(parafundo+tela.width/2)-145, 0, tela.width/2+145, tela.height);
			imgLib.draw(ctx,"fundo",parafundo, 0, tela.width/2, tela.height);
			
			
			//imgLib.draw(ctx,"montanha",parafrente+300,tela.height-200, 100, 170);
			//imgLib.drawRotated(ctx,"frente",parafrente+290,tela.height-200, 100, 100, -11);

				for (var j=0; j<my; j++){
					if(mapa[14][j]==1){
						//imgLib.draw(ctx,"bloco2",TS*j,  TS*14, TX, TY/5);
						imgLib.draw(ctx,"frente", TS*j,  TS*13, TX, TY);

					}
				}
			
			
			for(var i=0; i<14; i++){
				for (var j=0; j<my; j++){
					if(mapa[i][j]==1){
						//imgLib.draw(ctx,"bloco2",TS*j,  TS*(i+1), TX, TY/5);
						imgLib.draw(ctx,"frente",parafrente*j, TS*i, TX, -80/5);

					}
				}
			}
			
			//imgLib.draw(ctx,"frente",parafrente,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+80,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+160,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+240,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+320,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+500,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+400,tela.height+80, 80, -170);
			//imgLib.draw(ctx,"frente",parafrente+480,tela.height+80, 80, -170);
			
			//imgLib.draw(ctx,"frente",tela.width-80,tela.height+80, 80, -170);
			
			
			//imgLib.draw(ctx,"frente",parafrente,tela.height+80, 80, -170);
			//ctx.fillStyle = "black";
			//ctx.fillRect(0,0, tela.width, tela.height);	
					
		}
	
	
	
	
	
	
	