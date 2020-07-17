// Problem-01: Feet to Mile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(47000);
result = result.toFixed(2);
// console.log("Total Mile is:", result);

// Problem-02: Wood Calculator
function woodCalculator(chair, table, cot) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForCot = cot * 5;
    var totalWood = woodForChair + woodForTable + woodForCot;
    return totalWood;
}

var totalWoodResult = woodCalculator(14, 5, 12);
// console.log("We need", totalWoodResult,"cubic feet wood.");

// Problem-03: Brick Calculator for Construction
function brickCalculator(numberOfFloor) {
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor > 20) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) + ((numberOfFloor - 20) * 10 * 1000);
    }
    else if (numberOfFloor > 10) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + ((numberOfFloor - 10) * 12 * 1000);
    }
    else if (numberOfFloor > 0) {
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {
        console.log("Number of floor is > 0");
    }
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(23);
// console.log("We need", totalBreakCount, "bricks to build the whole thing.");

// Problem-04: Smallest name identifier
function tinyFriend(names) {
    var smallest = names[0];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < smallest.length) {
            smallest = currentName;
        }
    }
    return smallest;
}

var smallestNameFriend = tinyFriend(['Salman', 'Tahmid', 'Ria', 'Sabrina', 'Mahmud', 'Rahat', 'Soha']);
// console.log("My friend with smallest name is", smallestNameFriend);