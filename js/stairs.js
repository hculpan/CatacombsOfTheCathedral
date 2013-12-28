/**
 * Created by harry on 12/27/13.
 */

var stairsTypeNum = [
    8, 10, 12, 15, 17, 18, 19, 20
]

var stairsTypeValue = [
    "stairs going down 1 level, %LANDING%",
    "stairs going down 2 levels, %LANDING%",
    "a shaft going up 1 level (exit to surface if on first level), %LANDING%",
    "a shaft going down 1 level, %LANDING%",
    "a shaft going down 2 levels, %LANDING%",
    "a shaft going down 3 levels, %LANDING%",
    "a trap door leading up 1 level (exit to surface if on first level), %LANDING%",
    "a trap door leading down 1 level, %LANDING%"
]

var stairsLandingNum = [
    8, 12, 18, 20
]

var stairsLandingValue = [
    "ending at 30'-long straight corridor",
    "ending with a chamber",
    "ending with a room",
    "ending with a trap"
]

function getStairs() {
    var text = findTableValue(20, stairsTypeNum, stairsTypeValue);
    var landNum = findTableIndex(20, stairsLandingNum);
    switch (landNum) {
        case 1: // chamber
        case 2: // room
            text = replaceVariable(text, '%LANDING%', stairsLandingValue[landNum]) + '.<br>';
            text += 'You see a ' + getChamber();
            break;
        default:
            text = replaceVariable(text, '%LANDING%', stairsLandingValue[landNum]);
    }
    return text;
}

