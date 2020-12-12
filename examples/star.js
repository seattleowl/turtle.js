import { Turtle, TCanvas, util } from "../main.js";
const { range } = util;

let canvas = new TCanvas("c");
let turtle = new Turtle(canvas);

turtle.color("transparent", "yellow");

turtle.goto(150, 30);

turtle.beginFill();
for (let i of range(5)) {
	turtle.forward(100);
	turtle.right(144);
}
turtle.end();
