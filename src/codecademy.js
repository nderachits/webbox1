/**
 * Date: 3/29/13
 */

var findMax = function(num1, num2, num3) {
    var max = num1;
    if(num2 > max) {
        max = num2;
    }
    if(num3 > max) {
        max = num3;
    }
    return max;
};

var var1 = 5;

var varFunc = function(param) {
    var var1 = param;
    return var1;
};

