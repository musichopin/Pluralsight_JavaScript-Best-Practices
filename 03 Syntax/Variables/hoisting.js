var myVariable = 10;

function func(){
  myVariable = 25;
  
  var myVariable;
}

func();
console.log(myVariable);