/**
 * Created by harry on 12/27/13.
 */

var chamberFeaturesNum = [
    30, 40, 50, 60, 65, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
    87, 88, 89, 100
]

var chamberFeaturesValue = [
    "that is damp and moldy",
    "that is half-flooded, with water rising up to waist level (next %_1d4_% corridors, rooms, and chambers are half-flooded as well)",
    "with refuse and a putrid smell",
    "with frescoes of an ancient civilization",
    "with a statue from an ancient civilization",
    "with pottery shards",
    "with a magic circle (see the Magic Effects subtable on p. 33)",
    "with common fungi around the chamber",
    "with patches of slime",
    "with %_1D12_% kegs (25% empty, 25% putrid food, 25% oil, 25% fresh food)",
    "with %_1D4_% tombs",
    "with %_1D3_% mummified corpses",
    "with slithering sound",
    "with a fire pit (10% chance of being lit)",
    "with broken and decaying furniture",
    "with %_1D3_% thrones",
    "with an altar",
    "with a drumming sound",
    "with weapon racks (10% chance for %_1D4_% scimitars from an ancient civilization)",
    "with braziers and charcoal",
    "with an ancient battlefield and %_2D6_% skeletal remains",
    "with frescoes",
    "with tapestries worth a total of 200gp and weighing equivalent to 1,000 gp",
    "with a large, demonic idol revered by an ancient civilization",
    "with pillars",
    ""
]

var chamberNum = [
    4, 6, 9, 10, 14, 16, 17, 20
]

var chamberValue = [
    "square 20'x 20' chamber %CHAMBER_FEATURE%.",
    "square 20'x 20' chamber %CHAMBER_FEATURE%.",
    "square 30'x 30' chamber %CHAMBER_FEATURE%.",
    "square 40'x 40' chamber %CHAMBER_FEATURE%.",
    "rectangular 20'x 30' chamber %CHAMBER_FEATURE%.",
    "rectangular 30'x 40' chamber %CHAMBER_FEATURE%.",
    "rectangular 40'x 60' chamber %CHAMBER_FEATURE%.",
    "%SPECIAL_CHAMBER%"
]

var chamberNumExits = [
    0, 1, 3, 4, 0, 3, 4
]

var specialChamberNum = [
    8, 14, 19, 20
]

var specialChamberValue = [
    "circular chamber with a %_1D6_% x 10' diameter and %CHAMBER_FEATURE%.",
    "octagonal chamber %CHAMBER_FEATURE%.  Each side is 10'.",
    "60' diameter cave %CHAMBER_FEATURE%.",
    "triangular chamber with 20' sides and %CHAMBER_FEATURE%."
]

var specialChamberNumExits = [
    0, 3, 5, 2
]

var exitLocationNum = [
    7, 12, 17, 20
]

var exitLocationValue = [
    "opposite wall",
    "left wall",
    "right wall",
    "same wall"
]

var chamberContentsNum = [
    8, 12, 16, 19, 20
]

var chamberContentsValue = [
    "Empty",
    "Monster only (see Random Monster Encounters Table on p. 36)",
    "Monster and treausre (see Random Monster Encounters Table on p. 36)",
    "Trap (see the Traps subtable on p. 32)",
    "Treasure only (see the Treasure section on p. 29)"
]

function formatExits(numExits) {
    if (numExits == 0) {
        return "no exits";
    } else if (numExits == 1) {
        return "1 exit";
    } else {
        return "" + numExits + " exits";
    }
}

function getSpecialChamberText(index) {
    var text = specialChamberValue[index];
    switch (index) {
        case 0:
            text = "circular chamber with a %POOL% in the center%MAGICAL%.";
            var poolText = "";
            var magicalText = "";
            if (rollDice(100) < 25) {
                poolText = 'dry ';
            } else if (rollDice(100) < 50) {
                poolText = 'magical ';
                magicalText = " (check Magic Effects subtable on p. 33 if a character drinks the water)"
            }
            if (rollDice(100) < 50) {
                poolText = poolText + 'pool with a diameter of ' + (rollDice(6) * 10);
            } else {
                poolText = poolText + 'well with a diameter of ' + (rollDice(6) * 10);
            }
            text = replaceVariable(text, "%POOL%", poolText);
            text = replaceVariable(text, "%MAGICAL%", magicalText);
            break;
    }
    return text;
}

function getChamber() {
    var num = findTableIndex(20, chamberNum);
    var text;
    if (num == 7) {
        console.log('placing special chamber')
        num = findTableIndex(20, specialChamberNum);
        var numExits = specialChamberNumExits[num];
        if (numExits == 3) {
            numExits = rollDice(4) - 1;
        } else if (numExits == 5) {
            numExits = rollDice(4) + 1;
        }

        text = getSpecialChamberText(num);
    } else {
        var numExits = chamberNumExits[num];
        if (numExits == 3) {
            numExits = rollDice(4) - 1;
        } else if (numExits == 4) {
            numExits = rollDice(4);
        }

        text = chamberValue[num];
    }
    text += "<br>";
    if (numExits > 0) {
        for (var i = 0; i < numExits; i++) {
            text += replaceVariable("<br>There is an exit on %EXIT_LOC%.", "%EXIT_LOC%", getExitLocation());
        }
    } else {
        text += "<br>There are no exits.";
    }

    text = replaceVariable(text, "%CHAMBER_FEATURE%", getChamberFeature());
    text += '<br><br>' + getChamberContents();

    return text;
}

function getExitLocation() {
    return findTableValue(20, exitLocationNum, exitLocationValue);
}

function getChamberFeature(ignoreDoubleResults) {
    ignoreDoubleResults = ignoreDoubleResults || false;

    var num = findTableIndex(100, chamberFeaturesNum);
    if (ignoreDoubleResults || num < chamberFeaturesValue.length - 1) {
        while (num == chamberFeaturesValue.length - 1) {
            num = findTableIndex(100, chamberFeaturesNum);
        }
        return chamberFeaturesValue[num];
    } else {
        var text = getChamberFeature(true);
        text += ' and ' + getChamberFeature(true);
        return text;
    }
}

function getChamberContents() {
    return findTableValue(20, chamberContentsNum, chamberContentsValue);
}