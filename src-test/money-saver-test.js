/**
 * User: nike
 * Date: 2/28/13
 */

TestCase( "SavingsTest", {
    testYearSavings : function() {

        var saver = new MoneySaver();
        saver.salary = 300;
        saver.savingRate = 5;
        assertEquals("2 month savings should be 60 (salary 300,savings 5%)",
            30, saver.expectedInMonths(2));
        saver.savingRate = 15;
        assertEquals("2 month savings should be 60 (salary 300,savings 15%)",
            90, saver.expectedInMonths(2));
    },

    testYearPromotion : function() {
        var saver = new MoneySaver();
        saver.salary = 300;
        saver.savingRate = 10;
        saver.yearlyPromotion = 10;
        assertEquals("18 months(1.5) savings", 30*12 + 33*6, saver.expectedInMonths(18));
        assertEquals("24 months savings", 30*12 + 33*12, saver.expectedInMonths(24));
        assertEquals("23 months savings", 30*12 + 33*11, saver.expectedInMonths(23));
        assertEqualsDelta("25 months savings", 30*12 + 33*12 + 36.3*1, saver.expectedInMonths(25), 0.000001);

        assertEqualsDelta("30 months(2.5) savings", 30*12 + 33*12 + 36.3*6, saver.expectedInMonths(30), 0.000001);
        saver.savingRate = 20;
        saver.yearlyPromotion = 20;
        assertEqualsDelta("18 months(1.5) savings", 60*12 + 72*6, saver.expectedInMonths(18), 0.000001);
    }
});
