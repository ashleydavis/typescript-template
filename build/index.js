"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.test = function () {
        console.log("Test: " + moment().format('YYYY-DD-MM'));
    };
    return ExampleClass;
}());
exports.ExampleClass = ExampleClass;
//# sourceMappingURL=index.js.map