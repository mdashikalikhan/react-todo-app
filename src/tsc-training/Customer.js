"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutomerV1 = void 0;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = 'MD ASHIK';
myCustomer.lastName = 'ALI KHAN';
console.log(myCustomer);
var CutomerV1 = /** @class */ (function () {
    /* private _firstName: string;
    
    private _lastName: string; */
    function CutomerV1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CutomerV1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CutomerV1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CutomerV1;
}());
exports.CutomerV1 = CutomerV1;
var myCustV1 = new CutomerV1("MD. ASHIK", "ALI KHAN");
console.log(myCustV1.firstName);
console.log(myCustV1.lastName);
