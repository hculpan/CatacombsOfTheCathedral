/**
 * Created by usucuha on 12/27/13.
 */

var mainTableNums = [
//    0, 0, 0, 20, 0, 0
    9, 12, 16, 17, 18, 20
];

var mainTableValues = [
    "You see a 30' long corridor ahead of you %CORR_TYPE%.  %CORR_ILLUMIN%  %CORR_FEATURE%  %CORR_STRUCTURE%",
    "You see a %DOOR_TYPE%",
    "You have come to a %CHAMBER%",
    "You have found %STAIRS%.",
    "You have reached a dead end.",
    "Wandering monster!"
];

function roll() {
    if (validateAl()) {
        var output = rollMainTable();
        console.log(output);
        $('#main-result').html('<p>' + output + '</p>');
    } else {
        $('#main-result').html("<p class='error'>You must enter Average Level before rolling</p>");
    }
}

function rollMainTable() {
    var index = findTableIndex(20, mainTableNums);
    var result = mainTableValues[index];
    switch (index) {
        case 0: // corridor
            console.log('placing corridor');
            result = replaceVariable(result, '%CORR_TYPE%', getCorridorType());
            result = replaceVariable(result, '%CORR_ILLUMIN%', getCorridorIllumination());
            result = replaceVariable(result, '%CORR_FEATURE%', getCorridorFeature());
            result = replaceVariable(result, '%CORR_STRUCTURE%', getCorridorStructure());
            break;
        case 1: // door
            console.log('placing door');
            result = replaceVariable(result, '%DOOR_TYPE%', getDoorType());
            break;
        case 2: // chamber
            console.log('placing chamber');
            result = replaceVariable(result, '%CHAMBER%', getChamber());
            break;
        case 3:
            console.log('placing stairs');
            result = replaceVariable(result, '%STAIRS%', getStairs());
        default:

    }
    return result;
}

