var lesson01;
(function (lesson01) {
    const Box = (x) => ({
        map: (f) => Box(f(x)),
        fold: (f) => f(x),
        inspect: () => `Box(${x})`
    });
    const nextCharForNumberString = (str) => Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
        .map(c => c.toLowerCase())
        .fold(x => x);
    const result = nextCharForNumberString('  64 ');
    console.log(result);
})(lesson01 || (lesson01 = {}));
