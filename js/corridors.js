/**
 * Created by harry on 12/27/13.
 */

var corridorTypeNum = [
    2, 7, 12, 15, 17, 18, 19, 20
];

var corridorTypeValues = [
    'made with standard masonry and rubble',
    'with rough masonry and a dirt floor',
    'with rough masonry and uneven flagstones',
    'with standard masonry and an uneven flagstone floor',
    'with standard masonry and a flagstone floor',
    'made of weird smooth stone, polished like a mirror',
    'of cracked marble and alabaster construction',
    'of marble and alabaster construction'
]

var corridorIllumNum = [
    70, 80, 95, 90, 96, 99, 100
]

var corridorIllumValue = [
    'There is no light here.',
    'It is dimly lit with a single torch.',
    'It is well lit with a row of torches.',
    'Clay lamps in alcoves illuminate the corridor.',
    'Light comes from the oil lamps that hang from the ceiling.',
    'There is a single lantern that provides some illumination.',
    'A row of lanterns provides plenty of light.'
]

var corridorFeaturesNum = [
    50, 55, 60, 65, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 95, 100 ];

var corridorFeaturesValue = [
    'It is dank and moldy.',
    'There are wide mold patches.',
    'It is warm.',
    'The walls are cracked.',
    'The floor is cracked.',
    'It is littered with sewage.',
    'There are 2 ft deep cesspits every 10 feet.',
    'There are puddles.',
    'There is guano in various spots.',
    'The ceiling has a slimy coating.',
    'The walls have a slimy coating.',
    'The floor has a slimy coating.',
    'The walls are greasy and covered with a viscous material.',
    'There are 5 ft deep alcoves every 10 feet.',
    'There is a stone statue in the corridor.',
    'It smells of rotten vegetation.',
    'There is a strong salty odor.',
    'You see a dried patch of blood.',
    'There are crude paintings on the wall.',
    'There are ancient paintings on the wall.',
    'There are mosaics that have been hacked to pieces.',
    'Mosaics showing scenes from an ancient civilization cover the walls.',
    'A skeleton, wrapped in mummy bandages, is in the corridor.  It does not move.',
    'There is a moaning sound.',
    'There is a dripping sound.'
]

var corridorRandomItemsNum = [
    2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20
]

var corridorRandomItemsValue = [
    'There is an unlit brazier with charcoals.',
    'There is an empty bucket here.',
    'There is a knife here.',
    'There is a broken portable brass sundial on the floor.',
    'There is a statuette (worth d00gp).',
    'There is a single slipper here, one half of a pair of slippers of spider climbing.',
    'You find a +1 short sword.',
    'You see a battered shield on the floor.',
    'There is a hat here.',
    'You see a wrought iron scroll case worth 25gp.',
    'You find a smashed crystal ball.',
    'There is a clay pot.',
    'There is a 10 ft length of help rope.',
    'You see a miniature skull pained green.',
    'There is a single stocking.',
    'You see a small gong.'
]

var specialCorridorNum = [
    8, 12, 16, 18, 19, 20
]

var specialCorrdidorValue = [
    "This corridor is half-flood, with the water rising up about 2.5 feet to waist level.  The next 1d4 corridors, rooms, and chambers are half-flooded as well.",
    "This corridor is completely flood and all illumination sources are snuffed out.  The next 1d6 corridors, rooms, and chambers are underwater as well.",
    "This corridor is 20' wide.",
    "This corridor is 30' wide with columns down the center.",
    "A 10' stream bisects the passage, with a 25% chance of being bridged.",
    "A 20' river bisects the passage, with a 25% chance of being bridged and a 25% chance of there being a small canoe here."
]

var corridorStructureNum = [
    6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20
]

var corridorStructureValue = [
    "",
    "A side passage opens to the left at 90 degrees in 15'.",
    "A side passage opens to the right at 90 degrees in 15'.",
    "A side passage curves to the left at 45 degrees in 15'.",
    "A side passage curves to the right at 45 degrees in 15'.",
    "The corridor ends in 30' at a T.",
    "The corridor ends in 30' at 4-way intersection.",
    "The corridor turns left 90 degrees in 30'.",
    "The corridor turns right 90 degrees in 30'.",
    "The corridor curves left 45 degrees in 30'.",
    "The corridor curves right 45 degrees in 30'.",
    "The corridor is trapped!"
]

function getCorridorStructure() {
    return findTableValue(20, corridorStructureNum, corridorStructureValue);
}

function getCorridorRandomItem() {
    return findTableValue(20, corridorRandomItemsNum, corridorRandomItemsValue);
}

function getSpecialCorridor() {
    return findTableValue(20, specialCorridorNum, specialCorrdidorValue);
}

function getCorridorType() {
    return findTableValue(20, corridorTypeNum, corridorTypeValues);
}

function getCorridorIllumination() {
    return findTableValue(100, corridorIllumNum, corridorIllumValue);
}

function getCorridorFeature() {
    var num = findTableIndex(100, corridorFeaturesNum);
    switch (num) {
        case 9: // green slime
        case 10:
        case 11:
            var msg = corridorFeaturesValue[num];
            if (rollDice(10) == 1) {
                msg += '<br>There is a green slime here!  (Green Slime, HD 2, AC n/a, Attk 1, Damage special)';
            }
            return msg;
            break;
        case 14: // Magical effect from stone statue
            if (rollDice(100) < 50) {
                return '<br>Ahead of you is a magical statue.  ' + getMagicalEffect();
            } else {
                return corridorFeaturesValue[num];
            }
            break;
        case 25: // random item
            return getCorridorRandomItem();
            break;
        case 26: // special corridor
            return getSpecialCorridor();
            break;
        default:
            return corridorFeaturesValue[num];
    }
}