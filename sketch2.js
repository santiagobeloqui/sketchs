const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {
  const createGrid = ()=>{
    const points = [];
    const count =700;
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

  const margin = 100;
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
      const x = u * (width - margin * 2) + margin;
      const y = v * (width - margin * 2) + margin;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2, false);
      let hue = Math.floor(Math.random() * (320-220) + 220);
      //let light = Math.floor(Math.random() * 101);
      //let transparency = Math.random();
      context.fillStyle = `hsl(${hue},100%,45%)`;
      context.fill();
      context.closePath();
    });
  };
};

canvasSketch(sketch, settings);