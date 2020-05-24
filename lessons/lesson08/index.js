"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../lesson06/sum");
var lesson08;
(function (lesson08) {
    if (sum_1.Sum.empty) {
        const res = sum_1.Sum.empty().concat(sum_1.Sum(1).concat(sum_1.Sum(2)));
        console.log(res);
    }
})(lesson08 || (lesson08 = {}));
