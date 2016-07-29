	// Variavel que recebe uma imagem com o sprite usado
	var hero = new Image();
	hero.src = "img/goku.png";	
	var pc = new Sprite();
	var isPlaying = 0;
	var iskiPlaying = 0;
	var resfriamento = 0;
	
	pc.danificado = 0;
	pc.firing = 0;
	pc.punching = 0;
	pc.chao = 0;
	
	
	function switchHands() {
		if(pc.firing == 0)
			pc.firing = 1;

		if(pc.firing == 2){
					pc.firing = 1;
		}else{
			if(pc.firing == 1){
				pc.firing = 2;
			}
		}					
	}
	
	function combo()
	{
		if(this.punching == 0)
			this.punching = 1;
		while(this.punching < 7)
			this.punching++;
		this.punching = 0;
	}
		
	//Função de desenho do herói
	pc.desenhar = function (){
		ctx.beginPath();		
		if(resfriamento !=0)
			resfriamento = resfriamento -1;
		
		ctx.strokeStyle = "red";
		ctx.strokeRect(pc.xi*TS, pc.yi*TS, TS, TS);
					
		// Se o heroi for danificado mostrara um sprite de dano
		if(this.danificado > 0){	
			ctx.drawImage(hero, 105, 945, 44, 47, pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);
			this.danificado -= 1;
		}
		else{			
			// Se o heroi estiver com aceleraçao positiva mostrara um sprite de voando para frente
			if(this.firing == 2){
				ctx.drawImage(hero, 2, 1000, 47, 47, pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);				
			}else{
				if(this.firing == 1){
					ctx.drawImage(hero, 2, 1060, 47, 47, pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);				
				}else{
					if(this.vx == 0){
						ctx.drawImage(hero, 0, 836, 41,44, pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);
					}else{
						if(this.ax >= 0){
								ctx.drawImage(hero, 72, 840, 47, 47, pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);
						}else{
							ctx.drawImage(hero, 114, 835, 43,47,pc.x-pc.w/2, pc.y-pc.h/2, pc.w, pc.h);
						}
					}
				}
			}	
		}
		//Rosto do heroi ao lado da barra de vida
		ctx.drawImage(hero, 0, 75, 55, 60, 0, 10, 2*this.raio, 2*this.raio);
		ctx.closePath();
		ctx.stroke();				
	}
	
	pc.movePC = function(dt) {
		pc.vx = pc.vx + pc.ax*dt;
		pc.x = pc.x+pc.vx*dt;
		pc.vy = pc.vy + pc.ay*dt + G*dt;
		pc.xi = Math.floor(pc.x/TS);
		pc.yi = Math.floor(pc.y/TS);
		if(mapa[pc.yi+1][pc.xi] != 0){
			var pe = pc.y+pc.h/2;
			var topo = (pc.yi+1)*TS;
			pc.y = pc.y + Math.floor(Math.min(pc.vy*dt, topo-pe));
			if(topo-pe == 0 && pc.vy > 0){
				pc.vy = 0;
				setTimeout(land, 5000);
			}	
		}else{
			pc.y = pc.y + pc.vy*dt;
			setTimeout(land, 5000);
		}
	}
	