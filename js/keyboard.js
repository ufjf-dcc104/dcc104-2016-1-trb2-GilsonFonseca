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

	// Shift + Z
	if (keys[16] && keys[90]) {
		e.preventDefault();
	}
	
	if(keys[80]){
		if(pc.danificado == 0 && resfriamento == 0){
			switchHands();
			disparaTiro((pc.x+pc.raio), pc.y);
		}
	}
	
	if(keys[82]){
		audioLib.load("ki", "sound/auraloop.ogg");
			if(iskiPlaying == 0){   
				audioLib.play("ki", 4000);
				iskiPlaying = 1;
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
		pc.vy = -220;
		pc.p = true;
		e.preventDefault();
	}
	
	if(keys[83]){
		pc.ay = 300;
		e.preventDefault();
	}
	
	
}

function teclaSolta(e){
	//console.log("Tecla Solta: " + e.keyCode);
	if(keys[80]){
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
