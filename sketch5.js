const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1920 ]
};

const sketch = () => {
  const createGrid = ()=>{
    const points = [];
    const count = 60;
    for (let x = 0; x < count; x++ ){
      for (let y = 0 ; y < count; y++){
        const u = count <= 1? 0.5 : x / (count - 1);
        const v = count <= 1? 0.5 : y / (count - 1);
        points.push({
          radius: Math.random(),
          position: [u,v]
        });
      }
    }
    return points;
  }

  const margin = 70;
  const points = createGrid().filter(()=>Math.random() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0,0,width, height);
    points.forEach((data)=>{
      const {
        radius,
        position
      } = data;
      let [u, v] = position;
      const x = u * (width - margin) + margin;
      const y = v * (width + margin) + margin * 8;
      context.beginPath();      
      let light = Math.floor(Math.random() * (100-30) + 30);
      context.rotate(radius * Math.random());
      context.strokeStyle = 'black';
      context.fillStyle = "white"
      context.lineWidth = 3;
      context.fillRect(x,y, 25, radius * 500);
      context.strokeRect(x,y, 25, radius * 500);
      context.fill();
      context.rotate(0)
      context.closePath();
    });
  };
};

canvasSketch(sketch, settings);