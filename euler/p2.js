
TestCase("EulerP2",  {
    testP2 : function() {
        assertEquals(10, evenFib(20));
        console.log(evenFib(4000000));
    }
});

function evenFib(maxnum) {
    var a = 1;
    var b = 2;
    var sum = 0;
    while( b < maxnum) {
        if(b % 2 === 0) {
            sum += b;
        }
        b = a + b;
        a = b - a;
    }
    return sum;
}

