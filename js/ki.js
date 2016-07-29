var carregar = new Image();
carregar.src = "img/goku.png";
var ki = new Sprite();


ki.desenhar = function(){
	ctx.drawImage(carregar,  88, 230, 50, 50, 20, 20, 20, 20);

}
ki.restricoes = function () {};