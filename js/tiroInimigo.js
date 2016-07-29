		var shoot = new Image();
		shoot.src = "img/freeza.png";	
		var tirosInimigos = [];		
		var excluirTirosInimigos = [];
		
		function disparaTiroInimigo(x, y){
			var tiro = new Sprite();
			
			tiro.x = x;				
			tiro.y = y;
			tiro.vx = -500.1;
			tiro.restricoes = function () {};
			tiro.desenhar = function() {
			ctx.drawImage(shoot, 475, 1210, 47, 47, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
			}
			tirosInimigos.push(tiro);
		}
		