		var ball = new Image();
		ball.src = "img/goku.png";	
		var tiros = [];		
		var excluirTiros = [];
		audioLib = new AudioResources(12);
		//this.pode = true;
		
		function disparaTiro(x, y){
			var tiro = new Sprite();
			
			
			audioLib.load("beam", "sound/birl.mp3");
			audioLib.play("beam");
			resfriamento = 30;
			tiro.x = x;				
			tiro.y = y;
			tiro.vx = 400.1;
			tiro.restricoes = function () {};
			tiro.desenhar = function() {
			ctx.drawImage(ball,  82, 1005, 40, 40, 12+(this.x-this.raio), this.y-this.raio, 2*this.raio, 2*this.raio);
			}
			tiros.push(tiro);
		}
		
		function disparaKameHameHa(x, y){
			var tiro = new Sprite();			
			resfriamentoKame = 300;
			tiro.x = x;				
			tiro.y = y;
			tiro.vx = 400.1;
			tiro.restricoes = function () {};
			tiro.desenhar = function() {
			ctx.drawImage(ball,  254, 1005, 45, 45, 12+(this.x-this.raio), this.y-this.raio, 2*this.raio, 2*this.raio);
			}
			tiros.push(tiro);
		}
		
		this.moveTiro = function(dt) {
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