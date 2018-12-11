import * as d3 from 'd3';

export default class Circle {
    constructor(dom) {
        this.dom = dom;

        // set svg dimensions
        this.width = parseInt(d3.select(this.dom).node().clientWidth);
        this.height = parseInt(d3.select(this.dom).node().clientHeight);

        // set figure dimensions
        this.diameter = Math.min(this.height, this.width);
    }

    get area () {
        return this.calcArea();
    }

    calcArea () {
        return Math.PI / 4 * Math.pow(this.diameter, 2)
    }

    drawShape() {
        const svg = d3.select(this.dom)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);

        svg.append('circle')
            .attr('cx', this.width / 2)
            .attr('cy', this.height / 2)
            .attr('r', this.diameter / 2)
            .style('fill', 'blue');
    }
}
