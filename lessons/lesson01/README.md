## [Create linear data flow with container style types (Box)](https://egghead.io/lessons/javascript-linear-data-flow-with-container-style-types-box)

> Map isn't so much about iteration. It has more to do with composition within a context. In this case, box is our context.

`map()` is a functor. It's about applying a function to a context/boundry/class/instance/object/container. Read my guide on `Functor`s for more information

```js
// The "x" variable will exist within this function
// so long as the function exists in memory.
const Box = x => ({
	// Apply a function to the data.
	map: f => Box(f(x)),

	// Get the data out.
	fold: f => f(x),

	// Output.
	inspect: () => `Box(`{x}`,
})
```
