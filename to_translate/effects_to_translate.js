const allTranslations = 
[
    {
        "heroId": "nordic_warrior",
        "name": "Brand",
        "effects": [
            "Deals 115% damage to all enemies"
        ]
    },
    {
        "heroId": "nordic_female_scout",
        "name": "Sigrunn",
        "effects": [
            "Deals 275% damage to the target"
        ]
    },
    {
        "heroId": "royal_pikeman",
        "name": "Olaf",
        "effects": [
            "All allies get +63% defense for 4 turns"
        ]
    },
    {
        "heroId": "nordic_female_warrior",
        "name": "Ragnhild",
        "effects": [
            "Deals 115% damage to all enemies"
        ]
    },
    {
        "heroId": "dwarven_scout",
        "name": "Toril",
        "effects": [
            "All allies get +48% attack for 4 turns"
        ]
    },
    {
        "heroId": "astral_demon_agharoth",
        "name": "Agharoth",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 6 turns.",
            "All enemies get -24% attack for 6 turns.",
            "All enemies get -24% defense for 6 turns.",
            "All enemies get -24% mana generation for 6 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "magic_carpet_bertha",
        "name": "Bertha",
        "effects": [
            "All allies regenerate 425 HP over 5 turns.",
            "Each defeated ally has a 35% chance to get revived with 25% HP."
        ]
    },
    {
        "heroId": "tales2_bryggvir",
        "name": "Bryggvir",
        "effects": [
            "Attacks the target and nearby enemies with Frostfall Strike, dealing up to 840 damage. Deals 20% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "Increases the mana of the caster and nearby allies by 10%."
        ]
    },
    {
        "heroId": "vegetable_caleb",
        "name": "Caleb",
        "effects": [
            "Deals 320% damage to the target.",
            "Deals additional 5% damage for each Fiend or Mega Fiend owned by the enemies, up to 370% damage in total.",
            "The target get -25% attack for 4 turns."
        ]
    },
    {
        "heroId": "easter_chick_jr",
        "name": "Chick Jr.",
        "effects": [
            "Deals 180% damage to all enemies",
            "The caster gets -20% attack for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "monster_hunter_dawn",
        "name": "Dawn",
        "effects": [
            "Summons a Hunting Owl Minion for the caster and nearby allies with 10% HP and 20% attack inherited from the caster.",
            "Each hit from a Hunting Owl Minion reduces the mana of the target by -6%.",
            "The caster and nearby allies get +54% defense against Special Skills for 3 turns.",
            "Cleanses status ailments from the caster and nearby allies."
        ]
    },
    {
        "heroId": "christmas_frosty",
        "name": "Frosty",
        "effects": [
            "Recovers 32% health for all allies.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "s2_croc_man",
        "name": "Gato",
        "effects": [
            "Deals 300% damage to the target.",
            "The caster and nearby allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "nordic_chained_werewolf",
        "name": "Graymane",
        "effects": [
            "Deals 225% damage to the target.",
            "Heals the caster for 50% of damage dealt."
        ]
    },
    {
        "heroId": "nordic_chained_werewolf_costume_raccoon",
        "name": "Graymane C1",
        "effects": [
            "Deals 235% damage to the target.",
            "The caster is immune to new status ailments for 3 turns.  This effect can't be dispelled.",
            "The caster gets +50% attack for 3 turns."
        ]
    },
    {
        "heroId": "nordic_chained_werewolf_costume_cute",
        "name": "Graymane Toon",
        "effects": [
            "Deals 255% damage to the target.",
            "Heals the caster for 45% of damage dealt.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_chained_werewolf_costume_glass",
        "name": "Graymane Glass",
        "effects": [
            "Deals 265% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Heals the caster for 48% of damage dealt."
        ]
    },
    {
        "heroId": "guardian_lemur",
        "name": "Guardian Lemur",
        "effects": [
            "Recovers 32% health for all allies.",
            "All allies get +94% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "royal_knight",
        "name": "Gunnar",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +63% defense for 5 turns"
        ]
    },
    {
        "heroId": "royal_knight_costume_blacksmith",
        "name": "Gunnar C1",
        "effects": [
            "All enemies become Soul Connected for 5 turns. Soul Connected enemies share received damage.",
            "All enemies get -44% defense for 5 turns."
        ]
    },
    {
        "heroId": "royal_knight_costume_cute",
        "name": "Gunnar Toon",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage. This status effect is undispellable and lasts 2 turns longer on Ice characters.",
            "All allies get +51% defense for 5 turns. This status effect is undispellable and lasts 2 turns longer on Ice characters."
        ]
    },
    {
        "heroId": "royal_knight_costume_glass",
        "name": "Gunnar Glass",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +59% defense for 5 turns.",
            "All Ice allies reflect status ailments and negative stacks for 2 turns."
        ]
    },
    {
        "heroId": "s4_helo",
        "name": "Helo",
        "effects": [
            "Recovers 32% health for all allies.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s4_helo_costume_baker",
        "name": "Helo C1",
        "effects": [
            "All allies regenerate 411 HP over 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s5_jarif",
        "name": "Jarif",
        "effects": [
            "Deals 335% damage to the target.",
            "The target is immune to new status effect buffs for 3 turns, and receives 70 damage for each attempted buff."
        ]
    },
    {
        "heroId": "s5_jarif_costume_curator",
        "name": "Jarif C1",
        "effects": [
            "Deals 300% damage to the target.",
            "The target is immune to new status effect buffs for 3 turns, and receives 150 damage for each attempted buff."
        ]
    },
    {
        "heroId": "s3_jarvur",
        "name": "Jarvur",
        "effects": [
            "Deals 285% damage to the target.",
            "Stack (Max: 10): The caster gets +10% attack."
        ]
    },
    {
        "heroId": "kalevala_joukahainen",
        "name": "Joukahainen",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 165% damage to all enemies.",
            "All enemies are immune to new status effect buffs for 4 turns. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_joukahainen_costume_frozen",
        "name": "Joukahainen C1",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 180% damage to all enemies.",
            "All enemies are immune to new status effect buffs for 4 turns. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "dwarven_smasher",
        "name": "Karil",
        "effects": [
            "Deals 260% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "dwarven_smasher_costume_smith",
        "name": "Karil C1",
        "effects": [
            "Deals 240% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 60 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "dwarven_smasher_costume_cute",
        "name": "Karil Toon",
        "effects": [
            "Deals 290% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "dwarven_smasher_costume_glass",
        "name": "Karil Glass",
        "effects": [
            "Deals 300% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "s3_nordri",
        "name": "Nordri",
        "effects": [
            "Deals 245% damage to the target and minor damage to nearby enemies",
            "The target and nearby enemies get -54% defense against Ice for 4 turns"
        ]
    },
    {
        "heroId": "s3_nordri_costume_explorer",
        "name": "Nordri C1",
        "effects": [
            "Deals 230% damage to the target and nearby enemies.",
            "All enemies get -54% defense against Ice for 3 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "musketeer_planchet",
        "name": "Planchet",
        "effects": [
            "Destroys all Minions from the target.",
            "Deals 385% damage to the target.",
            "The caster regenerates 243 HP over 3 turns."
        ]
    },
    {
        "heroId": "musketeer_planchet_costume_adventurer",
        "name": "Planchet C1",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 395% damage to the target.",
            "The caster regenerates 315 boosted health over 3 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "gargoyle_soroca",
        "name": "Soroca",
        "effects": [
            "Deals 235% damage to the target.",
            "Deals additional 10% damage per each Ice shield on the board, up to 335%  damage in total."
        ]
    },
    {
        "heroId": "ballerina_swan_maiden",
        "name": "Swan Maiden",
        "effects": [
            "The caster regenerates 402 HP over 3 turns.",
            "The caster gets +30% chance to dodge Special Skills that deal damage for 3 turns.",
            "Casts Dance of the Little Swan to all allies but caster for 3 turns. All existing status effects will be removed when this effect is added.",
            "Dance of the Little Swan",
            "* +30% chance to dodge attacks and Special Skills.",
            "* 35% chance to deal 240% damage to a random enemy after any subsequent allied Special Skill is cast.",
            "* Gives immunity to new status effects. New dance status effects will replace this effect.",
            "* This effect cannot be dispelled. The effect is removed when the caster dies."
        ]
    },
    {
        "heroId": "nordic_mage",
        "name": "Ulmer",
        "effects": [
            "Deals 116% damage to all enemies.",
            "All enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_mage_costume_hermit",
        "name": "Ulmer C1",
        "effects": [
            "Deals 145% damage to all enemies.",
            "All allies get +48% attack for 6 turns."
        ]
    },
    {
        "heroId": "nordic_mage_costume_cute",
        "name": "Ulmer Toon",
        "effects": [
            "Deals 146% damage to all enemies.",
            "All enemies get -24% defense for 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_mage_costume_glass",
        "name": "Ulmer Glass",
        "effects": [
            "Deals 156% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -30% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_swordman",
        "name": "Valen",
        "effects": [
            "Deals 300% damage to the target.",
            "The target gets -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_swordman_costume_climber",
        "name": "Valen C1",
        "effects": [
            "Deals 335% damage to the target.",
            "The caster getts +54% attack for 6 turns."
        ]
    },
    {
        "heroId": "nordic_swordman_costume_cute",
        "name": "Valen Toon",
        "effects": [
            "Deals 330% damage to the target.",
            "The target gets -28% defense for 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_swordman_costume_glass",
        "name": "Valen Glass",
        "effects": [
            "Deals 340% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target gets -30% defense for 6 turns."
        ]
    },
    {
        "heroId": "styx_virgil",
        "name": "Virgil",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Recovers 15% health for all allies.",
            "* All allies get +40% defense against Nature for 2 turns.",
            "2x Mana Charge:",
            "* Recovers 25% health for all allies.",
            "* All allies get +54% defense against Special Skills for 3 turns.",
            "3x Mana Charge:",
            "* Recovers 45% health for all allies.",
            "* All allies get +94% defense against Nature for 2 turns.",
            "* All allies get +74% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "pirate_vodnik",
        "name": "Vodnik",
        "effects": [
            "Deals 280% damage to the target",
            "The more mana the enemies have, the more damage they will receive, up to 400%."
        ]
    },
    {
        "heroId": "kingdom_yao",
        "name": "Yao",
        "effects": [
            "Deals 215% damage to the target and nearby enemies.",
            "Summons a Wei Soldier Minion with 20% HP and 25% attack inherited from the caster.",
            "Each hit from a Wei Soldier Minion dispells all dispellable buffs from the target."
        ]
    },
    {
        "heroId": "s2_chameleon_mage",
        "name": "Agwe",
        "effects": [
            "Deals 190% damage to all enemies.",
            "All allies get +54% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "s2_chameleon_mage_costume_alchemist",
        "name": "Agwe C1",
        "effects": [
            "Deals 185% damage to all enemies.",
            "All Nature enemies receive 536 Burn damage over 4 turns."
        ]
    },
    {
        "heroId": "tales1_aqualith",
        "name": "Aqualith",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 2 turns.",
            "* Deals 64 - 222 damage on all enemies after 2 turns, based on the damage the caster had taken while this effect was active. Maximum effect is achieved upon taking 50% of max health in damage.",
            "2nd:",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "* Deals 124 - 351 damage on all enemies after 3 turns, based on the damage the caster had taken while this effect was active. Maximum effect is achieved upon taking 50% of max health in damage."
        ]
    },
    {
        "heroId": "tales1_aqualith_costume_purple",
        "name": "Aqualith C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 2 turns.",
            "* Deals 56 - 214 damage on all enemies after 2 turns, based on the damage the caster had taken while this effect was active. Maximum effect is achieved upon taking 50% of max health in damage.",
            "2nd:",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "* Deals 165 - 392 damage on all enemies after 3 turns, based on the damage the caster had taken while this effect was active. Maximum effect is achieved upon taking 50% of max health in damage."
        ]
    },
    {
        "heroId": "s5_azmia",
        "name": "Azmia",
        "effects": [
            "Recovers 15% health for all allies.",
            "The caster and nearby allies counterattack with 100% of the damage received for 4 turns. The damage of the counterattack increases by +5% with each counterattack, maxing out at 130%."
        ]
    },
    {
        "heroId": "s5_azmia_costume_dancing",
        "name": "Azmia C1",
        "effects": [
            "Recovers 10% health for all allies.",
            "The caster and nearby allies counterattack with 110% of the damage received for 4 turns. The damage of the counterattack increases by +5% with each counterattack, maxing out at 135%."
        ]
    },
    {
        "heroId": "construct_bonechill",
        "name": "Bonechill",
        "effects": [
            "Deals 240% damage to the target and nearby enemies.",
            "The target and nearby enemies get -34% defense against Special Skills for 3 turns.",
            "The caster and nearby allies get +86% defense against Nature for 3 turns."
        ]
    },
    {
        "heroId": "dwarven_guard",
        "name": "Boril",
        "effects": [
            "The caster and nearby allies counterattack with 125% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "dwarven_guard_costume_ram",
        "name": "Boril C1",
        "effects": [
            "All allies counterattack with 60% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "dwarven_guard_costume_tavern",
        "name": "Boril C2",
        "effects": [
            "All allies counterattacks with 80% of the damage received for 4 turns. The counterattack damage increases by 20% each turn, up to +140%."
        ]
    },
    {
        "heroId": "dwarven_guard_costume_cute",
        "name": "Boril Toon",
        "effects": [
            "The caster and nearby allies counterattack with 120% of the damage received for 5 turns. This status effect is undispellable and lasts 2 turns longer on Ice characters."
        ]
    },
    {
        "heroId": "dwarven_guard_costume_glass",
        "name": "Boril Glass",
        "effects": [
            "The caster and nearby allies counterattack with 122% of the damage received for 5 turns.",
            "All Ice allies reflect status ailments and negative stacks for 2 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "beowulf_breca",
        "name": "Breca",
        "effects": [
            "Deals 220% damage to all enemies.",
            "All allies get +35% defense for 5 turns. This effect duration is reset if the status effect owner is hit with direct damage from Special Skill.",
            "All allies recover 500 HP over 5 turns. This effect duration is reset if the status effect owner is hit with direct damage from Special Skill.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "wonderland_captain",
        "name": "Captain of Diamonds",
        "effects": [
            "Destroys all minions from the target.",
            "Deals 275% damage to hit targets.",
            "If the target had Minions, attacks another enemy who has Minions. If none of the enemies have Minions, attacks a random enemy. Each enemy can only be attacked once."
        ]
    },
    {
        "heroId": "slime_choozen",
        "name": "Choozen",
        "effects": [
            "Boosts health of the caster and nearby allies by 450. Boosted health can exceed max HP.",
            "The caster and nearby allies get Sticky Surface for 3 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)"
        ]
    },
    {
        "heroId": "tales2_dain",
        "name": "Dain",
        "effects": [
            "The caster and nearby allies get a Frostfall Ward for 3 turns, that reduces incoming Special Skill damage up to -500. Reduces damage by additional 25% when the attacker is of Fire element.",
            "The caster and nearby allies get +120% normal attack for 3 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maxiumum of +200% increased attack while this effect is active."
        ]
    },
    {
        "heroId": "masquerade_fosco",
        "name": "Fosco",
        "effects": [
            "Destroys all Minions from all enemies.",
            "Dispels buffs from all enemies.",
            "All allies regenerate 540 HP over 3 turns."
        ]
    },
    {
        "heroId": "halloween_frank",
        "name": "Frank",
        "effects": [
            "Deals 200% damage to all enemies.",
            "The damage is increased by 45% per dead enemy.",
            "All enemies get -44% defense for 4 turns."
        ]
    },
    {
        "heroId": "halloween_frank_costume_mafia",
        "name": "Frank C1",
        "effects": [
            "Deals 170% damage to all enemies",
            "The damage is increased by 45% for each dead enemy.",
            "Stack (Max:10): All enemies receive 20 Frost damage per each killed enemy or enemy Minion at the end of each turn.",
            "Stack (Max: 10): All enemies get -4% mana generation per each killed enemy or enemy Minion."
        ]
    },
    {
        "heroId": "bard_garyas",
        "name": "Garyas",
        "effects": [
            "Deals 330% damage to the target.",
            "Alter the power of all Ice shields on the board. When an attacking Hero casts the special, the shields become enchance and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "garrison_greg",
        "name": "Greg",
        "effects": [
            "Deals 100% damage to all enemies.",
            "Summons a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion receives 267 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior",
        "name": "Grimm",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_corrupted",
        "name": "Grimm C1",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "The caster and nearby allies get +50% attack for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_messenger",
        "name": "Grimm C2",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "The caster and nearby allies' Special Skill deal an additional +40% damage for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_cute",
        "name": "Grimm Toon",
        "effects": [
            "Deals 325% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -28% defense for 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_glass",
        "name": "Grimm Glass",
        "effects": [
            "Deals 335% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target and nearby enemies get -30% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_stylish",
        "name": "Grimm Stylish",
        "effects": [
            "Deals 345% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage to enemies with less than 50% health remaining.",
            "The target and nearby enemies get -32% defense for 6 turns."
        ]
    },
    {
        "heroId": "gargoyle_grumbl",
        "name": "Grumbl",
        "effects": [
            "All allies except the caster receive Softskin. (The next time they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled.)",
            "All allies recover 510 HP over 3 turns. This effect duration is reset if the status effect owner is hit with direct damage from a Special Skill.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s3_jott",
        "name": "Jott",
        "effects": [
            "Deals 200% damage to all enemies.",
            "Alters the power of all Ice shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster",
        "name": "Kiril",
        "effects": [
            "Recovers 28% health for all allies.",
            "All allies get +30% attack for 3 turns.",
            "All allies get +30% defense for 3 turns."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_guitarist",
        "name": "Kiril C1",
        "effects": [
            "Recovers 28% health for all allies.",
            "All enemies get -34% attack for 3 turns.",
            "All enemies get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_wood_carver",
        "name": "Kiril C2",
        "effects": [
            "Boosts health of all allies by 400. Boosted health can exceed max HP.",
            "All allies get +30% defense for 3 turns.",
            "All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_cute",
        "name": "Kiril Toon",
        "effects": [
            "Recovers 31% health for all allies.",
            "All allies get +26% attack for 3 turns. This status effect is undispellable and lasts 2 turns longer on Ice characters.",
            "All allies get +26% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Ice characters."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_glass",
        "name": "Kiril Glass",
        "effects": [
            "Recovers 32% health for all allies.",
            "All allies get +28% attack for 3 turns.",
            "All allies get +28% defense for 3 turns.",
            "All Ice allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_stylish",
        "name": "Kiril Stylish",
        "effects": [
            "Recovers 40% health for the ally with the lowest remaining HP. All other allies recover 33% health.",
            "All allies get +29% attack for 3 turns.",
            "All allies get +29% defense for 3 turns."
        ]
    },
    {
        "heroId": "monster_hunter_knuckles",
        "name": "Knuckles",
        "effects": [
            "All allies get +30% defense, and a further 3% increase every time they are hit during 4 turns, up to +54% defense.",
            "All allies reflect status ailments and negative stacks for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Stack (Max: 10): The caster gets +20% attack against the weaker element."
        ]
    },
    {
        "heroId": "forsaken_lamentia",
        "name": "Lamentia",
        "effects": [
            "Deals 280% damage to the target and nearby enemies and inflicts 15 Insanity on them.",
            "The target and nearby enemies receive 388 Curse damage over 4 turns, starting low and increasing every turn.",
            "Inflicts 55 Insanity to the caster."
        ]
    },
    {
        "heroId": "elemental_linus",
        "name": "Linus",
        "effects": [
            "Deals 315% damage to the target.",
            "If there are 6 or more Ice shields on the board, damage is dealt to the target and nearby enemies.",
            "If there are 12 or more Ice shields on the board, damage is dealt to all enemies."
        ]
    },
    {
        "heroId": "s3_mireweave",
        "name": "Mireweave",
        "effects": [
            "Deals 150% damage to the target and nearby enemies.",
            "Stack (Max: 10): The caster gets +10% attack."
        ]
    },
    {
        "heroId": "owl_olbec",
        "name": "Olbec",
        "effects": [
            "Attacks the target with Moonrise Strike, dealing up to 1020 damage. Deals 30% more damage if the target is Holy. This Special Skill never misses its targets.",
            "Reduces the mana of the target by 10%."
        ]
    },
    {
        "heroId": "ninja_osamu",
        "name": "Osamu",
        "effects": [
            "1x Mana Charge",
            "* Deals 350% damage to the target.",
            "* The target gets -35% defense for 2 turns.",
            "2x Mana Charge",
            "* Deals 375% damage to the target.",
            "* The target gets -40% defense for 4 turns.",
            "3x Mana Charge",
            "* Deals 400% damage to the target.",
            "* If the attack defeats the target, the caster gains 100% mana.",
            "* The target gets -45% defense for 6 turns."
        ]
    },
    {
        "heroId": "mahayoddha_rafeeq",
        "name": "Rafeeq",
        "effects": [
            "Deals 300% damage to the target.",
            "Growth Boon: Deals 1x extra damage for each point of modified attack. (Extra damage is based on the modified attack on caster, when damage is dealt. Up to maximum 300 additional extra damage. Status effects affecting damage dealt do affect the extra damage. Defense stats does not affect the extra damage. Status effect affecting attack stat do not affect the extra damage.)",
            "The target is immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "villain_sanngrior",
        "name": "Sanngrior",
        "effects": [
            "Boosts health of the caster and nearby allies by 650. Boosted health can exceed max HP.",
            "The caster and nearby allies get +94% defence against Nature for 3 turns."
        ]
    },
    {
        "heroId": "ninja_sapphire",
        "name": "Sapphire",
        "effects": [
            "1x Mana Charge",
            "* Deals 225% damage to the target.",
            "* The attack has a 35% chance to bypass defensive buffs. (This includes counter attack.)",
            "2x Mana Charge",
            "* Deals 250% damage to the target and nearby enemies.",
            "* The attack has a 60% chance to bypass defensive buffs. (This includes counter attack.)",
            "3x Mana Charge",
            "* Deals 290% damage to all enemies.",
            "* The attack has a 85% chance to bypass defensive buffs. (This includes counter attack.)"
        ]
    },
    {
        "heroId": "royal_female_knight",
        "name": "Sonya",
        "effects": [
            "Deals 345% damage to the target.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "royal_female_knight_costume_winter",
        "name": "Sonya C1",
        "effects": [
            "Deals 345% damage to the target.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "royal_female_knight_costume_prospector",
        "name": "Sonya C2",
        "effects": [
            "Deals 345% damage to the target.",
            "All enemies are immune to new status effect buffs for 2 turns."
        ]
    },
    {
        "heroId": "royal_female_knight_costume_cute",
        "name": "Sonya Toon",
        "effects": [
            "Deals 355% damage to the target.",
            "Deals extra damage against Fire.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "royal_female_knight_costume_glass",
        "name": "Sonya Glass",
        "effects": [
            "Deals 365% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "s2_triton",
        "name": "Triton",
        "effects": [
            "Deals 335% damage to the target.",
            "All allies get +39% increase for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "s2_triton_costume_champion",
        "name": "Triton C1",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "All allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "vampire_queen",
        "name": "Valeria",
        "effects": [
            "Deals 235% damage to the target.",
            "The target receives 150 Surge Bleed damage over 5 turns. (If a target already has this effect, the duration will be refreshed and the damage will be increased by 220, up to 580 damage in total.)",
            "The caster steals 61% of any healing applied to the target for 3 turns."
        ]
    },
    {
        "heroId": "kingdom_xiahou_dun",
        "name": "Xiahou Dun",
        "effects": [
            "Deals 355% damage to the target.",
            "Summons a Wei Soldier Minion for the caster and nearby allies with 20% HP and 25% attack inherited from the caster.",
            "Each hit from a Wei Soldier Minion dispells all dispellable buffs from the target."
        ]
    },
    {
        "heroId": "s4_zila_lei",
        "name": "Zila Lei",
        "effects": [
            "Deals 185% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "The enemies on the edges of the enemy formation get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "s4_zila_lei_costume_dancer",
        "name": "Zila Lei C1",
        "effects": [
            "Deals 215% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "The enemies on the edges of the enemy formation get -30% defence for 3 turns."
        ]
    },
    {
        "heroId": "monster_hunter_adalinda",
        "name": "Adalinda",
        "effects": [
            "Deals 395% damage to the target and nearby enemies.",
            "Summons a Bone Trap Fiend for the target and nearby enemies. The Fiend damages the enemy with 45% attack every turn. The damage increases by 8% each turn, up to a maximum of 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health.",
            "The target and nearby enemies get -56% defense for 4 turns."
        ]
    },
    {
        "heroId": "ice_god_october",
        "name": "Aegir",
        "effects": [
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All allies get +40% defense for 4 turns.",
            "All allies heal 100% of dealt normal damage for 4 turns.",
            "Element Link recovers 4% health for all Ice allies for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "ice_god_october_costume_farmer",
        "name": "Aegir C1",
        "effects": [
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All allies get +35% defense, and a further 5% increase every time they are hit during 4 turns up to +60%.",
            "All allies regenerate 732 HP over 4 turns.",
            "Element Link recovers 4% health for all Ice allies for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "mimic_aether_blue",
        "name": "Aether Mimic Ice",
        "effects": [
            "Deals 600% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "Boosts all allies' health by 30% of damage dealt.",
            "The Mimic chest closes for 2 turns."
        ]
    },
    {
        "heroId": "kalevala_aino",
        "name": "Aino",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Recovers 40% health for all allies.",
            "All enemies get -24% mana generation for 4 turns. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_aino_costume_water_maiden",
        "name": "Aino C1",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Recovers 45% health for all allies.",
            "All enemies get -20% mana generation for 4 turns. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "ice_god_eskimo",
        "name": "Alasie",
        "effects": [
            "Deals 542% damage to the target.",
            "The target and nearby enemies get -24% mana generation for 3 turns. This effect can't be cleansed.",
            "Elemental Link gives all Ice allies +5% attack and +5% defense for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "ice_god_eskimo_costume_champion",
        "name": "Alasie C1",
        "effects": [
            "Deals 496% damage to the target and minor damage to nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 10%.",
            "The target and nearby enemies get -24% mana generation for 3 turns.",
            "Element Link gives all Ice  allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ice_god_alexandrine",
        "name": "Alexandrine",
        "effects": [
            "Recovers 26% health for all allies.",
            "Recovers additional 3% health per each Ice shield on the board, up to 50% health in total.",
            "Alters the critical chance or accuracy of all Ice shields on the board. When attacking Hero casts the special, the shield becomes enhanced with +54% critical chance. When a defending Hero casts the special, he shields become weakened with -47% accuracy.",
            "Element Link gives +10% increase for any healing received for all Ice allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "wonderland_alice",
        "name": "Alice",
        "effects": [
            "Deals 430% damage to the target.",
            "Target gets -44% attack for 3 turns. The effect duration is reset if the target is healed. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "styx_amphitrite",
        "name": "Amphitrite",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 200% damage to all enemies.",
            "* All enemies get -25% decrease of any healing received for 3 turns.",
            "2x Mana Charge:",
            "* Deals 315% damage to all enemies.",
            "* Summons a Styx Spirit Fiend for all enemies. The Fiend damages its target with 40% attack every turn.",
            "* The Styx Spirit Fiend absorbs healing. It disappears after absorbing a healing amount equal to 25% if its target's max health.",
            "3x Mana Charge:",
            "* Deals 365% damage to all enemies.",
            "* Summons a Styx Spirit Fiend for all enemies. The Fiend damages its target with 40% attack every turn.",
            "* The Styx Spirit Fiend absorbs healing. It disappears after absorbing a healing amount equal to 25% if its target's max health.",
            "* All enemies get -75% decrease of any healing received for 4 turns."
        ]
    },
    {
        "heroId": "astral_demon_anatemah",
        "name": "Anatemah",
        "effects": [
            "Deals 400% damage to 5 random enemies.",
            "Hit enemies become afflicted with Astral Orb.",
            "While afflicted with the Astral Orb the Owner can't gain new Buffs.",
            "Astral Orbs explode in 3 turns dealing 450 damage to their owner.",
            "If the Astral Orb is cleansed, the owner receives Resonance for 3 turns. Each turn, Resonance deals 769 damage to the afflicted enemies and 384 damage to nearby enemies. (If an Astal Orb is replaced by a new Astral Orb, it explodes. This effect can happen up to 2 times per turn.)"
        ]
    },
    {
        "heroId": "tales2_andvari",
        "name": "Andvari",
        "effects": [
            "Destroys all Minions from all enemies and damages all Mega Minions.",
            "Destroys all Fiends from all allies. This effect damages Mega Fiends.",
            "All allies get a Firestorm Ward for 4 turns, that reduces incoming Special Skill damage by up to -1300. Reduces damage by additional 30% when the attacker is of the Nature element.",
            "All allies get +40% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "tales2_andvari_costume_c1",
        "name": "Andvari C1",
        "effects": [
            "Destroys all Minions from all enemies and damages Mega Minions.",
            "Destroys all Fiends from all allies and damages all Mega Fiends.",
            "All enemies resist new Minions for 4 turns.",
            "All allies are immune to new Fiends for 4 turns.",
            "All allies get a Firestorm Ward for 4 turns, that reduces incoming Special Skill damage by up to -1450. Reduces damage by additional 30% when the attacker is of the Nature element."
        ]
    },
    {
        "heroId": "elemental_anzia",
        "name": "Anzia",
        "effects": [
            "All allies counterattack with 75% of the damage received, and a further 7% increase per each Ice shield on the board for 5 turns, up to 159% damage in total.",
            "All Ice allies regenerate a moderate amount of mana for each counterattack for 5 turns. This effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "elemental_anzia_costume_jailer",
        "name": "Anzia C1",
        "effects": [
            "All allies counterattack with 70% of the damage received, and a further 8% increase per each Ice shield on the board for 5 turns, up to 166% damage in total.",
            "All Ice allies regenerate a moderate amount of mana for each counterattack for 5 turns. The effect gets diminished for consecutive activations during the same turn.",
            "All allies reduce all received damage by 20% for 5 turns."
        ]
    },
    {
        "heroId": "ice_god_areax",
        "name": "Areax",
        "effects": [
            "Deals 440% damage to the target.",
            "The attack chains through all enemies who are adjacent to any hit enemy.",
            "The target receive 374 Frost damage over 2 turns.",
            "Element Link gives +10% mana generation for all Ice allies for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "s2_ariel",
        "name": "Ariel",
        "effects": [
            "Recovers 40% health for all allies.",
            "All allies get +24% mana generation for 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s2_ariel_costume_enchanter",
        "name": "Ariel C1",
        "effects": [
            "Boosts health of all allies by 520. Boosted health can exceed max HP.",
            "All allies regenerate a moderate amount of mana over 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "castle_bear_armel",
        "name": "Armel",
        "effects": [
            "Dispels buff from all enemies.",
            "Reduces max health of all enemies by 400. This effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 400.)",
            "All enemies receive 459 Frost damage over 3 turns."
        ]
    },
    {
        "heroId": "mimic_ascension_item_blue",
        "name": "Ascension Mimic Ice",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target and nearby enemies receive 668 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "faun_ascian",
        "name": "Ascian",
        "effects": [
            "Deals 270% damage to all enemies.",
            "Enhanced Defense Ailment: All enemies get -50% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill once.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, reduces the enemy's mana by -15%.",
            "All allies gain 15% mana after 2 turns or immediately if the effect is removed before the duration ends."
        ]
    },
    {
        "heroId": "ice_god_athena",
        "name": "Athena",
        "effects": [
            "Deals 365% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -41% defense and a further -4% decrease every time they are hit for 4 turns.",
            "Deals extra damage against Fire.",
            "Element Link gives all Ice  allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ice_god_athena_costume_wargoddess",
        "name": "Athena C1",
        "effects": [
            "Deals 350% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -41% defense, and a further -4% decrease every time that they are hit for 3 turns, down to -65% defense.",
            "All Fire enemies get -34% defense against Ice for 3 turns.",
            "Element Link gives all Ice  allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "tales1_atlanteia",
        "name": "Atlanteia",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* All enemies receive Corrosive Frost for 4 turns. Corrosive Frost deals 211 Frost damage and lowers the target's attack by -8% each turn.",
            "* The caster steals 28% of generated mana from all enemies over 4 turns. This effect can't be cleansed, but it gets removed if the caster is defeated.",
            "2nd:",
            "* All enemies receive Corrosive Frost for 4 turns. Corrosive Frost deals 275 Frost damage and lowers the target's attack by -13% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The caster steals 28% of generated mana from all enemies over 4 turns. This effect can't be cleansed, but it gets removed if the caster is defeated."
        ]
    },
    {
        "heroId": "tales1_atlanteia_costume_siren",
        "name": "Atlanteia C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* All enemies receive Corrosive Frost for 4 turns. The Corrosive Frost deals 258 Frost damage and lowers the target's attack by -7% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The caster steals 27% of generated mana from all enemies over 4 turns. This effect can't be cleansed, but it gets removed if the caster is defeated.",
            "2nd:",
            "* All enemies receive Corrosive Frost for 4 turns. The Corrosive Frost deals 371 Frost damage and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The caster steals 30% of generated mana from all enemies over 4 turns. This effect can't be cleansed, but it gets removed if the caster is defeated."
        ]
    },
    {
        "heroId": "ninja_azurite",
        "name": "Azurite",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana",
            "1x Mana Charge",
            "* Deals 250% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -35% accuracy for 2 turns. (Chance to miss also applies to offensive Special Skills.)",
            "* The target and nearby enemies deal 320 damage to a random ally if they miss Special Skill during 2 turns.",
            "2x Mana Charge",
            "* Deals 325% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -40% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills.)",
            "* The target and nearby enemies deal 390 damage to a random ally if they miss Special Skill during 3 turns.",
            "3x Mana Charge",
            "* Deals 400% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -54% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)",
            "* The target and nearby enemies deal 470 damage to a random ally if they miss Special Skill during 4 turns."
        ]
    },
    {
        "heroId": "ice_god_balur",
        "name": "Balur",
        "effects": [
            "Deals 580% damage to the target.",
            "The target receives 612 bleed damage over 3 turns.",
            "Element Link gives all ice allies immunity to new Fiends for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "magic_carpet_bart",
        "name": "Bart",
        "effects": [
            "Deals 360% damage to the target and minor damage to nearby enemies.",
            "Reduces the max health of the target and nearby enemies by 500. The effect is stronger against targets with boosted health.",
            "The target and nearby enemies get -45% accuracy for 2 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "s5_bennu",
        "name": "Bennu",
        "effects": [
            "The caster and nearby allies counterattack with 100% of the damage received for 5 turns. The damage of the counterattack increases by +5% with each counterattack, maxing out at 130%.",
            "The caster and nearby allies reduce all received damage by -50% for 5 turns."
        ]
    },
    {
        "heroId": "s5_bennu_costume_heron",
        "name": "Bennu C1",
        "effects": [
            "The caster and nearby allies counterattack with 100% of the damage received for 5 turns. The damage of the counterattack increases by +10% with each counterattack, maxing out at 160%.",
            "The caster and nearby allies reduce all received damage by -30% for 5 turns."
        ]
    },
    {
        "heroId": "bard_bhaltair",
        "name": "Bhaltair",
        "effects": [
            "Deals 350% damage to all enemies.",
            "Heals all allies for 30% of the damage dealt.",
            "All enemies receive Minion Wound for 5 turns.",
            "Minion Wound: Target's minions health is reduced by 50% and mega minions health is reduced by 25% each turn. (Reduction is applied to owned minions and to any received minions while the effect is active. Reduction only affects minions' current health.)",
            "All allies get +40% mana generation for 5 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "circus_bobo",
        "name": "Bobo",
        "effects": [
            "Deals 320% damage to all enemies.",
            "The enemy with the highest base defense gets -60% defense for 4 turns. This effect can't be cleansed.",
            "The enemy with the highest base attack gets -60% attack for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "slime_boboosang",
        "name": "Boboo Sang",
        "effects": [
            "Deals 500% damage to all enemies.",
            "The caster steals generated mana of all enemies over 5 turns starting low and increasing every turn until on the last turn all generated mana is stolen. This effect can't be cleansed, but it gets removed if the caster is defeated.",
            "All allies get Sticky surface for 5 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)"
        ]
    },
    {
        "heroId": "mighty_pet_bubbles",
        "name": "Bubbles",
        "effects": [
            "Deals 480% damage to the target.",
            "The target gets -44% defense for 4 turns.",
            "The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of the turn during 4 turns. When this effect is triggered, it shifts to the hit ally, and the duration is refreshed."
        ]
    },
    {
        "heroId": "shadow_burton",
        "name": "Burton",
        "effects": [
            "Deals 400% damage to the target and nearby enemies and inflicts 25 Insanity on them.",
            "The caster activates Stoneskin that drops all damage dealt to the caster to 1 but is removed after 5 hits. This affects can't be dispelled.",
            "Casting this Special Skill inflicts 40 Insanity to the caster."
        ]
    },
    {
        "heroId": "garrison_caelen",
        "name": "Caelen",
        "effects": [
            "Summons a Shield Guard Mega Minion with 65% HP and 180% attack inherited from the caster.",
            "The Shield Guard Mega Minion cleanses the latest cleansable status ailment from all allies each turn. This does not trigger secondary effects.",
            "All enemies fall asleep.",
            "While asleep, the target can't attack or gain mana.",
            "All damage dealt to the sleeping target is increased by +70%.",
            "The sleeping target is woken once it take damage. This excludes damage from Minions and Fiends."
        ]
    },
    {
        "heroId": "magic_camilla",
        "name": "Camilla",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Boosts health of all allies by 400. Boosted health can exceed max HP.",
            "* All allies get +40% defense against Special Skill for 3 turns.",
            "2x Mana Charge:",
            "* Reduce max health of all enemies by 800. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 800.",
            "* All enemies get -54% defense against Special Skill for 5 turns."
        ]
    },
    {
        "heroId": "magic_camilla_costume_flower",
        "name": "Camilla C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Boosts health of all allies by 450. Boosted health can exceed max HP.",
            "* All allies get +45% defense against Special Skill for 3 turns.",
            "2x Mana Charge:",
            "* Reduce max health of all enemies by 900. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 800.)",
            "* All enemies get -58% defense against Special Skill for 5 turns.",
            "* All enemies get -45% decrease for any healing for 5 turns."
        ]
    },
    {
        "heroId": "kingdom_cao_cao",
        "name": "Cao Cao",
        "effects": [
            "Deals 330% damage to all enemies.",
            "Summons a Wei Soldier Minion for each ally with 20% HP and 25% attack inherited from the caster.",
            "Each hit from a Wei Soldier Minion dispels all dispellable buffs from the target.",
            "All allies get +30% defense for 4 turns."
        ]
    },
    {
        "heroId": "kingdom_cao_cao_costume_ice",
        "name": "Cao Cao C1",
        "effects": [
            "Deals 320% damage to all enemies.",
            "Summons a Wei Soldier Minion for each ally with 42% HP and 42% attack inherited from the caster.",
            "Each hit from a Wei Soldier Minion dispels all dispellable buffs from the target.",
            "All allies get +40% defense for 5 turns."
        ]
    },
    {
        "heroId": "forsaken_cassilda",
        "name": "Cassilda",
        "effects": [
            "Deals 325% damage to the target.",
            "The target succumbs to Fear for 4 turns. (The target gets -40% defense. Removes all dispellable buffs and Growth effects when a Fear status effect is added. The target cannot gain new buffs or Growth effects for the duration. Target with Fear deals 160% damage to random ally each time any other ally casts their Special Skill. Each character can trigger this effect once per turn.)",
            "Deals 275% damage to 5 random enemies. (This effect targets the same enemy as the first hit if there are no other valid targets.)",
            "All hit targets get 10 Insanity every time they are hit.",
            "All hit targets cannot activate their Talent Skills for 4 turns.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "slayer_cathal",
        "name": "Cathal",
        "effects": [
            "Deals 570% damage to the target.",
            "The attack has a 60% chance to bypass defensive buffs. This includes counterattacks.",
            "Stack +2 (Max: 10): The caster gets +12% mana generation",
            "Stack (Max: 10): The caster recovers 15 HP each turn."
        ]
    },
    {
        "heroId": "masquerade_cel",
        "name": "Cel",
        "effects": [
            "Summon a Rock Golem Minion for each ally with 40% HP and 50% attack inherited from the caster.",
            "The Rock Golem Minion gives its owner Golem's Stoneskin when summoned, and again every 3 turns. This effect can't be dispelled.",
            "Golem's Stoneskin drops all damage dealt to the owner to 1, but is removed after 1 hit."
        ]
    },
    {
        "heroId": "bard_celimene",
        "name": "Celimene",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "The target and nearby enemies can't get their status ailments cleansed from Special Skills for 3 turns.",
            "The target and nearby enemies get -44% defense for 3 turns."
        ]
    },
    {
        "heroId": "tales1_ceto",
        "name": "Ceto",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 350% damage to the target and minor damage to all other enemies.",
            "* If hit enemies use their Special Skill in the next 4 turns, they get -34% attack, -34% defense and -24% mana generation for 4 turns. Status effects are added at the end of a Special Skill. Status effects will not be added if this status effect is removed during a Special Skill.",
            "2nd:",
            "* Deals 470% damage to the target and minor damage to all other enemies.",
            "* If hit enemies use their Special Skill in the next 4 turns, they get -34% attack, -34% defense and -24% mana generation for 4 turns. Status effects are added at the end of a Special Skill. Status effects will not be added if this status effect is removed during a Special Skill.",
            "* All enemies receive 436 Water damage over 4 turns. The caster absorbs 50% of the dealt Water damage as health."
        ]
    },
    {
        "heroId": "tales1_ceto_costume_queen",
        "name": "Ceto C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 340% damage to the target and minor damage to all other enemies.",
            "* If hit enemies use their Special Skill in the next 4 turns, they get -24% attack, -24% defense and -14% mana generation for 4 turns. Status effects are added at the end of a Special Skill. Status effects will not be added if this status effect is removed during a Special Skill.",
            "2nd:",
            "* Deals 500% damage to the target and minor damage to all other enemies.",
            "* If hit enemies use their Special Skill in the next 5 turns, they get -39% attack, -44% defense and -24% mana generation for 5 turns. Status effects are added at the end of a Special Skill. Status effects will not be added if this status effect is removed during a Special Skill.",
            "* All enemies receive 735 Water damage over 5 turns. The caster absorbs 50% of the dealt Water damage as health."
        ]
    },
    {
        "heroId": "journey_change",
        "name": "Chang'e",
        "effects": [
            "Deals 310% damage to all enemies.",
            "All enemies cannot cast any new status effects on enemies or allies for 4 turns. (This includes stacks. This only includes status effects cast with Special Skills.)",
            "All allies get +45% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "halloween_chester",
        "name": "Chester",
        "effects": [
            "Deals 440% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 730 Curse damage over 5 turns, starting low and increasing every turn.",
            "The target and nearby enemies get silenced for 5 turns."
        ]
    },
    {
        "heroId": "moth_chimister",
        "name": "Chimister",
        "effects": [
            "If any enemy has the Toxin status ailment:",
            "* All enemies receive 985 Toxin damage over 5 turns. Damage is increased against targets with boosted health, Minions or a Mega Minion. (The Toxin damage is increased by +100% against targets with boosted health. The Toxin damage is increased by +33% per Minion or Mega Minion owned by target. Maximum increased damage is +199%.)",
            "* Dispels buffs from all enemies.",
            "* All allies regenerate 1300 bosted health over 5 turns. Boosted health can exceed max HP.",
            "Otherwise:",
            "* All enemies receive 790 Toxin damage over 5 turns. Damage is increased against targets with boosted health, Minions or a Mega Minion. (The Toxin damage is increased by +100% against targets with boosted health. The Toxin damage is increased by +33% per Minion or Mega Minion owned by target. Maximum increased damage is +199%.)",
            "* Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "mahayoddha_chitrangada",
        "name": "Chitrangada",
        "effects": [
            "Recover 20% health for all allies.",
            "Growth Boon: Recovers 2x extra for each point of modified defense. (Up to a maximum 800 additional  healing. Status effects affecting healing received do affect the healing scaling.)",
            "Each defeated ally has a 35% chance to get revived with 35% HP.",
            "Cleanses 1 status ailment from all allies. (Status ailments are cleansed in the order they have been received. The latest status ailments are cleansed first.)"
        ]
    },
    {
        "heroId": "garrison_ciara",
        "name": "Ciara",
        "effects": [
            "Deals 200% damage to all enemies.",
            "Summons a Spear Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "Each hit from the Spear Guard Mega Minion dispels all dispellable buffs from the target."
        ]
    },
    {
        "heroId": "mighty_pet_cinnamon",
        "name": "Cinnamon",
        "effects": [
            "Deals 250% damage to all enemies.",
            "All enemies receive 524 Frost damage over 4 turns.",
            "All enemies get -54% defense against Ice for 4 turns."
        ]
    },
    {
        "heroId": "ice_god_claeg",
        "name": "Claeg",
        "effects": [
            "Recovers 20% health for all allies. Recovers extra 5% for each status ailment the ally has, up to 35% health in total.",
            "Cleanses 3 status ailments from all allies. (Status ailments are cleansed in the order they have been received. The latest status ailments are cleansed first.)",
            "Elemental Link gives all Ice allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ninja_cobalt",
        "name": "Cobalt",
        "effects": [
            "1x Mana Charge",
            "* Deals 320% damage to the target.",
            "* The attack has a 60% chance to bypass defensive buffs. (This includes counterattacks.)",
            "2x Mana Charge",
            "* Deals 355% damage to the target and nearby enemies.",
            "* The attack has a 85% chance to bypass defensive buffs. (This includes counterattacks.)",
            "3x Mana Charge",
            "* Deals 390% damage to all enemies.",
            "* The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "astral_cosmicspeaker",
        "name": "Cosmicspeaker",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 350% damage to all enemies.",
            "Dispels buffs from all enemies at the end of each turn for 4 turns.",
            "Cleanses status ailments from all allies at the end of each turn for 4 turns."
        ]
    },
    {
        "heroId": "villain_crystalis",
        "name": "Crystalis",
        "effects": [
            "Deals 190% damage to all enemies.",
            "Reduces the duration of all enemies' active buffs by 1 turn.",
            "All enemies receive Corrosive Frost for 4 turns. The Corrosive Frost deals 70 Frosth damage and lowers the target's attack by -11% each turn. Deals extra damage against heroes with Minions or a Mega Minion."
        ]
    },
    {
        "heroId": "beachparty_davey_wavey",
        "name": "Davey Wavey",
        "effects": [
            "All allies regenerate 500 boosted health over 4 turns. Boosted health can exceed max HP. The effect duration resets if the status effect owner is hit with direct damage from a Special Skill.",
            "All allies get +30% defense for 4 turns.",
            "All allies get +20% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn."
        ]
    },
    {
        "heroId": "beauty_beast_dominique",
        "name": "Dominique",
        "effects": [
            "If the caster has 35 or more Humility:",
            "Deals 460% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 1260 Bleed damage over 4 turns.",
            "The caster and nearby allies counterattack with 150% of the damage received for 4 turns.",
            "Otherwise:",
            "Deals 405% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 960 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "ice_god_dvalin",
        "name": "Dvalin",
        "effects": [
            "Deals 370% damage to the target and nearby enemies.",
            "The target and nearby enemies receive Corrosive Frost for 4 turns. The Corrosive Frost delas 286 Frost damage and lowers the target's attack by -11% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "The caster and nearby allies get +54% attack for 4 turns.",
            "Elemental Link gives all Ice allies +20% critical chance for 4 turns. This effect can’t be dispelled."
        ]
    },
    {
        "heroId": "mimic_emblem_blue",
        "name": "Emblem Mimic Ice",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target receives 387 Poison damage over 3 turns. This effect spreads to nearby enemies.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "institute_emilie",
        "name": "Emilie",
        "effects": [
            "Casts Full Removal on the target. (Full Removal removes all status effects, stacks and Growth and Wither effects. Removes even effects and stacks that are otherwise undispellable or uncleansable.)",
            "The target shifts into Abyss Ghost form for 5 turns.",
            "While in Abyss Ghost form the target receives 226 damage each turn.",
            "When the Abyss Ghost form expires - Deals 1200 damage to all allies and inflicts 15 Insanity on them.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "castle_wolf_esme",
        "name": "Esme",
        "effects": [
            "Destroys all Fiends from all allies and damages Mega Fiends.",
            "Boosts health of all allies by 650. Boosted health can exceed max HP.",
            "If an ally had fiends they will be immune to new Fiends for 4 turns."
        ]
    },
    {
        "heroId": "s4_exeera",
        "name": "Exeera",
        "effects": [
            "All enemies receive 237 Water damage, and an increase of 33 damage per each Ice shield on the board over 3 turns, up to 633 damage. This effect is uncleansable for all Fire enemies.",
            "All Ice enemies are immune to this attack."
        ]
    },
    {
        "heroId": "s4_exeera_costume_hierophant",
        "name": "Exeera C1",
        "effects": [
            "All enemies receive 270 Water damage, and an increase of 54 damage per each Ice shield on the board over 3 turns, up to 918 damage. This effect is uncleansable for all Fire enemies.",
            "All Ice enemies are immune to this attack."
        ]
    },
    {
        "heroId": "mimic_training_hero_blue",
        "name": "Experience Mimic Ice",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, the caster recovers +50% health and gains 33% mana.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "s3_fenrir",
        "name": "Fenrir",
        "effects": [
            "Deals 320% damage to the target.",
            "If the target has less than 50% health remaining, deals 640% damage instead.",
            "The caster gains a moderate amount of mana for each enemy defeated and a small amount of mana for each enemy Minion destroyed.",
            "Heals the caster for 50% of damage dealt."
        ]
    },
    {
        "heroId": "s3_fenrir_costume_guardian",
        "name": "Fenrir C1",
        "effects": [
            "Deals 350% damage to the target.",
            "Deals 700% damage if the target has less than 50% health remaining.",
            "The caster recovers 35% health for each enemy killed and 15% health for each enemy Minion killed.",
            "Increases the mana of the caster by 15%."
        ]
    },
    {
        "heroId": "garrison_fergus",
        "name": "Fergus",
        "effects": [
            "Reduces the mana of the enemy with the most mana by 70%. Reduces the mana of all other enemies by 40%.",
            "All enemies get -30% mana generation for 6 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Summnos a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion recieves 414 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "pirate_commodore_finley",
        "name": "Finley",
        "effects": [
            "Deals 385% damage to the target.",
            "If the target has buffs, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "All hit targets get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "pirate_commodore_finley_costume_bleak",
        "name": "Finley C1",
        "effects": [
            "Deals 420% damage to the target.",
            "If the target has buffs, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "All hit targets get -56% defense for 3 turns."
        ]
    },
    {
        "heroId": "ballerina_firmin",
        "name": "Firmin Richard",
        "effects": [
            "Deals 175% damage to the all enemies.",
            "Stack (Max: 10): All allies get +20% attack.",
            "Stack (Max: 10): All alies get +20% defense."
        ]
    },
    {
        "heroId": "goblin_fizzcoil",
        "name": "Fizzcoil",
        "effects": [
            "Deals 240% damage to all enemies.",
            "Wither: All enemies get -200 attack and -200 defense.",
            "All enemies get -30% mana generation for 3 turns. If the effect is removed before the duration ends, the mana of the target with the effect is reduced by -5% mana."
        ]
    },
    {
        "heroId": "masquerade_fortuna",
        "name": "Fortuna",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 150% damage to all enemies.",
            "Summons a Corrupted Mask Fiend to all enemies. The Fiend damages the enemies with 55% attack every turn.",
            "The Corrupted Mask Fiend absorbs healing. It disappears after absorbing a healing amount equal to 22% of its target's max health.",
            "When summoned, the Corrupted Mask Fiend gives -36% attack for its owner for as long as the owner has Corrupted Mask Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "ice_god_frida",
        "name": "Frida",
        "effects": [
            "Deals 350% damage to the target and nearby enemies.",
            "The target and nearby enemies get -54% defense against Ice for 4 turns.",
            "Dispels buffs from the target and nearby enemies.",
            "Element Link gives all Ice allies +46% defense against Nature for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "ice_god_frosth",
        "name": "Frosth",
        "effects": [
            "Summons a Frost Sprite Minion for each ally with 18% HP and 20% attack inherited from the caster.",
            "All allies' Minions get +40% HP and +40% attack. This special can increase HP and attack up to +200% of the Minion's original HP and attack.",
            "Element Link gives all Ice allies small amounts of mana at the end of the turn for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "garrison_frostsnout",
        "name": "Frostsnout",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "Reduces the duration for the caster and nearby allies' active status ailments by 2 turns. (The duration modification affects both cleansable and uncleansable effects. If the duration of any effect is reduced to zero, the effect is considered as having expired naturally.)",
            "The caster and nearby allies get +40% critical chance for 3 turns."
        ]
    },
    {
        "heroId": "gargoyle_gaillard",
        "name": "Gaillard",
        "effects": [
            "Deals 540% damage to the target.",
            "All allies are immune to incoming negative effects and damage from Fiends for 4 turns.",
            "All allies are immune to new Fiends for 4 turns."
        ]
    },
    {
        "heroId": "construct_blue_mage",
        "name": "Ghealach",
        "effects": [
            "Deals 385% damage to the target and nearby enemies.",
            "Summons a Fallen Star Fiend to the target and nearby enemies.",
            "The Fallen Star Fiend absorbs healing. It disappears after absorbing a healing amount equal to 45% of its target max health.",
            "The caster steals 45% of the generated mana from the target and nearby enemies. The effect lasts as long as the target has Fallen Star Fiends. This effect can't be cleansed, but it gets removed if the caster dies."
        ]
    },
    {
        "heroId": "wild_cat_gitnib",
        "name": "Gitnib",
        "effects": [
            "All enemies receive 1500 Surge Bleed damage over 6 turns. (If the target already has this effect, the duration will be refreshed and the damage will be increased by 300, Max total damage: 3000.)",
            "Summons a Piranha Fiend to all enemies. The Fiend damages the enemy with 80% attack every turn.",
            "The Piranha Fiend absorbs healing. It disappears after absorbing a healing amount equal to 55% of its targets max health.",
            "Deals 400 - 800 damage to all enemies after 3 turns or if the caster is defeated, based on the damage the caster had taken while this effect was active. (Maximmum effect is achieved upon taking 50% of max health  in damage.)"
        ]
    },
    {
        "heroId": "construct_glacivolt",
        "name": "Glacivolt",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All enemies get -25% defense, and a further -5% decrease per each Ice shield on the board for 3 turns, up to -50% defense.",
            "All enemies receive 456 Frost damage over 3 turns."
        ]
    },
    {
        "heroId": "ice_god_callum",
        "name": "Gladius",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 600% damage to the target.",
            "The target gets a Mark of Dodge for 3 turns. Whenever a marked target dodges, they gain a stack (Max: 10). Each stack increases all damage the target receives by +5%.",
            "Element Link gives all Ice allies +10% additional Special Skill damage for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ice_god_glenda",
        "name": "Glenda",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The caster and nearby allies' Special Skills deal an additional +40% damage for 4 turns.",
            "Cleanses status ailements from all allies.",
            "Element Link summons an Ice Minion for all Ice allies with 6% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "slime_gloozmer",
        "name": "Gloozmer",
        "effects": [
            "Steals all Minions or a Mega Minion from the target.",
            "Deals 600% damage to the target.",
            "The target cannot cast any new status effects on enemies or allies for 3 turns. (This includes stacks. This only includes status effects cast with Special Skills.)",
            "The target receive Devouring Goo status ailment for 3 turns.",
            "Devouring Goo: Removes all dispellable buffs and Growth effects, deals 200 damage per turn and 100 damage per each removed effect. (If the target already has this effect, the duration will be refreshed and an extra damage from the removed effects will be added to the new effect. Damage per turn can't exceed 700.)"
        ]
    },
    {
        "heroId": "goblin_grimsteel",
        "name": "Grimsteel",
        "effects": [
            "Recovers 54% health for all allies.",
            "Growth: All allies get 450 attack and 450 defense.",
            "All allies get +30% mana generation for 4 turns. If the effect is removed before the duration ends, the target with effect gets +10% mana."
        ]
    },
    {
        "heroId": "guardian_hippo",
        "name": "Guardian Hippo",
        "effects": [
            "For the next 3 turns, this character deals 225% damage to all enemies each time any other ally casts their Special skill. (Damage is dealt on the first Special Skill cast of each character per turn. Damage is dealt on the first Special Skill cast of each character per turn.)",
            "All allies get +34% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "construct_halwinter",
        "name": "Halwinter",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster counterattacks a random enemy with 120% of the damage received for 4 turns.",
            "The caster reduces all received damage by -50% for 4 turns.",
            "The caster is immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "s5_hetepheres",
        "name": "Hetepheres",
        "effects": [
            "Recovers 50% health for all allies.",
            "All allies get +84% defense agains Nature, and a further 2% increase every time they are hit during 4 turns.",
            "All enemies get -40% accuracy for 4 turns. Chance to miss also applies to offensive Special Skill."
        ]
    },
    {
        "heroId": "s5_hetepheres_costume_spa",
        "name": "Hetepheres C1",
        "effects": [
            "Recovers 54% health for all allies.",
            "All allies get +64% defense against Nature, and a further 3% increase every time they are hit during 4 turns.",
            "All enemies get -45% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "valentines_himeros",
        "name": "Himeros",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 460% damage to the target.",
            "The caster and nearby allies' Special Skills deal an additional +40% damage for 3 turns."
        ]
    },
    {
        "heroId": "tales2_hogne",
        "name": "Hogne",
        "effects": [
            "Attacks the target and nearby enemies with Frostfall Strike, dealing up to 2300 damage. Deals 40% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "Reduces the max health of the target and nearby enemies with 800. This effec is strong against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 600.)",
            "The target and nearby enemies get -70% decrease of any healing received for 4 turns."
        ]
    },
    {
        "heroId": "beowulf_hrothgar",
        "name": "Hrothgar",
        "effects": [
            "Deals 340% damage to all enemies.",
            "Reduces the mana of all enemies by 20%.",
            "All enemies get -24% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Source of Buffs: The following effects are cast on a random ally at the start of each turn",
            "* +70% attack for 5 turns.",
            "* +50% defense for 5 turns.",
            "* The Source of Buffs will activate 4 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "shadow_hysteria",
        "name": "Hysteria",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "For the next 4 turns, the caster inflicts 10 Insanity to all enemies each time the caster is hit. The effect is triggered when the enemy deals damage through Special Skills. Tiles and normal attacks are limited to once per turn.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "vegetable_indigon",
        "name": "Indigon",
        "effects": [
            "Deals 300% damage to all enemies.",
            "Deals additional 5% damage for each Fiend or Mega Fiend owned by the enemies, up to 350% damage in total.",
            "Stack (Max: 10): All damage all enemies receive is increased by 6%.",
            "Stack (Max: 10): All allies get +4% mana generation. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "ice_god_iris",
        "name": "Iris",
        "effects": [
            "Deals 435% damage to the target and minor damage to the nearby enemies.",
            "Dispells buffs from the target and nearby enemies at the end of each turn for 3 turns.",
            "Deals extra damage against Fire.",
            "Element Link gives all Ice allies +10% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress",
        "name": "Isarnia",
        "effects": [
            "Deals 235% damage to all enemies.",
            "All enemies get -44% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress_costume_aqua",
        "name": "Isarnia C1",
        "effects": [
            "Deals 255% damage to all enemies.",
            "All enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress_costume_ruler",
        "name": "Isarnia C2",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All enemies get -34% attack for 4 turns. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress_costume_cute",
        "name": "Isarnia Toon",
        "effects": [
            "Deals 385% damage to all enemies.",
            "All enemies get -34% defense for 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress_costume_glass",
        "name": "Isarnia Glass",
        "effects": [
            "Deals 395% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -40% defense for 6 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_ixinn",
        "name": "Ixinn",
        "effects": [
            "Deals 530% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit targets receive +50% increased damage for 5 turns. The effect is increased by +10% for each Minion or Mega Minion owned by all enemies, up to +100% in total.",
            "Wither: All enemies get -450 attack."
        ]
    },
    {
        "heroId": "elemental_jolt",
        "name": "Jolt",
        "effects": [
            "Deals 215% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All enemies get -34% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills)",
            "All Ice allies get +60% attack for 3 turns."
        ]
    },
    {
        "heroId": "faun_jolyon",
        "name": "Jolyon",
        "effects": [
            "Enhanced Dodge: All allies get +75% chance to dodge Special Skills that deal damage. This effect lasts until the ally succesfully dodges once.",
            "After the Enhanced Dodge ends or is removed or replaced, the ally gets a Wooden Doll Minion.",
            "The Wooden Doll Minion has 30% HP and 30% attack inherited from the caster.",
            "When summoned the Wooden Doll Minion gives its owner immunity to new status ailments for as long as the owner has Wooden Doll Minion."
        ]
    },
    {
        "heroId": "valentines_kabeiroi",
        "name": "Kabeiroi",
        "effects": [
            "Deals 200% damage to the target.",
            "For 3 turns, the target is forced to cast Mindless Heal when at full mana.",
            "Deals 200% damage to 3 other random enemies. (This effect target the same enemy as the first hit if there are no other valid targets)",
            "For 3 turns, all hit enemies are forced to cast Mindless Heal when at full mana.",
            "Mindless Heal: Recovers 20% HP health for the character on the opposing side with the lowest remaining HP."
        ]
    },
    {
        "heroId": "magic_carpet_kesha",
        "name": "Kesha",
        "effects": [
            "Deals 485% damage to all enemies.",
            "All allies except the caster dance the Dance of Ishq.",
            "Dance of Ishq:",
            "+44% mana generation.",
            "Received damage is reduced by -47%. (Affects only mana generation from matching tiles or mana gained by the defense team at the end of their turn. All existing status effects will be removed when a dance status effect is added. Dance gives immunity to new status effects. New dance status effect will replace this effect. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "goblin_kettle",
        "name": "Kettle",
        "effects": [
            "Cook random food for special effect (Activation chance for each effect):",
            "- Exquisite Food (45%)",
            "* Recovers 50% health for all allies.",
            "* Growth: All allies get 400 defense.",
            "- Rotten Food (45%)",
            "* Deals 350% damage to all enemies.",
            "* All enemies receive 965 Poison damage over 5 turns.",
            "- Catastrophic Kitchen Failure (10%)",
            "* Deals 100% damage to all allies and all enemies."
        ]
    },
    {
        "heroId": "knights_king_arthur",
        "name": "King Arthur",
        "effects": [
            "Deals 468% damage to the target.",
            "The target gets -39% attack for 4 turns.",
            "The target gets -54% defense against Ice for 4 turns.",
            "The caster gets +74% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "ice_god_klaern",
        "name": "Klaern",
        "effects": [
            "Deals 300% damage to all enemies.",
            "All enemies receive 400 Water damage over 5 turns. The caster absorbs 35% of dealt Water damage as health.",
            "Element Link gives all ice allies +10% defense for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "christmas_krampus",
        "name": "Krampus",
        "effects": [
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "The caster gets +44% defense, and a further 10% increase every time they are hit during 3 turns, up to +94% defense. This effect can't be dispelled.",
            "All allies get +50% attack for 3 turns"
        ]
    },
    {
        "heroId": "christmas_krampus_costume_eager_devil",
        "name": "Krampus C1",
        "effects": [
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "The caster gets +30% defense for 3 turns.",
            "All allies get +45% attack, and a further 20% increase every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "scoundrel_lane",
        "name": "Lane",
        "effects": [
            "Deals 585% damage to the target and minor damage to all other enemies.",
            "The caster goes into Ambush. Damage dealt by the caster is increased by +50%, and damage received by them is decreased by -40%. (When the character goes into Ambush, all existing cleansable ailments and Wither effects are removed. The character can't gain new ailments or Wither effects while in Ambush. This effect is uncleansable. Ambush ends once the character has received 1500 damage.)",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "valentines_lempi",
        "name": "Lempi",
        "effects": [
            "Dispels 1 buff from all enemies. (The latest buffs are dispelled first.)",
            "Deals 225% damage to all enemies.",
            "For the next 2 turns, all enemies convert all  boosted health received to max health reduction. Max health is reduced more for targets that already have boosted health. (Max health can't get lower than 30% of the original max health. When boosted healing is converted, the max health reduction is doubled if the target already has boosted health.)"
        ]
    },
    {
        "heroId": "wild_cat_lennart",
        "name": "Lennart",
        "effects": [
            "Deals 500% damage to the target.",
            "The target receives 1500 Surge Bleed damage over 6 turns. (If the target already has this effect, the duration will be refreshed and the damage will be increased by 300. Max total damage: 2400.)",
            "The target takes +40% increased damage from status ailments for 6 turns.",
            "The target resists healing and receives 300 damage per each resisted healing for 6 turns."
        ]
    },
    {
        "heroId": "s3_loki_male",
        "name": "Lord Loki",
        "effects": [
            "Copies target's Special Skill and uses it as if it was the caster's own Special Skill.",
            "If the target does not have a Special Skill or it can't be copied, the following special skill will be cast",
            "Villain Swing:",
            "* Deals 275% damage to the target"
        ]
    },
    {
        "heroId": "s3_loki_male_costume_shapeshifter",
        "name": "Lord Loki C1",
        "effects": [
            "Copies all dispellable buffs from the target.",
            "Copies target's Special Skill and uses it in addition to the caster's own Special Skill.",
            "If the target does not have a Special Skill, or it can't be copied, the following Special Skill will be cast:",
            "Scoundrel Swing:",
            "* Deals 265% damage to the target."
        ]
    },
    {
        "heroId": "fleur_ludovico",
        "name": "Ludovico",
        "effects": [
            "Recovers 20% health for all allies.",
            "For each stack of the Blood Lily effect on enemies, boosts health of all allies by 30, up to 900 boosted health in total. Boosted health can exceed max HP.",
            "All allies are immune to new Fiends for 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "titan_hunter_lumi_and_taiga",
        "name": "Lumi & Taiga",
        "effects": [
            "Deals 250% damage to all enemies.",
            "Against Titans, deals 500% damage.",
            "All allies get +50% attack for 4 turns. Against Fire Titans, all allies get +60% attack.",
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage."
        ]
    },
    {
        "heroId": "castle_stag_lysanor",
        "name": "Lysanor",
        "effects": [
            "Each defeated ally has a 60% chance to get revived with 20% HP.",
            "All allies get +50% attack for 5 turns. The attack increases by 5% each turn, up to +70%.",
            "All allies regenerate 1270 boosted health over 5 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "slime_magistine",
        "name": "Magistine",
        "effects": [
            "Deals 325% damage to all enemies.",
            "If the enemy team has any Mega Minions, this Special Skill deals 375% damage to all enemies instead.",
            "All enemies receive Devouring Goo status ailment for 3 turns.",
            "Devouring Goo: Removes all dispellable buffs and Growth effects, deals 200 damage per turn and 50 damage per each removed effect. (If the target already has this effect, the duration will be refreshed and an extra damage from the removed effects will be added to the new effect. Damage per turn can't exceed 700.)"
        ]
    },
    {
        "heroId": "exalted_warrior",
        "name": "Magni",
        "effects": [
            "Deals 420% damage to the target.",
            "The caster and nearby allies get +63% defense for 4 turns."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_ice",
        "name": "Magni C1",
        "effects": [
            "Deals 420% damage to the target.",
            "The target and nearby enemies get -34% defense for 4 turns."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_underworld",
        "name": "Magni C2",
        "effects": [
            "Deals 285% damage to target and nearby enemies.",
            "The target and nearby enemies get -64% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_cute",
        "name": "Magni Toon",
        "effects": [
            "Deals 500% damage to the target.",
            "The caster and nearby allies get 56% defense for 4 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_glass",
        "name": "Magni Glass",
        "effects": [
            "Deals 510% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster and nearby allies get +60% defense for 4 turns."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_stylish",
        "name": "Magni Stylish",
        "effects": [
            "Deals 520% damage to the target.",
            "If the target has less than 50% health remaining, deals 620% damage instead.",
            "The caster and nearby allies get +61% defense for 4 turns."
        ]
    },
    {
        "heroId": "owl_mariol",
        "name": "Mariol",
        "effects": [
            "Boosts health of all allies by 700. Boosted health can exceed max HP.",
            "All allies get Moonrise Ward for 3 turns, that reduces incoming Special Skill damage by -700. Reduces damage by additional 30% when attacker is Holy.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "rabbit_blue",
        "name": "Master Lepus",
        "effects": [
            "Deals 410% damage to the target and minor damage to nearby enemies.",
            "The caster gets -20% defense for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "rabbit_blue_costume_riftbreaker",
        "name": "Master Lepus C1",
        "effects": [
            "Deals 280% damage to all enemies.",
            "The caster gets -24% mana generation for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "gargoyle_matrera",
        "name": "Matrera",
        "effects": [
            "Deals 650% damage to the target.",
            "If the target is defeated, the excess damage is dealt to each nearby enemy.",
            "The target and nearby enemies get -40% attack for 4 turns."
        ]
    },
    {
        "heroId": "ice_god_mene",
        "name": "Mene",
        "effects": [
            "Deals 310% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 824 Frost damage over 4 turns.",
            "The target and nearby enemies are immune to new status effect buffs for 4 turns, and receive 300 damage for each attempted buff.",
            "Element Link gives all Ice allies +20% critical chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "ice_god_miki",
        "name": "Miki",
        "effects": [
            "All allies get +130% normal attack that only applies when the enemy has more HP than the attacker. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +170% increased power while this efect is active. The effect lasts for 5 turns.",
            "The target and nearby enemies get silenced for 5 turns",
            "Element Link gives +4% mana regeneration for all Ice allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "musketeer_milady_de_winter",
        "name": "Milady de Winter",
        "effects": [
            "Deals 385% damage to all enemies.",
            "The caster regenerates 918 HP over 6 turns.",
            "All enemies reflect status effect buffs to a random character on the opposing team for 6 turns. Only dispellable buffs are reflected.",
            "All allies reflect cleansable status ailments to a random character on the opposing team for 6 turns. Only cleansable ailments are reflected."
        ]
    },
    {
        "heroId": "musketeer_milady_de_winter_costume_herbalist",
        "name": "Milady de Winter C1",
        "effects": [
            "Deals 480% damage to all enemies.",
            "The caster regenerates 1500 boosted health over 6 turns. Boosted health can exceed max HP.",
            "All enemies reflect status effect buffs to a random character on the opposing team for 6 turns.",
            "All allies reflect status ailments to a random character on the opposing team for 6 turns."
        ]
    },
    {
        "heroId": "magic_milena",
        "name": "Milena",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Recovers 25% health for all allies.",
            "* Cleanses status ailments from all allies.",
            "2x Mana Charge:",
            "* Deals 420% damage to all enemies.",
            "* Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "magic_milena_costume_ice",
        "name": "Milena C1",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% mana:",
            "1x Mana Charge:",
            "* Recovers 26% health for all allies.",
            "* Cleanses status ailments from all allies.",
            "2x Mana Charge:",
            "* Deals 440% damage to all enemies.",
            "* Dispels buffs from all enemies.",
            "* All enemies receive 340 Frost damage over 5 turns."
        ]
    },
    {
        "heroId": "halloween_miriam_and_midnight",
        "name": "Miriam & Midnight",
        "effects": [
            "Summons a Blue Kitten Minion for the caster and nearby allies. Blue Kitten Minion inherits 30% HP and 30% attack from the caster. The Minion recovers 22% health for its owner at the end of each turn.",
            "The Blue Kitten Minion lifts the newest cleansable status ailment from its owner and adds it to the hit target.",
            "The caster and nearby allies get +50% attack for 3 turns."
        ]
    },
    {
        "heroId": "s2_mercenary_woman",
        "name": "Misandra",
        "effects": [
            "Deals 310% damage to the target.",
            "Has a 42% chance for additional hits on random enemies up to 3 times. Additional hits deal minor damage.",
            "All allies gain a small amount of mana for each hit."
        ]
    },
    {
        "heroId": "s2_mercenary_woman_costume_dancer",
        "name": "Misandra C1",
        "effects": [
            "Deals 280% damage to the target.",
            "Has a 42% chance for additional hits on random enemies up to 3 times.",
            "Enemies hit automatically cast Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns."
        ]
    },
    {
        "heroId": "easter_miss_ethel",
        "name": "Miss Ethel",
        "effects": [
            "Deals 600% damage to the target.",
            "If the target had more then 40% health before receiving damage targets another enemy who had over 40% health before receiving any damage from this Special Skill. If none of the other enemies have 40% health targets a random enemy. The damage is reduced on each consecutive hits. Each enemy can only be hit once.",
            "The caster gets -15% mana generation for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "champions_mistra",
        "name": "Mistra",
        "effects": [
            "Deals 350% damage to all enemies.",
            "If the target is Average mana speed, deals an additional 50% damage.",
            "If the target is Fast mana speed, deals an additional 100% damage.",
            "If the target is Very Fast mana speed, deals an additional 150% damage. (In Rush Attack tournaments and wars enemies are considered as Very Fast mana speed. All monsters are considered as Average mana speed.",
            "Heals all allies for 10% of damage dealt."
        ]
    },
    {
        "heroId": "beachparty_misty",
        "name": "Misty",
        "effects": [
            "Boosts health of all allies by 180. Boosted health can exceed max HP.",
            "Reduces the max health of all enemies by 180. This effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 180.",
            "Deals 180% damage to all enemies."
        ]
    },
    {
        "heroId": "beowulf_modthryth",
        "name": "Modthryth",
        "effects": [
            "The caster and nearby allies counterattack with 135% of the damage received for 3 turns.",
            "The caster and nearby allies decrease -10% mana from the attacker on each counterattack for 3 turns. The effect get diminished for consecutive activations during the same turn.",
            "Stack (Max: 10): All allies get +15% attack.",
            "Source of Buffs: The following effects are cast on a random ally at the start of each turn",
            "* +100% Special Skill damage for 4 turns.",
            "* +33% mana generation for 4 turns.",
            "* The Source of Buffs will activate 4 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "astral_mooncure",
        "name": "Mooncure",
        "effects": [
            "Recovers 55% health for all allies.",
            "All allies get +10% mana every time an enemy uses their Special skill during 5 turns.",
            "The caster steals 50% of any healing applied to all enemies for 5 turns.",
            "All enemies get -40% attack for 5 turns."
        ]
    },
    {
        "heroId": "s4_morel",
        "name": "Morel",
        "effects": [
            "Deals 180% damage to all enemies",
            "All enemis get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "s4_morel_costume_sage",
        "name": "Morel C1",
        "effects": [
            "Deals 145% damage to all enemies.",
            "All enemies get -34% defense for 3 turns.",
            "All allies regenerate 411 HP over 3 turns."
        ]
    },
    {
        "heroId": "christmas_mr_pengi",
        "name": "Mr. Pengi",
        "effects": [
            "Deals 450% damage to the target.",
            "Deals an additional 130% damage to as many random enemies as there are Minions owned by allies. The damage is reduced on each consecutive hit.",
            "All hit targets receive 132 Frost damage.",
            "Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inheried from the caster."
        ]
    },
    {
        "heroId": "christmas_mr_pengi_costume_snowboarder",
        "name": "Mr. Pengi C1",
        "effects": [
            "Deals 400% damage to the target.",
            "Deals an additional 160% damage to as many random enemies as there are Minions owned by allies. The damage is reduced on each consecutive hit.",
            "All hit targets receive 231 Frost damage over 3 turns.",
            "Summons an Elf minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "construct_nautica",
        "name": "Nautica",
        "effects": [
            "Recovers 45% health for all allies.",
            "Increases the mana of nearby allies by 33%.",
            "Nearby allies get +40% mana generation for 4 turns.",
            "The caster and nearby allies get +50% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "ice_god_nerasis",
        "name": "Nerasis",
        "effects": [
            "Deals 460% damage to the target.",
            "If the target is defeated by the attack, the caster gains +50% mana. (After a character has received 5 direct mana addition from Special Skill during a single turn, all subsequent direct mana addition done by Special Skills will have reduced power on that character.)",
            "Stack (Max: 10): The caster gets +10% attack.",
            "Elemental Link gives all Ice allies +20% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "journey_nineheaded_beast",
        "name": "Nine-Headed Beast",
        "effects": [
            "160% damage to 9 random enemies.",
            "The duration of buffs is reset for all allies.",
            "The duration of status ailments is reset for all enemies.",
            "All allies get +40% attack for 4 turns.",
            "All enemies get -40% attack for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_njal",
        "name": "Njal",
        "effects": [
            "Deals 350% damage to all enemies.",
            "All enemies receive 852 Frost damage over 4 turns. The caster and all their allies absorb 20% of the dealt Frost damage as health.",
            "All Fire enemies get -64% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "elemental_nylora",
        "name": "Nylora",
        "effects": [
            "Targets element is changed to Fire for 3 turns. (Titans and Mythic Titans are not affected by Element Swap)",
            "Deals 550% damage to the target.",
            "The target get -68% defense against Ice for 3 turns."
        ]
    },
    {
        "heroId": "ballerina_odette",
        "name": "Odette",
        "effects": [
            "The caster regenerates 609 HP over 3 turns.",
            "The caster gets +45% chance to dodge Special Skills that deal damage for 3 turns.",
            "Casts Dance of the Swan to all allies but caster for 3 turns. All existing status effects will be removed when this effect is added.",
            "Dance of the Swan",
            "* +45% chance to dodge attacks and Special Skills.",
            "* 50% chance to deal 360 % damage to a random enemy after any subsequent allied Special Skill is cast.",
            "* Gives immunity to new status effects. New dance status effects will replace this effect.",
            "* This effect cannot be dispelled. This effect is removed when the caster is defeated."
        ]
    },
    {
        "heroId": "ninja_oniwakamaru",
        "name": "Oniwakamaru",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Boosts health of caster by 390. Boosted health can exceed max HP.",
            "- The caster gets Taunt that prevents enemies from using Special Skill on the caster's allies for 2 turns. This effect can't be dispelled.",
            "- The caster counterattacks with 50% of the damage received for 2 turns.",
            "x2 Mana Charge:",
            "- Boosts health of caster by 490. Boosted health can exceed max HP.",
            "- The caster gets Taunt that prevents enemies from using Special Skill on the caster's allies for 3 turns. This effect can't be dispelled.",
            "- The caster counterattacks with 105% of the damage received for 3 turns.",
            "x3 Mana Charge:",
            "- Boosts health of caster by 540. Boosted health can exceed max HP.",
            "- The caster gets Taunt that prevents enemies from using Special Skill on the caster's allies for 4 turns. This effect can't be dispelled.",
            "- The caster counterattacks with 133% of the damage received for 3 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_orcur",
        "name": "Orcur",
        "effects": [
            "Recovers 30% health for all allies.",
            "Growth: All allies get 250 attack.",
            "Boosts health of all allies by 450 health after 3 turns, or immediatelly if the effect is removed before the duration ends. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "kalevala_otso",
        "name": "Otso",
        "effects": [
            "Deals 380% damage to all enemies.",
            "The caster regenerates 870 HP over 6 turns.",
            "All enemies get a Special Skill mark for 6 turns. Whenever marked target casts their Special Skill, they gain a Stack (Max 10). Each stack increases all damage the target receives by +5%. Against Nature characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "s4_passepartout",
        "name": "Passepartout",
        "effects": [
            "Recovers 25% health for all allies.",
            "All allies regenerate 400 HP over 4 turns, and a further increase of 100 HP per each Nature shield on the board, up to 1200 HP total.",
            "All allies get +20% defense, and a further 7% increase for each Nature shield on the board for 4 turns, up to 76% defense."
        ]
    },
    {
        "heroId": "s4_passepartout_costume_artist",
        "name": "Passepartout C1",
        "effects": [
            "Recover 40% health for all allies.",
            "All allies regenerate 260 HP over 4 turns and a further increase of 76 HP per each Nature shield on the board, up to 868 HP total.",
            "All allies get +30% defense, and a further 8% increase per each Nature shield on the board for 4 turns, up to +94% defense."
        ]
    },
    {
        "heroId": "moth_pepperbleu",
        "name": "Pepperbleu",
        "effects": [
            "Deals 450% damage to the target.",
            "Safely dispels status effect buffs from the target. (Safe dispel bypasses secondary effects, such as damage on removal, from the removed status effect buffs. External effects such as passive skills and family effects can still activate.)",
            "Summons a Dusk Mothling Mega Fiend for the target. The Fiend damages the enemy with 270% attack every turn.",
            "The Dusk Mothling Mega Fiend absorbs healing and disappears when it has absorbed health equal to 75% of its owner's max health.",
            "When summoned, the Dusk Mothling Mega Fiend causes its target to be immune to new buffs. The effect lasts as long as the target has Dusk Mothling Mega Fiend."
        ]
    },
    {
        "heroId": "ice_god_perseus",
        "name": "Perseus",
        "effects": [
            "Deal 455% damage to the target.",
            "The target gets -100% decrease for any healing received for 4 turns.  This effect can't be cleansed.",
            "The caster and nearby allies get +94% defense against Nature for 4 turns.",
            "Elemental Link gives 10% mana generation for all Ice allies for 4 turns. This effect can't be displelled."
        ]
    },
    {
        "heroId": "ice_god_perseus_costume_frozen",
        "name": "Perseus C1",
        "effects": [
            "Deals 405% damage to the target and nearby enemies.",
            "The target and nearby enemies get -100% decrease for any healing received for 4 turns. This effect can't be cleansed.",
            "The target and nearby enemies get -68% defense against Ice for 4 turns.",
            "Elemental Link gives +10% mana generation for all Ice allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "gargoyle_pophit",
        "name": "Pophit",
        "effects": [
            "The target and nearby enemies get -30% defense for 3 turns. If the effect is removed before the duration ends, the target with the effect suffers 668 damage.",
            "Deals 390% damage to the target and nearby enemies.",
            "Nearby allies receive Softskin. (The next time they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled.)"
        ]
    },
    {
        "heroId": "musketeer_porthos",
        "name": "Porthos",
        "effects": [
            "Deals 380% damage to all enemies.",
            "Alters the power of all Ice shields on the board. When an attacking Hero casts the special, the shields become enchanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack.",
            "The caster regenerates 918 HP over 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "musketeer_porthos_costume_merchant",
        "name": "Porthos C1",
        "effects": [
            "Deals 485% damage to all enemies.",
            "Alters the power of all Ice shields on the board. When an attacking Hero casts the special, the shields become enchanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack.",
            "The caster regenerates 1530 boosted health over 6 turns. Boosted health can exceed max HP.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "astral_dwarf_quari",
        "name": "Quari",
        "effects": [
            "Deals 450% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 788 Water damage over 4 turns. All allies absorb 50% of dealt Water damage as boosted health.",
            "Growth: All allies get 200 attack and 200 defense."
        ]
    },
    {
        "heroId": "elemental_quinn",
        "name": "Quinn",
        "effects": [
            "Boosts health of all allies by 400. Boosted health can be exceed max HP.",
            "All enemies are immune to new status effect buffs for 3 turns.",
            "All Fire enemies get -38 accuracy for 3 turns. Chance to miss applies to offensive Special Skills.",
            "All Dark enemies get -38% mana generation for 3 turns.",
            "All Holy enemies get -38% defense for 3 turns.",
            "All Nature enemies get -38% attack for 3 turns."
        ]
    },
    {
        "heroId": "castle_raven_quintin",
        "name": "Quintin",
        "effects": [
            "Deals 420% damage to the target.",
            "For 4 turns, the target receives 100% damage for all the damage dealt to their allies."
        ]
    },
    {
        "heroId": "ice_god_raffaele",
        "name": "Raffaele",
        "effects": [
            "Heals all allies who have less than 50% HP left to 50% health.",
            "All allies regenerate 1080 HP over 4 turns.",
            "Cleanses status ailments from all allies.",
            "Element Link gives all Ice allies +30% defense against Special Skills for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "slayer_rian",
        "name": "Rian",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Deals 210% damage to all enemies.",
            "Deals additional 25% damage per removed status effect, up to 410% damage in total.",
            "Stack (Max: 10): The caster gets +5% mana generation",
            "Stack +2 (Max: 10): The caster recovers 20 HP each turn."
        ]
    },
    {
        "heroId": "nordic_male_lord",
        "name": "Richard",
        "effects": [
            "Deals 415% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% attack for 6 turns."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_senior",
        "name": "Richard C1",
        "effects": [
            "Deals 435% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% attack for 4 turns."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_injustice",
        "name": "Richard C2",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The target and nearby enemies get -30% attack, and a further -2% decrease every time they are hit during 4 turns."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_cute",
        "name": "Richard Toon",
        "effects": [
            "Deals 565% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -24% attack for 6 turns.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_glass",
        "name": "Richard Glass",
        "effects": [
            "Deals 575% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target and nearby enemies get -30% attack for 6 turns."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_stylish",
        "name": "Richard Stylish",
        "effects": [
            "Deals 585% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage to enemies with less than 50% health remaining.",
            "The target and nearby enemies get -32% attack for 6 turns."
        ]
    },
    {
        "heroId": "fox_riverfang",
        "name": "Riverfang",
        "effects": [
            "Dispels buffs from target and nearby enemies.",
            "Deals 400% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 540 Water damage over 3 turns. The caster absorbs 50% of the dealt Water damage as health.",
            "The target and nearby enemies take lasting +50% increased damage from status ailments. (This effect lasts until it is cleansed, replaced or removed.)"
        ]
    },
    {
        "heroId": "fables_rumpelstiltskin",
        "name": "Rumpelstiltskin",
        "effects": [
            "Draw a card for a special effect:",
            "Skull",
            "* Deals 270% damage to all enemies.",
            "* All enemies receive 156 damage over 3 turns.",
            "Cross",
            "* Recovers 27% health for all allies.",
            "* Cleanses status ailments from all allies.",
            "Stars",
            "* All enemies get -34% defense for 3 turns.",
            "* All allies get +48% attack for 3 turns."
        ]
    },
    {
        "heroId": "fables_rumpelstiltskin_costume_eternal",
        "name": "Rumpelstiltskin C1",
        "effects": [
            "Draw a card for a special effect:",
            "Skull",
            "* Reduces max health of all enemies by 550. Max health can't get lower than 30% of the original max health.",
            "* All enemies receive Corrosive Poison for 4 turns. The Corrosive Poison deals 69 Poison damage and lowers the target's mana generation by -9% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "Cross",
            "* Boosts health of all allies by 620. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 4 turns.",
            "Stars",
            "* All enemies get -54% mana generation for 4 turns. This effect can't be cleansed.",
            "* All enemies are immune to new status effect buffs for 4 turns."
        ]
    },
    {
        "heroId": "s4_russula",
        "name": "Russula",
        "effects": [
            "Deals 330% damage to the target.",
            "The caster goes into hiding for 2 turns.",
            "While hidden, the caster can't receive new status effects or stacks and all received damage is reduced by -30%.",
            "When the caster comes out of hiding, it deals 277 damage to all enemies that used Special SKills while it was hiding."
        ]
    },
    {
        "heroId": "s4_russula_costume_painter",
        "name": "Russula C1",
        "effects": [
            "Deals 300% damage to the target.",
            "The caster goes into hiding for 2 turns.",
            "While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -30%.",
            "When the caster comes out of hiding, it deals 411 damage to all enemies that used Special Skills while the caster was hiding."
        ]
    },
    {
        "heroId": "fox_sable",
        "name": "Sable",
        "effects": [
            "Casts Full Removal on the caster. (Full Removal removes all status effects, stacks and Growth and Wither effects. Removes even status effects and stack that are otherwise undispelalble and uncleasable.",
            "The caster shifts into Ghost form for 3 turns. (While in Ghost form, Character can't gain mana, and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects.)",
            "When the Ghost form expires:",
            "The caster revives a random defeated ally with 40% HP.",
            "All allies regenerate 900 health over 3 turns.",
            "Cleanses status ailments from all allies at then end of each turn for 3 turns."
        ]
    },
    {
        "heroId": "shadow_salvatore",
        "name": "Salvatore",
        "effects": [
            "Casts Full Removal on the caster. (Full Removal removes all status effects, stacks and Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleansable. )",
            "The caster shifts into Deranged Dire Ghost form for 5 turns.",
            "While in Deranged Dire Ghost form the caster automatically deal 350% damage and inflict 30 Insanity on a random enemy each turn.",
            "While in Deranged Dire Ghost form the caster and nearby allies can take damage from enemies whose element is stronger against them. (While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects.)",
            "Casting this Special Skill inflicts 25 Insanity on all allies except the caster."
        ]
    },
    {
        "heroId": "champions_satori",
        "name": "Satori",
        "effects": [
            "Deals 315% damage to all enemies.",
            "Deals 630% damage against characters that cleanse or dispel using Special Skills. (Only direct Dispel and Cleanse effects from Special Skills are considered. This excludes Remove effects, Passives, Minions, Family effects, Talents and Status effects.)",
            "The caster and nearby allies have 55% chance to drop any received damage to 1 for 4 turns. If this effect is dispelled, it dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "ninja_sawano",
        "name": "Sawano",
        "effects": [
            "1x Mana Charge",
            "* Recovers 25% health for all allies.",
            "* For the next 2 turns this character recovers 300 health to all allies after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "* Cleanses status ailments from the caster.",
            "2x Mana Charge",
            "* Recovers 30% health for all allies.",
            "* For the next 4 turns this character recovers 350 health to all allies after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "* Cleanses status ailments from the caster and nearby allies.",
            "3x Mana Charge",
            "* Recovers 35% health for all allies.",
            "* For the next 6 turns this character recovers 400 health to all allies after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "* Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "monster_hunter_sigyn",
        "name": "Sigyn",
        "effects": [
            "Deals 500% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "Reduces the mana of the enemies on the edges of the enemy formation by 50%.",
            "Summons a Bone Trap Fiend for the enemies on the edges of the enemy formation. The Fiend damages the enemy with 45% attack every turn. The damage increases by 8% each turn, up to a maximum 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health."
        ]
    },
    {
        "heroId": "ice_god_sini",
        "name": "Sini",
        "effects": [
            "Deals 280% damage to all enemies.",
            "Alters the power of all Ice shields on the board. When an attacking hero casts the special, the shields become enhanced with +54% attack. When a defending Hero casts the special, the shields becme weakened with -47% attack.",
            "Deals extra damage against Fire.",
            "Element Link gives all Ice allies +5% dodge chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "castle_stag_siofra",
        "name": "Siofra",
        "effects": [
            "Deals 290% damage to the target and nearby enemies.",
            "The attack bypasses defensive buffs. This includes counterattacks.",
            "The target and nearby enemies get -40% attack for 3 turns. The attack decreases by -5% each turn, up to -50%.",
            "The target and nearby enemies get -80% decrease for any healing received for 3 turns."
        ]
    },
    {
        "heroId": "s3_skadi",
        "name": "Skadi",
        "effects": [
            "Deals 220% damage to all enemies.",
            "The damage is increased by 50% per each defeated enemy.",
            "Stack (Max: 10): All enemies receive 30 Frost damage per each defeated enemy or enemy minion at the end of each turn.",
            "Stack (Max: 10): All enemies get -6% mana generation per each killed enemy or enemy minion."
        ]
    },
    {
        "heroId": "s3_skadi_costume_ravager",
        "name": "Skadi C1",
        "effects": [
            "Deals 320% damage to the target and nearby enemies.",
            "The damage is increased by 35% per each dead enemy.",
            "Stack (Max: 10): All enemies receive 54 Frost damage per each killed enemy or enemy Minion at the end of each turn.",
            "Stack (Max: 10): All enemies get -7% mana generation per each killed enemy or enemy Minion."
        ]
    },
    {
        "heroId": "construct_skarn",
        "name": "Skarn",
        "effects": [
            "Deals 185% damage to all enemies.",
            "All enemies get -30% defense against Ice for 3 turns.",
            "All enemies receive 378 Frost damage over 3 turns."
        ]
    },
    {
        "heroId": "slime_slimgo",
        "name": "Slimgo",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All enemies receive 627 Water damage over 3 turns.",
            "All enemies get -35% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "fables_snow_white",
        "name": "Snow White",
        "effects": [
            "Dispels and cleanses all buffs and status ailments from all allies and enemies.",
            "Deals 180% damage to all enemies.",
            "Deals additional 15% damage per removed status effect, up to 420% damage in total."
        ]
    },
    {
        "heroId": "fables_snow_white_costume_slayer",
        "name": "Snow White C1",
        "effects": [
            "Dispels and cleanses all buffs and status ailments from all allies and enemies.",
            "Deals 140% damage to all enemies.",
            "Deals additional 30% damage per removed status effect, up to 500% damage in total."
        ]
    },
    {
        "heroId": "s5_sobek",
        "name": "Sobek",
        "effects": [
            "Deals 290% damage to all enemies.",
            "The attack bypasses defensive buffs. This includes counterattacks."
        ]
    },
    {
        "heroId": "s5_sobek_costume_guardian",
        "name": "Sobek C1",
        "effects": [
            "Deals 280% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies receive 528 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "outlaw_song_jiang",
        "name": "Song Jiang",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 450% damage to the target and nearby enemies.",
            "Heals the caster and nearby allies for 20% of damage dealt.",
            "The target and nearby enemies get silenced for 4 turns.",
            "The target and nearby enemies get -30% defense for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_sorrow",
        "name": "Sorrow",
        "effects": [
            "Summons 2 Icebound Sickle Minions for the caster and nearby allies with 18% HP and 30% attack inherited from the caster.",
            "When summoned, the Icebound Sickle Minion gives +45% attack for its owner for as long as the owner has Icebound Sickle Minions. The attack increases by 5% each turn, up to 60%. This effect can't be cleansed.",
            "When the Icebound Sickle Minion is destroyed, it deals 135 damage to all enemies."
        ]
    },
    {
        "heroId": "astral_starwalker",
        "name": "Starwalker",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 200% damage to all enemies.",
            "Deals 450 extra damage if the target has boosted health.",
            "All enemies get -35% defense for 3 turns. If the effect is removed before the duration ends, the target with effect suffers 577 damage."
        ]
    },
    {
        "heroId": "ice_god_suzuna",
        "name": "Suzuna",
        "effects": [
            "Cleanses status ailments from the caster and nearby allies.",
            "The caster and nearby allies reflect status ailments and negative stacks for 3 turns. Status effects casts by characters, Minions and fiends on the same side cannot be reflected.",
            "The caster and nearby allies regenerate 855 HP over 3 turns.",
            "Element Link recovers 4% health for all Ice allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "tales2_svafa",
        "name": "Svafa",
        "effects": [
            "Attacks the target and nearby enemies with Frostfall Strike, dealing up to 1500 damage. Deals 40% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "The target and nearby enemies receive 705 Bleed damage over 3 turns.",
            "The target and nearby enemies get a Mark of Bleed for 3 turns. Whenever a marked target receives Bleed damage, they gain a stack (Max: 10). Each stack increases all damage the target receives by 5%."
        ]
    },
    {
        "heroId": "moth_tealmoine",
        "name": "Tealmoine",
        "effects": [
            "Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "The target falls into Deep Sleep and receives +80% increased damage while in Deep Sleep. (The character in Deep Sleep cannot gain mana or attack. The character in Deep Sleep is woken once it takes 750 damage. This effect is uncleasable.)",
            "Recovers 30% health for all allies."
        ]
    },
    {
        "heroId": "s2_tethys",
        "name": "Tethys",
        "effects": [
            "Deals 300% damage to target and nearby enemies.",
            "The target and nearby enemies receive 396 Water damage over 3 turns.",
            "All allies that are not of Ice element get +30% attack of 3 turns.",
            "All Ice allies get +60% attack for 3 turns."
        ]
    },
    {
        "heroId": "s2_tethys_costume_steel",
        "name": "Tethys C1",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 657 Water damage over 3 turns.",
            "All allies that are not of Ice element get +35% attack for 3 turns.",
            "All  Ice allies get +65% attack for 3 turns."
        ]
    },
    {
        "heroId": "tales1_thalassa",
        "name": "Thalassa",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Boosts health of all allies by 550. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 3 turns.",
            "2nd:",
            "* Boosts health of all allies by 650. Boosted health can exceed max HP.",
            "* The duration of status ailments is reset for all enemies.",
            "* All allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "tales1_thalassa_costume_crystals",
        "name": "Thalassa C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st",
            "* Boosts health of all allies by 500. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 3 turns.",
            "2nd",
            "* Boosts health of all allies by 800. Boosted health can exceed max HP.",
            "* The duration of status ailments is reset for all enemies.",
            "* All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "styx_thanatos",
        "name": "Thanatos",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Recovers 20% health for all allies.",
            "* All allies get +24% mana generation for 2 turns.",
            "2x Mana Charge:",
            "* Recovers 30% health for all allies.",
            "* Increases the mana of all allies by 10%.",
            "3x Mana Charge:",
            "* Recovers 50% health for all allies.",
            "* Increases the mana of all allies by 20%.",
            "* All allies get +40% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "circus_theobald",
        "name": "Theobald",
        "effects": [
            "Deals 405% damage to the enemy with the highest remaining HP. Deals 260% damage to all other enemies.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies' Nature Special Skills for 4 turns. Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.",
            "All allies get +45% attack, and a further increase of +20% every time they are hit, for 4 turns."
        ]
    },
    {
        "heroId": "royal_knight_commander",
        "name": "Thorne",
        "effects": [
            "Deals 490% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "royal_knight_commander_costume_king",
        "name": "Thorne C1",
        "effects": [
            "Deals 540% damage to the target.",
            "The caster gets +24% mana generation for 3 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "royal_knight_commander_costume_gryphon",
        "name": "Thorne C2",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 15%.",
            "The caster receives moderate amount of mana over 4 turns."
        ]
    },
    {
        "heroId": "royal_knight_commander_costume_cute",
        "name": "Thorne Toon",
        "effects": [
            "Deals 640% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage against Fire."
        ]
    },
    {
        "heroId": "royal_knight_commander_costume_glass",
        "name": "Thorne Glass",
        "effects": [
            "Deals 650% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "owl_timius",
        "name": "Timius",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Attacks the target and nearby enemies with Moonrise Strike, dealing up to 1500 damage. Deals 40% more damage if the target is Holy. This Special Skill never misses its targets.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "christmas_tinsel",
        "name": "Tinsel",
        "effects": [
            "Deals 340% damage to the target and nearby enemies.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "The target and nearby enemies get -14% defense, and a further -5% decrease per each Ice shield on the board for 4 turns, up to -54% defense.",
            "The target and nearby enemies get -10% accuracy, and a further -5% decrease per each Ice shield on the board for 4 turns, up to -50% accuracy."
        ]
    },
    {
        "heroId": "monster_hunter_tremor",
        "name": "Tremor",
        "effects": [
            "All allies recover 500 health after 3 turns. If this effect is removed before the duration ends, recovers 800 health instead.",
            "The caster deals 500 damage to all enemies after 3 turns. If this effect is removed or replaced before the duration ends, deals 800 damage instead.",
            "Stack (Max: 10): The caster gets +15% attack against the weaker element."
        ]
    },
    {
        "heroId": "mimic_troop_blue",
        "name": "Troop Mimic Ice",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana. (After a character has received 5 direct mana additions from Special Skills during a single turn, all subsequent direct mana additions done by Special Skills will have reduced power on that character.)",
            "All Ice allies get +100% normal attack for 4 turns. This effect can be active in additional to other effects that alter attack in general. Normal attacks can have a total maximum of +200% increased power while this effect is active.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "magic_ulius",
        "name": "Ulius",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Summons an Enchanted Sigil Minion for each ally with 15% HP and 20% attack inherited from the caster.",
            "* When summoned, the Enchanted Sigil Minion gives +20% mana generation for its owner for as long as the owner has Enchanted Sigil Minions. This effect can't be dispelled.",
            "2x Mana Charge:",
            "* Summons a Cursed Sigil Field to all enemies. The Fiend damages its target with 100% attack every turn.",
            "* The Cursed Sigil Fiend absorbs healing. It disappers after absorbing a healing amount equal to 60% of its target's max health.",
            "* When summoned, the Cursed Sigil Fiend give -38% mana generation for its owner for as long as the owner has Cursed Sigil Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "magic_ulius_costume_buccaneer",
        "name": "Ulius C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Summons an Enchanted Sigil Minion for each ally with 16% HP and 25% attack inherited from the caster.",
            "* When summoned, the Enchanted Sigil Minion gives small amount of mana for its owner for as long as the owner has Enchanted Sigil Minions. This effect can't be dispelled.",
            "2x Mana Charge:",
            "* Summons a Cursed Sigil Field to all enemies. The Fiend damages its target with 120% attack every turn.",
            "* The Cursed Sigil Fiend absorbs healing. It disappers after absorbing a healing amount equal to 70% of its target's max health.",
            "* The caster steals 45% of generated mana from all enemies. The effect lasts as long as the target has Cursed Sigil Fiends. This effect can't be cleansed, but it gets removed if the caster is defeated."
        ]
    },
    {
        "heroId": "ice_god_vela",
        "name": "Vela",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies receive 318 Water damage over 3 turns.",
            "All enemies get -34% attack for 3 turns.",
            "Deals extra damage against Fire.",
            "Element link gives all Ice allies +10% critical chance for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "faun_verity",
        "name": "Verity",
        "effects": [
            "Deals 350% damage to the target and nearby enemies.",
            "Enhanced Defense Ailment: The target and nearby enemies get -50% defense against Special Skills. This effect lasts until the enemy takes damage from Special Skill 3 times.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, the enemy gets -40% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "wild_cat_vernix",
        "name": "Vernix",
        "effects": [
            "If the enemy has the Frost status ailment:",
            "* Deals 310% damage to all enemies.",
            "* Reduces the mana to of all enemies by 5%.",
            "* All enemies receive 1630 Frost damage over 5 turns.",
            "Otherwise:",
            "* Deals 260% damage to all enemies.",
            "* All enemies receive 1275 Frost damage over 5 turns."
        ]
    },
    {
        "heroId": "gargoyle_vincent",
        "name": "Vincent",
        "effects": [
            "If the enemy has the Frost status ailment:",
            "* All enemies get -30% defense against Ice for 5 turns.",
            "* Deals 270% damage to all enemies.",
            "Otherwise:",
            "* Deals 200% damage to all enemies.",
            "* All enemies receive 705 Frost damage over 5 turns."
        ]
    },
    {
        "heroId": "monster_hunter_waterpipe",
        "name": "Waterpipe",
        "effects": [
            "Summons a Harpoon Sentry Minion for each ally with 12% HP and 20% attack inherited from the caster.",
            "Each hit from a Harpoon Sentry Minion reduces the mana of the target by -5% and gives the target the following status ailments:",
            "* The target gets -30% defense against Special Skills for 2 turns.",
            "* The target is immune to new status effect buffs for 2 turns."
        ]
    },
    {
        "heroId": "fox_whitefang",
        "name": "Whitefang",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 550% damage to the target.",
            "The target receives lasting 300 Frost damage per turn. This effect spreads to nearby enemies. (This effect lasts until it is cleansed or removed."
        ]
    },
    {
        "heroId": "outlaw_wu_song",
        "name": "Wu Song",
        "effects": [
            "Dispels buffs from all enemies.",
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 600% damage to the target.",
            "If the target is of Fire element, deals 500% damage to nearby enemies."
        ]
    },
    {
        "heroId": "fortune_yan_qing",
        "name": "Yan Qing",
        "effects": [
            "Deals 500% Spirit Slash damage to the enemies on the edges of the enemy formation. Spirit Slash safely removes buffs before dealing damage. (Damage is reduced by -60% for each removed buff. Undispellable buffs are also removed.)",
            "Nearby allies dance the Flowing Fortune Dance for 4 turns.",
            "Flowing Fortune Dance",
            "* +44% mana generation.",
            "* Dealt damage is increased by +20%. The effect is +30% against Fire targets.",
            "* Received damage is reduced by -20%. The effect is -30% against Nature Special Skills.",
            "* Fortune Dances stack with other Dance effects. (All existing status effects will be removed when Fortune Dance status effects is added, except other Dance status effects. Fortune Dances gives immunity to new status effects, except other Dance effects. Fortune Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "christmas_zappa",
        "name": "Zappa",
        "effects": [
            "Deals 350% damage to the target.",
            "Summons an Elf Minion with 10% HP and 10% attack inherited from the caster.",
            "The target receives 531 Frost damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "elemental_zengar",
        "name": "Zengar",
        "effects": [
            "Deals 200% damage to the target.",
            "If the target is of Fire element, deals 450% damage to nearby enemies.",
            "The target receives 447 Frost damage over 3 turns.",
            "If the target is of Fire element, nearby enemies receive 579 Frost damage over 3 turns."
        ]
    },
    {
        "heroId": "elemental_zengar_costume_farmer",
        "name": "Zengar C1",
        "effects": [
            "Deals 450% damage to the target.",
            "If the target is of Fire element, deals 400% damage to nearby enemies.",
            "The target receives 1020 Frost damage over 3 turns.",
            "If the target is of Fire element, nearby enemies receive 693 Frost damage over 3 turns.",
            "Heals the caster by 30% of damage dealt."
        ]
    },
    {
        "heroId": "outlaw_zheng_tianshou",
        "name": "Zheng Tianshou",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 470% damage to all enemies.",
            "Safely dispels status effect buffs from all enemies. (Safe dispel bypasses secondary effects, such as damage on removal, from the removed status effect buffs. External status effects such as passive skills and family effects can still activate.)",
            "All allies reduce all received damage by -30% , with a further -2% reduction per each removed status effect up to -50% damage reduction in total, for 5 turns."
        ]
    },
    {
        "heroId": "ninja_zircon",
        "name": "Zircon",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "1x Mana Charge:",
            "- All allies regenerate 144 boosted health over 2 turns. Boosted health can exceed max HP.",
            "- All allies get +24% defense, and a further 5% increase every time they are hit during 2 turns, up to +49% defense.",
            "- All allies are immune to buff dispels and reallocations for 2 turns.",
            "2x Mana Charge:",
            "- All allies regenerate 504 boosted health over 3 turns. Boosted health can exceed max HP.",
            "- All allies get +34% defense, and a further 5% increase every time they are hit during 3 turns, up to +59% defense.",
            "- All allies are immune to buff dispels and reallocations for 3 turns.",
            "3x Mana Charge:",
            "- All allies regenerate 980 boosted health over 4 turns. Boosted health can exceed max HP.",
            "- All allies get +54% defense, and a further 5% increase every time they are hit during 4 turns, up to +79% defense.",
            "- All allies are immune to buff dispels and reallocations for 4 turns."
        ]
    },
    {
        "heroId": "forest_female_warrior",
        "name": "Aife",
        "effects": [
            "Deals 275% damage to the target"
        ]
    },
    {
        "heroId": "forest_woodsman",
        "name": "Derric",
        "effects": [
            "Deals 255% damage to the target"
        ]
    },
    {
        "heroId": "forest_thug",
        "name": "Brogan",
        "effects": [
            "Deals 200% damage to the target and minor damage to nearby enemies"
        ]
    },
    {
        "heroId": "forest_female_illusionist",
        "name": "Jenneh",
        "effects": [
            "Deals 245% damage to the target"
        ]
    },
    {
        "heroId": "goblin_archer",
        "name": "Needler",
        "effects": [
            "Deals 250% damage to the target"
        ]
    },
    {
        "heroId": "masquerade_alessia",
        "name": "Alessia",
        "effects": [
            "Deals 250% damage to the target and nearby enemies.",
            "Reduces max health of the target and nearby enemies by 204 over 3 turns. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of max health. Any boosted health is reduced by an additional 68 per turn."
        ]
    },
    {
        "heroId": "mahayoddha_ali",
        "name": "Ali",
        "effects": [
            "Deals 235% damage to the target.",
            "Growth Boon: Deals 1x extra damage for each point of modified attack. (Extra damage is based on the modified attack on caster, when damage is dealt. Up to maximum 300 additional extra damage. Status effects affecting damage dealt do affect the extra damage. Defense stats does not affect the extra damage. Status effect affecting attack stat do not affect the extra damage.)",
            "The target gets -44% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "forest_female_spirit",
        "name": "Belith",
        "effects": [
            "Recovers 32% health for all allies.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_female_spirit_costume_autumn",
        "name": "Belith C1",
        "effects": [
            "All allies regenerate 459 HP over 3 turns.",
            "All allies are immune to buff dispells for 3 turns."
        ]
    },
    {
        "heroId": "forest_female_spirit_costume_cute",
        "name": "Belith Toon",
        "effects": [
            "Recovers 35% health for all allies.",
            "All allies get +34% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Nature characters.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_female_spirit_costume_glass",
        "name": "Belith Glass",
        "effects": [
            "Recovers 36% health for all allies.",
            "All Nature allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_archer",
        "name": "Berden",
        "effects": [
            "Deals 325% damage to the target.",
            "The target gets -34% attack for 6 turns."
        ]
    },
    {
        "heroId": "forest_archer_costume_warrior",
        "name": "Berden C1",
        "effects": [
            "Deals 325% damage to the target.",
            "The target gets -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "forest_archer_costume_cute",
        "name": "Berden Toon",
        "effects": [
            "Deals 330% damage to the target.",
            "The target gets -24% attack for 6 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "forest_archer_costume_glass",
        "name": "Berden Glass",
        "effects": [
            "Deals 340% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target gets -29% attack for 6 turns."
        ]
    },
    {
        "heroId": "forest_female_druid",
        "name": "Brienne",
        "effects": [
            "All allies get +45% attack and a further 20% increase every time they are hit during 5 turns, up to +145% attack"
        ]
    },
    {
        "heroId": "forest_female_druid_costume_native",
        "name": "Brienne C1",
        "effects": [
            "All enemies get -41% defense and a further -4% decrease every time they are hit for 4 turns, down to -65% defense."
        ]
    },
    {
        "heroId": "forest_female_druid_costume_cute",
        "name": "Brienne Toon",
        "effects": [
            "All allies get +45% attack, and a further 20% increase every time they are hit during 5 turns, up to +145% attack. This status effect is undispellable and lasts 2 turns longer on Nature characters."
        ]
    },
    {
        "heroId": "forest_female_druid_costume_glass",
        "name": "Brienne Glass",
        "effects": [
            "All allies get +50% attack, and a further 20% increase every time they are hit during 5 turns, up to +150% attack.",
            "All Nature allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "forest_female_druid_costume_stylish",
        "name": "Brienne Stylish",
        "effects": [
            "All allies get +55% attack, and a further 20% increase every time they are hit during 5 turns, up to +155% attack.",
            "All allies regenerate 300 HP over 5 turns."
        ]
    },
    {
        "heroId": "s3_by_ulf",
        "name": "By-Ulf",
        "effects": [
            "The caster and nearby allies get +48% attack for 4 turns.",
            "The caster and nearby allies get +46% defense for 4 turns.",
            "The caster and nearby allies regenerate 612 HP over 4 turns.",
            "After 4 turns the caster gets status ailments.",
            "The status ailments that the caster gets after 4 turns are:",
            "The caster gets -34% attack for 4 turns. This effect can't be cleansed.",
            "The caster gets -34% defense for 4 turns. This effect can't be cleansed.",
            "The caster gets -24% mana generation for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "goblin_fighter",
        "name": "Carver",
        "effects": [
            "Deals 125% damage to all enemies.",
            "Reduces the mana of all enemies by 16%."
        ]
    },
    {
        "heroId": "goblin_fighter_costume_evil",
        "name": "Carver C1",
        "effects": [
            "Deals 125% damage to all enemies.",
            "All enemies get -24% mana generation for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "goblin_fighter_costume_cute",
        "name": "Carver Toon",
        "effects": [
            "Deals 155% damage to all enemies.",
            "Reduces the mana of all enemies by 10%.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "goblin_fighter_costume_glass",
        "name": "Carver Glass",
        "effects": [
            "Deals 165% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Reduces the mana of all enemies by -15%."
        ]
    },
    {
        "heroId": "astral_dwarf_chires",
        "name": "Chires",
        "effects": [
            "Boosts health for the caster and nearby allies by 350. Boosted health can exceed max HP.",
            "Growth: the caster and nearby allies get 50 attack and 50 defense."
        ]
    },
    {
        "heroId": "magic_dolgoon",
        "name": "Dolgoon",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All allies become Soul Connected for 3 turns. Soul Connected allies share received damage.",
            "* All allies get +63% defense for 3 turns.",
            "2x Mana Charge:",
            "* All enemies become Soul Connected for 5 turns. Soul Connected enemies share received damage.",
            "* All enemies get -56% defense for 5 turns."
        ]
    },
    {
        "heroId": "fleur_eumachius",
        "name": "Eumachius",
        "effects": [
            "Deals 475% damage to the enemy with the highest remaining HP.",
            "The enemy that had the highest remaining HP is marked with a Blood Lily. (A memento from the Fleur de Sang family. This effect can stack (max: 10). Each stack of the Blood Lily effect deals 4 damage to the target per turn. The Fleur de Sang characters on the opposing team gain the amount of damage dealt as health, divided equally between them. Each stack of the Blood Lily effect also increases the damage that members of the Fleur de Sang family deal to the target. The Blood Lily stacks can be avoided or removed with various effect that affect stacks.)"
        ]
    },
    {
        "heroId": "s5_faiez",
        "name": "Faiez",
        "effects": [
            "Boost health of all allies by 350. Boosted health can exceed max HP.",
            "All allies are immune to new status ailments for 4 turns.",
            "All allies get +30% defense for 4 turns"
        ]
    },
    {
        "heroId": "s5_faiez_costume_miner",
        "name": "Faiez C1",
        "effects": [
            "Boost health of all allies by 300. Boosted health can exceed max HP.",
            "All allies are immune to new status ailments for 4 turns.",
            "All allies get +40% defense for 4 turns."
        ]
    },
    {
        "heroId": "owl_featherino",
        "name": "Featherino",
        "effects": [
            "Attacks the target and nearby enemies with Moonrise Strike, dealing up to 700 damage. Deals 20% more damage if the target is of the Holy element. This Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "wild_cat_ferni",
        "name": "Ferni",
        "effects": [
            "Deals 300% Clawing damage to the target. (Deals 450% damage against enemies with any defensive buffs, Minions or Mega Minions. Enemies with any defensive buffs, Minions or Mega Minions receive -35% defense for 6 turns.)",
            "The target receives 600 Surge Bleed damage over 6 turns. (If a target already has this effect, the duration will be refreshed and the damage will be increased by 300. Max total damage 1200)"
        ]
    },
    {
        "heroId": "monster_hunter_fianna",
        "name": "Fianna",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "Summons a Bone Trap Fiend for the target and nearby enemies. The Fiend damages the enemy with 45% attack each turn. The damage increases by 8% each turn, up to a maximum of 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health."
        ]
    },
    {
        "heroId": "forest_friar",
        "name": "Friar Tuck",
        "effects": [
            "Recovers 37% health for the caster and nearby allies.",
            "The caster and nearby allies get +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "forest_friar_costume_explorer",
        "name": "Friar Tuck C1",
        "effects": [
            "Recovers 22% health for all allies.",
            "All allies get +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "forest_friar_costume_cute",
        "name": "Friar Tuck Toon",
        "effects": [
            "Recovers 40% health for the caster and nearby allies.",
            "The caster and nearby allies get +12% mana generation for 3 turns. This status effect is undispellable and lasts 2 turns longer on Nature characters."
        ]
    },
    {
        "heroId": "forest_friar_costume_glass",
        "name": "Friar Tuck Glass",
        "effects": [
            "Recovers 42% health for the caster and nearby allies.",
            "The caster and nearby allies get +15% mana generation for 3 turns.",
            "All Nature allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "journey_general_yin",
        "name": "General Yin",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 180% damage to all enemies.",
            "Deals additional 8% damage per removed status effect, up to 276% damage in total."
        ]
    },
    {
        "heroId": "fables_gnomer",
        "name": "Gnomer",
        "effects": [
            "Deals 250% damage to the target.",
            "The target receives 94 Bleed damage over 2 turns."
        ]
    },
    {
        "heroId": "halloween_goopy",
        "name": "Goopy",
        "effects": [
            "Deals 125% damage to all enemies.",
            "Deals additional 12% damage per each Nature shield on the board, up to 221% damage in total.",
            "All enemies get -24% mana generation, and a further 2% decrease per each Nature shield on the board for 3 turns, up to -40% mana generation."
        ]
    },
    {
        "heroId": "s4_gramps",
        "name": "Gramps",
        "effects": [
            "Each fallen ally has a 33% chance to get revived with 23% HP.",
            "All allies receive a small ammount of mana over 4 turns."
        ]
    },
    {
        "heroId": "s4_gramps_costume_gardener",
        "name": "Gramps C1",
        "effects": [
            "Each fallen ally has a 33% chance to get revived with 23% HP.",
            "All allies regenerate 324 HP over 4 turns."
        ]
    },
    {
        "heroId": "s3_grevle",
        "name": "Grevle",
        "effects": [
            "Boosts health of all allies by 250. Boosted health can exceed max HP.",
            "All allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "sand_horse",
        "name": "Hisan",
        "effects": [
            "Deals 280% damage to the target.",
            "The target receives 104 damage over 4 turns.",
            "The target gets -100% increase for any healing received for 2 turns. This effect can't be cleansed.",
            "Cleanses status ailments from the caster."
        ]
    },
    {
        "heroId": "lizardman_warrior",
        "name": "Isshtak",
        "effects": [
            "Deals 260% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "lizardman_warrior_costume_dinosaur",
        "name": "Isshtak C1",
        "effects": [
            "Deals 185% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -44% defense for 4 turns."
        ]
    },
    {
        "heroId": "lizardman_warrior_costume_cute",
        "name": "Isshtak Toon",
        "effects": [
            "Deals 290% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "lizardman_warrior_costume_glass",
        "name": "Isshtak Glass",
        "effects": [
            "Deals 300% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "forsaken_jax",
        "name": "Jax",
        "effects": [
            "Deals 175% damage to the enemies on the edges of the enemy formation and inflicts 15 Insanity on them. If there is only one enemy the damage and Insanity is doubled.",
            "Inflicts 35 Instanity to the caster."
        ]
    },
    {
        "heroId": "kingdom_jing",
        "name": "Jing",
        "effects": [
            "Deals 340% damage to the target.",
            "Summons a Shu Soldier Minion with 16% HP and 17% attack inherited from the caster.",
            "When summoned, the Shu Soldier Minion gives its owner the ability to counterattack with 60% of the damage received for as long as the owner has a Shu Soldier Minion. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "beauty_beast_lucas",
        "name": "Lucas",
        "effects": [
            "If the caster has 35 or more Humility:",
            "* Deals 270% damage to the target and minor damage to nearby enemies.",
            "* The caster counterattacks with 90% of the damage received for 4 turns.",
            "Otherwise:",
            "* Deals 250% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "s2_merman",
        "name": "Mnesseus",
        "effects": [
            "Deals 320% damage to the target.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "s2_merman_costume_leutenant",
        "name": "Mnesseus C1",
        "effects": [
            "Deals 320% damage to the target.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s2_chameleon_bruiser",
        "name": "Muggy",
        "effects": [
            "All allies become Bruiser Bros for 4 turns. If an ally is defeated while being a Bruiser Bro they will be reborn as a Chameleon with:",
            "* 66% health.",
            "* Increased attack.",
            "* Decreased defense.",
            "* Devastating Special Skill: Fierce Slash.",
            "* This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "fox_nettletail",
        "name": "Nettletail",
        "effects": [
            "Boosts health of all allies by 275. Boosted health can exceed max HP.",
            "All allies get lasting +25% defense. (This effect lasts until it is dispelled, replaced or removed.)"
        ]
    },
    {
        "heroId": "slayer_noril",
        "name": "Noril",
        "effects": [
            "Deals 240% damage to the target.",
            "Deals 390% damage to a random different enemy. Deals extra damage if the target is ice.",
            "Stack (Max: 10): The caster gets +5% mana generation",
            "Stack (Max: 10): The caster recovers 5 HP each turn"
        ]
    },
    {
        "heroId": "magic_roxia",
        "name": "Roxia",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 175% damage to the target.",
            "* The target receives 35% damage for all the damage their allies receive for 3 turns.",
            "2x Mana Charge:",
            "* All allies get 50% chance to bypass defensive buffs with their attacks for 5 turns. Defensive buffs include counterattacks.",
            "* All allies get +30% critical chance for 5 turns."
        ]
    },
    {
        "heroId": "wonderland_bear",
        "name": "Shrubbear",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns",
            "The caster gets +63% defense for 4 turns",
            "the caster gets +74% defense against Special Skills for 4 turns"
        ]
    },
    {
        "heroId": "circus_whacker",
        "name": "Whacker",
        "effects": [
            "Deals 315% damage to the target.",
            "The enemy with the highest base attack gets -54% attack for 3 turns."
        ]
    },
    {
        "heroId": "garrison_william",
        "name": "William",
        "effects": [
            "Deals 210% damage to the target and nearby enemies.",
            "The caster and nearby allies get +36% defense for 3 turns.",
            "The caster and nearby allies get +36% critical chance for 3 turns."
        ]
    },
    {
        "heroId": "castle_bear_yona",
        "name": "Yona",
        "effects": [
            "Draw a card for a special effect:",
            "Gentle Paw",
            "* Boosts health for all allies by 300, Boosted health can exceed max HP.",
            "* All allies get +20% defense for 3 turns. The defense increases by 10% each turn, up to +40%.",
            "Deadly Claw",
            "* Reduces the max health of all enemies by 300. This effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 300.)",
            "* All enemies get -20% defense for 3 tuns. The defense decreases by -10% each turn, up to -40%."
        ]
    },
    {
        "heroId": "bard_zarel",
        "name": "Zarel",
        "effects": [
            "Deals 260% damage to all enemies.",
            "All enemies get -34% attack for 5 turns.",
            "All enemies can't get their status ailments cleansed from Special Skill for 5 turns."
        ]
    },
    {
        "heroId": "valentines_zarola",
        "name": "Zarola",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "The less mana the enemies have, the more damage they will receive, up to 300%."
        ]
    },
    {
        "heroId": "valentines_zarola_costume_cowboy",
        "name": "Zarola C1",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "The less mana the enemies have, the more damage they will receive, up to 330%.",
            "The target and nearby enemies get -34% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "elemental_alfie",
        "name": "Alfie",
        "effects": [
            "Deals 200% damage to all enemies.",
            "All Ice enemies get -30% accuracy for 4 turns. Chance to miss apllies to  offensive Special Skills.",
            "All Holy enemies get -30% mana generation for 4 turns.",
            "All Dark enemies get -30% defense for 4 turns.",
            "All Fire enemies get -30% attack for 4 turns."
        ]
    },
    {
        "heroId": "s3_almur",
        "name": "Almur",
        "effects": [
            "Deals 150% damage to the target and nearby enemies.",
            "Reduces max health from the target and nearby enemies by 75. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 75.",
            "The target and nearby enemies get -54% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "s3_almur_costume_lord",
        "name": "Almur C1",
        "effects": [
            "Deals 290% damage to the target.",
            "Reduces the mana of teh target by 20%.",
            "The target gets -58% defense against Nature for 3 turns."
        ]
    },
    {
        "heroId": "magic_anton",
        "name": "Anton",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 250% damage to all enemies. Each hit has 60% accuracy.",
            "* All hit enemies receive 92 Poison damage over 2 turns.",
            "2x Mana Charge:",
            "* Each fallen ally has a 44% chance to get revived with 40% HP.",
            "* All allies regenerate 405 HP over 5 turns"
        ]
    },
    {
        "heroId": "styx_brontes",
        "name": "Brontes",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Recovers 25% health for the caster and nearby allies.",
            "* The caster and nearby allies get +24% mana generation for 2 turns.",
            "2x Mana Charge:",
            "* Recovers 35% health for the caster and nearby allies.",
            "* Increases the mana of the caster and nearby allies by 10%.",
            "3x Mana Charge:",
            "* Recovers 55% health for the caster and nearby allies.",
            "* Increases the mana of the caster and nearby allies by 30%.",
            "* The caster and nearby allies get +40% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "s3_brynhild",
        "name": "Brynhild",
        "effects": [
            "Recovers 37% health for the caster and nearby allies.",
            "The caster and nearby allies are immune to buff dispels for 3 turns.",
            "The caster and nearby allies get +74% defense against Special Skills for 3 turns.",
            "The caster and nearby allies get +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "christmas_elf",
        "name": "Buddy",
        "effects": [
            "Deals 205% damage to the target and nearby enemies.",
            "Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster.",
            "The target and nearby enemies get -24% attack for 3 turns.",
            "The target and nearby enemies get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "christmas_elf_costume_gift_bookkeper",
        "name": "Buddy C1",
        "effects": [
            "Deals 220% damage to the target and nearby enemies.",
            "Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster.",
            "The target and nearby enemies get -18% attack for 3 turns.",
            "The target and nearby enemies get -38% defense  for 3 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "elven_captain",
        "name": "Caedmon",
        "effects": [
            "Deals 345% damage to the target.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "elven_captain_costume_mask",
        "name": "Caedmon C1",
        "effects": [
            "Deals 345% damage to the target.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "elven_captain_costume_cavalier",
        "name": "Caedmon C2",
        "effects": [
            "Deals 275% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns.",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "elven_captain_costume_cute",
        "name": "Caedmon Toon",
        "effects": [
            "Deals 350% damage to the target.",
            "Deals extra damage against Ice.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "elven_captain_costume_glass",
        "name": "Caedmon Glass",
        "effects": [
            "Deals 360% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -34% attack for 3 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "elven_captain_costume_stylish",
        "name": "Caedmon Stylish",
        "effects": [
            "Deals 370% damage to the target.",
            "If the target has less than 50% health remaining, deals 410% damage instead.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "castle_raven_franz",
        "name": "Franz",
        "effects": [
            "Deals 215% damage to all enemies.",
            "All damage all enemies receive is increased by +50% for 6 turns.",
            "All enemies are immune to new status effect buffs for 6 turns."
        ]
    },
    {
        "heroId": "slime_fruitio",
        "name": "Fruitio",
        "effects": [
            "Deals 380% damage to tha target.",
            "After 1 turn the target gets Paralyzed for 4 turns. (Paralyzed enemies can't attack or gain man and receive +50% increased damage. Once Paralyzed, the effect can't be cleansed. Bosses, Titans and Mythic Titans are not affected by this status effect.)"
        ]
    },
    {
        "heroId": "s2_atlantean_robot",
        "name": "Gadeirus",
        "effects": [
            "Deals 165% damage to the target and minor damage to nearby enemies.",
            "The caster and nearby allies get +48% attack for 4 turns.",
            "The caster and nearby allies regenerate 617 HP over 4 turns."
        ]
    },
    {
        "heroId": "s2_atlantean_robot_costume_sentinel",
        "name": "Gadeirus C1",
        "effects": [
            "Deals 130% damage to all enemies.",
            "All allies get +48% attack for 4 turns.",
            "All allies regenerate 480 boosted health over 4 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "s2_chameleon_chief",
        "name": "Gobbler",
        "effects": [
            "Destroys all Minions from all enemies and damages all Mega Minions.",
            "Deals 170% damage to all enemies.",
            "All allies recover 80 HP for each destroyed Minion."
        ]
    },
    {
        "heroId": "s2_chameleon_chief_costume_heavyweight",
        "name": "Gobbler C1",
        "effects": [
            "Steals Minions from the target.",
            "Deals 310% damage to the target.",
            "The target receives 213 Sand damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "fables_hansel",
        "name": "Hansel",
        "effects": [
            "Deals 255% damage to the target.",
            "Automatically does 146 damage to the target and consumes 50% mana from the target when the target's mana is full for 3 turns.",
            "The caster gets +74% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "fables_hansel_costume_vampire_hunter",
        "name": "Hansel C1",
        "effects": [
            "Deals 209% damage to the target.",
            "Automatically does 341 damage to the target and consumes 50% mana from the target when the target's mana is full for 3 turns.",
            "The caster gets +84% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "rabbit_green",
        "name": "Jack O'Hare",
        "effects": [
            "Deal 180% damage to all enemies",
            "The caster gets -20% defense for 3 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "rabbit_green_costume_egg_hunter",
        "name": "Jack O'Hare C1",
        "effects": [
            "Deals 230% damage to the target.",
            "The attack chains through all enemies who are adjacent to any hit enemy.",
            "All allies except the caster get -20% attack for 3 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "moth_joyvert",
        "name": "Joyvert",
        "effects": [
            "Deals 350% damage to the target.",
            "The target falls into Deep Sleep and receives +80% increased damage while in Deep Sleep. (The character in Deep Sleep cannot gain mana or attack. The character in Deep Sleep is woken once it takes 750 damage. This effect is uncleasable.)"
        ]
    },
    {
        "heroId": "gargoyle_kalo",
        "name": "Kalo",
        "effects": [
            "Deals 70% damage to all enemies.",
            "If no allies have fallen, deals twice the amount of damage to all enemies.",
            "Cast the Special Skills of all defeated allies.",
            "This Special Skill can't be copied."
        ]
    },
    {
        "heroId": "lizardman_trapper",
        "name": "Kashhrek",
        "effects": [
            "Recovers 45% health for the caster and nearby allies.",
            "The caster and nearby allies get +94% defense against Fire for 3 turns."
        ]
    },
    {
        "heroId": "lizardman_trapper_costume_shaman",
        "name": "Kashhrek C1",
        "effects": [
            "Boosts health of the caster and nearby allies by 450. Bosted health can exceed max HP.",
            "The caster and nearby allies get +64% defense against Fire for 3 turns."
        ]
    },
    {
        "heroId": "lizardman_trapper_costume_fisher",
        "name": "Kashhrek C2",
        "effects": [
            "The caster and nearby allies regenerate 459 HP over 3 turns.",
            "The caster and nearby allies get +54% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "lizardman_trapper_costume_cute",
        "name": "Kashhrek Toon",
        "effects": [
            "Recovers 48% health for the caster and nearby allies.",
            "The caster and nearby allies get +84% defense against Fire for 3 turns. For all Nature characters, this status effect becomes undispellable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "lizardman_trapper_costume_glass",
        "name": "Kashhrek Glass",
        "effects": [
            "Recovers 49% health for the caster and nearby allies.",
            "All Nature allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "The caster and nearby allies get +88% defense against Fire for 3 turns."
        ]
    },
    {
        "heroId": "fortune_ling_long",
        "name": "Ling Long",
        "effects": [
            "Deals 400% Spirit Slash damage to the target. Spirit Slash safely removes buffs before dealing damage. (Damage is reduced by -40% for each removed buff. Undispellable buffs are also removed.)",
            "Nearby allies dance the Vibrant Fortune Dance for 4 turns.",
            "Vibrant Fortune Dance",
            "* +40% defense.",
            "* Dealt damage is increased by +15%. The effect is +20% against Ice targets.",
            "* Received damage is reduced by -15%. The effect is -20% against Fire Special Skills.",
            "* Fortune Dances stack with other Dance effects. (All existing status effects will be removed when Fortune Dance status effects is added, except other Dance status effects. Fortune Dances gives immunity to new status effects, except other Dance effects. Fortune Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "astral_lionstring",
        "name": "Lionstring",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deal 245% damage to the target and minor damage to nearby enemies.",
            "The caster steals 50% of any healing applied to the target and nearby enemies in 2 turns.",
            "The caster and nearby allies get +45% chance to dodge Special Skills that deal damage for 2 turns."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior",
        "name": "Little John",
        "effects": [
            "Deals 185% damage to all enemies.",
            "All enemies get -64% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior_costume_camouflage",
        "name": "Little John C1",
        "effects": [
            "Deals 185% damage to all enemies",
            "The caster and nearby allies have from +30% to +70% chance of dodging Special Skills that deal damage.  The higher the damage from the Special Skill is, the higher the chance to dodge it. Each dodge gives +24% mana to the target. The effect lasts for 4 turns."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior_costume_highlander",
        "name": "Little John C2",
        "effects": [
            "Deals 185% damage to all enemies.",
            "All allies get +33% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior_costume_cute",
        "name": "Little John Toon",
        "effects": [
            "Deals 215% damage to all enemies.",
            "All enemies get -54% mana generation for 3 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior_costume_glass",
        "name": "Little John Glass",
        "effects": [
            "Deals 225% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -59% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "circus_marcel",
        "name": "Marcel",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "All allies with a cleansable status ailment that affects attack get +50% attack for 3 turns.",
            "The target and nearby enemies get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "forest_mage",
        "name": "Melendor",
        "effects": [
            "Recovers 42% health for all allies.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_mage_costume_white",
        "name": "Melendor C1",
        "effects": [
            "All allies regenerate 609 HP over 3 turns.",
            "All allies get +46% defense for 3 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_mage_costume_party",
        "name": "Melendor C2",
        "effects": [
            "All allies regenerate 609 HP over 3 turns.",
            "All allies get +50% attack for 3 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_mage_costume_cute",
        "name": "Melendor Toon",
        "effects": [
            "Recovers 45% health for all allies.",
            "All allies get +34% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Nature characters.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_mage_costume_glass",
        "name": "Melendor Glass",
        "effects": [
            "Recovers 46% health for all allies.",
            "All Nature allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "forest_mage_costume_stylish",
        "name": "Melendor Stylish",
        "effects": [
            "Recovers 54% health for the ally with the lowest remaining HP. All other allies recover 47% health.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "kalevala_mielikki",
        "name": "Mielikki",
        "effects": [
            "Summons a Sprite of the Forest Minion for all allies with 15% HP and 10% attack inherited from the caster.",
            "The Sprite of the Forest Minion gives +20% mana generation for its owner for as long as the owner has the Sprite of the Forest Minions. This effect can't be dispelled.",
            "All enemies get -24% attack for 4 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns."
        ]
    },
    {
        "heroId": "kalevala_mielikki_costume_bear_protector",
        "name": "Mielikki C1",
        "effects": [
            "Summons a Sprite of the Forest Minion for all allies with 18% HP  and 8% attack inherited from the caster.",
            "When summoned, the Sprite of the Forest Minion gives +24% mana generation for its owner for as long as the owner has Sprite of the Forest Minions.  This effect can't be dispelled.",
            "All enemies get -26% attack for 4 turns. Against Fire characters,  this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "tales1_mulgog",
        "name": "Mulgog",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 230% damage to target and nearby enemies.",
            "* Reduces the mana of the target and nearby enemies by 10%.",
            "2nd:",
            "* Deals 260% damage to target and nearby enemies.",
            "* Reduces the mana of the target and nearby enemies by 15%.",
            "* All enemies receive 570 Poison damage over 5 turns. The caster absorbs 50% of dealt Posion damage as health."
        ]
    },
    {
        "heroId": "tales1_mulgog_costume_bard",
        "name": "Mulgog C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 220% damage to target and nearby enemies.",
            "* Reduces the mana of the target and nearby enemies by 8%.",
            "2nd:",
            "* Deals 280% damage to target and nearby enemies.",
            "* Reduces the mana of the target and nearby enemies by 18%.",
            "* All enemies receive 665 Poison damage over 5 turns. The caster absorbs 55% of dealt Posion damage as health."
        ]
    },
    {
        "heroId": "faun_myrtle",
        "name": "Myrtle",
        "effects": [
            "Deals 280% damage to the target and minor damage to nearby enemies.",
            "Enhanced Defense Ailment: The target and nearby enemies get -40% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill once.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, the enemy receives 630 Poison Damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "monster_hunter_numbskull",
        "name": "Numbskull",
        "effects": [
            "Deals 150% damage to all enemies.",
            "Summons a Bone Skull Minion for each ally with 12% HP and 20% attack  inherited from the caster.",
            "When the Bone Skull Minion is destroyed, it deals 85 damage to all enemies."
        ]
    },
    {
        "heroId": "slayer_orla",
        "name": "Orla",
        "effects": [
            "Deals 230% damage to the target.",
            "Deals 450% damage if the target has less than 50% health remaining.",
            "The target and nearby enemies get -24% mana generation for 3 turns.",
            "Stack +2 (Max: 10): The caster gets +10% mana generation.",
            "Stack (Max: 10): The caster recovers 10 HP each turn."
        ]
    },
    {
        "heroId": "pirate_cabin_boy",
        "name": "Peters",
        "effects": [
            "Deals 320% damage to the target",
            "The target gets silenced for 3 turns"
        ]
    },
    {
        "heroId": "pirate_cabin_boy_costume_paper",
        "name": "Peters C1",
        "effects": [
            "Deals 320% damage to the target.",
            "The target gets silenced for 3 turns.",
            "The target gets -24% defense for 3 turns."
        ]
    },
    {
        "heroId": "s5_ptolemy",
        "name": "Ptolemy",
        "effects": [
            "Recovers 30% health for all allies.",
            "The caster and nearby allies are immune to new status ailments for 3 turns, and recover 175 health for each attempted status ailments."
        ]
    },
    {
        "heroId": "s5_ptolemy_costume_log",
        "name": "Ptolemy C1",
        "effects": [
            "Recovers 35% health for all allies.",
            "The caster and nearby allies are immune to new status ailments for 3 turns, and recover 100 health for each attempted status ailment."
        ]
    },
    {
        "heroId": "castle_stag_raleigh",
        "name": "Raleigh",
        "effects": [
            "Boosts health of all allies by 500. Boosted health can exceed max HP.",
            "All allies get +30% attack for 5 turns. The attack increases by 5% each turn up to 50%.",
            "All allies get +24% mana generation for 5 turns."
        ]
    },
    {
        "heroId": "goblin_mage",
        "name": "Skittleskull",
        "effects": [
            "Deals 185% damage to all enemies.",
            "All enemies get -34% attack for 6 turns."
        ]
    },
    {
        "heroId": "goblin_mage_costume_candy",
        "name": "Skittleskull C1",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All enemies get -39% attack for 6 turns."
        ]
    },
    {
        "heroId": "goblin_mage_costume_toad",
        "name": "Skittleskull C2",
        "effects": [
            "Deals 195% damage to all enemies.",
            "All enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "goblin_mage_costume_cute",
        "name": "Skittleskull Toon",
        "effects": [
            "Deals 215% damage to all enemies.",
            "All enemies get -24% attack for 6 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "goblin_mage_costume_glass",
        "name": "Skittleskull Glass",
        "effects": [
            "Deals 225% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -30% attack for 6 turns."
        ]
    },
    {
        "heroId": "tales2_snorri",
        "name": "Snorri",
        "effects": [
            "Attacks the target with Frostfall Strike, dealing up to 1020 damage. Deals 30% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "The target get Soul Bound for 3 turns. This effect can't be cleansed. (This effect will always bypass reflection.)",
            "All damage received by the caster is also dealt to all Soul Bound enemies. (Damage is shared between all Soul Bound enemies. This effect will not share damage coming from other shared damage sources or counterattacks.)"
        ]
    },
    {
        "heroId": "s4_tettukh",
        "name": "Tettukh",
        "effects": [
            "Deals 320% damage to the target",
            "The target gets silenced for 4 turns",
            "The target receives 100 Poison damage over 4 turns"
        ]
    },
    {
        "heroId": "s4_tettukh_costume_cheerleader",
        "name": "Tettukh C1",
        "effects": [
            "Deals 280% damage to the target.",
            "The target gets silence for 4 turns.",
            "The target receives 228 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "musketeer_villiers",
        "name": "Villiers",
        "effects": [
            "Deals 165% damage to the target and nearby enemies.",
            "Summon a Spy Fiend for the target and nearby enemies. The Fiend damages the enemy with 45% attack every turn.",
            "The Spy Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "At the end of each turn, the Spy Fiend steals one of its target's dispellable buffs and gives it to one character on the opposite team.",
            "The caster regenerates 324 HP over 4 turns."
        ]
    },
    {
        "heroId": "musketeer_villiers_costume_jester",
        "name": "Villiers C1",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "Summons a Spy Fiend for the target and nearby enemies. The Fiend damages the enemy with 45% attack every turn.",
            "The Spy Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "At the end of each turn, the Spy Fiend steals one of its target's dispellable buffs and gives it to one character on the opposite team.",
            "The caster regenerates 300 boosted health over 3 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "castle_raven_wren",
        "name": "Wren",
        "effects": [
            "Deals 240% damage to the target.",
            "If the target has buffs and is hit, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "All hit targets get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "mimic_aether_green",
        "name": "Aether Mimic Nature",
        "effects": [
            "Deals 600% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "Boosts all allies' health by 30% of damage dealt.",
            "The Mimic chest closes for 2 turns."
        ]
    },
    {
        "heroId": "s5_ahmose",
        "name": "Ahmose",
        "effects": [
            "Deals 400% damage to all enemies.",
            "All allies reflect all status effects and 150% damage back to the attacker and block other negative effects from enemies' Fire Special Skill for 4 turns. This effect can't be dispelled. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "s5_ahmose_costume_reborn",
        "name": "Ahmose C1",
        "effects": [
            "Deals 410% damage to all enemies.",
            "All allies reflect all status effects and 160% damage back to the attacker and block other negative effects from enemies' Fire Special Skill for 3 turns. This effect can't be dispelled. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "forest_god_oberon",
        "name": "Alberich",
        "effects": [
            "Each fallen ally has a 33% chance to get revived with 23% HP.",
            "All allies regenerate 712 HP over 4 turns.",
            "All allies regenerate a moderate amount of mana over 4 turns.",
            "Element Link gives all Nature allies +15% attack and +15 defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "forest_god_oberon_costume_everoak",
        "name": "Alberich C1",
        "effects": [
            "Each fallen ally has a 38% chance to get revived with 28% HP.",
            "All allies regenerate 648 HP over 4 turns.",
            "All allies get +38% mana generation for 4 turns.",
            "Element Link gives all Nature allies +15% attack and +15 defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "garrison_archibald",
        "name": "Archibald",
        "effects": [
            "Deals 300% damage to all enemies.",
            "Damage bypasses target's Minions.",
            "All enemies get -40% defense against Nature for 4 turns.",
            "Summnos a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion receives 441 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "easter_archie",
        "name": "Archie",
        "effects": [
            "Deal 250% damage to all enemies.",
            "All enemies are immune to new status effect buffs for 4 turns, and receive 150 damage for each attempted buff.",
            "The caster gets -10% accuracy for 4 turns. This effect can't be cleansed. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "easter_archie_costume_gallant",
        "name": "Archie C1",
        "effects": [
            "Deals 240% damage to all enemies.",
            "All enemies are immune to new status effect buffs for 4 turns, and receive 300 damage for each attempted buff.",
            "The caster gets -10% accuracy for 4 turns. This effect can't be cleansed. (Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "gargoyle_arco",
        "name": "Arco",
        "effects": [
            "Replaces all Fiends on all allies with Gargoyle Minions.",
            "Summons a Gargoyle Minion for each ally. The Gargoyle Minion inherits 30% HP and 20% attack for the caster.",
            "All allies' health is boosted by 75 HP for each Minion owned by the allies."
        ]
    },
    {
        "heroId": "ballerina_armand",
        "name": "Armand Moncharmin",
        "effects": [
            "Deals 300% damage to all enemies.",
            "Summons a Bodyguard Mega Minion with 50% HP and 250% attack inherited from the caster.",
            "The target hit by the Bodyguard Mega Minion falls asleep and receives +60% increased damage when sleeping. (A sleeping target cannot gain mana. The sleeping target is woken once it takes damage. This excludes damage from Minions and Fiends. The effect is uncleansable.)"
        ]
    },
    {
        "heroId": "mimic_ascension_item_green",
        "name": "Ascension Mimic Nature",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target and nearby enemies receive 668 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "musketeer_athos",
        "name": "Athos",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 470% damage to the target.",
            "The caster gets 20% mana for each destroyed Minion.",
            "The attack bypasses defensive buffs. This includes counterattacks.",
            "Caster regenerates 306 HP over 2 turns."
        ]
    },
    {
        "heroId": "musketeer_athos_costume_farrier",
        "name": "Athos C1",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 480% damage to the target.",
            "The caster gets 20% mana for each destroyed Minion.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster regenerates 700 boosted health over 2 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "s2_skyllaros",
        "name": "Atomos",
        "effects": [
            "Deals 170% damage to all enemies.",
            "The more mana the enemies have, the more damage they will receive, up to 290%.",
            "If the caster is defeated during the next 5 turns they are resurrected in the beginning of their next turn with 32% health. All status effects are removed when the caster is defeated."
        ]
    },
    {
        "heroId": "s2_skyllaros_costume_reef",
        "name": "Atomos C1",
        "effects": [
            "Deals 160% damage to all enemies.",
            "The less mana the enemies have, the more damage they will receive, up to 310%.",
            "If the caster is defeated during the next 5 turns, they are resurrected in the beginning of their next turn with 40% health. All status effects and stacks are removed when the caster is defeated."
        ]
    },
    {
        "heroId": "shadow_atwood",
        "name": "Atwood",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Deals 380% damage to the target and nearby enemies and inflicts 45 Insanity on them.",
            "All allies are immune to damage from status ailments for 4 turns.",
            "Inflicts 50 Insanity to the caster."
        ]
    },
    {
        "heroId": "christmas_augustus",
        "name": "Augustus",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Boosts health for all allies by 690. Boosted health can exceed max HP.",
            "Boosts health by additional 30 per each Nature shield on the board, up to 930 boosted health.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All allies get +34% defense and a further 6% increase per each Nature shields on the board for 5 turns, up to +82% defense."
        ]
    },
    {
        "heroId": "nature_god_balbar",
        "name": "Balbar",
        "effects": [
            "Deals 350% damage to the target.",
            "The target falls asleep.",
            "While asleep, the target can't attack or gain mana.",
            "All damage dealt to the sleeping target is increased by +60%.",
            "The sleeping target is woken once it takes damage. This excludes damage from minions and fiends.",
            "Element Link gives +10% increase for any healing received for all Nature allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "monster_hunter_berit",
        "name": "Berit",
        "effects": [
            "Deals 500% damage to the enemy with the lowest remaining HP.",
            "Deals 750% damage to the enemy with highest remaining HP. Deals 300% damage to all other enemies.",
            "The enemy that had the highest remaining HP is unable to gain mana for 4 turns."
        ]
    },
    {
        "heroId": "nature_god_bertila",
        "name": "Bertila",
        "effects": [
            "Deals 420% damage to all enemies.",
            "Lifts all cleansable status ailments that affect attack or defense from all allies and randomly distributes them on enemies.",
            "Element Link summons a Nature Minion for all Nature allies with 6% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "nature_god_bo_and_runt",
        "name": "Bo & Runt",
        "effects": [
            "Deals 450% damage to the target.",
            "Deals additional 25% damage for each Minion owned by the allies, up to 650% damage in total.",
            "Summons a Loyal Hound Minion for the caster with 35% HP and 35% attack inherited from the caster.",
            "When summoned the Loyal Hound Minion give +50% attack for tis owner as long as the owner has Loyal Hound Minions. This effect can't be dispelled.",
            "Element Link gives all Nature allies +5% dodge chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "mahayoddha_bonga",
        "name": "Bonga",
        "effects": [
            "Deals 415% damage to all enemies.",
            "Growth Boon: Deals 2x extra damage for each point of modified attack. (Extra damage is based on the modified attack on caster, when damage is dealt. Up to maximum 800 additional extra damage. Status effects affecting damage dealt do affect the extra damage. Defense stats does not affect the extra damage. Status effect affecting attack stat do not affect the extra damage.)",
            "Summons a Tokri Minion for each ally with 30% HP and 30% attack inherited from the caster.",
            "Each time a Tokri Minion hits an enemy, it steals a random dispellable buff from the enemy and gives it to its owner."
        ]
    },
    {
        "heroId": "bard_bonzo",
        "name": "Bonzo",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 250% damage to all enemies.",
            "Damage bypasses target's Minions.",
            "The attack bypasses defensive buffs. (This includes counterattacks)"
        ]
    },
    {
        "heroId": "goblin_boom_and_fang",
        "name": "Boom & Fang",
        "effects": [
            "Summons a White Boar Mega Minion with 65% HP and 250% attack inherited from the caster.",
            "When summoned the White Boar Mega Minion gives its owner the ability to counterattack with 100% of the received damage as long as the owner has a White Boar Mega Minion. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "titan_hunter_borgholf",
        "name": "Borgholf",
        "effects": [
            "Deals 275% damage to 3 random enemies.",
            "Hit enemies become afflicted with Spike Trap.",
            "The Spike Trap gives its target -42% defense against Nature. Against Ice Titans, the Spike Trap gives its target -65% defense against Nature.",
            "Spike Traps explode in 3 turns dealing 300 damage to their owner. (If the Spike Trap is replaced by a new Spike Trap, it explodes. This can happen up to 2 times per turn.)"
        ]
    },
    {
        "heroId": "faun_bramble",
        "name": "Bramble",
        "effects": [
            "Recovers 50% health for all allies.",
            "All allies gain 25% mana after 3 turns or immediately if the effect is removed before the duration ends.",
            "Safely cleanses status ailmentsfrom all allies. (Safe cleanse bypasses secondary effects, such as damage on removal, from removed status ailment. External effects such as passive skills and family effects can still activate.)"
        ]
    },
    {
        "heroId": "vegetable_broseph",
        "name": "Broseph",
        "effects": [
            "Recovers 50% health for the caster and nearby allies.",
            "Uproots debuffs from the caster and nearby allies. (Uproot safely removes 2 status ailments, negative Stacks or Wither effects from each target. This includes uncleansable status ailments and dance effects. The caster receives 7% boosted health for each effect removed. Boosted health can exceed max HP. Safe cleanse bypasses secondary effects, such as damage on removal, from the removed status ailment. External effects such as passive skills and family effects can still activate. Wither effects are removed first. Other effects, the latest is removed first.)",
            "Growth: All allies get 125 attack and 125 defense."
        ]
    },
    {
        "heroId": "slime_bulklug",
        "name": "Bulklug",
        "effects": [
            "Deals 450% damage to target and nearby enemies.",
            "The caster and nearby allies get 200 attack.",
            "The caster and the nearby allies reflects all status ailments and 160% damage back to the attacker and block other negative effects from enemies' Fire Special Skills for 4 turns. This effect can't be dispelled. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "The caster receive Slime Revive status effect for 4 turns. This effect can't be dispelled.",
            "If defeated while Slime Revive is active, the caster will be reborn as a Slime."
        ]
    },
    {
        "heroId": "ninja_chikao",
        "name": "Chikao",
        "effects": [
            "1x Mana Charge",
            "* Dispels buffs from the enemies on the edges of the enemy formation.",
            "* Deals 300% damage to the enemies on the edges of the enemy formation. If there is only one enemy aive, the damage is doubled.",
            "* The enemy on the edges of the formation fall asleep and receive +60% increased damage while sleeping. (A sleeping character cannot gain mana. The sleeping target is woken once it takes damage. This excludes damage from Minions and Fiends. This effect is uncleansable.)",
            "2x Mana Charge",
            "* Dispels buffs from the enemies on the edges of the enemy formation.",
            "* Deals 485% damage to the enemies on the edges of the enemy formation. If there is only one enemy aive, the damage is doubled.",
            "* The enemy on the edges of the formation fall asleep and receive +80% increased damage while sleeping. (A sleeping character cannot gain mana. The sleeping target is woken once it takes damage. This excludes damage from Minions and Fiends. This effect is uncleansable.)",
            "3x Mana Charge",
            "* Dispels buffs from the enemies on the edges of the enemy formation.",
            "* Deals 900% damage to the enemies on the edges of the enemy formation. If there is only one enemy aive, the damage is doubled.",
            "* The enemy on the edges of the formation fall asleep and receive +100% increased damage while sleeping. (A sleeping character cannot gain mana. The sleeping target is woken once it takes damage. This excludes damage from Minions and Fiends. This effect is uncleansable.)"
        ]
    },
    {
        "heroId": "nature_god_chloris",
        "name": "Chloris",
        "effects": [
            "Boosts health for all allies by 650. Boosted health can exceed max HP.",
            "All allies regenerate 400 Bosted health over 4 turns. Boosted health can exceed max HP.",
            "All allies get +50% attack as long as the caster has boosted health. This effect can't be cleansed.",
            "Element Link gives all Nature allies +20% critical chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "nature_god_cinisia",
        "name": "Cinisia",
        "effects": [
            "Deals 300% damage to all enemies.",
            "All enemies get -70% decrease of any healing received for 3 turns.",
            "All enemies receive 450 Bleed damage over 2 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "Element Link gives +10% mana generation for all Nature allies for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "s4_congalach",
        "name": "Congalach",
        "effects": [
            "Deals 310% damage to 5 random enemies.",
            "Stack (Max: 10): Each hit gives its target -9% attack."
        ]
    },
    {
        "heroId": "s4_congalach_costume_kelp",
        "name": "Congalach C1",
        "effects": [
            "Deals 325% damage to 5 random enemies.",
            "Stack (Max: 10): Each hit gives its target -8% attack."
        ]
    },
    {
        "heroId": "elemental_craum",
        "name": "Craum",
        "effects": [
            "Recovers 800 boosted health for all allies.",
            "Recovers additional 50 boosted heath for each Nature shield, up to 1400.",
            "All Ice enemies receive 972 Sand damage over 4 turns.",
            "All Fire enemies receive 972 Water damage over 4 turns.",
            "All Dark enemies receive 972 Burn damage over 4 turns.",
            "All Holy enemies receive 972 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "magic_cristobal",
        "name": "Cristobal",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 250% damage to the target.",
            "* Deals 500% damage if the target has less than 50% health remaining.",
            "2x Mana Charge:",
            "* Deals 215% damage to all enemies.",
            "* Deals 430% damage to enemies with more than 50% health remaining."
        ]
    },
    {
        "heroId": "magic_cristobal_costume_emerald",
        "name": "Cristobal C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 300% damage to the target.",
            "* Deals 600% damage if the target has more than 50% health remaining.",
            "2x Mana Charge:",
            "* Deals 250% damage to all enemies.",
            "* Deals 500% damage to enemies with less than 50% health remaining."
        ]
    },
    {
        "heroId": "magic_carpet_crustee",
        "name": "Crustee",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 350% damage to all enemies.",
            "All enemies get -32% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "The caster gets additional +50% power for the next Special Skill they cast. The additional power increaases +30% each turn, up to a maximum of 140% in total."
        ]
    },
    {
        "heroId": "tales2_dagr",
        "name": "Dagr",
        "effects": [
            "Attacks all enemies with Firestorm Strike, dealing up to 1500 damage. Deals 40% more if the target is of the Nature element. This Special Skill never misses its targets.",
            "Damage bypasses target's Minions.",
            "All enemies receive 388 Poison damage over 4 turns.",
            "All enemies take +50% increased damage from Burn and Poison status ailments for 4 turns."
        ]
    },
    {
        "heroId": "ballerina_daroga",
        "name": "Daroga",
        "effects": [
            "Deals 535% damage to the target.",
            "The targets receives 1245 Bleeding damage over 3 turns. This effect spreads to nearby enemies.",
            "Stack (Max 10): All allies get +25% attack."
        ]
    },
    {
        "heroId": "elemental_desmond",
        "name": "Desmond",
        "effects": [
            "Deals 480% damage to the enemies of the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "Boosts the caster's and nearby allies' health by 20% of the damage dealt.",
            "For each hit Ice enemy, the boosted health is 40% of the damage dealt to them.",
            "The enemies on the edges of the enemy formation get silenced for 3 turns. Against Ice characters, this status effect becomes uncleasable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "valentines_matchmaker_dodgrom",
        "name": "Dodgrom",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster counterattacks a random enemy with 80% of the damage received for 4 turns.",
            "The caster reduces all received damage by -35% for 4 turns."
        ]
    },
    {
        "heroId": "beowulf_ecgtheow",
        "name": "Ecgtheow",
        "effects": [
            "Deals 500% damage to the enemy with the highest remaining HP. Deals 300% damage to all other enemies.",
            "Reduces the mana of the enemy with the most mana by 50%. Reduces the mana of all other enemies by 30%."
        ]
    },
    {
        "heroId": "halloween_edwin",
        "name": "Edwin",
        "effects": [
            "Deals 250% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies can't get their status ailments cleansed or reallocated by Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "halloween_edwin_costume_mafia",
        "name": "Edwin C1",
        "effects": [
            "Deals 265% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies can't get their status ailments cleansed or reallocated by Special Skills for 3 turns. (This effect also prevent cleansing and reallocating of itself.)",
            "All enemies receive 716 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "circus_eiora_and_fluffy",
        "name": "Eiora & Fluffy",
        "effects": [
            "Destroys all minions from the target. This effect damages Mega Minions.",
            "Deals 600% damage to the target.",
            "Reduces max health from all enemies who own Minions by 404. Max health can't get lower than 30% of the original max health."
        ]
    },
    {
        "heroId": "circus_eiora_and_fluffy_costume_dark",
        "name": "Eiora & Fluffy C1",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 640% damage to the target.",
            "Reduces max health from all enemies by 850. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 850.)"
        ]
    },
    {
        "heroId": "ninja_ekanite",
        "name": "Ekanite",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 200% damage to all enemies.",
            "- Summons a Shinobi Minion for each ally with 8% HP and 10% attack inherited from the caster.",
            "- When summoned, the Shinobi Minion gives its owner the ability to counterattack with 60% of the damage received for as long as the owner has a Shinobi Minion. The effect can't be dispelled.",
            "x2 Mana Charge:",
            "- Deals 280% damage to all enemies.",
            "- Summons a Shinobi Minion for each ally with 16% HP and 16% attack inherited from the caster.",
            "- When summoned, the Shinobi Minion gives its owner the ability to counterattack with 60% of the damage received for as long as the owner has a Shinobi Minion. The effect can't be dispelled.",
            "x3 Mana Charge:",
            "- Deals 360% damage to all enemies.",
            "- Summons a Shinobi Minion for each ally with 22% HP and 26% attack inherited from the caster.",
            "- When summoned, the Shinobi Minion gives its owner the ability to counterattack with 60% of the damage received for as long as the owner has a Shinobi Minion. The effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_el_naddaha",
        "name": "El Naddaha",
        "effects": [
            "Deals 305% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effect buff for 3 turns, and receive 200 damage for each attempted buff."
        ]
    },
    {
        "heroId": "s5_el_naddaha_costume_sea",
        "name": "El Naddaha C1",
        "effects": [
            "Deals 295% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns, and receive 400 damage for each attempted buff."
        ]
    },
    {
        "heroId": "forest_male_elf",
        "name": "Elkanen",
        "effects": [
            "Deals 330% damage to the target and minor damage to nearby enemies.",
            "Heals the caster for 38% of damage dealt."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_dark",
        "name": "Elkanen C1",
        "effects": [
            "Deals 280% damage to the target and nearby enemies.",
            "The caster steals 61% of any healing applied to the target and nearby enemies for 3 turns."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_king",
        "name": "Elkanen C2",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies get -50% decrease for any healing received for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_cute",
        "name": "Elkanen Toon",
        "effects": [
            "Deals 410% damage to the target and minor damage to nearby enemies.",
            "Heals the caster for 35% of damage dealt.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_glass",
        "name": "Elkanen Glass",
        "effects": [
            "Deals 420% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Heals the caster for 37% of damage dealt."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_stylish",
        "name": "Elkanen Stylish",
        "effects": [
            "Deals 430% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage to enemies with less than 50% health remaining.",
            "Heals the caster for 38% of damage dealt."
        ]
    },
    {
        "heroId": "institute_ellery",
        "name": "Ellery",
        "effects": [
            "Growth: The caster and nearby allies get 400 attack and 400 defense.",
            "Summon an Aberration Mega Minion with 40% HP and 170% attack inherited from the caster.",
            "Each hit from an Aberration Mega Minion gives the target the following status ailment:",
            "* The target receives 489 Toxin damage over 3 turns. Damage is increased against targets with boosted health, Minions or a Mega Minion.  (The Toxin damage is increased by +100% against targets with boosted health. The Toxin damage is increased by +33% per Minion or Mega Minion owned by target. Maximum increased damage is +199%.)",
            "* Inflicts 10 Insanity on the target.",
            "Casting this Special Skill inflicts 45 Insanity to the caster."
        ]
    },
    {
        "heroId": "forest_god_elradir",
        "name": "Elradir",
        "effects": [
            "Deals 345% damage to the target and nearby enemies.",
            "The caster reflects 130% of the damage received from their status ailments and negative stacks to all enemies for 4 turns.",
            "Element Link gives all Nature allies small amount of mana at the end of the turn for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "magic_carpet_elyssa",
        "name": "Elyssa",
        "effects": [
            "Recovers 50% health for all allies.",
            "Cleanses 2 status ailments from all allies. (Status ailments are cleansed in the order they have been received. The latest status ailments are cleansed first.)",
            "All allies are immune to new negative mana effects for 4 turns, and their mana is increased by 10% for each resisted effect."
        ]
    },
    {
        "heroId": "mimic_emblem_green",
        "name": "Emblem Mimic Nature",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target receives 387 Poison damage over 3 turns. This effect spreads to nearby enemies.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "mystery_enigmo",
        "name": "Enigmo",
        "effects": [
            "Recovers 25% health for all allies.",
            "Deals 150% damage to all enemies.",
            "All Minions memorized by the innate abilty are summoned to all allies.",
            "All Fiends memorized by the innate abilty are summoned to all enemies."
        ]
    },
    {
        "heroId": "forest_god_evelyn",
        "name": "Evelyn",
        "effects": [
            "Deals 320% damage to the target and nearby enemies",
            "The target and nearby enemies get -54% defense against Nature for 4 turns",
            "Dispels buffs from the target and nearby enemies",
            "Element Link recovers 4% health for all Nature allies for 6 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "forest_god_evelyn_costume_huntress",
        "name": "Evelyn C1",
        "effects": [
            "Deals 310% damage to the target and nearby enemies.",
            "The target and nearby enemies get -56% defense against Nature for 4 turns.",
            "Dispels buffs from target and nearby enemies.",
            "Element Link recovers 4% health for all Nature allies for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "mimic_training_hero_green",
        "name": "Experience Mimic Nature",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, the caster recovers +50% health and gains 33% mana.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "tales2_fafnir",
        "name": "Fafnir",
        "effects": [
            "Attacks the target and nearby enemies with Frostfall Strike, dealing up to 2100 damage. Deals 40% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "All damage the target and nearby enemies receive is increased by +35% for 3 turns.",
            "The target and nearby enemies reflect status effect buffs to a random character on the opposing team for 3 turns. (Only dispellable buffs are reflected.)"
        ]
    },
    {
        "heroId": "masquerade_februus",
        "name": "Februus",
        "effects": [
            "Destroys all Fiends from all allies and damages all Mega Minions.",
            "Cleanses status ailments from all allies.",
            "All allies regenerate 1190 HP over 5 turns. This effect can't be dispelled.",
            "All enemies receive 815 Poison damage over 5 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "construct_ferrus",
        "name": "Ferrus",
        "effects": [
            "Deals 390% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 576 Bleed damage over 3 turns.",
            "The target and nearby enemies get -60% defense against Nature for 3 turns."
        ]
    },
    {
        "heroId": "nature_god_florenna",
        "name": "Florenna",
        "effects": [
            "Deals 435% damage to the target.",
            "The target can't get their status ailments cleansed or reallocated by Special Skills for 3 turns. (This effect also prevents cleansing and reallocating of itself.)",
            "The target receives 912 Poison damage over 3 turn. This effect spreads to nearby enemies.",
            "Elemental Link gives all Nature allies +20% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fox_foxley",
        "name": "Foxley",
        "effects": [
            "Deals 375% damage to the target and nearby enemies.",
            "The target and nearby enemies receive lasting 250 Bleed damage per turn. (This effect lasts until it is cleaned, replaced or removed.)",
            "After 2 turn the target and nearby enemies get Paralyzed for 1 turn. (Paralyzed enemies can't attack, or gain mana and receive +50% increased damage. Bosses, Titans and Mythic Titans are not affeced by this status effect.)"
        ]
    },
    {
        "heroId": "halloween_francine",
        "name": "Francine",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "Cleanses status ailments from all allies at the end of each turn for 3 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "halloween_francine_costume_mafia",
        "name": "Francine C1",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "Cleanses status ailments from all allies at the end of each turn for 3 turns. This effect can't be dispelled.",
            "All Ice enemies get -54% defense against Nature for 3 turns."
        ]
    },
    {
        "heroId": "beowulf_freawaru",
        "name": "Freawaru",
        "effects": [
            "Safely dispels status effect buffs from all enemies. (Safe dispel bypasses secondary effects, such as damage on removal, from the removed status ailment. External effects such as passive skills and family effects can still activate.)",
            "Boosts health for all allies by 1300. Boosted health can exceed max HP.",
            "Source of Ailments: The following effects are cast on a random enemy at the start of each turn:",
            "-80% mana generation for 3 turns.",
            "-60% defense against Special Skills for 3 turns.",
            "The Source of Ailments will activate 4 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "s3_frigg",
        "name": "Frigg",
        "effects": [
            "Deals 100% damage to all enemies.",
            "Deals additional 18% damage per each Nature shield on the board, up to 244% damage in total.",
            "All enemies get -8% defense, and a further -3% decrease per each Nature shield on the board for 3 turns, up to -44% defense."
        ]
    },
    {
        "heroId": "s3_frigg_costume_clairvoyance",
        "name": "Frigg C1",
        "effects": [
            "Deals 90% damage to all enemies.",
            "Deals additional 18% damage per each Nature shield on the board, up to 234% damage in total.",
            "All enemies get -12% defense, and a further -3% decrease per each Nature shield on the board for 3 turns, up to -48% defense."
        ]
    },
    {
        "heroId": "fables_frog_prince",
        "name": "Frog Prince",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies receive 1285 Poison damage over 5 turns. The caster receives  a small amount of mana each time Poison damage is applied.",
            "All enemies get -34% mana generation for 5 turns.",
            "Allies share the damage this character would receive from Special Skill  attacks and normal attacks for 5 turns."
        ]
    },
    {
        "heroId": "construct_frond",
        "name": "Frond",
        "effects": [
            "Deals 375% damage to the target and nearby enemies.",
            "Deals 900 extra damage if the target has boosted health.",
            "All allies' normal attacks and Special Skills deals +85% damage against targets with boosted health for 3 turns."
        ]
    },
    {
        "heroId": "slime_fungustine",
        "name": "Fungustine",
        "effects": [
            "Boosts health of all allies by 1250. Boosted health can exceed max HP.",
            "All allies get Sticky surface for 4 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)",
            "All allies get +30% defense for 4 turns.",
            "All allies are immune to buff dispels and relocations for 4 turns. (This immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "tales1_galapago",
        "name": "Galapago",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Destroys all Minions from all enemies.",
            "* Deals 280% damage to all enemies.",
            "* All allies get +30% defense for 3 turns.",
            "2nd:",
            "* Destroys all Minions from all enemies.",
            "* Deals 370% damage to all enemies.",
            "* Stack (Max 10): The caster recovers 24 HP each turn for each destroyed Minion.",
            "* All allies get +50% defense for 3 turns."
        ]
    },
    {
        "heroId": "tales1_galapago_costume_quarry",
        "name": "Galapago C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Destroys all Minions from all enemies.",
            "* Deals 270% damage to all enemies.",
            "* All allies get +25% defense for 3 turns.",
            "2nd:",
            "* Destroys all Minions from all enemies.",
            "* Deals 400% damage to all enemies.",
            "* Stack (Max 10): The caster recovers 30 HP each turn for each destroyed Minion.",
            "* All allies get +55% defense for 3 turns."
        ]
    },
    {
        "heroId": "s4_garjammal",
        "name": "Garjammal",
        "effects": [
            "Deals 430% damage to the target.",
            "The caster regenerates 675 HP over 3 turns. The effect duration is reset if the caster is hit with direct damage from a special skill."
        ]
    },
    {
        "heroId": "s4_garjammal_costume_kite",
        "name": "Garjammal C1",
        "effects": [
            "Deals 410% damage to the target.",
            "The caster regenerates 800 HP over 4 turns. The duration is reset if the caster is hit with direct damage from a special skill."
        ]
    },
    {
        "heroId": "gargoyle_garten",
        "name": "Garten",
        "effects": [
            "Boosts health of all allies by 700. Boosted health can exceed max HP.",
            "Reduces max health of all enemies by 700. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 700.",
            "All allies except the caster receive Softskin. (The next time they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled.)",
            "All allies are immune to new status ailments that affect healing for 4 turns. Removes status ailments that affect healing from allies."
        ]
    },
    {
        "heroId": "tales1_gelert",
        "name": "Gelert",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Caster steals 10% mana from the target.",
            "* Deals 460% damage to the target.",
            "* The less mana the enemies have, the more damage they will receive, up to 600%.",
            "* All allies get +25% mana generation for 3 turns.",
            "2nd:",
            "* Caster steals 20% mana from the target.",
            "* Deals 530% damage to the target.",
            "* The less mana the enemies have, the more damage they will receive, up to 700%.",
            "* All allies get +30% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "tales1_gelert_costume_scavenger",
        "name": "Gelert C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Caster steals 15% mana from the target.",
            "* Deals 500% damage to the target.",
            "* The less mana the enemies have, the more damage they will receive, up to 650%.",
            "* All allies get +26% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "2nd:",
            "* Caster steals 25% mana from the target.",
            "* Deals 550% damage to the target.",
            "* The less mana the enemies have, the more damage they will receive, up to 720%.",
            "* All allies get +35% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "christmas_ginger",
        "name": "Ginger",
        "effects": [
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "For the next 3 turns, this character deals 500% damage to a random enemy each time any other ally casts their Special Skill. (Damage is dealt on the first Special Skill cast of each character per turn.)",
            "All allies' except the caster's Special Skill deal an additional +20% damage for 3 turns."
        ]
    },
    {
        "heroId": "christmas_ginger_costume_gift_wrapper",
        "name": "Ginger C1",
        "effects": [
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "For the next 3 turns, this character deals 520% damage to a random enemy each time any other ally casts their Special Skill. (Damage is dealt on the first Special Skill cast of each character per turn.)",
            "All allies except the caster get +15% mana generation for 3 turns.",
            "All allies' except the caster's Special Skill deal an additional +24% damage for 3 turns."
        ]
    },
    {
        "heroId": "garrison_godfrey",
        "name": "Godfrey",
        "effects": [
            "Recovers 35% health for all allies.",
            "All allies are immune to new status ailments for 4 turns.",
            "Summons a Spear Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "Each hit from the Spear Guard Mega Minion dispels all dispellable buffs from the target."
        ]
    },
    {
        "heroId": "slime_goorian",
        "name": "Goorian",
        "effects": [
            "Deals 480% damage to all enemies.",
            "All hit targets get -40% defense and a further -5% decrease every time they are hit during 5 turns, to max -60%.",
            "The caster receives Slime Revive status effect for 2 turns. If defeated while Slime Revive is active, the character will be reborn as a Slime with:",
            "* 100% inherited health.",
            "* 50% attack.",
            "* 50% defense.",
            "* Special Skill: Slime Slap. (Deals 350% damage to the target.)",
            "* This effect can't be dispelled.",
            "If the Slime is not defeated in 3 turns, it will be reborn as the character's original form inheriting the Slime's health and mana."
        ]
    },
    {
        "heroId": "forest_god_grace",
        "name": "Grace",
        "effects": [
            "Deals 395% damage to the target and nearby enemies.",
            "The target and nearby enemies cannot cast any new Taunt status effects for 3 turns.",
            "The target and nearby enemies get -34% defense against Special Skills for 3 turns.",
            "Element Link gives all Nature allies immunity to new Fiends for 4 turns."
        ]
    },
    {
        "heroId": "knights_green_knight",
        "name": "Green Knight",
        "effects": [
            "All enemies get -24% defense for 3 turns.",
            "Deals 265% damage to all enemies.",
            "If the caster dies during the next 5 turns, they are resurrected in the beginning of their next turn with 45% health and 765 damage is dealt to all enemies. All status effects and stacks are removed when the caster dies."
        ]
    },
    {
        "heroId": "forest_god_gregorion",
        "name": "Gregorion",
        "effects": [
            "Deals 550% damage to the target.",
            "All allies get +35% critical chance for 3 turns.",
            "Element Link gives all Nature allies +5% attack and +5% defense for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "forest_god_gregorion_costume_alchemist",
        "name": "Gregorion C1",
        "effects": [
            "Deals 535% damage to the target.",
            "All allies get +45% critical chance for 4 turns.",
            "Element Link gives all Nature allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "beowulf_grendel",
        "name": "Grendel",
        "effects": [
            "The target and nearby enemies get -40% defense against Nature for 3 turns.",
            "Deals 320% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 591 Bleed damage over 3 turns.",
            "The caster regenerates 810 HP over 3 turns."
        ]
    },
    {
        "heroId": "moth_grovevert",
        "name": "Grovevert",
        "effects": [
            "After the Special Skill has been cast increases the mana of the caster by 20%.",
            "Summons a Moss Mothling Mega Fiend for the target. The Fiend damages the enemy with 275% attack every turn.",
            "The Moss Mothling Mega Fiend absorbs healing and disappears when it has absorbed health equal to 70% of its owner's max health.",
            "When summoned, the Moss Mothling Mega Fiend gives -50% mana generation for its owner for as long as the owner has Moss Mothling Mega Fiend. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "kingdom_guan_yu",
        "name": "Guan Yu",
        "effects": [
            "Deals 390% damage to the target and nearby enemies.",
            "Damage bypasses target's Minions.",
            "The target and nearby enemies get -25% defense and a further -3 defense for each Minion owned by the enemies for 3 turns, up to -70% defense. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "kingdom_guan_yu_costume_dragon",
        "name": "Guan Yu C1",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "Damage bypasses target's Minions.",
            "The target and nearby enemies get -30% defense and a further -5% decrease for each Minion owned by enemies for 4 turns, up to -65% defense. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "guardian_chameleon",
        "name": "Guardian Chameleon",
        "effects": [
            "Removes all status effects from all enemies. Removes even status effects that are otherwise undispellable or uncleansable.",
            "Changes the element of all enemies to the element they are strong against for 4 turns.",
            "All allies get +54% attack for 4 turns.",
            "All allies get +36% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_hammertusk",
        "name": "Hammertusk",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "All damage the target and nearby enemies receives is increased by +50% for 4 turns."
        ]
    },
    {
        "heroId": "construct_haulstone",
        "name": "Haulstone",
        "effects": [
            "Each ally receives buffs based on their current health:",
            "Full HP:",
            "* The ally gets +50% attack for 3 turns.",
            "* The ally gets +30% defense for 3 turns.",
            "Above or equal to 50%:",
            "* The ally gets +50% defense for 3 turns.",
            "* The ally gets +34% mana generation for 3 turns.",
            "Below 50% HP:",
            "* The ally regenerates 810 HP over 3 turns.",
            "* The ally gets +50% defense for 3 turns.",
            "* The ally counterattacks with 130% of the damage received for 3 turns."
        ]
    },
    {
        "heroId": "s3_heimdall",
        "name": "Heimdall",
        "effects": [
            "Boosts health of all allies by 500. Boosted health can exceed max HP.",
            "Each fallen ally has a 20% chance to get revived with 30% HP.",
            "All allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "s3_heimdall_costume_dreaded",
        "name": "Heimdall C1",
        "effects": [
            "Each fallen ally has 50% chance to get revived with 20% HP.",
            "All allies get +50% attack for 4 turns.",
            "All allies regenerate 672 boosted health over 4 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "forest_titan",
        "name": "Horghall",
        "effects": [
            "Deals 280% damage to all enemies.",
            "All enemies get -34% attack for 6 turns."
        ]
    },
    {
        "heroId": "forest_titan_costume_jester",
        "name": "Horghall C1",
        "effects": [
            "Deals 250% damage to all enemies.",
            "All enemies get -54% attack for 6 turns."
        ]
    },
    {
        "heroId": "forest_titan_costume_nightmare",
        "name": "Horghall C2",
        "effects": [
            "Deals 260% damage to all enemies.",
            "All enemies get -31% attack, and a further 4% decrease any time they are hit during 4 turns, down to -51% attack.",
            "All enemies get -24% defense for 4 turns.",
            "All enemies receive 228 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "forest_titan_costume_cute",
        "name": "Horghall Toon",
        "effects": [
            "Deals 430% damage to all enemies.",
            "All enemies get -24% attack for 6 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "forest_titan_costume_glass",
        "name": "Horghall Glass",
        "effects": [
            "Deals 440% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -29% attack for 6 turns."
        ]
    },
    {
        "heroId": "halloween_hortensia",
        "name": "Hortensia",
        "effects": [
            "Destroys all Minions from the target and nearby enmies. This effect damage Mega Minions.",
            "Deals 430% damage to the target and nearby enemies.",
            "Summons a Flytrap Fiend to the target and nearby enemies.",
            "The Flytrap Fiend absorbs healing. It disappears after absorbing healing amount equal to 45% of its target's max health.",
            "When summoned, the Flytrap Fiend reduces max health of its owner by 65 each turn. This effect is stonger against targets with boosted health. The effect lasts as long as the target has the Flytrap Fiend. This effect can't be cleansed. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 65 per turn.)"
        ]
    },
    {
        "heroId": "castle_bear_humbert",
        "name": "Humbert",
        "effects": [
            "Deals 350% damage to all enemies.",
            "Boosts all allies' health by 25% of damage dealt.",
            "All allies get +30% defense for 4 turns. The defense increases by 10% each turn up to 60%."
        ]
    },
    {
        "heroId": "astral_dwarf_hygil",
        "name": "Hygil",
        "effects": [
            "Deals 850% damage to the target.",
            "The target receives 100% damage for all the damage their allies receive for 5 turns.",
            "Growth: All allies get 550 attack.",
            "All allies get +35% mana generation for 5 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "kalevala_iku_turso",
        "name": "Iku-Turso",
        "effects": [
            "Deals 280% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 243 Water damage over 3 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "The caster steals 51% of any healing applied to the target and nearby enemies for 3 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "ninja_ito",
        "name": "Ito",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 430% damage to the target.",
            "- Boosts all allies' health by 25% of damage dealt.",
            "- The target gets -35% mana generation for 2 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "x2 Mana Charge:",
            "- Deals 440% damage to the target and nearby enemies.",
            "- Boosts all allies' health by 25% of damage dealt.",
            "- The target and nearby enemies get -40% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "x3 Mana Charge:",
            "- Deals 450% damage to all enemies.",
            "- Boosts all allies' health by 25% of damage dealt.",
            "- All enemies get -45% mana generation for 6 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "ninja_jade",
        "name": "Jade",
        "effects": [
            "1x Mana Charge",
            "* Deals 115% damage to all enemies.",
            "* Reduces the mana of all enemies by 10%.",
            "* The caster gets +25% chance to dodge Special Skills that deal damage for 3 turns.",
            "2x Mana Charge",
            "* Deals 210% damage to all enemies.",
            "* Reduces the mana of all enemies by 15%.",
            "* The caster and nearby allies get +50% chance to dodge Special Skills that deal damage for 4 turns.",
            "3x Mana Charge",
            "* Deals 300% damage to all enemies.",
            "* Reduces the mana of all enemies by 25%.",
            "* All allies get +75% chance to dodge Special Skills that deal damage for 5 turns."
        ]
    },
    {
        "heroId": "forest_female_elf",
        "name": "Kadilen",
        "effects": [
            "Deals 190% damage to all enemies",
            "All allies get +74% defense against Special Skills for 3 turns"
        ]
    },
    {
        "heroId": "forest_female_elf_costume_mage",
        "name": "Kadilen C1",
        "effects": [
            "Deals 170% damage to all enemies.",
            "All allies get +45% chance to dodge special skills for 3 turns. Each dodge summons a thorn minion.",
            "Thorn minion has 15% HP and 15% attack inherited from the caster."
        ]
    },
    {
        "heroId": "forest_female_elf_costume_fairy",
        "name": "Kadilen C2",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All allies get +40% chance to dodge Special Skills for 3 turns. Each dodge summons an Empowered Thorn Minion.",
            "Empowered Thorn Minion has 25% HP and 25% attack inherited from the caster."
        ]
    },
    {
        "heroId": "forest_female_elf_costume_cute",
        "name": "Kadilen Toon",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All allies get +64% defense against Special Skills for 3 turns.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "forest_female_elf_costume_glass",
        "name": "Kadilen Glass",
        "effects": [
            "Deals 280% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All allies get +72% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "monster_hunter_kai",
        "name": "Kai",
        "effects": [
            "Deals 435% damage to the target.",
            "Summons a Bone Trap Fiend for the target. The Fiend damages the enemy with 45% attack each turn. The damage increases by 8% each turn, up to a maximum of 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health.",
            "The target gets -50% decrease of any healing received for 3 turns.",
            "Dispels buffs from the target at the end of each turn for 3 turns"
        ]
    },
    {
        "heroId": "forsaken_khatrox",
        "name": "Khatrox",
        "effects": [
            "Boosts health of the caster by 1000. Boosted health can exceed max HP.",
            "Deals 470% damage to all enemies and inflicts 25 Insanity on them.",
            "Store all damage dealt to the caster for 3 turns. When the effect ends, stored damage is dealt to all enemies, up to a maximum of 1500 damage. This effect can't be dispelled.",
            "Casting this Special Skill inflicts 45 Insanity to the caster."
        ]
    },
    {
        "heroId": "forest_god_kingston",
        "name": "Kingston",
        "effects": [
            "Deals 495% damage to the target.",
            "The target and nearby enemies get -31% attack, and a further -4% decrease every time they are hit during 4 turns.",
            "Element Link gives +4% mana generation for all Nature allies for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "garrison_kolya",
        "name": "Kolya",
        "effects": [
            "Dispels 1 buff from all enemies. (The latest buffs are dispelled first.)",
            "Deals 300% damage to all enemies.",
            "Deals additional 6% damage per removed status effect, up to 330% damage in total.",
            "Summnos a Shield Guard Mega Minion with 65% HP and 180% attack inherited from the caster.",
            "The Shield Guard Mega Minion safely cleanses the latest cleansable status ailment from all allies each turn. (Safe cleanse bypasses secondary effects, such as damage on removal, from the remove status ailment. External effects such as passive skills and family effects can still activate.)"
        ]
    },
    {
        "heroId": "pirate_lady",
        "name": "Lady Locke",
        "effects": [
            "The target and nearby enemies receive 932 damage over 4 turns, starting low and increasing with every turn.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "pirate_lady_costume_queen",
        "name": "Lady Locke C1",
        "effects": [
            "Deals 120% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 1118 damage over 4 turns, starting low and increasing with every turn.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "knights_lady_of_the_lake",
        "name": "Lady of the Lake",
        "effects": [
            "Recovers 42% health for all allies.",
            "Summons a Magic Sword Minion for the caster and nearby allies with 14% HP and 15% attack inherited from the caster.",
            "The Minion removes -10% mana from the target when it hits them."
        ]
    },
    {
        "heroId": "knights_lady_of_the_lake_costume_blades",
        "name": "Lady of the Lake C1",
        "effects": [
            "Boosts health of all allies by 550. Boosted health can exceed max HP.",
            "Summons a Magical Sword Minion for the caster and nearby allies with 14% HP and 15% attack inherited from the caster.",
            "Each hit from the Magical Sword Minion gives the target the following status ailment:",
            "* -24% mana generation for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "beauty_beast_laurent",
        "name": "Laurent",
        "effects": [
            "If the caster has 50 or more Humility:",
            "Deals 600% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster activates Stoneskin that drops all damage dealt to the caster to 1 but is removed after 5 hits. This effect can't be dispelled.",
            "Otherwise:",
            "Deals 460% damage to the target and minor damage to nearby enemies.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster activates Stoneskin that drops all damage dealt to the caster to 1 but is removed after 4 hits. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "nature_god_leadria",
        "name": "Leadria",
        "effects": [
            "Summons a Spirit of Spring Minion for all allies with 30% HP inherited from the caster.",
            "When summoned, the Spirit of Spring Minion boosts 120 health for its owner at the end of each turn for as long as the owner has a Spirit of Spring Minion. This effect can't be dispelled.",
            "All allies' Special Skill deal an additional 25% damage for 4 turn.",
            "Element Link gives all Nature allies +10% additional Special Skill damage for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "goblin_leafwizzle",
        "name": "Leafwhisk",
        "effects": [
            "Growth: All allies get 355 defense.",
            "Summons a Spotted Boar Mega Minion with 65% HP and 260% attack inherited from the caster.",
            "When summoned the Spotted Boar Mega Minion gives its owner immunity to buff dispels and reallocation for as long as the owner has a Spotted Boar Mega Minion. (This immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "wild_cat_leonie",
        "name": "Leonie",
        "effects": [
            "Deals 250% Clawing damage to the target and nearby enemies. (Deals 400% damage against enemies with any defensive buffs, Minions or Mega Minions. Enemies with any defensive buffs, Minions or Mega Minions receive -35% defense for 6 turns.)",
            "The target and nearby enemies receive lasting 1500 Surge Bleed damage over 6 turns. (If the target already has this effect, the duration will be refreshed and the damage will be increased by 300. Max total damage 3000.)"
        ]
    },
    {
        "heroId": "elven_archer",
        "name": "Lianna",
        "effects": [
            "Deals 512% damage to the target."
        ]
    },
    {
        "heroId": "elven_archer_costume_moon",
        "name": "Lianna C1",
        "effects": [
            "Deals 482% damage to the target.",
            "The target gets -34% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "elven_archer_costume_raven",
        "name": "Lianna C2",
        "effects": [
            "Deals 500% damage to the target.",
            "The target gets silenced for 3 turns."
        ]
    },
    {
        "heroId": "elven_archer_costume_cute",
        "name": "Lianna Toon",
        "effects": [
            "Deals 592% damage to the target.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "elven_archer_costume_glass",
        "name": "Lianna Glass",
        "effects": [
            "Deals 602% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "elven_archer_costume_stylish",
        "name": "Lianna Stylish",
        "effects": [
            "Deals 612% damage to the target.",
            "If the target has less than 50% health remaining, deals 712% damage instead."
        ]
    },
    {
        "heroId": "moth_limeboire",
        "name": "Limeboire",
        "effects": [
            "Deals 300% damage to all enemies.",
            "All enemies fall into Deep Sleep and receive +80% increased damage while in Deep Sleep. (This character in Deep Sleep cannot gain mana or attack. The character in Deep Sleep is woken once it takes 750 damage. This effect is uncleansable.)",
            "Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "Caster gains 3% mana for each stolen buff, up to a maximum of 30% mana."
        ]
    },
    {
        "heroId": "outlaw_lin_chong",
        "name": "Lin Chong",
        "effects": [
            "This Special Skill has a chance to deal Critical hits.",
            "Deals 390% damage to the target and minor damage to nearby enemies.",
            "Stack (Max: 10): All damage the target and nearby enemies receive is increased by +5%.",
            "Stack (Max: 10): Caster and nearby allies get +5% critical chance."
        ]
    },
    {
        "heroId": "nature_god_liora",
        "name": "Liora",
        "effects": [
            "Deals 385% damage to the enemy with the highest remaining HP. Deals 255% damage to all other enemies.",
            "The attack will always bypass counterattacks and reflection.",
            "Steals the latest dispellable buff from all the enemies and randomly distributes them on alies who have 50% or less HP left.",
            "Elemental Link gives all Nature allies +20% critical chance for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "kingdom_liu_bei",
        "name": "Liu Bei",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "Summons a Shu Soldier Minion for each ally with 16% HP and 17% attack inherited from the caster.",
            "When summoned, the Shu Soldier Minion gives its owner the ability to  counterattack with 60% of the damage received for as long as the owner has a Shu Soldier Minion. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "kingdom_liu_bei_costume_nature",
        "name": "Liu Bei C1",
        "effects": [
            "Deals 350% damage to the target and nearby enemies.",
            "Summons a Shu Soldier Minion for each ally with 33% HP and 33% attack inherited from the caster.",
            "When summoned, the Shu Soldier Minion gives its owner the ability to counterattack with 55% of the damage received for as long as the owner has a Shu Soldier Minion. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s4_lughaidh",
        "name": "Lughaidh",
        "effects": [
            "Cast Full Removal on the caster. (Full Removal removes all status efects, stacks and Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleasable.)",
            "The caster shifts into Ghost form for 4 turns.",
            "While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but it is immune to normal attacks, Special Skill attacks, status effects and stacks. Immune to new Growth and Wither effects.",
            "While in Ghost form the caster can't gain mana and can't be healed by Special Skills, but it is immune to normal attacks, Special Skill attacks, status effects and stacks.",
            "While in Ghost form, all allies except the caster get +64% defense",
            "While in Ghost form, all allies' except the caster's HP is boosted by 180 HP every turn."
        ]
    },
    {
        "heroId": "s4_lughaidh_costume_deathless",
        "name": "Lughaidh C1",
        "effects": [
            "Cast Full Removal on the caster. (Full Removal removes all status efects, stacks and Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleasable.)",
            "The caster shifts into Ghost form for 4 turns.",
            "While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but it is immune to normal attacks, Special Skill attacks, status effects and stacks. Immune to new Growth and Wither effects.",
            "While in Ghost form, all allies except the caster have +56% defense.",
            "While in Ghost form, all allies except the caster regenerate 300 boosted health every turn. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "s5_maat",
        "name": "Ma'at",
        "effects": [
            "Deals 195% damage to all enemies.",
            "All enemies get -34% defense for 3 turns.",
            "All Fire enemies get -24% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_maat_costume_river",
        "name": "Ma'at C1",
        "effects": [
            "Deals 220% damage to all enemies.",
            "All enemies get -35% defense for 3 turns.",
            "All Fire enemies get -20% attack for 3 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_maegwyn",
        "name": "Maegwyn",
        "effects": [
            "Recovers 50% health for all allies.",
            "All allies regenerate 800 boosted health over 4 turns. Boosted health can exceed max HP.",
            "All allies reduce all received damage by -40% for 4 turns."
        ]
    },
    {
        "heroId": "forest_god_elinor",
        "name": "Margaret",
        "effects": [
            "Deals 150% damage to the target and nearby enemies.",
            "The caster and nearby allies have from +30% to +90% chance of dodging special attacks that do damage. The higher the damage from the special is, the higher the chance to dodge it. Each dodge gives +24% mana to the target. Effect lasts 3 turns.",
            "Elemental Link gives all Nature allies +46% defense against Fire for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "mighty_pet_toto",
        "name": "Max",
        "effects": [
            "Recovers 45% health for all allies.",
            "Summons a Brown Puppy Minion for each ally with 35% HP and 55% attack inherited from the caster.",
            "All allies reduce all received damage from the attacks and special skills of the stronger enemy by -80% for 5 turns."
        ]
    },
    {
        "heroId": "beachparty_mazoga",
        "name": "Mazoga",
        "effects": [
            "Deals 280% damage to the target and nearby enemies.",
            "The target and nearby enemies get -24% defense for 3 turns. The effect duration resets if the character receives status ailments.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "mahayoddha_meenakshi",
        "name": "Meenakshi",
        "effects": [
            "Recovers 10% health for the caster and nearby allies.",
            "Growth Boon: Deals 2x extra health for each point of modified defense. (Extra health is based on the modified defense on the caster when healing is applied. Up to a maximum 800 of additional healing. Status effects affecting healing received do affect the healing scaling.)",
            "The caster and nearby allies counterattack with 150% of the damage received for 4 turns.",
            "The caster and nearby allies regenerate a moderate amount of mana for each counterattack for 4 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "gargoyle_mena",
        "name": "Mena",
        "effects": [
            "Deals 390% damage to the target and minor damage to nearby enemies.",
            "At the end of each turn, the caster and nearby allies shoot a Fluff Volley at a random enemy for 3 turns.",
            "Each Fluff Volley deals 150% damage.",
            "Each Fluff Volley reduces the mana of the hit enemy by 5%."
        ]
    },
    {
        "heroId": "bard_merith",
        "name": "Merith",
        "effects": [
            "Reduces max health of the target and nearby enemies by 1000. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 1000.)",
            "After 1 turn the target and nearby enemies get Paralyzed for 2 turn. (Paralized enemies can't attack or gain man and receive +50% increased damage. Once Paralyzed, the effect can't be cleansed. Bosses, Titans and Mythic Titans are not affected by this status effect.)",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "monster_hunter_mistweaver",
        "name": "Mistweaver",
        "effects": [
            "Deals 350% damage to the target and nearby enemies.",
            "The target and nearby enemies resist healing and receive 220 damage per each resisted healing for 3 turns.",
            "Stack (Max: 10): The caster gets +15% attack against the weaker element."
        ]
    },
    {
        "heroId": "astral_moonflower",
        "name": "Moonflower",
        "effects": [
            "For the next 3 turns, this character deals 235% damage to all enemies after an enemy casts their Special Skill.",
            "All allies get +35% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "knights_morgan_le_fay",
        "name": "Morgan Le Fay",
        "effects": [
            "The caster drains 772 HP from the target over 4 turns. This effect can't be cleansed, but gets removed if this caster dies",
            "The caster and nearby allies gets +94% defense against Fire for 4 turns."
        ]
    },
    {
        "heroId": "christmas_mrs_claus",
        "name": "Mother North",
        "effects": [
            "Recovers 30% health for all allies.",
            "Each fallen ally has a 50% chance to get revived with 10% HP.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "christmas_mrs_claus_costume_fangirl",
        "name": "Mother North C1",
        "effects": [
            "Each fallen ally has a 55% chance to get revived with 15% HP.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All allies regenerate 612 HP over 4 turns."
        ]
    },
    {
        "heroId": "slime_mucktus",
        "name": "Mucktus",
        "effects": [
            "Deals 290% damage to all enemies.",
            "Summons a Slime Fiend for all enemies. The Fiend damage the enemy with 50% attack every turn.",
            "The Slime Fiend absorbs healing. It disappears after absorbing health equal to 40% of its target's max health.",
            "At the end of each turn the Slime Fiend steals one of the dispellable buffs or Growth effect and gives it to a random character on the opposite team."
        ]
    },
    {
        "heroId": "ninja_myoinni",
        "name": "Myoin-ni",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Boosts health of all allies by 370. Boosted health can exceed max HP.",
            "- All allies get +33% mana generation for 2 turns.",
            "- All allies get +25% defense for 2 turns.",
            "x2 Mana Charge:",
            "- Boosts health of all allies by 530. Boosted health can exceed max HP.",
            "- All allies get +33% mana generation for 3 turns.",
            "- All allies get +40% defense for 3 turns.",
            "x3 Mana Charge:",
            "- Boosts health of all allies by 600. Boosted health can exceed max HP.",
            "- All allies get +33% mana generation for 4 turns.",
            "- All allies get +65% defense for 4 turns."
        ]
    },
    {
        "heroId": "nature_god_mystia",
        "name": "Mystia",
        "effects": [
            "All enemies become Soul Connected for 4 turns. Soul Connected enemies share received damage.",
            "All enemies get -34% defense for 4 turns.",
            "All allies reflect all status effects and 145% damage back to the attacker and block other negative effects from enemies' Fire Special Skill for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Element Link gives all Nature allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "champions_nogu",
        "name": "Nogu",
        "effects": [
            "Deals 460% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 504 Bleed damage over 3 turns.",
            "For the next 3 turns, the target and nearby enemies convert all boosted  health received to max health reduction. Max health is reduced more for  targets that already have boosted health. (Max health can't get lower than 30% of the original max health. When boosted healing is converted, the max health reduction is doubled if the target already has boosted health.)"
        ]
    },
    {
        "heroId": "tales2_ott",
        "name": "Ott",
        "effects": [
            "Boosts health of all allies by 600. Boosted health can exceed max HP.",
            "All allies get a Firestorm Ward for 3 turns, that reduces incoming Special Skill damage by up to -1100. Reduces damage by additional 30% when the attacker is of the Nature element.",
            "All allies are immune to buff dispels and reallocations for 3 turns. (The immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "tales2_ott_costume_herbalist",
        "name": "Ott C1",
        "effects": [
            "Boosts health of all allies by 800. Boosted health can exceed max HP.",
            "All allies get a Firestorm Ward for 3 turns, that reduces incoming Special Skill damage by up to -1280. Reduces damage by additional 30% when the attacker is of the Nature element.",
            "All allies are immune to buff dispel and reallocations for 3 turns. (The immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "shadow_penelope",
        "name": "Penelope",
        "effects": [
            "Deals 440% damage to all enemies.",
            "Heals all allies for 35% of the damage dealt.",
            "All allies get +45% chance to dodge Special Skills for 5 turns. Each dodge inflicts 15 Insanity on the attacker.",
            "Casting this Special Skill inflicts 50 Insanity to the caster."
        ]
    },
    {
        "heroId": "faun_peregrine",
        "name": "Peregrine",
        "effects": [
            "Deals 450% damage to the target and nearby enemies.",
            "Enhanced Dodge: The caster and nearby allies get +55% chance to dodge Special Skills that deal damage. This effect lasts until the ally succesfully dodges 5 times.",
            "After the Enhanced Dodge ends or is removed or replaced, the ally gets +70% attack for 5 turns."
        ]
    },
    {
        "heroId": "ninja_peridot",
        "name": "Peridot",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "* Deals 240% damage to the target.",
            "• The target receives 220 Poison damage over 2 turns.",
            "• The target gets -35% accuracy for 2 turns. Chance to miss also applies to offensive Special Skills.",
            "x2 Mana Charge:",
            "* Deals 280% damage to the target and nearby enemies.",
            "* The target and nearby enemies receive 438 Poison damage over 3 turns.",
            "* The target and nearby enemies get -40% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.",
            "x3 Mana Charge:",
            "* Deals 320% damage to all enemies.",
            "* All enemies receive 764 Poison damage over 4 turns.",
            "* All enemies get -54% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "s4_phileas_fogg",
        "name": "Phileas Fogg",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 420% damage to the target.",
            "The target gets -58% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "s4_phileas_fogg_costume_engineer",
        "name": "Phileas Fogg C1",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 410% damage to the target.",
            "The target gets -60% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "garrison_pip",
        "name": "Pip",
        "effects": [
            "Deals 350% damage to the target.",
            "Deals additional 350% damage to 2 random enemies.",
            "All hit targets receive 456 Bleed damage over 3 turns.",
            "All hit targets take +50% increased damage from Bleed status ailments for 3 turns."
        ]
    },
    {
        "heroId": "ballerina_prince_siegfried",
        "name": "Prince Siegfried",
        "effects": [
            "If the caster is defeated during the next 5 turns, they are resurrected in the beginning of their next turn with 30% health and all allies recover 1100 HP. (All status effects and stacks are removed when the caster is defeated)",
            "All allies except the caster dance the Dance of the Heron for 5 turns.",
            "Dance of the Heron:",
            "* Counterattack with 130% of the damage received.",
            "* Received damage is reduced by -35%.",
            "Additional info:",
            "* All existing status effects will be removed when a dance status effect is added.",
            "* Dance gives immunity to new status effects. New dance status effects will replace this effect.",
            "* Dance effect cannot be dispelled. The effect is removed when the caster is defeated."
        ]
    },
    {
        "heroId": "lunar_new_year_qinglong",
        "name": "Qinglong",
        "effects": [
            "Deals 160% damage to all enemies.",
            "Steals the latest dispellable buff from all enemies and randomly distributes them on allies.",
            "All allies get +8% attack per transferred status effect buff for 2 turns."
        ]
    },
    {
        "heroId": "musketeer_queen_anne",
        "name": "Queen Anne",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 6 turns.",
            "The caster regenerates 918 HP over 6 turns.",
            "All allies get +65% defense for 6 turns.",
            "All allies get +44% mana generation for 6 turns."
        ]
    },
    {
        "heroId": "castle_wolf_quenell",
        "name": "Quenell",
        "effects": [
            "Deals 320% damage to the target and nearby enemies.",
            "The caster gets additional +40% power for the next Special Skill they cast. The additional power increases +40% each turn, up to a maximum of 200% in total.",
            "The caster regenerates 600 HP over 3 turns."
        ]
    },
    {
        "heroId": "castle_wolf_quenell_costume_wood",
        "name": "Quenell C1",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "The caster gets additional +30% power for the next Special Skill they cast. The additional power increases +30% each turn, up to +150% in total.",
            "The caster regenerates 600 HP over 3 turns."
        ]
    },
    {
        "heroId": "magic_carpet_ragrim",
        "name": "Ragrim",
        "effects": [
            "Destroys all Fiends from all allies. This effect damages Mega Fiends.",
            "Recovers 65% health for the ally with the lowest remaing HP. All other allies recover 45% health.",
            "Growth: All allies get 250 attack and 250 defense."
        ]
    },
    {
        "heroId": "s3_ratatoskr",
        "name": "Ratatoskr",
        "effects": [
            "Recovers 44% health for all allies.",
            "Alters the power of All Nature shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "s3_ratatoskr_costume_architect",
        "name": "Ratatoskr C1",
        "effects": [
            "All allies regenerate 795 HP over 3 turns.",
            "Alters the power of all Nature shields on the board. When an attacking Hero casts the special, the shields become enhance with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "owl_relius",
        "name": "Relius",
        "effects": [
            "Recovers 30% health for all allies.",
            "Each defeated ally has a 40% chance to get revived with 30% HP.",
            "All allies a get Moonrise Ward for 4 turns, that reduces incoming Special Skill damage by -800. Reduces by additional 30% when attacker is Holy."
        ]
    },
    {
        "heroId": "construct_rhineglow",
        "name": "Rhineglow",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "All allies regenerates 1200 boosted health over 3 turns. Boosted health can exceed max HP. This effect can't be dispelled.",
            "Stores all damage dealt to the caster for 3 turns. When the effect ends, stored damage is dealth to all enemies, up to a maximum 1200 damage. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "elemental_roz",
        "name": "Roz",
        "effects": [
            "Deals 530% damage to the target.",
            "If there are 6 or more Nature shields on the board damage is dealt to the target and nearby enemies instead.",
            "If there are 12 or more Nature shields on the board damage is dealt to all enemies instead."
        ]
    },
    {
        "heroId": "elemental_roz_costume_disco",
        "name": "Roz C1",
        "effects": [
            "Deals 540% damage to the target.",
            "If there are 5 or more Nature shields on the board damage is dealt to the target and nearby enemies.",
            "If there are 10 or more Nature shields on the board damage is dealt to all enemies.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "easter_sadie",
        "name": "Sadie",
        "effects": [
            "Deals 550% damage to the target.",
            "The target gets silenced for 3 turns.",
            "The target gets -64% defense against Special Skills for 3 turns.",
            "The target can't get their status ailments cleansed or reallocated by Special Skills for 3 turns. (This effect is also prevents cleansing and reallocating of itself.)",
            "Reduces max health of the caster by 400. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 400.)"
        ]
    },
    {
        "heroId": "journey_sha_wujing",
        "name": "Sha Wujing",
        "effects": [
            "Deals 610% damage to the target.",
            "Heals all allies for 40% of damage dealt.",
            "All allies get +45% chance to dodge Special Skills that deal damage for 4 turns."
        ]
    },
    {
        "heroId": "nature_god_silvaria",
        "name": "Silvaria",
        "effects": [
            "The target and nearby enemies get -34% defense for 3 turns.",
            "Deals 380% damage to the target.",
            "Summons a Forest Familiar Minion for all allies with 15% HP and 15% attack inherited from the caster.",
            "Element Link gives all Nature allies +10% atack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "goblin_smarttongue",
        "name": "Smarttongue",
        "effects": [
            "Wither: All enemies get -350 attack.",
            "Reduces max health for all enemies by 700. This effect is stronger against targets with boosted health. (Max health can't be lower than the 30% of the original max health. Any boosted health is reduced by an additional 700.)",
            "All enemies get -45% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "mighty_pet_snowball",
        "name": "Snowball",
        "effects": [
            "Deals 250% damage to the target and nearby enemies.",
            "Summons a Barbed Arrow Fiend to the target and nearby enemies. The Fiend damages the enemies with 43% attack every turn.",
            "The Barbed Arrow Fiend absorbs healing. It disappears after absorbing a healing amount equal to 28% of its target's max health.",
            "When summoned, the Barbed Arrow Fiend increases the damage dealt to its target from all sources by +40%. The effect lasts as long as the target has Barbed Arrow Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "goblin_soursting",
        "name": "Soursting",
        "effects": [
            "The target and nearby enemies can't revive their allies or themselves for 5 turns.",
            "The target and nearby enemies can't receive new status effects that would resurrect them for 5 turns.",
            "Deals 530% damage to the target and minor damage to nearby enemies.",
            "Wither: The target and nearby allies get -380 defense."
        ]
    },
    {
        "heroId": "tales1_spartoi",
        "name": "Spartoi",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 240% damage to all enemies.",
            "* Summons a Naga Warrior Fiend for all enemies. The Fiend damage its target with 75% attack every turn.",
            "* The Naga Warrior Fiend absorbs healing. It disappears after absorbing a healing amount equal to 40% of its target's max health.",
            "2nd:",
            "* Deals 320% damage to all enemies.",
            "* Summons a Naga Warrior Fiend for all enemies. The Fiend damage its target with 110% attack every turn.",
            "* The Naga Warrior Fiend absorbs healing. It disappears after absorbing a healing amount equal to 50% of its target's max health."
        ]
    },
    {
        "heroId": "tales1_spartoi_costume_guard",
        "name": "Spartoi C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 230% damage to all enemies.",
            "* Summons a Naga Warrior Fiend for all enemies. The Fiend damage its target with 70% attack every turn.",
            "* The Naga Warrior Fiend absorbs healing. It disappears after absorbing a healing amount equal to 35% of its target's max health.",
            "2nd:",
            "* Deals 350% damage to all enemies.",
            "* Summons a Naga Warrior Fiend for all enemies. The Fiend damage its target with 125% attack every turn.",
            "* The Naga Warrior Fiend absorbs healing. It disappears after absorbing a healing amount equal to 60% of its target's max health."
        ]
    },
    {
        "heroId": "fox_spiff",
        "name": "Spiff",
        "effects": [
            "The caster gets lasting bypass for defensive buffs. (Defensive buffs include counterattacks. This effect lasts until it is cleansed, replaced or removed.)",
            "Deals 585% damage to the target.",
            "The caster gets lasting +50% chance to dodge Special Skills. (This effect lasts until it is cleansed, replaced or removed.)"
        ]
    },
    {
        "heroId": "rodent_sproutwhisker",
        "name": "Sproutwhisker",
        "effects": [
            "Wild: For 4 turns, all allies regenerate 400 HP or receive 800 boosted health each turn. (Wild adds a chance each turn for this effect to be more powerful. This Wild effect has a 50% chance to heal extra +100% HP that turn. When extra HP is healed the effect gives boosted health. Wild effects bypass most effects that would normally prevent them from being applied. Wild effects can be applied in addition to other effects of the same type.)",
            "For the next 4 turns, all allies receive 10% mana at the end of the turn.",
            "All allies get +55% defense for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_staintongue",
        "name": "Staintongue",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The target and nearby enemies get -30% accuracy for 3 turns. The accuracy decreases by -10% each turn, up to -50%.",
            "The target and nearby enemies receive 363 Poison damage over 3 turns."
        ]
    },
    {
        "heroId": "astral_starlass",
        "name": "Starlass",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 550% damage to target and nearby enemies",
            "Automatically does 701 damage to the hit enemy and consumes 75% mana from hit enemy every time when the hit enemy's mana gets full for 3 tuns."
        ]
    },
    {
        "heroId": "outlaw_sun_erniang",
        "name": "Sun Erniang",
        "effects": [
            "Casts one of the following Special Skill:",
            "If any enemy has the Bleed status ailment:",
            "* This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "* Deals 300% damage to the all enemies.",
            "* All enemies receive 1020 Bleed damage over 5 turns.",
            "* The duration of status ailments is reset for all enemies.",
            "Otherwise:",
            "* This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "* Deals 250% damage to the all enemies.",
            "* All enemies receive 830 Bleed damage over 5 turns."
        ]
    },
    {
        "heroId": "monster_hunter_sune",
        "name": "Sune",
        "effects": [
            "Deals 550% damage to the target.",
            "If the target is of Ice element, deals 300% damage to nearby enemies.",
            "Dispels buffs from the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by -15%, an a further -5% decrease per each removed status effect, up to -40% in total.",
            "Deals extra damage against Ice."
        ]
    },
    {
        "heroId": "kalevala_suomuhauki",
        "name": "Suomuhauki",
        "effects": [
            "Deals 400% damage to the target.",
            "Summons a Pike Mega Fiend for the target. The Fiend damages the enemy with 270% attack every turn. Deals strong damage against Fire characters.",
            "The Pike Mega Fiend absorbs healing and disappears when it has absorbed max health equal to 70% of its target's max health.",
            "When summoned, the Pike Mega Fiend gives -45% attack for its target. Against Fire characters, the Pike Mega Fiend gives -55% attack. The effect lasts as long as the target has Pike Mega Fiend."
        ]
    },
    {
        "heroId": "ninja_tametomo",
        "name": "Tametomo",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- This Special Skill never misses its targets.",
            "- Deals 250% damage to the target.",
            "- If the target has more than 50% health remaining, deals 450% damage instead.",
            "- Deals an additional 250% damage to the nearby enemies.",
            "x2 Mana Charge:",
            "- This Special Skill never misses its targets.",
            "- Deals 350% damage to the target.",
            "- If the target has more than 50% health remaining, deals 550% damage instead.",
            "- Deals an additional 350% damage to the nearby enemies.",
            "x3 Mana Charge:",
            "- This Special Skill never misses its targets.",
            "- Deals 400% damage to the target.",
            "- If the target has more than 50% health remaining, deals 700% damage instead.",
            "- Deals an additional 400% damage to the nearby enemies."
        ]
    },
    {
        "heroId": "s2_junglehunter",
        "name": "Tarlak",
        "effects": [
            "All allies get +100% normal attack for 4 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +160% increased power while this effect is active.",
            "All allies regenerate 324 HP over 4 turns."
        ]
    },
    {
        "heroId": "s2_junglehunter_costume_party",
        "name": "Tarlak C1",
        "effects": [
            "Boosts health for all allies by 470. Boosted health can exceed max HP.",
            "All allies get +80% normal attack for 5 turns. The normal attack is increased by +20% each turn. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +160% increased power while this effect is active."
        ]
    },
    {
        "heroId": "castle_bear_teddy",
        "name": "Teddy",
        "effects": [
            "Deals 180% damage to all enemies.",
            "All enemies fall asleep and receives +70% increased damage while sleeping. (A sleeping target cannot gain mana or attack. The sleeping target is woken once it takes damage. This excludes damage from Minions, Fiends, Mega Minions and Mega Fiends. This effect is uncleansable.)",
            "All allies regenerate 1200 HP over 4 turns."
        ]
    },
    {
        "heroId": "forest_god_telluria",
        "name": "Telluria",
        "effects": [
            "Deals 200% damage to all enemies.",
            "Summons a Forest Familiar Minion for all allies with 15% HP and 15% attack inherited from the caster.",
            "All allies regenerate 506 HP over 2 turns.",
            "All enemies get -24% mana generation for 2 turns.",
            "Element Link gives all Nature allies +10% critical chance for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "magic_telonius",
        "name": "Telonius",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies take +50% increased damage from status ailments for 3 turns.",
            "* All enemies receive 357 Poison damage over 3 turns.",
            "2x Mana Charge:",
            "* Recovers 75% health for the caster and nearby allies.",
            "* The caster and nearby allies are immune to damage from status ailments for 5 turns."
        ]
    },
    {
        "heroId": "magic_telonius_costume_brew",
        "name": "Telonius C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "x1 Mana Charge:",
            "* All enemies take +55% increased damage from status ailments for 3 turns.",
            "* All enemies receive 573 Poison damage over 3 turns. The caster absorbs 10% of dealt Poison damage as health.",
            "x2 Mana Charge:",
            "* Recovers 75% health for the caster and nearby allies.",
            "* The caster and nearby allies are immune to new status ailments for 5 turns, and recover 350 health for each attempted status ailment."
        ]
    },
    {
        "heroId": "wild_cat_thaffer",
        "name": "Thaffer",
        "effects": [
            "The caster steals 25% mana from the target.",
            "Deals 375% damage to the target and 4 random enemies.",
            "The caster steals 70% of any healing applied to the target for 4 turns."
        ]
    },
    {
        "heroId": "wonderland_hatter",
        "name": "The Hatter",
        "effects": [
            "Deals 400% damage to the target and minor damage to nearby enemies",
            "Steals all the dispellable buffs from all enemies and randomly allocates them on all allies"
        ]
    },
    {
        "heroId": "wonderland_hatter_costume_tea",
        "name": "The Hatter C1",
        "effects": [
            "Deals 400% damage to the target and minor damage to nearby enemies.",
            "Steals all the dispellable buffs from all enemies and randomly allocates them on the allies.",
            "Summons a Playing Card Minion with 25% HP and 40% attack inherited from the caster."
        ]
    },
    {
        "heroId": "garrison_theodosius",
        "name": "Theodosius",
        "effects": [
            "Deals 450% damage to all enemies.",
            "Reduces the duration of all allies' active status ailments by 3 turn. (The duration reduction affects both cleansable and uncleansable status ailments. If the duration on any ailment is reduced to zero, the effect is considered as having expired naturally.)",
            "Reduces the duration of all enemies' active buffs by 3 turns.(The duration reduction affects both dispellable and undispellable status effect buffs. If the duration on any buff is reduced to zero, the effect is considered as having expired naturally.)",
            "All allies get +35% defense for 5 turns.",
            "All enemies get -35% defense for 5 turns."
        ]
    },
    {
        "heroId": "villain_toxicandra",
        "name": "Toxicandra",
        "effects": [
            "Recovers 30% health for all allies.",
            "All allies regenerate a moderate amount of mana over 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "villain_toxicandra_costume_rose",
        "name": "Toxicandra C1",
        "effects": [
            "Boosts health of all allies by 750. Boosted health can exceed max HP.",
            "All allies regenerate a moderate amount of mana over 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "astral_demon_turundh",
        "name": "Turundh",
        "effects": [
            "Deals 525% damage to the target.",
            "The target cannot cast any new status effects on enemies or allies for 3 turns. (This includes stacks. This only includes status effects cast with Special Skills.)",
            "Deals 525% damage to a random enemy.",
            "The target of the second hit resists healing and receives 300 damage per each resisted healing for 3 turns.",
            "The caster gets 20% mana if both attacks hit the same target."
        ]
    },
    {
        "heroId": "kalevala_vainamoinen",
        "name": "Vainamoinen",
        "effects": [
            "Deals 270% damage to the target and nearby enemies.",
            "All enemies get -30% accuracy for 3 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns longer. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "kalevala_vainamoinen_costume_vainamoinen_sage",
        "name": "Vainamoinen C1",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "All enemies get -25% accuracy for 3 turns. Against Fire characters, this status effect becomes uncleansable and lasts 2 turns longer. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "slime_verdigoo",
        "name": "Verdigoo",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "All allies get Sticky Surface for 3 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)"
        ]
    },
    {
        "heroId": "valentines_vernon",
        "name": "Vernon",
        "effects": [
            "Deals 380% damageto the enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled.",
            "For 3 turns enemies on the edges of the enemy formation receive 50% of all damage dealt to their allies.",
            "For 3 turns, the enemies on the edges of the enemy formation are forced to cast Mindless heal when at full mana.",
            "Mindless Heal: Recovers 20% HP health for the character on the opposing side with the lowest remaining HP."
        ]
    },
    {
        "heroId": "owl_verus",
        "name": "Verus",
        "effects": [
            "Attacks all enemies with Moonrise Strike, dealing up to 1200 damage. Deals 40% more damage if the target is Holy. This Special Skill never misses its targets.",
            "All enemies receive 924 Bleed damage over 4 turns.",
            "All enemies get -45% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "nature_god_viselus",
        "name": "Viselus",
        "effects": [
            "Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "Deals 370% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 572 Poison damage over 4 turns.",
            "Element Link gives all Nature allies +5% chance to dodge status ailments for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "fortune_wei_qi",
        "name": "Wei Qi",
        "effects": [
            "Deals 700% Spirit Slash damage to the target. Spirit Slash safely removes buffs before dealing damage. (Damage is reduced by -50% for each removed buff. Undispellable buffs are also removed.)",
            "Nearby allies dance the Vibrant Fortune Dance for 4 turns.",
            "Vibrant Fortune Dance",
            "* +50% defense.",
            "* Dealt damage is increased by +20%. The effect is +30% against Ice targets.",
            "* Received damage is reduced by -20%. The effect is -30% against Fire Special Skills.",
            "* Fortune Dances stack with other Dance effects. (All existing status effects will be removed when Fortune Dance status effects is added, except other Dance status effects. Fortune Dances gives immunity to new status effects, except other Dance effects. Fortune Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "bard_winifred",
        "name": "Winifred",
        "effects": [
            "Deals 550% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy and deals minor damage.",
            "All hit targets get -54% attack for 5 turns.",
            "All hit targets are immune to new status effect buffs for 5 turns."
        ]
    },
    {
        "heroId": "elemental_xandrella",
        "name": "Xandrella",
        "effects": [
            "Deals 450% damage to target and all Ice enemies.",
            "Automatically does 438 damage to the target and all Ice enemies, when their mana is full and reduces their mana by 50% for 4 turns.",
            "Alters the power of all Nature shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "elemental_xandrella_costume_idol",
        "name": "Xandrella C1",
        "effects": [
            "Deals 480% damage to the target and all Ice enemies.",
            "Automatically does 555 damage to the target and all Ice enemies when their mana gets full and reduces their mana by 50% for 4 turns.",
            "Alters the power of all Nature shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +40% more mana. When a defending Hero casts the special, the shields become weakened and give -33% less mana.",
            "All Ice enemies get -20% defense against Nature for 4 turns."
        ]
    },
    {
        "heroId": "castle_stag_xiamara",
        "name": "Xiamara",
        "effects": [
            "Deals 300% damage to all enemies.",
            "The caster gets additional +100% power for the next Special Skill they cast. The additional power increases +25% each turn, up to a maximum of +200% in total.",
            "All enemies receive Mana Corruption for 4 turns. Each time an afflicted enemy receives mana from an additional source, they receive 400 damage. Additional sources include direct mana addition from Special Skills, status effects, level properties, passive skills, family effects, tile effects and Minions. Mana added for defense team at the end of their turn or from matching tiles is included only if the target has a mana generation bufff or a posive mana generation stack."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaoqing",
        "name": "Xiaoqing",
        "effects": [
            "Recovers 40% health for all allies.",
            "Lifts the latest cleansable status ailment from all allies and randomly distributes them on enemies.",
            "All allies have a 60% chance to reflect any status ailment to a random character on the opposing team for 3 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "astral_demon_xshahr",
        "name": "Xshahr",
        "effects": [
            "Deals 610% damage to the target.",
            "Boosts the caster's health by 45% of damage dealt.",
            "The target receives Resonance for 3 turns. Each turn, Resonance deals 429 damage to the afflicted enemies and 214 damage to nearby enemies.",
            "Deals 250% damage to a random enemy at the end of each turn for as long as the caster has boosted health. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "sand_king",
        "name": "Yunan",
        "effects": [
            "Deals 200% damage to all enemies",
            "All enemies receive 381 damage over 3 turns",
            "All enemies get -50% decrease for any healing received for 3 turns.  This effect can't be cleansed.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "sand_king_costume_lifeguard",
        "name": "Yunan C1",
        "effects": [
            "Deals 215% damage to all enemies.",
            "All enemies receive 815 Sand damage over 5 turns.",
            "All allies get +33% mana generation for 5 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "shadow_zavinia",
        "name": "Zavinia",
        "effects": [
            "Deals 450% damage to the target.",
            "Deals additional 180% damage to as many random enemies as there are Nature tiles on the board, up to a maximum of 12 hits. The damage is reduced on each consecutive hit.",
            "All hit targets get 10 Insanity every time they are hit.",
            "Inflicts 50 Insanity on the caster."
        ]
    },
    {
        "heroId": "forest_god_zeline",
        "name": "Zeline",
        "effects": [
            "Deals 255% damage to all enemies.",
            "All enemies get -34% attack for 4 turns.",
            "Deals extra damage against Ice.",
            "Dispels buffs from all enemies.",
            "Elemental Link gives +10% mana generation for all Nature allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "forest_god_zeline_costume_avian",
        "name": "Zeline C1",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 240% damage to all enemies.",
            "All enemies get -38% attack for 4 turns.",
            "Deals extra damage against Ice",
            "Elemental Link gives +10% mana generation for all Nature allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "institute_zenas",
        "name": "Zenas",
        "effects": [
            "Deals 360% damage to the target and nearby enemies and inflicts 35 Insanity on them.",
            "Summons a Moldavite Owl Fiend for the target and nearby enemies. The Fiend damage the enemy with 60% attack every turn.",
            "The Moldavite Owl Fiend absorbs healing. It disappears after absorbing a healing equal to 25% of its target's max health.",
            "The Moldavite Owl Fiend infllicts 5 Insanity on the owner on every turn.",
            "At the end of each turn, the Moldavite Owl Fiend dispels one of its target's dispellable buffs.",
            "Casting this Special Skill inflicts 40 Insanity on the caster."
        ]
    },
    {
        "heroId": "forest_god_zocc",
        "name": "Zocc",
        "effects": [
            "Deals 320% damage to the target",
            "Increases the mana of the target by 50%",
            "The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns.",
            "Element Link gives all Nature allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "elemental_zuni",
        "name": "Zuni",
        "effects": [
            "Deals 300% damage to the target.",
            "If the target is of Ice element, deals 275% damage to all other enemies.",
            "Hit enemies get -34% attack for 3 turns. Against Ice characters, this status effect becomes uncleasable and lasts 2 turns longer.",
            "Hit enemies get -34% defense for 3 turns. Against Ice characters, this status effect becomes uncleasable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "cultist_thief",
        "name": "Fletcher",
        "effects": [
            "Deals 265% damage to the target"
        ]
    },
    {
        "heroId": "blackguard_female_archer",
        "name": "Nightshade",
        "effects": [
            "Deals 250% damage to the target"
        ]
    },
    {
        "heroId": "blackguard_scout",
        "name": "Julius",
        "effects": [
            "Deals 250% damage to the target"
        ]
    },
    {
        "heroId": "cultist_female_poisoner",
        "name": "Layla",
        "effects": [
            "The target receives 78 damage over 6 turns"
        ]
    },
    {
        "heroId": "undead_screaming_zombie",
        "name": "Silthus",
        "effects": [
            "All allies get +48% attack for 4 turns"
        ]
    },
    {
        "heroId": "castle_raven_aderyn",
        "name": "Aderyn",
        "effects": [
            "Recovers 32% health for all allies.",
            "All enemies get -50% decrease for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "s3_anwindr",
        "name": "An-Windr",
        "effects": [
            "The caster gets +45% attack, and a further 20% increase every time they or any of their allies are hit during 3 turns. When the effect ends, all enemies receive 119 damage. Each hit on the caster or their allies during the duration increases the damage by 8 to a maximum of 215 damage."
        ]
    },
    {
        "heroId": "s5_aqeela",
        "name": "Aqeela",
        "effects": [
            "Deals 155% damage to the target and nearby enemies.",
            "The caster and nearby allies get +45% chance to dodge Special Skills for 3 turns. Each dodge gives +5% defense stack (Max: 10)."
        ]
    },
    {
        "heroId": "s5_aqeela_costume_sorcerer",
        "name": "Aqeela C1",
        "effects": [
            "Deals 145% damage to the target and nearby enemies.",
            "The caster and nearby allies get +45% chance to dodge Special Skills for 3 turns. Each dodge gives +10% defense stack (Max: 10)."
        ]
    },
    {
        "heroId": "cultist_mage",
        "name": "Balthazar",
        "effects": [
            "Deals 335% damage to the target"
        ]
    },
    {
        "heroId": "cultist_mage_costume_voodoo",
        "name": "Balthazar C1",
        "effects": [
            "Deals 315% damage to the target",
            "The target receives 60 Poison damage over 3 turns"
        ]
    },
    {
        "heroId": "cultist_mage_costume_cute",
        "name": "Balthazar Toon",
        "effects": [
            "Deals 365% damage to the target.",
            "Deals extra damage if the target is Holy."
        ]
    },
    {
        "heroId": "cultist_mage_costume_glass",
        "name": "Balthazar Glass",
        "effects": [
            "Deals 375% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "cultist_mage_costume_stylish",
        "name": "Balthazar Stylish",
        "effects": [
            "Deals 385% damage to the target.",
            "If the target has less than 50% health remaining, deals 435% damage instead."
        ]
    },
    {
        "heroId": "gargoyle_betty",
        "name": "Betty",
        "effects": [
            "Deals 210% damage to target and nearby enemies.",
            "Nearby allies receive Softskin. (The next time they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled.)"
        ]
    },
    {
        "heroId": "s3_bjorn",
        "name": "Bjorn",
        "effects": [
            "Deals 200% damage to the target.",
            "Deals 350% damage to a random different enemy. Deals extra damage if the target is Holy. This effect targets the same enemy as the first hit if there are no other valid targets."
        ]
    },
    {
        "heroId": "s3_bjorn_costume_viking",
        "name": "Bjorn C1",
        "effects": [
            "Deals 180% damage to the target.",
            "Deals 380% damage to a random different enemy.",
            "Enemies hit get -24% mana generation for 3 turns. Against Holy characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "gargoyle_budatin",
        "name": "Budatin",
        "effects": [
            "Alters the power of all Dark shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "s2_lantern_ghost",
        "name": "Chochin",
        "effects": [
            "Deals 215% damage to the target and nearby enemies.",
            "The target and nearby enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "villain_edd",
        "name": "Edd",
        "effects": [
            "Deal 335% damage to the target.",
            "The target is immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "s2_fiji_mermaid",
        "name": "Gill-Ra",
        "effects": [
            "All enemies get -34% defense for 4 turns.",
            "All enemies get -34% attack for 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "s2_fiji_mermaid_costume_hunter",
        "name": "Gill-Ra C1",
        "effects": [
            "All allies get +25% defense for 4 turns.",
            "All allies get +25% attack for 4 turns.",
            "Dispells buffs from all enemies."
        ]
    },
    {
        "heroId": "monster_hunter_greel",
        "name": "Greel",
        "effects": [
            "Deals 210% damage to all enemies.",
            "If the enemies have less than 50% health remaining, deals 315% damage instead.",
            "The caster gains 20% mana for each enemy defeated by the attack."
        ]
    },
    {
        "heroId": "guardian_bat",
        "name": "Guardian Bat",
        "effects": [
            "Deals 270% damage to the target and minor damage to nearby enemies.",
            "The damage is increased by 50% per each dead ally."
        ]
    },
    {
        "heroId": "halloween_jack",
        "name": "Jack",
        "effects": [
            "Deals 200% damage to the target.",
            "The target receieves a Pumpkin Bomb. After 3 turns the Pumpkin Bomb explodes and deals 206 damage to the target and nearby targets. The Pumpkin Bomb also explodes when the target is defeated."
        ]
    },
    {
        "heroId": "slayer_maeve",
        "name": "Maeve",
        "effects": [
            "Deals 260% damage to the target and nearby enemies.",
            "The target and nearby enemies get -44% defenese for 4 turns.",
            "Stack (Max: 10): The caster gets +5% mana generation",
            "Stack (Max: 10): The caster recovers 5 HP each turn"
        ]
    },
    {
        "heroId": "ninja_morganite",
        "name": "Morganite",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- All enemies receive 64 Poison damage over 2 turns.",
            "- All enemies get -40% accuracy for 2 turns. Chance to miss also applies to offensive Special Skills.",
            "x2 Mana Charge:",
            "- All enemies receive 196 Poison damage over 4 turns.",
            "- All enemies get -40% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.",
            "x3 Mana Charge:",
            "- All enemies receive 354 Poison damage over 6 turns.",
            "- All enemies get -40% accuracy for 6 turns. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "s4_morris",
        "name": "Morris",
        "effects": [
            "Removes all status effects and stacks from the caster. Removes even status effects and stacsk that are otherwise undispellable or uncleansable.",
            "Caster digs a hole and hides in it for 2 turns.",
            "While in the hole, the caster can't gain mana but is immune to normal attacks, special attacks, and all status effects.",
            "After 2 turns the caster jumps out of the hole and heals 223 damage to a random enemy.",
            "The hit enemy receives the following status ailment:",
            "* The target can't gain mana for 2 turns."
        ]
    },
    {
        "heroId": "s4_morris_costume_potter",
        "name": "Morris C1",
        "effects": [
            "Removes all status effects and stacks from the caster. Removes even those status effects and stacks that are otherwise undispellable or uncleansable.",
            "Caster digs a hole and hides in it for 3 turns.",
            "While in the hole, the caster can't gain mana, and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, status effects and stacks.",
            "After 3 turns, the caster jumps out from the hole and deals 143 damage to a random enemy.",
            "The hit enemy receives the following status ailment:",
            "The target can't gain mana for 3 turns."
        ]
    },
    {
        "heroId": "undead_horned_skeleton",
        "name": "Oberon",
        "effects": [
            "Deals 121% damage to all enemies.",
            "All enemies receive 96 Poison damage over 6 turns."
        ]
    },
    {
        "heroId": "undead_horned_skeleton_costume_fool",
        "name": "Oberon C1",
        "effects": [
            "All enemies receive 324 Poison damage over 3 turns.  This effect can't be cleased."
        ]
    },
    {
        "heroId": "undead_horned_skeleton_costume_cute",
        "name": "Oberon Toon",
        "effects": [
            "Deals 151% damage to all enemies.",
            "All enemies receive 76 damage over 6 turns.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "undead_horned_skeleton_costume_glass",
        "name": "Oberon Glass",
        "effects": [
            "Deals 161% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies receive 148 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "kalevala_para",
        "name": "Para",
        "effects": [
            "Recovers 32% health for all allies.",
            "All enemies get -24% attack for 4 turns. Against Holy characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "blackguard_female_captain",
        "name": "Prisca",
        "effects": [
            "Deals 235% damage to the target.",
            "Heals the caster for 50% of damage dealt."
        ]
    },
    {
        "heroId": "blackguard_female_captain_costume_musketeer",
        "name": "Prisca C1",
        "effects": [
            "Deals 205% damage to the target and minor damage to nearby enemies.",
            "Heals the caster for 30% of the damage dealt."
        ]
    },
    {
        "heroId": "blackguard_female_captain_costume_cute",
        "name": "Prisca Toon",
        "effects": [
            "Deals 265% damage to the target.",
            "Heals the caster for 45% of damage dealt.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "blackguard_female_captain_costume_glass",
        "name": "Prisca Glass",
        "effects": [
            "Deals 275% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Heals the caster for 50% of damage dealt."
        ]
    },
    {
        "heroId": "blackguard_skulker",
        "name": "Renfeld",
        "effects": [
            "Deals 215% damage to the target.",
            "Heals the caster for 50% of damage dealt."
        ]
    },
    {
        "heroId": "blackguard_skulker_costume_doctor",
        "name": "Renfeld C1",
        "effects": [
            "Deals 195% damage to the target.",
            "The caster steals generated mana of the target and the nearby enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen.  This effect can't be cleansed, but it gets removed if the caster dies."
        ]
    },
    {
        "heroId": "blackguard_skulker_costume_cute",
        "name": "Renfeld Toon",
        "effects": [
            "Deals 245% damage to the target.",
            "Heals the caster for 40% of damage dealt.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "blackguard_skulker_costume_glass",
        "name": "Renfeld Glass",
        "effects": [
            "Deals 255% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Heals the caster for 45% of damage dealt."
        ]
    },
    {
        "heroId": "knights_treevil",
        "name": "Treevil",
        "effects": [
            "Deals 280% damage to all enemies.",
            "All enemies get -34% attack for 6 turns.",
            "All enemies get -34% defense for 6 turns.",
            "All enemies get -34% mana generation for 6 turns."
        ]
    },
    {
        "heroId": "undead_running_skeleton",
        "name": "Tyrum",
        "effects": [
            "Deal 310% damage to the target.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "undead_running_skeleton_costume_roman",
        "name": "Tyrum C1",
        "effects": [
            "Deal 310% damage to the target.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "undead_running_skeleton_costume_cute",
        "name": "Tyrum Toon",
        "effects": [
            "Deals 315% damage to the target.",
            "Deals extra damage against Holy.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "undead_running_skeleton_costume_glass",
        "name": "Tyrum Glass",
        "effects": [
            "Deals 325% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "beowulf_unferth",
        "name": "Unferth",
        "effects": [
            "Deals 250% damage to the target.",
            "Deals 300% damage if the target has more than 70% health remaining.",
            "Source of Ailments: The following effects are cast on a random enemy at the start of each turn",
            "* -50% defense against Special Skill for 3 turns.",
            "* The Source of Ailments will activate 3 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "vampire_lord",
        "name": "Vlad",
        "effects": [
            "The target receives 65 Surge Bleed damage over 5 turns. (If a target already has this effect, the duration will be refreshed and the damage will be increased by 115. Max total damage 295.)",
            "The caster steals 61% of any healing applied to the target for 3 turns."
        ]
    },
    {
        "heroId": "s5_ahhotep",
        "name": "Ahhotep",
        "effects": [
            "Deals 340% damage to the target and minor damage to nearby enemies.",
            "If the target is defeated in the next 3 turns, all caster's allies get +20 mana."
        ]
    },
    {
        "heroId": "s5_ahhotep_costume_champion",
        "name": "Ahhotep C1",
        "effects": [
            "Deals 370% damage to the target and minor damage to nearby enemies.",
            "If the target is defeated in the next 3 turns, all caster's allies get +15% mana."
        ]
    },
    {
        "heroId": "s2_ghost_woman",
        "name": "Ameonna",
        "effects": [
            "Casts Full Removal on the caster.",
            "The caster shifts into Ghost Form for 4 turns.",
            "While in Ghost form the caster gains +82% attack. (While in Ghost form Character can't gain mana and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth, Wither and Insanity effects.)"
        ]
    },
    {
        "heroId": "s2_ghost_woman_costume_yurei",
        "name": "Ameonna C1",
        "effects": [
            "Casts Full Removal on the caster.",
            "The caster shifts into Ghost Form for 4 turns. (While in Ghost form Character can't gain mana and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth, Wither effects and Insanity effects.)",
            "While in Ghost form, all allies except the caster have +44% defense.",
            "While in Ghost form, all allies except the caster regenerate 140 HP every turn."
        ]
    },
    {
        "heroId": "ninja_ametrine",
        "name": "Ametrine",
        "effects": [
            "1x Mana Charge",
            "* Dispels buffs from the target.",
            "* Deals 220% damage to the target.",
            "2x Mana Charge",
            "* Dispels buffs from the target and nearby enemies.",
            "* Deals 255% damage to the target and nearby enemies.",
            "3x Mana Charge",
            "* Dispels buffs from all enemies.",
            "* Deals 300% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_ana_belle",
        "name": "Ana-Belle",
        "effects": [
            "Dispels and cleanses all buffs and status ailments from all allies and enemies.",
            "Recovers 45% heath for all allies.",
            "Recovers additional 2% health per removed status effect, up to 65% health in total."
        ]
    },
    {
        "heroId": "halloween_ana_belle_costume_mafia",
        "name": "Ana-Belle C1",
        "effects": [
            "Dispels and cleanses all buffs and status ailment from all allies and enemies.",
            "Recovers 43% heath for all allies.",
            "Recovers additional 3% health per removed status effect, up to 73% health in total."
        ]
    },
    {
        "heroId": "styx_arges",
        "name": "Arges",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 165% damages to the target and nearby enemies.",
            "* The caster and nearby allies get +30% attack for 3 turns.",
            "2x Mana Charge:",
            "* Deals 215% damages to the target and nearby enemies.",
            "* The target and nearby enemies get -34% defense for 3 turns.",
            "3x Mana Charge:",
            "* Deals 365% damages to the target and nearby enemies.",
            "* The caster and nearby allies get +50% attack for 3 turns.",
            "* The target and nearby enemies get -44% defense for 3 turns."
        ]
    },
    {
        "heroId": "pirate_first_mate",
        "name": "Boomer",
        "effects": [
            "Deals 204% damage to all enemies",
            "The caster and nearby allies get +94% defense against Holy for 3 turns"
        ]
    },
    {
        "heroId": "wonderland_cheshire_cat",
        "name": "Cheshire Cat",
        "effects": [
            "Rearranges the enemy positions randomly",
            "All holy enemies get -44% defense for 4 turns",
            "All enemies receive 276 damage over 4 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "wonderland_cheshire_cat_costume_malicious",
        "name": "Cheshire Cat C1",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "All Holy enemies get -34% defense for 4 turns.",
            "All enemies receive 364 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "mighty_pet_cupcake",
        "name": "Cupcake",
        "effects": [
            "Steals Minions from the target.",
            "Deals 400% damage to the target.",
            "The target can't receive new Minions for 4 turns."
        ]
    },
    {
        "heroId": "undead_captain_warrior",
        "name": "Cyprian",
        "effects": [
            "The caster and nearby allies counterattack with 125% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "undead_captain_warrior_costume_prince",
        "name": "Cyprian C1",
        "effects": [
            "All allies counterattack with 60% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "undead_captain_warrior_costume_reveller",
        "name": "Cyprian C2",
        "effects": [
            "The caster and nearby allies counterattack with 80% of the damage received for 4 turns.",
            "The caster and nearby allies regenerate a moderate amount of mana for each counterattack for 4 turns. The effect gets diminished for consecutive activations during the same turn.",
            "The caster and nearby allies reduce all received damage by -35% for 4 turns."
        ]
    },
    {
        "heroId": "undead_captain_warrior_costume_cute",
        "name": "Cyprian Toon",
        "effects": [
            "The caster and nearby allies counterattack with 125% of the damage received for 5 turns. This status effect is undispellable and lasts 2 turns longer on Dark characters."
        ]
    },
    {
        "heroId": "undead_captain_warrior_costume_glass",
        "name": "Cyprian Glass",
        "effects": [
            "The caster and nearby allies counterattack with 125% of the damage received for 5 turns.",
            "All Dark allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "christmas_dizzy",
        "name": "Dizzy",
        "effects": [
            "Deals 250% damage to the target and nearby enemies.",
            "Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster.",
            "The caster and nearby allies reflect all status effects and 100% damage back to the attacker and block all other negative effect from enemies' Holy Special Skills for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "fox_foxglove",
        "name": "Foxglove",
        "effects": [
            "Deals 255% damage to the target and nearby enemies.",
            "The target and nearby enemies receive lasting 97 Poison damage per turn. (This effect lasts until it is cleansed, replaced or removed.)",
            "The target and nearby enemies get -30% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "s3_fura",
        "name": "Fura",
        "effects": [
            "Deals 150% damage to all enemies.",
            "Reduces max health of all enemies by 100. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 100.",
            "All enemies get -50% decrease for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "s3_fura_costume_herbalist",
        "name": "Fura C1",
        "effects": [
            "Deals 280% damage to the target and nearby enemies.",
            "Reduces the mana of the target and the nearby enemies by 15%.",
            "The target and nearby enemies get -75% decrease for any healing received for 3 turns."
        ]
    },
    {
        "heroId": "sand_vizier",
        "name": "Gafar",
        "effects": [
            "Deals 260% damage to the target.",
            "The target receives 228 damage over 4 turns.",
            "The target gets -100% increase for any healing received for 2 turns. This effect can't be cleansed.",
            "Dispels status ailments from the caster."
        ]
    },
    {
        "heroId": "journey_heifeng_guai",
        "name": "Heifeng Guai",
        "effects": [
            "Deals 285% damage to target.",
            "The duration of dispellable status ailments is reset for the target.",
            "The target gets -35% defense for 3 turns."
        ]
    },
    {
        "heroId": "villain_ingolf",
        "name": "Ingolf",
        "effects": [
            "Deals 280% damage to all enemies",
            "Reduces the duration of all enemies active buffs by 1 turn.",
            "All enemies get corrosive poison for 4 turns. Corrosive Poison deals 50 damage and lowers the target's mana generation by -9% each turn. Deals extra damage against heroes with Minions or Mega Minions."
        ]
    },
    {
        "heroId": "sand_tower",
        "name": "Jabbar",
        "effects": [
            "Deals 235% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 172 damage over 4 turns.",
            "The target and nearby enemies get -75% increase for any healing received for 2 turns. This effect can't be cleansed.",
            "Dispels status ailments from the caster."
        ]
    },
    {
        "heroId": "owl_juliani",
        "name": "Juliani",
        "effects": [
            "This Special Skill never misses its targets.",
            "Attacks the target and nearby enemies with Moonrise Strike dealing up to 860 damage. Deals 30% more damage if the target is Holy.",
            "The target and nearby enemies receive 900 Poison damage over 5 turns. The caster and all allies absorb 35% of the dealt Poison damage as health."
        ]
    },
    {
        "heroId": "musketeer_kitty",
        "name": "Kitty",
        "effects": [
            "All allies regenerate 450 boosted health over 3 turns. Boosted health can exceed max HP.",
            "All allies reflect status ailments to a random character on the opposing team for 3 turns. (Only cleansable status ailments are reflected.)",
            "The caster gets +30% defense for 3 turns."
        ]
    },
    {
        "heroId": "musketeer_kitty_costume_harvester",
        "name": "Kitty C1",
        "effects": [
            "All allies regenerate 561 boosted health over 3 turns. Boosted health can exceed max HP.",
            "All allies reflect status ailments to a random character on the opposing team for 3 turns. (Only cleansable status ailments are reflected.)",
            "The caster gets +74% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "castle_bear_koda",
        "name": "Koda",
        "effects": [
            "Deals 400% damage to the target.",
            "The target gets -35% defense for 3 turns.",
            "The defense decreases by -10% each turn, up to -55%."
        ]
    },
    {
        "heroId": "elemental_lexi",
        "name": "Lexi",
        "effects": [
            "The caster and nearby allies become Soul onnected for received damage with  each other for 4 turns. Soul Connected allies share received damage.",
            "The target and nearby enemies become Soul Connected for 4 turns. Soul Cibbected enemies share received damage.",
            "The caster and nearby allies get +94% defense against Holy for 4 turns.",
            "The target and nearby enemies get -44% defense against Dark for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_meadow",
        "name": "Meadow",
        "effects": [
            "Deals 265% damage to the target.",
            "The target receives 402 Poison damage over 3 turns, starting low and increasing with every turn."
        ]
    },
    {
        "heroId": "knights_merlin",
        "name": "Merlin",
        "effects": [
            "Deals 220% damage to the target",
            "The more mana the enemies have,the more damage they will receive, up to 250%",
            "The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns."
        ]
    },
    {
        "heroId": "knights_merlin_costume_astrology",
        "name": "Merlin C1",
        "effects": [
            "Deals 210% damage to the target and nearby enemies.",
            "The more mana the enemies have, the more damage they will receive, up to 270%.",
            "The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns"
        ]
    },
    {
        "heroId": "s2_proteus",
        "name": "Proteus",
        "effects": [
            "The target and nearby enemies receive 327 Poison damage over 3 turns.",
            "The target and nearby enemies can't gain mana for 3 turns."
        ]
    },
    {
        "heroId": "s2_proteus_costume_farseer",
        "name": "Proteus C1",
        "effects": [
            "All enemies receive 324 Poison damage over 2 turns.",
            "All enemies get -50% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "blackguard_knight",
        "name": "Rigard",
        "effects": [
            "Recover 42% health for all allies.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "blackguard_knight_costume_elegant",
        "name": "Rigard C1",
        "effects": [
            "All allies regenerate 609 HP over 3 turns.",
            "All allies get +48% attack for 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "blackguard_knight_costume_healer",
        "name": "Rigard C2",
        "effects": [
            "Boosts health of all allies by 410. Boosted health can exceed max HP.",
            "All allies get +40% defense for 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "blackguard_knight_costume_cute",
        "name": "Rigard Toon",
        "effects": [
            "Recovers 45% health for all allies.",
            "All allies get +34% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Dark characters.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "blackguard_knight_costume_glass",
        "name": "Rigard Glass",
        "effects": [
            "Recovers 47% health for all allies.",
            "All Dark allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "institute_ryleh",
        "name": "Ryleh",
        "effects": [
            "Deals 400% damage to the target and inflicts 30 Insanity on them.",
            "The target gets Soul Bound for 3 turns. This effect can't be cleansed. (This effect always bypass reflection.)",
            "All damage received by the caster is also dealt to all Soul Bound enemies. (Damage is shared between all Soul Bound enemies. This effect wil not share damage incoming from other shared damage sources or counterattacks.)",
            "Inflicts 55 Insanity to the caster."
        ]
    },
    {
        "heroId": "undead_female_warrior",
        "name": "Sabina",
        "effects": [
            "Recovers 42% health for all allies.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "undead_female_warrior_costume_princess",
        "name": "Sabina C1",
        "effects": [
            "All allies regenerate 609 HP over 3 turns.",
            "All enemies are immune to new buffs for 3 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "undead_female_warrior_costume_rococo",
        "name": "Sabina C2",
        "effects": [
            "All allies regenerate 609 HP over 3 turns.",
            "All allies are immune to new status ailments for 3 turns.",
            "Cleanses ailment from all allies."
        ]
    },
    {
        "heroId": "undead_female_warrior_costume_cute",
        "name": "Sabina Toon",
        "effects": [
            "Recovers 45% health for all allies.",
            "All allies get +34% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Dark characters.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "undead_female_warrior_costume_glass",
        "name": "Sabina Glass",
        "effects": [
            "Recovers 46% health for all allies.",
            "All Dark allies reflect status ailments and negative stacks for 2 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "magic_sergei",
        "name": "Sergei",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies get -54% defense against Dark for 3 turns.",
            "2x Mana Charge:",
            "* All allies get +100% normal attack for 5 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +160% increase power while this effect is active."
        ]
    },
    {
        "heroId": "tales1_sharkhai",
        "name": "Shar'Khai",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* All allies get +80% normal attack for 5 turns. The normal attack is increased by 20% each turn. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +160% increased power while this effect is active.",
            "* All allies get +20% critical chance for 5 turns.",
            "2nd:",
            "* All allies get +80% normal attack for 5 turns. The normal attack is increased by 20% each turn. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +160% increased power while this effect is active.",
            "* All allies get +35% critical chance for 5 turns."
        ]
    },
    {
        "heroId": "tales1_sharkhai_costume_butcher",
        "name": "Shar'Khai C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* All allies get +70% normal attack for 5 turns. The normal attack is increased by 15% each turn. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +130% increased power while this effect is active.",
            "* All allies get +15% critical chance for 5 turns.",
            "2nd:",
            "* All allies get +90% normal attack for 5 turns. The normal attack is increased by 25% each turn. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +190% increased power while this effect is active.",
            "* All allies get +40% critical chance for 5 turns."
        ]
    },
    {
        "heroId": "shadow_shoggo",
        "name": "Shoggo",
        "effects": [
            "Deals 250% damage to all and inflicts 10 Insanity on them.",
            "All enemies are immune to new status effect buffs for 4 turns.",
            "Inflicts 55 Insanity on the caster."
        ]
    },
    {
        "heroId": "moth_shyombre",
        "name": "Shyombre",
        "effects": [
            "Deals 250% damage to the enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled.",
            "The enemies on the edges of the enemy formation receives 220 Toxin damage over 4 turns. If Toxin is cast on a target with boosted health, Minions or Mega Minion, the Toxin damage received is increased. (The Toxin damage is increased by +100% against targets with boosted health. Each Minion or Mega Minion owned by the target increases the damage by additional +33%, up to total +199%.)"
        ]
    },
    {
        "heroId": "s3_stonecleave",
        "name": "Stonecleave",
        "effects": [
            "Removes all status effects and stacks from the caster. Removes even status effects and stacks that are otherwise undispellable or uncleansable.",
            "The caster shifts into Dire Ghost form.",
            "While in Dire Ghost form, the caster automatically deals 175% damage against a random enemy each turn.",
            "While in Dire Ghost form, the caster can't gain mana and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks,  status effects and stacks except the damage from enemies whose element is  strong against the caster.",
            "Dire Ghost form lasts for 4 turns."
        ]
    },
    {
        "heroId": "fleur_talesie",
        "name": "Talesie",
        "effects": [
            "Deals 220% damage to the target.",
            "Deals 180% damage to all enemies marked with Blood Lily.",
            "All enemies marked with a Blood Lily receive 189 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "blackguard_commander",
        "name": "Tiburtus",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "blackguard_commander_costume_metal",
        "name": "Tiburtus C1",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All enemies get -34% defense for 4 turns."
        ]
    },
    {
        "heroId": "blackguard_commander_costume_feather",
        "name": "Tiburtus C2",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "Reduces the max health of the target and nearby enemies by 600 over 4 turns. The effect is stronger against targets with boosted health. (Max heath can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 150 per turn.)"
        ]
    },
    {
        "heroId": "blackguard_commander_costume_cute",
        "name": "Tiburtus Toon",
        "effects": [
            "Deals 325% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -24% defense for 6 turns.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "blackguard_commander_costume_glass",
        "name": "Tiburtus Glass",
        "effects": [
            "Deals 335% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target and nearby enemies get -29% defense for 6 turns."
        ]
    },
    {
        "heroId": "ronin_tokage_daigo",
        "name": "Tokage Daigo",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "x1 Mana Charge:",
            "Deals 180% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit target receive 398 Poison damage over 2 turns.",
            "The attack has 65% chance to bypass defensive buffs. (This includes counterattacks)",
            "x2 Mana Charge:",
            "Deals 280% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit target receive 597 Poison damage over 3 turns.",
            "The attack has 85% chance to bypass defensive buffs. (This includes counterattacks)",
            "x3 Mana Charge:",
            "Deals 380% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit target receive 796 Poison damage over 4 turns.",
            "The attack bypasses defensive buffs. (This includes counterattacks)"
        ]
    },
    {
        "heroId": "goblin_acidfire",
        "name": "Acidfire",
        "effects": [
            "Deals 355% damage to the target and nearby enemies.",
            "Wither: The target and nearby enemies get -225 attack and -225 defense.",
            "The target and nearby enemies reflect status effect buffs to a random character on the opposing team for 3 turns. (Only dispellable buffs are reflected.)"
        ]
    },
    {
        "heroId": "elemental_aconia",
        "name": "Aconia",
        "effects": [
            "Summons a Dagger Fiend for the target and Holy enemies. The Fiend damages its target with 250% attack every turn.",
            "The Dagger Fiend absorbs healing. It disappears after absorbing healing amount equal to 20% of its target's max health.",
            "When the Dagger Fiend disappears after it has absorbed enough healing, the owner receives 810 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "elemental_aconia_costume_courier",
        "name": "Aconia C1",
        "effects": [
            "Summons a Dagger Fiend for the target and Holy enemies. The Fiend damages its target with 200% attack every turn.",
            "The Dagger Fiend absorbs healing. It disappears after absorbing a healing amount equal to 30% of its target's max health.",
            "When the Dagger Fiend disappears after it has absorbed enough healing, the owner receives 1011 Bleed damage over 3 turns.",
            "All enemies take +30% increased damage from status ailments and negative stacks for 6 turns."
        ]
    },
    {
        "heroId": "dark_god_aeron",
        "name": "Aeron",
        "effects": [
            "All allies regenerate 1150 HP over 5 turns.",
            "The caster and nearby allies are immune to new status ailments for 5 turns. This effect can't be dispelled.",
            "Cleanses status ailments from the caster and nearby allies.",
            "Element Link gives all Dark allies + 5% attack and + 5% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "dark_god_aeron_costume_periwig",
        "name": "Aeron C1",
        "effects": [
            "Recovers 47% health for all allies.",
            "Lifts all cleansable status ailments from the caster and nearby allies and randomly distributes them on enemies.",
            "Element Link gives all Dark allies +5% attack and +5% defense for 6 turns. Can't be dispelled."
        ]
    },
    {
        "heroId": "mimic_aether_purple",
        "name": "Aether Mimic Dark",
        "effects": [
            "Deals 600% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "Boosts all allies' health by 30% of damage dealt.",
            "The Mimic chest closes for 2 turns."
        ]
    },
    {
        "heroId": "magic_carpet_agadh",
        "name": "Agadh",
        "effects": [
            "Deals 565% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receives Corrosive Poison for 3 turns. The Corrosive Poison deals 134 Poison damage and lowers the target's mana generation by 10% each turn. Deals extra damage against heroes with Minions or a Mega Minion. (Affects only mana generated from matching tiles or mana gained by the defense team at then end of their turn.)",
            "The target and nearby enemies can't revive their allies or themself for 3 turns."
        ]
    },
    {
        "heroId": "magic_agrafena",
        "name": "Agrafena",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies get -20% attack for 3 turns.",
            "* All enemies get -20% defense for 3 turns.",
            "* All enemies receive 159 Poison damage over 3 turns.",
            "2x Mana Charge:",
            "* All allies get +45% attack, and a further 20% increase every time they are hit during 6 turns.",
            "* All allies get +54% defense, and a further 5% increase every time they are hit during 6 turns.",
            "* All allies regenerate 1428 HP over 6 turns."
        ]
    },
    {
        "heroId": "magic_agrafena_costume_dark",
        "name": "Agrafena C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies get -27% attack for 3 turns.",
            "* All enemies get -27% defense for 3 turns.",
            "* All enemies receive 342 Poison damage over 3 turns. The caster absorbs 10% of dealt Poison damage as health.",
            "2x Mana Charge:",
            "* All allies get +50% attack, and a further 20% increase every time they are hit during 6 turns, up to +150% attack.",
            "* All allies get +59% defense, and a further 5% increase every time they are hit during 6 turns, up to +84% defense.",
            "* All allies regenerate 1500 boosted health over 6 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "dark_god_akilius",
        "name": "Akilius",
        "effects": [
            "Steals Minions from the target.",
            "Deals 490% damage to the target.",
            "The target and nearby enemies get -45% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)",
            "Elemental Link gives all Dark allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s3_alfrike",
        "name": "Alfrike",
        "effects": [
            "Deals 200% damage to hit targets.",
            "Casts 5 Dark Cubes to random enemies.",
            "Dark Cube reduces max health from the target by 224. Max health can't get lower than 30% of the original max health.",
            "Enemies hit automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns."
        ]
    },
    {
        "heroId": "s3_alfrike_costume_hatter",
        "name": "Alfrike C1",
        "effects": [
            "Deals 240% damage to hit targets.",
            "Casts 5 Dark Cubes to random enemies.",
            "Dark Cube reduces max health from the target by 184. This effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 184.",
            "Enemies hit automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns."
        ]
    },
    {
        "heroId": "magic_carpet_amelia",
        "name": "Amelia",
        "effects": [
            "Recovers 26% health for all allies.",
            "Dispels 1 buff from all enemies. (The latest buffs are dispelled first.)",
            "All allies except the caster get +34% chance to dodge Special Skills for 3 turns. Each dodge gives +27% attack stack(Max: 10)."
        ]
    },
    {
        "heroId": "ninja_amethyst",
        "name": "Amethyst",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 200% damage to all enemies.",
            "- Summons a Ninja Assassin Fiend for all enemies. The Fiend damages its target with 59% attack each turn.",
            "- The Ninja Assassin Fiend absorbs healing. It disappears after absorbing a healing amount equal to 32% of its target's max health.",
            "x2 Mana Charge:",
            "- Deals 275% damage to all enemies.",
            "- Summons a Ninja Assassin Fiend for all enemies. The Fiend damages its target with 75% attack each turn.",
            "- The Ninja Assassin Fiend absorbs healing. It disappears after absorbing a healing amount equal to 50% of its target's max health.",
            "x3 Mana Charge:",
            "- Deals 355% damage to all enemies.",
            "- Summons a Ninja Assassin Fiend for all enemies. The Fiend damages its target with 84% attack each turn.",
            "- The Ninja Assassin Fiend absorbs healing. It disappears after absorbing a healing amount equal to 54% of its target's max health."
        ]
    },
    {
        "heroId": "dark_god_anoushka",
        "name": "Anoushka",
        "effects": [
            "Recover 32% health for all allies.",
            "Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "The target falls asleep and receives +50% increased damage while sleeping. (A sleeping character cannot gain mana or attack. The sleeping target is woken once it takes damage. This excludes damage from Minions, Fiends, Mega Minions and Mega Fiends. This effect is uncleansable)",
            "Elemental Link gives all Dark allies +10% additional Special Skill damage for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "s5_anubis",
        "name": "Anubis",
        "effects": [
            "Inflicts the target with Greed for 3 turns. The enemies with Greed prevent other enemies from receiving friendly effects of their allies Special Skills.",
            "All enemies receive 501 Poison damage over 3 turns.",
            "All enemies get -34% defense for 3 turns."
        ]
    },
    {
        "heroId": "s5_anubis_costume_dancefloor",
        "name": "Anubis C1",
        "effects": [
            "Inflicts the target with Greed for 3 turns. The enemies with Greed prevent other enemies from receiving friendly effects of their allies' Special Skills.",
            "All enemies receive 888 Poison damage over 3 turns.",
            "All enemies get -28% defense for 3 turns."
        ]
    },
    {
        "heroId": "musketeer_aramis",
        "name": "Aramis",
        "effects": [
            "Deals 375% damage to the target and nearby enemies.",
            "Boosts all allies' health by 30% of damage dealt.",
            "All allies are immune to new status ailments for 3 turns. This effect can't be dispelled.",
            "Caster gets +30% defense for 3 turns."
        ]
    },
    {
        "heroId": "musketeer_aramis_costume_boulanger",
        "name": "Aramis C1",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "Boosts all allies' health by 30% of damage dealt.",
            "All allies are immune to new status ailments for 3 turns. This effect can't be dispelled.",
            "The caster reduces all received damage by -20% for 3 turns."
        ]
    },
    {
        "heroId": "dark_god_arfanias",
        "name": "Arfanias",
        "effects": [
            "Deals 460% damage to the target.",
            "The more mana the enemies have, the more damage they will receive up to 650%.",
            "The caster gets +75% chance to dodge Special Skills that deal damage for 3 turns.",
            "Element Link gives all Dark allies +10% defense for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "construct_arzen",
        "name": "Arzen",
        "effects": [
            "Deals 510% damage to the target.",
            "Has a 85% chance for additional hits on random enemies up to 4 times. Additional hits deal minor damage.",
            "The target resists healing and receives 200 damage per each resisted healing for 3 turns."
        ]
    },
    {
        "heroId": "mimic_ascension_item_purple",
        "name": "Ascension Mimic Dark",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target and nearby enemies receive 668 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "shadow_asketel",
        "name": "Asketel",
        "effects": [
            "Deals 410% damage to the target and nearby enemies and inflicts 40 Insanity on them.",
            "All active status ailments are uncleansable for the target and nearby enemies for the remaining turns of the status ailment.",
            "Casting this Special Skill inflicts 45 Insanity to the caster."
        ]
    },
    {
        "heroId": "s5_bastet",
        "name": "Bastet",
        "effects": [
            "Deals 220% damage to all enemies.",
            "All allies get +45% chance to dodge Special Skills for 3 turns. Each dodge gives +5% defense stack (Max: 10)."
        ]
    },
    {
        "heroId": "s5_bastet_costume_forest",
        "name": "Bastet C1",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All allies get +45% chance to dodge Special Skills for 3 turns. Each dodge gives +10% defense stack (Max: 10)."
        ]
    },
    {
        "heroId": "magic_becky",
        "name": "Becky",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 350% damage to the target.",
            "* Each time the target activate their Special Skill during 3 turns mana of all other enemies is reduced by -15%.",
            "2x Mana Charge:",
            "* Increase the mana of all allies by 10%.",
            "* For the next 5 turns, this character deals 250% damage to all enemies each time any other ally casts their Special Skill. (Each character can trigger this effect once per turn.)"
        ]
    },
    {
        "heroId": "magic_becky_costume_gothic",
        "name": "Becky C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 430% damage to the target.",
            "* Each time the target activate their Special Skill during 3 turns mana of all other enemies is reduced by -15%.",
            "2x Mana Charge:",
            "* The caster and nearby allies get +45% defense against Holy for 5 turns.",
            "* Increase the mana of all allies by 10%.",
            "* For the next 5 turns, this character deals 265% damage to all enemies each time any other ally casts their Special Skill. (Each character can trigger this effect once per turn.)"
        ]
    },
    {
        "heroId": "bard_belladonna",
        "name": "Belladonna",
        "effects": [
            "Recovers 42% health for all allies.",
            "All allies recover additional 8% health for each Fiend owned by the allies.",
            "All allies get +54% attack for 4 turns.",
            "All allies are immune to buff dispels and reallocations for 4 turns. (The immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "s3_bera",
        "name": "Bera",
        "effects": [
            "Summons a Moth Minion for each ally. The Moth Minion inherits 20% HP and 20% attack from the caster.",
            "Each hit from a Moth Minion gives the target the following status ailments:",
            "* The target receives 180 Poison damage over 3 turns.",
            "* The target resists new Minions for 3 turns."
        ]
    },
    {
        "heroId": "s3_bera_costume_conjurer",
        "name": "Bera C1",
        "effects": [
            "Summons a Moth Minion for each ally. Moth Minion inherits 30% attack and 30% HP from the caster.",
            "Each hit from the Moth Minion gives the target the following status ailments:",
            "* The target receives 138 Poison damage over 3 turns.",
            "* The target can't receive new Minions for 3 turns."
        ]
    },
    {
        "heroId": "fables_boss_wolf",
        "name": "Boss Wolf",
        "effects": [
            "All allies get +24% mana generation for 4 turns. This effect can't be dispelled.",
            "All enemies get -34% mana generation for 4 turns.",
            "All allies counterattack with 115% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "titan_hunter_brachynd",
        "name": "Brachynd",
        "effects": [
            "Deals 250% damage to all  enemies.",
            "Against Titans, deals 500% damage.",
            "All allies get +50% attack for 4 turns. Against Holy Titans, all allies get +60% attack.",
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage."
        ]
    },
    {
        "heroId": "construct_carta",
        "name": "Carta",
        "effects": [
            "Recovers 45% health for all allies.",
            "Lifts the latest status ailments from all allies and distributes them on enemies.",
            "All allies get +33% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "castle_stag_cecilia",
        "name": "Cecilia",
        "effects": [
            "Deals 240% damage to all enemies.",
            "All allies get +45% chance to dodge Special Skills for 3 turns. Each dodge boosts health by 250. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "owl_cennius",
        "name": "Cennius",
        "effects": [
            "This Special Skill never misses its targets.",
            "Attacks the target with Moonrise Strike, dealing up to 1100 damage. Deals 40% more damage if the target is Holy.",
            "After a successful cast, has 100% chance to recast Blade Wings again on a random target.",
            "Can recast up to 3 times and chance to recast is reduced by -35% after every successful cast."
        ]
    },
    {
        "heroId": "dark_god_chakkoszrot",
        "name": "Chakkoszrot",
        "effects": [
            "Deals 295% damage to all enemies",
            "All enemies with a dispellable mana generation buff get -54% mana generation for 5 turns. This effect can't be cleansed.",
            "All enemies are immune to new status effect buffs for 5 turns.",
            "Element Link gives +10% increase for any healing received for all Dark allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "outlaw_chao_gai",
        "name": "Chao Gai",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 420% damage to the target.",
            "Casts Full Removal on the caster. (Full Removal removes all status effects, stack, Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleansable.).",
            "The caster shifts into Ghost form for 2 turns.",
            "When Ghost form expires:",
            "All allies get +40% critical chance for 2 turns. This effect is undispellable. (While in Ghost form. Character can't gain mana and can't be healed by Special Skills, but is immune to normal attacks, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects.)"
        ]
    },
    {
        "heroId": "styx_charon",
        "name": "Charon",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Boosts health of all allies by 450. Boosted health can exceed max HP.",
            "2x Mana Charge:",
            "* Each fallen ally has 50% chance to get revived with 10% HP.",
            "* All allies regenerate 609 HP over 3 turns.",
            "3x Mana Charge:",
            "* Boosts health of all allies by 700. Boosted health can exceed max HP.",
            "* Each fallen ally has 65% chance to get revived with 27% HP.",
            "* All allies regenerate 952 HP over 4 turns."
        ]
    },
    {
        "heroId": "dark_god_clarissa",
        "name": "Clarissa",
        "effects": [
            "Deals 175% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 344 Poison damage over 2 turns.",
            "Deals extra damage against Holy.",
            "Element Link gives all Dark allies +30% defense against Special Skills for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "villain_dark_lord",
        "name": "Dark Lord",
        "effects": [
            "Deals 550% damage to the target.",
            "Reduces the duration of the target and nearby enemies buffs by 1 turn.",
            "The target and nearby enemies receive Corrosive Poison for 4 turns. The Corrosive Poison deals 144 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion."
        ]
    },
    {
        "heroId": "villain_dark_lord_costume_astronomer",
        "name": "Dark Lord C1",
        "effects": [
            "Deals 560% damage to the target.",
            "Reduces the duration of the target and nearby enemies' buffs by 2 turns. (The duration reduction affects both dispellable and undispellable effects. If the duration of any effect is reduced to zero, the effect is considered as having expired naturally.)",
            "The target and nearby enemies receive Corrosive Poison for 4 turns. The Corrosive Poison deals 320 Poison damage and lowers the target's mana generation by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "bard_darkbeat",
        "name": "Darkbeat",
        "effects": [
            "Deals 355% damage to all enemies.",
            "Reduces the duration of all allies' active status ailments by 2 turns. (The duration modification affects both cleansable and uncleasable effects. If the duration of any effect is reduced to zero the effect is considered as having expired naturally.)",
            "Reduces the duration of all enemies' active buffs by 2 turns.(The duration modification affects both cleansable and uncleasable effects. If the duration of any effect is reduced to zero the effect is considered as having expired naturally.)",
            "All allies are immune to buff dispels and reallocations for 4 turns. (The immunity also includes this effect itself.)"
        ]
    },
    {
        "heroId": "goblin_darkfeather",
        "name": "Darkfeather",
        "effects": [
            "Recovers 25% health of all allies.",
            "Growth: All allies get 180 attack and 180 defense.",
            "All allies have 50% chance to deal 270% damage to a random enemy after any subsequent allied Special Skill is cast for 3 turns. (Damage is dealt on the first Special Skill cast of each character per turn.)"
        ]
    },
    {
        "heroId": "goblin_deadboot",
        "name": "Deadboot",
        "effects": [
            "Steals all dispellable status effect buffs from the target and randomly distributes them on allies.",
            "Deals 375% damage to the target.",
            "Deals additional 50% damage per transferred status effect buff, up to 625% damage in total.",
            "Wither: The target gets -300 defense."
        ]
    },
    {
        "heroId": "astral_demilune",
        "name": "Demilune",
        "effects": [
            "The Special Skill never misses its targets.",
            "Deals 495% damage to the target and minor damage to nearby enemies.",
            "Steals all dispellable buffs from the targer and nearby enemies and randomly distributes them on allies.",
            "Growth: The caster and nearby allies get 340 attack."
        ]
    },
    {
        "heroId": "mahayoddha_devyani",
        "name": "Devyani",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 500% damage to the target.",
            "Growth Boon: Deals 2x extra damage for each point of modified attack. (Wither and Growth modify character's Ability Scores.)",
            "Wither: The target get -350 defense."
        ]
    },
    {
        "heroId": "kingdom_diaochan",
        "name": "Diaochan",
        "effects": [
            "Recover 35% health for all allies.",
            "Summons a Lackey Minion for the caster and nearby allies with 16% HP and 25% attack inherited from the caster.",
            "Each time a Lackey Minion hits an enemy, it steals a random dispellable buff from the enemy and gives it to its owner."
        ]
    },
    {
        "heroId": "kingdom_diaochan_costume_flowers",
        "name": "Diaochan C1",
        "effects": [
            "Recover 33% health for all allies.",
            "Summons a Lackey Minion for the caster and nearby allies with 33% HP and 33% attack inherited from the caster.",
            "Each time a Lackey Minion hits an enemy, it steals a random dispellable buff from the enemy and gives it to its owner."
        ]
    },
    {
        "heroId": "magitech_sniper",
        "name": "Domitia",
        "effects": [
            "Deals 440% damage to the target.",
            "The caster and nearby allies get + 94% defense against Holy for 4 turns.",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "magitech_sniper_costume_steampunk",
        "name": "Domitia C1",
        "effects": [
            "Deals 400% damage to the target.",
            "The target and nearby enemies receive 356 Poison damage over 4 turns.",
            "Cleanses status ailments from the caster and nearby allies."
        ]
    },
    {
        "heroId": "magitech_sniper_costume_undead",
        "name": "Domitia C2",
        "effects": [
            "Deals 335% damage to target and nearby enemies",
            "The target and nearby enemies get -64% defense against Dark for 4 turns. Against Holy characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "magitech_sniper_costume_cute",
        "name": "Domitia Toon",
        "effects": [
            "Deals 590% damage to the target.",
            "The caster and nearby allies get +64% defense against Holy for 4 turns.",
            "Deals extra damage against Holy.",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "magitech_sniper_costume_glass",
        "name": "Domitia Glass",
        "effects": [
            "Deals 600% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster and nearby allies get +74% defense against Holy for 4 turns.",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "s4_doctor_moreau",
        "name": "Dr. Moreau",
        "effects": [
            "Deals 270% damage to the target and nearby enemies.",
            "The target and nearby enemies get -35% accuracy for 3 turns. The effect duration is reset if the target is healed. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "s4_doctor_moreau_costume_scribe",
        "name": "Dr. Moreau C1",
        "effects": [
            "Deals 265% damage to the target and nearby enemies.",
            "The target and nearby enemies get -40% accuracy for 4 turns. The effect duration resets if the target is healed. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "astral_dreadstar",
        "name": "Dreadstar",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 340% damage to all enemies.",
            "All enemies get -35% mana generation for 4 turns.",
            "All enemies get -85% decrease of any healing received for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_dubhain",
        "name": "Dubhan",
        "effects": [
            "Deals 300% damage to the target.",
            "If the target had more than 50% health before receiving damage, targets another enemy who had over 50% health before receiving any damage from this Special Skill. If none of the other enemies had 50% health, targets a random enemy. The damage is increased on each consecutive hit. Each enemy can only hit once.",
            "All hit enemies receive 360 Bleed damage over 3 turns. The caster and their nearby allies absorb 30% of dealt Bleed damage as health."
        ]
    },
    {
        "heroId": "tales2_dularfulr",
        "name": "Dularfulr",
        "effects": [
            "Recovers 30% health for all allies.",
            "All allies get a Firestorm Ward for 4 turns, that reduces incoming Special Skill damage by up to -1300. Reduces damage by additional 30% when the attacker is of the Nature element.",
            "All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "scoundrel_duval",
        "name": "Duval",
        "effects": [
            "Ransacks the target, stealing health and buffs. (Steals 400 health. Safely steals one random Growth effect, positive stack, or status effect buff from the target. This includes undispellable buffs and Dance effects. Safe stealing bypasses secondary effects, such as damage on removal, from the removed buffs. Passive skills and family effects can still activate.)",
            "Deals 560% damage to the target.",
            "The target receives 1413 Poison damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "dark_god_eldwren",
        "name": "Eldwren",
        "effects": [
            "Deals 400% damage to the target.",
            "Summons a Wren Fiend to the target. The Fiend damages the enemies with 55% attack every turn.",
            "The Wren Fiend absorbs healing. it disapperars after absorbing a healing amount equal to 55% of its target's max health.",
            "The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns. This effect can't be cleansed.",
            "Element Link gives all Dark allies +20% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "vegetable_elsbeth",
        "name": "Elsbeth",
        "effects": [
            "Deals 600% damage to the target.",
            "If the target has Fiends or Mega Fiends, deals 500% damage to a random enemy.",
            "Summon a Seedling Fiend to each hit enemy. (The Seeding Fiend evolves into a Sprout Fiend after 2 turns. The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns. Seedling Fiend: 50% attack, 20% health, Sprout Fiend: 75% attack, 30% health, Blossom Mega Fiend: 250% attack, 60% health. A Fiend damages their target every turn. A Fiend disappears after absorbing healing. Amount of healing required depends on the target's max health. The evolution of the Fiends is delayed by 1 turn each time they absorb healing.)",
            "The caster and neaby allies get +44% defense, and a further 10% increase every time they are hit during 3 turns, up to +94% defense."
        ]
    },
    {
        "heroId": "mimic_emblem_purple",
        "name": "Emblem Mimic Dark",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target receives 387 Poison damage over 3 turns. This effect spreads to nearby enemies.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "valentines_eros",
        "name": "Eros",
        "effects": [
            "Deals 465% damage to the target.",
            "All damage the target receives is increased by +40% for 2 turns."
        ]
    },
    {
        "heroId": "mimic_training_hero_purple",
        "name": "Experience Mimic Dark",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, the caster recovers +50% health and gains 33% mana.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "elemental_farrah",
        "name": "Farrah",
        "effects": [
            "Deals 500% damage to the target.",
            "Deals additional 200% damage to as many random enemies as there are Dark tiles on the board, up to a maximum 12 hits. The damage is reduced on each consecutive hit.",
            "All hit targets get -35% defense against Dark, and a further -5% decrease every time they are hit for 4 turns."
        ]
    },
    {
        "heroId": "s3_freya",
        "name": "Freya",
        "effects": [
            "Summons a Raven Minion for each ally with 20% HP and 20% attack inherited from the caster.",
            "Raven Minion gives +120% attack to all its owner's other Minions.",
            "All allies get +30% defense for 4 turns."
        ]
    },
    {
        "heroId": "s3_freya_costume_witch",
        "name": "Freya C1",
        "effects": [
            "Summons a Raven Minion for each ally with 25% HP and 15% attack inherited from the caster.",
            "Raven Minion gives +180% attack to all its owner's other Minions.",
            "All allies get +36% chance to dodge Special Skills that deal damage for 4 turns."
        ]
    },
    {
        "heroId": "elemental_gastille",
        "name": "Gastille",
        "effects": [
            "All allies get +150% normal attack for 4 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of 200% increased power while this effect is active.",
            "All damage all enemies receive is increased by +55% for 4 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_gongoth",
        "name": "Gongoth",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "Wither: The target and nearby enemies get -350 attack.",
            "The target and nearby enemies receive +25% increased damage for 3 turns. The effect is increased by +10% for each Minion or Mega Minion owned by all enemies, up to +85% in total."
        ]
    },
    {
        "heroId": "slime_gooldron",
        "name": "Gooldron",
        "effects": [
            "Deals 385% damage to the target and nearby enemies.",
            "Summons a Slime Fiend for the target and nearby enemies. The Fiend damage the enemy with 50% attack every turn.",
            "The Slime Fiend absorbs healing. It disappears after absorbing a healing amount equal to 40% of its target's max health.",
            "At the end of each turn, the Slime Fiend steals one of its target's dispellable buffs or Growth effect and gives it to a random character on the opposite team."
        ]
    },
    {
        "heroId": "monster_hunter_goretooth",
        "name": "Goretooth",
        "effects": [
            "Deals 430% damage to the target.",
            "The target gets -45% defense for 2 turns. The defense decreases by -15% each turn, up to -60%.",
            "The target can't gain mana for 2 turns."
        ]
    },
    {
        "heroId": "gargoyle_goseck",
        "name": "Goseck",
        "effects": [
            "Deals 350% damage to all enemies.",
            "The less HP the caster has, the more damage they deal up to 700%."
        ]
    },
    {
        "heroId": "beowulf_grendels_mother",
        "name": "Grendel's Mother",
        "effects": [
            "Deals 410% damage to all enemies.",
            "All enemies receive 1230 Curse damage over 6 turns, starting low and increasing every turn.",
            "Source of Ailments: The following effects are cast on a random enemy at the start of each turn",
            "* +60% damage from status ailments for 5 turns.",
            "* -60% for all healing received for 5 turns.",
            "The Source of Ailments will activate 6 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "elemental_griffex",
        "name": "Griffex",
        "effects": [
            "Reduces the mana of all Holy enemies by 100%. Reduces the mana of all other enemies by 50%.",
            "Increases the mana of all Dark allies except the caster by 30%. Increases the mana of all other allies by 15%."
        ]
    },
    {
        "heroId": "elemental_griffex_costume_camera",
        "name": "Griffex C1",
        "effects": [
            "Reduces the mana of all Holy enemies by 100%. Reduces the mana of all other enemies by 55%.",
            "Increases the mana of all Dark allies except the caster by 30%. Increases the mana of all other allies by 15%. (This has no effect on other Griffex characters.)",
            "All allies are immune to new negative mana effects for 5 turns."
        ]
    },
    {
        "heroId": "dark_god_grimble",
        "name": "Grimble",
        "effects": [
            "Destroys all minions from all enemies.",
            "Deals 315% damage to all enemies.",
            "All allies get a small amount of mana for each destroyed minion",
            "Element Link gives all Dark allies +10% critical chance for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "guardian_cat_warrior",
        "name": "Guardian Panther",
        "effects": [
            "Deals 210% damage to the target and nearby enemies.",
            "The target and nearby enemies get -54% defense against Dark for 4 turns.",
            "Dispels buffs from the target and nearby enemies."
        ]
    },
    {
        "heroId": "guardian_cat_warrior_costume_fierce",
        "name": "Guardian Panther C1",
        "effects": [
            "Deals 285% damage to all enemies.",
            "All enemies get -34% defense against Dark for 3 turns.",
            "All enemies are immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "slime_gunktus",
        "name": "Gunktus",
        "effects": [
            "Deals 535% damage to the target and minor damage to nearby enemies.",
            "The caster gets +45% attack, and a further +20% increase every time they are hit during 3 turns.",
            "Caster receives Slime Revive status effect for 2 turns. If defeated while Slime Revive is active the caster will be reborn as a Slime with:",
            "* 100% inherited health.",
            "* 50% attack.",
            "* 50% defense.",
            "* Special Skill: Slime Slap.",
            "* This effect can't be dispelled.",
            "* Deals 350% damage to the target.",
            "If the Slime is not defeated in 3 turns, it will be reborn as the character's original form inheriting the Slime's health and mana."
        ]
    },
    {
        "heroId": "s4_hannah",
        "name": "Hannah",
        "effects": [
            "Deals 215% damage to the target and narby enemies.",
            "Summons a Golden Idol Field for the target and nearby enemies. The Fiend damages the enemy with 43% attack every turn.",
            "The Golden Idol Fiend absorbs healing and disappears when it has absorbed health equal to 20% of its owners max health.",
            "The Golden Idol Fiend gives -20% attack for its owner as long as the owner has Golden Idol Fiends. This effect cannot be cleansed."
        ]
    },
    {
        "heroId": "s4_hannah_costume_drover",
        "name": "Hannah C1",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "Summons a Golden Idol Fiend for the target and nearby enemies. The Fiend damages the enemy with 36% attack every turn.",
            "The Golden Idol Fiend absorbs healing. It disappears after absorbing a healing amount equal to 28% of its target's max health.",
            "When summoned, the Golden Idol Fiend gives -20% attack for its owner for as long as the owner has Golden Idol Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "astral_demon_haradea",
        "name": "Haradea",
        "effects": [
            "Deals 390% damage to the target and nearby enemies.",
            "The more mana the enemies have, the more damage they will receive, up to 450%.",
            "The target and nearby enemies receive Resonance for 3 turns. Each turn, Resonance deals 541 damage to the afflicted enemies and 270 damage to nearby enemies.",
            "The target and nearby enemies receive Mana Corruption for 3 turns. Each time an afflicted enemy receives mana from an additional source, they receive 800 damage. (Mana added for the defense team at the end of their turn or from matching tiles activates Mana Corruption only if the target has a mana generation buff or a positive mana generation stack. Mana additions from other sources always activate Mana Corruption.)"
        ]
    },
    {
        "heroId": "monster_hunter_hawthorn",
        "name": "Hawthorn",
        "effects": [
            "All allies regenerate 672 boosted health over 4 turns. Boosted health can exceed max HP.",
            "All allies receive a small amount of mana over 4 turns.",
            "All allies reflect status ailments for 4 turns and negative stacks for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "dark_god_hel",
        "name": "Hel",
        "effects": [
            "Deals 375% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies can't gain mana for 4 turns.",
            "Deals extra damage against Holy.",
            "Elemental Link gives all Dark allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "dark_god_hel_costume_omen",
        "name": "Hel C1",
        "effects": [
            "Deals 350% damage to all enemies.",
            "The caster steals generated mana of all enemies over 4 turns starting low and increasing every turn until on the last turn all generated mana is stolen. This effect can't be cleansed, but it gets removed if the caster dies.",
            "Deals extra damage to Holy.",
            "Elemental Link gives all Dark allies +15% attack and +15% defense for 6 turns. This effect can't be displelled."
        ]
    },
    {
        "heroId": "tales2_hreidmarr",
        "name": "Hreidmarr",
        "effects": [
            "Attacks all enemies with Firestorm Strike, dealing up to 2200 damage. Deals 40% more if the target is of the Nature element. This Special Skill never misses its targets.",
            "The caster steals generated mana of all enemies over 5 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be cleansed, but it gets removed if the caster is defeated.",
            "At the end of each turn, steals the latest dispellable buff from all enemies and distributes them randomly among allies for 5 turn."
        ]
    },
    {
        "heroId": "outlaw_hu_sanniang",
        "name": "Hu Sanniang",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 500% damage to the target.",
            "Safely dispels status effect buffs from the target. (Safe dispel bypasses secondary effects, such as damage on removal, from the removed status effect buffs. External effects such as passives skills and family effects can still activate.",
            "Deals 500% damage to a random target.",
            "Increases the duration of the target's active status ailments by 5 turns. (The duration increase affect both cleansable and uncleansable status ailments.)"
        ]
    },
    {
        "heroId": "s4_hulda",
        "name": "Hulda",
        "effects": [
            "Summons a Larva Minion for each ally with 31% HP inheried from the caster. The Minion recovers 11% health for its owner at the end of each turn.",
            "When summoned, the Larva Minion gives +24% mana generation for its owner for as long as the owner has Larva Minions. This effect can't be dispelled.",
            "When summoned, the Larva Minion gives +54% defense for is owner for as long as the owner has Larva Minions. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s4_hulda_costume_nurse",
        "name": "Hulda C1",
        "effects": [
            "Summons a Larva Minion for each ally with 36% HP inherited from the caster. The Minion recovers 15% health for its owner at the end of each turn.",
            "When summoned, the Larva Minion gives +24% mana generation for its owner for as long as the owner has Larva Minions. This effect can't be dispelled.",
            "When summoned, the Larva Minion gives +50% defense for its owner for as long as the owner has Larva Minions. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "shadow_hunter",
        "name": "Hunter",
        "effects": [
            "This Special Skill never misses its targets.",
            "The target get -25% defense for 3 turns.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, then nearby enemies are inflicted with 100 Insanity.",
            "Casting this Special Skill inflicts 45 Insanity to the caster."
        ]
    },
    {
        "heroId": "monster_hunter_hurricane",
        "name": "Hurricane",
        "effects": [
            "Deals 410% damage to the target and nearby enemies.",
            "The duration of status ailments is reset for the target and nearby enemies.",
            "The target and nearby enemies receive 916 Burn damage over 4 turns. The caster absorbs 50% of dealt Burn damage as health.",
            "Stack (Max: 10): The caster gets +20% attack against the weaker element."
        ]
    },
    {
        "heroId": "beowulf_hygd",
        "name": "Hygd",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Recovers 50% health for all allies.",
            "Source of Buffs: The following effects are cast on all allies at the start of each turn:",
            "+40% defense against Special Skills for 2 turns.",
            "+40% increase for all healing received for 2 turns.",
            "The Source of Buffs will activate 3 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "wild_cat_imagus",
        "name": "Imagus",
        "effects": [
            "Wither: All enemies get -400 attack.",
            "All enemies get -80% decrease for any healing received for 4 turns. This effect can't be cleansed.",
            "Lifts the latest cleansable status ailment from all allies and randomly distributes them on enemies.",
            "Cleanses status ailments from all allies at the end of each turn for 4 turns."
        ]
    },
    {
        "heroId": "wonderland_jabberwocky",
        "name": "Jabberwock",
        "effects": [
            "Deals 300% damage to the enemies on the edges of the enemy formation, If there is only one enemy alive, the damage is doubled.",
            "The enemies on the edges of the enemy formation receive 249 poison damage over 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "wonderland_jabberwocky_costume_moth",
        "name": "Jabberwock C1",
        "effects": [
            "Deals 300% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "The enemies on the edges of the enemy formation receive Corrosive Poison for 3 turns. The Corrosive Poison deals 153 Poison damage and lowers the target's mana generation by -12% each turn. This effect can't be cleansed. Deals extra damage against heroes with Minions or Mega Minions."
        ]
    },
    {
        "heroId": "magic_jett",
        "name": "Jett",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 290% damage to the target.",
            "* The target receives 588 Poision damage over 3 turns. The caster absorbs 100% of the dealt Poison damage as heath.",
            "2x Mana Charge:",
            "* Deals 300% damage to all enemies.",
            "* All enemies receives 730 Poision damage over 5 turns. The caster and all their allies absorb 30% of the dealt Poison damage as health."
        ]
    },
    {
        "heroId": "magic_jett_costume_eyes",
        "name": "Jett C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "x1 Mana Charge:",
            "* Deals 300% damage to the target.",
            "* The target receives 858 Poison damage over 3 turns. The caster absorbs 100% of dealt Poison damage as boosted health.",
            "x2 Mana Charge:",
            "* Deals 300% damage to all enemies.",
            "* All enemies receive 1085 Poison damage over 5 turns. The caster and all their allies absorb 30% of dealt Poison damage as boosted health."
        ]
    },
    {
        "heroId": "forsaken_kadath",
        "name": "Kadath",
        "effects": [
            "The target succumbs to Fear for 3 turns. (The target gets -40% defense. Removes all dispellable buffs and Growth effects when a Fear status effect is added. The target cannot gain new buffs or Growth effects for the duration. Target with Fear deals 160% damage to random ally each time any other ally casts their Special Skill. Each character can trigger this effect once per turn.)",
            "Deals 570% damage to the target and inflicts 55 Insanity on them.",
            "If the target is defeated by the attack, then nearby enemies succumb to Fear for 3 turns. (The target gets -40% defense. Removes all dispellable buffs and Growth effects when a Fear status effect is added. The target cannot gain new buffs or Growth effects for the duration. Target with Fear deals 160% damage to random ally each time any other ally casts their Special Skill. Each character can trigger this effect once per turn.)",
            "Casting this Special Skill inflicts 40 Insanity to the caster."
        ]
    },
    {
        "heroId": "s2_cursed_samurai",
        "name": "Kageburado",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 225% damage to the target.",
            "Deals 450% damage if the target has more than 50% health remaining."
        ]
    },
    {
        "heroId": "s2_cursed_samurai_costume_beetle",
        "name": "Kageburado C1",
        "effects": [
            "Dispels buffs from the target.",
            "Deals 320% damage to the target.",
            "The target is immune to new status effect buffs for 2 turns.",
            "The target gets -34% defense for 2 turns."
        ]
    },
    {
        "heroId": "villain_karnov",
        "name": "Karnov",
        "effects": [
            "Deals 290% damage to all enemies.",
            "Alters the power of all Dark shields on the board. When an attacking hero casts the special, the shields become enhanced with +64% attack. When a defending hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "villain_karnov_costume_jammies",
        "name": "Karnov C1",
        "effects": [
            "Deals 340% damage to all enemies.",
            "Alters the power of all Dark shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "gargoyle_kemeny",
        "name": "Kemeny",
        "effects": [
            "Deals 330% damage to all enemies.",
            "Deals additional 65% damage per status ailment the caster has up to 655% damage in total."
        ]
    },
    {
        "heroId": "s5_khepri",
        "name": "Khepri",
        "effects": [
            "Deals 275% damage to target and nearby enemies.",
            "Summons a Scarab Bomb Fiend for the target and nearby enemies. The Fiend damages the enemy with 38% attack every turn.",
            "The Scarab Bomb Fiend absorbs healing and disappears when it has absorbed a health equal to 30% of its owner's max health.",
            "The Scarab Bomb Fiend explodes after 3 turns, dealing 600 damage to its target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "s5_khepri_costume_overlord",
        "name": "Khepri C1",
        "effects": [
            "Deals 265% damage to the target and nearby enemies.",
            "Summons a Scarab Bomb Fiend for the target and nearby enemies. The Fiend damages the enemy with 38% attack every turn.",
            "The Scarab Bomb Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "The Scarab Bomb Fiend explodes after 3 turns, dealing 900 damage to its target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "dark_god_september",
        "name": "Khiona",
        "effects": [
            "Deals 422% damage to the target",
            "The caster and nearby allies get +45% attack, and a further 20% increase every time they are hit during 3 turns, up to +145% attack.",
            "Element Link recovers 4% health for all Dark allies for 6 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "dark_god_september_costume_engineer",
        "name": "Khiona C1",
        "effects": [
            "Deals 350% damage to the target.",
            "The caster and nearby allies get +45% attack, and a further 20% increase every time they are hit during 4 turns.",
            "Element Link recovers 4% health for all Dark allies for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_khonshu",
        "name": "Khonshu",
        "effects": [
            "425% damage to the target",
            "If it attack defeats the target, the caster gains +50% mana."
        ]
    },
    {
        "heroId": "s5_khonshu_costume_knight",
        "name": "Khonshu C1",
        "effects": [
            "450% damage to the target.",
            "If it attack defeats the target, the caster gains +45% mana."
        ]
    },
    {
        "heroId": "easter_killhare",
        "name": "Killhare",
        "effects": [
            "Deals 300% damage to all enemies.",
            "All allies except the caster get -20% defense for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "easter_killhare_costume_farmer",
        "name": "Killhare C1",
        "effects": [
            "Deals 330% damage to all enemies.",
            "All allies except the caser get -20% attack for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "wonderland_knave_of_hearts",
        "name": "Knave of Hearts",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The target automatically casts Mindless Attack on a random ally when the mana is full at the start of a turn during 3 turns.",
            "Summons a Tart Minion for each ally with 10% HP and 32% attack inherited from the caster. The Minion recovers 10% health for its owner when it is defeated."
        ]
    },
    {
        "heroId": "slime_knightus",
        "name": "Knightus",
        "effects": [
            "Deals 540% damage to the target.",
            "The target enemy receives Devouring Goo status ailment for 3 turns.",
            "Devouring Goo: Removes all dispellable buffs and Growth effects, deals 200 damage per turn and 100 damage per each removed effect. (If the target already has this effect, the duration will be refreshed and an extra damage from the removed effects will be added to the new effect. Damage per turn can't exceed 700.",
            "After 1 turn the target gets Paralyzed for 4 turns. (Paralyzed enemies can't attack or gain mana and receive +50% increased damage. )",
            "All Holy enemies get -34% defense against Dark for 3 turns."
        ]
    },
    {
        "heroId": "dark_god_kunchen",
        "name": "Kunchen",
        "effects": [
            "Recovers 45% health for all allies.",
            "All enemies get -34% defense for 5 turns.",
            "Cleanses status ailments from all allies.",
            "Element Link gives all Dark allies +46% defense against Holy for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "astral_dwarf_lemniss",
        "name": "Lemniss",
        "effects": [
            "Recovers 45% health from all allies.",
            "Increases the duration of all allies active buffs by 2 turns. (The duration modification affects both cleansable and uncleasable effects.)",
            "All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "s4_lepiota",
        "name": "Lepiota",
        "effects": [
            "Deals 158% damage to the target.",
            "Cast Full Removal on the target. (Full Removal removes all status efects, stacks and Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleasable.)",
            "The target shifts into Abyss Ghost form for 4 turns.",
            "While in Abyss Ghost form the target receives 88 damage each turn. (While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but it is immune to normal attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects. Can't be cast if there's only one enemy left in battle. Titans and Mythic Titans are not affected by this status effect.)"
        ]
    },
    {
        "heroId": "s4_lepiota_costume_undying",
        "name": "Lepiota C1",
        "effects": [
            "Deals 150% damage to the target.",
            "Cast Full Removal on the target. (Full Removal removes all status efects, stacks and Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleasable.)",
            "The target shifts into Abyss Ghost form for 4 turns.",
            "While in Abyss Ghost form the target receives 182 damage each turn.",
            "While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but it is immune to normal attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects.",
            "Can't be cast if there's only one enemy left in battle."
        ]
    },
    {
        "heroId": "moth_lilareine",
        "name": "Lilareine",
        "effects": [
            "Boosts health fo all allies by 1500. Boosted health can exceed max HP.",
            "Cleanses status ailments from all allies.",
            "Stack (Max: 10): All allies get +5% mana generation. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "This character gets a Mark of Special Skill for 5 turns. Whenever an ally casts their Special Skill, the caster gains a stack (Max: 10). Each stack increases mana generation the caster receives by +5%."
        ]
    },
    {
        "heroId": "magic_carpet_lilli",
        "name": "Lilli",
        "effects": [
            "Steals all Minions or a Mega Minion from the target.",
            "Deals 850% damage to the target.",
            "If the caster has a Minion or Mega Minion, all enemies receive +50% increased damage. This effect remains active as long as the caster has a Minion or Mega Minion, and can't be dispelled.",
            "The caster regenerates 1190 HP over 5 turns."
        ]
    },
    {
        "heroId": "kalevala_louhi",
        "name": "Louhi",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 250% damage to all enemies.",
            "All enemies get -24% defense for 4 turns. Against Holy characters, this status effect becomes uncleansable and last 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_louhi_costume_mistress",
        "name": "Louhi C1",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 280% damage to all enemies.",
            "All enemies get -30% defense for 4 turns. Against Holy characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kingdom_lu_bu",
        "name": "Lu Bu",
        "effects": [
            "Deals 330% damage to all enemies.",
            "Summons a Mercenary Fiend for all enemies. The Fiend damages its target with 56% attack every turn.",
            "The Mercenary Fiend absorbs healing. It disappears after absorbing a healing amount equal to 38% of its target's max health.",
            "When summoned, the Mercenary Fiend  causes its target to be immune to new buffs. The effect lasts as long as the target has Mercenary Fiend. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "kingdom_lu_bu_costume_tiger_lord",
        "name": "Lu Bu C1",
        "effects": [
            "Deals 320% damage to all enemies.",
            "Summons a Mercenary Fiend for all enemies. The Fiend damages the enemy with 70% attack every turn.",
            "The Mercenary Fiend absorbs healing and disappears when it has absorbed health equal to 50% of its target's max health.",
            "When summoned, the Mercenary Fiend causes its target to be immune to new buffs. The effect lasts as long as the target has Mercenary Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "halloween_lucinda",
        "name": "Lucinda",
        "effects": [
            "Deals 470% damage to target and nearby enemies.",
            "The target and nearby enemies get -40% accuracy for 6 turns. (Chance to miss also applies to offensive Special Skills.)",
            "The target and nearby enemies get -34% defense for 6 turns.",
            "The caster regenerates 918 HP over 6 turns."
        ]
    },
    {
        "heroId": "castle_wolf_ludwig",
        "name": "Ludwig",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 6 turns.",
            "The caster gets +84% defense against Special Skills for 6 turns.",
            "Nearby allies receive mana each turn for 6 turns. Received mana increases each turn until the last turn, when 100% mana is received."
        ]
    },
    {
        "heroId": "mighty_pet_luna",
        "name": "Luna",
        "effects": [
            "Recovers 20% health for the caster and nearby allies.",
            "At the end of each turn caster and nearby allies shoot a Moon Beam at a random enemy for 3 turns.",
            "Each Moon Beam deals 140% damage.",
            "Each Moon Beam reduces the mana of the hit enemy by 5%."
        ]
    },
    {
        "heroId": "ballerina_madame_giry",
        "name": "Madame Giry",
        "effects": [
            "Deals 340% damage to all enemies.",
            "Summons a Ballerina Fiend for all enemies. The Fiend damage the enemy with 110% attack every turn.",
            "The Ballerina Fiend aborbs healing and disappers when it has absorbed health equal to 45% of its target's max health.",
            "When summoned, the Ballerina Fiend causes its target to be immune to new buffs. This effect lasts as long as the target has Ballerina Fiends. This effect can't be cleansed.",
            "All enemies get -44% defense against Dark for 4 turns."
        ]
    },
    {
        "heroId": "garrison_maisie",
        "name": "Maisie",
        "effects": [
            "Boosts health of all allies by 800. Boosted health can exceed max HP.",
            "Boosts health of all allies by 160 foreach status ailment the ally has, up to 800 health in total.",
            "Summons a Shield Guard Mega Minion with 65% HP and 180% attack inherited from the caster.",
            "The Shield Guard Mega Minion safely cleanses the latest cleansable status ailment from all allies each turn. (Safe cleanse bypasses secondary effect, such as damage on removal, from the removed status ailment. External effects such as passive skills and family effects can still activate.)"
        ]
    },
    {
        "heroId": "dark_god_malicna",
        "name": "Malicna",
        "effects": [
            "Deals 380% damage to the target and nearby enemies",
            "Randomly casts one of the following alternatives:",
            "Alternative 1:",
            "* The target and nearby enemies get -54% defense for 3 turns",
            "* The target and nearby enemies get -54% attack for 3 turns",
            "* The target and nearby enemies get -34% mana generation for 3 turns",
            "Alternative 2:",
            "* The target and nearby enemies get -24% defense for 3 turns",
            "Alternative 3:",
            "* The target and nearby enemies get -24% attack for 3 turns",
            "Element Link gives all Dark allies small amount of mana at the end of the turn for 4 turns. This effect can't be dispelled"
        ]
    },
    {
        "heroId": "pirate_marie_therese",
        "name": "Marie-Therese",
        "effects": [
            "Deals 168% damage to all enemies",
            "All allies regenerate 612 HP over 4 turns",
            "All allies get +30% defense for 4 turns",
            "All allies receive Zombie Blessing. If the blessed hero dies in the next 4 turns, they will be reborn as a Zombie with:",
            "* 100% inherited health",
            "* 500 attack",
            "* 500 defense",
            "* Special Skill:",
            "Poison Bite."
        ]
    },
    {
        "heroId": "pirate_marie_therese_costume_priestess",
        "name": "Marie-Therese C1",
        "effects": [
            "Deals 138% damage to all enemies.",
            "All allies regenerae 600 boosted health over 4 turns. Boosted health can exceed max HP. This effect can't be dispelled.",
            "All allies get +30% defense for 4 turns. This effect can't be dispelled.",
            "All allies receive Zombie Blessing. If the blessed Hero dies in the next 4 turns, they will be reborn as a Zombie with:",
            "* 100% inherited health",
            "* 500 attack",
            "* 500 defense",
            "* Special Skill: Poison Bite."
        ]
    },
    {
        "heroId": "wild_cat_marnes",
        "name": "Marnes",
        "effects": [
            "Deals 300% Clawing damage to the enemies on the edges of the formation. If there is only one enemy, the damage is doubled. (Deals 400% damage against enemies with any defensive buffs, Minions or Mega Minions. Enemies with any defensive buffs, Minions or Mega Minions receive -35% defense for 5 turns.)",
            "The enemies on the edges of the enemy formation receive 1500 Surge Bleed damage over 5 turns. (If a target already has this effect, the duration will be refreshed and the damage will be increased by 250. Max total damage: 3000.)",
            "The enemies on the edges of the enemy formation receive 625 Poison damage over 5 turns."
        ]
    },
    {
        "heroId": "faun_maud",
        "name": "Maud",
        "effects": [
            "Deals 500% damage to the enemy with the lowest remaining HP. Deals 280% damage to all other enemies.",
            "Enhanced Dodge: The caster gets +60% chance to dodge Special Skills that deal damage. This effect lasts until the caster sucessfully dodges 3 times.",
            "After the Enhanced Dodge ends or is removed or replaced, the caster gains 10% mana."
        ]
    },
    {
        "heroId": "tales1_medea",
        "name": "Medea",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 365% damage to the target and nearby enemies.",
            "* The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns. When this effect is triggered, it shifts to the hit ally and the duration is refreshed.",
            "* The target and nearby enemies get -50% decrease for any healing received for 3 turns.",
            "2nd:",
            "* Deals 430% damage to the target and nearby enemies.",
            "* The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns. When this effect is triggered, it shifts to the hit ally and the duration is refreshed.",
            "* The target and nearby enemies get -75% decrease for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "tales1_medea_costume_goddess",
        "name": "Medea C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 355% damage to the target and nearby enemies.",
            "* The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns. When this effect is triggered, it shifts to the hit ally and the duration is refreshed.",
            "* The target and nearby enemies get -45% decrease for any healing received for 3 turns.",
            "2nd:",
            "* Deals 450% damage to the target and nearby enemies.",
            "* The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns. When this effect is triggered, it shifts to the hit ally and the duration is refreshed.",
            "* The target and nearby enemies get -85% decrease for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "shadow_melancholia",
        "name": "Melancholia",
        "effects": [
            "Revives all allies with 70% HP and 50 Insanity.",
            "All allies get +74% defense against Special Skills for 5 turns.",
            "If any ally except the caster is defeated in 5 turns, all enemies receive 400 damage.",
            "Casting this Special Skill inflicts 50 Insanity on the caster."
        ]
    },
    {
        "heroId": "ronin_mikanagi_miran",
        "name": "Mikanagi Miran",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "x1 Mana Charge:",
            "Deals 310% damage to the target.",
            "Deals additional 310% damage to 1 random enemies.",
            "Dispel 1 buffs from each hit enemy.",
            "x2 Mana Charge:",
            "Deals 320% damage to the target.",
            "Deals additional 320% damage to 4 random enemies.",
            "Stack (Max: 10): Each hit gives its target -5% defense.",
            "Dispel 1 buffs from each hit enemy.",
            "x3 Mana Charge:",
            "Deals 330% damage to the target.",
            "Deals additional 330% damage to 10 random enemies.",
            "Stack (Max: 10): Each hit gives its target -5% defense.",
            "Safely Dispels 1 buff from each hit enemy."
        ]
    },
    {
        "heroId": "s2_hammerhead_hulk",
        "name": "Mok-Arr",
        "effects": [
            "Deals 270% damage to all enemies.",
            "Deals 50% damage to all allies.",
            "Deals extra damage against Holy.",
            "All Dark allies and enemies are immune to this attack."
        ]
    },
    {
        "heroId": "s2_hammerhead_hulk_costume_emerald",
        "name": "Mok-Arr C1",
        "effects": [
            "Deals 280% damage to all enemies.",
            "All Dark allies and enemies get +54% attack for 4 turns.",
            "All allies and enemies that are not Dark element get -44% attack for 4 turns. This effect is uncleansable for all Holy enemies.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "dark_god_morax",
        "name": "Morax",
        "effects": [
            "Deals 430% damage to the target and minor damage to nearby enemies.",
            "The target gets -24% mana generation for 4 turns.",
            "Reduces max health of the target's nearby enemies by 600. Max health can't be lower than 30% of the original max health. Any boosted health is reduced by an additional 600.",
            "Element Link gives all Dark allies immunity to new Fiends for 4 turns. This effect cannot be dispelled"
        ]
    },
    {
        "heroId": "moth_mortewitch",
        "name": "Mortewitch",
        "effects": [
            "Deals 800% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Heals all allies for 40% of damage dealt.",
            "Summons a Grave Mothling Mega Fiend for the target. The Fiend damages the enemy with 270% attack every turn.",
            "The Grave Mothling Mega Fiend absorbs healing and disappears when it has absorbed health equal to 80% of its owner's max health.",
            "When summoned, the Grave Mothling Mega Fiend increases the damage dealt to its target from all sources by +50%. The effect lasts as long as the owner has Grave Mothling Mega Fiend."
        ]
    },
    {
        "heroId": "beachparty_mortimer",
        "name": "Mortimer",
        "effects": [
            "Deals 480% damage to target and a minor damage to nearby enemies.",
            "The target and nearby enemies get silenced for 3 turns.",
            "The caster and nearby allies resist new effects that block usage of Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "hidden_dark_god_myztero",
        "name": "Myztero",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All status ailments memorized by the innate ability are cast to all enemies."
        ]
    },
    {
        "heroId": "bard_narcisa",
        "name": "Narcisa",
        "effects": [
            "Deals 240% damage to all enemies.",
            "The duration of status ailments is reset for all enemies.",
            "All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "christmas_noel",
        "name": "Noel",
        "effects": [
            "Boosts health for all allies by 760. Boosted health can exceed max HP.",
            "Enhanced Dodge: All allies get +50% chance to dodge Special Skills that deal damage. This effect lasts until the ally successfully dodge once.",
            "After the Enhance Dodge ends or is removed or replaced, the ally gets a Snowsprite Minion.",
            "The Snowsprite Minion has 20% HP and 20% attack inherited from the caster."
        ]
    },
    {
        "heroId": "styx_nyx",
        "name": "Nyx",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 220% damage to all enemies.",
            "* All allies get +30% attack for 3 turns.",
            "2x Mana Charge:",
            "* Deals 360% damage to all enemies.",
            "* All enemies get -34% defense for 3 turns.",
            "3x Mana Charge:",
            "* Deals 395% damage to all enemies.",
            "* All allies get +50% attack for 4 turns.",
            "* All enemies get -44% defense for 4 turns."
        ]
    },
    {
        "heroId": "underworld_champion",
        "name": "Obakan",
        "effects": [
            "Deals 310% damage to the target and minor damage to nearby enemies.",
            "The caster counterattacks with 115% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "underworld_champion_costume_champion",
        "name": "Obakan C1",
        "effects": [
            "Deals 182% damage to all enemies.",
            "The caster and nearby allies counterattack with 85% of the damage receied for 4 turns."
        ]
    },
    {
        "heroId": "underworld_champion_costume_vampire",
        "name": "Obakan C2",
        "effects": [
            "Deals 260% damage to the target and nearby enemies.",
            "The caster and nearby allies counterattack with 95% of the damage received for 3 turns.",
            "The caster and nearby allies regenerate a moderate amount of mana for each counterattack. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "underworld_champion_costume_cute",
        "name": "Obakan Toon",
        "effects": [
            "Deals 390% damage to the target and minor damage to nearby enemies.",
            "The caster counterattacks with 110% of the damage received for 4 turns.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "underworld_champion_costume_glass",
        "name": "Obakan Glass",
        "effects": [
            "Deals 400% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster counterattacks with 120% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "underworld_champion_costume_stylish",
        "name": "Obakan Stylish",
        "effects": [
            "Deals 410% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage to enemies with less than 50% health remaining.",
            "The caster counterattacks with 130% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "ballerina_odile",
        "name": "Odile",
        "effects": [
            "Boosts health for all allies by 475. Boosted health can exceed max HP.",
            "Casts Dance of the Black Swan to all allies but caster for 4 turns. All existing status effects will be removed when this effect is added.",
            "Dance of the Black Swan:",
            "* At the end of each turn each dancer deal 155% damage to a random enemy and boosts health for themselves with 25% of total damage dealt.",
            "* Gives immunity to new status effects. New dance status effects will replace this effect.",
            "* This effect cannot be dispelled. The effect is removed when the caster is defeated."
        ]
    },
    {
        "heroId": "owl_ommodus",
        "name": "Ommodus",
        "effects": [
            "Destroys all Fiends from all allies and damages all Mega Fiends.",
            "Attacks all enemies with Moonrise Strike, dealing up to 2000 damage. Deals 40% more damage if the target is Holy. This Special Skill never misses its targets.",
            "All allies get 5% mana for each destroyed Fiend."
        ]
    },
    {
        "heroId": "ninja_onyx",
        "name": "Onyx",
        "effects": [
            "1x Mana Charge",
            "* Deals 300% damage to the target.",
            "* The target is immune to new status effects buffs for 3 turns.",
            "* Dispels buffs from the target.",
            "2x Mana Charge",
            "* Deals 340% damage to the target and nearby enemies.",
            "* The target and nearby enemies are immune to new status effects buffs for 4 turns.",
            "* Dispels buffs from the target and nearby enemies.",
            "3x Mana Charge",
            "* Deals 380% damage to all enemies.",
            "* All enemies are immune to new status effects buffs for 5 turns.",
            "* Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "astral_demon_paimon",
        "name": "Paimon",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Deals 580% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -50% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)",
            "The target and nearby enemies deal 450 damage to a random ally if they miss Special Skill during 4 turns."
        ]
    },
    {
        "heroId": "christmas_peppermint",
        "name": "Peppermint",
        "effects": [
            "Deals 250% damage to all enemies.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All enemies receive 280 Poison damage, and an increase of 16 damage per each Dark shield on the board over 4 turns up to 408 damage."
        ]
    },
    {
        "heroId": "ballerina_phantom_of_the_opera",
        "name": "Phantom of the Opera",
        "effects": [
            "Deals 405% damage to the target and nearby enemies.",
            "The target and nearby enemies dance to Ballad of Obsession for 4 turns.  All existing status effects will be removed when this effect is added.",
            "Ballad of Obsession",
            "* -40% mana generation.",
            "* -40% decrease for any healing received.",
            "* Gives immunity to new status effects.",
            "* This effect cannot be dispelled. The effect is removed when the caster dies."
        ]
    },
    {
        "heroId": "tales1_phorcys",
        "name": "Phorcys",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Summon a Merman Minion for the caster and nearby allies with 27% HP and 26% attack inherited from the caster.",
            "* The Minion adds 5% mana to its owner at the end of each turn.",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "2nd:",
            "* Summon a Merman Minion for the caster and nearby allies with 27% HP and 26% attack inherited from the caster.",
            "* The Minion adds 5% mana to its owner at the end of each turn.",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "* Stack (Max 10): All allies get +20% attack for their Minions."
        ]
    },
    {
        "heroId": "tales1_phorcys_costume_warrior_god",
        "name": "Phorcys C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Summon a Merman Minion for the caster and nearby allies with 25% HP and 25% attack inherited from the caster.",
            "* The Minion adds 4% mana to its owner at the end of each turn.",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "2nd:",
            "* Summon a Merman Minion for the caster and nearby allies with 30% HP and 35% attack inherited from the caster.",
            "* The Minion adds 5% mana to its owner at the end of each turn.",
            "* The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "* Stack (Max 10): All allies get +25% attack for their Minions."
        ]
    },
    {
        "heroId": "valentines_phthonus",
        "name": "Phthonus",
        "effects": [
            "Deals 360% damage to all enemies.",
            "Dispels buffs from all enemies.",
            "Recovers 8% health per removed status effect for all allies, up to 64% health in total."
        ]
    },
    {
        "heroId": "institute_professor_morryster",
        "name": "Prof. Morryster",
        "effects": [
            "Deals 460% damage to the target and nearby enemies and inflicts 50 Insanity on them.",
            "The target and nearby enemies get -44% defense for 4 turns.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "ninja_quartz",
        "name": "Quartz",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "1x Mana Charge:",
            "- All allies regenerate 204 HP over 2 turns.",
            "- All allies get +34% attack for 2 turns.",
            "- Cleanses status ailments from all allies.",
            "2x Mana Charge:",
            "- All allies regenerate 624 HP over 3 turns.",
            "- All allies get +44% attack for 3 turns.",
            "- Cleanses status ailments from all allies.",
            "3x Mana Charge:",
            "- All allies regenerate 940 HP over 4 turns. This effect can't be dispelled.",
            "- All allies get +54% attack for 4 turns.",
            "- Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "cultist_inventor",
        "name": "Quintus",
        "effects": [
            "Deals 270% damage to all enemies."
        ]
    },
    {
        "heroId": "cultist_inventor_costume_steam",
        "name": "Quintus C1",
        "effects": [
            "Deals 235% damage to all enemies.",
            "All enemies get -34% attack for 4 turns."
        ]
    },
    {
        "heroId": "cultist_inventor_costume_love_doctor",
        "name": "Quintus C2",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The target and nearby enemies automatically cast Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns."
        ]
    },
    {
        "heroId": "cultist_inventor_costume_cute",
        "name": "Quintus Toon",
        "effects": [
            "Deals 420% damage to all enemies.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "cultist_inventor_costume_glass",
        "name": "Quintus Glass",
        "effects": [
            "Deals 430% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "champions_ramona",
        "name": "Ramona",
        "effects": [
            "Deals 450% damage to the target.",
            "Summons three Ram Fiends for the target. This Fiend damages the enemy with 40% attack every turn.",
            "The Ram Fiend absorbs healing and disappears when it has absorbed health equal to 45% of its owner's max health.",
            "The healing absorbed is transferred to the summoner and their allies and distributed evenly. (Ignores heal steal, healing modifers and fiends)"
        ]
    },
    {
        "heroId": "castle_raven_rayne",
        "name": "Rayne",
        "effects": [
            "Deals 400% damage to the target.",
            "The target receives 1300 Poison damage over 5 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "musketeer_rochefort",
        "name": "Rochefort",
        "effects": [
            "Deals 565% damage to the target and minor damage to nearby enemies.",
            "If the target is defeated in 3 turns, all enemies receive 626 damage."
        ]
    },
    {
        "heroId": "s3_loki_fish",
        "name": "Salmon Loki",
        "effects": [
            "Deals 250% damage to all Holy enemies.",
            "For 3 turns the element of all enemies is changed each turn. On the first 2 turns, the element is random.",
            "On the last turn, enemies revert to their original element.",
            "After each element change, enemies take 528 damage if their element is Holy."
        ]
    },
    {
        "heroId": "s3_loki_fish_costume_dapper",
        "name": "Salmon Loki C1",
        "effects": [
            "Deals 350% damage to all holy Enemies.",
            "For 4 turns, the element of all enemies is changed each turn. On the first 3 turns, the element is random.",
            "On the last turn, enemies revert to their original element.",
            "After each element change, enemies take 736 damage if their element is Holy."
        ]
    },
    {
        "heroId": "pirate_dread_captain",
        "name": "Sargasso",
        "effects": [
            "Deals 415% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -90% increase for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "pirate_dread_captain_costume_rotten",
        "name": "Sargasso C1",
        "effects": [
            "Deals 415% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -100% decrease for any healing received for 4 turns.",
            "The target and nearby enemies receive 260 Water damage over 4 turns."
        ]
    },
    {
        "heroId": "cultist_sorceress",
        "name": "Sartana",
        "effects": [
            "Deals 452% damage to the target.",
            "The target receives 294 Poison damage over 6 turns."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_shaman",
        "name": "Sartana C1",
        "effects": [
            "Deals 532% damage to the target."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_snake",
        "name": "Sartana C2",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 500% damage to the target.",
            "The target resists new Minions for 3 turns."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_cute",
        "name": "Sartana Toon",
        "effects": [
            "Deals 530% damage to the target.",
            "The target receives 510 Poison damage over 3 turns.",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_glass",
        "name": "Sartana Glass",
        "effects": [
            "Deals 540% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target receives 615 Poison damage over 3 turns."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_stylish",
        "name": "Sartana Stylish",
        "effects": [
            "Deals 550% damage to the target.",
            "If the target has less than 50% health remaining, deals 615% damage instead.",
            "The target receives 708 Poison damage over 3 turns."
        ]
    },
    {
        "heroId": "ninja_satsui",
        "name": "Satsui",
        "effects": [
            "1x Mana Charge",
            "* Deals 400% damage to the target.",
            "* The caster goes into hiding for 2 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -30%.",
            "* When the caster comes out of hiding, they deal 330 damage to all enemies who used Special Skills while the caster was hiding.",
            "2x Mana Charge",
            "* Deals 425% damage to the target and nearby enemies.",
            "* The caster goes into hiding for 2 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -60%.",
            "* When the caster comes out of hiding, they deal 449 damage to all enemies who used Special Skills while the caster was hiding.",
            "3x Mana Charge",
            "* Deals 450% damage to all enemies.",
            "* The caster goes into hiding for 2 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -80%.",
            "* When the caster comes out of hiding, they deal 508 damage to all enemies who used Special Skills while the caster was hiding."
        ]
    },
    {
        "heroId": "construct_nocturne",
        "name": "Scath",
        "effects": [
            "All allies regenerate 1290 HP over 3 turns. This effect can't be dispelled.",
            "The caster counterattacks with 145% of the damage received for 3 turns.",
            "Stores all damage dealt to the caster for 3 turns. When the effect ends, stored damage is dealt to all enemies, up to maximum 1050 damage. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "slayer_senan",
        "name": "Senan",
        "effects": [
            "Deals 275% damage to the all enemies.",
            "Summons a Spectre Fiend for all enemies. The Fiend damages its target with 45% attack every turn.",
            "The Spectre Fiend absorbs healing. It disappears after absorbing a healing amount equal to 30% of it's target's max health.",
            "Stack (Max: 10): The caster gets +6% mana generation",
            "Stack +2 (Max: 10): The caster recovers 30 HP each turn."
        ]
    },
    {
        "heroId": "slayer_senan_costume_tentacles",
        "name": "Senan C1",
        "effects": [
            "Deals 265% damage to all enemies.",
            "Summons a Specter Fiend for all enemies. The Fiend damages its target with 55% attack every turn.",
            "The Specter Fiend absorbs healing. It disappears after absorbing a healing amount equal to 35% of its target's max health.",
            "Stack +2 (Max 10): The caster gets +12% mana generation. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Stack +3 (Max 10): The caster recovers 45 HP each turn."
        ]
    },
    {
        "heroId": "beachparty_serena",
        "name": "Serena",
        "effects": [
            "Deals 400% damage to the target.",
            "Summons a Gossip Whisperer Fiend for the target.",
            "The Gossip Whisperer Fiend absorbs healing. It disappears after absorbing a healing amount equal to 25% of its target's max health.",
            "When summoned the Gossip Whisperer Fiend gives -45% accuracy for its target as long as the target has Gossip Whisperer Fiends. This effect can't be cleansed. (Chance to miss also applies to offensive Special Skills.)",
            "The Gossip Whisperer Fiend generates a clone of itself to nearby enemies on every turn. (Cloned Fiends absorb the same amount of healing and deal the same amount of damage as the original Fiend. The Fiend will only clone if the target does not already have the maximum amount of Fiends or Minions.)"
        ]
    },
    {
        "heroId": "dark_god_seshat",
        "name": "Seshat",
        "effects": [
            "Deals 450% damage to the target.",
            "Summon a Replicator Minion with 20% HP and 17% attack inherited from the caster. The minion generates a clone of itself every 3 turns. Cloned minions inherit the same amount of HP and attack as the original minion.",
            "Dispels buffs from the target and nearby enemies.",
            "Elemental Link gives +4% mana generation for all Dark allies  for 4 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "dark_god_seshat_costume_revenant",
        "name": "Seshat C1",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Deals 420% damage to the target.",
            "Summons a Replicator Minion with 20% HP and 17% attack inheried from the caster. The Replicator Minion generates a clone of itself every 3 turns. Cloned minions inherit the same amount of HP and attack as the original minion.",
            "Element Link gives +4% mana generation for all Dark allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_set",
        "name": "Set",
        "effects": [
            "Summon a Dark Soldier Minion for all allies with 40% HP and 40% attack inherited from the caster.",
            "All enemies receive 324 Poison damage over 3 turns.",
            "If the caster is defeated in the next 3 turns, all enemies mana is reduced by -100%. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_set_costume_tyrant",
        "name": "Set C1",
        "effects": [
            "Summons a Dark Soldier Minion for all allies with 45% HP and 35% attack inherited from the caster.",
            "All enemies receive 1136 Poison damage over 4 turns.",
            "If the caster is defeated in the next 4 turns, all enemies' mana is reduced by -100%. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "construct_shacklebolt",
        "name": "Shacklebolt",
        "effects": [
            "Deals 370% damage to the target and nearby enemies.",
            "Steals 25% mana from the target and nearby enemies and distributes it to the caster and nearby allies.",
            "Copies all dispellable buffs from the target and nearby enemies, and randomly distributes them on allies."
        ]
    },
    {
        "heroId": "fox_shadowfang",
        "name": "Shadowfang",
        "effects": [
            "Deals 390% damage to all enemies.",
            "At the end of each turn, the caster cast a Bone Toss at a random enemy for 5 turns.",
            "Each Bone Toss deals 230% damage.",
            "Each Bone Toss summons a Skeleton Fox Fiend to the target. The Fiend damages its target with 100% attack every turn.",
            "The Skeleton Fox Fiend absorbs healing. It disappears after receiving a healing amount equal to 30% of its target's max health."
        ]
    },
    {
        "heroId": "outlaw_shi_jin",
        "name": "Shi Jin",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 550% damage to the target.",
            "Deals 150% damage to 8 random enemies. (The effect target the same enemy as the first hit if there are no other valid targets.)",
            "All allies get +45% attack for 4 turns."
        ]
    },
    {
        "heroId": "dark_god_sir_casmir",
        "name": "Sir Casmir",
        "effects": [
            "Cleanses status ailments from the caster and nearby allies.",
            "For the next 5 turns, this character has a 55% chance to deal 600% damage to a random enemy after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "The caster and nearby allies reflect status ailments and negative stacks for 5 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Element Link gives all Dark allies +5% dodge chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "slime_slaymire",
        "name": "Slaymire",
        "effects": [
            "Deals 630% damage to the target.",
            "If the target is defeated by attack, all allies get +30% mana and their health is boosted by 1200. Boosted health can exceed max HP.",
            "After 1 turn the target gets Paralyzed for 4 turns. (Paralyzed enemies can’t attack or gain mana and receive +50% increased damage. Once Paralyzed, the effect can't be cleansed. Bosses, Titans and Mythic Titans are not affected by this status effect.)"
        ]
    },
    {
        "heroId": "slime_sliposi",
        "name": "Sliposi",
        "effects": [
            "Increases the mana of allies on the edges of the formation by 30%.",
            "Summon a Slime Mega Minion for the allies on the edges of the enemy formation with 50% HP and 40% attack inherited from the caster.",
            "The caster regenerates 1020 boosted health over 4 turns."
        ]
    },
    {
        "heroId": "s5_sneferu",
        "name": "Sneferu",
        "effects": [
            "Deals 415% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit targets are immune to new status effect buffs for 5 turns, and receive 250 damage for each attempted buff."
        ]
    },
    {
        "heroId": "s5_sneferu_costume_vanquisher",
        "name": "Sneferu C1",
        "effects": [
            "Deals 530% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit targets are immune to new status effect buffs for 5 turns, and receive 350 damage for each attempted buff."
        ]
    },
    {
        "heroId": "monster_hunter_sorcha",
        "name": "Sorcha",
        "effects": [
            "Deals 410% damage to the target and nearby enemies.",
            "Reduces max health of the target and nearby enemies by 1200 over 3 turns. This effect is stronger against targets with boosted health. The effect duration resets if the target is healed. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 400 per turn.)",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "fox_swiftpaw",
        "name": "Swiftpaw",
        "effects": [
            "Deals 540% damage to the target.",
            "The target gets silenced for 3 turns.",
            "Summons a Sly Fox Minion to the caster and nearby allies with 5% HP and 100% attack inherited from the caster.",
            "Sly Fox Minion has 80% chance to dodge incoming attacks.",
            "When a Sly Fox Minion dodges, it steals latest buff from the attacker and gives it to its owner."
        ]
    },
    {
        "heroId": "faun_tamlin",
        "name": "Tamlin",
        "effects": [
            "Deals 460% damage to all enemies.",
            "Enhanced Defense Ailment: All enemies get -64% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill 6 times.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, the enemy gets silenced for 6 turns."
        ]
    },
    {
        "heroId": "construct_tenebrae",
        "name": "Tenebrae",
        "effects": [
            "Deals 395% damage to the target.",
            "The target get Soul Bound for 3 turns. This effect can't be cleansed. (This effect will always bypass reflection.)",
            "All damage received by the caster is also dealt to all Soul Bound Enemies. (Damage is shared between all Soul Bound enemies. This effect will not share damage coming from other shared damage sources or counterattacks.)"
        ]
    },
    {
        "heroId": "beauty_beast_the_beast",
        "name": "The Beast",
        "effects": [
            "If the caster has 35 or more Humility:",
            "* Deals 460% damage to 6 random enemies.",
            "* All hit targets get -54% defense against Dark for 4 turns.",
            "* Enemies hit automatically cast Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns.",
            "* The caster regenerates 1200 boosted health over 4 turns. Boosted health can exceed max HP.",
            "Otherwise:",
            "* Deals 430% damage to 5 random enemies.",
            "* All hit targets get -40% defense against Dark for 4 turns.",
            "* The caster regenerates 1000 boosted health over 4 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "witch_king",
        "name": "Thoth-Amun",
        "effects": [
            "Deals 340% damage to the target and nearby enemies.",
            "Summons an Undead Minion for the caster and nearby allies with 30% HP and 20% attack inherited from the caster.",
            "Elemental Link gives +10% mana generation for all Dark allies for 4 turns. This effect can't be displelled."
        ]
    },
    {
        "heroId": "witch_king_costume_cosmic",
        "name": "Thoth-Amun C1",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "Summons an Undead Minion for the Caster and Nearby allies with 27% HP and 27% attack inherited from the caster.",
            "Elemental Link gives +10% mana generation for all Dark allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "tales2_thrivaldi",
        "name": "Thrivaldi",
        "effects": [
            "Attacks all enemies with Frostfall Strike, dealing up to 1600 damage. Deals 40% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "All allies get +40% defense for 4 turns.",
            "All allies are immune to damage from status ailments fo 4 turns."
        ]
    },
    {
        "heroId": "ninja_tora",
        "name": "Tora",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 400% damage to the target.",
            "- Deals additional 35% damage for each Minion or Mega Minion owned by the enemies up to 750% damage in total.",
            "- The attack bypasses defensive buffs. (This include counterattacks)",
            "x2 Mana Charge:",
            "- Deals 425% damage to the target and nearby enemies.",
            "- Deals additional 35% damage for each Minion or Mega Minion owned by the enemies up to 775% damage in total.",
            "- The attack bypasses defensive buffs. (This include counterattacks)",
            "x3 Mana Charge:",
            "- Deals 450% damage to all enemies.",
            "- Deals additional 35% damage for each Minion or Mega Minion owned by the enemies up to 800% damage in total.",
            "- The attack bypasses defensive buffs. (This include counterattacks)"
        ]
    },
    {
        "heroId": "dark_god_turgruk",
        "name": "Turgruk",
        "effects": [
            "Deals 480% damage to the target.",
            "Stack (Max:10): All damage the target receives is increased by +5%.",
            "Element Link gives all Dark allies +5% chance to dodge status ailments for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "wonderland_tweedles",
        "name": "Tweedles",
        "effects": [
            "Deals 600% damage to a random enemy.",
            "The target gets -50% defense for 5 turns.",
            "Deals 600% damage to a random enemy.",
            "The target gets -50% attack for 5 turns.",
            "The caster gets 30% mana if both attacks hit the same target."
        ]
    },
    {
        "heroId": "tales1_ultrox",
        "name": "Ultrox",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 30% damage per each Dark shield on the board to all enemies, up to 300% damage in total.",
            "* The caster and nearby allies counterattack with 90% of the damage received for 3 turns.",
            "* The caster and nearby allies reduce all received damage by -35% for 3 turns.",
            "2nd:",
            "* Deals 35% damage per each Dark shield on the board to all enemies, up to 350% damage in total.",
            "* The caster and nearby allies counterattack with 130% of the damage received for 4 turns.",
            "* The caster and nearby allies reduce all received damage by -45% for 4 turns."
        ]
    },
    {
        "heroId": "tales1_ultrox_costume_ethereal",
        "name": "Ultrox C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 28% damage per each Dark shield on the board to all enemies, up to 280% damage in total.",
            "* The caster and nearby allies counterattack with 100% of the damage received for 3 turns.",
            "* The caster and nearby allies reduce all received damage by -35% for 3 turns.",
            "2nd:",
            "* Deals 38% damage per each Dark shield on the board to all enemies, up to 380% damage in total.",
            "* The caster and nearby allies counterattack with 140% of the damage received for 4 turns.",
            "* The caster and nearby allies reduce all received damage by -50% for 4 turns."
        ]
    },
    {
        "heroId": "masquerade_umbria",
        "name": "Umbria",
        "effects": [
            "Deaks 450% damage to the target.",
            "Summon a Spreading Shadow Fiend for the target. The Fiend damage the enemy with 60% attack every turn.",
            "The Spreading Shadow Fiend absorbs healing and disappears when it has absorbed health equal to 40% of its owner's max health.",
            "The Spreading Shadow Fiend generates a clone of itself to nearby enemies every 2 turns. Cloned fiends absorb the same amount of healing and deal the same amount of damage as the original Fiend."
        ]
    },
    {
        "heroId": "ninja_umeko",
        "name": "Umeko",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Dispels buffs from the target.",
            "- The target receives 780 Poison damage over 2 turns.",
            "- The target gets -80% decrease of any healing received for 2 turns.",
            "x2 Mana Charge:",
            "- Dispels buffs from the target and nearby enemies.",
            "- The target and nearby enemies receive 1608 Poison damage over 4 turns.",
            "- The target and nearby enemies get -85% decrease of any healing received for 4 turns.",
            "x3 Mana Charge:",
            "- Dispels buffs from all enemies.",
            "- All enemies receive 2412 Poison damage over 6 turns.",
            "- The target gets -90% decrease of any healing received for 6 turns."
        ]
    },
    {
        "heroId": "s2_ursena",
        "name": "Ursena",
        "effects": [
            "Deals 130% damage to all enemies.",
            "If the enemies have more that 50% health remaining, deals 260% damage instead.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies' Holy Special Skills for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "Deals extra damage against Holy."
        ]
    },
    {
        "heroId": "s2_ursena_costume_reef",
        "name": "Ursena C1",
        "effects": [
            "Deals 130% damage to all enemies.",
            "If the enemies have more that 50% health remaining, deals 260% damage instead.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies' Holy Special Skills for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)",
            "All Holy enemies get -54% defense against Dark for 4 turns."
        ]
    },
    {
        "heroId": "dark_god_uthragan",
        "name": "Uthragan",
        "effects": [
            "Deals 180% damage to the target.",
            "The target and nearby enemies receive 822 Poison damage over 3 turns.  The caster absorbs 100% of dealt Poison damage as health.",
            "Element Link gives +10% mana generation for all Dark allies for 4 turns.  This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "gargoyle_uwe",
        "name": "Uwe",
        "effects": [
            "Deals 850% damage to the target.",
            "If the target has less than 50% health before receiving damage, targets another enemy who had less than 50% health before receiving any damage from this Special Skill. If none of the other enemies have 50% health, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "If the hit enemies use their Special Skill in the next 3 turns, they get 725 poison damage for 5 turns. This effect is uncleansable. (Status effects are added at the end of a Special Skill. Status effects will not be added if this status effects is removed during a Special Skill.)"
        ]
    },
    {
        "heroId": "elemental_vander",
        "name": "Vander",
        "effects": [
            "Deals 450% damage to the target.",
            "The target gets silenced for 3 turns.",
            "If there are 6 or more Dark shields on the board, the damage and status ailments are dealt to the target and nearby enemies instead.",
            "If there are 12 or more Dark shields on the board, the damage and status ailments are dealt to the all enemies instead."
        ]
    },
    {
        "heroId": "astral_dwarf_vard",
        "name": "Vard",
        "effects": [
            "Deals 470% damage to all enemies.",
            "Wither: All enemies get -350 attack and -350 defense.",
            "All enemies get -35% mana generation for 5 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn."
        ]
    },
    {
        "heroId": "mahayoddha_veer",
        "name": "Veer",
        "effects": [
            "Deals 370% damage to the target and nearby enemies.",
            "Growth Boon: Deals 2x extra damage for each point of modified attack. (Extra damage is based on the modified attack on caster when damage is dealt. Up to maximum 800 additional extra damage. Status effects affecting damage dealt do affect the extra damage. Defense stats does not affect the extra damage. Status effect affecting attack stat do not affect the extra damage.)",
            "All allies get +45% chance to dodge Special Skills for 3 turns. Each Dodge damages the attacker for 250 damage."
        ]
    },
    {
        "heroId": "vampire_king",
        "name": "Victor",
        "effects": [
            "Deals 250% damage to the target.",
            "The target receives 510 Surge Bleed over 5 turns. (If a target already has this effect, the duration will be refreshed and the damage will be increased by 455, up to 1410 damage in total.)",
            "The caster steals 75% of any healing applied to the target for 5 turns.",
            "All allies get +30% defense for 5 turns."
        ]
    },
    {
        "heroId": "vampire_king_costume_mafia",
        "name": "Victor C1",
        "effects": [
            "Deals 155% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 330 Surge Bleed over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 450, up to 1225 damage in total.",
            "The caster steals 61% of any healing applied to the target and nearby enemies for 5 turns.",
            "The target and nearby enemies get -24% defense for 5 turns."
        ]
    },
    {
        "heroId": "garrison_violet_potts",
        "name": "Violet Potts",
        "effects": [
            "Safely dispels status effect buffs from all enemies.",
            "All enemies are immune to new status effect buffs for 4 turns.",
            "Summons a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion receives 447 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "dark_god_viscaro",
        "name": "Viscaro",
        "effects": [
            "Deals 310% damage to all enemies.",
            "Damage bypasses target's minions.",
            "Summons a Cursed Sapling Fiend for all enemies. The Fiend damages its target with 75% attack every turn.",
            "The Cursed Sapling Fiend absorbs healing and it disappears after absorbing a healing amount equal to 60% of its owner's max health.",
            "Attacks from Cursed Sapling Fiend deal extra damage if the target has minions.",
            "Element Link gives all Dark allies +10% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "easter_viscount_cluckwood",
        "name": "Viscount Cluckwood",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 340% damage to all enemies.",
            "For 3 turns, the element of all allies except the caster is changed each turn. On the first 2 turns, the element is random.",
            "On the last turn, allies revert to their original element."
        ]
    },
    {
        "heroId": "astral_voidstar",
        "name": "Voidstar",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 620% damage to the target.",
            "Heals all allies for 40% of the damage dealt.",
            "All allies get +74% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "ballerina_von_rothbart",
        "name": "Von Rothbart",
        "effects": [
            "Deals 550% damage to the target.",
            "The target dances to Ballad of Pain for 4 turns. The dance spreads to nearby enemies.",
            "Ballad of Pain:",
            "The dancer gets silenced.",
            "When the dance ends, the target suffers 1700 damage.",
            "All existing status effects will be removed a dance status effect is added.",
            "Dance gives immunity to new status effects. New dance status effect will replace this effect.",
            "Dance effect cannot be dispelled. This effect is removed when the caster is defeated."
        ]
    },
    {
        "heroId": "journey_xie_zi_jing",
        "name": "Xie Zi Jing",
        "effects": [
            "This Special Skill ignores Dodge effects.",
            "Dispels buffs from the target and nearby enemies.",
            "Target and nearby enemies receive 936 Poison damage over 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "journey_xiong_shanjun",
        "name": "Xiong Shanjun",
        "effects": [
            "Reduces max health of all enemies by 800 over 4 turns. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 200 per turn.",
            "All allies regenerate 800 boosted health over 4 turns. Boosted health can exceed max HP.",
            "All enemies get -24% mana generation for 4 turns.",
            "All allies get +24% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "s4_xnolphod",
        "name": "Xnolphod",
        "effects": [
            "Recovers 40% health for all allies.",
            "Increases the mana of all allies by 10%.",
            "Alters the power of all Dark shields on the boards. When an attacking Hero casts the special, the shields become enhanced and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "s4_xnolphod_costume_jailer",
        "name": "Xnolphod C1",
        "effects": [
            "All allies regenerate 1060 HP over 4 turns.",
            "All allies receive a small amount of mana over 4 turns.",
            "Alters the power of all Dark Shields on the board. When an attacking Hero casts the special, the enhanced shields give 37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "faun_ysabel",
        "name": "Ysabel",
        "effects": [
            "Deals 535% damage to the target and minor damage to nearby enemies.",
            "Enhanced Defense Ailment: The target and nearby enemies get -64% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill 3 times.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, dispels buffs on the enemy."
        ]
    },
    {
        "heroId": "construct_zavok",
        "name": "Zavolt",
        "effects": [
            "Deals 470% damage to all enemies.",
            "All enemies get -12% accuracy, and a further -6% decrease per each Dark shield on the board for 5 turns, up to -60% accuracy.",
            "All allies are immune to new negative mana effects for 5 turns, and their mana is increased by 15% for each resisted effect."
        ]
    },
    {
        "heroId": "dark_god_zed",
        "name": "Zed",
        "effects": [
            "Deals 490% damage to the target.",
            "The target gets -34% defense for 2 turns. The effect duration resets if the target is hit with direct damage from a Special Skill.",
            "The target gets -34% decrease for any healing received for 2 turns. The effect duration resets if the target is hit with direct damage from a Special Skill.",
            "Element Link gives all Dark allies +20% critical chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "dark_god_zulag",
        "name": "Zulag",
        "effects": [
            "The caster and nearby allies regenerate 852 HP over 4 turns",
            "The caster and nearby allies get +46% defense for 4 turns",
            "The caster and nearby allies get +74% defense against special skills for 4 turns.",
            "Element Link summons a Dark Minion for all Dark allies with 6% HP and 10% attack inherited from the caster"
        ]
    },
    {
        "heroId": "nomad_female_archer",
        "name": "Sharan",
        "effects": [
            "Recovers 27% health for all allies"
        ]
    },
    {
        "heroId": "nomad_scout",
        "name": "Tudan",
        "effects": [
            "Deals 265% damage to the target"
        ]
    },
    {
        "heroId": "nomad_fighter",
        "name": "Farid",
        "effects": [
            "Deals 115% damage to all enemies"
        ]
    },
    {
        "heroId": "nomad_female_thief",
        "name": "Jill",
        "effects": [
            "All allies get 48% attack for 4 turns"
        ]
    },
    {
        "heroId": "nomad_shaman",
        "name": "Shaarkot",
        "effects": [
            "All allies get +48% attack for 4 turns"
        ]
    },
    {
        "heroId": "orc_skirmisher",
        "name": "Zudak",
        "effects": [
            "Deals 200% damage to the target and minor damage to nearby enemies"
        ]
    },
    {
        "heroId": "nomad_female_swordmaster",
        "name": "Azar",
        "effects": [
            "Deals 280% damage to the target.",
            "Reduces the mana of the target by 25%."
        ]
    },
    {
        "heroId": "nomad_female_swordmaster_costume_native",
        "name": "Azar C1",
        "effects": [
            "Deals 170% damage to the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 15%."
        ]
    },
    {
        "heroId": "nomad_female_swordmaster_costume_cute",
        "name": "Azar Toon",
        "effects": [
            "Deals 285% damage to the target.",
            "Reduces the mana of the target by 20%.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_female_swordmaster_costume_glass",
        "name": "Azar Glass",
        "effects": [
            "Deals 295% damage to the target.",
            "Reduces the mana of the target by 25%.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "tales1_bagreg",
        "name": "Bagreg",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 180% damage to target and nearby enemies.",
            "* The target and nearby enemies get -34% defense against Fire for 3 turns.",
            "2nd:",
            "* Deals 200% damage to target and nearby enemies.",
            "* The target and nearby enemies get -54% defense against Fire for 3 turns."
        ]
    },
    {
        "heroId": "tales1_bagreg_costume_scout",
        "name": "Bagreg C1",
        "effects": [
            "Special Skill needs consecutive uses to reach full power, in the following order:",
            "1st:",
            "* Deals 170% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -33% defense against Fire for 3 turns.",
            "2nd:",
            "* Deals 220% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -55% defense against Fire for 3 turns."
        ]
    },
    {
        "heroId": "monster_hunter_basil",
        "name": "Basil",
        "effects": [
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All allies get +35% defense for 4 turns. The defense increases by 10% each turn up to +65%.",
            "All allies counterattack with 70% of the damage received for 4 turns. The counterattack damage increases by +10% each turn, up to +100%."
        ]
    },
    {
        "heroId": "knights_bauchan",
        "name": "Bauchan",
        "effects": [
            "Deals 105% damage to all enemies.",
            "Reduces the mana of all enemies by 20%.",
            "All allies get +24% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "goblin_boots",
        "name": "Boots",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "Wither: The target and nearby enemies get -40 attack and -40 defense.",
            "The target and nearby enemies get -35% defense for 3 turns. If this effect  is removed before the duration ends, the target with the effect suffers  124 damage."
        ]
    },
    {
        "heroId": "christmas_buster",
        "name": "Buster",
        "effects": [
            "Deals 275% damage to the target and nearby enemies.",
            "Summons an Elf Minion for the caster with 10% HP and 10% attack inherited from the caster.",
            "All damage the target and nearby enemies receive is increased by +24% and a further +2% increase per each Fire shield on the board for 4 turns, up to +40% increased damage."
        ]
    },
    {
        "heroId": "styx_dante",
        "name": "Dante",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 105% damage to all enemies.",
            "* The attack bypasses defensive buffs. This includes counterattacks.",
            "2x Mana Charge:",
            "* Deals 125% damage to all enemies.",
            "* The attack bypasses defensive buffs. This includes counterattacks.",
            "* All enemies receive 120 Burn damage over 3 turns.",
            "3x Mana Charge:",
            "* Deals 205% damage to all enemies.",
            "* The attack bypasses defensive buffs. This includes counterattacks.",
            "* All enemies receive 160 Burn damage over 4 turns."
        ]
    },
    {
        "heroId": "fortune_dragon_kids",
        "name": "Dragon Kids",
        "effects": [
            "Boosts the caster and nearby allies' health by 400 with Spirit Aura. Spirit Aura safely removes status ailments before boosting health. (The health boost is reduced by -40 for each removed ailment. Uncleansable ailments are also removed.)",
            "Nearby allies dance the Fiery Fortune Dance for 4 turns.",
            "Fiery Fortune Dance",
            "* +30% attack.",
            "* Dealt damage is increased by +10%. The effect is +15% against Nature targets.",
            "* Received damage is reduced by -10%. The effect is -15% against Ice Special Skills.",
            "* Fortune Dances stack with other Dance effects. (All existing status effects will be removed when Fortune Dance status effects is added, except other Dance status effects. Fortune Dances gives immunity to new status effects, except other Dance effects. Fortune Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "s3_ei_dunn",
        "name": "Ei-Dunn",
        "effects": [
            "Deals 240% damage to the target and nearby enemies.",
            "The target and nearby enemies get -24% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "s3_ei_dunn_costume_shield",
        "name": "Ei-Dunn C1",
        "effects": [
            "Deals 180% damage to all enemies.",
            "Reduces the mana of all enemies by 10%."
        ]
    },
    {
        "heroId": "mimic_experience_rare_red",
        "name": "Experience Mimic Rare Fire",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 245% damage to the target.",
            "The Mimic chest closes for 2 turns.(The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "castle_stag_fawn",
        "name": "Fawn",
        "effects": [
            "All allies get +45% chance to Dodge Special Skills for 3 turns.  Each Dodge damages the attacker for 80 damage.",
            "All allies receive a small amount of mana over 3 turns."
        ]
    },
    {
        "heroId": "nomad_female_shaman",
        "name": "Hawkmoon",
        "effects": [
            "Recover 32% health for all allies."
        ]
    },
    {
        "heroId": "nomad_female_shaman_costume_native",
        "name": "Hawkmoon C1",
        "effects": [
            "All allies regenerate 459 HP over 3 turns.",
            "All allies get +30% attack for 3 turns."
        ]
    },
    {
        "heroId": "nomad_female_shaman_costume_cute",
        "name": "Hawkmoon Toon",
        "effects": [
            "Recovers 35% health for all allies.",
            "All allies get +34% defense for 3 turns. This status effect is undispellable and lasts 2 turns longer on Fire characters."
        ]
    },
    {
        "heroId": "nomad_female_shaman_costume_glass",
        "name": "Hawkmoon Glass",
        "effects": [
            "Recovers 37% health for all allies.",
            "All Fire allies reflect status ailments and negative stacks for 2 turns.(Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "tales2_helgi",
        "name": "Helgi",
        "effects": [
            "Deals 130% damage to 8 random enemies.",
            "The duration of buffs is reset for all allies."
        ]
    },
    {
        "heroId": "tales2_helgi_costume_combatant",
        "name": "Helgi C1",
        "effects": [
            "Deals 150% damage to 8 random enemies.",
            "The duration of buffs is reset for all allies."
        ]
    },
    {
        "heroId": "nomad_mage",
        "name": "Jahangir",
        "effects": [
            "Deals 145% damage to all enemies.",
            "All enemies receive 114 Burn damage over 6 turns."
        ]
    },
    {
        "heroId": "nomad_mage_costume_goggles",
        "name": "Jahangir C1",
        "effects": [
            "Deals 115% damage to all enemies.",
            "All enemies receive 156 Burn damage over 4 turns."
        ]
    },
    {
        "heroId": "nomad_mage_costume_cute",
        "name": "Jahangir Toon",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All enemies receive 114 Burn damage over 3 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_mage_costume_glass",
        "name": "Jahangir Glass",
        "effects": [
            "Deals 185% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies receive 135 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "nomad_mage_costume_stylish",
        "name": "Jahangir Stylish",
        "effects": [
            "Deals 195% damage to all enemies.",
            "If the enemies have less than 50% health remaining, deals 275% damage instead.",
            "All enemies receive 162 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "magic_kornel",
        "name": "Kornel",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* The caster and nearby allies get +45% attack, and a further 20% increase every time they are hit during 3 turns.",
            "2x Mana Charge:",
            "* The target and nearby enemies get -44% defense, and a further -4% decrease every time they are hit during 6 turns."
        ]
    },
    {
        "heroId": "kingdom_li",
        "name": "Li",
        "effects": [
            "Deals 160% damage to all enemies.",
            "Summons a Wu Soldier Minion for each ally with 10% HP and 18% attack inherited from the caster.",
            "The target hit by Wu Soldier Minion receives 156 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "outlaw_liu_tang",
        "name": "Liu Tang",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 265% damage to the target and minor damage to nearby enemies.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 5 turns."
        ]
    },
    {
        "heroId": "s2_straw_demon",
        "name": "Namahage",
        "effects": [
            "Deals 290% damage to the target.",
            "The caster gets +45% attack, and a further 20% increase every time they are hit during 5 turns, up to +145% attack."
        ]
    },
    {
        "heroId": "orc_warrior",
        "name": "Nashgar",
        "effects": [
            "Deals 290% damage to the target.",
            "The target receives 120 Burn damage over 6 turns."
        ]
    },
    {
        "heroId": "orc_warrior_costume_urukhai",
        "name": "Nashgar C1",
        "effects": [
            "Deals 260% damage to the target.",
            "The target receives 129 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "orc_warrior_costume_cute",
        "name": "Nashgar Toon",
        "effects": [
            "Deals 295% damage to the target.",
            "The target receives 144 Burn damage over 4 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "orc_warrior_costume_glass",
        "name": "Nashgar Glass",
        "effects": [
            "Deals 305% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target receives 164 Burn damage over 4 turns."
        ]
    },
    {
        "heroId": "wonderland_phoenicus",
        "name": "Phoenicus",
        "effects": [
            "All allies except the caster get +50% attack for 3 turns.",
            "All allies except the caster get +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "institute_piper",
        "name": "Piper",
        "effects": [
            "Deals 220% damage to the target and nearby enemies and inflicts 25 Insanity on them.",
            "Stack (Max: 10): The caster gets +17% attack.",
            "Inflicts 40 Instanity to the caster."
        ]
    },
    {
        "heroId": "moth_rosepetite",
        "name": "Rosepetite",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "The target and nearby enemies receives 144 Toxin damage over 4 turns. If Toxin is cast on a target with boosted health, Minions or Mega Minion, the Toxin damage received is increased. (The Toxin damage is increased by +100% against targets with boosted health. Each Minion or Mega Minion owned by the target increases the damage by additional +33%, up to total +199%.)"
        ]
    },
    {
        "heroId": "christmas_reindeer",
        "name": "Rudolph",
        "effects": [
            "Deals 285% damage to the target",
            "Reduces the mana of the target by 20%.",
            "Summons an Elf Minion with 10% HP and 10% attack inherited from the caster"
        ]
    },
    {
        "heroId": "christmas_reindeer_costume_knightly_steed",
        "name": "Rudolph C1",
        "effects": [
            "Deals 295% damage to the target.",
            "Reduces the mana of the target by 23%.",
            "Summons an Elf Minion with 10% HP and 10% attack inherited from the caster.",
            "The caster gets +24% defense for 3 turns."
        ]
    },
    {
        "heroId": "mighty_pet_rufus",
        "name": "Rufus",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All enemies receive 216 Bleed damage over 4 turns.",
            "All enemies get -34% defense for 4 turns."
        ]
    },
    {
        "heroId": "villain_skrekok",
        "name": "Skrekok",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "The caster and nearby allies get +45% attack and a further +20% increase every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "rabbit_red",
        "name": "Squire Wabbit",
        "effects": [
            "Deals 355% damage to the target",
            "The caster gets -20% defense for 3 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "astral_starswift",
        "name": "Starswift",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deal 265% damage to the target and nearby enemies.",
            "The caster and nearby allies get +20% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s3_sudri",
        "name": "Sudri",
        "effects": [
            "Deals 120% damage to all enemies.",
            "Deals additional 24% damage per each Fire shield on the board, up to 360% damage in total."
        ]
    },
    {
        "heroId": "s4_vollermork",
        "name": "Vollermork",
        "effects": [
            "Summons a Worm Fiend for all enemies. The Fiend damages the enemy with 32% attack every turn.",
            "The Worm Fiend absorbs healing and disappears when it has absorbed health equal to 16% of the targets max health"
        ]
    },
    {
        "heroId": "s4_vollermork_costume_bartender",
        "name": "Vollermork C1",
        "effects": [
            "Summons a Worm Fiend for all enemies. The fiend damages the enemy with 28% attack every turn.",
            "The fiend absorbs healing. It disappears after absorbing a healing equal to 20% of the target's max health."
        ]
    },
    {
        "heroId": "s5_waqas",
        "name": "Waqas",
        "effects": [
            "Deals 205% damage to all enemies.",
            "Reduces max health for all enemies by 450 over 3 turns. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 150 per turn.)"
        ]
    },
    {
        "heroId": "s5_waqas_costume_blade",
        "name": "Waqas C1",
        "effects": [
            "Deals 235% damage to all enemies.",
            "Reduces max health of all enemies by 345 over 3 turns. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 115 per turn.)"
        ]
    },
    {
        "heroId": "ronin_yamada_jingasa",
        "name": "Yamada Jingasa",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "x1 Mana Charge:",
            "Deals 200% damage to the target.",
            "Deals additional 200% damage to 1 random enemies.",
            "x2 Mana Charge:",
            "Deals 260% damage to the target.",
            "Deals additional 260% damage to 2 random enemies.",
            "All hit targets get -24% attack for 3 turns.",
            "x3 Mana Charge:",
            "Deals 320% damage to the target.",
            "Deals additional 320% damage to 3 random enemies.",
            "All hit targets get -34% attack for 5 turns."
        ]
    },
    {
        "heroId": "slayer_aodhan",
        "name": "Aodhan",
        "effects": [
            "Deals 210% damage to all enemies.",
            "Summons a Wisp Fiend for all enemies. The Fiend damages its target with 35% attack every turn.",
            "The Wisp Fiend absorbs healing. It disappears after absorbing a healing amount equal to 18% of its target's max health.",
            "Stack +2 (Max: 10): The caster gets +10% mana generation.",
            "Stack (Max: 10): The caster recovers 10 HP each turn."
        ]
    },
    {
        "heroId": "orc_gladiator",
        "name": "Boldtusk",
        "effects": [
            "Recovers 27% health for all allies.",
            "All allies get +48% attack for 4 turns."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_chef",
        "name": "Boldtusk C1",
        "effects": [
            "Recovers 37% health for all allies.",
            "All allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_sage",
        "name": "Boldtusk C2",
        "effects": [
            "All allies regenerate 288 boosted health over 4 turns. Boosted health can exceed max HP.",
            "All allies get +45% attack, and a further 20% increase every time they are hit during 4 turns, up to +145% attack."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_cute",
        "name": "Boldtusk Toon",
        "effects": [
            "Recovers 33% health for all allies.",
            "All allies get +40% attack for 4 turns. For all Fire characters, this status effect becomes undispellable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_glass",
        "name": "Boldtusk Glass",
        "effects": [
            "Recovers 34% health for all allies.",
            "All allies get +45% attack for 4 turns.",
            "All Fire allies reflect status ailments and negative stacks for 2 turns. (Status effects cast by characters, Minions, and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "orc_gladiator_costume_stylish",
        "name": "Boldtusk Stylish",
        "effects": [
            "Recovers 42% health for all the ally with the lowest remaining HP. All other allies recover 35% health.",
            "All allies get +46% attack for 4 turns"
        ]
    },
    {
        "heroId": "christmas_carol",
        "name": "Carol",
        "effects": [
            "Reduces mana of the target by 25%.",
            "Summons an elf Minion with 10% HP and 10% attack inherited from the caster.",
            "The target receives a Gift Bomb. After 3 turns the Gift Bomb explodes and deals 374 damage to the target and nearby enemies.  The gift Bomb also explodes when the target is defeated."
        ]
    },
    {
        "heroId": "slayer_cillian",
        "name": "Cillian",
        "effects": [
            "Deals 315% damage to the target and nearby enemies.",
            "If the caster dies during the next 4 turns they are resurrected in the beginning of their next turn with 27% health. All status effects and stacks are removed when the caster dies.",
            "Stack (Max: 10): The caster gets +5% mana generation.",
            "Stack +2 (Max: 10): The caster recovers 20 HP each turn."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer",
        "name": "Colen",
        "effects": [
            "Deals 180% damage to all enemies.",
            "All enemies receive 330 Burn damage over 6 turns."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer_costume_magma",
        "name": "Colen C1",
        "effects": [
            "Deals 240% damage to all enemies.",
            "All enemies receive 204 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer_costume_tracker",
        "name": "Colen C2",
        "effects": [
            "Deals 285% damage to the target and nearby enemies.",
            "The target and nearby enemies get -54% defense against Fire for 6 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer_costume_cute",
        "name": "Colen Toon",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All enemies receive 174 Burn damage over 3 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer_costume_glass",
        "name": "Colen Glass",
        "effects": [
            "Deals 220% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies receive 198 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "circus_eichbelborg",
        "name": "Eichbelborg",
        "effects": [
            "Deals 340% damage to the target.",
            "The enemy with the highest base defense gets -44% defense for 4 turns."
        ]
    },
    {
        "heroId": "castle_wolf_ferant",
        "name": "Ferant",
        "effects": [
            "The caster and nearby allies counterattack with 115% of the damage received for 5 turns.",
            "The caster and nearby allies decrease -10% mana from the attacker on each counterattack for 5 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "castle_wolf_ferant_costume_fire",
        "name": "Ferant C1",
        "effects": [
            "The caster and nearby allies counterattack with 120% of the received damage for 5 turns.",
            "The caster and nearby allies decrease -5% mana from the attacker on each counterattack for 5 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "orc_troopmaster",
        "name": "Gormek",
        "effects": [
            "Deals 295% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% defense for 6 turns."
        ]
    },
    {
        "heroId": "orc_troopmaster_costume_merchant",
        "name": "Gormek C1",
        "effects": [
            "Destroys all Minions from all enemies and damages Mega Minions.",
            "Deals 180% damage to all enemies.",
            "All allies recover 80 HP for each destroyed Minion."
        ]
    },
    {
        "heroId": "orc_troopmaster_costume_gourmet",
        "name": "Gormek C2",
        "effects": [
            "Dispels buffs from all enemies",
            "Deals 225% damage to all enemies"
        ]
    },
    {
        "heroId": "orc_troopmaster_costume_cute",
        "name": "Gormek Toon",
        "effects": [
            "Deals 325% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -24% defense for 6 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "orc_troopmaster_costume_glass",
        "name": "Gormek Glass",
        "effects": [
            "Deals 335% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target and nearby enemies get -30% defense for 6 turns."
        ]
    },
    {
        "heroId": "guardian_falcon_priest",
        "name": "Guardian Falcon",
        "effects": [
            "Deals 225% damage to the target and nearby enemies.",
            "The target and nearby enemies get -54% defense against fire for 4 turns"
        ]
    },
    {
        "heroId": "construct_hotspin",
        "name": "Hotspin",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The caster and nearby allies counterattack with 100% of the damage received for 4 turns.",
            "Caster and nearby allies get Burning Touch for 4 turns. (Burning Touch: Each time the owner of this status effect counterattacks an enemy, the attacker receives 324 Burn damage over 4 turns.)"
        ]
    },
    {
        "heroId": "beachparty_itham",
        "name": "Itham",
        "effects": [
            "Deals 270% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns, and receive 70 damage for each attempted buff.",
            "The caster and nearby allies resist new effects that block usage of Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "s5_junaid",
        "name": "Junaid",
        "effects": [
            "Deals 400% damage to the target.",
            "Heals all allies for 30% of the damage dealt"
        ]
    },
    {
        "heroId": "s5_junaid_costume_champion",
        "name": "Junaid C1",
        "effects": [
            "Deals 370% damage to the target.",
            "Heals all allies for 40% of damage dealt."
        ]
    },
    {
        "heroId": "nomad_female_berserker",
        "name": "Kelile",
        "effects": [
            "Deals 320% damage to the target.",
            "The target receives 360 Burn damage over 6 turns."
        ]
    },
    {
        "heroId": "nomad_female_berserker_costume_shaman",
        "name": "Kelile C1",
        "effects": [
            "All enemies receieve 334 Burn damage over 2 turns."
        ]
    },
    {
        "heroId": "nomad_female_berserker_costume_sorceress",
        "name": "Kelile C2",
        "effects": [
            "Deals 220% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 198 Burn damage over 3 turns. The caster absorbs 30% of dealt Burn damage as health."
        ]
    },
    {
        "heroId": "nomad_female_berserker_costume_cute",
        "name": "Kelile Toon",
        "effects": [
            "Deals 325% damage to the target.",
            "The target receives 216 Burn damage over 3 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_female_berserker_costume_glass",
        "name": "Kelile Glass",
        "effects": [
            "Deals 335% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target receives 240 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "kalevala_lemminkainen",
        "name": "Lemminkainen",
        "effects": [
            "Deals 285% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 196 Burn damage over 4 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_lemminkainen_costume_swan",
        "name": "Lemminkainen C1",
        "effects": [
            "Deals 300% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 176 Burn Damage over 4 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "magic_lucy",
        "name": "Lucy",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 180% damage to the target.",
            "* Each time the target activates their Special Skill during 3 turns, mana of all other enemies is reduced by -8%.",
            "2x Mana Charge:",
            "* All allies get +24% mana generation for 5 turns.",
            "* For the next 5 turns, this character deals 115% damage to all enemies each time any other ally casts their Special Skill. Damage is dealt on the first Special Skill cast of each character per turn."
        ]
    },
    {
        "heroId": "s4_mack",
        "name": "Mack",
        "effects": [
            "The caster and nearby allies counterattack with 125% of the damage received for 4 turns.",
            "The caster and nearby allies get +25% attack for 4 turns."
        ]
    },
    {
        "heroId": "s4_mack_costume_novelist",
        "name": "Mack C1",
        "effects": [
            "The caster and nearby allies counterattack with 100% of the damage received for 4 turns.",
            "The caster and nearby allies get +35% attack for 4 turns."
        ]
    },
    {
        "heroId": "astral_demon_mael",
        "name": "Mael",
        "effects": [
            "Deals 285% damage to the target.",
            "Has 60% chance for additional hits on random enemies up to 3 times. Additional hits deals minor damage.",
            "Hit enemies receive Resonance for 3 turns. Each turn, Resonance deals 190 damage to the afflicted enemies and 95 damage to nearby enemies."
        ]
    },
    {
        "heroId": "monster_hunter_maheegan",
        "name": "Maheegan",
        "effects": [
            "Deals 280% damage to the target and minor damage to nearby enemies.",
            "Summons a Bone Trap Fiend for the target and nearby enemies. The Fiend damages the enemy with 45% attack each turn. The damage increases by 8% each turn, up to a maximum of 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health."
        ]
    },
    {
        "heroId": "magic_carpet_manpip",
        "name": "Manpip",
        "effects": [
            "Deals 250% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 296 Burn damage over 4 turns. The caster absorbs 20% of dealt Burn damage as health."
        ]
    },
    {
        "heroId": "elemental_nova",
        "name": "Nova",
        "effects": [
            "Recovers 25% health for all allies.",
            "Recovers additional 2% health per each Fire shield on the board, up to 45% health in total.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "ballerina_raul",
        "name": "Raul",
        "effects": [
            "Deals 120% damage to the target and nearby enemies.",
            "The target and nearby enemies dance to Ballad of Attraction for 3 turns.  All existing status effects will be removed when this effect is added.",
            "Ballad of Attraction",
            "* -20% mana generation.",
            "* -20% decrease for any healing received.",
            "* Gives immunity to new status effects. New dance status effects will replace this effect.",
            "* This effect cannot be dispelled. The effect is removed when the caster dies."
        ]
    },
    {
        "heroId": "s4_rokkamush",
        "name": "Rokkamush",
        "effects": [
            "Deals 200% damage to all enemies. Each hit has 50% accuracy.",
            "All hit enemies receive 192 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "s4_rokkamush_costume_mason",
        "name": "Rokkamush C1",
        "effects": [
            "Deals 175% damage to all enemies. Each hit has 80% accuracy.",
            "All hit enemies receive 200 bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "nomad_female_assassin",
        "name": "Scarlett",
        "effects": [
            "Deals 215% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -34% attack for 6 turns."
        ]
    },
    {
        "heroId": "nomad_female_assassin_costume_poison",
        "name": "Scarlett C1",
        "effects": [
            "Deals 185% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies receive 138 Poison damage over 3 turns.",
            "The caster and nearby allies get +30% attack for 3 turns."
        ]
    },
    {
        "heroId": "nomad_female_assassin_costume_dancer",
        "name": "Scarlett C2",
        "effects": [
            "Deals 235% damage to the target and minor damage to the nearby enemies.",
            "The target and nearby enemies get -31% attack, and a further 4% decrease every time they are hit during 4 turns, down to -51% attack."
        ]
    },
    {
        "heroId": "nomad_female_assassin_costume_cute",
        "name": "Scarlett Toon",
        "effects": [
            "Deals 220% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -24% attack for 6 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_female_assassin_costume_glass",
        "name": "Scarlett Glass",
        "effects": [
            "Deals 230% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target and nearby enemies get -29% attack for 6 turns."
        ]
    },
    {
        "heroId": "s3_shadereave",
        "name": "Shadereave",
        "effects": [
            "All allies get +30% attack for 4 turns.",
            "All allies get +30% critical chance for 4 turns.",
            "All allies receive Draugr Blessing. If the blessed Hero dies in the next 4 turns, they will be reborn as a Draugr with:",
            "100% inherited health.",
            "500 attack.",
            "500 defense.",
            "Special Skill: Eternal Loyalty"
        ]
    },
    {
        "heroId": "ninja_shale",
        "name": "Shale",
        "effects": [
            "1x Mana Charge",
            "* The caster regenerates 411 HP over 3 turns.",
            "* Cleanses status ailments from the caster.",
            "2x Mana Charge",
            "* The caster and nearby allies regenerate 549 HP over 3 turns.",
            "* Cleanses status ailments from the caster and nearby allies.",
            "3x Mana Charge",
            "* All allies regenerate 714 HP over 3 turns.",
            "* Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "knights_sir_lancelot",
        "name": "Sir Lancelot",
        "effects": [
            "Deals 265% damage to the target",
            "The caster and nearby allies get +24% mana generation for 4 turns",
            "The caster and nearby allies get +48% attack for 4 turns"
        ]
    },
    {
        "heroId": "s2_demon_master",
        "name": "Sumitomo",
        "effects": [
            "Deals 300% damage to the target.",
            "The caster counterattacks with 135% of the damage received for 5 turns.",
            "The caster regenerates a moderate amount of mana for each counterattack for 5 turns. This effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "s2_demon_master_costume_steppe",
        "name": "Sumitomo C1",
        "effects": [
            "Deals 280% damage to the target.",
            "The caster counterattacks with 155% of the damage received for 5 turns.",
            "The caster regenerates a moderate amount of mana for each counterattack for 5 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "s3_sumle",
        "name": "Sumle",
        "effects": [
            "Deals 235% damage to all enemies. Each hit has 80% accuracy.",
            "The damage is increased by 70% per each dead enemy."
        ]
    },
    {
        "heroId": "s3_sumle_costume_unhallowed",
        "name": "Sumle C1",
        "effects": [
            "Deals 365% damage to target and nearby enemies. Each hit has 85% accuracy.",
            "The damage is increased by 25% per each dead enemy."
        ]
    },
    {
        "heroId": "kingdom_sun_shangxiang",
        "name": "Sun Shangxiang",
        "effects": [
            "Deals 280% damage to the target and minor damage to dearby enemies.",
            "The target and nearby enemies get -44% defense, and a further -4% decrease every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "gargoyle_vonreine",
        "name": "Vonreine",
        "effects": [
            "Deals 285% damage to the target and nearby enemies.",
            "Summons a Fire Wisp Fiend to the target and nearby enemies.",
            "The Fire Wisp Fiend absorbs healing. It disappears after absorbing a healing amount equal to 35% of its target's max health.",
            "The caster steals 30% of the generated mana from the target and nearby enemies. This effect lasts as long as the target has Fire Wish Fiends. This effect can't be cleansed, but gets removed if the caster is defeated."
        ]
    },
    {
        "heroId": "s2_rugged_fisherman",
        "name": "Wilbur",
        "effects": [
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All enemies become Soul Connected for 4 turns. Soul Connected enemies share received damage.",
            "All allies get +63% defense for 4 turns",
            "All enemies get -44% defense for 4 turns"
        ]
    },
    {
        "heroId": "s2_rugged_fisherman_costume_sake_master",
        "name": "Wilbur C1",
        "effects": [
            "All allies get +100% normal attack for 4 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +140% increased power while this effect is active.",
            "All allies regenerate 280 HP over 4 turns."
        ]
    },
    {
        "heroId": "bard_zhabog",
        "name": "Zhabog",
        "effects": [
            "Deals 350% damage to the target.",
            "The duration of status ailments is reset for all enemies."
        ]
    },
    {
        "heroId": "kingdom_zhou_yu",
        "name": "Zhou Yu",
        "effects": [
            "Deals 355% damage to the target.",
            "Summons a Wu Soldier Minion for each ally with 10% HP and 18% attack inherited from the caster.",
            "The target hit by Wu Soldier Minion receives 207 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "kingdom_zhou_yu_costume_white_raven",
        "name": "Zhou Yu C1",
        "effects": [
            "Deals 345% damage to the target.",
            "Summons a Wu Soldier Minion for each ally with 22% HP and 30% attack inherited from the caster.",
            "The target hit by Wu Soldier Minion receives 339 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "shadow_abigail",
        "name": "Abigail",
        "effects": [
            "Deals 260% damage to all enemies.",
            "Summons a Xulu Minion for each ally with 15% HP and 20% attack inherited from the caster.",
            "Each hit from a Xulu Minion gives the target the following status ailments:",
            "* The target receives 340 Bleed damage over 4 turns.",
            "* Inflicts 5 Insanity on the target.",
            "Casting this Special Skill inflicts 50 Insanity on the caster."
        ]
    },
    {
        "heroId": "titan_hunter_adelitza",
        "name": "Adelitza",
        "effects": [
            "Deals 600% damage to the target.",
            "Against Titans, deals 700% damage.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target gets -40% defense for 3 turns. Against Nature Titans, the targets -60% defense and the status effect lasts 2 turns longer."
        ]
    },
    {
        "heroId": "mimic_aether_red",
        "name": "Aether Mimic Fire",
        "effects": [
            "Deals 600% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "Boosts all allies' health by 30% of damage dealt.",
            "The Mimic chest closes for 2 turns."
        ]
    },
    {
        "heroId": "tales2_aethslegaur",
        "name": "Aethslegaur",
        "effects": [
            "Attacks the target with Firestorm Strike, dealing up to 4000 damage. Deals 40% more if the target is of the Nature element. This Special Skill never misses its targets.",
            "All allies get +45% chance to dodge attacks and Special Skills for 5 turns.",
            "This character gets a Mark of Immolation for 5 turns. Whenever an enemy or an ally receives Burn damage, the caster gains a stack. (Max: 10). Each stacks increases mana generation of the caster by +6%."
        ]
    },
    {
        "heroId": "halloween_alucard",
        "name": "Alucard",
        "effects": [
            "Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "Deals 250% damage to the target and nearby enemies.",
            "All allies recover 10% health for each destroyed Minion.",
            "All allies get 3% mana for each destroyed Minion.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "halloween_alucard_costume_mafia",
        "name": "Alucard C1",
        "effects": [
            "Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "Deals 245% damage to the target and nearby enemies.",
            "All allies recover 12% health for each destroyed Minion.",
            "All allies get 3% mana for each destroyed Minion.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "halloween_amber",
        "name": "Amber",
        "effects": [
            "Deals 605% damage to the target.",
            "Heals the caster for 100% of the damage dealt.",
            "The target resists healing and receives 300 damage per each resisted healing for 4 turns."
        ]
    },
    {
        "heroId": "fire_god_andre",
        "name": "Andre de Clermont",
        "effects": [
            "Deals 390% damage to the target and nearby enemies.",
            "Gives cover to a random ally for 5 turns. This effect can't be dispelled. (While in Cover, the ally taks no damage from Special attacks or normal attacks. This covering character takes 50% of the damage dealt to the ally.)",
            "The caster and nearby allies get +89% defense against Ice for 5 turns.",
            "Elemental Link gives all Fire allies +20% critical chance for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "beachparty_andy_jay",
        "name": "Andy Jay",
        "effects": [
            "Deals 450% damage to all enemies.",
            "All allies except the caster dance the Blazing Dave Dance for 3 turns.",
            "Blazing Rave Dance",
            "* +50% defense.",
            "* If the dancer is hit with direct damage from Special Skill, Blazing Rave Dance is extended by 1 turn for all dancers. The dance can only be extended once per turn. (All existing status effect will be removed when a dance status effect is added. Dance gives immunity to new status effects. New dance status effect will replace this effect. Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "fire_god_anzogh",
        "name": "Anzogh",
        "effects": [
            "Deals 280% damage to all enemies.",
            "Heals each ally with 35% of total damage dealt.",
            "Element Link gives all Fire allies +46% defense against Ice for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "masquerade_aradia",
        "name": "Aradia",
        "effects": [
            "Reduces max health of all enemies by 570. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of max health. Any boosted health is reduced by an additional 570.",
            "All enemies receive 744 Burn damage over 4 turns.",
            "All enemies get -75% decrease of any boosted health received for 4 turns."
        ]
    },
    {
        "heroId": "faun_araminta",
        "name": "Araminta",
        "effects": [
            "Deals 260% damage to all enemies.",
            "Stack (Max: 10): All damage all enemies recieve is increased by +7%.",
            "All allies gain 10% mana after 2 turns, or immediatelly if the effect is removed before the duration ends."
        ]
    },
    {
        "heroId": "fire_god_ares",
        "name": "Ares",
        "effects": [
            "The caster and nearby allies get +54% attack for 4 turns.",
            "The caster and nearby allies get +46% critical chance for 4 turns.",
            "The caster and nearby allies regenerate 1000 HP over 4 turns.",
            "Element Link gives all Fire allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fire_god_ares_costume_keymaster",
        "name": "Ares C1",
        "effects": [
            "The caster and nearby allies get +45% attack for 4 turns. The attack increases by 5% each turn, up to +60%.",
            "The caster and nearby allies counterattack with 110% of the damage received for 4 turns. The counterattack damage increases by 10% each turn, up to 140%.",
            "The caster and nearby allies regenerate 900 boosted health over 4 turns. Boosted health can exceed max HP.",
            "Element Link gives all Fire allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ronin_asakura_masao",
        "name": "Asakura Masao",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "x1 Mana Charge:",
            "Deals 250% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "Growth: The caster gets 100 attack and 100 defense.",
            "x2 Mana Charge:",
            "Deals 400% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "Growth: The caster and nearby allies get 250 attack and 250 defense.",
            "x3 Mana Charge:",
            "Deals 600% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "Growth: All allies get 600 attack and 600 defense."
        ]
    },
    {
        "heroId": "mimic_ascension_item_red",
        "name": "Ascension Mimic",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target and nearby enemies receive 668 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "elemental_ash",
        "name": "Ash",
        "effects": [
            "Deals 150% damage to 9 random enemies.",
            "Damage is increased by 5% per each Fire shield on the board, up to +200% damage per hit.",
            "All hit targets get -35% defense against Fire and a further -5% decrease every time they are hit during 4 turns."
        ]
    },
    {
        "heroId": "villain_asterius",
        "name": "Asterius",
        "effects": [
            "Deals 360% damage to the target and nearby enemies.",
            "Reduces the duration of the target and nearby enemies buffs by 1 turn.",
            "The target and nearby enemies receive Corrosive Burn for 3 turns. The Corrosive Burn deals 101 burn damage and lowers the targets defence by -16% each turn. Deals extra damage against heroes with Minions or Mega Minions."
        ]
    },
    {
        "heroId": "ninja_aurum",
        "name": "Aurum",
        "effects": [
            "1x Mana Charge",
            "* Deals 385% damage to the target.",
            "* The target gets a Mark of Bleed for 2 turns. Whenever a marked target receives Bleed damage, they gain a stack (Max: 10). Each stack increases all damage they target receives by +5%.",
            "* The target receives 316 Bleed damage over 2 turns.",
            "2x Mana Charge",
            "* Deals 395% damage to the target and nearby enemies.",
            "* The target and nearby enemies get a Mark of Bleed for 4 turns. Whenever a marked target receives a Bleed damage, they gain a stack (Max: 10). Each stack increases all damage they target receives by +5%.",
            "* The target and nearby enemies receive 792 Bleed damage over 4 turns.",
            "3x Mana Charge",
            "* Deals 405% damage to all enemies.",
            "* All enemies get a Mark of Bleed for 6 turns. Whenever a marked target receives a Bleed damage, they gain a stack (Max: 10). Each stack increases all damage they target receives by +5%.",
            "* All enemies receive 1506 Bleed damage over 6 turns."
        ]
    },
    {
        "heroId": "lionman_barbarian",
        "name": "Azlar",
        "effects": [
            "Deals 205% damage to all enemies.",
            "All enemies receive 414 damage over 6 turns."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_armor",
        "name": "Azlar C1",
        "effects": [
            "Deals 205% damage to the target and nearby enemies.",
            "Deals 410% damage if the target has less than 50% health remaining.",
            "The target and nearby enemies receive 472 Burn damage over 2 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_babysitter",
        "name": "Azlar C2",
        "effects": [
            "Deals 310% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 636 Burn damage over 4 turns. The caster absorbs 40% of the dealt Burn damage as health."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_cute",
        "name": "Azlar Toon",
        "effects": [
            "Deals 355% damage to all enemies.",
            "All enemies receive 513 damage over 3 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_glass",
        "name": "Azlar Glass",
        "effects": [
            "Deals 365% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies receive 621 Burn damage over 2 turns."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_stylish",
        "name": "Azlar Stylish",
        "effects": [
            "Deals 375% damage to all enemies.",
            "If the enemies have less than 50% health remaining, deals 525% damage instead.",
            "All enemies receive 720 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "fortune_bai_yan",
        "name": "Bai Yan",
        "effects": [
            "Boosts the caster and nearby allies' health by 1300 with Spirit Aura. Spirit Aura safely removes status ailments before boosting health. (The health boost is reduced by -100 for each removed ailment. Uncleansable ailments are also removed.)",
            "Nearby allies dance the Fiery Fortune Dance for 4 turns.",
            "Fiery Fortune Dance",
            "* +50% attack.",
            "* Dealt damage is increased by +20%. The effect is +30% against Nature targets.",
            "* Received damage is reduced by -20%. The effect is -30% against Ice Special Skills.",
            "* Fortune Dances stack with other Dance effects. (All existing status effects will be removed when Fortune Dance status effects is added, except other Dance status effects. Fortune Dances gives immunity to new status effects, except other Dance effects. Fortune Dance effect cannot be dispelled. The effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "s3_baldur",
        "name": "Baldur",
        "effects": [
            "Deals 165% damage to a random enemy.",
            "Boosts health of the caster by 1000. Boosted health can exceed max HP.",
            "All allies resist mana reduction for as long as the caster has boosted health. This effect can't be dispelled.",
            "Deals 165% damage to a random enemy each turn for as long as the caster has boosted health. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s3_baldur_costume_fiery",
        "name": "Baldur C1",
        "effects": [
            "Deals 400% damage to the target.",
            "Boosts health of the caster by 850. Boosted health can exceed max HP.",
            "All allies resist mana reduction for as long as the caster has boosted health. This effect can't be dispelled.",
            "Deals 185% damage to a random enemy each turn for as long as the caster has boosted health. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "mighty_pet_barkley",
        "name": "Barkley",
        "effects": [
            "Deals 300% damage to the target and 2 random enemies.",
            "Summons a Missile Fiend to hit enemies. The Fiend damages the enemy with 55% attack every turn.",
            "The Missile Fiend absorbs healing and disappears when it has absorbed health equal to 28% of its owner's max health.",
            "If an enemy is defeated while it has a Missile Fiend, nearby enemies receive 500 damage."
        ]
    },
    {
        "heroId": "vegetable_bartholomew",
        "name": "Bartholomew",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "Deals additional 15% damage for each Fiend or Mega Fiend owned by the enemies, up to 450% damage in total.",
            "Harvests buffs fom target and nearby enemies. (Harvest safely removes 2 buffs, positive Stacks or Growth effect from each target. This includes undispellable buffs and dance effects. The caster receives 7% boosted health for each effect removed. Boosted health can exceed max HP. Safe removal bypasses secondary effects, such as damage on removal, fom the emove status effect buffs. External effect such as passive skil and family effects can still active. Growth effects are removed first. Other effects, the latest is removed first.)",
            "The caster and nearby allies counterattack with 110% of the received damage for 4 turns."
        ]
    },
    {
        "heroId": "castle_bear_bearnadette",
        "name": "Bearnadette",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 250% damage to all enemies.",
            "All enemies turn into Cursed Paintings for 5 turns. This effect can't be cleansed. Cursed Paintings have 70% attack, 70% defense and the following Special Skill:",
            "Break Free (Very Fast)",
            "* Deals 250% damage to the target.",
            "* 60% chance of removing the Cursed Painting ailment from the caster. (Bosses, Titans and Mythic Titans are not affected by this status effect.)"
        ]
    },
    {
        "heroId": "beowulf_beowulf",
        "name": "Beowulf",
        "effects": [
            "Deals 615% damage to the target.",
            "Recovers 15% health for all allies.",
            "Increases the mana of all allies by 10%.",
            "Stack (Max 10): All allies get +25% attack."
        ]
    },
    {
        "heroId": "mahayoddha_bhima",
        "name": "Bhima",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 410% damage to the target and nearby enemies.",
            "Growth Boon: Deals 2x extra damage for each point of modified attack. (Up to a maximum 800 additional extra damage. Status affects affecting damage dealt do affect extra damage. Defense stat does not affect the extra damage. Status effects affecting attack do not affect extra damage.)",
            "Reduces max health of the target and nearby enemies by 850. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 850.)",
            "The target and nearby enemies get -50% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "pirate_boatswain",
        "name": "Black Caesar",
        "effects": [
            "Deals 335% damage to all enemies.",
            "Summons a Pirate Skeleton Fiend for all enemies. The Fiend damage the enemy with 100% attack every turn.",
            "The Pirate Skeleton Fiend absorbs healing. It disappears after absorbing a healing amount equal to 45% of its target's max health.",
            "When summoned, the Pirate Skeleton Fiend gives -45% attack for its owner for as long as the owner has Priate Skeleton Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "knights_black_knight",
        "name": "Black Knight",
        "effects": [
            "The caster has a 50% chance to drop any received damage to 1 for 3 turns.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
            "All allies get +45% attack, and a further 20% increase every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "knights_black_knight_costume_negative",
        "name": "Black Knight C1",
        "effects": [
            "The caster has a 50% chance to drop any received damage to 1 for 4 turns.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "All allies get +54% attack for 4 turns."
        ]
    },
    {
        "heroId": "construct_japanese_doll",
        "name": "Blossom",
        "effects": [
            "Recovers 45% health for all allies.",
            "Dispels buffs from all enemies.",
            "Recovers 70 health per each removed status effect for all allies, up to 560 health in total."
        ]
    },
    {
        "heroId": "monster_hunter_bonecrusher",
        "name": "Bonecrusher",
        "effects": [
            "Deals 540% damage to the target.",
            "The damage is increased by 30% per each living ally of the caster.",
            "Stack (Max: 10): The caster gets +15% attack against the weaker element."
        ]
    },
    {
        "heroId": "construct_brimstone",
        "name": "Brimstone",
        "effects": [
            "Deals 200% damage to all enemies.",
            "Summons an Infernal Fiend for all enemies. The Fiend damage its target with 80% attack every turn.",
            "The Infernal Fiend absorbs healing. It disappears after absorbing a healing amount equal to 35% of its target max health.",
            "When summoned, the Infernal Fiend give -54% defense againt Fire for its target for as long as the target has Infernal Fiends. This effect can't be cleansed.",
            "All allies get +86% defense against Ice for 3 turns."
        ]
    },
    {
        "heroId": "pirate_swashbuckler",
        "name": "Captain Kestrel",
        "effects": [
            "Deals 215% damage to the target and nearby enemies.",
            "The more mana enemies have, the more damage they will receive, up to 335%."
        ]
    },
    {
        "heroId": "s4_captain_nemo",
        "name": "Captain Nemo",
        "effects": [
            "Deals 300% damage to the target.",
            "Deals 600% damage if the caster has status ailments or negative stats."
        ]
    },
    {
        "heroId": "s4_captain_nemo_costume_machinist",
        "name": "Captain Nemo C1",
        "effects": [
            "Deals 370% damage to the target.",
            "Deals 555% damage if the caster has status ailments or negative stacks."
        ]
    },
    {
        "heroId": "musketeer_cardinal_richelieu",
        "name": "Cardinal Richelieu",
        "effects": [
            "Deals 330% damage to all enemies.",
            "Summon a Spy Fiend for all enemies. The Fiend damages the enemy with 45% attack every turn.",
            "The Spy Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its target's max health.",
            "At the end of each turn, the Spy Fiend steals one of its target's dispellable buffs and gives it to one character on the opposite team."
        ]
    },
    {
        "heroId": "masquerade_carmenta",
        "name": "Carmenta",
        "effects": [
            "Spreads all of the target's cleansable status ailments to nearby enemies.",
            "The duration of the status ailments is reset for target and nearby enemies.",
            "Deaks 495% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "wild_cat_catalina",
        "name": "Catalina",
        "effects": [
            "Deals 550% Clawing damage to the target. (Deals 825% damage against enemies with any defensive buffs, Minions or Mega Minions. Enemies with any defensive buffs, Minions or Mega Minions receive -35% defense for 6 turns.)",
            "All allies except the caster get +40% attack for 4 turns.",
            "All allies except the caster get +40% critical chance for 4 turns.",
            "All allies except the caster heal 100% of dealt normal damage for 4 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_ceris",
        "name": "Ceris",
        "effects": [
            "Deals 600% damage to the target.",
            "If the target had more than 50% mana before receiving damage, targets another enemy who had over 50% mana before receiving any damage from this Special Skill. If none of the other enemies had 50% mana, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "All hit enemies get silenced for 6 turns.",
            "Wither: All enemies get -350 attack and -350 defense."
        ]
    },
    {
        "heroId": "ballerina_charlotta",
        "name": "Charlotta",
        "effects": [
            "Deals 450% damage to target and nearby enemies.",
            "The target and nearby enemies dance to Ballad of Condemnation for 3 turns.",
            "\"Ballad of Condemnation\"",
            "-50% mana generation.",
            "-50% decrease of any healing healing received.",
            "When the dance ends, the target suffers 1500 damage. (All existing status effects will be removed a dance status effect is added. Dance gives immunity to new status effects. New dance status effect will replace this effect. Dance effect cannot be dispelled. This effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "slime_charmione",
        "name": "Charmione",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "The target and nearby enemies receive Devouring Goo status ailment for 5 turns.",
            "Devouring Goo: Removes all dispellable buffs and Growth effects, deals 300 damage per turn and 100 damage per each removed effect. (If the target already has this effect, the duration will be refreshed and an extra damage from the removed effects will be added to the new effect. Damage per turn can't exceed 700.",
            "After 1 turn the target and nearby enemies get Paralyzed for 4 turns. (Paralyzed enemies can't attack or gain mana and receive +50% increased damage."
        ]
    },
    {
        "heroId": "slime_chingiriko",
        "name": "Chingiriko",
        "effects": [
            "Deals 450% damage to the target and nearby enemies.",
            "The target and nearby enemies get -39% accuracy for 4 turns. The effect duration resets if the target is healed. (Chance to miss applies to offensive   Special Skills.)",
            "All allies get Sticky Surface for 4 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)"
        ]
    },
    {
        "heroId": "mighty_pet_chomper",
        "name": "Chomper",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "Heals each ally with 40% of the total damage dealt.",
            "The target and nearby enemies receive 368 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "moth_chunkyroi",
        "name": "Chunkyroi",
        "effects": [
            "Recovers 45% health for all allies.",
            "For the next 4 turns, this character recovers 350 boosted health to all allies each time any other ally casts their Special Skill. (Each character an trigger this effect once per turn.)",
            "All allies get +30% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "fables_cinderella",
        "name": "Cinderella",
        "effects": [
            "Cleanses status ailments from all allies.",
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All enemies become Soul Connected for 4 turns. Soul Connected enemies share received damage.",
            "All allies get +63% defense for 4 turns.",
            "All enemies get -44% defense for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_cleaver",
        "name": "Cleaver",
        "effects": [
            "Deals 100% damage to all enemies.",
            "Summons a Bone Trap Fiend for all enemies. The Fiend damages the enemy with 45% attack each turn. The damage increases by 8% each turn, up to a maximum of 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its owner's max health.",
            "All enemies get -32% attack, and a further -5% decrease every time they are hit during 4 turns."
        ]
    },
    {
        "heroId": "christmas_cookie",
        "name": "Cookie",
        "effects": [
            "Reduces the mana of all enemies by 20%.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All enemies receive a Mystery Potion. After 3 turns the Mystery Potion explodes and deals 450 damage to the target. After the explosion the target can't gain mana for 3 turns."
        ]
    },
    {
        "heroId": "valentines_cupido",
        "name": "Cupido",
        "effects": [
            "Deals 295% damage to the target and nearby enemies.",
            "For 3 turns, the target and nearby enemies are forced to cast Mindless Heal when at full mana.",
            "Mindless Heal: Recovers 20% health for the character on the opposing side with the lowest remaining HP."
        ]
    },
    {
        "heroId": "valentines_cupido_costume_flame",
        "name": "Cupido C1",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The target and nearby enemies get -34% defense against Fire for 3 turns.",
            "For 3 turns, the target and nearby enemies are forced to cast Mindless Heal when at full mana.",
            "Mindless Heal: Recovers 20% HP health for the character on the opposing side with the lowest remaining HP."
        ]
    },
    {
        "heroId": "musketeer_dartagnan",
        "name": "D Artagnan",
        "effects": [
            "Deals 470% damage to the target.",
            "The target receives 1065 Burn damage over 3 turns. This effect spreads to nearby enemies.",
            "Caster regenerates 459 HP over 3 turns."
        ]
    },
    {
        "heroId": "musketeer_dartagnan_costume_chimney_sweeper",
        "name": "D Artagnan C1",
        "effects": [
            "Deals 560% damage to the target.",
            "The target receives 1692 Burn damage over 3 turns. This effect spreads to nearby enemies.",
            "The caster regenerates 915 boosted health over 3 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "castle_stag_daemon",
        "name": "Daemon",
        "effects": [
            "Dispels buffs from the target.",
            "Blocks Talent Skill activation for the target.",
            "Deals 485% damage to the target.",
            "The target cannot cast any new status effects on enemies or allies for 3 turns. (This includes stacks. This only includes status effects cast with Special Skills.)"
        ]
    },
    {
        "heroId": "forsaken_demhalar",
        "name": "Demhalar",
        "effects": [
            "Deals 350% damage to the target and nearby enemies and inflicts 35 Insanity on them.",
            "The target and nearby enemies receive 654 Water damage over 3 turns. All allies absorb 50% of dealt Water damage as boosted health.",
            "Casting this Special Skill inflicts 40 Insanity to the caster."
        ]
    },
    {
        "heroId": "garrison_dima",
        "name": "Dima",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "The target and nearby enemies get -25% defense for 4 turns. The effect duration resets if the enemy is healed.",
            "Summons a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion recieves 456 Bleed damage over 3 turns. This effect spreads on nearby enemies."
        ]
    },
    {
        "heroId": "tales1_domiventus",
        "name": "Domiventus",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 380% damage to the target and nearby enemies.",
            "* The target and nearby enemies receive Corrosive Burn over 4 turns. The Corrosive Burn deals 201 Burn damage and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "2nd:",
            "* Deals 455% damage to the target and nearby enemies.",
            "* The target and nearby enemies receive Corrosive Burn over 4 turns. The Corrosive Burn deals 231 Burn damage and lowers the target's defense by -16% each turn. Deals extra damage against heroes with Minions or Mega Minions."
        ]
    },
    {
        "heroId": "tales1_domiventus_costume_supreme",
        "name": "Domiventus C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 360% damage to the target and nearby enemies.",
            "* The target and nearby enemies receive Corrosive Burn for 4 turns. The Corrosive Burn deals 240 Burn damage and lowers the target's defense by -10% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "2nd:",
            "* Deals 485% damage to the target and nearby enemies.",
            "* The target and nearby enemies receive Corrosive Burn for 4 turns. The Corrosive Burn deals 375 Burn damage and lowers the target's defense by -18% each turn. Deals extra damage against heroes with Minions or Mega Minions."
        ]
    },
    {
        "heroId": "elemental_doxan",
        "name": "Doxan",
        "effects": [
            "Deals 500% damage to the target and minor damage to all Nature enemies.",
            "The target and all Nature enemies receive 992 Burn damage over 4 turns."
        ]
    },
    {
        "heroId": "elemental_doxan_costume_hacker",
        "name": "Doxan C1",
        "effects": [
            "Deals 550% damage to the target and minor damage to all Nature enemies.",
            "The target and all Nature enemies receive 1504 Burn damage over 4 turns.",
            "The caster and all Fire allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "bard_dunnar_hart",
        "name": "Dunnar Hart",
        "effects": [
            "Deals 500% damage to all enemies.",
            "All enemies receive Corrosive Burn for 5 turns. The Corrosive Burn deals 322 Burn damage and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions and Mega Minion.",
            "The caster regenerate 1480 boosted health over 4 turns. Boosted health can exceed max HP.",
            "The caster gets +50% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "monster_hunter_ebba",
        "name": "Ebba",
        "effects": [
            "Deals 585% damage to the target.",
            "Deals an additional 260% damage to as many random enemies as there are Fiends owned by enemies. The damage is reduced on each consecutive hit.",
            "All hit targets cannot cast any new status effects on enemies or allies for 4 turns. (This includes stack. This only includes status effects cast with Special Skill.)",
            "All hit targets get -54% attack for 4 turns."
        ]
    },
    {
        "heroId": "gargoyle_el_duque",
        "name": "El Duque",
        "effects": [
            "Deals 355% damage to the target and minor damage to nearby enemies.",
            "Stack: (Max: 10): The target and nearby enemies get -9% defense."
        ]
    },
    {
        "heroId": "valentines_elba",
        "name": "Elba",
        "effects": [
            "Deals 325% damage to the target and nearby enemies.",
            "Caster and nearby allies recover 1000 health for 4 turns. If the effect is removed before the duration ends, recovers 1300 health instead.",
            "The caster and nearby allies counterattack with 125% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "nomad_female_lord",
        "name": "Elena",
        "effects": [
            "Deals 202% damage to all enemies.",
            "The caster and nearby allies counterattack with 125% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "nomad_female_lord_costume_flame",
        "name": "Elena C1",
        "effects": [
            "Deals 172% damage to all enemies.",
            "The caster and nearby allies counterattack with 155% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "nomad_female_lord_costume_wicked",
        "name": "Elena C2",
        "effects": [
            "Deals 242% damage to all enemies.",
            "The caster and nearby allies counterattack with 115% of the damage received for 5 turns. The counterattack damage increases +10% each turn, up to +155%."
        ]
    },
    {
        "heroId": "nomad_female_lord_costume_cute",
        "name": "Elena Toon",
        "effects": [
            "Deals 352% damage to all enemies.",
            "The caster and nearby allies counterattack with 120% of the damage received for 5 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_female_lord_costume_glass",
        "name": "Elena Glass",
        "effects": [
            "Deals 362% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster and nearby allies counterattack with 120% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "fire_god_eliane",
        "name": "Eliane",
        "effects": [
            "Deals 330% damage to all enemies.",
            "All enemies receive 640 Burn damage over 4 turns.",
            "Dispel buffs from all enemies.",
            "Elemental Link gives all Fire allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s4_elizabeth",
        "name": "Elizabeth",
        "effects": [
            "Deals 175% damage to all enemies.",
            "Summons a Spider Fiend for all enemies. The Fiend damages the enemy with 43% attack every turn.",
            "The Spider Fiend absorbs healing and disappears when it has absorbed health equal to 28% of the target's max health.",
            "The Spider Fiend gives -24% mana generation for its owner as long as the owner has Spider Fiends. This effect cannot be cleansed."
        ]
    },
    {
        "heroId": "s4_elizabeth_costume_bride",
        "name": "Elizabeth C1",
        "effects": [
            "Deals 165% damage to all enemies.",
            "Summons a Spider Fiend for all enemies. The Fiend damages its target with 41% attack every turn.",
            "The Spider Fiend absorbs healing. It disappears after absorbing a healing amount equal to 40% ot its target's max health.",
            "When summoned, the Spider Fiend gives -28% mana generation for its owner for as long as the owner has Spider Fiends. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "fleur_elyzabel",
        "name": "Elyzabel de Tuillieres",
        "effects": [
            "Deals 465% damage to the target and nearby enemies.",
            "All allies are immune to new effects that prevent the use of Special Skills for 4 turns.",
            "Summons a Sanguine Bat Minion for caster and nearby allies with 25% HP and 30% attack inherited from the caster.",
            "The target hit by the Sanguine Bat Minion is marked with Blood Lily. (A memento from the Fleur de Sang family. This effect can stack (max: 10). Each stack of the Blood Lily effect deals 10 damage to the target per turn. The Fleur de Sang characters on the opposing team gain the amount of damage dealt as health, divided equally between them. Each stack of the Blood Lily effect also increases the damage that members of the Fleur de Sang family deal to the target. The Blood Lily stacks can be avoided or removed with various effect that affect stacks. )"
        ]
    },
    {
        "heroId": "fox_ember",
        "name": "Ember",
        "effects": [
            "Deals 300% damage to all enemies.",
            "Summons a Firewall Minion for all allies with 35% HP inherited from the caster.",
            "Each time a Firewall Minion is attacked by normal attacks or Special Skills, the attacker receives Corrosive Burn for 3 turns. The Corrosive Burn deals 200 Burn damage and lowers the target's defense by -10% each turn. Deals extra damage against heroes with Minions or a Mega Minion."
        ]
    },
    {
        "heroId": "rodent_embertail",
        "name": "Embertail",
        "effects": [
            "Deals 390% damage to the target and nearby enemies.",
            "Wild: For 3 turns, the target and nearby enemies receive 204 or 408 Burn damage each turn. (Wild adds a chance each turn for this effect to be more powerful. This Wild effect has a 50% chance to deal +100% extra damage that turn. When extra damage is dealt, the effect also reduces enemies' max health and is stronger against boosted health. Wild effects bypass most effects that would normally prevent them from being applied. Wild effects can be applied in addition to other effects of the same type.)",
            "The caster and nearby allies get +35% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "mimic_emblem_red",
        "name": "Emblem Mimic Fire",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target receives 387 Poison damage over 3 turns. This effect spreads to nearby enemies.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "circus_emilio",
        "name": "Emilio",
        "effects": [
            "Casts one of the following special skills:",
            "If any enemy has the Burn Status Ailment:",
            "* All enemies receive 415 Burn damage over 5 turns.",
            "* All allies regenerate 549 HP over 3 turns.",
            "* All allies are immune to new status ailments for 3 turns.",
            "Otherwise:",
            "* All enemies receive 365 Burn damage over 5 turns.",
            "* All allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "circus_emilio_costume_frog",
        "name": "Emilio C1",
        "effects": [
            "Casts one of the following Special Skills:",
            "If any enemy has the Burn status ailment:",
            "* All enemies receive 715 Burn damage over 5 turns.",
            "* All allies regenerate 450 HP over 3 turns.",
            "* All allies are immune to new status ailments for 3 turns.",
            "Otherwise:",
            "* All enemies receive 620 Burn damage over 5 turns.",
            "* All allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "styx_erebus",
        "name": "Erebus",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Destroys all Minions from the target.",
            "* Deals 520% damage to the target.",
            "2x Mana Charge:",
            "* Destroys all Minions from the target.",
            "* Deals 610% damage to the target.",
            "* The target can't summon new Minions with Special Skill and receives 200 damage for each Minion they attempt to summon for 3 turns.",
            "3x Mana Charge:",
            "* Destroys all Minions from the target.",
            "* Deals 675% damage to the target.",
            "* The target can't summon new Minions with Special Skill and receives 200 damage for each Minion they attempt to summon for 4 turns."
        ]
    },
    {
        "heroId": "owl_eron",
        "name": "Eron",
        "effects": [
            "Attacks the target with Moonrise Strike, dealing up to 2180 damage. Deals 40% more damage if the target is Holy.",
            "The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns. When this effect is triggered, it shifts to the hit ally and duration is refreshed.",
            "All enemies get -35% defense for 4 turns."
        ]
    },
    {
        "heroId": "mimic_training_hero_red",
        "name": "Experience Mimic",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, the caster recovers +50% health and gains 33% mana.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "tales2_fimafeng",
        "name": "Fimafeng",
        "effects": [
            "Safely cleanses all status ailments from the caster.",
            "Attacks the target with Frostfall Strike, dealing up to 3000 damage. Deals 40% more if the target is of the Fire element. This Special Skill never misses its targets.",
            "Stack (Max: 10): All allies get +5% mana generation.(Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Stack (Max: 10): All allies get +20% defense."
        ]
    },
    {
        "heroId": "garrison_flamehide",
        "name": "Flamehide",
        "effects": [
            "Deals 375% damage to the target.",
            "Summons a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion receives 468 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "beachparty_flip",
        "name": "Flip",
        "effects": [
            "Recovers 45% health for all allies.",
            "All allies bypass defensive buffs with their attacks for 4 turns. Defensive buffs include counterattacks.",
            "All allies get +50% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "beachparty_flip_costume_donut",
        "name": "Flip C1",
        "effects": [
            "Recovers 50% health for all allies.",
            "All allies bypass defensive buffs with their attacks for 4 turns. (Defensive buffs include counterattacks.)",
            "All allies get +55% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "owl_fulvia",
        "name": "Fulvia",
        "effects": [
            "Attacks the target and nearby enemies with Moonrise Strike, dealing up to 1440 damage. Deals 40% more damage if the target is Holy. This Special Skill never misses its targets.",
            "For 3 turns, reduces the mana of the target and nearby enemies by -15% at the end of turn.",
            "The target and nearby enemies get -50% decrease for any healing received for 3 turns."
        ]
    },
    {
        "heroId": "moth_gardered",
        "name": "Gardered",
        "effects": [
            "Deals 435% damage to the target.",
            "The target receives 628 Toxin damage over 4 turns. Damage is increased against targets with boosted health, Minions or a Mega Minion. The Toxin damage is increased by +100% against targets with boosted health. The Toxin damage is increased by +33% per Minion or Mega Minion owned by target. Maximum increased damage is +199%.)",
            "Deals 435% damage to the enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled.",
            "The enemies on the edges of the enemy formation fall into Deep Sleep and receives +80% increased damage while in Deep Sleep. (The character in Deep Sleep cannot gain mana or attack. The character in Deep Sleep is woken once it takes 750 damage. This effect is uncleasable.)"
        ]
    },
    {
        "heroId": "ninja_garnet",
        "name": "Garnet",
        "effects": [
            "1x Mana Charge",
            "* Boosts health of all allies by 230. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 2 turns.",
            "2x Mana Charge",
            "* Boosts health of all allies by 450. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 3 turns.",
            "3x Mana Charge",
            "* Boosts health of all allies by 750. Boosted health can exceed max HP.",
            "* All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "s3_gefjon",
        "name": "Gefjon",
        "effects": [
            "Steals minions from the target.",
            "Deals 500% damage to the target."
        ]
    },
    {
        "heroId": "s3_gefjon_costume_wilderness",
        "name": "Gefjon C1",
        "effects": [
            "Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "Deals 335% damage to the target and nearby enemies."
        ]
    },
    {
        "heroId": "tales1_gestalt",
        "name": "Gestalt",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 300% damage to 3 random enemies.",
            "* Hit enemies became afflicted with Underwater Magma Cube.",
            "* While afflicted with Magma Cube the owner get -34% defense.",
            "* Magma Cube explode in 3 turns doing 300 damage to their owner.",
            "* If Magma Cube is cleansed, the owner get -34% mana generation for 3 turns.",
            "2nd:",
            "* Deals 350% damage to 5 random enemies.",
            "* Hit enemies became afflicted with Underwater Magma Cube.",
            "* While afflicted with Magma Cube the owner get -44% defense.",
            "* Magma Cube explode in 3 turns doing 450 damage to their owner.",
            "* If Magma Cube is cleansed, the owner get -54% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "tales1_gestalt_costume_pearls",
        "name": "Gestalt C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 275% damage to 3 random enemies.",
            "* Hit enemies became afflicted with Underwater Magma Cube.",
            "* While afflicted with Magma Cube the owner get -34% defense",
            "* Magma Cube explode in 3 turns doing 300 damage to their owner.",
            "* If Magma Cube is cleansed, the owner get -34% mana generation for 3 turns. (If the Magma Cube is replaced by a new Magma Cube, it explodes. This can happen up to 2 times per cast.)",
            "2nd:",
            "* Deals 375% damage to 5 random enemies.",
            "* Hit enemies became afflicted with Underwater Magma Cube.",
            "* While afflicted with Magma Cube the owner get -44% defense.",
            "* Magma Cube explode in 4 turns doing 450 damage to their owner.",
            "* If Magma Cube is cleansed, the owner get -54% mana generation for 3 turns. (If the Magma Cube is replaced by a new Magma Cube, it explodes. This can happen up to 2 times per cast.)"
        ]
    },
    {
        "heroId": "slime_gooze",
        "name": "Gooze",
        "effects": [
            "Deals 350% damage to all enemies.",
            "All enemies become Provoked for 4 turns. The Provoked character deals 1% damage to a random opponent at the end of the turn. This effect can't be dispelled.",
            "All allies get Sticky Surface for 4 turns. This effect can't be dispelled.",
            "Sticky Surface: Steals 1 random dispellable buff or Growth effect from an attacking enemy. (Stolen dispellable buff or Growth effect is chosen by random. Sticky Surface is activated when any damage is received from an enemy. Each character with Sticky Surface can only steal one status effect buff or Growth effect per turn from normal attacks.)",
            "All allies get +55% defense for 4 turns."
        ]
    },
    {
        "heroId": "fire_god_doom",
        "name": "Gravemaker",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 492 burn damage over 2 turns.",
            "Deals extra damage against Nature.",
            "Element Link gives all Fire allies +5% attack and +5% defense for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "fire_god_doom_costume_avenger",
        "name": "Gravemaker C1",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All enemies receive 542 Burn damage over 2 turns.",
            "Element Link give all Fire allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fire_god_nadnog",
        "name": "Grazul",
        "effects": [
            "Recovers 23% health for all allies.",
            "All allies are immune to new status ailments for 2 turns.",
            "Element Link gives +4% mana regeneration for all Fire allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "guardian_gorilla_chieftain",
        "name": "Guardian Kong",
        "effects": [
            "Deals 250% damage to all enemies.",
            "All allies get +94% defense against Ice for 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "guardian_gorilla_chieftain_costume_conqueror",
        "name": "Guardian Kong C1",
        "effects": [
            "Deals 300% damage to all enemies.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies' Ice Special Skills for 4 turns. Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.",
            "Dispells buffs from all enemies."
        ]
    },
    {
        "heroId": "gargoyle_guffa",
        "name": "Guffa",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster gets +40% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "All allies except the caster receive Softskin. (The next time they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled.)",
            "All allies recover 1400 health after 4 turns or instantly if the skill is cast again before the duration ends. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "astral_hammerclang",
        "name": "Hammerclang",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 400% damage to the target and minor damage to all other enemies.",
            "All damage all enemies receive is increased by 30% for 3 turns.",
            "All enemies get -30% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_hathor",
        "name": "Hathor",
        "effects": [
            "Boosts health of all allies by 480. Boosted Heath can exceed max HP.",
            "All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "s5_hathor_costume_starlit",
        "name": "Hathor C1",
        "effects": [
            "All allies renerate 640 Boosted health over 4 turns. Boosted Heath can exceed max HP.",
            "All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "gargoyle_hohenwerf",
        "name": "Hohenwerf",
        "effects": [
            "Deals 450% damage to the target.",
            "Summons a Gargoyle Fiend for the target. The Gargoyle Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "When summoned, the Gargoyle Fiend forces its owner to cast Mindless Attack on a random ally when mana is full. The effect lasts as long as the target has Gargoyle Fiends. This effect cannot be dispelled.",
            "The Gargyle Fiend explodes after 4 turns, dealing 150 damage to its target."
        ]
    },
    {
        "heroId": "lunar_new_year_hongyunxing",
        "name": "Hongyunxing",
        "effects": [
            "All allies regenerate 1020 boosted health over 3 turns. Boosted health can exceed max HP.",
            "All allies receive a small amount of mana over 3 turns.",
            "Cleanses status ailments from all allies at the end of each turn for 3 turns."
        ]
    },
    {
        "heroId": "construct_hornfel",
        "name": "Hornfel",
        "effects": [
            "Deals 480% damage to the target and minor damage to nearby enemies.",
            "Knocks down enemies. This has a different effect based on the team of this character:",
            "Attack Team:",
            "* The target and nearby enemies have thier normal attack delayed by 2 turns.",
            "Defense Team:",
            "* The target and nearby enemies don't contribute to Troop damage for 2 turns.",
            "The caster and nearby allies get +50% attack for 3 turns."
        ]
    },
    {
        "heroId": "styx_hypnos",
        "name": "Hypnos",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 220% damage to all enemies.",
            "* All enemies are immune to new status effects buffs for 2 turns.",
            "2x Mana Charge:",
            "* Dispels buffs from all enemies.",
            "* Deals 320% damage to all enemies.",
            "* All enemies are immune to new status effects buffs for 3 turns.",
            "3x Mana Charge:",
            "* Dispels buffs from all enemies.",
            "* Deals 385% damage to all enemies.",
            "* All enemies are immune to new status effects buffs for 4 turns."
        ]
    },
    {
        "heroId": "garrison_iarlaith",
        "name": "Iarlaith",
        "effects": [
            "Deals 600% damage to the target.",
            "For 3 turns, the target receives 100% of all damage dealt to their allies.",
            "Stack (Max: 10): All damage all enemies receive is increased by +8%."
        ]
    },
    {
        "heroId": "elemental_ignazio",
        "name": "Ignazio",
        "effects": [
            "Recovers 25% health for all allies.",
            "Recovers additional 3% health per each Fire shield on the board, up to 55% health in total.",
            "All allies get +50% attack for 4 turns.",
            "Cleanses status ailments from all allies"
        ]
    },
    {
        "heroId": "elemental_ignazio_costume_medic",
        "name": "Ignazio C1",
        "effects": [
            "Recovers 28% health for all allies.",
            "Recovers additional 4% health per each Fire shield on the board, up to 60%.",
            "All allies get 55% attack for 4 turns. This status effect is undispellable and lasts 2 turns longer on Fire allies.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "kalevala_ilmarinen",
        "name": "Ilmarinen",
        "effects": [
            "Reduces the mana of all Ice enemies by 40%. Reduces the mana of all other enemies by 20%.",
            "All enemies become Soul Connected for 4 turns. Soul Connected enemies share received damage. This status effect is undispellable and lasts 2 turns longer on Ice characters.",
            "All enemies get -56% defense for 4 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_ilmarinen_costume_gold",
        "name": "Ilmarinen C1",
        "effects": [
            "Reduces the mana of all Ice enemies by 50%. Reduces the mana of all other enemies by 30%.",
            "All enemies become Soul Connected for 4 turns. Soul Connected enemis share received damage. This status effect is undispellable and lasts 2 turns longer on Ice characters.",
            "All enemies get -60% defense for 4 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "garrison_iocantha",
        "name": "Iocantha",
        "effects": [
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Deals 320% damage to the target and 2 random enemies.",
            "Each hit reduces the duration of all status effect buffs on the hit enemy by one turn. (The duration reduction affects both dispellable and undispellabe status effect buffs. If the duration on any buff is reduced to zero, the effect is considered as having expired naturally.)"
        ]
    },
    {
        "heroId": "faun_isidore",
        "name": "Isidore",
        "effects": [
            "Enhanced Defense Ailment: All enemies get -64% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill 3 times.",
            "After the Enhanced Defense Ailment ends or is removed or replaced, the enemy gets -80% decrease of any healing received for 6 turns.",
            "Deals 350% damage to the target and 9 random enemies. The damage is reduced on each consecutive hit."
        ]
    },
    {
        "heroId": "villain_isrod",
        "name": "Isrod",
        "effects": [
            "Deals 260% damage to the target and nearby enemies.",
            "The caster and nearby allies counterattack with 110% of received damage for 3 turns.",
            "The caster and nearby allies regenerate a moderate amount of mana for each counterattack for 3 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "fire_god_jean_francois",
        "name": "Jean-Francois",
        "effects": [
            "All enemies receive 630 Burn damage over 3 turns.",
            "All allies get +94% defense against Ice for 4 turns.",
            "All allies get Defense Status Ailment Protection for 5 turns. New status ailments affecting defense will be replaced by +42% defense for 4 turns.",
            "Element Link gives all Fire allies +10% critical chance for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "magic_carpet_jwala",
        "name": "Jwala",
        "effects": [
            "Deals 350% damage to all enemies.",
            "The duration of status ailments is reset for all enemies.",
            "All enemies receive Corrosive Burn for 4 turn. The Corrosive Burn deals 443 Burn damage and lowers the target's defense by -14% each turn. Deals extra damage against heroes with Minions or a Mega Minion."
        ]
    },
    {
        "heroId": "mahayoddha_jyoti",
        "name": "Jyoti",
        "effects": [
            "Recovers 37% health for all allies.",
            "Growth Boon: Recovers 2x extra for each point of modified defense. (Up to a maximum 800 additional  healing. Status effects affecting healing received do affect the healing scaling.)",
            "All allies are immune to new status ailments for 4 turns, and recovers 205 health for each attempted status ailment.",
            "Alters the power of all Fire shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana."
        ]
    },
    {
        "heroId": "tribal_chief",
        "name": "Khagan",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "The caster and nearby allies get +24% mana generation for 5 turns.",
            "The caster and nearby allies get +63% defense for 5 turns."
        ]
    },
    {
        "heroId": "tribal_chief_costume_conqueror",
        "name": "Khagan C1",
        "effects": [
            "Deals 514% damage to the target.",
            "All allies get +12% mana generation for 5 turns.",
            "All allies get +46% defense for 5 turns."
        ]
    },
    {
        "heroId": "tribal_chief_costume_leopard",
        "name": "Khagan C2",
        "effects": [
            "Deals 285% damage to all enemies.",
            "All allies receive a moderate amount of mana over 5 turns.",
            "All allies get +40% defense for 5 turns."
        ]
    },
    {
        "heroId": "tribal_chief_costume_cute",
        "name": "Khagan Toon",
        "effects": [
            "Deals 530% damage to the target and nearby enemies.",
            "The caster and nearby allies get +22% mana generation for 5 turns. (Affects only mana generated from matching tiles or mana gained by defence team at the end of turn.)",
            "The caster and nearby allies get +61% defense for 5 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "tribal_chief_costume_glass",
        "name": "Khagan Glass",
        "effects": [
            "Deals 540% damage to the target and nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The caster and nearby allies get +23% mana generation for 5 turns.",
            "The caster and nearby allies get +62% defense for 5 turns."
        ]
    },
    {
        "heroId": "s5_khafre",
        "name": "Khufu",
        "effects": [
            "Deals 450% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "The target gets -41% defense against Fire, and further -4% decrease every time they are hit during 4 turns."
        ]
    },
    {
        "heroId": "s5_khafre_costume_aquatic",
        "name": "Khufu C1",
        "effects": [
            "Deals 500% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "The target gets -34% defense against Fire, and a further -5% decrease every time they are hit during 5 turns."
        ]
    },
    {
        "heroId": "s4_kravekrush",
        "name": "Kravekrush",
        "effects": [
            "All enemies can't revive their allies or themselves for 5 turns.",
            "All enemies can't receive new status effects that would resurrect them for 5 turns.",
            "Deals 430% damage to the target and minor damage to the nearby enemies."
        ]
    },
    {
        "heroId": "s4_kravekrush_costume_grillmaster",
        "name": "Kravekrush C1",
        "effects": [
            "All enemies can't revive their allies or themselves for 4 turns.",
            "All enemies can't receive new status effects that would resurrect them for 4 turns.",
            "Deals 460% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "s3_loki_female",
        "name": "Lady Loki",
        "effects": [
            "Lifts all cleansable status ailments  from all allies and randomly distributes them on enemies.",
            "Deals 170% damage to all enemies",
            "Deals additional 8% damage per transferred status ailment, up to 298% damage in total."
        ]
    },
    {
        "heroId": "s3_loki_female_costume_mother",
        "name": "Lady Loki C1",
        "effects": [
            "Lifts all cleansable status ailments from all allies and randomly distributes them on enemies.",
            "Deals 135% damage to all enemies.",
            "Deals additional 15% damage per allocated status effect, up to 375% damage in total."
        ]
    },
    {
        "heroId": "tales1_lasalle",
        "name": "Lasalle",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 400% damage to target.",
            "* Summon a Sea Cavalry Fiend for the target. The Fiend damages the enemy with 32% attack every turn.",
            "* The Sea Cavalry Fiend absorbs healing and disappears when it has absorbed health equal to 20% of its owner's max health.",
            "* The Sea Cavalry Fiend generates a clone of itself to nearby enemies after every turn. Clone Fiends absorb the same amount of healing and deal the same amount of damage as the original fiend.",
            "2nd:",
            "* Deals 450% damage to target.",
            "* Summon a Sea Cavalry Fiend for the target. The Fiend damages the enemy with 32% attack every turn.",
            "* The Sea Cavalry Fiend absorbs healing and disappears when it has absorbed health equal to 20% of its owner's max health.",
            "* The Sea Cavalry Fiend generates a clone of itself to nearby enemies after every turn. Clone Fiends absorb the same amount of healing and deal the same amount of damage as the original fiend."
        ]
    },
    {
        "heroId": "tales1_lasalle_costume_jockey",
        "name": "Lasalle C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Deals 375% damage to target.",
            "* Summon a Sea Cavalry Fiend for the target. The Fiend damages the enemy with 27% attack every turn.",
            "* The Sea Cavalry Fiend absorbs healing and disappears when it has absorbed health equal to 15% of its owner's max health.",
            "* The Sea Cavalry Fiend generates a clone of itself to nearby enemies after every turn. Clone Fiends absorb the same amount of healing and deal the same amount of damage as the original fiend.",
            "2nd:",
            "* Deals 475% damage to target.",
            "* Summon a Sea Cavalry Fiend for the target. The Fiend damages the enemy with 42% attack every turn.",
            "* The Sea Cavalry Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "* The Sea Cavalry Fiend generates a clone of itself to nearby enemies after every turn. Clone Fiends absorb the same amount of healing and deal the same amount of damage as the original fiend."
        ]
    },
    {
        "heroId": "castle_raven_lewena",
        "name": "Lewena",
        "effects": [
            "Blocks Talent Skill activation for all enemies for 6 turns.",
            "Deals 260% damage to all enemies."
        ]
    },
    {
        "heroId": "outlaw_li_kui",
        "name": "Li Kui",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 300% damage to the target and 4 random enemies.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster reduces all received damage by -50% for 4 turns."
        ]
    },
    {
        "heroId": "owl_lodius",
        "name": "Lodius",
        "effects": [
            "Attacks the target with Moonrise Strike, dealing up to 2200 damage. Deals 40% more damage if the target is Holy. This Special Skill never misses its targets.",
            "If the target is defeated by the attack, then nearby enemies are unable to gain any mana for 3 turns.",
            "All allies counterattack with 60% of the damage received for 3 turns."
        ]
    },
    {
        "heroId": "outlaw_lu_zhishen",
        "name": "Lu Zhishen",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 340% damage to all enemies.",
            "The caster get additional +40% damage power for the next Special kill they cast. Additional power increases +30% each turn, up to a maximum of +130% in total.",
            "All allies get +40% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "goblin_madhammer",
        "name": "Madhammer",
        "effects": [
            "Deals 500% damage to the target.",
            "Has 50% chance to deal 450% damage to a random different enemy. (This effect targets the same enemy as the first hit target if there are no other valid targets.)",
            "Summons a Black Boar Mega Minion with 62% HP and 230% attack inherited from the caster.",
            "The target hit by Black Boar Mega Minion can't get their status ailments cleansed or rellocated from Special Skills for 4 turns. This effect also prevents cleansing and rellocating of itself."
        ]
    },
    {
        "heroId": "ninja_malum",
        "name": "Malum",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Reduces max health of the target and nearby enemies by 500. The effect is stronger against targets with boosted health. (Max health can't be lower than 30% of the original max health. Any boosted health is reduced by an additional 500).",
            "- Deals 250% damage to the target and nearby enemies.",
            "x2 Mana Charge:",
            "- Reduces max health of the target and nearby enemies by 650. The effect is stronger against targets with boosted health. (Max health can't be lower than 30% of the original max health. Any boosted health is reduced by an additional 650.)",
            "- Deals 375% damage to the target and nearby enemies.",
            "- The attack bypasses defensive buffs. (This includes counterattack.)",
            "x3 Mana Charge:",
            "- Reduces max health of the target and nearby enemies by 800. The effect is stronger against targets with boosted health. (Max health can't be lower than 30% of the original max health. Any boosted health is reduced by an additional 800.)",
            "- Deals 500% damage to the target and nearby enemies.",
            "- The attack bypasses defensive buffs. (This includes counterattack.)",
            "- The target and nearby enemies resist healing and receive 450 damage per each resisted healing for 6 turns."
        ]
    },
    {
        "heroId": "fire_god_maple",
        "name": "Maple",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 300% damage to 3 random enemies.",
            "All allies get +40% chance to dodge Special Skills that deal damage for 3 turns.",
            "Elemental Link gives all Fire allies +20% attack for 5 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "nomad_female_captain",
        "name": "Marjana",
        "effects": [
            "Deals 458% damage to the target.",
            "The target receives 300 damage over 6 turns."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_pirate",
        "name": "Marjana C1",
        "effects": [
            "Deals 358% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -54% defense against Fire for 3 turns.",
            "All Ice enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_thief",
        "name": "Marjana C2",
        "effects": [
            "Deals 300% damage to target and nearby enemies.",
            "The target and nearby enemies get -34% defense for 3 turns. Against Ice characters, this status effect becomes uncleansable, and lasts 2 turns longer.",
            "The target and nearby enemies receive 321 Burn damage over 3 turns. Against Ice characters, this status effect becomes uncleansable, and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_cute",
        "name": "Marjana Toon",
        "effects": [
            "Deals 538% damage to the target.",
            "The target receives 516 damage over 3 turns.",
            "Deals extra damage against Nature."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_glass",
        "name": "Marjana Glass",
        "effects": [
            "Deals 548% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target receives 648 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_stylish",
        "name": "Marjana Stylish",
        "effects": [
            "Deals 558% damage to the target.",
            "If the target has less than 50% health remaining, deals 658% damage instead.",
            "The target receives 729 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "s2_noble_lady",
        "name": "Mitsuko",
        "effects": [
            "Deals 245% damage to the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 20%.",
            "All allies reflect all status effects and 115% damage back to the attacker  and block other negative effects from enemies' Ice Special Skills for 4 turns. Status effects cast by characters, Minions and Fiends on the same side cannot be reflected."
        ]
    },
    {
        "heroId": "s2_noble_lady_costume_warrior",
        "name": "Mitsuko C1",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies get -34% mana generation.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies' Ice Special Skills for 4 turns. Status effects cast by characters, Minions and Fiends on the same side cannot be reflected."
        ]
    },
    {
        "heroId": "magic_nadezhda",
        "name": "Nadezhda",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* The target and nearby enemies receive 156 Burn damage over 2 turns.",
            "* If the caster dies during the next 2 turns they are resurrected in the beginning of their next turn with 32% health. All status effects and stacks are removed when the caster dies.",
            "2x Mana Charge:",
            "* Each defeated ally has a 50% chance to get revived with 40% HP.",
            "* All allies regenerate 714 HP over 3 turns.",
            "* All allies reduce all received damage by -50% for 3 turns."
        ]
    },
    {
        "heroId": "magic_nadezhda_costume_postmaster",
        "name": "Nadezhda C1",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% mana:",
            "1x Mana Charge:",
            "* All enemies receive 350 Burn damage over 2 turns. The caster absorbs 10% of dealt Burn damage as health.",
            "* If the caster is defeated during the next 2 turns, they are resurrected in the beginning of their next turn with 40% health. All status effects and stack are removed when the caster is defeated.",
            "2x Mana Charge:",
            "* Each defeated ally has a 55% chance to get revived with 44% HP.",
            "* All allies regenerate 795 boosted health over 3 turns. Boosted health can exceed max HP.",
            "* All allies reduce all received damage by -60% for 3 turns."
        ]
    },
    {
        "heroId": "magic_carpet_naeem",
        "name": "Naeem",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The caster and nearby allies counterattack with 145% of the damage received for 4 turns.",
            "Caster and nearby allies get Sand Touch for 4 turns. (Sand Touch: Each time the owner of this status effect counterattacks an enemy the attacker receives 452 Sand damage over 4 turns.)"
        ]
    },
    {
        "heroId": "fire_god_natalya",
        "name": "Natalya",
        "effects": [
            "The target receives 1016 Burn damage over 4 turns. This effect can't be cleansed.",
            "The target gets -54% mana generation for 4 turns. This effect can't be cleansed.",
            "Deals extra damage against Nature.",
            "Elemental Link gives +10% mana generation to all Fire allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fire_god_natalya_costume_seamstress",
        "name": "Natalya C1",
        "effects": [
            "The target receives 1504 Burn damage over 4 turns. This effect can't be cleansed.",
            "The target gets -50% mana generation for 4 turns. This effect can't be cleansed.",
            "Deals extra damage against Nature.",
            "Elemental Link gives +10% mana generation to all Fire allies for 4 turns. This effect can't be displelled."
        ]
    },
    {
        "heroId": "fire_god_neema",
        "name": "Neema",
        "effects": [
            "Deals 280% damage to all enemies.",
            "Summons a Fire Tiger Fiend for all enemies. The Fiend damages its target with 45% attack every turn.",
            "The Fiend absorbs healing. It disappears after absorbing a healing amount equal to 45% of its target's max health.",
            "When summoned, the Fire Tiger Fiend's target cannot cast any new Taunt status effects for as long as the target has Fire Tiger Fiends. This effect can't be cleansed.",
            "Elemental Link gives all Fire allies +10% additional Special Skill damage for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "fox_nibbles",
        "name": "Nibbles",
        "effects": [
            "Recovers 20% health for all allies.",
            "Steals the latest dispellable buffs for all enemies and randomly distributes them on allies.",
            "All allies get lasting 310 health regeneration per turn. (This effect lasts until it is cleansed, replaced or removed.)"
        ]
    },
    {
        "heroId": "elemental_niki",
        "name": "Niki",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 430% damage to all enemies.",
            "Heal all allies who have less than 60% HP left. Fire allies are healed to 75% health, and other allies to 60% health. (Ignores heal steal, healing modifiers and Fiends.)"
        ]
    },
    {
        "heroId": "ninja_nomad",
        "name": "Nomad",
        "effects": [
            "1x Mana Charge",
            "* Deals 400% damage to the target.",
            "* Deals 600% damage if the target has less than 50% health remaining.",
            "* If the target is defeated by the attack, all allies get +20% mana generation for 2 turns.",
            "2x Mana Charge",
            "* Deals 425% damage to the target and nearby enemies.",
            "* Deals 638% damage to enemies with less than 50% health remaining.",
            "* If the target is defeated by the attack, all allies get +30% mana generation for 3 turns.",
            "3x Mana Charge",
            "* Deals 450% damage to all enemies.",
            "* Deals 675% damage to enemies with less than 50% health remaining.",
            "* If the target is defeated by the attack, all allies get +40% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "fire_god_noor",
        "name": "Noor",
        "effects": [
            "Recovers 15% health for all allies.",
            "Summons a Sparrow Minion for each ally. The Sparrow Minion inherits 30% HP and 30% attack from the caster",
            "Before Sparrow Minion hits target, it destroys all Minions from the target.",
            "Element Link gives all Fire allies +30% defense against Special Skills for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "champions_norman",
        "name": "Norman",
        "effects": [
            "This Special Skill ignores Dodge effects.",
            "All allies get 100% chance to bypass defensive buffs with their attacks for 4 turns. (Defensive buffs include counterattacks.)",
            "Deals 320% damage to all enemies."
        ]
    },
    {
        "heroId": "s2_oceanus",
        "name": "Oceanus",
        "effects": [
            "Deals 220% damage to all enemies.",
            "All allies get +120% normal attack for 4 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +170% increased power while this effect is active.",
            "All allies get +46% defense for 4 turns."
        ]
    },
    {
        "heroId": "s2_oceanus_costume_volcano",
        "name": "Oceanus C1",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All allies get +125% normal attack for 4 turns. This effect can be active in addition to effects that alter attack in general. Normal attacks can have a total maximum of +180% increased power while this effect is active.",
            "All allies get +50% defense for 4 turns."
        ]
    },
    {
        "heroId": "s4_octros",
        "name": "Octros",
        "effects": [
            "Deals 180% damage to all enemies.",
            "Deals 20% additional damage per each Fire shield on the board, up to 340% damage in total.",
            "All enemies get -24% attack for 3 turns."
        ]
    },
    {
        "heroId": "s4_octros_costume_suitor",
        "name": "Octros C1",
        "effects": [
            "Deals 160% damage to all enemies.",
            "Deals additional 35% damage per each Fire shield on the board, up to 440% damage in total.",
            "All enemies get -24% attack for 3 turns."
        ]
    },
    {
        "heroId": "shadow_omen",
        "name": "Omen",
        "effects": [
            "Deals 500% damage to the target.",
            "Summons an Ominous Tentacle Fiend for the target.",
            "The Ominous Tentacle Fiend absorbs healing and disappears when it has absorbed health equal to 15% of its owner's max health.",
            "The Ominous Tentacle Fiend generates clone of itself to nearby enemies after every turn. (Cloned Fiends absorb the same amount of healing and deal the same amount of damage as the original fiend)",
            "The Ominous Tentacle inflicts 5 Insanity on the owner on every turn.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "monster_hunter_otis",
        "name": "Otis",
        "effects": [
            "Deals 370% damage to all enemies.",
            "All enemies receive 575 Bleed damage over 4 turns, starting low, and increasing with every turn.",
            "All enemies get -70% decrease for any healing received for 4 turns. The healing received decreases by -10% each turn, up to -100%."
        ]
    },
    {
        "heroId": "christmas_ottilia",
        "name": "Ottilia",
        "effects": [
            "Deals 440% damage to the target.",
            "Copies all dispellable buffs from the target to the caster.",
            "The caster recovers 10% health per copied buffs, up to 50% health in total.",
            "Summons an Elf Minion with 10% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "beauty_beast_pendulus_clonk",
        "name": "Pendulus Clonk",
        "effects": [
            "If the caster has 35 or more Humility:",
            "Deals 750% damage to the target.",
            "If the target is defeated by the attack, the caster gains +50% mana. (After a character receives 5 direct mana additions from Special Skills during a single turn, all subsequent direct mana additions done by Special Skills will have a reduced power on that character.)",
            "For the next 3 turns, this character deals 600% damage to a random enemy after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "The caster recovers 1000 health after 3 turns. If the effect is removed or replaced before the duration ends, recovers 1400 health instead.",
            "Otherwise:",
            "Deals 600% damage to the target.",
            "For the next 3 turns, this character deals 500% damage to a random enemy after an enemy casts their Special Skill. (Each enemy can trigger this effect once per turn.)",
            "The caster recovers 800 health after 3 turns. If the effect is removed or replaced before the duration ends, recovers 1200 health instead."
        ]
    },
    {
        "heroId": "goblin_pepperflame",
        "name": "Pepperflame",
        "effects": [
            "Deals 470% damage to the target and minor damage to nearby enemies.",
            "Growth: The caster and nearby allies get 250 attack.",
            "The target and nearby enemies get -35% defense for 3 turns. If the effect is removed before the duration ends, the target with effect suffers 577 damage."
        ]
    },
    {
        "heroId": "bard_phenexa",
        "name": "Phenexa",
        "effects": [
            "Recovers 42% health for all allies.",
            "The duration of buffs is reset for all allies.",
            "All allies get +30% critical chance for 4 turns.",
            "All allies get +50% attack for 4 turns."
        ]
    },
    {
        "heroId": "astral_dwarf_pluth",
        "name": "Pluth",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 215% damage to all enemies.",
            "Increases the duration of all enemies' active status ailments by 1 turn.",
            "All enemies get -20% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "fables_puss_in_boots",
        "name": "Puss in Boots",
        "effects": [
            "All Minion Summoner allies summon a Minion for themselves",
            "Summons 3 Mouse Minions with 10% HP and 30% attack inherited from the caster. The Minions have -32% accuracy",
            "All allies regenerate 548 HP over 4 turns.",
            "All allies get +30% attack for 4 turns."
        ]
    },
    {
        "heroId": "fables_puss_in_boots_costume_highwaycat",
        "name": "Puss in Boots C1",
        "effects": [
            "All Minion Summoner allies summon a Minion for themselves.",
            "Summons 3 Mouse Minions with 20% HP and 20% attack inherited from the caster. The Minions have -16% accuracy.",
            "All allies regenerate 324 HP over 4 turns.",
            "All allies get +50% attack for 4 turns."
        ]
    },
    {
        "heroId": "wonderland_queen",
        "name": "Queen of Hearts",
        "effects": [
            "Deals 240% damage to the target and nearby enemies.",
            "Summons a Playing Card Minion with 16% HP and 30% attack inherited from the caster.",
            "When summoned, the Playing Card Minion gives Taunt for its owner as long as the owner has Playing Card Minions. This effect can't be dispelled.",
            "The caster gets 74% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "wonderland_queen_costume_benefactor",
        "name": "Queen of Hearts C1",
        "effects": [
            "Deals 200% damage to the target and nearby enemies.",
            "Summons a Playing Card Minion with 25% HP and 40% attack inherited from the caster.",
            "When summoned, the Playing Card Minion gives Taunt for its owner as long as the owner has Playing Card minions. This effect can't be dispelled.",
            "The caster gets +74% defense against Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "wild_cat_rajesh",
        "name": "Rajesh",
        "effects": [
            "Cleanses all status ailments from all allies, and increases all allies' mana by 10% for each cleansed ailment.",
            "All allies bypass defensive buffs with their attacks for 4 turns. If any defensive buffs are bypassed, the attacking ally's mana is increased by 15%. (Defensive buffs include counterattacks.)",
            "All allies resist new negative mana effects for 4 turns, and their mana is increased by 20% for each resisted effect.",
            "Stack (Max: 10): All allies get +35% attack."
        ]
    },
    {
        "heroId": "shadow_rashan",
        "name": "Rashan",
        "effects": [
            "Deals 330% damage to the enemies on the edges of the enemy formation and inflicts 25 Insanity on them. If only one enemy alive, the damage and Insanity is doubled.",
            "The enemies on the edges of the enemy formation resist healing and receive 250 damage per each resisted healing for 3 turns.",
            "Casting this Special Skill inflicts 40 Insanity on the caster."
        ]
    },
    {
        "heroId": "magic_ray",
        "name": "Ray",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies receive 423 Burn damage over 3 turns.",
            "* All enemies get -34% defense against Fire for 3 turns.",
            "* Dispels buffs from all enemies.",
            "2x Mana Charge:",
            "* All allies regenerate 1190 HP over 5 turns.",
            "* All allies get +50% attack against Nature for 5 turns.",
            "* Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "magic_ray_costume_spiky",
        "name": "Ray C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All enemies received 645 Burn damage over 3 turns. The caster absorbs 10% of dealt Burn damage as health.",
            "* All enemies get -36% defense against Fire for 3 turns.",
            "* Dispels buffs from all enemies.",
            "2x Mana Charge:",
            "* All allies regenerate 1300 boosted health over 5 turns. Boosted health can exceed max HP.",
            "* All allies get +60% attack against Nature for 5 turns.",
            "* Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "fables_red_hood",
        "name": "Red Hood",
        "effects": [
            "Deals 215% damage to all enemies.",
            "Summons a Fox Minion for each ally with 25% HP. The minion recovers 10% health for its owner at the end of each turn. The minion protects its owner from mana reduction."
        ]
    },
    {
        "heroId": "tales2_regin",
        "name": "Regin",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Attacks the target and nearby enemies with Firestorm Strike, dealing up to 2000 damage. Deals 40% more damage if the target is of the Nature element. This Special Skill never misses its targets.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "tales2_regin_costume_omen",
        "name": "Regin C1",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Attacks the target and nearby enemies with Firestorm Strike, dealing up to 2220 damage. Deals 40% more damage if the target is of the Nature element. This Special Skill never misses its targets.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns."
        ]
    },
    {
        "heroId": "fire_god_reuben",
        "name": "Reuben",
        "effects": [
            "Deals 340% damage to the target and nearby enemies.",
            "All allies get -80% reduction to damage received from status ailments for 4 turns.",
            "Element Link summons a Fire Minion for all Fire allies with 6% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "monster_hunter_revna",
        "name": "Revna",
        "effects": [
            "Safely cleanses 1 status ailment from all allies. (Status ailments are cleansed in the order they have been received. The latest status ailments are cleansed first.)",
            "Recovers 35% health for all allies.",
            "All allies reflect status ailments, negative stacks and Wither effects to a random character on the opposing team for 4 turns."
        ]
    },
    {
        "heroId": "goblin_rocket",
        "name": "Rocket",
        "effects": [
            "Wither: The target gets -330 defense.",
            "Summons a Goblin Explosive Fiend for the target and nearby enemies. The Fiend damages the enemy with 195% attack every turn.",
            "The Goblin Explosive Fiend absorbs healing and disappears when it has absorbed health equal to 20% of its owner's max health.",
            "When the Goblin Explosive Fiend disappears after it has absorbed enough healing, the owner receives 1269 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "shadow_rosanna",
        "name": "Rosanna",
        "effects": [
            "Deals 500% damage to the target.",
            "Has a 80% chance for additional hits on random enemies up to 4 times. Additional hits deal minor damage.",
            "All hit targets get 20 Insanity every time they are hit.",
            "Casting this Special Skill inflicts 40 Insanity to the caster."
        ]
    },
    {
        "heroId": "beauty_beast_rose_de_flo",
        "name": "Rose de Flo",
        "effects": [
            "If the caster has 50 or more Humility:",
            "* Recovers 30% health for all allies.",
            "* Cleanses status ailments from all allies.",
            "* Growth: All allies get 150 attack.",
            "* All allies regenerate 1440 HP over 3 turns.",
            "* The caster gets +74% defense against Special Skills for 3 turns.",
            "Otherwise:",
            "* Recovers 20% health for all allies.",
            "* Cleanses 1 status ailment from all allies. (Status ailments are cleansed in the order they have been received. The latest status ailments are cleansed first.)",
            "* Growth: All allies get 100 attack.",
            "* All allies regenerate 900 HP over 3 turns."
        ]
    },
    {
        "heroId": "fire_god_roughian_and_nurgib",
        "name": "Roughian & Nurgib",
        "effects": [
            "Steals 50% mana from the target and distributes them on allies.",
            "Deals 480% damage to the target.",
            "The more health the enemy has, the more damage they will receive, up to 600%.",
            "Element Link gives all Fire allies get +5% chance to dodge status ailments for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "monster_hunter_ruadh",
        "name": "Ruadh",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 400% damage to all enemies.",
            "Deals additional 10% damage per removed status effect, up to 500% damage in total.",
            "All alllies get +40% attack, and a further +2% increase per each removed status effect up to +60% attack in total, for 6 turns.",
            "All alllies get +40% defense and a further +2% increase per each removed status effect up to +60% defense in total, for 6 turns.",
            "The caster regenerates 1500 boosted health over 6 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "ninja_ruby",
        "name": "Ruby",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "1x Mana Charge:",
            "- Deals 290% damage to the target.",
            "- Reduces the mana of the target by 25%.",
            "- The target gets -14% mana generation for 2 turns.",
            "2x Mana Charge:",
            "- Deals 330% damage to the target and nearby enemies.",
            "- Reduces the mana of the target and nearby enemies by 50%.",
            "- The target and nearby enemies get -24% mana generation for 3 turns.",
            "3x Mana Charge:",
            "- Deals 370% damage to all enemies.",
            "- Reduces the mana of all enemies by 100%.",
            "- All enemies gets -34% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "fire_god_russell",
        "name": "Russell",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 450% damage to the target.",
            "The target and nearby enemies receive 501 Burn damage over 3 turns.",
            "Element Link gives +10% increase for any healing received for all Fire allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fox_rust",
        "name": "Rust",
        "effects": [
            "Deals 535% damage to the target and nearby enemies.",
            "The target receives lasting 210 Bleed damage per turn. (This effect lasts until it is cleansed or removed.)",
            "Gives cover to any ally with the lowest Health for 5 turns. This effect can't be dispelled. (While in Cover, the ally takes no damage from Special attaacks or normal attacks. The covering character takes 50% of the damage dealt to the ally.)",
            "The caster regenerates 1750 HP over 5 turns."
        ]
    },
    {
        "heroId": "bard_balafon",
        "name": "Salimata",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Deals 375% damage to target and nearby enemies.",
            "The target and nearby enemies receive Minion Wound for 3 turns.",
            "Minion Wound: Target's minions health is reduced by 50% and mega minions health is reduced by 25% each turn. (Reduction is applied to owned minions and to any received minions while the effect is active. Reduction only affects minions' current health.",
            "The target and nearby enemies get -80% decrease for any healing received for 3 turns."
        ]
    },
    {
        "heroId": "astral_demon_salome",
        "name": "Salome",
        "effects": [
            "Destroys all Fiends from all allies. The effect damages Mega Fiends.",
            "Boosts health of all allies by 1300. Boosted health can exceed max HP.",
            "At the end of each turn, all allies shot an Astral Beam at a random enemy for 4 turns.",
            "Each Astral Beam deals 200% damage.",
            "Each Astral Beam reduces the Max Health of the hit enemy by 200."
        ]
    },
    {
        "heroId": "christmas_santa",
        "name": "Santa Claus",
        "effects": [
            "Deals 200% damage to all enemies.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All enemies get -34% attack for 3 turns.",
            "All enemies get -44% defense for 3 turns."
        ]
    },
    {
        "heroId": "christmas_santa_costume_metal",
        "name": "Santa Claus C1",
        "effects": [
            "Deals 150% damage to all enemies.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All enemies get -24% attack for 4 turns.",
            "All enemies get -54% defense for 4 turns."
        ]
    },
    {
        "heroId": "slayer_saoirse",
        "name": "Saoirse",
        "effects": [
            "Deals 315% damage to the target and nearby enemies.",
            "The target and nearby enemies get -54% defense for 3 turns.",
            "Stack +2 (Max: 10): The caster gets +10% mana generation",
            "Stack (Max: 10): The caster recovers 10 HP each turn."
        ]
    },
    {
        "heroId": "slayer_saoirse_costume_knight",
        "name": "Saoirse C1",
        "effects": [
            "Deals 335% damage to the target and nearby enemies.",
            "The target and nearby enemies get -44% defense for 3 turns.",
            "Stack +3 (Max: 10): The caster gets +18% mana generation.",
            "Stack +2 (Max: 10): The caster recovers 30 HP each turn."
        ]
    },
    {
        "heroId": "construct_scoria",
        "name": "Scoria",
        "effects": [
            "Deals 420% damage to the enemy with the highest HP. Deals 300% damage to all other enemies.",
            "The enemy that had the highest remaining HP gets silenced for 3 turns.",
            "Wither: All enemies get -350 attack."
        ]
    },
    {
        "heroId": "astral_dwarf_sedille",
        "name": "Sedille",
        "effects": [
            "Deals 450% damage to all enemies.",
            "All enemies receive 785 Burn damage over 5 turns. All allies absorb 25% of dealt Burn damage as boosted health.",
            "Wither: All enemies get -350 attack and -350 defense."
        ]
    },
    {
        "heroId": "s5_sekhmet",
        "name": "Sekhmet",
        "effects": [
            "Deals 450% damage to the target.",
            "Heals all allies for 40% of the damage dealt."
        ]
    },
    {
        "heroId": "s5_sekhmet_costume_warden",
        "name": "Sekhmet C1",
        "effects": [
            "Deals 500% damage to the target.",
            "Heals all allies for 35% of damage dealt."
        ]
    },
    {
        "heroId": "ninja_serandite",
        "name": "Serandite",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 160% damage to all enemies.",
            "- All enemies receive 256 Burn damage over 2 turns.",
            "- All enemies get -64% decrease of any healing received for 2 turns.",
            "x2 Mana Charge:",
            "- Deals 275% damage to all enemies.",
            "- All enemies receive 561 Burn damage over 3 turns.",
            "- All enemies get -74% decrease of any healing received for 3 turns.",
            "x3 Mana Charge:",
            "- Deals 340% damage to all enemies.",
            "- All enemies receive 840 Burn damage over 4 turns.",
            "- All enemies get -84% decrease of any healing received for 4 turns."
        ]
    },
    {
        "heroId": "construct_sizzleomatic",
        "name": "Sizzleomatic",
        "effects": [
            "Deals 475% damage to all enemies.",
            "Deals additional 20% damage per each Fire shield on the board, up to 635% damage in total.",
            "All allies get +50% attack for 5 turns.",
            "All allies reflect status ailments and negative stacks for 5 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "fire_god_skargremar",
        "name": "Skargremar",
        "effects": [
            "Deals 345% damage to the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 20%.",
            "The target and nearby enemies get -35% accuracy for 4 turns. Chance to miss applies to offensive Special Skills.",
            "Element Link gives +10% mana generations for all Fire allies for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "astral_sparklight",
        "name": "Sparklight",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deal 430% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 472 Burn damage over 4 turns. The caster and all their allies aborb 45% of dealt Burn damage as boosted health.",
            "The target and nearby enemies reflect status effect buffs to a random character on the opposing team for 4 turns. (Only dispellable buffs are reflected)"
        ]
    },
    {
        "heroId": "kingdom_sun_quan",
        "name": "Sun Quan",
        "effects": [
            "Deals 340% damage to the target and nearby enemies.",
            "Summons a Wu Soldier Minion for each ally with 10% HP and 18% attack inherited from the caster.",
            "The target hit by Wu Soldier Minion receives 258 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "kingdom_sun_quan_costume_fire_bat",
        "name": "Sun Quan C1",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "Summons a Wu Soldier Minion for each ally with 22% HP and 30% attack inherited from the caster.",
            "The target hit by Wu Soldier Minion receives 543 Burn damage over 3 turns."
        ]
    },
    {
        "heroId": "fire_god_tahir",
        "name": "Tahir",
        "effects": [
            "Deals 400% damage to the target.",
            "Deals 600% damage if the target has status ailments or negative stacks.",
            "If the target still alive, the nearby enemies get 258 Bleed damage for 3 turns.",
            "Element Link gives all Fire allies immunity to new Fiends for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "s5_tetisheri",
        "name": "Tetisheri",
        "effects": [
            "Deals 500% damage to the target and minor damage to nearby enemies.",
            "The target gets -54% defense for 3 turns.",
            "If target is defeated in the next 3 turns, all caster's allies get +20% mana."
        ]
    },
    {
        "heroId": "s5_tetisheri_costume_molten",
        "name": "Tetisheri C1",
        "effects": [
            "Deals 530% damage to the target and minor damage to nearby enemies.",
            "The target gets -44% defense for 3 turns.",
            "If the target is defeated in the next 3 turns, all caster's allies get +20% mana."
        ]
    },
    {
        "heroId": "easter_timothy",
        "name": "Timothy",
        "effects": [
            "Boosts health for all allies by 560. Boosted health can exceed max HP.",
            "All allies get +20% attack, and an additional +10% each time any ally casts their Special Skill, up to maximimum of 70%, for the next 3 turns.",
            "The caster gets -20% defense for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "castle_bear_torben",
        "name": "Torben",
        "effects": [
            "For 3 turns, the target receives 80% damage for all the damage dealt to their allies.",
            "The target get -44% defense for 3 turns.",
            "Deals 200% damage to the target and nearby enemies."
        ]
    },
    {
        "heroId": "mimic_troop_red",
        "name": "Troop Mimic Fire",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana. (After a character has received 5 direct mana additions from Special Skills during a single turn, all subsequent direct mana additions done by Special Skills will have reduced power on that character.)",
            "All Fire allies get +100% normal attack for 4 turns. This effect can be active in additional to other effects that alter attack in general. Normal attacks can have a total maximum of +200% increased power while this effect is active.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "s3_tyr",
        "name": "Tyr",
        "effects": [
            "Deals 285% damage to the target.",
            "The attack has a 60% chance to bypass defensive buffs. This includes counterattacks.",
            "The target receives 212 Bleed damage over 4 turns.",
            "The caster regenerates 548 HP over 4 turns.",
            "If the caster dies during the next 4 turns, they are resurrected in the beginning of their next turn with 32% health. All status effects and stacks are removed when the caster dies."
        ]
    },
    {
        "heroId": "s3_tyr_costume_savage",
        "name": "Tyr C1",
        "effects": [
            "Deals 260% damage to the target and nearby enemies.",
            "The attack bypasses defensive buffs. This includes counterattacks.",
            "The target and nearby enemies receive 648 Bleed damage over 4 turns. The caster absorbs 40% of the dealt Bleed damage as health.",
            "If the caster dies during the next 4 turns they are resurrected in the beginning of their turn with 40% health. All status effects and stacks are removed when the caster dies."
        ]
    },
    {
        "heroId": "kalevala_ukkonen",
        "name": "Ukkonen",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies get -40% attack for 3 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "The caster and nearby allies recover 618 HP over 3 turns. The effect duration is reset if the status effect owner is hit with direct damage from a Special Skill.",
            "The caster and nearby allies are immune to buff dispels for 3 turns."
        ]
    },
    {
        "heroId": "kalevala_ukkonen_costume_ukkonen_infernal",
        "name": "Ukkonen C1",
        "effects": [
            "Deals 260% damage to all enemies.",
            "All enemies get -30% attack for 3 turns. Against Ice characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "The caster and nearby allies recover 717 HP over 3 turns. The effect duration is reset if the status effect owner is hit with direct damage from a Special Skill.",
            "The caster and nearby allies are immune to buff dispels and reallocations for 3 turns. (The immunity also includes this effect itself)"
        ]
    },
    {
        "heroId": "halloween_vanda",
        "name": "Vanda",
        "effects": [
            "Deals 125% damage to all enemies.",
            "The caster steals 61% of any healing applied to all enemies for 2 turns.",
            "All allies are immune to new status ailments for 2 turns."
        ]
    },
    {
        "heroId": "halloween_vanda_costume_mafia",
        "name": "Vanda C1",
        "effects": [
            "Deals 115% damage to all enemies.",
            "The caster steals 51% of any healing applied to all enemies for 3 turns.",
            "All allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "garrison_vanya",
        "name": "Vanya",
        "effects": [
            "Recovers 54% health of all allies.",
            "Summons a Shield Guard Mega Minion with 65% HP and 180% attack inherited from the caster.",
            "The Shield Guard Mega Minion cleanses the latest cleansable status ailments from all allies each turn. This does not trigger secondary effects."
        ]
    },
    {
        "heroId": "beowulf_wiglaf",
        "name": "Wiglaf",
        "effects": [
            "Deals 400% damage to the target and nearby enemies.",
            "The damage is increased by 30% per each defeated ally.",
            "The target and nearby enemies receives 687 Burn damage over 3 turns.",
            "All allies who have 50% or less HP left get additional +50% power to Special Skill attacks for 3 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "institute_wilcox",
        "name": "Wilcox",
        "effects": [
            "Deals 265% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy and bypasses defensive buffs.",
            "All hit targets 20 Insanity every time they are hit.",
            "After 1 turn the target gets Paralyzed for4 turns. (Paralyzed enemies can't attack or gain mana and receive +50% increased damage. Once Paralyzed, the effect can't be cleansed. Bosses, Titans and Mythic Titans are not affected by this status effect.)",
            "Casting this Special Skill inflicts 40 Insanity on the caster."
        ]
    },
    {
        "heroId": "s4_xenda",
        "name": "Xenda",
        "effects": [
            "Deals 250% damage to all enemies.",
            "All enemies receive 300 Burn damage over 4 turns. The caster absorbs 15% of dealt Burn damage as health.",
            "The caster steals generated mana of all enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen."
        ]
    },
    {
        "heroId": "s4_xenda_costume_flame",
        "name": "Xenda C1",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All enemies receive 472 Burn damage over 4 turns. The caster absorbs 20% of dealt Burn damage as health.",
            "The caster steals generated mana of all enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaotu",
        "name": "Xiaotu",
        "effects": [
            "Deals 655% damage to the target.",
            "The target and nearby enemies resist healing and receive 250 damage per each resisted healing for 4 turns."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaotu_costume_golden",
        "name": "Xiaotu C1",
        "effects": [
            "Deals 670% damage to the target.",
            "Reduce max health of the target and nearby enemies by 250. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 250.)",
            "The target and nearby enemies resist healing and receive 270 damage per resisted healing for 4 turns."
        ]
    },
    {
        "heroId": "journey_xiwangmu",
        "name": "Xiwangmu",
        "effects": [
            "If the caster dies during the next 5 turns, they are resurrected in the beginning of their next turn with 35% health and 815 damage is dealt to all enemies. All status effects and stacks are removed when the caster dies.",
            "All allies gets +50% critical chance for 4 turns.",
            "Stack (Max: 10): All allies get +15% attack."
        ]
    },
    {
        "heroId": "fire_god_yang_mai",
        "name": "Yang Mai",
        "effects": [
            "Deals 370% damage to the target.",
            "Has a 60% chance for additional hits on random enemies up to 4 times. Additional hits deal minor damage.",
            "The caster gains the following status effect each hit:",
            "Stack (Max: 10): The caster gets +6% attack.",
            "Element Link gives all Fire allies small amount of mana at the end of the turn for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "faun_yolanda",
        "name": "Yolanda",
        "effects": [
            "Deals 450% damage to the target and nearby enemies.",
            "Enhanced Dodge: The caster and nearby allies get +55% chance to dodge Special Skills that deal damage. This effect lasts until the ally succesfully dodges 3 times.",
            "After the Enhanced Dodge ends or is removed or replaced, one random enemy gets -55% accuracy for 3 turns, and one random enemy takes 765 Bleed damage over 3 turns. (Chance to miss applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "fire_god_zagrog",
        "name": "Zagrog",
        "effects": [
            "Deals 520% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. This includes counterattacks.",
            "The caster gains 25% mana if any defensive buffs were bypassed.",
            "Element Link gives all Fire allies +10% defense for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "fire_god_zarga",
        "name": "Zarga",
        "effects": [
            "Deals 465% damage to the target.",
            "The target has 55% chance to get 1068 Bleed damage over 6 turns.",
            "The target gets a Bleed mark for 6 turns. Whenever a marked target receives Bleed damage, they gain a stack (Max: 10). Each stack increases all damage the target receives by 5%.",
            "Element Link gives all Fire allies +5% dodge chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "elemental_zaria",
        "name": "Zaria",
        "effects": [
            "Deals 290% damage to all enemies.",
            "If there are 6 or more Fire shields on the board, damage is increased to 340%.",
            "If there are 12 or more Fire shields on the board, damage is increased to 500%."
        ]
    },
    {
        "heroId": "s4_zenobia",
        "name": "Zenobia",
        "effects": [
            "Deals 320% damage to the enemies on he edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "Alters the power of all Fire shields on the board. When an attacking Hero casts the special, the shield becomes enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "s4_zenobia_costume_floral",
        "name": "Zenobia C1",
        "effects": [
            "Deals 340% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.",
            "Alters the power of Fire shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "slime_zestique",
        "name": "Zestique",
        "effects": [
            "Increases the mana of nearby allies by 30%.",
            "Recovers 25% health for the caster and nearby allies.",
            "Growth: Nearby allies gets 300 attack and 300 defense.",
            "Summon a Slime Mega Minion with 50% HP and 40% attack inherited from the caster."
        ]
    },
    {
        "heroId": "fire_god_zidane",
        "name": "Zidane",
        "effects": [
            "Deals 405% damage to the target.",
            "Steals the latest dispellable buff from target and grants it to the caster.",
            "Randomly casts one of the following alternatives:",
            "Barbed Bolt:",
            "* The target receives 504 Bleed damage over 3 turns.",
            "Poison Bolt:",
            "* The target receives 537 Poison damage over 3 turns.",
            "Fire Bolt:",
            "* The target receives 570 Burn damage over 3 turns.",
            "Element Link gives all Fire allies +20% critical chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "fire_god_zimkitha",
        "name": "Zimkitha",
        "effects": [
            "Deals 215% damage to all enemies.",
            "All allies get +30% attack for 4 turns.",
            "Cleanses status ailments from all allies.",
            "Element Link recovers 4% health for all Fire allies for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "fire_god_zimkitha_costume_adventurer",
        "name": "Zimkitha C1",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 240% damage to all enemies.",
            "Deals additional 15% damage per removed status effect, up to 420% damage in total.",
            "Element Link recovers 4% health for all Fire allies for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "oriental_female_ninja",
        "name": "Hikaru",
        "effects": [
            "Deals 265% damage to the target"
        ]
    },
    {
        "heroId": "oriental_warrior",
        "name": "Kenjiro",
        "effects": [
            "Deals 115% damage to all enemies"
        ]
    },
    {
        "heroId": "oriental_monkey_warrior",
        "name": "Hou",
        "effects": [
            "All allies get +63% defense for 4 turns"
        ]
    },
    {
        "heroId": "oriental_squire",
        "name": "Nash",
        "effects": [
            "Deals 195% damage to the target",
            "The target gets -34% attack for 6 turns"
        ]
    },
    {
        "heroId": "oriental_panda_scout",
        "name": "Sha Ji",
        "effects": [
            "Recovers 28% health for all allies"
        ]
    },
    {
        "heroId": "s3_agnes",
        "name": "Agnes",
        "effects": [
            "Deals 320% damage to the target.",
            "The attack has a 60% chance to bypass defensive buffs. This includes counterattacks."
        ]
    },
    {
        "heroId": "sand_soldier",
        "name": "Arman",
        "effects": [
            "Deals 130% damage to all enemies.",
            "All enemies receive 92 damage over 4 turns.",
            "All enemies get -50% increase for any healing received for 2 turns. This effect can't be cleansed.",
            "Cleanses status ailments from the caster."
        ]
    },
    {
        "heroId": "oriental_brawler",
        "name": "Bane",
        "effects": [
            "Deals 300% damage to the target.",
            "The target gets -35% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "oriental_brawler_costume_egypt",
        "name": "Bane C1",
        "effects": [
            "Deals 280% damage to the target.",
            "The target gets -40% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "oriental_brawler_costume_cute",
        "name": "Bane Toon",
        "effects": [
            "Deals 305% damage to the target.",
            "The target gets -30% accuracy for 2 turns.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_brawler_costume_glass",
        "name": "Bane Glass",
        "effects": [
            "Deals 315% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target gets -32% accuracy for 4 turns."
        ]
    },
    {
        "heroId": "castle_wolf_bertulf",
        "name": "Bertulf",
        "effects": [
            "All allies get +100% normal attack for 4 turns. This effect can be active in addition to effectst hat alter attack in general. Normal attacks can have a total maximum of +160% increased power while this effect is active."
        ]
    },
    {
        "heroId": "circus_candy",
        "name": "Candy",
        "effects": [
            "Heals all allies who have less than 50% HP left to 50% health.",
            "All allies regenerate 261 HP over 3 turns."
        ]
    },
    {
        "heroId": "monster_hunter_cedar",
        "name": "Cedar",
        "effects": [
            "Deals 175% damage to all enemies.",
            "All enemies get -15% accuracy, and a further -2% decreae every time they are hit during 4 turns, up to -35% accuracy.",
            "Stack (Max: 10): The caster gets +20% attack against the weaker element."
        ]
    },
    {
        "heroId": "shadow_cthuwu",
        "name": "Cthuwu",
        "effects": [
            "Deals 250% damage to the target.",
            "All allies have 50% chance to deal 100% damage to a random enemy and inflicts 20 Insanity on them after any subsequent allied Special Skill is cast for 3 turns. (Damage and Insanity are dealt on the first Special Skill cast of each character per turn. The damage and Insanity dealt by this effect is not affected by Insanity.)",
            "Inflicts 40 Insanity to the caster."
        ]
    },
    {
        "heroId": "oriental_female_guard",
        "name": "Dawa",
        "effects": [
            "Deals 210% damage to the target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "oriental_female_guard_costume_soldier",
        "name": "Dawa C1",
        "effects": [
            "Deals 200% damage to the target.",
            "Deals 230% damage to a random different enemy. Deals extra damage to the target if the target is Dark."
        ]
    },
    {
        "heroId": "oriental_female_guard_costume_cute",
        "name": "Dawa Toon",
        "effects": [
            "Deals 240% damage to the target and minor damage to nearby enemies.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_female_guard_costume_glass",
        "name": "Dawa Glass",
        "effects": [
            "Deals 250% damage to the target and minor damage to nearby enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "beachparty_dolrak",
        "name": "Dolrak",
        "effects": [
            "Deals 270% damage to the target.",
            "The target gets -30% defense for 4 turns. The effect duration resets if the target is healed.",
            "The target gets -40% decrease of any healing for 4 turns."
        ]
    },
    {
        "heroId": "monster_hunter_edelaide",
        "name": "Edelaide",
        "effects": [
            "Recovers 26% health for all allies.",
            "All allies get +195% attack and -35% accuracy that only applies when the enemy has more HP than the attacker. The effect lasts for 3 turns."
        ]
    },
    {
        "heroId": "musketeer_felton",
        "name": "Felton",
        "effects": [
            "Deals 355% damage to the target.",
            "Deals 100 extra damage if the target has boosted health.",
            "All enemies reflect status effect buffs to a random character on the opposing team for 3 turns. (Only dispellable buffs are reflected.)",
            "The caster regenerates 243 HP over 3 turns."
        ]
    },
    {
        "heroId": "musketeer_felton_costume_pirate",
        "name": "Felton C1",
        "effects": [
            "Deals 375% damage to the target.",
            "Deals 150 extra damage if the target has boosted health.",
            "All enemies reflect status effect buffs to a random character on the opposing team for 3 turns. (Only dispellable buffs are reflected.)",
            "The caster regenerates 200 HP over 2 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "oriental_panda_berserker",
        "name": "Gan Ju",
        "effects": [
            "Deals 270% damage to the target.",
            "Reduces the mana of the target by 25%."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_farmer",
        "name": "Gan Ju C1",
        "effects": [
            "Deals 220% damage to the target.",
            "Reduces the mana of the target by 40%."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_cute",
        "name": "Gan Ju Toon",
        "effects": [
            "Deals 300% damage to the target.",
            "Reduces the mana of the target by 20%.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_glass",
        "name": "Gan Ju Glass",
        "effects": [
            "Deals 310% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Reduces the mana of the target by 23%."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_stylish",
        "name": "Gan Ju Stylish",
        "effects": [
            "Deals 320% damage to the target.",
            "If the target has less than 50% health remaining, deals 380% damage instead.",
            "Reduces the mana of the target by 24%."
        ]
    },
    {
        "heroId": "slime_harubo",
        "name": "Harubo",
        "effects": [
            "Deals 350% damage to the target.",
            "The target enemy receives Devouring Goo status ailment for 3 turns.",
            "Devouring Goo: Removes all dispellable buffs or Growth effects, deals 150 damage per turn and 50 damage per each removed effect. (If the target has this effect, the duration will be refreshed and the extra damage from the removed effects will be added to the new effect. Damage per turn can't exceed 700.)"
        ]
    },
    {
        "heroId": "construct_ironvein",
        "name": "Ironvein",
        "effects": [
            "Deals 300% damage to 2 random enemies.",
            "If an enemy is defeated by the attack, the caster recovers +20% health and gains +20% mana."
        ]
    },
    {
        "heroId": "tales1_jaco",
        "name": "Jaco",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Steals 33% mana from the target, and distributes it to allies.",
            "* Deals 235% damage to target and minor damage to nearby enemies.",
            "2nd:",
            "* Steals 33% mana from the target, and distributes it to allies.",
            "* Deals 310% damage to target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "tales1_jaco_costume_alchemist",
        "name": "Jaco C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Steals 25% mana from the target, and distributes it to allies.",
            "* Deals 225% damage to target and minor damage to nearby enemies.",
            "2nd:",
            "* Steals 35% mana from the target, and distributes it to allies.",
            "* Deals 330% damage to target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "christmas_jolly",
        "name": "Jolly",
        "effects": [
            "Boosts health of all allies by 475. Boosted health can exceed max HP.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All allies reduce all received damage by -45% for 6 turns.",
            "All allies get +35% mana generation for 6 turns."
        ]
    },
    {
        "heroId": "oriental_female_mage",
        "name": "Kailani",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +63% defense for 5 turns."
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_mender",
        "name": "Kailani C1",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +50% attack for 5 turns"
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_cute",
        "name": "Kailani Toon",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage. For all Holy characters, this status effect is undispellable and lasts 2 turns longer.",
            "All allies get 56% defense for 5 turns. For all Holy characters, this status effect is undispellable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_glass",
        "name": "Kailani Glass",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +59% defense for 5 turns.",
            "All Holy allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_stylish",
        "name": "Kailani Stylish",
        "effects": [
            "All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "All allies get +60% defense for 5 turns.",
            "All allies regenerate 300 HP over 5 turns."
        ]
    },
    {
        "heroId": "ninja_kinsaishi",
        "name": "Kinsaishi",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "- Deals 145% damage to the target.",
            "- Deals additional 145% damage to 2 random enemies.",
            "x2 Mana Charge:",
            "- Deals 195% damage to the target.",
            "- Deals additional 195% damage to 3 random enemies.",
            "x3 Mana Charge:",
            "- Deals 220% damage to the target.",
            "- Deals additional 220% damage to 4 random enemies."
        ]
    },
    {
        "heroId": "s3_kvasir",
        "name": "Kvasir",
        "effects": [
            "Summons a Bee Minion for each ally. The Bee Minion inherits 15% HP and 17% attack from the caster.",
            "Each hit from a Bee Minion gives the target the following status ailments:",
            "* The target receives 14 Poison damage over 2 turns.",
            "* The target can't receive new Minions for 4 turns."
        ]
    },
    {
        "heroId": "s3_kvasir_costume_captain",
        "name": "Kvasir C1",
        "effects": [
            "Summons a Bee Minion for each ally. The Bee Minion inherits 18% HP and 15% attack from the caster.",
            "Each hit from the Bee Minion gives the target the following status ailments:",
            "* The target receives 48 Poison damage over 3 turns.",
            "* The target is immune to new status effects buffs for 2 turns."
        ]
    },
    {
        "heroId": "s2_merwoman",
        "name": "Melia",
        "effects": [
            "Deals 120% damage to all enemies.",
            "All allies get +36% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "s2_merwoman_costume_emissary",
        "name": "Melia C1",
        "effects": [
            "Deals 120% damage to all enemies.",
            "All enemies get -25% accuracy for 3 turns. Chance to miss also applies too offensive Special Skills."
        ]
    },
    {
        "heroId": "owl_paeia",
        "name": "Paeia",
        "effects": [
            "All allies get a Moonrise Ward for 6 turns, that reduces the incoming Special Skill damage by -320. Reduces damage by additional 20% when attacker is Holy.",
            "All allies get +24% attack for 6 turns.",
            "All allies get +24% mana generation for 6 turns."
        ]
    },
    {
        "heroId": "fables_pixie",
        "name": "Pixie",
        "effects": [
            "Deals 290% damage to the target.",
            "Automatically does 89 damage to the target and consumes 50% mana from the target when the target's mana is full for 3 turns."
        ]
    },
    {
        "heroId": "s4_poppy",
        "name": "Poppy",
        "effects": [
            "Deals 300% damage to the target.",
            "Has a 42% chance for additional hits on random enemies up to 3 times.  Additional hits deal minor damage."
        ]
    },
    {
        "heroId": "s4_poppy_costume_lodger",
        "name": "Poppy C1",
        "effects": [
            "Deals 280% damage to the target.",
            "Has a 55% chance for additional hits on random enemies up to 3 times. Additional hits deal minor damage."
        ]
    },
    {
        "heroId": "s5_rekhetre",
        "name": "Rekhetre",
        "effects": [
            "All allies regenerate 450 boosted health over 3 turns. Boosted health can exceed max HP.",
            "The caster gets +84% defense against Dark, and a further 2% increase every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "s5_rekhetre_costume_artist",
        "name": "Rekhetre C1",
        "effects": [
            "All allies regenerate 540 boosted health over 3 turns. Boosted health can exceed max HP.",
            "The caster gets +74% defense against Dark, and a further 2% increase every time they are hit during 3 turns."
        ]
    },
    {
        "heroId": "mighty_pet_ribbit",
        "name": "Ribbit",
        "effects": [
            "Deals 250% damage to the target and nearby enemies.",
            "Reduces the mana of the target and nearby enemies by 15%.",
            "The target and nearby enemies receive 260 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "construct_rustbeak",
        "name": "Rustbeak",
        "effects": [
            "The caster and nearby allies regenerate 429 HP over 3 turns.",
            "The caster and nearby allies get +45% chance to dodge attacks and Special skills for 3 turns.",
            "The caster and nearby allies get +45% critical chance for 3 turns."
        ]
    },
    {
        "heroId": "pirate_sally",
        "name": "Sally",
        "effects": [
            "Deals 270% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy."
        ]
    },
    {
        "heroId": "faun_saskia",
        "name": "Saskia",
        "effects": [
            "Recovering 26% health for all allies.",
            "Enhanced Dodge: All allies get +45% chance to dodge Special Skills that deal damage. This effect lasts until the ally succesfully dodges 1 time.",
            "After the Enhanced Effect ends or is removed or replaced, the ally regenerates 640 HP over 4 turns."
        ]
    },
    {
        "heroId": "beowulf_aeschere",
        "name": "Aeschere",
        "effects": [
            "Safely dispels 1 buff from all enemies. (The latest buffs are dispelled first.)",
            "Source of Buffs: The following effects are cast on a random ally at the start of each turn",
            "* +25% mana generation for 3 turns.",
            "* +50% increase for all healing received for 3 turns.",
            "* The Source of Buffs will activate 4 times. Each attempt to dispel it removes one activation.",
            "All allies regenerate 600 HP over 4 turns."
        ]
    },
    {
        "heroId": "magic_anastasia",
        "name": "Anastasia",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Summons a Grimoire Minion for all allies with 13% HP and 20% attack inherited from the caster.",
            "2x Mana Charge:",
            "* Deals 235 damage to all enemies.",
            "* Summons a Grimoire Fiend for all enemies. The Fiend damages the enemy with 43% attack every turn.",
            "* The Grimoire Fiend absorbs healing. It disappears after absorbing a healing amount equal to 30% of its target's max health."
        ]
    },
    {
        "heroId": "mimic_ascension_epic_yellow",
        "name": "Ascension Mimic Epic Holy",
        "effects": [
            "Deals 300% damage to the target.",
            "The target receives 128 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns.(The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "gargoyle_bellerive",
        "name": "Bellerive",
        "effects": [
            "Deals 420% damage to the target.",
            "If the target dies, the excess damage is dealt to each nearby enemy."
        ]
    },
    {
        "heroId": "monster_hunter_bogart",
        "name": "Bogart",
        "effects": [
            "Deals 305% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -35% defense for 3 turns. The defense descrese by -10% each turn, up to -55%."
        ]
    },
    {
        "heroId": "beauty_beast_chandel",
        "name": "Chandel",
        "effects": [
            "If the caster has 35 or more Humility:",
            "* Deals 300% damage to the enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled.",
            "* Reduces max health of the enemies on the edges of the enemy formation by 500. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 500.)",
            "Otherwise:",
            "* Deals 260% damage to the enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled."
        ]
    },
    {
        "heroId": "oriental_falconer",
        "name": "Chao",
        "effects": [
            "Deals 315% damage to the target.",
            "Reduces the mana of the target by 25%."
        ]
    },
    {
        "heroId": "oriental_falconer_costume_dodo",
        "name": "Chao C1",
        "effects": [
            "Deals 275% damage to the target.",
            "The caster steals generated mana of the target over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be cleansed, but it gets removed if the caster dies."
        ]
    },
    {
        "heroId": "oriental_falconer_costume_cub",
        "name": "Chao C2",
        "effects": [
            "Deals 275% damage to the target and nearby enemies.",
            "The target and nearby enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "oriental_falconer_costume_cute",
        "name": "Chao Toon",
        "effects": [
            "Deals 320% damage to the target.",
            "Reduces the mana of the target by -20%.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_falconer_costume_glass",
        "name": "Chao Glass",
        "effects": [
            "Deals 325% damage to the target.",
            "Reduces the mana of the target by 23%.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)"
        ]
    },
    {
        "heroId": "circus_dandre",
        "name": "D'Andre",
        "effects": [
            "Recovers 35% health for all allies.",
            "All allies with a cleansable status ailment that affects defense get +50% defense for 3 turns.",
            "All allies get +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s2_tanuki_raccoon",
        "name": "Danzaburo",
        "effects": [
            "Perform a trick for a special effect:",
            "Swords:",
            "* Deals 255% damage to all enemies.",
            "* All enemies get -54% accuracy for 3 turns and chance to miss also applies to offensive Special Skills.",
            "Bottle:",
            "* All allies get +24% mana generation for 4 turns.",
            "* All allies get +63% defense for 4 turns.",
            "Freeze:",
            "* The caster can't gain mana for 2 turns.",
            "* This effect can't be cleansed."
        ]
    },
    {
        "heroId": "s2_tanuki_raccoon_costume_merchant",
        "name": "Danzaburo C1",
        "effects": [
            "Sell junk for a specific effect:",
            "Dull Swords",
            "* Deals 270% damage to all enemies.",
            "* All enemies get -39% attack for 3 turns.",
            "Questionable Snake Oil",
            "* All enemies get -24% mana generation for 3 turns.",
            "* All enemies get -44% defense for 3 turns.",
            "Clearance Sale",
            "* Increases the mana of all allies except the caster's by 3%.",
            "* The caster can't gain mana for 2 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "astral_dwarf_errin",
        "name": "Errin",
        "effects": [
            "All enemies become Soul Connected for 4 turns. Soul Connected enemies share received damage.",
            "All enemies receive +25% increased damage for 4 turns. This effect is increased by +5% for each Minion or Mega minion owned by all enemies, up to +50% in total."
        ]
    },
    {
        "heroId": "tales2_fjalar",
        "name": "Fjalar",
        "effects": [
            "Damage bypasses target's Minions.",
            "Attack the target with Firestorm Strike, dealing up to 1080 damage. Deals 30% more damage if the target is ok the Nature element. This Special Skill never misses its targets.",
            "The target resists new Minions for 4 turns."
        ]
    },
    {
        "heroId": "tales2_fjalar_costume_undead",
        "name": "Fjalar C1",
        "effects": [
            "Damage bypasses target's Minions.",
            "Attack the target with Firestorm Strike, dealing up to 1180 damage. Deals 30% more damage if the target is of the Nature element. This Special Skill never misses its targets.",
            "The target resists new Minions for 4 turns."
        ]
    },
    {
        "heroId": "goblin_goldie",
        "name": "Goldie",
        "effects": [
            "Recover 38% health for all allies.",
            "Growth: All allies get 100 attack.",
            "All allies reflect ailments to a random character on the opposing team for 3 turns. (Only cleansable status ailments are reflected)"
        ]
    },
    {
        "heroId": "fables_gretel",
        "name": "Gretel",
        "effects": [
            "Deals 175% damage to the target and minor damage to nearby enemies.",
            "Automatically does 147 damage to the target and consumes 50% mana from the target when the target's mana is full for 3 turns.",
            "The caster gets +74% defense against Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "s4_griffin",
        "name": "Griffin",
        "effects": [
            "Deals 340% damage to the target.",
            "The attack will always bypass counterattacks and reflection."
        ]
    },
    {
        "heroId": "s4_griffin_costume_priest",
        "name": "Griffin C1",
        "effects": [
            "Deals 320% damage to the target.",
            "The caster and nearby allies bypass defense buffs with their attacks for 2 turns. Defensive buffs include counterattacks."
        ]
    },
    {
        "heroId": "outlaw_gu_dasao",
        "name": "Gu Dasao",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Deals 185% damage to the target and minor damage to all other enemies.",
            "The caster counterattacks with 70% of the damage received for 4 turns.",
            "The caster decreases -5% mana from the attacker on each counterattack for 4 turns. The effect gets diminished for consecutive activations during the same turn."
        ]
    },
    {
        "heroId": "guardian_jackal_assassin",
        "name": "Guardian Jackal",
        "effects": [
            "Deals 270% damage to the target.",
            "The target gets -54% defense against Holy for 4 turns."
        ]
    },
    {
        "heroId": "guardian_jackal_assassin_costume_bones",
        "name": "Guardian Jackal C1",
        "effects": [
            "Deals 280% damage to the target.",
            "The caster and nearby allies get +94% defense against Dark for 3 turns."
        ]
    },
    {
        "heroId": "s3_gullinbursti",
        "name": "Gullinbursti",
        "effects": [
            "Boosts health of all allies by 400. Boosted health can exceed max HP.",
            "The caster get +45% attack, and a further 20% increase every time they or any of their allies are hit during 3 turns, up to +285 attack. When the effect ends, all enemies receive 176 damage. Each hit on the caster or their allies during the duration increases the damage by 13 to a maximum of 332 damage."
        ]
    },
    {
        "heroId": "s3_gullinbursti_costume_toxic",
        "name": "Gullinbursti C1",
        "effects": [
            "All allies regenerate 480 boosted health over 4 turns. Boosted health can exceed max HP.",
            "The caster gets +35% attack, and a further 15% increase every time they or any of their allies are hit during 4 turns, up to +215 attack. When the effect ends, all enemies receive 236 damage. Each hit on the caster or their allies during the duration increases the damage by 15 to a maximum of 416 damage."
        ]
    },
    {
        "heroId": "christmas_holly",
        "name": "Holly",
        "effects": [
            "Recovers 20% heath for all allies.",
            "Recovers additional 3% health per each Holy shield on the board, up to 44% health in total.",
            "Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.",
            "All allies get +14% attack, and a further 5% increase per each Holy shield on the board for 4 turns, up to +54% attack."
        ]
    },
    {
        "heroId": "oriental_panda_warrior",
        "name": "Hu Tao",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All enemies get -40% accuracy for 4 turns. (Chance to miss also applies to offensive special skills.)"
        ]
    },
    {
        "heroId": "oriental_panda_warrior_costume_armor",
        "name": "Hu Tao C1",
        "effects": [
            "Deals 160% damage to all enemies.",
            "All enemies get -30% accuracy for 4 turns. (Chance to miss also applies to offensive Special SKills.)",
            "All enemies get -50% decrease for any healing received for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "oriental_panda_warrior_costume_dueller",
        "name": "Hu Tao C2",
        "effects": [
            "Deals 200% damage to all enemies.",
            "All enemies get -30% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.",
            "All enemies get -24% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "oriental_panda_warrior_costume_cute",
        "name": "Hu Tao Toon",
        "effects": [
            "Deals 240% damage to all enemies.",
            "All enemies get -34% accuracy for 4 turns.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_panda_warrior_costume_glass",
        "name": "Hu Tao Glass",
        "effects": [
            "Deals 245% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -38% accuracy for 4 turns."
        ]
    },
    {
        "heroId": "easter_lady_woolerton",
        "name": "Lady Woolerton",
        "effects": [
            "Recovers 40% Health for all allies.",
            "The caster can't gain mana for 2 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "oriental_female_templar",
        "name": "Li Xiu",
        "effects": [
            "Deals 150% damage to all enemies.",
            "Reduces the mana of all enemies by 20%."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_kimono",
        "name": "Li Xiu C1",
        "effects": [
            "Deals 180% damage to all enemies.",
            "Reduces the mana of all enemies by 10%."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_fireworks",
        "name": "Li Xiu C2",
        "effects": [
            "Deals 270% damage to the target and nearby enemies.",
            "The target and nearby enemies get silenced for 3 turns."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_cute",
        "name": "Li Xiu Toon",
        "effects": [
            "Deals 180% damage to all enemies.",
            "Reduces the mana of all enemies by 16%.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_glass",
        "name": "Li Xiu Glass",
        "effects": [
            "Deals 190% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Reduces the mana of all enemies by 18%."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_stylish",
        "name": "Li Xiu Stylish",
        "effects": [
            "Deals 200% damage to all enemies.",
            "If the enemies have less than 50% health remaining, deals 275% damage instead.",
            "Reduces the mana of all enemies by -19%."
        ]
    },
    {
        "heroId": "s3_mist",
        "name": "Mist",
        "effects": [
            "Deals 175% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effect buffs for 3 turns.",
            "The target and nearby enemies get -34% defense against Special Skills for 3 turns.",
            "The target and nearby enemies get -64% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "vegetable_pineon",
        "name": "Pineon",
        "effects": [
            "Deals 415% damage to the target.",
            "Harvests buffs from the target. (Harvest safely removes 2 buffs, positive Stacks or Growth effects from each target. This includes undispellable buffs and dance effects. The caster receives 7% boosted health for each effect removed. Boosted health can exceed max HP. Safe removal bypasses secondary effects, such as damage on removal, from the removed status ailment. External effects such as passive skills and family effects can still activate. Growth effects are removed first. Other effects, the latest removed first.)",
            "Stack (Max: 10): The caster gets +6% mana generation. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "s5_scoratek",
        "name": "Scoratek",
        "effects": [
            "Deals 190% damage to the target.",
            "Summons a Bomb Scarab Fiend for the target. The Fiend damages its target with 38% attack every turn.",
            "The Bomb Scarab Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "The Bomb Scarab Fiend explodes after 3 turns, dealing 600 damage to its target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "s5_scoratek_costume_sentinel",
        "name": "Scoratek C1",
        "effects": [
            "Deals 125% damage to the target.",
            "Summons a Scarab Bomb Fiend for the target. The Fiend damages the enemy with 38% attack every turn.",
            "The Scarab Bomb Fiend absorbs healing and disappears when it has absorbed health equal to 30% of its owner's max health.",
            "The Scarab Bomb Fiend explodes after 3 turns, dealing 900 damage to its target and minor damage to nearby enemies."
        ]
    },
    {
        "heroId": "styx_steropes",
        "name": "Steropes",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* All allies regenerate 324 boosted health over 3 turns. Boosted health can exceed max HP.",
            "2x Mana Charge:",
            "* If any ally dies during the next 3 turns they are resurrected in the beginning of their next turn with 20% health. All status effects and stacks are removed when the ally dies.",
            "* 3x Mana Charge:",
            "* All allies regenerate 584 boosted health over 4 turns. Boosted health can exceed max HP.",
            "* If any ally dies during the next 4 turns they are resurrected in the beginning of their next turn with 40% health. All status effects and stacks are removed when the ally dies."
        ]
    },
    {
        "heroId": "wild_cat_tunes",
        "name": "Tunes",
        "effects": [
            "Dispels 2 buffs from all enemies. (The latest buffs are dispelled first.)",
            "Reduces max health of all enemies by 500. This effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 500.)",
            "All enemies get -44% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "valentines_voluptas",
        "name": "Voluptas",
        "effects": [
            "Destroys all Fiends from the caster and nearby allies. This effect damages Mega Fiends.",
            "Recovers 40% health for the caster and nearby allies."
        ]
    },
    {
        "heroId": "valentines_voluptas_costume_paint",
        "name": "Voluptas C1",
        "effects": [
            "Destroys all Fiends from the caster and nearby allies. This effect damages Mega Fiends.",
            "Recovers 40% health for the caster and nearby allies.",
            "The caster and nearby allies get +54% defense against Dark for 4 turns."
        ]
    },
    {
        "heroId": "mighty_pet_waddles",
        "name": "Waddles",
        "effects": [
            "Deals 365% damage to the target.",
            "The target automatically casts Shifting Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns. When this effect is triggered, it shifts to the hit ally, and the duration is refreshed."
        ]
    },
    {
        "heroId": "kingdom_wang_yuanji",
        "name": "Wang Yuanji",
        "effects": [
            "Destroys all Fiends from all allies and damages all Mega Fiends.",
            "Boosts health of all allies by 625. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "kingdom_wang_yuanji_costume_artisan",
        "name": "Wang Yuanji C1",
        "effects": [
            "Destroys all Fiends from all allies and damages all Mega Fiends.",
            "Boosts health of all allies by 520. Boosted health can exceed max HP.",
            "All allies get +30% defense for 5 turns."
        ]
    },
    {
        "heroId": "oriental_monkey_captain",
        "name": "Wu Kong",
        "effects": [
            "All allies get +185% attack with -32% accuracy for 5 turns. (Chance to miss also applies to offensive special skills.)"
        ]
    },
    {
        "heroId": "oriental_monkey_captain_costume_warrior",
        "name": "Wu Kong C1",
        "effects": [
            "Deals 210% damage to all enemies.",
            "The caster gets -20% defense for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "oriental_monkey_captain_costume_reveller",
        "name": "Wu Kong C2",
        "effects": [
            "All allies get +170% attack with -25% accuracy for 5 turns. (Chance to miss also applies to offensive special skills.)"
        ]
    },
    {
        "heroId": "oriental_monkey_captain_costume_cute",
        "name": "Wu Kong Toon",
        "effects": [
            "All allies get +175% attack with -32% accuracy for 5 turns. This status effect is undispellable and lasts 2 turns longer on Holy characters."
        ]
    },
    {
        "heroId": "oriental_monkey_captain_costume_glass",
        "name": "Wu Kong Glass",
        "effects": [
            "All allies get +180% attack with -32% accuracy for 5 turns. (Chance to Miss applies to offensive Special Skills.)",
            "All Holy allies reflect status ailments and negative stacks for 2 turns. (Status effect cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "elemental_zione",
        "name": "Zione",
        "effects": [
            "Alters the power of all Holy shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +30% more mana. When a defending casts the special, the shields become weakened and give -23% less mana.",
            "All allies get +35% attack for 4 turns. For all Holy characters, the status effect becomes undispellable and last 2 turns longer."
        ]
    },
    {
        "heroId": "mimic_aether_yellow",
        "name": "Aether Mimic Holy",
        "effects": [
            "Deals 600% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "Boosts all allies' health by 30% of damage dealt.",
            "The Mimic chest closes for 2 turns."
        ]
    },
    {
        "heroId": "s4_akkorog",
        "name": "Akkorog",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 280% damage to the target and nearby enemies."
        ]
    },
    {
        "heroId": "s4_akkorog_costume_football",
        "name": "Akkorog C1",
        "effects": [
            "Rearranges the enemy positions randomly.",
            "Deals 260% damage to the target and nearby enemies.",
            "The caster gets +45% chance to dodge Special Skills for 3 turns. Each dodge gives +5% defense stack. (Max: 10)."
        ]
    },
    {
        "heroId": "christmas_albin",
        "name": "Albin",
        "effects": [
            "Deals 440% damage to all enemies.",
            "The duration of buffs is reset for all allies.",
            "Summons 2 Elf Minions for each ally with 10% HP and 10% attack inherited from the caster."
        ]
    },
    {
        "heroId": "castle_stag_alvar",
        "name": "Alvar",
        "effects": [
            "Lifts all cleansable status ailments from all allies and randomly distributes them on enemies.",
            "The duration of status ailments is reset for all enemies.",
            "Deals 350% damage to all enemies.",
            "All enemies reflect status effect buffs to a random character on the opposing team for 4 turns. (Only dispellable buffs are reflected.)"
        ]
    },
    {
        "heroId": "monster_hunter_amund",
        "name": "Amund",
        "effects": [
            "Deals 350% damage to all enemies.",
            "Summons a Bone Trap Fiend for all enemies. The Fiend damages the enemy with 45% attack every turn. The damage increases by 8% each turn, up to a maximum 93%.",
            "The Bone Trap Fiend absorbs healing and disappears when it has absorbed health equal to 45% of its owner's max health.",
            "All enemies can't get their status ailments cleansed or reallocated by Special Skill for as long as they have Bone Trap Fiends. (This effect also prevents cleansing and reallocating of itself.)"
        ]
    },
    {
        "heroId": "pirate_anne",
        "name": "Anne",
        "effects": [
            "Deals 550% damage to the target.",
            "If the target had more than 50% health before receiving damage, targets another enemy who had over 50% health before receiving damage from this Special Skill. If none of the other enemies had 50% health, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "If hit enemies use their Special Skill in the next 4 turns, they get -34% attack, -34% defense and -24% mana generation for 4 turns. Status effects are added at the end of a Special Skill. Status effects will not be added if the status effect is removed during Special Skill."
        ]
    },
    {
        "heroId": "valentines_anteros",
        "name": "Anteros",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 460% damage to the target.",
            "For 3 turns, the target is forced to cast Mindless Heal when at full mana.",
            "Mindless Heal: Recovers 20% HP health for the character on the opposing side with the lowest remaining HP."
        ]
    },
    {
        "heroId": "s4_aouda",
        "name": "Aouda",
        "effects": [
            "Deals 450% damage to the target.",
            "Deals 500 extra damage if the target has boosted health."
        ]
    },
    {
        "heroId": "s4_aouda_costume_lotus",
        "name": "Aouda C1",
        "effects": [
            "Deals 250% damage to the target.",
            "Deals 1140 extra damage if the target has boosted health."
        ]
    },
    {
        "heroId": "mimic_ascension_item_yellow",
        "name": "Ascension Mimic Holy",
        "effects": [
            "Deals 380% damage to the target and nearby enemies.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target and nearby enemies receive 668 Bleed damage over 4 turns.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "fox_ashen",
        "name": "Ashen",
        "effects": [
            "If the caster is recovering health:",
            "* Deals 300% damage to all enemies.",
            "* All enemies get lasting -40% attack. (This effect lasts until it is cleansed, replaced or removed.)",
            "Otherwise:",
            "* All allies get lasting 200 health regeneration per turn. (This effect lasts until it is cleansed, replaced or removed.)",
            "* All allies get lasting +40% attack. (This effect lasts until it is cleansed, replaced or removed.)"
        ]
    },
    {
        "heroId": "bard_astrid",
        "name": "Astrid",
        "effects": [
            "Recovers 50% health for all allies.",
            "Each defeated ally has 40% chance to get revived with 30% HP.",
            "All allies have a 20% chance to drop any received damage to 1 for 3 turns."
        ]
    },
    {
        "heroId": "moth_auricarc",
        "name": "Auricarc",
        "effects": [
            "Steals all Minions or a Mega Minion from the target.",
            "Steals 40% mana from the target and distributes it to allies.",
            "Deals 530% damage to the target.",
            "The target falls into Deep Sleep and receive +80% increased damage while in Deep Sleep. (This character in Deep Sleep cannot gain mana or attack. The character in Deep Sleep is woken once it takes 750 damage. This effect is uncleansable.)"
        ]
    },
    {
        "heroId": "holy_god_aurox",
        "name": "Aurox",
        "effects": [
            "Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "Deals 360% damage to the target and nearby enemies.",
            "The target and nearby enemies get -40% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills)",
            "Elemental Link gives all Holy allies +20% attack for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "holy_god_aviana",
        "name": "Aviana",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The target and nearby enemies are immune to new status effects buffs for 4 turns.",
            "The caster and nearby allies get +50% critical chance for 4 turns.",
            "Element Link gives all Holy allies +5% dodge chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "holy_god_bai_yeong",
        "name": "Bai Yeong",
        "effects": [
            "Deals 390% damage to the target.",
            "The target gets -75% accuracy for 2 turns.  Chance to miss also applies to offensive Special Skills.",
            "The target gets -75% decrease for any healing received for 2 turns.",
            "Element Link gives all Holy allies +30% defense against Special Skills for 4 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "lunar_new_year_baishu",
        "name": "Baishu",
        "effects": [
            "Steals the latest status effect buff from all enemies and randomly distributes them on allies.",
            "If no buffs were succesfully stolen, deal 200% damage to all enemies.",
            "Lifts the latest status ailment from all allies and randomly distributes them on enemies.",
            "If no ailments were succesfully distributed, deals 200% damage to all enemies."
        ]
    },
    {
        "heroId": "tales2_bragi",
        "name": "Bragi",
        "effects": [
            "Attacks the target with Frostfall Strike, dealing up to 2500 damage. Deals 40% more if the target is of the Fire element.  This Special Skill never misses its targets.",
            "Steals a random dispellable buff from the target to the caster.",
            "If the target has been inflicted with Frost, Freezing Power Hooks will be recast once on a random target. (If the target is defeated, the Special Skill will not be recast.)"
        ]
    },
    {
        "heroId": "slayer_caitlin",
        "name": "Caitlin",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 180% damage to all enemies.",
            "Deals additional 20% damage per removed status effect, up to 340% damage in total.",
            "Stack (Max: 10): The caster gets +6% mana generation",
            "Stack +2 (Max: 10): The caster recovers 30 HP each turn."
        ]
    },
    {
        "heroId": "slayer_caitlin_costume_crusader",
        "name": "Caitlin C1",
        "effects": [
            "Dispels buffs from all enemies.",
            "Deals 170% damage to all enemies.",
            "Deals additional 25% damage per removed status effect, up to 370% damage in total.",
            "Stack +2 (Max: 10): The caster gets +12% mana generation.",
            "Stack +3 (Max: 10): The caster recovers 45 HP each turn."
        ]
    },
    {
        "heroId": "holy_god_celidana",
        "name": "Celidana",
        "effects": [
            "Boosts health of the caster and nearby allies by 1100. Boosted health can exceed max HP.",
            "The caster and nearby allies get +50% defense as long as caster has boosted health. This effect can't be dispelled.",
            "The caster and nearby allies resist max health reduction for 5 turns.",
            "Element Link gives all Holy allies immunity to new Fiends for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "beauty_beast_cerissa",
        "name": "Cerissa",
        "effects": [
            "If the caster has 50 or more Humility:",
            "Boosts health of the caster and nearby allies by 1450. Boosted health can exceed max HP.",
            "Stack +2(Max: 10): All damage the caster and nearby allies receive is reduced by -8%.",
            "For the next 4 turns, this character recovers 750 boosted health to the caster and nearby allies each time any other ally casts their Special Skill. (Each character can trigger this effect once per turn.)",
            "The caster and nearby allies get +30% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Otherwise:",
            "Boosts health of the caster and nearby allies by 1100. Boosted health can exceed max HP.",
            "Stack (Max: 10): All damage the caster and nearby allies receive is reduced by -4%.",
            "For the next 4 turns, this character recovers 550 boosted health to the caster and nearby allies each time any other ally casts their Special Skill. (Each character can trigger this effect once per turn.)"
        ]
    },
    {
        "heroId": "ballerina_christine_daae",
        "name": "Christine Daae",
        "effects": [
            "Deals 355% damage to the target and nearby enemies.",
            "The target and nearby enemies dance to Ballad of Passion for 3 turns.",
            "Ballad of Passion:",
            "* -40% accuracy.",
            "* -40% defense.",
            "Additional Info:",
            "* Chance to miss also applies to offensive Special Skills.",
            "* All existing status effects will be removed when a dance status effect is added.",
            "* Dance gives immunity to new status effects. New dance status effects will replace this effect.",
            "* Dance effect cannot be dispelled. The effect is removed when the caster is defeated."
        ]
    },
    {
        "heroId": "s5_cleopatra",
        "name": "Cleopatra",
        "effects": [
            "Recovers 65% health for all allies.",
            "All allies are immune to new status ailments for 3 turns, and recover 205 health for each attempted status ailment."
        ]
    },
    {
        "heroId": "s5_cleopatra_costume_feline",
        "name": "Cleopatra C1",
        "effects": [
            "Recovers 60% health for all allies.",
            "All allies are immune to new status ailments for 3 turns, and recover 360 health for each attempted status ailment."
        ]
    },
    {
        "heroId": "musketeer_constance",
        "name": "Constance",
        "effects": [
            "Deals 230% damage to all enemies.",
            "All allies get +45% chance to dodge Special Skills for 3 turns. Each dodge damage the attacker for 100 damage."
        ]
    },
    {
        "heroId": "monster_hunter_dabria",
        "name": "Dabria",
        "effects": [
            "Each fallen ally has a 40% chance to get revived with 20% HP.",
            "All allies regenerating 894 HP over 4 turns, starting low an increasing every turn.",
            "All allies get +24% defense for 4 turns. The defense increases by 10% each turn up to +54%."
        ]
    },
    {
        "heroId": "holy_god_delilah",
        "name": "Delilah",
        "effects": [
            "Recovers 42% health for all allies.",
            "Summons a Guardian Minion for each ally with 20% HP and 20% attack inherited from the caster.",
            "Elemental Link gives +10% mana generation for all Holy allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "holy_god_delilah_costume_guardian",
        "name": "Delilah C1",
        "effects": [
            "Recovers 40% health for all allies.",
            "Summons a Guardian Minion for each ally with 25% HP and 30% attack inherited from the caster.",
            "Elemental Link gives +10% mana generation for all Holy allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "holy_god_devana",
        "name": "Devana",
        "effects": [
            "Deals 315% damage to the target and nearby enemies.",
            "Summons a Lynx Minion with 35% HP and 35% attack inherited from the caster.",
            "Before Lynx Minion hits target, it destroys all Minions from the target.",
            "Dispells buffs from the target and nearby enemies.",
            "Element Link givs all Holy allies small amount of mana at the end of the turn for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "circus_director_zuri",
        "name": "Director Zuri",
        "effects": [
            "Recovers 65% health for the ally with the lowest ramining HP. All other allies recover 42% health.",
            "Summons a Clown Minion for each ally with 15% HP and 22% attack inherited from the caster.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "circus_director_zuri_costume_clown",
        "name": "Director Zuri C1",
        "effects": [
            "Recovers 65% health for the ally with the lowest remaining HP. All other allies recover 45% health.",
            "Summons a Clown Minion for each ally with 20% HP and 30% attack, inherited from the caster.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "shadow_dolores",
        "name": "Dolores",
        "effects": [
            "For the next 4 turns, this character deals 220% damage and inflicts 15 Insanity to a random target and nearby enemies each time any other ally casts their Special Skill.",
            "Stack (Max: 10): All allies get +20% attack",
            "Stack (Max: 10): All allies get +5% mana generation",
            "Inflicts 50 Insanity to the caster."
        ]
    },
    {
        "heroId": "holy_god_drake_lee",
        "name": "Drake Fong",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The target and nearby enemies get -35% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.",
            "Element Link gives all Holy allies +5% attack and +5% defense for 6 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "holy_god_drake_lee_costume_serene",
        "name": "Drake Fong C1",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The target and nearby enemies get -50% accuracy for 3 turns. The effect duration is reset if the target is healed. Chance to miss also applies to offensive Special Skills.",
            "Element Link   gives all Holy  allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "castle_raven_eloise",
        "name": "Eloise",
        "effects": [
            "Destroys all Minions from all enemies and damages Mega Minions.",
            "Deals 270% damage to all enemies.",
            "If an enemy had Minions they will resist new Minions for 4 turns."
        ]
    },
    {
        "heroId": "mimic_emblem_yellow",
        "name": "Emblem Mimic Holy",
        "effects": [
            "Deals 480% damage to the target.",
            "If an enemy is defeated by the attack, the caster recovers +50% health and gains +33% mana.",
            "The target receives 387 Poison damage over 3 turns. This effect spreads to nearby enemies.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "tales1_ephyra",
        "name": "Ephyra",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Summons a Jellyfish Minion for each ally with +37% HP and +42% attack inherited from the caster.",
            "* Stack (Max 10): All allies get +5% inherited HP for new Minions they summon.",
            "2nd:",
            "* Replaces all Fiends on all allies with Jellyfish Minions.",
            "* Summons a Jellyfish Minion for each ally with +37% HP and +42% attack inherited from the caster.",
            "* Stack (Max 10): All allies get +5% inherited HP for new Minions they summon."
        ]
    },
    {
        "heroId": "tales1_ephyra_costume_reef",
        "name": "Ephyra C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Summons a Jellyfish Minion for each ally with +35% HP and +40% attack inherited from the caster.",
            "* Stack (Max 10): All allies get +4% inherited HP for new Minions they summon.",
            "2nd:",
            "* Replaces all Fiends on all allies with Jellyfish Minions.",
            "* Summons a Jellyfish Minion for each ally with 40% HP and 50% attack inherited from the caster.",
            "* Stack (Max 10): All allies get +7% inherited HP for new Minions they summon."
        ]
    },
    {
        "heroId": "journey_erlang_shen",
        "name": "Erlang Shen",
        "effects": [
            "Deals 500% damage to the target and minor damage to nearby enemies.",
            "The target and nearby enemies get -48% attack for 3 turns. If the effect is removed before the duration ends, the target with the effect suffers 514 damage."
        ]
    },
    {
        "heroId": "s5_eset",
        "name": "Eset",
        "effects": [
            "Deals 250% damage to the target. Deals extra damage is the target is Dark.",
            "Deals 180% damage to 5 random enemies. Deals extra damage if the target is Dark.",
            "Alters the power of all Holy shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "s5_eset_costume_goldensun",
        "name": "Eset C1",
        "effects": [
            "Deals 260% damage to the target. Deals extra damage if the target is Dark.",
            "Deals 250% damage to 5 random enemies. Deals extra damage if the target is Dark. (This effect targets the same enemy as the first hit if there are no other valid targets.)",
            "Alters the power of all Holy shields on the board. When an attacking Hero casts the special, the shields become enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack."
        ]
    },
    {
        "heroId": "mimic_training_hero_yellow",
        "name": "Experience Mimic Holy",
        "effects": [
            "Destroys all Minions from the target. This effect damages Mega Minions.",
            "Deals 530% damage to the target.",
            "If the target is defeated by the attack, the caster recovers +50% health and gains 33% mana.",
            "The Mimic chest closes for 2 turns. (The Mimic is immune to damage and new status ailments while closed.)"
        ]
    },
    {
        "heroId": "holy_god_faeona",
        "name": "Faeona",
        "effects": [
            "Recovers 46% health for all allies.",
            "All allies get +35% increase for any healing received for 5 turns.",
            "Stack +3 (Max 10): The caster gets +15% mana generation. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Element Link gives all Holy allies +20% critical chance for 6 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "circus_faline",
        "name": "Faline",
        "effects": [
            "Deals 330% damage to the target and nearby enemies.",
            "The hit enemy with the fastest base mana speed gets -64% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "christmas_florencia",
        "name": "Florencia",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 345% damage to all enemies.",
            "The enemy that had the highest remaining HP gets silence for 4 turns.",
            "Summons an Snowsprite Minion for each ally with 20% HP and 20% attack inherited from the caster."
        ]
    },
    {
        "heroId": "garrison_frank_fangs_brimwell",
        "name": "Frank 'Fangs' Brimwell",
        "effects": [
            "Deals 350% damage to the target and nearby enemies.",
            "If any ally has a Mega Minion before this Special Skill is cast, deals 365% damage to all enemies instead.",
            "Summnos a Recruit Guard Mega Minion with 20% HP and 100% attack inherited from the caster.",
            "The Recruit Guard Mega Minion gains more HP and attack when there are more unique Garrison Guard heroes on the team, up to 30% HP and 140% attack."
        ]
    },
    {
        "heroId": "mighty_pet_furdinand",
        "name": "Furdinand",
        "effects": [
            "Cleanses status ailments from all allies.",
            "All allies get +63% defense for 4 turns.",
            "All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "All allies reflect status ailments and negative stacks for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected)",
            "All allies regenerate 732 HP over 4 turns."
        ]
    },
    {
        "heroId": "moth_furgeant",
        "name": "Furgeant",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster has a 50% chance to drop any received damage to 1 for 4 turns.",
            "For the next 4 turns, this character deals 250% damage to a random enemy each time any other ally casts their Special Skill. The enemy hit falls into Deep Sleep and receive +80% increased damage while in Deep Sleep. (Each character can trigger this effect once per turn.)",
            "All allies get +25% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)"
        ]
    },
    {
        "heroId": "tales2_gandr",
        "name": "Gandr",
        "effects": [
            "Attacks all enemies with Firestorm Strike, dealing up to 2200 damage. Deals 40% more if the target is of the Nature element. This Special Skill never misses its targets.",
            "Heals all allies for 30% of damage dealt.",
            "All allies counterattack with 65% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "tales2_gandr_costume_guardian",
        "name": "Gandr C1",
        "effects": [
            "Attacks all enemies with Firestorm Strike, dealing up to 2500 damage. Deals 40% more damage if the target is of the Nature element. This Special Skill never misses its targets.",
            "Boosts all allies' health by 27% of damage dealt.",
            "All allies counterattack with 70% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "faun_gideon",
        "name": "Gideon",
        "effects": [
            "Safely cleanses status ailments from all allies. (Safe cleanse bypasses secondary effects, such as damage on removal, from removed status ailment. External effects such as passive skills and family effects can still activate.",
            "Enhanced Dodge: All allies get +100% chance to dodge Special Skill that deal damage. This effect lasts until the ally succesfully dodges once.",
            "After the Enhanced Dodge ends or is removed or replaced, the ally recovers 56% health and gets +60% defense for 6 turns."
        ]
    },
    {
        "heroId": "holy_god_gilda",
        "name": "Gilda",
        "effects": [
            "Deals 300% damage to the target.",
            "The attack chains through all the enemies who are adjacent to any hit enemy.",
            "All hit targets gets -35% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills.)",
            "Elemental Link gives all Holy allies +20% critical chance for 4 turns. This effect can’t be dispelled."
        ]
    },
    {
        "heroId": "holy_god_gilligan",
        "name": "Gilligan",
        "effects": [
            "Deals 410% damage to the target and nearby enemies.",
            "The attack has a 80% chance to bypass defensive buffs. This includes counterattacks.",
            "All allies get +45% defense for 4 turns.",
            "Element Link gives all Holy allies a +5% chance to dodge status ailments for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "slime_goldrip",
        "name": "Goldrip",
        "effects": [
            "Inflicts the target with Greed for 4 turns. Friendly effects from Special Skills only affect characters with Greed. (Greed prevents all other heroes in the same team from gaining friendly effects. This includes all buffs, healing and growth effects.)",
            "All enemies receive 988 Bleed damage over 4 turns.",
            "Deals 310% damage to all enemies."
        ]
    },
    {
        "heroId": "lunar_new_year_gongniu",
        "name": "Gongniu",
        "effects": [
            "All allies get +54% defense, and a further +5% increase every time they are hit during 3 turns, up to +79% defense.",
            "All allies recover 1000 health after 3 turns. If the effect is removed or replaced before the duration ends, recovers 1400 health instead.",
            "All allies gain 25% mana after 3 turns. If the effect is removed or replaced before the duration ends, gains 35% mana instead. (This effect cannot replaced with itself.)"
        ]
    },
    {
        "heroId": "slime_gooric",
        "name": "Gooric",
        "effects": [
            "All allies get +60% attack for 5 turns.",
            "All allies get +44% mana generation for 5 turns.",
            "All allies receive Slime Revive status effect for 2 turns. If defeated while Slime Revive is active, the character will be reborn as a Slime with:",
            "* 100% inherited health",
            "* 50% attack",
            "* 50% defense",
            "* Special Skill: Slime Slap (Deals 350% damage to the target).",
            "If the Slime is not defeated in 3 turns, it will be reborn as the character's original form inheriting the Slime's health and mana."
        ]
    },
    {
        "heroId": "elemental_grilka",
        "name": "Grilka",
        "effects": [
            "If there's 8 or more Holy shields on the board, then all effects cast in this Special Skill are undispellable.",
            "The caster get Taunt that prevents enemies from using Special Skils on the caster's allies for 5 turns.",
            "All allies regenerate 1300 boosted health over 5 turns. Boosted health can exceed max HP.",
            "All allies get +44% mana generation for 5 turns."
        ]
    },
    {
        "heroId": "guardian_elephant",
        "name": "Guardian Elephant",
        "effects": [
            "Deals 160% damage to 9 random enemies.",
            "Stack (Max: 10): Each hit gives its target -9% attack.",
            "Stack (Max: 10): Each hit gives its target -6% defense.",
            "All active buffs are undispellable for all allies for the remaining turns of the buff.",
            "All active status ailments are uncleansable for all enemies for the remaining turns of the status ailment."
        ]
    },
    {
        "heroId": "guardian_gazelle",
        "name": "Guardian Gazelle",
        "effects": [
            "Removes all cleansable and uncleansable status effects from all allies except the caster. Removes even status effects that are otherwise undispellable or uncleansable.",
            "The caster regenerates 612 HP over 4 turns.",
            "All allies except the caster dance the Dance of Spirits for 4 turns:",
            "* +100% attack.",
            "* Reduces all received damage by -50%.",
            "* If the caster is defeated, the dancer receives 84 damage and their mana is  reduced by 100%.",
            "* This effect can't be dispelled, but it gets removed if caster is defeated."
        ]
    },
    {
        "heroId": "guardian_gazelle_costume_bandalore",
        "name": "Guardian Gazelle C1",
        "effects": [
            "Removes all status effects from all allies except the caster. Removes even status effects that are otherwise undispellable or uncleansable.",
            "Recovers 48% health for all allies.",
            "All allies except the caster dance the Dance of Spirits for 4 turns:",
            "* +110% attack.",
            "* Reduces all received damage by -30%.",
            "* If the caster is defeated, the dancer receives 115 damage and their mana is reduced by 100%.",
            "* This effect can't be dispelled, but it gets removed if caster is defeated."
        ]
    },
    {
        "heroId": "guardian_owl_gentleman",
        "name": "Guardian Owl",
        "effects": [
            "Deals 300% damage to all enemies.",
            "The damage is increased by 60% per each defeated ally.",
            "The caster gets +46% defense for 5 turns.",
            "The caster regenerates 1015 HP over 5 turns."
        ]
    },
    {
        "heroId": "fleur_guillemette",
        "name": "Guillemette",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All allies are immune to new negative mana effects for 4 turns.",
            "For the next 4 turns, deals 135% damage to all enemies marked with Blood Lily at the end of each turn. (Each character can trigger this effect once per turn.)"
        ]
    },
    {
        "heroId": "knights_guinevere",
        "name": "Guinevere",
        "effects": [
            "Reduces the mana of all enemies by 20%.",
            "The caster and nearby allies regenerate 612 HP over 4 turns.",
            "The caster and nearby allies get +54% defense against Dark for 4 turns."
        ]
    },
    {
        "heroId": "knights_guinevere_costume_rider",
        "name": "Guinevere C1",
        "effects": [
            "Reduces the mana of the target and nearby enemies by 25%.",
            "Recovers 40% health for all allies.",
            "All allies reflect all status effects and 115% damage back to the attacker and block other negative effects from enemies Dark Special Skill for 4 turns. Status effects cast by characters Minions and Fiends on the same side cannot be reflected."
        ]
    },
    {
        "heroId": "shadow_gwendoline",
        "name": "Gwendoline",
        "effects": [
            "Cleanses status ailments from the caster and nearby allies.",
            "Recovers 70% health for the caster and nearby allies.",
            "The caster and nearby allies receive a moderate amount of mana over 6 turns.",
            "Casting this Special Skill inflicts 35 Insanity to nearby allies.",
            "The caster turns into Yag-Mago for 6 turns. This effect can't be dispelled. The Yag-Mago has 200% attack, 150% defense and the following Special Skill:",
            "Ethernal Bond (Very Fast)",
            "* Deals 300% damage to all enemies and inflicts 20 Insanity on them.",
            "* Revives a random defeated ally with 10% HP."
        ]
    },
    {
        "heroId": "construct_gwynn",
        "name": "Gwynn",
        "effects": [
            "Deals 350% damage to all enemies.",
            "Damage bypasses target's Minions.",
            "All enemies receive 258 Burn damage over 3 turns.",
            "All enemies take +50% increased damage from Burn and Poison status ailments for 3 turns."
        ]
    },
    {
        "heroId": "mighty_pet_hachiko",
        "name": "Hachiko",
        "effects": [
            "Deals 270% damage to all enemies.",
            "All allies counterattack with 80% of the damage received for 4 turns. The counterattack damage increases by +15% each turn, up to 125%.",
            "All allies get +50% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "fox_halcyon",
        "name": "Halcyon",
        "effects": [
            "Destroys all Minions from the target. This effect damage Mega Minions. (This effect applies to Mega Minions as well but instead of destroying, damage equal to 50% of the Mega Minion's max health is dealt to the Mega Minion.)",
            "Deals 325% damage to hit targets.",
            "If the target had Minions, attacks another enemy who has Minions. If none of the enemies have Minions, attacks a random enemy. Each enemy can only be attacked once. (This effect applies to Mega Minions as well but instead of destroying, damage equal to 50% of the Mega Minion's max health is dealt to the Mega Minion.)",
            "The caster gets lasting counterattack with 115% of the damage received. (This effect lasts until it is cleansed, replaced or removed.)"
        ]
    },
    {
        "heroId": "holy_god_hanitra",
        "name": "Hanitra",
        "effects": [
            "All allies get +45% chance to dodge Special SKills for 3 turns. Each dodge boosts max health by 450. Boosted health cand exceed max HP.",
            "All allies resist max health reduction for 3 turns.",
            "Element Link gives +10% increase for any healing received for all Holy allies for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "astral_dwarf_haumri",
        "name": "Haumri",
        "effects": [
            "Deals 600% damage to the target.",
            "If the target has buffs and is hit, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "Safely dispels 1 buff from all enemies. (The latest buffs are dispelled first.)",
            "Wither: All enemies get -350 defense."
        ]
    },
    {
        "heroId": "gargoyle_hilda",
        "name": "Hilda",
        "effects": [
            "Deals 435% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 708 Bleed damage over 4 turns. All allies steal 50% of dealt Bleed damage as boosted health.",
            "The target and nearby enemies are immune to new status effect buffs for 4 turns."
        ]
    },
    {
        "heroId": "s5_horus",
        "name": "Horus",
        "effects": [
            "Deals 250% damage to target and nearby enemies.",
            "Reduces max health of the target and nearby enemies by 450 over 3 turns. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original health. Any boosted health is reduced by an additional 150 per turn."
        ]
    },
    {
        "heroId": "s5_horus_costume_golden",
        "name": "Horus C1",
        "effects": [
            "Deals 230% damage to the target and nearby enemies.",
            "Reduces max health of the target and nearby enemies by 600 over 3 turns. The effect is stronger against targets with boosted health. Max health can't get lower than 30% of the original health. Any boosted health is reduced by an additional 200 per turn."
        ]
    },
    {
        "heroId": "astral_demon_ibelis",
        "name": "Ibelis",
        "effects": [
            "Deals 310% damage to  enemies on the edges of the enemy formation. If there is only one enemy, the damage is doubled.",
            "Reduces the mana of the enemies on the edges of the enemy formation by 20%. If there is only one enemy, the mana reduction is doubled.",
            "Enemies on the edges of the formation receive Resonance for 2 turns. Each turn, Resonance deals 716 damage to the afflicted enemies and 358 damage to nearby enemies."
        ]
    },
    {
        "heroId": "ninja_iga",
        "name": "Iga",
        "effects": [
            "1x Mana Charge",
            "* Summons a Kunai Fiend for the target. The Fiend damages the enemy with 150% attack every turn.",
            "* The Kunai Fiend absorbs healing and disappears when it has absorbed health equal to 45% of its owner's max health.",
            "* The Kunai Fiend explodes after 3 turns, dealing 1850 damage to its target.",
            "2x Mana Charge",
            "* Summons a Kunai Fiend for the target and nearby enemies. The Fiend damages the enemy with 175% attack every turn.",
            "* The Kunai Fiend absorbs healing and disappears when it has absorbed health equal to 50% of its owner's max health.",
            "* The Kunai Fiend explodes after 3 turns, dealing 2000 damage to its target.",
            "3x Mana Charge",
            "* Summons a Kunai Fiend for all enemies. The Fiend damages the enemy with 200% attack every turn.",
            "* The Kunai Fiend absorbs healing and disappears when it has absorbed health equal to 55% of its owner's max health.",
            "* The Kunai Fiend explodes after 3 turns, dealing 2250 damage to its target."
        ]
    },
    {
        "heroId": "forsaken_inanis",
        "name": "Inanis",
        "effects": [
            "Deals 330% damage to the target.",
            "Deals additional 330% damage to 2 random enemies.",
            "All hit targets get 15 Insanity every time they are hit.",
            "Stack (Max: 10): All damage the hit enemy receives is increased by 4%.",
            "Casting this Special Skill inflicts 35 Insanity on the caster."
        ]
    },
    {
        "heroId": "s2_fox_girl",
        "name": "Inari",
        "effects": [
            "Deals 180% damage to all enemies.",
            "All allies get +56% chance to dodge Special Skills for 3 turns. Each dodge summons a Sakura Fox minion",
            "Sakura Fox Minion has 8% HP and 30% attack inherited from the caster. It adds 7% mana to its owner at the end of each turn"
        ]
    },
    {
        "heroId": "s2_fox_girl_costume_white_kitsune",
        "name": "Inari C1",
        "effects": [
            "Deals 210% damage to all enemies.",
            "Summons a Sakura Fox Minion for the caster and nearby allies. Sakura Fox Minion has 12% HP and 30% attack inherited from the caster. The minion adds 7% mana to its owner at the end of each turn.",
            "All enemies get -40% accuracy for 3 turns. Chance to miss is also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "construct_ironheart",
        "name": "Iron-Heart",
        "effects": [
            "Deals 520% damage to the target.",
            "Deals 520% damage to a random different enemy.",
            "If an enemy is defeated by the attack, the caster recovers +35% health and gains +35% mana.",
            "All allies counterattack with +110% of the damage received for 4 turns."
        ]
    },
    {
        "heroId": "elemental_ironmaw",
        "name": "Ironmaw",
        "effects": [
            "Deals 500% damage to the target and all Dark enemies.",
            "All enemies get -39% mana generation for 4 turns. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "Deals extra damage agianst Dark."
        ]
    },
    {
        "heroId": "holy_god_ithar",
        "name": "Ithar",
        "effects": [
            "Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "Steals 35% mana from the target and distributes it to allies.",
            "All allies get +40% attack for 2 turns.",
            "Element Link gives +10% mana generation for all Holy allies for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "masquerade_jana",
        "name": "Jana",
        "effects": [
            "Deals 470% damage to the target.",
            "The target gets -44% defense for 4 turns.",
            "Deals 470% damage to a random different enemy. This effect targets the same enemy as the first hit if there are no other valid targets.",
            "The target of the second hit gets -44% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "easter_jasper",
        "name": "Jasper",
        "effects": [
            "All allies regenerate 1428 HP over 6 turns.",
            "All allies get +50% attack for 6 turns.",
            "All allies get +50% critical chance for 6 turns.",
            "The caster gets -5% mana generation for 4 turns. This effect can't be  cleansed."
        ]
    },
    {
        "heroId": "easter_jasper_costume_fisherman",
        "name": "Jasper C1",
        "effects": [
            "All allies regenerate 1450 HP over 5 turns.",
            "All allies get +60% attack for 5 turns.",
            "All allies get +60% critical chance for 5 turns.",
            "The caster gets -5% mana generation for 5 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "elemental_jequn",
        "name": "Jequn",
        "effects": [
            "Deals 200% damage to all enemies.",
            "All Dark enemies get -34% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills.)",
            "All Ice enemies get -34% defense for 3 turns.",
            "All Nature enemies get -34% mana generation for 3 turns.",
            "All Fire enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "elemental_jequn_costume_gilded",
        "name": "Jequn C1",
        "effects": [
            "Deals 210% damage to all enemies.",
            "All Dark enemies get -39% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills.)",
            "All Ice enemies get -39% defense for 3 turns.",
            "All Nature enemies get -39% mana generation for 3 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "All Fire enemies get -39% attack for 3 turns."
        ]
    },
    {
        "heroId": "oriental_enchanted_monk",
        "name": "Joon",
        "effects": [
            "Deals 468% damage to the target.",
            "The target gets -40% accuracy for 6 turns. (Chance to miss also applies to offensive special skills.)"
        ]
    },
    {
        "heroId": "oriental_enchanted_monk_costume_tiger",
        "name": "Joon C1",
        "effects": [
            "Deals 488% damage to the target.",
            "The target gets -35% accuracy for 4 turns. (Chance to miss also applies to offensive special skills.)"
        ]
    },
    {
        "heroId": "oriental_enchanted_monk_costume_stoneguard",
        "name": "Joon C2",
        "effects": [
            "Deals 260% damage to target and nearby enemies.",
            "The target and nearby enemies receive 195 Burn damage over 3 turns.",
            "The target and nearby enemies get -35% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "oriental_enchanted_monk_costume_cute",
        "name": "Joon Toon",
        "effects": [
            "Deals 548% damage to the target.",
            "The target gets -35% accuracy for 6 turns.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_enchanted_monk_costume_glass",
        "name": "Joon Glass",
        "effects": [
            "Deals 558% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "The target gets -38% accuracy for 6 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "masquerade_jove",
        "name": "Jove",
        "effects": [
            "Deals 490% damage to the target, and minor damage to all other enemies.",
            "All enemies get -65% decrease for any healing received for 3 turns.",
            "All enemies get -75% less mana from Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "exalted_female_statue",
        "name": "Justice",
        "effects": [
            "Deals 285% damage to all enemies.",
            "All enemies get -40% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "exalted_female_statue_costume_sungoddess",
        "name": "Justice C1",
        "effects": [
            "Deals 250% damage to all enemies.",
            "The damage is increased by 50% per each defeated ally.",
            "The caster gets +24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "exalted_female_statue_costume_thorns",
        "name": "Justice C2",
        "effects": [
            "Deals 300% damage to all enemies.",
            "The damage is increased by 45% per each dead enemy.",
            "All enemies get -40% accuracy for 3 turns. (Chance to miss also applies to offensive Special Skills)"
        ]
    },
    {
        "heroId": "exalted_female_statue_costume_cute",
        "name": "Justice Toon",
        "effects": [
            "Deals 435% damage to all enemies.",
            "All enemies get -30% accuracy for 4 turns. (Chance to miss also applies to offensive Special Skills.)",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "exalted_female_statue_costume_glass",
        "name": "Justice Glass",
        "effects": [
            "Deals 445% damage to all enemies.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "All enemies get -34% accuracy for 4 turns. (Chance to miss applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "slime_justico",
        "name": "Justico",
        "effects": [
            "Deals 350% damage to all enemies.",
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster receive Slime Revive status effect for 4 turns. This effect can't be dispelled.",
            "If defeated while Slime Revive is active, the caster will be reborn as a Slime."
        ]
    },
    {
        "heroId": "holy_god_kara",
        "name": "Kara",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
            "The caster gets +74% defense against special skills for 4 turns.",
            "All allies except the caster get +34% attack fo 4 turns.",
            "Element Link gives all Holy allies +10% defense for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "kalevala_kullervo",
        "name": "Kullervo",
        "effects": [
            "Deal 300% damage to the target.",
            "Deals 470% damage to a random different enemy.",
            "Enemies hit automatically cast Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "kalevala_kullervo_costume_battle_scarred",
        "name": "Kullervo C1",
        "effects": [
            "Deals 450% damage to the target.",
            "Deals 320% damage to a random different enemy.",
            "Enemies hit automatically cast Mindless attack on a random ally when mana is full at the start of the turn during 4 turns. Against Dark characters, this status effect becomes uncleansable and lasts 1 turn longer."
        ]
    },
    {
        "heroId": "ninja_kushanku",
        "name": "Kushanku",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana",
            "1x Mana Charge",
            "* Deals 280% damage to the target.",
            "* The caster goes into hiding for 2 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -20%.",
            "* When the caster comes out of hiding, they deal 227 damage to all enemies who use Special Skills while the caster was hiding.",
            "* The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 2 turns.",
            "2x Mana Charge",
            "* Deals 370% damage to the target.",
            "* The caster goes into hiding for 3 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -30%.",
            "* When the caster comes out of hiding they deal 316 damage to all enemies who use Special Skills while the caster was hiding.",
            "* The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 3 turns.",
            "3x Mana Charge",
            "* Deals 450% damage to the target.",
            "* The caster goes into hiding for 4 turns.",
            "* While hidden, the caster can't receive new status effects or stacks, and all received damage is reduced by -40%.",
            "* When the caster comes out of hiding they deal 348 damage to all enemies who use Special Skills while the caster was hiding.",
            "* The target automatically casts Mindless Attack on a random ally when mana is full at the start of a turn during 4 turns."
        ]
    },
    {
        "heroId": "slime_labblub",
        "name": "Labblub",
        "effects": [
            "Destroys all Minions from all enemies and damages Mega Minions.",
            "Deals 350% damage to all enemies.",
            "All allies get 5% mana for each destroyed Minion.",
            "All allies are immune to new negative mana effects for 4 turns, and their mana is increased by 20% for each resisted effect.",
            "All enemies receive Devouring Goo for 4 turns. Removes all dispellable buffs and Growth effects and deals 200 damage each turn. If effects are removed, 50 more damage is dealt for each removed effect."
        ]
    },
    {
        "heroId": "magic_carpet_lando",
        "name": "Lando",
        "effects": [
            "Safely cleanses status ailments for all allies.",
            "Deals 450% damage to all enemies.",
            "All allies deal 300-700 damage to a random enemy after 3 turns, based on the damage allies had taken while this effect was active. This effect is undispellable. (Maximum effect is achieved upon taking 50% of max health in damage.)"
        ]
    },
    {
        "heroId": "lunar_new_year_laohu",
        "name": "Laohu",
        "effects": [
            "Deals 605% damage to the target.",
            "Boosts the caster's health by 50% of damage dealt."
        ]
    },
    {
        "heroId": "lunar_new_year_laohu_costume_golden",
        "name": "Laohu C1",
        "effects": [
            "Deals 630% damage to the target.",
            "Boosts the caster's health by 45% of damage dealt.",
            "All allies get +50% attack as long as the caster has boosted health. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "champions_lazara",
        "name": "Lazara",
        "effects": [
            "Safely cleanses status ailments from all allies.",
            "Deals 325% damage to all enemies.",
            "All enemies get -50% decrease for any healing received for 4 turns.",
            "All enemies can't get their status ailments cleansed or reallocated by Special Skills for 4 turns. (This effect also prevents cleansing and reallocating of itself.)"
        ]
    },
    {
        "heroId": "astral_lemonwood",
        "name": "Lemonwood",
        "effects": [
            "This Special Skill never misses its targets.",
            "Deals 380% damage to the target.",
            "Reduces the mana of the target by -20%.",
            "If the target has more than 30% mana after mana reduction, the Special Skill repeats, targeting a random enemy. The damage is reduced on each consecutive hit."
        ]
    },
    {
        "heroId": "oriental_warrior_king",
        "name": "Leonidas",
        "effects": [
            "Deals 415% damage to the target.",
            "Reduces the mana of the target by 40%.",
            "Heals the caster for 75% of damage dealt."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_roman",
        "name": "Leonidas C1",
        "effects": [
            "Deals 390% damage to the target and minor damage to nearby enemies",
            "The target and nearby enemies get -54% defense against Holy for 4 turns.",
            "All Dark enemies get -34% attack for 4 turns"
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_mage",
        "name": "Leonidas C2",
        "effects": [
            "Deals 240% damage to all enemies.",
            "Reduces the mana of all enemies by 10%.",
            "All enemies get -34% defense for 3 turns. Against Dark characters, this status effect becomes uncleansable lasts 2 turn longer."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_cute",
        "name": "Leonidas Toon",
        "effects": [
            "Deals 565% damage to the target.",
            "Reduces the mana of the target by 35%.",
            "Heals the caster for 65% of damage dealt.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_glass",
        "name": "Leonidas Glass",
        "effects": [
            "Deals 575% damage to the target.",
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Reduces the mana of the target by -38%.",
            "Heals the caster for 70% of damage dealt."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_stylish",
        "name": "Leonidas Stylish",
        "effects": [
            "Deals 585% damage to the target.",
            "If the target has less than 50% health remaining, deals 730% damage instead.",
            "Reduces the mana of the target by 39%.",
            "Heals the caster for 72% of damage dealt."
        ]
    },
    {
        "heroId": "owl_livia",
        "name": "Livia",
        "effects": [
            "Lifts all cleansable status ailments from the caster and nearby allies and randomly distributes them on enemies.",
            "The caster and nearby allies get Moonrise Ward for 4 turns, that reduces incoming Special Skill damage by -1320. Reduces damage by additional 30% when attacker is of the  Holy element.",
            "The caster and nearby allies regenerate 1800 HP over 4 turns.",
            "The caster and nearby allies reflect status ailments and negative stacks for 4 turns. (Status effects cast by characters, Minions and Fiends on the same side cannot be reflected.)"
        ]
    },
    {
        "heroId": "bard_lyria",
        "name": "Lyria",
        "effects": [
            "Deals 475% damage to the target.",
            "The attack bypasses defensive bufs. (This includes counterattacks.)",
            "The caster gets additional +40% power for the next Special Skill they cast. The additional power increases +40% each turn, up to a maximum of +160% in total.",
            "The caster gets +45% chance to dodge Special Skills that deal damage for 2 turns."
        ]
    },
    {
        "heroId": "monster_hunter_malin",
        "name": "Malin",
        "effects": [
            "Deals 325% damage to all enemies.",
            "All enemies receive 364 Bleed damage over 4 turns. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "All enemies get -75% decrease for any healing for 4 turns. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "All enemies get -35% accuracy for 4 turns. Chance to miss applies to offensive Special Skills. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "holy_god_malosi",
        "name": "Malosi",
        "effects": [
            "Deals 400% damage to the target.",
            "The target cannot cast any new status effects on enemies or allies for 3 turns. This includes stacks. This only includes status effects cast with Special Skill.",
            "Element Link gives all Holy allies +10% critical chance for 6 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "halloween_matilda",
        "name": "Matilda",
        "effects": [
            "All enemies receive 330 Poison damage over 3 turns.",
            "Summons a Muffin Fiend for all enemies. The Fiend damages the enemy with 38% attack every turn.",
            "The Muffin Fiend absorbs healing and disappears when it has absorbed health equal to 35% of its target's max health.",
            "Each hit from the Muffin Fiend has the following effects:",
            "* The target takes +50% increased damage from status ailments for 3 turns.",
            "* There is a 25% chance to refesh the duration of the status ailment with the least turns remaining."
        ]
    },
    {
        "heroId": "holy_god_may",
        "name": "May",
        "effects": [
            "Growth: All allies get 150 attack and 150 defense.",
            "Summon a Carrot Minion for each ally with 25% HP inherited from the caster.",
            "When summoned, the Carrot Minion gives +20% mana generation for its owner for as long as the owner has Carrot Minions. This effect can't be dispelled. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "Elemental Link gives all Holy allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ballerina_meg_giry",
        "name": "Meg Giry",
        "effects": [
            "Recovers 60% health for all allies.",
            "Lifts the latest cleansable status ailment from all allies and randomly distributes them on enemies.",
            "All active status ailments are uncleansable for all enemies for the remaining turns of the status ailment.",
            "All allies get +60% defense for 4 turns."
        ]
    },
    {
        "heroId": "astral_melodymuse",
        "name": "Melodymuse",
        "effects": [
            "Boosts health of all allies by 710. Boosted health can exceed max HP.",
            "All allies are immune to new status ailments for 4 turns."
        ]
    },
    {
        "heroId": "s5_meresankh",
        "name": "Meresankh",
        "effects": [
            "Deals 130% damage to all enemies.",
            "The more mana the enemies have,the more damage they will receive,up to 250%",
            "Reduces the mana of all enemies by 20%.",
            "All enemies get -14% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_meresankh_costume_disco",
        "name": "Meresankh C1",
        "effects": [
            "Deals 180% damage to all enemies.",
            "The more mana the enemies have, the more damage they will receive, up to 300%.",
            "Reduces the mana of all enemies by 15%.",
            "All enemies get -10% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "ninja_mica",
        "name": "Mica",
        "effects": [
            "1x Mana Charge",
            "* All allies become Soul Connected for 2 turns. Soul Connected allies share received damage.",
            "* All allies get +25% defense for 2 turns",
            "* All allies get +24% mana generation for 2 turns",
            "2x Mana Charge",
            "* All allies become Soul Connected for 4 turns. Soul Connected allies share received damage.",
            "* All allies get +50% defense for 4 turns",
            "* All allies get +33% mana generation for 4 turns",
            "3x Mana Charge",
            "* All allies become Soul Connected for 5 turns. Soul Connected allies share received damage.",
            "* All allies get +73% defense for 5 turns",
            "* All allies get +38% mana generation for 5 turns"
        ]
    },
    {
        "heroId": "astral_moonbell",
        "name": "Moonbell",
        "effects": [
            "Summons an Astral Sphere Minion for each ally with 35% HP and 39% attack inherited from the caster.",
            "When summoned, the Astral Sphere Minion gives +33% mana generation for its owner for as long as the owner has Astral Sphere Minions. This effect can't be dispelled. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "All allies reduce all received damage by -43% for 4 turns.",
            "All allies' normal attacks and Special Skills deal +100% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "magic_motega",
        "name": "Motega",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Summons a Butterfly Minion for each ally with 14% HP and 20% attack inherited from the caster.",
            "* Each hit from a Butterfly Minion Gives the target the following status ailment:",
            "*** +20% increase to all received damage for 3 turns.",
            "2x Mana Charge:",
            "* Summons a Butterfly Fiend for all enemies. The Fiend damages the enemy with 43% attack every turn.",
            "* The Butterfly Fiend absorbs healing and disappears when it has absorbed health equal to 50% of it's owner's max health.",
            "* When summoned, the Butterfly Fiend gives -50% accuracy for its target for as long as the owner has Butterfly Fiends. This effect can't be cleansed. Chance to miss also applies to offensive Special Skills."
        ]
    },
    {
        "heroId": "kalevala_mother_lemminkainen",
        "name": "Mother Lemminkainen",
        "effects": [
            "Each defeated ally has a 60% chance to get revived with 20% HP.",
            "All allies regenerate 1080 boosted health over 4 turn. Boosted health can exceed max HP.",
            "All enemies get -50% defense against Special Skills for 4 turns. Against Dark characters, this status effect becomes uncleansable and lasts 2 turns longer."
        ]
    },
    {
        "heroId": "tales2_motsognir",
        "name": "Motsognir",
        "effects": [
            "All allies get a Frostfall Ward for 4 turns, that reduces incoming Special Skill damage up to -1400. Reduces damage by additional 30% when the attacker is of Fire element.",
            "All allies bypass defensive buffs with their attacks for 4 turns. (Defensive buffs include counterattacks.)",
            "All allies get +45% attack, and a further 20% increase every time they are hit during 4 turns, up to +145% attack.",
            "All allies get +55% critical chance for 4 turns."
        ]
    },
    {
        "heroId": "holy_god_musashi",
        "name": "Musashi",
        "effects": [
            "Deals 362% damage to the target and minor damage to nearby enemies",
            "The caster heals 50% of dealt normal damage for 5 turns.",
            "Elemental Link gives all Holy allies +15% attack and +15% defense for 6 turns. This effect can't be displelled."
        ]
    },
    {
        "heroId": "holy_god_musashi_costume_prisoner",
        "name": "Musashi C1",
        "effects": [
            "Deals 350% damage to the target and minor damage to nearby enemies.",
            "The caster heals 75% of dealt normal damage for 5 turns.",
            "Elemental Link gives all Holy allies +15% attack and +15% defense for 6 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "holy_god_neith",
        "name": "Neith",
        "effects": [
            "Deals 200% damage to all enemies",
            "Reduces the mana of all enemies by 20%.",
            "All enemies get -35% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills",
            "Elemental link gives +4% mana generation for all Holy allies for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "styx_nemesis",
        "name": "Nemesis",
        "effects": [
            "Special Skill has a different effect when charged with 100% / 200% / 300% mana:",
            "1x Mana Charge:",
            "* Deals 500% damage to the target.",
            "* For 3 turns each time an enemy's mana is increased by a Special Skill, status effect, level property, passive skill, family effect or minion, they receive 250 damage.",
            "2x Mana Charge:",
            "* Deals 640% damage to the target.",
            "* All enemies are immune to new status effect buffs. Attempted mana generation buffs will be replaced by -34% mana generation for 3 turns.",
            "3x Mana Charge:",
            "* Deals 680% damage to the target.",
            "* All enemies are immune to new status effect buffs. Attempted mana generation buffs will be replaced by -34% mana generation for 3 turns.",
            "* For 3 turns each time an enemy's mana is increased by a Special Skill, status effect, level property, passive skill, family effect or minion, they receive 250 damage."
        ]
    },
    {
        "heroId": "beowulf_nithgaest",
        "name": "Nithgaest",
        "effects": [
            "Deals 335% damage to the target and nearby enemies.",
            "The caster and nearby allies counterattack with 150% of the damage received for 4 turns.",
            "Caster and nearby allies get Burning Touch for 4 turns. (Burning Touch: Each time the owner of this status effect counterattacks an enemy, the attacker receives 492 Burn damage over 4 turns.)"
        ]
    },
    {
        "heroId": "s3_norns",
        "name": "Norns",
        "effects": [
            "Deals 280% damage to the target and nearby enemies.",
            "The target and nearby enemies become weak against the element they are strong against for 5 turns. They stay weak against the element they are normally weak against."
        ]
    },
    {
        "heroId": "s3_norns_costume_puppeteers",
        "name": "Norns C1",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "The target and nearby enemies become weak against the element they are strong against for 6 turns. They stay weak against the element they are normally weak against."
        ]
    },
    {
        "heroId": "s3_odin",
        "name": "Odin",
        "effects": [
            "Deals 100% damage to all enemies.",
            "Deals additional 18% damage per each Holy shield on the board, up to 244% damage in total",
            "All allies get +8% mana generation, and a further 2% increase per each Holy shield on the board for 3 turns, up to +28% mana generation"
        ]
    },
    {
        "heroId": "s3_odin_costume_champion",
        "name": "Odin C1",
        "effects": [
            "Deals 90% damage to all enemies.",
            "Deals additional 25% damage per each Holy shield on the board, up to 290% damage in total",
            "All allies get +8% mana generation, and a further 3% increase per each Holy shield on the board for 3 turns, up to +38% mana generation"
        ]
    },
    {
        "heroId": "bard_ogima",
        "name": "Ogima",
        "effects": [
            "Destroys all Minions for all enemies and damages Mega Minions.",
            "Deals 275% damage to all enemies.",
            "Deals additional 30% damage to all enemies for each Minion destroyed.",
            "Stack (Max: 10): All enemies get -7% mana generation for each destroyed Minion."
        ]
    },
    {
        "heroId": "holy_god_onatel",
        "name": "Onatel",
        "effects": [
            "Deals 330% damage to the target and nearby enemies",
            "The caster steals generated mana of the target and the nearby enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be cleansed, but gets removed if the caster dies.",
            "Element Link recovers 4% health for all Holy allies for 6 turns. This effect can't be cleansed"
        ]
    },
    {
        "heroId": "vegetable_onwyn",
        "name": "Onwyn",
        "effects": [
            "Deals 375% damage to the target and 5 random enemies.",
            "Summons a Seedling Fiend to each hit enemy. (The Seeding Fiend evolves into a Sprout Fiend after 2 turns. The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* Seedling Fiend: 50% attack, 20% health.",
            "* Sprout Fiend: 75% attack, 30% health.",
            "* Blossom Mega Fiend: 250% attack, 60% health. A Fiend damages their target every turn. A Fiend disappears after absorbing healing. Amount of healing required depends on the target's max health. The Evolution of the Fiends is delayed with 1 turn each time they are absorb healing.)",
            "All hit target gets -49% accuracy for 5 turns. (Chance to miss also applies to offensive Special Skills.)"
        ]
    },
    {
        "heroId": "s5_papyros",
        "name": "Papyros",
        "effects": [
            "Summons a Sand Golem Minion for each ally with 14% HP and 18% attack inherited from the caster.",
            "Each time the Sand Golem Minion is attacked by normal attacks or Special Skills, the attacker receives 294 Sand damage over 3 turns.",
            "All allies get +30% defense for 3 turns."
        ]
    },
    {
        "heroId": "s5_papyros_costume_colossus",
        "name": "Papyros C1",
        "effects": [
            "Summons a Sand Golem Minion for each ally with 20% HP and 25% attack inherited from the caster.",
            "Each time the Sand Golem Minion is attacked by normal attacks or Special Skills, the attacker receives 411 Sand damage over 3 turns.",
            "All allies get +40% defense for 3 turns."
        ]
    },
    {
        "heroId": "gargoyle_penolite",
        "name": "Penolite",
        "effects": [
            "Deals 245% damage to all enemies.",
            "Deals 490% damage against Minion and Fiend Summoners.",
            "All enemies get -50% decrease for any healing received for 4 turns."
        ]
    },
    {
        "heroId": "tales1_persa",
        "name": "Persa",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "* Deals 455% damage to the target.",
            "* The target receives Spreading Corrosive Poison for 4 turns. The Spreading Corrosive Poison deals 290 Poison damage and lowers the target's mana generation by -15% each turn. Deals extra damage against heroes with Minions or Mega Minions. This effect spreads to nearby enemies. (Affects only mana gained from matching tiles or mana gained by the defense team at the of their turn.)",
            "2nd:",
            "* Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "* Deals 490% damage to the target.",
            "* The target receives Spreading Corrosive Poison for 4 turns. The Spreading Corrosive Poison deals 328 Poison damage and lowers the target's mana generation by -20% each turn. Deals extra damage against heroes with Minions or Mega Minions. This effect spreads to nearby enemies. (Affects only mana gained from matching tiles or mana gained by the defense team at the of their turn.)"
        ]
    },
    {
        "heroId": "tales1_persa_costume_jellyfish_noble",
        "name": "Persa C1",
        "effects": [
            "Special Skill need consecutive uses to reach full power, the following order:",
            "1st:",
            "* Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "* Deals 450% damage to the target.",
            "* The target receives Spreading Corrosive Poison for 4 turns. The Spreading Corrosive Poison deals 297 Poison damage and lowers the target's mana generation by -10% each turn. Deals extra damage against heroes with Minions or Mega Minions. This effect spreads to nearby enemies. (Affects only mana gained from matching tiles or mana gained by the defense team at the of their turn.)",
            "2nd:",
            "* Steals all dispellable buffs from the target and randomly distributes them on allies.",
            "* Deals 515% damage to the target.",
            "* The target receives Spreading Corrosive Poison for 4 turns. The Spreading Corrosive Poison deals 549 Poison damage and lowers the target's mana generation by -25% each turn. Deals extra damage against heroes with Minions or Mega Minions. This effect spreads to nearby enemies.(Affects only mana gained from matching tiles or mana gained by the defense team at the of their turn.)"
        ]
    },
    {
        "heroId": "owl_pertinax",
        "name": "Pertinax",
        "effects": [
            "Attacks the target and nearby enemies with Moonrise Strike, dealing up to 1620 damage. Deals 40% more damage if the target of the Holy element. This Special Skill Never misses its targets",
            "Summon Owlkyrie Minion for the caster and nearby allies. The minion inherits 25% HP and 45% attack from the caster.",
            "If the Owlkyrie Minion is defeated, Full Removal is cast on the attacker (Full Removal removes all status effects, stack, Growth and Wither effects. Removes even status effects and stacks that are otherwise undispellable or uncleansable.).",
            "After the Full Removal is cast, the attacker shifts into Owlhalla Ghost form for 3 turns.",
            "While in Owlhalla the target receives 360 damage each turn. (While in Ghost form, Character can't gain mana and can't be healed by Special Skills, but is immune to normal attack, Special Skill attacks, damage dealing passives, status effects and stacks. Immune to new Growth and Wither effects. Can't be cast if there is only one enemy left in the battle.)"
        ]
    },
    {
        "heroId": "faun_philomena",
        "name": "Philomena",
        "effects": [
            "Deals 500% damage to the target and minor damage to nearby enemies.",
            "Enhanced Defense Ailment: The target and nearby enemies get -50% defense against Special Skills. This effect lasts until the enemy takes damage from a Special Skill once.",
            "After the Enhanced Defense Ailments ends or is removed or replaced, the enemy falls asleep and receives +70% increased damage while sleeping. (A sleeping character cannot gain mana or attack. The sleeping target is woken once it takes damage. This excludes damage from Minions, Fiends, Mega Minions and Mega Fiends. This effect is uncleansable.)"
        ]
    },
    {
        "heroId": "s2_poseidon",
        "name": "Poseidon",
        "effects": [
            "Deals 450% damage to the target.",
            "All allies resist new negative mana effects for 3 turns.",
            "All allies resist new effects that block usage of Special Skills for 3 turns."
        ]
    },
    {
        "heroId": "s2_poseidon_costume_slayer",
        "name": "Poseidon C1",
        "effects": [
            "Deals 480% damage to the target.",
            "All allies are immune to new status ailments for 3 turns."
        ]
    },
    {
        "heroId": "s4_professor_lidenbrock",
        "name": "Prof. Lidenbrock",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Boosts health of all allies by 200. Boosted health can exceed max HP.",
            "All allies regenerate 600 boosted health over 4 turns. Boosted health can exceed max HP. The effect duration is reset if the target receives status ailments."
        ]
    },
    {
        "heroId": "s4_professor_lidenbrock_costume_jeweler",
        "name": "Prof. Lidenbrock C1",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Boosts health of all allies by 500. Boosted health can exceed max HP.",
            "All allies regenerate 400 boosted health over 4 turns. Boosted health can exceed max HP. The effect duration is reset if the target receives status ailments."
        ]
    },
    {
        "heroId": "journey_queen_guowang",
        "name": "Queen Guowang",
        "effects": [
            "Deals 330% damage to all enemies.",
            "All allies get 10% mana every time an enemy uses their Special Skill during 4 turns. (Mana is received at the end of a Special Skill. Mana will not be received if this status effect is removed during a Special Skill.)",
            "The caster gets Vengeance for 4 turns. If Vengeance is dispelled by an enemy's Special Skill, all enemies receive 525 damage."
        ]
    },
    {
        "heroId": "sand_queen",
        "name": "Rana",
        "effects": [
            "Deals 185% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 402 Sand damage over 3 turns.",
            "The target and nearby enemies get -75% increase for any healing received for 2 turns. This effect can't be cleansed.",
            "Cleanses status ailments from the caster."
        ]
    },
    {
        "heroId": "sand_queen_costume_surfer",
        "name": "Rana C1",
        "effects": [
            "Deals 185% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 708 Water damage over 4 turns",
            "The target and nearby enemies get -75% decrease for any healing received for 4 turns. This effect can't be cleansed.",
            "Cleanses status ailments from the caster and nearby allies."
        ]
    },
    {
        "heroId": "holy_god_ranvir",
        "name": "Ranvir",
        "effects": [
            "Deals 265% damage to the target.",
            "All allies get +195% attack and -35% accuracy that only applies when the enemy has more health than the attacker. The effect lasts for 5 turns.",
            "Element Link gives all Holy allies +46% defense against Dark for 4 turns. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "goblin_ratgrub",
        "name": "Ratgrub",
        "effects": [
            "Summons a Rat Princess Mega Minion with 40% HP and 160% attack inherited from the caster.",
            "When summoned, the Rat Princess Mega Minion gives its owner the ability to deal 250% damage to all enemies each time any other ally casts their Special Skill. (Each character can trigger this effect once per turn.)"
        ]
    },
    {
        "heroId": "bard_rhys",
        "name": "Rhys",
        "effects": [
            "Boost health of all allies by 320. Boosted health can exceed max HP.",
            "Alters the power of all Holy shields on the board. When an attacking Hero casts the special, the shields become enhanced and give +37% more mana. When a defending Hero casts the special, the shields become weakened and give -30% less mana.",
            "All allies get +34% attack and a further 3% increase per each Holy shield on the board for 3 turns, up to +70% attack.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "sand_roc",
        "name": "Roc",
        "effects": [
            "All enemies receive 324 Sand damage over 3 turns.",
            "All enemies get -50% decrease for any healing received for 2 turns. This effect can't be cleansed.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "sand_roc_costume_juice",
        "name": "Roc C1",
        "effects": [
            "All enemies receive 800 Sand damage over 4 turns.",
            "All enemies get -44% defense for 3 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "garrison_rosalind",
        "name": "Rosalind",
        "effects": [
            "Recovers 30% health for all allies.",
            "Stack (Max 10): All damage all allies receive is reduced by -5%.",
            "Summnos a Shiled Guard Mega Minion with 65% HP and 180% attack inherited from the caster.",
            "The Shield Guard Mega Minion safely cleanses the latest cleansable status ailment from all allies each turn. (Safe cleanse bypasses secondary effects, such as damage on remova, from the remove status ailment. External effects such as passive skills and family effects can still activate."
        ]
    },
    {
        "heroId": "outlaw_ruan_xiaoqi",
        "name": "Ruan Xiaoqi",
        "effects": [
            "This Special Skill has a chance to deal Critical hits. (The chance of dealing a Critical hit is based on Hero's overall critical chance when the damage is dealt. Critical hits caused by this Special Skill deal 50% more damage. Critical hits can reduces enemies' max health on PVP battles. This effect is stronger against boosted health.)",
            "Dispels 2 buffs from all enemies. (The latest buffs are dispelled first.)",
            "Deals 450% damage to the enemy with the highest remaining HP. Deals 250% damage to all other enmies.",
            "The enemy that had the highest remaining HP get 810 Water damage over 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "astral_dwarf_salniss",
        "name": "Salniss",
        "effects": [
            "Deals 500% damage to the target.",
            "The target gets silenced for 3 turns.",
            "Deals 500% damage to a random enemy. (This effect target the same enemy as the first hit enemy if there are no valid targets.)",
            "The target of the second hit receives +50% increased damage for 3 turns. The effect is increased by +10% for each Minion or Mega Minion owned by all enemies, up to +100% in total."
        ]
    },
    {
        "heroId": "moth_satinpimenter",
        "name": "Satinpimenter",
        "effects": [
            "Dispels buffs from the target and nearby enemies.",
            "Deals 420% damage to the target and nearby enemies.",
            "The target and nearby enemies receive 620 Toxin damage over 4 turns. If Toxin is cast on a target with boosted health, Minions or Mega Minion, the Toxin damage received is increased. (The Toxin damage is increased by +100% against targets with boosted health. Each Minion or Mega Minion owned by the target increases the damage by additional +33%, up to total +199%.)",
            "The caster regenerate 1400 HP over 4 turns."
        ]
    },
    {
        "heroId": "wild_cat_savann",
        "name": "Savann",
        "effects": [
            "Reduces max health  of the target by 1500. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 1500.)",
            "The target gets silenced for 3 turns.",
            "Growth: Nearby allies get 400 attack."
        ]
    },
    {
        "heroId": "goblin_scrollbeast",
        "name": "Scrollbeast",
        "effects": [
            "Deals 365% damage to all enemies.",
            "Wither: All enemies get -400 attack.",
            "Summons a White Boar Mega Minion with 65% HP and 250% attack inherited from the caster.",
            "When summoned the White Boar Mega Minion gives its owner the ability to counterattack with 100% of the received damage as long as the owner has a White Boar Mega Minion. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "construct_shaal",
        "name": "Shaal",
        "effects": [
            "Deals 340% damage to all enemies.",
            "Heals all allies for 20% of the damage dealt.",
            "All Holy allies receive all strong damage as regular damage for 3 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "magic_carpet_shareef",
        "name": "Shareef",
        "effects": [
            "Deals 400% damage to the target.",
            "Deals 400% damage to 2 random enemies. (This effect targets the same enemy as the first hit if there are no valid targets.)",
            "All hit targets gets +30% increased damage for 3 turns.",
            "All hit targets receive 657 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "garrison_shimmerscale",
        "name": "Shimmerscale",
        "effects": [
            "Deals 300% damage to the target and nearby enemies.",
            "Summons a Sword Guard Mega Minion with 35% HP and 300% attack inherited from the caster.",
            "The target hit by the Sword Guard Mega Minion receives 411 Bleed damage over 3 turns. This effect spreads to nearby enemies."
        ]
    },
    {
        "heroId": "s3_sif",
        "name": "Sif",
        "effects": [
            "The caster and nearby allies counterattack with 100% of the damage received for 4 turns.",
            "The caster and nearby allies reduce all received damage by -50% for 4 turns.",
            "The caster and nearby allies get +24% mana generation for 4 turns."
        ]
    },
    {
        "heroId": "s3_sif_costume_golden",
        "name": "Sif C1",
        "effects": [
            "Increases the mana of the caster and nearby allies by 15%.",
            "The caster and nearby allies counterattack with 125% of the damage received for 4 turns.",
            "The caster and nearby allies reduce all received damage by 40% for 4 turns."
        ]
    },
    {
        "heroId": "fox_silverpaw",
        "name": "Silverpaw",
        "effects": [
            "Steals Minions or a Mega Minion from target.",
            "Inflicts the target wit lasting Greed. Friendly effects from Special Skills only affect characters with Greed. (Greed prevents all other heroes from gaining friendly effects. This includes all buffs, healing and growth effects. This effect is lasting until it is cleansed, replaced or removed.)",
            "All enemies receive 975 Curse damage over 4 turns, starting low and increasing every turn."
        ]
    },
    {
        "heroId": "easter_sir_roostley",
        "name": "Sir Roostley",
        "effects": [
            "Deals 310% damage to the target.",
            "The attack chains through all enemies that are adjacent to any hit enemy.",
            "The caster gets -20% attack for 3 turns. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "slime_sludgus",
        "name": "Sludgus",
        "effects": [
            "Recovers 50% health for all allies.",
            "All allies except the caster dance the Dance of the Slimy for 4 turns.",
            "==Dance of the Slimy==",
            "* +45% chance to dodge Special Skills. Each dodge damages the attacker for 1600 damage.",
            "* When the dance ends, the dancer recovers 700 HP. (All existing status effects will be removed when a dance status effect is added. Dance gives immunity to new status effects. New dance status effect will replace this effect. Dance effect cannot be dispelled. This effect is removed when the caster is defeated.)"
        ]
    },
    {
        "heroId": "wild_cat_stravia",
        "name": "Stravia",
        "effects": [
            "Deals 170% Clawing damage to all enemies. (Deals 255% damage against enemies with Minions or Mega Minions. Enemies with Minions or Mega Minions receive -35% defense for 6 turns.)",
            "All enemies receives 1200 Surge Bleed damage over 6 turns. (If the target already has this effect, the duration will be refreshed and the damage will be increased by 300. Max total damage: 3000.)",
            "If the caster is defeated in the next 4 turns, reduces max health for all enemies by 1000 over 4 turns. The effect is stronger against targets with boosted health. (Max health can't get lower than 30% of the original max health. Any boosted health is reduced by an additional 250 per turn.)",
            "All allies resist new effects that block usage of Special Skills for 4 turns."
        ]
    },
    {
        "heroId": "journey_tang_sanzang",
        "name": "Tang Sanzang",
        "effects": [
            "Boosts health of all allies by 500. Boosted health can exceed max HP.",
            "Cleanses the latest cleansable status ailments from all allies.",
            "All allies get +20% defense for 2 turns."
        ]
    },
    {
        "heroId": "s3_thor",
        "name": "Thor",
        "effects": [
            "Special Skill has a different effect on consecutive uses, in the following order:",
            "1st:",
            "* Deals 280% damage to the target.",
            "* The target get -40% accuracy for 3 turns.  Chance to miss also applies to offensive special skills",
            "2nd:",
            "* Deals 280% damage to the target and nearby enemies.",
            "* The target and nearby enemies get -40% accuracy for 3 turns.  Chance to miss also applies to offensive special skills",
            "3rd:",
            "* Deals 280% damage to all enemies.",
            "* All enemies get -40% accuracy for 3 turns.  Chance to miss also applies to offensive special skills"
        ]
    },
    {
        "heroId": "s3_thor_costume_conduit",
        "name": "Thor C1",
        "effects": [
            "Special Skill has a different effect on consecutive uses, in the following order:",
            "1st:",
            "* Deals 185% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns.  Chance to miss also applies to offensive special skills",
            "2nd:",
            "* Deals 260% damage to all enemies.",
            "* All enemies get -35% accuracy for 3 turns.  Chance to miss also applies to offensive special skills",
            "3rd:",
            "* Deals 290% damage to all enemies.",
            "* All enemies get -54% accuracy for 3 turns.  Chance to miss also applies to offensive special skills"
        ]
    },
    {
        "heroId": "monster_hunter_thunderclap",
        "name": "Thunderclap",
        "effects": [
            "The caster gets Taunt that prevents enemies from using Special Skill on the caster's allies for 5 turns.",
            "The caster regenerates 1250 boosted health over 5 turns. Boosted health can exceed max HP.",
            "Deals 500-1000 damage to all enemies after 5 turns, based on the damage the caster had taken while this effect was active. Maximum effect is achieved upon taking 50% of max health in damage.",
            "Stack (Max: 10): The caster gets +25% attack against the weaker element."
        ]
    },
    {
        "heroId": "monster_hunter_thura",
        "name": "Thura",
        "effects": [
            "Deals 355% damage to the target and nearby enemies.",
            "The more health the enemy has, the more damage they will receive, up to 435%.",
            "The caster and nearby allies bypass defensive buffs with their attacks for 3 turns. (Defensive buffs include counterattacks.)",
            "The caster and nearby allies' Special Skills deal an additional +80% damage for 3 turns."
        ]
    },
    {
        "heroId": "ninja_topaz",
        "name": "Topaz",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200%/300% mana:",
            "x1 Mana Charge:",
            "* Destroys all Minions from the target. This effect damages Mega Minions.",
            "* Deals 310% damage to the target.",
            "* All allies get a small amount of mana for each destroyed Minion.",
            "x2 Mana Charge:",
            "* Destroys all Minions from the target and nearby enemies. This effect damages Mega Minions.",
            "* Deals 350% damage to the target and nearby enemies.",
            "* All allies get a small amount of mana for each destroyed Minion.",
            "x3 Mana Charge:",
            "* Destroys all Minions from all enemies. This effect damages Mega Minions.",
            "* Deals 390% damage to all enemies.",
            "* All allies get a small amount of mana for each destroyed Minion."
        ]
    },
    {
        "heroId": "holy_god_uraeus",
        "name": "Uraeus",
        "effects": [
            "Deals 635% damage to the target",
            "Damage bypasses target's Minions.",
            "All enemies who own a Minion or a Fiend receive 420 Sand damage over 3 turns.",
            "Element Link summons a Holy Minion for all Holy allies with 6% HP and 10% attack inherited from the caster"
        ]
    },
    {
        "heroId": "mahayoddha_ustad_anand",
        "name": "Ustad Anand",
        "effects": [
            "Deals 355% damage to all enemies.",
            "Growth Boon: Deals 2x extra damage for each point of modified attack. (Extra damage is based on the modified attack on caster, when damage is dealt. Up to maximum 800 additional extra damage. Status effects affecting damage dealt do affect the extra damage. Defense stat does not affect the extra damage. Status effect affecting attack stat do not affect the extra damage.)",
            "All enemies get -34% mana generation for 4 turns. (Affects only mana generated from matching tiles or mana gained by the defense team at the end of their turn.)",
            "All enemies are immune to new status effect buffs for 4 turns."
        ]
    },
    {
        "heroId": "magic_vaishali",
        "name": "Vaishali",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All allies regenerate 594 HP over 3 turns.",
            "* All allies get +30% attack for 3 turns.",
            "* Cleanses status ailments from all allies.",
            "2x Mana Charge:",
            "* Dispels buffs from all enemies.",
            "* All enemies receive 1290 Sand damage over 5 turns.",
            "* All enemies get -45% attack for 5 turns."
        ]
    },
    {
        "heroId": "magic_vaishali_costume_chef",
        "name": "Vaishali C1",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* All allies regenerate 702 HP over 3 turns.",
            "* All allies get +33% attack for 3 turns.",
            "* Cleanses status ailments from all allies.",
            "2x Mana Charge:",
            "* Dispels buffs from all enemies.",
            "* All enemies receive 1855 Sand damage over 5 turns.",
            "* All enemies get -50% attack for 5 turns.",
            "* All enemies get -45% decrease for any healing for 5 turns."
        ]
    },
    {
        "heroId": "oriental_female_mystic",
        "name": "Vivica",
        "effects": [
            "Recovers 44% health for all allies.",
            "All allies get +63% defense for 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_magician",
        "name": "Vivica C1",
        "effects": [
            "Recovers 44% health for all allies.",
            "All enemies get -44% defense for 4 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_scribe",
        "name": "Vivica C2",
        "effects": [
            "Boosts health of all allies by 670. Boosted health can exceed max HP.",
            "All enemies get -39% attack for 4 turns.",
            "Dispels buffs from all enemies."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_cute",
        "name": "Vivica Toon",
        "effects": [
            "Recovers 54% health for all allies.",
            "All allies get +45% defense for 4 turns. This status effect is undispellable and lasts 2 turns longer on Holy characters.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_glass",
        "name": "Vivica Glass",
        "effects": [
            "Recovers 55% health for all allies.",
            "All allies get +60% defense for 4 turns.",
            "All Holy allies reflect status ailments and negative stacks for 2 turns. (Status effects cast by characters, Minions, and Fiends on the same side cannot be reflected.)",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_stylish",
        "name": "Vivica Stylish",
        "effects": [
            "Recovers 65% health for the ally with lowest remaining HP. All other allies recover 56% health.",
            "All allies get +61% defense for 4 turns.",
            "Cleanses status ailments from all allies."
        ]
    },
    {
        "heroId": "halloween_wayne",
        "name": "Wayne",
        "effects": [
            "All enemies receive 284 Bleed damage over 2 turns. The caster absorbs 30% of the dealt Bleed damage as health.",
            "The caster steals 60% of any healing applies to all enemies for 2 turns."
        ]
    },
    {
        "heroId": "beowulf_wealhtheow",
        "name": "Wealhtheow",
        "effects": [
            "Heals all allies who have less than 50% HP left to 50% health.",
            "All allies regenerate 1320 boosted health over 3 turns. Boosted health can exceed max HP.",
            "Source of Buffs: The following effects are cast on a random ally at the start of each turn",
            "* +100% Special Skill damage for 4 turns.",
            "* +33% mana generation for 4 turns.",
            "* The Source of Buffs will activate 3 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "beowulf_weland",
        "name": "Weland",
        "effects": [
            "Deals 475% damage to all enemies.",
            "All allies have a 45% chance to drop any received damage to 1 for 5 turns.",
            "Source of Buffs: The following effects are cast on a random ally at the start of each turn:",
            "* +100% Special Skill damage for 5 turns.",
            "* +44% mana generation for 5 turns.",
            "The Source of Buffs will activate 6 times. Each attempt to dispel it removes one activation."
        ]
    },
    {
        "heroId": "wonderland_white_rabbit",
        "name": "White Rabbit",
        "effects": [
            "Deals 280% Damage to the target and nearby enemies",
            "The target gets -34% defense for 4 turns. The effect duration is reset if the target is healed. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "wonderland_white_rabbit_costume_mask",
        "name": "White Rabbit C1",
        "effects": [
            "Deals 260% damage to the target and nearby enemies.",
            "The target and nearby enemies get -34% defense for 3 turns. The effect duration resets if the target is healed. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "magic_willow",
        "name": "Willow",
        "effects": [
            "Special Skill has a different effect when charged with 100%/200% mana:",
            "1x Mana Charge:",
            "* Deals 175% damage to all enemies.",
            "* Dispels status effect buffs that affect defense from all enemies.",
            "* All enemies are immune to new status effect buffs that affect defense for 3 turns.",
            "2x Mana Charge:",
            "* All allies bypass defensive buffs with their attacks for 5 turns. Defensive buffs include counterattacks.",
            "* All allies reduce all received damage by -45% for 5 turns.",
            "* All allies counterattack with 115% of the damage received for 5 turns."
        ]
    },
    {
        "heroId": "castle_bear_winnie",
        "name": "Winnie",
        "effects": [
            "Cleanses status ailments from all allies.",
            "Boosts health of all allies by 1200. Boosted health can exceed max HP.",
            "All allies are immune to max health reduction for 5 turns.",
            "All allies get +60% defense as long as the caster has boosted health. This effect can't be cleansed."
        ]
    },
    {
        "heroId": "castle_wolf_wolfgang",
        "name": "Wolfgang",
        "effects": [
            "Deals 250% damage to all enemies.",
            "The caster reduces all received damage by -50% for 4 turns.",
            "All allies regenerate 720 boosted health over 4 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "castle_wolf_wolfgang_costume_treasure",
        "name": "Wolfgang C1",
        "effects": [
            "Deals 300% damage to all enemies.",
            "The caster reduces all received damage by -45% for 4 turns.",
            "All allies regenerate 720 boosted health over 4 turns. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "outlaw_wu_yong",
        "name": "Wu Yong",
        "effects": [
            "This Special Skill has a chance to deal critical hits.",
            "Deals 450% damage to the target.",
            "Steals 20% mana from the target and distributes it on allies.",
            "If the target has more than 30% mana after mana stealing, the Special Skill repeats targeting a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.",
            "All allies get +55% critical chance for 5 turns."
        ]
    },
    {
        "heroId": "shadow_wulfstan",
        "name": "Wulfstan",
        "effects": [
            "Steals all dispellable buff from all enemies to the caster.",
            "Deals 350% damage to all enemies and inflicts 10 Insanity on them.",
            "Casting this Special Skill inflicts 45 Insanity on the caster."
        ]
    },
    {
        "heroId": "elemental_xavier",
        "name": "Xavier",
        "effects": [
            "Deals 280% damage to the target.",
            "If 1 ally is of Holy element, the damage will increase to 290%, and it will affect nearby enemies.",
            "If 2 alllies are of Holy element, the damage will increase to 300% and it will affect all enemies. Allied heroes must be alive for the effect to activate.",
            "Reduces the mana of all hit enemies by -20%."
        ]
    },
    {
        "heroId": "elemental_xavier_costume_arthropod",
        "name": "Xavier C1",
        "effects": [
            "Deals 270% damage to the target.",
            "If 1 ally is of Holy element, the damage will increase to 330% and it will affect nearby enemies.",
            "If 2 allies are of Holy element, the damage will increase to 360% and it will affect all enemies.",
            "Reduces the mana of all hit enemies by -25%.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "elemental_zandria",
        "name": "Zandria",
        "effects": [
            "Deals 210% damage to all enemies.",
            "Deals additional 20% damage per each Holy shield on the board up to 450% damage in total.",
            "Each fallen ally has a 20% chance to be revived at 40% HP.",
            "Each Holy shield on the board increases the chance of to be revived by 5% up to 80% chance in total."
        ]
    },
    {
        "heroId": "elemental_zandria_costume_planet",
        "name": "Zandria C1",
        "effects": [
            "Deals 250% damage to all enemies.",
            "Deals additional 25% damage per each Holy shield on the board, up to 550% damage in total.",
            "Each defeated ally has a 20% chance to be revived with 45% HP.",
            "Each Holy shield on the board increases the chance to be revived by 5%, up to 80% chance in total.",
            "Deals extra damage against Dark."
        ]
    },
    {
        "heroId": "magic_carpet_zazha",
        "name": "Zazha",
        "effects": [
            "The attack bypasses defensive buffs. (This includes counterattacks.)",
            "Deals 620% damage to the target.",
            "Boosts all allies' health by 26% of damage dealt."
        ]
    },
    {
        "heroId": "s4_zekena",
        "name": "Zekena",
        "effects": [
            "Deals 300% damage to the target.",
            "Deals 450% damage to a random target enemy. Deals extra damage if ther target is Dark.",
            "The target of the second hit gets -56% defense for 3 turns."
        ]
    },
    {
        "heroId": "s4_zekena_costume_vines",
        "name": "Zekena C1",
        "effects": [
            "Deals 400% damage to the target.",
            "Deals 400% damage to a random different enemy. Deals extra damage if the target is Dark.",
            "The target of the second hit gets -56% defense for 3 turns."
        ]
    },
    {
        "heroId": "beachparty_zenukwa",
        "name": "Zenuk'wa",
        "effects": [
            "Deals 275% damage to target and nearby enemies.",
            "The target and nearby enemies receive 225 damage for each received status ailments for 4 turns.",
            "The caster and nearby allies are immune to new status ailments for 4 turns, and recover 225 health for each attempted status ailment."
        ]
    },
    {
        "heroId": "kingdom_zhang_fei",
        "name": "Zhang Fei",
        "effects": [
            "Deals 530% damage to the target.",
            "All allies reflect status ailments that affect defense back to the attacker for 3 turns. This effect can't be bypassed. Status effects cast by characters, Minions and Fiends on the same side cannot be reflected."
        ]
    },
    {
        "heroId": "kingdom_zhang_fei_costume_bear_slayer",
        "name": "Zhang Fei C1",
        "effects": [
            "Deals 520% damage to the target.",
            "The target receives 390 Bleed damage over 3 turns.",
            "All allies reflect status ailments that affect defense back to the attacker for 3 turns. This effect can't be bypassed."
        ]
    },
    {
        "heroId": "kingdom_zhuge_liang",
        "name": "Zhuge Liang",
        "effects": [
            "Summons a Shu Soldier Minion for each ally with 16% HP and 17% attack inherited from the caster.",
            "When summoned, the Shu Soldier Minion gives its owner the ability to counterattack with 60% of the damage received as long as the owner has a Shu Soldier Minion. This effect can't be dispelled.",
            "Summons a Shu Guerrilla Fiend for all enemies. The Fiend damages the enemies with 75% attack every turn.",
            "The Shu Guerrilla Fiend absorbs healing and disappears when it has absorbed 50% of its targets health."
        ]
    },
    {
        "heroId": "kingdom_zhuge_liang_costume_crane",
        "name": "Zhuge Liang C1",
        "effects": [
            "Summons a Shu Soldier Minion for each ally with 33% HP and 33% attack inherited from the caster.",
            "When summoned, the Shu Soldier Minion gives its owner the ability to counterattack with 55% of the damage received as long as the owner has a Shu Soldier Minion. This effect can't be dispelled.",
            "Summons a Shu Guerrilla Fiend for all enemies. The Fiend damages its target with 70% attack every turn.",
            "The Shu Guerrilla Fiend absorbs healing. It disappears after absorbing a healing amount equal to 55% of its target's max health."
        ]
    },
    {
        "heroId": "astral_demon_zondalath",
        "name": "Zondalath",
        "effects": [
            "Recovers 45% health for all allies.",
            "All allies reduce all received damage by -50% for 4 turns.",
            "All allies except the caster get an additional +30% attack power for the next Special Skill they cast. The additional attack power increases +30% each turn, up to a maximum of +120% in total."
        ]
    },
    {
        "heroId": "holy_god_zora",
        "name": "Zora",
        "effects": [
            "Deals 380% damage to all enemies.",
            "Cleanses status ailments from all allies.",
            "All allies get +20% attack, and a further +5% increase per each removed status effect up to +60% in total, for 4 turns.",
            "Element Link gives all Holy allies +10% additional Special Skill damage for 4 turns. This effect cannot be dispelled."
        ]
    },
    {
        "heroId": "institute_professor_ambrose",
        "name": "Prof. Ambrose",
        "effects": []
    },
    {
        "heroId": "easter_sir_roostley_costume_alchemist",
        "name": "Sir Roostley C1",
        "effects": []
    },
    {
        "heroId": "easter_lady_woolerton_costume_coiffeuse",
        "name": "Lady Woolerton C1",
        "effects": []
    },
    {
        "heroId": "rabbit_red_costume_knight",
        "name": "Squire Wabbit C1",
        "effects": []
    },
    {
        "heroId": "easter_duke_whitley",
        "name": "Duke Whitley",
        "effects": []
    },
    {
        "heroId": "easter_marko",
        "name": "Marko",
        "effects": []
    }
];