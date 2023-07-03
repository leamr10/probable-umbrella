const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes');
const SVG = require('./lib/svg');

inquirer.prompt(
    [{
        type: "input",
        message: "What color would like the shape of your logo to be?",
        name: "colorShape"
    },
    {
        type: "list",
        message: "What shape would you like your logo to be?",
        name: "shape",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        message: "What text would you like inside the logo?",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "colorText"
    }
    ]
).then(data => {
    let shape;
    if (data.shape === "circle") { shape = new Circle() }
    else if (data.shape === "square") { shape = new Square() }
    else { shape = new Triangle() }

    shape.setColor(data.colorShape)

    const svg = new SVG()
    svg.setText(data.text, data.colorText);
    svg.setShape(shape);
    fs.writeFile("logo.svg", svg.render(), (err) => {
        if (err) console.log(err)
        console.log("Success!")
    })
}).catch(err => { console.log(err) })