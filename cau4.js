class Rectangle {
    x;
    y;
    width;
    height;


    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get x() {
        return this.x;
    }

    set x(value) {
        this.x = value;
    }

    get y() {
        return this.y;
    }

    set y(value) {
        this.y = value;
    }

    getWidth() {
        return this.width;
    }

    setWidth(value) {
        this.width = value;
    }

    getHeight() {
        return this.height;
    }

    setHeight(value) {
        this.height = value;
    }
}

let rectangle = new Rectangle(200, 100);
rectangle.setWidth(200);
rectangle.setHeight(100);
let width = rectangle.getWidth();
let height = rectangle.getHeight();
let canvas = document.getElementById("DemoCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(10, 10, width, height)