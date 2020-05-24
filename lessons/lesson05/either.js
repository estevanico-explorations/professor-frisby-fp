"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    chain: f => f(x),
    inspect: () => `Right(${x})`,
});
exports.Right = Right;
const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    chain: f => Left(x),
    inspect: () => `Left(${x})`,
});
exports.Left = Left;
const fromNullable = x => x != null ? Right(x) : Left(null);
exports.fromNullable = fromNullable;
const tryCatch = f => {
    try {
        return Right(f());
    }
    catch (e) {
        return Left(e);
    }
};
exports.tryCatch = tryCatch;
