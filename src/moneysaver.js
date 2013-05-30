/**
 * User: nike
 * Date: 2/28/13
 */


function MoneySaver() {
    this.salary = 0;
    this.savingRate = 0; // 0-100
    this.yearlyPromotion = 0; // 0-100
}

MoneySaver.prototype.expectedInMonths = function(months) {
    var years = Math.ceil( months / 12 );
    var monthSummed = 0;
    var currentSalary = this.salary;
    var moneySaved = 0;
    for(var i = 0; i < years; i++) {
        var numMonthsInYear = (i === years - 1) ? months - i*12 : 12;
        moneySaved += currentSalary * numMonthsInYear * this.savingRate / 100;
        currentSalary *= (100 + this.yearlyPromotion) / 100;
    }

    return moneySaved;
};

