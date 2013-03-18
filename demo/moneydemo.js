/**
 * User: nike
 * Date: 3/18/13
 */

var saver = new MoneySaver();
saver.setSalary(300);
saver.setSavingRate(10);

console.log("expected money: "+saver.expectedInMonths(3));
