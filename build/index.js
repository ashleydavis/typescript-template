"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.test = function () {
        console.log("Test: " + moment().format('YYYY-DD-MM'));
    };
    ExampleClass.prototype.returnsTrue = function () {
        return true;
    };
    return ExampleClass;
}());
exports.ExampleClass = ExampleClass;
//TODO: Code for your reusable code module goes here.
//# sourceMappingURL=index.js.map