var keys = [];


function teclaPressionada(e){
	console.log("Tecla Pressionada: " + e.keyCode);
	//Armazena uma entrada para cada tecla pressionada    
	keys[e.keyCode] = true;
	
	// Movimentos especiais
	// Ctrl + Shift + 5
	if (keys[17] && keys[16] && keys[53]) {
		e.preventDefault();
	}

	// Shift + P
	if (keys[16] && keys[80]) {
		if(pc.danificado == 0 && resfriamentoKame == 0)
			pc.firing = 3;
		
		e.preventDefault();
	}
	
	if(keys[32] ){
		if(pc.danificado == 0 && resfriamento == 0){
			switchHands();
			disparaTiro((pc.x+pc.raio), pc.y);
		}
	}
	
	if(keys[82]){
		audioLib.load("ki", "sound/auraloop.ogg");
		pc.releasing = 100;
		if(pc.danificado == 0){
			if(iskiPlaying == 0){   
				audioLib.play("ki", 4000);
				iskiPlaying = 1;
				if(resfriamentoKame !=0)
					resfriamentoKame = resfriamentoKame -10;
			}
		}
	}
	
	if(keys[65]){
		pc.ax = -120;
		e.preventDefault();
	}
	
	if(keys[68]){
		pc.ax = 120;
		e.preventDefault();
	}
	
	if(keys[87]){
		console.log(pc.jumping);
		if(pc.jumping == false){
			
		pc.pula();
		}
		e.preventDefault();
	}
	
	if(keys[83]){
		pc.ay = 300;
		e.preventDefault();
	}
	
	
}

function teclaSolta(e){
	//console.log("Tecla Solta: " + e.keyCode);
	if(keys[32]){
		pc.firing = 0;
	}
	
	if(keys[65]){
		pc.ax = 0;
		e.preventDefault();
		
	}
	
	if(keys[68]){
		pc.ax = 0;
		e.preventDefault();

	}
	
	if (keys[16] && keys[80]) {
		if(pc.danificado == 0 && resfriamentoKame == 0){
			disparaKameHameHa((pc.x+pc.raio), pc.y)
				dontPlay = 1;
				audioLib.load("ha_fire", "sound/kamehameha_fire.ogg");			
				audioLib.play("ha_fire");
				
		}
		e.preventDefault();
	}
	
	if(keys[87]){
		pc.vy = 0;
		e.preventDefault();
	}
	
	if(keys[83]){
		pc.ay = 0;
		e.preventDefault();
	}
	
	if(keys[82])
	{
		iskiPlaying = 0;
	}
	
	keys[e.keyCode] = false;
}
