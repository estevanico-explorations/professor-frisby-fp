var lesson02;
(function (lesson02) {
    const Box = (x) => ({
        map: (f) => Box(f(x)),
        fold: (f) => f(x),
        inspect: () => `Box(${x})`
    });
    const moneyToFloat = (str) => Box(str.replace(/\$/g, ''))
        .fold(parseFloat);
    const percentToFloat = (str) => Box(str.replace(/\%/g, ''))
        .map(parseFloat)
        .fold(n => n * 0.01);
    const applyDiscount = (price, discount) => Box(moneyToFloat(price))
        .fold(cost => Box(percentToFloat(discount))
        .fold(savings => cost - cost * savings));
    console.log(moneyToFloat('$100'));
    console.log(percentToFloat('10%'));
    console.log(applyDiscount('$5.00', '20%'));
    console.log(applyDiscount('$200', '20%'));
})(lesson02 || (lesson02 = {}));
