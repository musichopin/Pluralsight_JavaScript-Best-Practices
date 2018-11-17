function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill(); // executes callback
		}, 500)
	});
}

async function main() {
/*promises gets rid of callback functions completely*/
	var one = await asyncMethod('Open DB Connection')
	var two = await asyncMethod('Find User')
	var three = await asyncMethod('validate User')
	var four = await asyncMethod('do stuff')
}

main();



// vers: passing variables:
function asyncMethod(message, num) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message + ' ' + num);
			fulfill(num+1); // executes callback
		}, 500)
	});
}

async function main() {
/*promises gets rid of callback functions completely*/
	var one = await asyncMethod('Open DB Connection', 0)
	var two = await asyncMethod('Find User', one)
	var three = await asyncMethod('validate User', two)
	var four = await asyncMethod('do stuff', three)
}

main();