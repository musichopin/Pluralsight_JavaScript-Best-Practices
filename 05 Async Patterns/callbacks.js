function findAndValidateUser (username, password, done) {
//validateUser() and findUser() written inside of findAndValidateUser() since 
//they use username and done parameters of findAndValidateUser() function
	var url = "mongodb://localhost:27017/libraryApp";
	function validateUser (err, results) {done(null, results)}
	function findUser (err, db) {
		if(db.username){
			findOne({username: username}, validateUser);
		}
	}
	mongodb.connect(url, findUser);
}

module.exports = function () {
	passport.use(new LocalStrategy({
		userNameField: 'username',
		passwordField: 'password'
	}, findAndValidateUser));
}

// ex: we are creating an async method ourselves:
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


// vers for ex: not using anonymous functions:
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