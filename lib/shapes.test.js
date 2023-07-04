const { Circle, Square, Triangle } = require('./shapes');

test ("should render a blue triangle", () => {
    const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test ("should render a green circle", () => {
    const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
})

test ("should render a red square", () => {
    const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="red" />`)
})