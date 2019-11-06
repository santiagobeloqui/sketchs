const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);
    
    for(let j = 0; j <= width; j += 50){
        for(let k = 0; k <= height; k += 50){
            for(let i = 0; i < 50; i++){
                context.beginPath();
                let centerX = j;
                let centerY = k;
                context.moveTo(centerX,centerY);
                context.lineTo(Math.random() * ((centerX + 60) - (centerX - 60)) + centerX - 60, Math.random() * ((centerY + 60) - (centerY - 60)) + centerY - 60);
                context.strokeStyle = `hsl(0, 0%, ${Math.random() * 10}%)`;
                context.stroke();
                context.closePath();
            }            
        }
    }
  };
};

canvasSketch(sketch, settings);