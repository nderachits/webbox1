var assert = require("assert");

suite("EulerP12", function() {

    test("testCountDiv", function() {
       assert.equal(4, countDiv(6));
    });

    test("testCountDiv28", function() {
        assert.equal(6, countDiv(28));
    });


    test("test5thTriangleNum", function() {
        assert.equal(28, findFirstWithNthDivisors(5));

    });

    test("find500thTriangleNumber", function() {
        console.log(findFirstWithNthDivisors(500));
    });
});

function countDiv(triangleNum) {
    var primDiv = {};

    var n = triangleNum;
    //console.log("n: " + n);


    var limit = Math.floor(Math.sqrt(n));
    for (var j = 2; j <= limit && n !== 1; j++) {
        while (n % j === 0) {
            n /= j;
            inc(primDiv, j);
        }
    }
    if (n !== 1) {
        inc(primDiv, n)
    }

    divNum = 1;
    for (var prop in primDiv) {
        divNum *= primDiv[prop] + 1;
    }
    return divNum;
}

function findFirstWithNthDivisors(targetDivNum) {
    //console.log("target: "+targetDivNum);

    var divNum;
    var triangleNum = 0;
    for(var i = 2;;i++) {
        triangleNum = (i + 1) * i / 2;
        divNum = countDiv(triangleNum);
        if(divNum >= targetDivNum) {
            return triangleNum;
        }
    }
}

function inc(obj, num) {
    if(obj.hasOwnProperty(""+num)) {
        obj[""+num] ++;
    } else {
        obj[""+num] = 1;
    }
}