/**
 * User: nike
 * Date: 2/28/13
 */

TestCase( "SavingsTest", {
    "testYearSavings" : function() {

        var saver = new MoneySaver();
        saver.setSalary(300);
        saver.setSavingRate(10);
        assertEquals("2 month savings should be 60 (salary 300,savings 10%)",
            60, saver.expectedInMonths(2));
    }
});
