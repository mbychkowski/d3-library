import shapes from './shapes/shapes';

const triangle = new shapes.Triangle(5,10);
const square = new shapes.Rectangle(100, 100);

console.log('Hello Shapes');

console.log(triangle.calcArea());

square.drawShape();
