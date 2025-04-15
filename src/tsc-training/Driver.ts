
import { Circle } from "./Circle";
import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { CutomerV1 } from "./Customer";
import { GolfCoach } from "./GolfCoach";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCustV1 = new CutomerV1("MD. ASHIK", "ALI KHAN");
console.log(myCustV1.firstName);
console.log(myCustV1.lastName);

/* let myShape = new Shape(10, 20);

console.log(myShape.getInfo()); */

let myCircle = new Circle(5, 10, 20);

console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 100, 200);

console.log(myRectangle.getInfo());

let shapes : Shape[]=[];

/* shapes.push(new Shape(1,2)); */

shapes.push(new Circle(1,5,90));

shapes.push(new Rectangle(10, 20, 50, 60));

for(let theShape of shapes){
    console.log(theShape.getInfo());
    console.log(theShape.calculateArea());
    console.log();
}

let coaches : Coach[] = [];

coaches.push(new CricketCoach());
coaches.push(new GolfCoach());

for(let theCoach of coaches){
    console.log(theCoach.dailyWorkOut());
}