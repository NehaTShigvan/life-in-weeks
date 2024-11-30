function lifeInWeeks(age) {

    var left = 90-age;
    var days = 365*left;
    var weeks = 52*left;
    var months = 12*left;
    
    console.log("You have "+ days+ " days, " + weeks+ " weeks, and " + months+ " months left.");

}

