const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 700, 700 ]
};

const sketch = () => {
    return ({ context, canvas, width, height }) => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);


        for (let i = 0; i < 700; i++) {
            context.beginPath();
            let centerX = width / 3;
            let centerY = height / 3;
            context.moveTo(centerX, centerY);
            let maxLength = 60;
            let xAxis = Math.random() * ((centerX + 60) - (centerX - 60)) + centerX - 60;
            let yAxis = Math.random() * ((centerY + 60) - (centerY - 60)) + centerY - 60;
            let distance = Math.sqrt(Math.pow((xAxis - centerX), 2) + Math.pow((yAxis - centerY), 2));
            if (distance > maxLength && yAxis > centerY && xAxis < centerX) {
                context.lineTo(xAxis + (maxLength / 2), yAxis - (maxLength / 2));
            } else if (distance > maxLength && yAxis > centerY && xAxis > centerX) {
                context.lineTo(xAxis - (maxLength / 2), yAxis - (maxLength / 2));
            } else if (distance > maxLength && yAxis < centerY && xAxis > centerX) {
                context.lineTo(xAxis - (maxLength / 2), yAxis + (maxLength / 2));
            } else if (distance > maxLength && yAxis < centerY && xAxis < centerX) {
                context.lineTo(xAxis + (maxLength / 2), yAxis + (maxLength / 2));
            } else {
                context.lineTo(xAxis, yAxis);
            }
            context.strokeStyle = `hsl(0, 0%, ${Math.random() * (100 - 80) + 80}%)`;
            context.stroke();
            context.closePath();
        }

    };
};

canvasSketch(sketch, settings);