/**
 * User: nike
 * Date: 2/28/13
 */


MoneySaver = function() {
    this.salary = 0;
    this.savingRate = 0;
};

MoneySaver.prototype.setSalary = function(salary) {
    this.salary = salary;
};
MoneySaver.prototype.setSavingRate = function(rate) {
    this.savingRate = rate;
};

MoneySaver.prototype.expectedInMonths = function(months) {
    return this.salary * months/ this.savingRate;
};

