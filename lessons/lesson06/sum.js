"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Sum(x) {
    return {
        x,
        concat: ({ x: y }) => Sum(x + y),
        inspect: () => `Sum(${x})`
    };
}
exports.Sum = Sum;
(function (Sum) {
    Sum.empty = () => Sum(0);
})(Sum || (Sum = {}));
exports.Sum = Sum;
Sum(4);
Sum.empty();
