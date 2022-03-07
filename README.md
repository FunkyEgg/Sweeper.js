# Sweeper.js
![Sweeper.js](./.github/logo.png "Sweeper.js")
Sweeper.js is a javascript package desigend to convert js to pure web code.

https://www.npmjs.com/package/sweeper.js

## How to install
To install Sweeper.js you need to:

1. Create a project folder.
2. In a terminal in the project folder type `npm init -y`.
3. In the same terminal type `npm i sweeper.js`.

## Sweeper.js example
```js
const sweeper = require('sweeper.js');
// Initializes sweep with the paramiter being the webpage title
sweeper.init('Hello World');
// Creates a h1 tag that says "Hello World"
sweeper.h('1', 'Hello World', 'hello');
// Adds color to the h1 tag
sweeper.color('hello', 'red');
// Finishes the creation of the HTML file
sweeper.endHtml();
```

This basic sweeper code ends up outputting
```html
<!-- Generated by Sweeper.js -->
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="styles.css">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello World</title>
</head>
<body>
<h1 id="hello">Hello World</h1>
</body>
</html>
```
This in a html file
```css
/* Generated by Sweeper.js */
#hello { color: red; }
```
And this in a css file

# PLEASE SEE
Sweeper.js is not fully completed and is still in beta, keep in mind that at any moment the syntax and generated code could change