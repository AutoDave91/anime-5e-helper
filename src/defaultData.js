const defaultData = {
    "playableRaces": [
        {
            "race": 'Archfiend',
            'cost': 15,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Augmented (Strength)', 'modifier': 4 },
                { 'name': 'Conversion (1 Point per 10 damage)', 'modifier': 5 },
                { 'name': 'Edge (Strength dice rolls)', 'modifier': 4 },
                { 'name': 'Fast (x4 speed; 120 feet/round)', 'modifier': 2 },
                { 'name': 'Features (Darkvision 120’)', 'modifier': 2 },
                { 'name': 'Language (Common, Infernal)', 'modifier': 1 },
                { 'name': 'Massive Damage – Lesser (+4 Strength Impacts)', 'modifier': 4 },
                { 'name': 'Mind Control – Lesser (Demons)', 'modifier': 1 },
                { 'name': 'Protected (-4 Standard damage)', 'modifier': 4 },
                { 'name': 'Tunnelling (1 foot/round)', 'modifier': 1 },
                { 'name': 'Unique Attribute (x4 Thrown Weapon Distance)', 'modifier': 2 },
                { 'name': 'Charisma -', 'modifier': -1 },
                { 'name': 'AC Penalty', 'modifier': -4 },
                { 'name': 'Inept Attack (-4 attack rolls)', 'modifier': -4 },
                { 'name': 'Unique Defect (Big, Heavy, and Obvious)', 'modifier': -2 },
                { 'name': 'Vulnerability (Lightning)', 'modifier': -2 },
            ]
        },
        {
            "race": 'Asrai',
            'cost': 11,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Dexterity +', 'modifier': 1 },
                { 'name': 'Intelligence +', 'modifier': 1 },
                { 'name': 'Charisma +', 'modifier': 2 },
                { 'name': 'Flight (30 feet/round)', 'modifier': 3 },
                { 'name': 'Language (Common, Elvish, Sylvan)', 'modifier': 2 },
                { 'name': 'Sixth Sense (Danger)', 'modifier': 1 },
                { 'name': 'Special Movement (Zen Direction)', 'modifier': 1 }
            ]
        },
        {
            "race": 'Blinkbeast',
            'cost': 10,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Alternate Identify (Human Form)', 'modifier': 1 },
                { 'name': 'Dynamic Powers – Lesser (Vegetation; Area: 30’ -2; Concentration +1; Unpredictable +1)', 'modifier': 5 },
                { 'name': 'Language (Common, Sylvan)', 'modifier': 1 },
                { 'name': 'Teleport (100’)', 'modifier': 6 },
                { 'name': 'Dexterity -', 'modifier': -2 },
                { 'name': 'Charisma -', 'modifier': -1 }
            ]
        },
        {
            "race": 'Demonaga',
            'cost': 14,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Edge (Saving Throws vs. magic)', 'modifier': 2 },
                { 'name': 'Edge (Strength dice rolls)', 'modifier': 4 },
                { 'name': 'Fast (x2 speed; 60 feet/round)', 'modifier': 1 },
                { 'name': 'Immunity (Fire)', 'modifier': 9 },
                { 'name': 'Language (Common, Draconic, Primordial)', 'modifier': 2 },
                { 'name': 'Massive Damage – Lesser (+2 Strength Impacts)', 'modifier': 2 },
                { 'name': 'Protected (-2 Standard damage)', 'modifier': 2 },
                { 'name': 'Unique Attribute (x2 Thrown Weapon Distance)', 'modifier': 1 },
                { 'name': 'Wisdom -', 'modifier': -2 },
                { 'name': 'Charisma -', 'modifier': -2 },
                { 'name': 'AC Penalty', 'modifier': -2 },
                { 'name': 'Inept attack (-2 attack rolls)', 'modifier': -2 },
                { 'name': 'Unique Defect (Big, Heavy, and Obvious)', 'modifier': -1 }
            ]
        },
        {
            "race": 'Dragonborn',
            'cost': 9,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Strength +', 'modifier': 2 },
                { 'name': 'Charisma +', 'modifier': 1 },
                { 'name': 'Speed: 30’', 'modifier': 0 },
                { 'name': 'Breath weapon', 'modifier': 2 },
                { 'name': 'Resistance against damage type', 'modifier': 3 },
                { 'name': 'Languages: Common + Draconic', 'modifier': 1 }
            ],
        },
        {
            "race": 'Dwarf - Hill',
            'cost': 12,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Constitution +', 'modifier': 2 },
                { 'name': 'Speed: 25’ (in Heavy Armour, too)', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. poison', 'modifier': 1 },
                { 'name': 'Resistance against poison', 'modifier': 2 },
                { 'name': 'Resistance against poison', 'modifier': 1 },
                { 'name': 'Tool proficiency: one artisan', 'modifier': 1 },
                { 'name': 'Stonecunning', 'modifier': 1 },
                { 'name': 'Languages: Common + Dwarvish', 'modifier': 1 },
                { 'name': 'Wisdom +', 'modifier': 1 },
                { 'name': '+1 Hit Point/Level', 'modifier': 1 }
            ]
        },
        {
            "race": 'Dwarf - Mountain',
            'cost': 14,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Constitution +', 'modifier': 2 },
                { 'name': 'Speed: 25’ (in Heavy Armour, too)', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. poison', 'modifier': 1 },
                { 'name': 'Resistance against poison', 'modifier': 2 },
                { 'name': 'Resistance against poison', 'modifier': 1 },
                { 'name': 'Tool proficiency: one artisan', 'modifier': 1 },
                { 'name': 'Stonecunning', 'modifier': 1 },
                { 'name': 'Languages: Common + Dwarvish', 'modifier': 1 },
                { 'name': 'Strength +', 'modifier': 2 },
                { 'name': 'Armour proficiency: light + medium', 'modifier': 2 }
            ]
        },
        {
            "race": 'Elf - Dark',
            'cost': 13,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Dexterity +', 'modifier': 2 },
                { 'name': 'Speed: 30’', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Skill Proficiency: perception', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. charm', 'modifier': 1 },
                { 'name': 'Resilient to sleep', 'modifier': 1 },
                { 'name': 'Trance', 'modifier': 0 },
                { 'name': 'Languages: Common + Elvish', 'modifier': +1 },
                { 'name': 'Charisma +', 'modifier': 1 },
                { 'name': 'Superior darkvision 120’', 'modifier': 1 },
                { 'name': 'Disadvantages in sunlight', 'modifier': -2 },
                { 'name': 'Drow magic (cantrip + spells)', 'modifier': 4 },
                { 'name': 'Weapon proficiency: 3 martial', 'modifier': 2 }
            ]
        },
        {
            "race": 'Elf - High',
            'cost': 12,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Dexterity +', 'modifier': 2 },
                { 'name': 'Speed: 30’', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Skill Proficiency: perception', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. charm', 'modifier': 1 },
                { 'name': 'Resilient to sleep', 'modifier': 1 },
                { 'name': 'Trance', 'modifier': 0 },
                { 'name': 'Languages: Common + Elvish', 'modifier': +1 },
                { 'name': 'Intelligence +', 'modifier': 1 },
                { 'name': 'Languages: one choice', 'modifier': 1 },
                { 'name': '1 cantrip', 'modifier': 1 },
                { 'name': 'Weapon proficiency: 3 martial', 'modifier': 2 }
            ]
        },
        {
            "race": 'Elf - Wood',
            'cost': 11,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Dexterity +', 'modifier': 2 },
                { 'name': 'Speed: 35’', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Skill Proficiency: perception', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. charm', 'modifier': 1 },
                { 'name': 'Resilient to sleep', 'modifier': 1 },
                { 'name': 'Trance', 'modifier': 0 },
                { 'name': 'Languages: Common + Elvish', 'modifier': +1 },
                { 'name': 'Wisdom +', 'modifier': 1 },
                { 'name': 'Mask of the Wild’', 'modifier': 1 },
                { 'name': 'Weapon proficiency: 3 martial', 'modifier': 2 }
            ]
        },
        {
            "race": 'Fairy',
            'cost': 4,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Wisdom +', 'modifier': 1 },
                { 'name': 'Charisma +', 'modifier': 2 },
                { 'name': 'AC Bonus', 'modifier': 6 },
                { 'name': 'Combat Mastery (+6 attack rolls)', 'modifier': 6 },
                { 'name': 'Control Environment (Lights)', 'modifier': 1 },
                { 'name': 'Features (Direction Sense, Scentless)', 'modifier': 2 },
                { 'name': 'Flight (90 feet/round)', 'modifier': 6 },
                { 'name': 'Heightened Senses (Smell)', 'modifier': 1 },
                { 'name': 'Language (Common, Elvish, Sylvan)', 'modifier': 2 },
                { 'name': 'Spell-Like Ability (Major Image)', 'modifier': 4 },
                { 'name': 'Unique Attribute (Small, Light, and Unobtrusive)', 'modifier': 3 },
                { 'name': 'Degraded (-8 Strength)', 'modifier': -8 },
                { 'name': 'Limited Damage (-6 Strength Impacts)', 'modifier': -6 },
                { 'name': 'Obstacle (Strength dice rolls)', 'modifier': -4 },
                { 'name': 'Slow (÷8 speed; 4 feet/round)', 'modifier': -3 },
                { 'name': 'Susceptible (+6 Standard damage)', 'modifier': -6 },
                { 'name': 'Unique Defect (Thrown Weapon Distance ÷8)', 'modifier': -3 }
            ],
        },
        {
            "race": 'Gnome - Forest',
            'cost': 4,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Small Size', 'modifier': -5 },
                { 'name': 'Intelligence +', 'modifier': 2 },
                { 'name': 'Speed: 15 feet', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. some magic', 'modifier': 2 },
                { 'name': 'Languages: Common + Gnomish', 'modifier': 1 },
                { 'name': 'Dexterity +', 'modifier': 1 },
                { 'name': 'Minor illusion cantrip', 'modifier': 1 },
                { 'name': 'Languages: small beasts', 'modifier': 1 }
            ],
        },
        {
            "race": 'Gnome - Rock',
            'cost': 4,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Small Size', 'modifier': -5 },
                { 'name': 'Intelligence +', 'modifier': 2 },
                { 'name': 'Speed: 15 feet', 'modifier': 0 },
                { 'name': 'Darkvision 60’', 'modifier': 1 },
                { 'name': 'Advantage on Save vs. some magic', 'modifier': 2 },
                { 'name': 'Languages: Common + Gnomish', 'modifier': 1 },
                { 'name': 'ConsHtuHon +', 'modifier': 1 },
                { 'name': 'Artificer’s Lore', 'modifier': 1 },
                { 'name': 'Tool proficiency: Tinker’s tools', 'modifier': 1 }
            ],
        },
        {
            "race": 'Grey',
            'cost': 12,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Intelligence +', 'modifier': 2 },
                { 'name': 'Features (Ambidexterity, Darkvision 60’, Ultrasonic Communication)', 'modifier': 3 },
                { 'name': 'Heightened Senses (Hearing, Taste)', 'modifier': 2 },
                { 'name': 'Mind Control (Basic, non-aggressive)', 'modifier': 3 },
                { 'name': 'Spell-Like Ability (Cure Wounds)', 'modifier': 2 }
            ],
        },
        {
            "race": 'Half-Dragon',
            'cost': 13,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Strength +', 'modifier': 1 },
                { 'name': 'ConsHtuHon +', 'modifier': 1 },
                { 'name': 'Flight (30 feet/round)', 'modifier': 3 },
                { 'name': 'Immunity – Lesser (Fire)', 'modifier': 3 },
                { 'name': 'Language (Common, Draconic)', 'modifier': 1 },
                { 'name': 'Weapon: Fire Breath (2d6 damage; Continuing -1; Range: 30’ -2; Spreading: 3 targets -2; Save +4)', 'modifier': 4 }
            ]
        },
        {
            "race": 'Half-Elf',
            'cost': 10,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }]
        },
        {
            "race": 'Half-Orc',
            'cost': 8,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }],
        },
        {
            "race": 'Half-Troll',
            'cost': 9,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Wisdom +', 'modifier': 1 },
                { 'name': 'Features (Darkvision 60’)', 'modifier': 1 },
                { 'name': 'Heightened Senses (Smell)', 'modifier': 1 },
                { 'name': 'Language (Common, Draconic, Goblin, Orc)', 'modifier': 3 },
                { 'name': 'Regeneration (4 HP/round)', 'modifier': 4 },
                { 'name': 'ConsHtuHon -', 'modifier': -1 }
            ],
        },
        {
            "race": 'Halfling - Lightfoot',
            'cost': 3,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }],
        },
        {
            "race": 'Halfling - Stout',
            'cost': 5,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }],
        },
        {
            "race": 'Haud',
            'cost': 12,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Intelligence +', 'modifier': 1 },
                { 'name': 'Edge (IniHaHve)', 'modifier': 2 },
                { 'name': 'Extra AcHons (1 Extra AcHon/round)', 'modifier': 4 },
                { 'name': 'Features (Darkvision 60’)', 'modifier': 1 },
                { 'name': 'Heightened Senses (Taste, Vision)', 'modifier': 2 },
                { 'name': 'Immunity – Lesser (Poison)', 'modifier': 2 },
                { 'name': 'Language (Common, Draconic, Goblin)', 'modifier': 2 },
                { 'name': 'Special Movement (Wall-Crawling 2)', 'modifier': 2 },
                { 'name': 'Charisma -', 'modifier': -1 },
                { 'name': 'Bane (Cold)', 'modifier': -2 },
                { 'name': 'Obstacle (Saving Throws vs cold)', 'modifier': -1 }
            ]
        },
        {
            "race": 'Human',
            'cost': 7,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }],
        },
        {
            "race": 'Kodama',
            'cost': 10,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Wisdom +', 'modifier': 1 },
                { 'name': 'AC Bonus', 'modifier': 4 },
                { 'name': 'Change State (Liquid, gaseous, and incorporeal)', 'modifier': 9 },
                { 'name': 'Cognition (Precognition)', 'modifier': 2 },
                { 'name': 'Combat Mastery (+4 attack rolls)', 'modifier': 4 },
                { 'name': 'Language (Common, Sylvan)', 'modifier': 1 },
                { 'name': 'Spell-Like Ability (Banishment)', 'modifier': 5 },
                { 'name': 'Spell-Like Ability (Cure Wounds)', 'modifier': 2 },
                { 'name': 'Unique Attribute (Small, Light, and Unobtrusive)', 'modifier': 2 },
                { 'name': 'Degraded (-4 Strength)', 'modifier': -4 },
                { 'name': 'Limited Damage (-4 Strength Impacts)', 'modifier': -4 },
                { 'name': 'Obstacle (Strength dice rolls)', 'modifier': -4 },
                { 'name': 'Slow (÷4 speed; 8 feet/round)', 'modifier': -2 },
                { 'name': 'Susceptible (+4 Standard damage)', 'modifier': -4 },
                { 'name': 'Unique Defect (Thrown Weapon Distance ÷4)', 'modifier': -2 }
            ]
        },
        {
            "race": 'Nekojin',
            'cost': 8,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Dexterity +', 'modifier': 2 },
                { 'name': 'Edge (IniHaHve)', 'modifier': 2 },
                { 'name': 'Features (Darkvision 60’)', 'modifier': 1 },
                { 'name': 'Heightened Senses (Hearing)', 'modifier': 1 },
                { 'name': 'Mulligan (4 re-rolls/session)', 'modifier': 2 },
                { 'name': 'Special Movement (Cat-Like)', 'modifier': 1 },
                { 'name': 'Easily Distracted (Things that distract cats)', 'modifier': -1 }
            ]
        },
        {
            "race": 'Parasite',
            'cost': 16,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Elasticity (Two limbs stretch 5x; +4 grappling checks)', 'modifier': 4 },
                { 'name': 'Extra AcHons – Lesser (1 Extra AcHon/round; not attacks)', 'modifier': 2 },
                { 'name': 'Immunity (Lightning)', 'modifier': 6 },
                { 'name': 'Massive Damage – Lesser (+1d8 unarmed attacks)', 'modifier': 4 },
                { 'name': 'Weapon: Extending Blades (1d8 slashing damage)', 'modifier': 2 },
                { 'name': 'Weapon: Extending Blades (1d8 slashing damage)', 'modifier': -2 }
            ]
        },
        {
            "race": 'Satyr',
            'cost': 7,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'Constitution +', 'modifier': 1 },
                { 'name': 'Charisma +', 'modifier': 1 },
                { 'name': 'Extra AcHons – Lesser (1 Extra AcHon/round; not attacks)', 'modifier': 2 },
                { 'name': 'Fast (x2 speed; 60 feet/round)', 'modifier': 1 },
                { 'name': 'Jumping (3x normal distance)', 'modifier': 1 },
                { 'name': 'Language (Common, Elvish, Sylvan)', 'modifier': 2 },
                { 'name': 'Easily Distracted (Things that distract children)', 'modifier': -1 }
            ],
        },
        {
            "race": 'Slime',
            'cost': 11,
            'img': '../assets/',
            'race_mods': [
                { 'name': 'ConsHtuHon +', 'modifier': 1 },
                { 'name': 'Charisma +', 'modifier': 2 },
                { 'name': 'AC Bonus', 'modifier': 2 },
                { 'name': 'Elasticity (EnHre body stretches 5x; +10 grappling checks)', 'modifier': 10 },
                { 'name': 'Combat Mastery (+2 attack rolls)', 'modifier': 2 },
                { 'name': 'Language (Common, Undercommon)', 'modifier': 1 },
                { 'name': 'Regeneration (2 HP/round)', 'modifier': 2 },
                { 'name': 'Special Movement (Slithering)', 'modifier': 1 },
                { 'name': 'Unique Attribute (Small, Light, and Unobtrusive)', 'modifier': 1 },
                { 'name': 'Limited Damage (-2 Strength Impacts)', 'modifier': -2 },
                { 'name': 'Obstacle (Strength dice rolls)', 'modifier': -4 },
                { 'name': 'Unique Defect (Leaves Slime Trail)', 'modifier': -1 },
                { 'name': 'Slow (÷2 speed; 15 feet/round)', 'modifier': -1 },
                { 'name': 'Susceptible (+2 Standard damage)', 'modifier': -2 },
                { 'name': 'Unique Defect (Thrown Weapon Distance ÷2)', 'modifier': -1 }
            ]
        },
        {
            "race": 'Tiefling',
            'cost': 12,
            'img': '../assets/',
            'race_mods': [{ 'name': '', 'modifier': 0 }]
        }
    ],
    'attributes': [
        {
            'name': 'Add +1 AC per Rank',
            'rank': 1,
            'value': 5
        },
        {
            'name': 'Add +1 AC per Rank',
            'rank': 2,
            'value': 10
        }
    ],
    'defects': [{
        'name': 'Remove 1 AC per Rank',
        'rank': 1,
        'value': 5
    },
    {
        'name': 'Remove 1 AC per Rank',
        'rank': 2,
        'value': 10
    }]
}

export default defaultData