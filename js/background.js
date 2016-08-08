		/*Responsável pela criação do fundo do jogo*/		
		// Inicialização das Variavéis que receberão as imagens de fundo
		
		var TS = 40;
		var TX = 40;
		var TY = 80;
		var mx = 15;
		var my = 200;
		G = 0;
		var parafrente = 40;
		var parafundo = 0;
		
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
		
		var mapa = Array.matrix(20,33,0)
		function trocaMapa(){
			for(var i=5; i<14; i+=2){
				for (var j=0; j<33; j++){
					
					mapa[i][j] = Math.floor((Math.random() * 2) + 0);
					mapa[14][j] = 1;
				}
			}
			novoMapa = 300;
			
		}
		for(var i=0; i<7; i++){
		}
		
		
		function desenhaMapa(){
			
			imgLib.draw(ctx,"fundo",(parafundo+tela.width/2)-145, 0, tela.width/2+145, tela.height);
			imgLib.draw(ctx,"fundo",parafundo, 0, tela.width/2, tela.height);
			imgLib.draw(ctx,"montanha",0,240, tela.width, tela.height);
			for (var j=0; j<my; j++){
				if(mapa[14][j]==1){
					imgLib.draw(ctx,"frente", TS*j,  TS*13, TX, TY);
				}
			}			
			
			for(var i=0; i<14; i++){
				for (var j=0; j<my; j++){
					if(mapa[i][j]==1){
						imgLib.draw(ctx,"frente",parafrente*j, TS*i, TX, -80/5);

					}
				}
			}		
			
		}
	
	
	
	
	
	
	