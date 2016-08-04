		/*Responsável pela criação do fundo do jogo*/		
		// Inicialização das Variavéis que receberão as imagens de fundo
		
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
		
		var mapa = Array.matrix(40,40,0)
		function trocaMapa(){
			if(cooldownTempo == 0){
				for(var i=6; i<14; i+=2){
					for (var j=7; j<my; j++){
						mapa[i][j] = Math.floor((Math.random() * 2) + 0);
						minimizado(i,j);
						//mapa[14][j] = 1;
						
					}
				}
			cooldownTempo = 300;
			}
		}
		for(var i=0; i<7; i++){
			mapa[14][i] = 1;
			mapa[6][i] = 1;
			mapa[6][7+i] = 1;
		}
		
		function minimizado(i,j){
			if(mapa[i][j-1] == 0 && mapa[i][j+1] == 0 && mapa[i][j] == 0){
				mapa[i][j] = 1;				
				mapa[i][j+1] = 1;
			}
			mapa[14][j+1] = 1;
				mapa[14][j] = 1;
				
		}
		
		function desenhaMapa(){
			imgLib.draw(ctx,"fundo",(parafundo+tela.width/2)-145, 0, tela.width/2+145, tela.height);
			imgLib.draw(ctx,"fundo",parafundo, 0, tela.width/2, tela.height);
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
	
	
	
	
	
	
	