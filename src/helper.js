export function elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < (window.pageYOffset + window.innerHeight) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}

export function randomIntFromInterval(min, max) { // min and max included 
	return (Math.random() * (max - min) + min).toFixed(4);
}

export const formatDateFromString = (string) => {
	const newDate = new Date(string)
	const optionsDate = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	const optionsDay = {
		weekday: 'long'
	};

	const time = newDate.toLocaleTimeString('en-US')
	const date = newDate.toLocaleDateString(undefined, optionsDate)
	const day = newDate.toLocaleDateString(undefined, optionsDay)

	return day + ", " + date + " at " + time
}

export const getTimeFromString = (string) => {
	const newDate = new Date(string)
	const time = newDate.toLocaleTimeString('en-US')

	return time
}

export const isSameDateFromStrings = (dateOne, dateTwo) => {
	const newDateOne = new Date(dateOne)
	const newDateTwo = new Date(dateTwo)

	return (
		newDateOne.getDate() === newDateTwo.getDate() && 
		newDateOne.getMonth() === newDateTwo.getMonth() && newDateOne.getFullYear() === newDateTwo.getFullYear()
	)
}