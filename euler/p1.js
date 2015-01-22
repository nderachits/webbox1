/**
 * Created by nike on 1/22/15.
 */

TestCase("EulerP1", {
   "testP1" : function () {
       assertEquals(23, sumOf3and5Below(10));
       console.log(sumOf3and5Below(1000));
   }
});

function sumOf3and5Below(below) {
    var sum = 0;
    for(var i=1; i < below; i++) {
        if( i % 3 === 0 || i % 5 === 0) {
            sum+= i;
        }
    }
    return sum;
}
