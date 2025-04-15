"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var CricketCoach_1 = require("./CricketCoach");
var Customer_1 = require("./Customer");
var GolfCoach_1 = require("./GolfCoach");
var Rectangle_1 = require("./Rectangle");
var myCustV1 = new Customer_1.CutomerV1("MD. ASHIK", "ALI KHAN");
console.log(myCustV1.firstName);
console.log(myCustV1.lastName);
/* let myShape = new Shape(10, 20);

console.log(myShape.getInfo()); */
var myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 100, 200);
console.log(myRectangle.getInfo());
var shapes = [];
/* shapes.push(new Shape(1,2)); */
shapes.push(new Circle_1.Circle(1, 5, 90));
shapes.push(new Rectangle_1.Rectangle(10, 20, 50, 60));
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var theShape = shapes_1[_i];
    console.log(theShape.getInfo());
    console.log(theShape.calculateArea());
    console.log();
}
var coaches = [];
coaches.push(new CricketCoach_1.CricketCoach());
coaches.push(new GolfCoach_1.GolfCoach());
for (var _a = 0, coaches_1 = coaches; _a < coaches_1.length; _a++) {
    var theCoach = coaches_1[_a];
    console.log(theCoach.dailyWorkOut());
}
