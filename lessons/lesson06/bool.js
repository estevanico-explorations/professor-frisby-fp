"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const All = x => ({
    x,
    concat: (other) => All(x && other.x),
    inspect: () => `Bool(${x})`
});
exports.All = All;
const First = (x) => ({
    x,
    concat: (other) => First(x),
    inspect: () => `First(${x})`
});
exports.First = First;
const True = {
    x: true,
    concat: (other) => other,
    inspect: () => `True`
};
const False = {
    x: false,
    concat: (other) => False,
    inspect: () => `False`
};
console.log(`should be false`, True.concat(False));
console.log('should be false', True.concat(False).concat(True));
console.log(`should be true`, True.concat(True));
console.log(`should be false`, All(true).concat(All(false)));
console.log('should be false', All(true).concat(All(false)).concat(All(true)));
console.log(`should be true`, All(true).concat(All(true)));
console.log(First('blah').concat(First('carrot')).concat(First(123)));
