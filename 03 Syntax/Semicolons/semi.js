var x = 5

function test() {
  if (true) {
    var x = 0;
  }

  x += 1; // Default: 'x' used out of scope.
            // No warning when funcscope:true
}


function returnObject() 
{
	if(true)
	{
		return {
			hi: 'hello'
		};
	}
}

/*to check errors with js hint we followed these commands:
1. npm install -g jshint
2. (in semicolons folder) jshint semi.js
*/