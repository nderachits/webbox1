
TestCase("EulerP7", {
    testPrimes : function() {
        assertEquals(13, getNthPrime(6).prime);
        var n = 10001;
        var p = getNthPrime(n);
        assertEquals(n, p.n);
        console.log(p.prime);
    }
});

function getNthPrime(n) {
    var size = 150000;
    var a = [ 0, 0 ];
    for (var i = 2; i < size; i++) {
        a[i] = i;
    }
    var prime = 0;
    var lastPrime = 0;
    for (var i = 2; i < size; i++) {
        if(a[i] !== 0) {
            prime++;
            lastPrime = i;
            if(prime === n) {
                break;
            }
            for (var j = i * 2; j < size; j+=i) {
                a[j] = 0;
            }
        }
    }
    return {n: prime, prime: lastPrime} ;
}
