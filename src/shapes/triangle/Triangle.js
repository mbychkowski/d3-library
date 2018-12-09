export default class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    get area () {
        return this.calcArea();
    }

    calcArea () {
        return 0.5 * this.base * this.height;
    }
}
