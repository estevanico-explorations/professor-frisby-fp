
  function Sum(x: number){
    return {
        x,
        concat: ({x: y}) => Sum(x + y),
        inspect: () => `Sum(${x})`
    };
  }

  namespace Sum {
    export const empty = () => Sum(0)
  }

  Sum(4);
  Sum.empty();

export {
  Sum,
}
