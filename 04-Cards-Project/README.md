# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Cards Project

## Using JSON Data with Props in Card Components

In this project, card data is stored in JSON format and rendered dynamically using the `map()` function.

### Example

```jsx
variableName.map(function(ele) {
    return <Card user={ele.username} />;
});
```

### How it Works

* `variableName` is an array of objects.
* The `map()` function iterates through each object in the array.
* During each iteration, the current object is stored in the `ele` variable.
* Props are passed to the `Card` component using values from `ele`.

### Example JSON Data

```js
[
    { "username": "John", "age": 20 },
    { "username": "Alice", "age": 22 }
]
```

Iteration process:

* First iteration → `ele = { username: "John", age: 20 }`
* Second iteration → `ele = { username: "Alice", age: 22 }`

### Understanding Nested Arrays

If the parent array looks like this:

```js
[
    [1, 2],
    [3, 4]
]
```

Then during iteration:

```js
variableName.map(function(ele) {
    console.log(ele);
});
```

Output:

```js
[1, 2]
[3, 4]
```

So:

* First iteration → `ele = [1, 2]`
* Second iteration → `ele = [3, 4]`

Accessing values:

```js
ele[0] // 1 (first iteration)
ele[1] // 2 (first iteration)
```

Similarly, in the second iteration:

```js
ele[0] // 3
ele[1] // 4
```

This approach makes it easy to render multiple cards dynamically using JSON data and React props.
