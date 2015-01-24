
TestCase("EulerP5", {
   testDivisible : function() {
       assertEquals(2520, smallestMultForAll(10));
       console.log(smallestMultForAll(20));
   }
});

function smallestMultForAll(num) {
    var res = 1;
    for(var i = 2; i <= num; i++) {
        if(res % i !== 0) {
            res = findSmallestMultipleForTwo(res, i);
        }
    }
    return res;
}

function findSmallestMultipleForTwo(a,b) {
    var min = Math.min(a,b);
    var prod = a*b;
    for(var i = 2; i < min; i++) {
        while (a % i === 0 && b % i === 0) {
            prod /= i;
            a /= i;
            b /= i;
        }
    }
    return prod;
}