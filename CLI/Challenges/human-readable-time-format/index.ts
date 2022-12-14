const getS = (num: number) => {
	if (num != 1) {
		return 's';
	} else {
		return '';
	}
}

const formatDuration = (seconds: number) => {
	const year = Math.floor(seconds / 31536000);
	const day = Math.floor((seconds / 86400) - (year * 365));
	const hour = Math.floor((seconds / 3600) - ((365*year + day) * 24));
	const min = Math.floor((seconds / 60) - ((year * 8760 + day*24 + hour) * 60));
	const second = Math.floor(seconds % 60);
	
	let result = '';
	let stringArray: string[] = [];
	
	if (seconds == 0) {
		result += 'now';
	}
	if (year != 0) {
		stringArray.push(`${year} year${getS(year)}`);
	}
	if (day != 0) {
		stringArray.push(`${day} day${getS(day)}`);
	}
	if (hour != 0) {
		stringArray.push(`${hour} hour${getS(hour)}`);
	}
	if (min != 0) {
		stringArray.push(`${min} minute${getS(min)}`);
	}   
	if (second != 0) {
		stringArray.push(`${second} second${getS(second)}`);
	} 
  

	for (let i=0; i <stringArray.length; i++) { 
		if (i == stringArray.length -1 && stringArray.length != 1) {
			result += '';
			result += stringArray[i];
		} else if (stringArray.length == 1) { 
			result += stringArray[i];
		} else {
			result += stringArray[i];
			result += ', ';
		}
	}
	
	return result.replace(/, ([^,]*)$/, ' and $1');
}

console.log(formatDuration(563215)); // '6 days, 12 hours, 26 minutes and 55 seconds'
