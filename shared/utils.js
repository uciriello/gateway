const chalk = require('chalk');

stringParser = (str) => {
	if (str && (typeof str !== 'string' || typeof str !== 'number')) {
		try {
			str = JSON.stringify(str);
		} catch (error) {
			str = String(str);
			print(error, 'error');
		}
	}
	return str;
};

print = (str, color) => {
	str = stringParser(str);
	switch (color) {
		case 'primary':
			console.log(chalk.hex('#1e90ff')(str));
			break;
		case 'secondary':
			console.log(chalk.green(str));
			break;
		case 'tertiary':
			console.log(chalk.hex('#ffe135')(str));
			break;
		case 'error':
			console.log(chalk.bold.red(str));
			break;
		case 'success':
			console.log(chalk.bold.hex('#32cd32')(str));
			break;
		case 'warning':
			console.log(chalk.bold.hex('#ff6600')(str));
			break;
		case 'supersuccess':
			console.log(chalk.bold.underline.hex('#32cd32')(str));
			break;
		default:
			console.log(chalk.bold(str));
			break;
	}
};

println = (str, color) => {
	print(str, color);
	console.log('');
};


module.exports = { print, println };
