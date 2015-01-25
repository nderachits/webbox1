
TestCase("EulerP6", {
    testDiffSumSqrt : function() {
        assertEquals(2640, diffSqrtSums(10));
        console.log(diffSqrtSums(100));
    }
});

function diffSqrtSums(n) {
    var sqrtOfSum = Math.pow((1+n)*n/ 2, 2);

    var sumOfSqrt = 0;
    for(var i=1; i<=n; i++) {
        sumOfSqrt += i*i;
    }
    return sqrtOfSum - sumOfSqrt;
}