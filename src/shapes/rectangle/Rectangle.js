import * as d3 from 'd3';

export default class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.width * this.height;
    }

    drawShape() {
        var svg = d3.select('body')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        svg.append('rect')
            .attr('x', 10) 
            .attr('y', 10)            
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', 'red');
    }
}
