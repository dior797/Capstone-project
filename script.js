class MyObject{
    constructor(){
       this.radius = 25;
       this.color = "#000";
       this.g = 0.1;          // acceleration due to gravity
       this.positionX = 50;   // initial horizontal position
       this.positionY = 50;   // initial vertical position
       this.horizontalSpeed = 10;  // initial speed
       this.verticalSpeed = 0;  // initial speed
    }  
    
    paint(){
       
    }
 }
 class AnimationController{

 }
 let canvas = document.getElementById('canvas');
 let context = canvas.getContext('2d'); 
const setUpCanvas = () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
};
const min = Math.min(canvas.height,canvas.width);
 let csize = canvas.getBoundingClientRect();
 console.log(csize);
 canvas.width = csize.width * devicePixelRatio;
 canvas.height = csize.height * devicePixelRatio;
canvas.style = csize.width + 'px';
canvas.style = csize.height + 'px';

 
 const radius = 50;
 let g = 1;          // acceleration due to gravity
 let positionX = 120;   // initial horizontal position
 let positionY = 20;   // initial vertical position
 let horizontalSpeed = 25;  // initial speed
 let verticalSpeed =30;  // initial speed
  
 setInterval(refresh, 1000/60); // 60 fps
  
 function refresh() {
     verticalSpeed += g; // gravity increases the vertical speed
     positionX += horizontalSpeed; // horizontal speed increases horizontal position 
     positionY += verticalSpeed; // vertical speed increases vertical position
    
     if (positionY > canvas.height - radius){ // if ball hits the ground
       positionY = canvas.height - radius; // reposition it at the ground
       verticalSpeed *= -0.8; // reverse and reduce its vertical speed
     }
     if (positionX > canvas.width + radius){ // if ball goes beyond canvas
       positionX = -radius; // wrap it around 
     }
     if ((positionX + radius > canvas.width) || (positionX - radius < 0)) {
        horizontalSpeed = -verticalSpeed;
      } // makes balls hit sides
   
     context.clearRect(0, 0, canvas.width, canvas.height); 
     context.beginPath();
     context.arc(positionX, positionY, radius, 0, 2*Math.PI, true);
     context.fillStyle = "black";
     context.closePath();
     context.fill();
 };

 refresh();