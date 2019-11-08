const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);
    
    let xAxis = 100;
    let yAxis = 0;
    //for(let j = 10; j <= width; j += 10){
       // xAxis = j; 
        //yAxis = 0;
        for(let i = 0; i <= height; i += 1){
            context.moveTo(xAxis, yAxis);
            let sameDirection = Math.random() > 0.5;
            xAxis = sameDirection? xAxis + 1: xAxis -1;
            //xAxis = Math.random() * ((xAxis + 1) - (xAxis - 1)) + (xAxis - 1);
            context.lineTo(xAxis, i);
            context.stroke();
            yAxis = i;    
        }  
    //}

  };
};

canvasSketch(sketch, settings);