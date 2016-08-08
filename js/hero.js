	// Variavel que recebe uma imagem com o sprite usado
	var hero = new Image();
	hero.src = "img/goku.png";	
	var pc = new Sprite();
	var isPlaying = 0;
	var iskiPlaying = 0;
	var resfriamento = 0;
	var resfriamentoKame = 0;
	var kiCheio = 0;
	pc.jumping = false;
	pc.danificado = 0;
	pc.firing = 0;
	pc.punching = 0;
	pc.isPunching = false;
	pc.chao = 0;
	pc.releasing = 0;
	pc.orientation = 0;
	
	
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
	
	pc.combo = function(){
		if(pc.isPunching == true){
			if(pc.punching < 11)
				pc.punching++;
				console.log(pc.punching);
				console.log(pc.isPunching);
		}
		if(pc.punching == 11){
			pc.punching = 0;
			pc.isPunching = false;
		}
		
	}
		
	//Função de desenho do herói
	pc.desenhar = function (){
		ctx.beginPath();		
		if(resfriamento !=0)
			resfriamento = resfriamento -1;
		if(resfriamentoKame !=0)
			resfriamentoKame = resfriamentoKame -1;
	
		//ctx.strokeStyle = "red";
		//ctx.strokeRect(pc.xi*TS, pc.yi*TS, TS, TS);
		
		// Se o heroi for danificado mostrara um sprite de dano
		if(this.danificado > 0){
			if(pc.orientation == 0)
				imgLib.drawX(ctx,"hero", 105, 945, 44, 47);			
			else
				imgLib.drawX(ctx,"heroInvert", 1051, 945, 44, 47);
			this.danificado -= 1;
		}
		else{
			if(pc.releasing > 0){
				if(pc.orientation == 0)
					imgLib.drawX(ctx,"hero", 320, 836, 45, 45);	
				else
					imgLib.drawX(ctx,"heroInvert", 905, 836, 45, 45);
				pc.releasing -= 1;
				pc.isPunching = false;
				pc.punching = 0;
					
			}else{
				if(this.firing == 3){
					if(pc.orientation == 0){
						imgLib.drawX(ctx,"hero", 105, 1000, 47, 47);
					}else{
						imgLib.drawX(ctx,"heroInvert", 1041, 1000, 47, 47);
					}
						dontPlay = 0;
						pc.isPunching = false;
						pc.punching = 0;
				}else{			
					if(this.firing == 2){
						if(pc.orientation == 0){
							imgLib.drawX(ctx,"hero", 2, 1000, 47, 47);
						}else{
							imgLib.drawX(ctx,"heroInvert", 1151, 1000, 47, 47);
							}
						pc.isPunching = false;
						pc.punching = 0;
							
					}else{
						if(this.firing == 1){
							if(pc.orientation == 0){
								imgLib.drawX(ctx,"hero", 2, 1060, 47, 47);
							}else{
								imgLib.drawX(ctx,"heroInvert", 1151, 1060, 47, 47);
								}
								pc.isPunching = false;
								pc.punching = 0;
						}else{
							if(pc.isPunching)
							{
								if(pc.punching == 1){
									if(pc.orientation == 0)
										imgLib.drawX(ctx,"hero", 0, 893, 42, 43);
									else
										imgLib.drawX(ctx,"heroInvert", 1161, 893, 42, 43);
								}
								else
									if(pc.punching == 2){
										if(pc.orientation == 0)
											imgLib.drawX(ctx,"hero", 40, 893, 42, 43);
										else
											imgLib.drawX(ctx,"heroInvert", 1121, 893, 42, 43);
									}
									else
										if(pc.punching == 3){
											if(pc.orientation == 0)
												imgLib.drawX(ctx,"hero", 80, 894, 42, 43);
											else
												imgLib.drawX(ctx,"heroInvert", 1081, 893, 42, 43);
										}
										else
											if(pc.punching == 4){
												if(pc.orientation == 0)
													imgLib.drawX(ctx,"hero", 117, 893, 42, 43);
												else
													imgLib.drawX(ctx,"heroInvert", 1041, 893, 42, 43);
											}
											else
												if(pc.punching == 5){
													if(pc.orientation == 0)
														imgLib.drawX(ctx,"hero", 160, 893, 42, 43);
													else
														imgLib.drawX(ctx,"heroInvert", 1001, 893, 42, 43);
												}
												else
													if(pc.punching == 6){
														if(pc.orientation == 0)
															imgLib.drawX(ctx,"hero", 200, 893, 42, 43);
														else
															imgLib.drawX(ctx,"heroInvert", 956, 893, 42, 43);
													}
													else
														if(pc.punching == 7){
															if(pc.orientation == 0)
																imgLib.drawX(ctx,"hero", 243, 893, 42, 43);
															else
																imgLib.drawX(ctx,"heroInvert", 911, 893, 42, 43);
														}
														else
															if(pc.punching == 8){
																if(pc.orientation == 0)
																	imgLib.drawX(ctx,"hero", 293, 893, 42, 43);
																else
																	imgLib.drawX(ctx,"heroInvert", 866, 893, 42, 43);
															}
															else
																if(pc.punching == 9){
																	if(pc.orientation == 0)
																		imgLib.drawX(ctx,"hero", 338, 893, 42, 43);
																	else
																			imgLib.drawX(ctx,"heroInvert", 821, 893, 42, 43);
																}
																else
																	if(pc.punching == 10){
																		if(pc.orientation == 0)
																			imgLib.drawX(ctx,"hero", 384, 893, 42, 43);
																		else
																			imgLib.drawX(ctx,"heroInvert", 770, 893, 42, 43);
																	}
																		
						}else{
							if(this.vx == 0){
								if(pc.orientation == 0)
									imgLib.drawX(ctx,"hero", 0, 836, 41,44);
								else
									imgLib.drawX(ctx,"heroInvert", 1161, 836, 41,44);
							}else{
								if(this.ax >= 0){
									pc.orientation = 0;
									pc.isPunching = false;
									pc.punching = 0;
									imgLib.drawX(ctx,"hero", 72, 840, 47, 47);
								}else{
									pc.orientation = 1;
									pc.isPunching = false;
									pc.punching = 0;
									imgLib.drawX(ctx,"heroInvert", 1081, 840, 47, 47);
									}
								}
							}
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
			var pe = 5+(pc.y+pc.h/2);
			var topo = (pc.yi+1)*TS;
						//console.log("Hero" +(topo-pe));

			pc.y = pc.y + Math.floor(Math.min(pc.vy*dt, topo-pe));
			if(topo-pe == 0 && pc.vy > 0){
				pc.vy = 2330;
			}	
		}else{
			pc.y = pc.y+1 + pc.vy*dt;
		}
	}
	
	pc.pula = function(){
		pc.jumping = true;
		if(this.jumping == true)
		{
			pc.vy = -220;
			setTimeout(function(){pc.jumping = false;}, 2800);
		}
		
	}
	