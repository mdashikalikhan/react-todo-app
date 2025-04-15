
import { Circle } from "./Circle";
import { CutomerV1 } from "./Customer";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCustV1 = new CutomerV1("MD. ASHIK", "ALI KHAN");
console.log(myCustV1.firstName);
console.log(myCustV1.lastName);

let myShape = new Shape(10, 20);

console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);

console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 100, 200);

console.log(myRectangle.getInfo());