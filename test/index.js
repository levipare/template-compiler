const templator = require('../lib/index');

templator.compileTemplate(
	'layout.html',
	{
		pageName: 'Home',
		filePath: 'pages/home.html',
	},
	'home'
);
