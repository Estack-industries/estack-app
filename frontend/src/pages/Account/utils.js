const moneyFormat = function(number) {
	const numberFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
	});
	
	if (number < 1000000000) return numberFormatter.format(number);
	
	const NUMBER_NAMES = [
		'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion'
	]

	number /= 1000000000;
	const NumberSuffix = NUMBER_NAMES.find(function(largeNumber, index) {
		if (number < 100) return true;
		number /= 1000;
		return false;
	});
	if (NumberSuffix === undefined) return ''
	return numberFormatter.format(number) + ' ' + NumberSuffix;
}

function dateFormat(date) {
	date = new Date(date);

	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const year = date.getFullYear();

	return day + '/' + month + '/' + year;
}

export { moneyFormat, dateFormat};