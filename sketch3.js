const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {
  const createGrid = ()=>{
    const points = [];
    const count =100;
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
    context.fillStyle = '#FFF8E8';
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
      const palette = ['#581845','#900C3F','#C70039', '#FF5733', '#FFC300']
      context.fillStyle = palette[Math.floor(Math.random() * 5)];
      context.rotate(radius);
      context.font = `${radius * 80}px "Arial"`;
      context.fillText("__", x,y);
      context.rotate(0)
      context.closePath();
    });
  };
};

canvasSketch(sketch, settings);