		var shoot = new Image();
		shoot.src = "img/freeza.png";	
		var shootInvert = new Image();
		shootInvert.src = "img/freezaInvert.png";
		var tirosInimigos = [];		
		var excluirTirosInimigos = [];
		
		function disparaTiroInimigo(x, y){
			
			var tiro = new Sprite();			
			resfriamentoInimigo = 1000;
			tiro.x = x;				
			tiro.y = y;
			tiro.restricoes = function () {};
			if(inimigos[0].orientation == 1)
			{	
				tiro.vx = 500.1;
				tiro.desenhar = function() {
					ctx.drawImage(shootInvert,  500, 1198, 47, 47, 12+(this.x-this.raio), this.y-this.raio, 2*this.raio, 2*this.raio);
				}
			}
			else{
				tiro.x = tiro.x - pc.raio*2;
				tiro.vx = -500.1;
				tiro.desenhar = function() {
					ctx.drawImage(shoot, 475, 1210, 47, 47, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
				}
			}				
			tirosInimigos.push(tiro);
		}
		