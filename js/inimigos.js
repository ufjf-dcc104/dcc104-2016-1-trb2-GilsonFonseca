		var imgInimigo1 = new Image();
		imgInimigo1.src = "img/freeza.png";
		var imgInimigo2 = new Image();
		imgInimigo2.src = "img/freezaInvert.png";
		var inimigos = [];
		var excluir = [];
		var timer = 0;
		var jumping = false;
		this.orientation = 0;
		var resfriamentoInimigo = 0;
		
		//Função que cria os inimigos
		function criaInimigo(x, y){
			var inimigo1 = new Sprite();
			inimigo1.x = x;
			inimigo1.y = y;
			inimigo1.danificado = 0;
			/* Restrições de onde o inimigo pode aparecer limites superior e inferior e caso o mesmo passe por x menor
			 que seu raio ele volta para o outro lado da tela*/
			inimigo1.restricoes = function () {
				this.jumping = true;
				if(this.x>pc.x){
						inimigo1.orientation = 0;
						this.vx = -55 ;
						if(resfriamentoInimigo == 0)
							disparaTiroInimigo(this.x+this.raio/2, this.y+this.raio/2);
						else
							resfriamentoInimigo--;
					}else if(this.x<pc.x){
						inimigo1.orientation = 1;
						this.vx = 55;
						if(resfriamentoInimigo == 0)
							disparaTiroInimigo(this.x-this.raio/2, this.y+this.raio/2);
						else
							resfriamentoInimigo--;
					}
					if(this.y>pc.y && this.vy == 0  && this.jumping == true){
						this.vy -= 120;
						setTimeout(function(){pc.jumping = false;}, 2800);
				}
				if(this.socando){
					
				}
					inimigo1.vx = inimigo1.vx + inimigo1.ax*dt;
					inimigo1.x = inimigo1.x+inimigo1.vx*dt;
					
					inimigo1.vy = inimigo1.vy + inimigo1.ay*dt + G*dt ;
					inimigo1.xi = Math.floor(inimigo1.x/TS);
					inimigo1.yi = Math.floor(inimigo1.y/TS);
					

					if(mapa[inimigo1.yi+1][inimigo1.xi] != 0){
						var pe = inimigo1.y+inimigo1.h/2;
						var topo = (inimigo1.yi+1)*TS;
						inimigo1.y = inimigo1.y + Math.floor(Math.min(inimigo1.vy*dt, topo-pe));
						if(topo-pe >= 0 && inimigo1.vy > 0){
							inimigo1.vy = 0;
						}	
					}else{
						inimigo1.y = inimigo1.y + inimigo1.vy*dt;
					}
					if(this.x<15+this.raio/2){
					this.x = 15+this.raio/2;
					this.vx = 0;
					this.ax = 0;
				}
				if(this.x>(tela.width-this.raio/2)-15) {
					this.x=(tela.width-this.raio/2)-15;
					this.vx = 0;
					this.ax = 0;
				}
				if(this.y<15+this.raio/2){
					this.y = 15+this.raio/2;
					this.vy = 0;
					this.ay = 0;
				}
				if(this.y>tela.height-0-this.raio/2) {
					this.y=200+this.raio/2;
					barraVida.descresce();
					this.vy = 0;
					this.vx = 0;
					this.ax = 0;
					this.ay = 0;
					this.xi = Math.floor(pc.x/TS);
				}
			};
			inimigo1.desenhar = function(){
				if(inimigo1.orientation == 0){
					if(this.x > pc.x-pc.raio-20 && this.x < pc.x+pc.raio+20 && this.y > pc.y-pc.raio-20 && this.y < pc.y+pc.raio+20)
						ctx.drawImage(imgInimigo1, 465, 1105, 43, 43, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
					else
						ctx.drawImage(imgInimigo1, 475, 1060, 40, 40, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
				}else
				{
					if(this.x > pc.x-pc.raio-20 && this.x < pc.x+pc.raio+20 && this.y > pc.y-pc.raio-20 && this.y < pc.y+pc.raio+20)
						ctx.drawImage(imgInimigo2, 85, 1105, 43, 43, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
					else
						ctx.drawImage(imgInimigo2, 80, 1060, 40, 40, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
				}
					
			};
			inimigos.push(inimigo1);	
		};	
		