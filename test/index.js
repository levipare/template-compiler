const templator = require('../lib/index');

templator.compileTemplate(
	'layout.html',
	{
		page_name: 'Home',
		filePath: 'pages/home.html',
	},
	'home'
);
