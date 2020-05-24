## Create linear data flow with container style types (Box)
```js
// Map isn't so much about iteration. It has more to do with composition within
// a context. In this case, box is our context
const Box = x => ({
	// The "x" variable will exist within this function so
	// long as the function exists in memory.

	// Apply a function to the data.
	map: f => Box(f(x)),

	// Get the data out.
	fold: f => f(x),

	// Output.
	inspect: () => `Box(`{x}`,
})
```
