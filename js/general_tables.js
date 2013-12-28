/**
 * Created by harry on 12/27/13.
 */

var magicEffectsNum = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
    55, 60, 65, 70, 75, 80, 85, 90, 92, 94, 96, 98, 99, 100
];

var magicEffectsValue = [
    'One member of the party (selected at random) is aged 2d10 years!',
    'One member of the party (selected at random) changes alignment to the opposite value (neutral is unaffected).',
    'One member of the party (selected at random) is infected with lycanthrope becoming a wererat!',
    'The party is seized with fear and flee!',
    'One member of the party (selected at random) has an ability (selected at random) that is reduced by 1.',
    'One member of the party (selected at random) has an ability (selected at random) that is increased by 1.',
    'One member of the party (selected at random) is hit with a Flesh to Stone spell, saving throw vs. Spell to avoid.',
    'One member of the party (selected at random) suddenly are able to speak and ancient language.',
    'One member of the party (selected at random) receive a Limited Wish that must be used now.',
    'Any damage that one member of the party (selected at random) has suffered is instantly healed.',
    '1d4 spirit trolls appear and attack!',
    'One member of the party (selected at random) receives an evil pseudo black dragon familiar.',
    'One member of the party (selected at random) is infected with 2d4 rot grubs.',
    'One member of the party (selected at random) is rejuvenated for 2d10 years.',
    'One member of the party (selected at random) has his/her flesh turned to gold (25%), transparent (25%), or pitch-black (50%) color',
    'One member of the party (selected at random) converts to another deity randomly (changes alignment if necessary.',
    'One member of the party (selected at random) becomes insane, save vs. Spells to avoid.',
    'One member of the party (selected at random) has his/her gender changed.',
    'One member of the party (selected at random) is put into a Temporal Stasis, as per the spell (no saving throw).',
    'Select One member of the party at random: If his/her DEX is above 9, that character switches class to thief immediately.  Reroll hit points and recalculate all other class abilities.  If the person is already a thief, assassin, or monk, then he/she loses a level.',
    'One member of the party (selected at random) has his/her CHA changed to 18.',
    'One member of the party (selected at random) has his/her CHA changed to 3.',
    'One member of the party (selected at random) is crippled, losing 1d4 DEX and limited to half-movement rate.',
    'One member of the party (selected at random) receives a huge ruby worth 1,000gp / AL'
]

function getMagicalEffect() {
    return findTableValue(100, magicEffectsNum, magicEffectsValue);
}