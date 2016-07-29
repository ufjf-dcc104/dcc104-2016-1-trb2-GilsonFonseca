function ImageResources(){
  this.resourcesCount = 0;
  this.resourcesLoaded = 0;
  this.images = {};
  this.loaded = (function(that){
    return function(){
              console.log("Imagem carregada!");
              that.resourcesLoaded++;
           };
  })(this);
  this.addImage = function(key, url){
    this.resourcesCount++;
    var img =  new Image();
    img.onload = this.loaded;
    img.src = url;
    this.images[key] = img;
  };
  this.isReady = function(){
    return (this.resourcesCount === this.resourcesLoaded);
  }
  this.drawSheet = function(ctx, key, a, b, c, d, x, y, w, h){
    ctx.drawImage(this.images[key],a, b, c, d, x, y, w, h);
  }
  this.draw = function(ctx, key, x, y, w, h){
    ctx.drawImage(this.images[key], x, y, w, h);
  }
  this.drawCentered = function(ctx, key, x, y, w, h){
    ctx.save();
    ctx.translate(x, y);
    ctx.drawImage(this.images[key], -w/2, -h/2);
    ctx.restore();
  }
  this.drawRotated = function(ctx, key, x, y, w, h, angle){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle*Math.PI/180);
    ctx.drawImage(this.images[key], -w/2, -h/2);
    ctx.restore();
  }
  this.drawRotatedScale = function(ctx, key, x, y, w, h, angle, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    ctx.drawImage(this.images[key], -w/2, -h/2);
    ctx.restore();
  }
}
