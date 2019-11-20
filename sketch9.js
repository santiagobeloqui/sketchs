const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);

    
    const points = [];
    for(let i = 0; i < 10; i++){
        points.push({
            x: Math.random() *  width,
            y: Math.random() * height
        });
    }
    for(let j = 0; j < 15; j++){
        for(let i = 0; i < points.length; i++){        
            if(i == points.length -1){
                context.moveTo(points[i]['x'], points[i]['y'])
                context.lineTo(points[0]['x'], points[0]['y'])
                context.stroke();
    
            } else{
                context.moveTo(points[i]['x'], points[i]['y'])
                context.lineTo(points[i+1]['x'], points[i+1]['y'])
                context.stroke();
            }
            points[i]['x'] += 3;
            points[i]['y'] += 3;
        }
    }
  };
};

canvasSketch(sketch, settings);