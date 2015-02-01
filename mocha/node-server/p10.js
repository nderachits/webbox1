var assert = require("assert");

suite("EulerP10", function() {
    test("testSumPrime", function() {
        assert.equal(17, sumOfPrimeBelow(10));
        console.log(sumOfPrimeBelow(2000000));
    })
});

function sumOfPrimeBelow(size) {

    var a = [ 0, 0 ];
    for (var i = 2; i < size; i++) {
        a[i] = i;
    }

    for (var i = 2; i < size; i++) {
        if(a[i] !== 0) {
            for (var j = i * 2; j < size; j+=i) {
                a[j] = 0;
            }
        }
    }

    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum ;
}
