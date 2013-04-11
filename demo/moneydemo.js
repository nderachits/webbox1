/**
 * User: nike
 * Date: 3/18/13
 */

var saver = new MoneySaver();
saver.salary = 2800;
saver.savingRate = 30;
saver.yearlyPromotion = 15;

var period = 12*4;

var kolyaSaved = saver.expectedInMonths(period);
console.log("expected money Kolya: "+kolyaSaved);

var saverAnn = new MoneySaver();
saverAnn.salary = 950;
saverAnn.savingRate = 45;
saverAnn.yearlyPromotion = 15;

var annSaved = saverAnn.expectedInMonths(period);
console.log("expected money Ann: "+annSaved);


console.log("kolya+ann savings: "+(kolyaSaved+annSaved));