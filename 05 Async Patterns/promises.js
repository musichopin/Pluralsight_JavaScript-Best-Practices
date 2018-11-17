function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill(); // executes callback
		}, 500)
	});
}

function findUser() {
	return asyncMethod('Find User') // returns promise
}

function validateUser() {
	return asyncMethod('validate User')
}

function doStuff() {
	return asyncMethod('do stuff')
}

asyncMethod('Open DB Connection')
	.then(findUser) /*error function can also be passed here*/
	.then(validateUser) /*method chaining*/
	.then(doStuff)
	.then(function () {})



// vers: more basic version w/o refactoring (semi raw):
function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill();
		}, 500)
	});
}

function findUser() {
	asyncMethod('Find User')
		.then(validateUser)
}

function validateUser() {
	asyncMethod('validate User')
		.then(doStuff)
}

function doStuff() {
	asyncMethod('do stuff')
		.then(function () {})
}

asyncMethod('Open DB Connection')
	.then(findUser);



// vers: promises w/ anonymous functions (very raw):
function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill();
		}, 500)
	});
}

asyncMethod('Open DB Connection').then(function(){
	asyncMethod('Find User').then(function(){
		asyncMethod('Validate User').then(function(){
			asyncMethod('do Stuff').then(function(){})			
		})
	})
})



// vers: callback w/ anonymous functions:
function asyncMethod(message, cb){
	setTimeout(function(){
		console.log(message);
		cb();
	}, 500);
}

asyncMethod('Open DB Connection', function(){
	asyncMethod('Find User', function(){
		asyncMethod('Validate User', function(){
			asyncMethod('do Stuff', function(){})				
		})
	})
})



// vers: using callback w/o anonymous functions:
function asyncMethod(message, cb){
	setTimeout(function(){
		console.log(message);
		cb();
	}, 500);
}

function doStuff(){
	asyncMethod('do Stuff', function(){})
}

function validateUser(){
	asyncMethod('Validate User', doStuff)
}

function findUser(){
	asyncMethod('Find User', validateUser)
}

asyncMethod('Open DB Connection', findUser)