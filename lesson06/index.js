var lesson6;
(function (lesson6) {
    let res = [1, 2].concat([3, 4]).concat([5, 6]);
    res = [1, 2].concat([3, 4].concat([5, 6]));
    console.log(res);
})(lesson6 || (lesson6 = {}));
