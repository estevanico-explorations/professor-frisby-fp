"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../lesson06/sum");
const bool_1 = require("../lesson06/bool");
const immutable_1 = require("immutable");
var lesson07;
(function (lesson07) {
    const acct1 = immutable_1.Map({ name: bool_1.First('Nico'), isPaid: bool_1.All(true), points: sum_1.Sum(10), friends: ['Franklin'] });
    const acct2 = immutable_1.Map({ name: bool_1.First('Nico'), isPaid: bool_1.All(false), points: sum_1.Sum(2), friends: ['Gatsby'] });
    const rest = acct1.concat(acct2);
    console.log(JSON.stringify(rest.toJS()));
})(lesson07 || (lesson07 = {}));
