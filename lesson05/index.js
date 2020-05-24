"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("./either");
const fs = require("fs");
const streetName = user => {
    const address = user.address;
    if (address) {
        const street = address.street;
        if (street) {
            return street.name;
        }
    }
    return 'no street';
};
const streetNameFunc = user => {
    either_1.fromNullable(user.address)
        .map(address => address.street)
        .chain(street => either_1.fromNullable(street))
        .fold(() => 'no street', street => street.name);
};
const concatUniq = (x, ys) => {
    const found = ys.filter(y => y === x)[0];
    return found ? ys : ys.concat(x);
};
const concatUniqFunc = (x, ys) => either_1.fromNullable(ys.filter(y => y === x)[0])
    .fold(() => ys.concat(x), ys);
const wrapExamples = example => {
    if (example.previewPath) {
        try {
            example.preview = fs.readFileSync(example.previewPath);
        }
        catch (e) { }
    }
    return example;
};
const readFile = (path) => either_1.tryCatch(() => fs.readFileSync(path));
const wrapExamplesFunc = example => either_1.fromNullable(example.previewPath)
    .chain(readFile)
    .fold(() => example, ex => Object.assign({ preview: example.previewPath }, ex));
