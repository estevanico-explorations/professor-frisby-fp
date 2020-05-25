
export const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: `Sum(${x})`,
})

export const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: `All(${x})`,
})

export const First = x => ({
  x,
  // eslint-disable-next-line no-unused-vars
  concat: _ => First(x),
  inspect: `First(${x})`,
})

export const True = {
  x: true,
  concat: (other) => other,
  inspect: () => 'True'
}

export const False = ({
  x: false,
  // eslint-disable-next-line no-unused-vars
  concat: (other) => False,
  inspect: () => 'False'
})

