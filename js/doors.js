/**
 * Created by harry on 12/27/13.
 */

var doorTypeNum = [
    12, 15, 17, 19, 20
]

var doorTypeValue = [
    "wooden, moldy, and rotten (locked on 1-6/20, 1 in 6 chance of spores) door.",
    "reinforced wooden (locked 1-9/20, -1 to force open) door.",
    "rusted copper (locked 1-12/20, -1 to force open, +15% to pick) door.",
    "strong brass (locked 1-12/20, -2 to force open) door.",
    "grate (bend bars to open)."
]

var spaceBeyondDoorNum = [
    4, 8, 16, 18, 20
]

var spaceBeyondDoorValue = [
    "Beyond the grate is a corridor stretching 30' in both directions.",
    "Beyond the grate is a corridor continuing 30' straight ahead.",
    "Beyond the grate is a room.",
    "Beyond the grate is a chamber.",
    "It's a trap!"
]

function getSpaceBeyondDoor() {
    return findTableValue(20, spaceBeyondDoorNum, spaceBeyondDoorValue);
}

function getDoorType() {
    var num = findTableIndex(20, doorTypeNum);
    if (num == 4) {
        return doorTypeValue[num] + ' ' + getSpaceBeyondDoor();
    } else {
        return doorTypeValue[num];
    }
}