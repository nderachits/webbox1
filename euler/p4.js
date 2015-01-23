
TestCase("EulerP4", {
    testPalindrome3x3 : function() {
        assertEquals(9009, findMaxPal(2));
        console.log(findMaxPal(3));
    }
});

function findMaxPal(digits) {
    var max = Math.pow(10, digits) - 1;
    var min = Math.pow(10, digits - 1);

    var product;
    var maxPalFound = 0;
    for(var i = max; i >= min; i--) {
        for(var j = i; j >= min; j--) {
            product = i * j;
            if(isPal(product) && product > maxPalFound) {
                maxPalFound = product;
            }
        }
    }
    return maxPalFound;
}

function isPal(n) {
    var s = ""+n;
    if(s.length % 2 === 1) {
        return false;
    }

    for(var i = 0; i < s.length / 2; i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}