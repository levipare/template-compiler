# HTML Template Compiler

Embed javascript into HTML files and pass in data.

Very rudimentary package that should not be used on a large scale.

### Example Usage

#### layout.html

```html
<html lang="en">
	<head>
		<title>${ pageName ? pageName: "" }</title>
	</head>

	<body>
		${ include(filePath) } ${ include('footer') }
	</body>
</html>
```

#### pages/home.html

```html
<main>
	<p>This is the main content</p>
</main>
```

#### index.js

```javascript
const templator = require('tempate-compiler');

templator.compileTemplate(
	'layout.html', // File to compile
	{
		// Custom data fields
		pageName: 'Home',
		filePath: 'pages/home.html',
	},
	'home' // Output file name
);
```

#### Output at public/home.html

```html
<html lang="en">
	<head>
		<title>Home</title>
	</head>

	<body>
		<main>
			<p>This is the main content</p>
		</main>
	</body>
</html>
```
