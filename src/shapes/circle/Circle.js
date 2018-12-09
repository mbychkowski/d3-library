export default class Circle {
    constructor(diameter) {
        this.diameter = diameter;
    }

    get area () {
        return this.calcArea();
    }

    calcArea () {
        return Math.PI / 4 * Math.pow(this.diameter, 2)
    }
}
