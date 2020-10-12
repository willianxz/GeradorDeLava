var noiseScale = 0.005, tempo = 0, nivelDetalhesMapa = 450, c;

var desenharMapa = function(){
     for(var x=0; x < width; x++) {
        var noiseVal = noise(x*noiseScale, noiseScale*frameCount);
         if(noiseVal<0.37){
            stroke(64, 64, 64);
        }else if(noiseVal<0.41){
            stroke(5, 5, 5);
        }else if(noiseVal<0.49){
            stroke(random(255), 1, 1);
        }else if(noiseVal<0.50){
            stroke(250, 8, 8);
        }else if(noiseVal<0.53){
            stroke(250, 110, 10);
        }else if(noiseVal<0.54){
            stroke(230, 57, 14);
        }else if(noiseVal<0.56){
           stroke(250, 250, 0);
        }else{
           stroke(255, 0, 0);
        }
        
    
            point(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10);
            stroke(random(255)*200,noiseVal*200,noiseVal*200-100,25);
            point(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12);
            stroke(random(100)*200,noiseVal*255,noiseVal*random(0,100)-20,5);
            point(noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12,x);
            
            //var passouDaAltura = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12 > height + height/3 + 50;
            var passouDaLargura = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12 > width + 90;
              if(passouDaLargura){
               saveCanvas(c, 'lava', 'jpg');
                background(0);
                tempo = 0;                
            }
     }
};



function setup() {
    c = createCanvas(windowWidth, windowHeight);   
    background(0);
}

function draw() {  
  
  frameRate(20);
  strokeWeight(3);
  desenharMapa();
  tempo+=0.5;
  
}
