		var imgInimigo1 = new Image();
		imgInimigo1.src = "img/freeza.png";
		var inimigos = [];
		var excluir = [];
		var timer = 0;
		
		//Função que cria os inimigos
		function criaInimigo(x, y){
			var inimigo1 = new Sprite();
			inimigo1.x = x;
			inimigo1.y = y;
			inimigo1.danificado = 0;
			inimigo1.ax = 100.1;
			/* Restrições de onde o inimigo pode aparecer limites superior e inferior e caso o mesmo passe por x menor
			 que seu raio ele volta para o outro lado da tela*/
			inimigo1.restricoes = function () {
				if(this.x>(tela.width+39)){
					this.y = Math.floor(Math.random() * ((tela.height-90) - 40 + 1)) + 40;			
					this.x = (tela.width+39)+Math.random()*150;
					if(inimigos.length>1)
					{
						
							if(Math.random() < 0.005) disparaTiroInimigo(this.x , this.y);
											
					}
					this.vx = 150+Math.random()*20;
					if(this.vx < 400){
						this.vx = -220+Math.random()*150;
						this.ax = -10;
					}else{
						this.ax = 0.8;
					}
					this.vy = 0;
				}
				if(this.x < -this.raio)
				{
					this.x = tela.width+40;
					this.y = Math.floor(Math.random() * ((tela.height-90) - 40 + 1)) + 40;
				}
			};
			inimigo1.desenhar = function(){				
				ctx.drawImage(imgInimigo1, 475, 1060, 40, 40, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
				
			};
			inimigos.push(inimigo1);
			
			
		};	
		