const fs = require('fs');
const path = require('path');

include = (p) => {
	if (path.extname(p) == '') {
		p += '.html';
	}
	return fs.readFileSync(
		path.join(path.dirname(module.parent.filename), 'src', p),
		'utf-8'
	);
};

const toVars = (data) => {
	let varString = '';
	for (const [k, v] of Object.entries(data)) {
		varString += `var ${k} = '${v}';`;
	}
	return varString;
};

module.exports.compileTemplate = (fileName, data, saveName) => {
	const fileContent = fs.readFileSync(
		path.join(path.dirname(module.parent.filename), `src/${fileName}`),
		'utf-8'
	);

	// Evaluates until no more expressions
	const vars = toVars(data);
	let evalulated = fileContent;
	while (true) {
		temp_evalulated = Function(`${vars}; return \`${evalulated}\``)();
		if (temp_evalulated == evalulated) {
			evalulated = temp_evalulated;
			break;
		}
		evalulated = temp_evalulated;
	}

	fs.writeFileSync(
		path.join(
			path.dirname(module.parent.filename),
			`public/${!saveName ? fileName : saveName + '.html'}`
		),
		evalulated
	);
};
