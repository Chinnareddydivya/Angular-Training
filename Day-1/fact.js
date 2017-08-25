function factorial(n) {
    var i, sum = 1 ;
    for (i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}

function fact(n) {
    return n == 1 ? 1 : n * fact(n - 1)
}
console.log(fact(5));

function numberSum(num)
{
	var sum = 0;
    for(var i=0; i<num;i++){
     sum += i
    }
    return sum;
}
console.log('Natural Numbers Sum: ' + numberSum(10));


function multipleSum(num)
{
		var sum = 0; 
		for(var i=0; i<num; i++){
      if(i%3 == 0 || i%5 == 0){
      		sum+= i;
      }
    }
    return sum;
    
}
console.log('Multiple 3 or 5 Sum below 10: ' + multipleSum(10));


function closestPower(num)
{
	var value = Math.pow( 2, Math.round( Math.log( num ) / Math.log( 2 ) ) ),
    sum = 0;

	while (value) {
	    sum += value % 10;
	    value = Math.floor(value / 10);
	}
    return sum;
    
}
console.log('Multiple 3 or 5 Sum below 10: ' + closestPower(10));


function multipleString(num)
{
		var sum = []; 
		for(var i=1; i<=num; i++){
      (i%3 == 0 && i%5 == 0) ? sum.push("FizzBuzz") : (i%3 == 0) ? sum.push("FIZZ") : (i%5 == 0) ? sum.push("Buzz") : sum.push(i);
    }
    return sum;
    
}
console.log('Multiple 3 or 5 Sum below 10: ' + multipleString(17));

