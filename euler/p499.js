
TestCase("EulerP499", {
   testWithRandom : function() {
       console.log("0.2522: "+findProb(2,2));
       console.log("0.6873: "+findProb(2,5));
       console.log("0.9952: "+findProb(6,10000));
       console.log("?: "+findProb(15,1000000000));

   }
});

function findProb(cost, initial) {
    var rep = 2000;
    var notLost = 0;
    for(var i=0; i < rep; i++) {
        if( winWithRnd(cost, initial)) {
            notLost++;
        }
    }
    return notLost / rep;
}

function winWithRnd(cost, initial) {
    var iterate = 2000;
    var money = initial;
    var pot;
    for(var i = 0; i < iterate; i++) {
        money -= cost;
        if(money < 0) {
            return false;
        }
        pot = 1;
        var rnd;
        while((rnd = Math.random()) < 0.5) {
            pot *=2;
        }
        money += pot;
    }
    return true;
}