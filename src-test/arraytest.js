/**
 * User: nike
 * Date: 2/27/13
 */

TestCase("ArrayTest", {
   "test array splice should modify arr" : function () {
       var arr = [1,2,3,4,5];
       var res = arr.splice(2,3);
       assertEquals([1,2], arr);
       assertEquals([3,4,5], res);
   }
});