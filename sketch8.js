const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);
    
    context.strokeStyle = "black";

    let radius = width * 0.35    
    // context.beginPath();
    // context.arc(width/2, height/2, radius, 0, Math.PI * 2);
    // context.stroke();

    let colorSpectre = {
        beginning: 15,
        end: 40
    }

    let linesNumber = 50;
    let verticalDistance = radius * 2 / linesNumber;
    let y = ((height - (radius * 2)) / 2) + verticalDistance;
    let minX = (width - (radius * 2)) / 2;
    let maxX = (width - (radius * 2)) / 2 + radius * 2;
    let color = colorSpectre.beginning;
    for(let i = 0; i < linesNumber - 1; i++){        
        let minX = (width - (radius * 2)) / 2;
        let maxX = (width - (radius * 2)) / 2 + radius * 2;
        while(Math.sqrt(Math.pow(minX - width / 2,2) + Math.pow(y - height / 2,2)) > radius){
            minX += 1;
        }
        while(Math.sqrt(Math.pow(maxX - width / 2,2) + Math.pow(y - height / 2,2)) > radius){
            maxX -= 1;
        }
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(minX,y);
        context.lineTo(maxX, y);
        console.log(color);
        context.strokeStyle = `hsl(${color}, 100%, 50%)`;
        context.stroke();
        y = y + verticalDistance;
        color = color + ((colorSpectre.end - colorSpectre.beginning) / linesNumber);
    }

  };
};

canvasSketch(sketch, settings);