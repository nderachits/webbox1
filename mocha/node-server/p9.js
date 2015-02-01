var assert = require("assert")

suite("EulerP9", function() {
    test("findTriplet", function() {
        assert.deepEqual([3,4,5], findNaturalWithSum(12));
        var a = findNaturalWithSum(1000);
        console.log(a[0]*a[1]*a[2]);
    });
});

function findNaturalWithSum(sum) {
    for(var i = 1; i < sum-2; i++) {
        for(var j = i+1; j < sum-1; j++) {
            var k = sum - i - j;
            if(i*i + j*j === k*k) {
                return [i,j,k];
            }
        }
    }
    return [];
}