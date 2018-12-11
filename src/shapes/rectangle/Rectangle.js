import * as d3 from 'd3';

export default class Rectangle {
    constructor(dom) {
        this.dom = dom;
        
        // set svg dimensions
        this.width = parseInt(d3.select(this.dom).node().clientWidth);
        this.height = parseInt(d3.select(this.dom).node().clientHeight);
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.width * this.height;
    }

    drawShape() {
        const svg = d3.select(this.dom)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        svg.append('rect')      
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', 'red');
    }
}
