/**
 * Date: 3/1/13
 */

var loopLength = 5000000;
// Populate an array to loop
var array = [];
for (var i = 0; i < loopLength; i++) {
    array[i] = "item" + i;
}
function forLoop() {
    for (var i = 0, item; i < array.length; i++) {
        item = array[i];
    }
}

function forLoopCachedLength() {
    for (var i = 0, l = array.length, item; i < l; i++) {
        item = array[i];
    }
}
function forLoopDirectAccess() {
    for (var i = 0, item; (item = array[i]); i++) {
    }
}
function whileLoop() {
    var i = 0, item;
    while (i < array.length) {
        item = array[i];
        i++;
    }
}

// Run tests
runBenchmark("for-loop",
    forLoop);
runBenchmark("for-loop, cached length",
    forLoopCachedLength);
runBenchmark("for-loop, direct array access",
    forLoopDirectAccess);
runBenchmark("while-loop",
    whileLoop);
