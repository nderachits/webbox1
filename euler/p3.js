
TestCase("EulerP3", {
   testMaxPrime : function() {
       assertEquals(5, maxPrime(10));
       assertEquals(29, maxPrime(13195));
       console.log(maxPrime(600851475143));
   }
});

function maxPrime(num) {
    var max = Math.floor(Math.sqrt(num));
    for(var i = 2; i <= max; i+=1) {
        if(num % i === 0) {
            return Math.max(i, maxPrime(num / i));
        }
    }
    return num;
}