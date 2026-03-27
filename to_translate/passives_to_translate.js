const allTranslations = 
[
    {
        "heroId": "nordic_warrior",
        "name": "Brand",
        "passives": []
    },
    {
        "heroId": "nordic_female_scout",
        "name": "Sigrunn",
        "passives": []
    },
    {
        "heroId": "royal_pikeman",
        "name": "Olaf",
        "passives": []
    },
    {
        "heroId": "nordic_female_warrior",
        "name": "Ragnhild",
        "passives": []
    },
    {
        "heroId": "dwarven_scout",
        "name": "Toril",
        "passives": []
    },
    {
        "heroId": "astral_demon_agharoth",
        "name": "Agharoth",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "magic_carpet_bertha",
        "name": "Bertha",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "tales2_bryggvir",
        "name": "Bryggvir",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 153 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "vegetable_caleb",
        "name": "Caleb",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy. This Passive Skill only activates once per turn for each team.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 20% attack, 5% health",
            "2) Sprout Fiend: 30% attack, 10% health",
            "3) Blossom Mega Fiend: 150% attack, 25% health"
        ]
    },
    {
        "heroId": "easter_chick_jr",
        "name": "Chick Jr.",
        "passives": []
    },
    {
        "heroId": "monster_hunter_dawn",
        "name": "Dawn",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "christmas_frosty",
        "name": "Frosty",
        "passives": []
    },
    {
        "heroId": "s2_croc_man",
        "name": "Gato",
        "passives": []
    },
    {
        "heroId": "nordic_chained_werewolf",
        "name": "Graymane",
        "passives": []
    },
    {
        "heroId": "nordic_chained_werewolf_costume_raccoon",
        "name": "Graymane C1",
        "passives": []
    },
    {
        "heroId": "nordic_chained_werewolf_costume_cute",
        "name": "Graymane Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_chained_werewolf_costume_glass",
        "name": "Graymane Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "guardian_lemur",
        "name": "Guardian Lemur",
        "passives": []
    },
    {
        "heroId": "royal_knight",
        "name": "Gunnar",
        "passives": []
    },
    {
        "heroId": "royal_knight_costume_blacksmith",
        "name": "Gunnar C1",
        "passives": []
    },
    {
        "heroId": "royal_knight_costume_cute",
        "name": "Gunnar Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "royal_knight_costume_glass",
        "name": "Gunnar Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s4_helo",
        "name": "Helo",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives  from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_helo_costume_baker",
        "name": "Helo C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives  from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s5_jarif",
        "name": "Jarif",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_jarif_costume_curator",
        "name": "Jarif C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against sand damage."
        ]
    },
    {
        "heroId": "s3_jarvur",
        "name": "Jarvur",
        "passives": []
    },
    {
        "heroId": "kalevala_joukahainen",
        "name": "Joukahainen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_joukahainen_costume_frozen",
        "name": "Joukahainen C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "dwarven_smasher",
        "name": "Karil",
        "passives": []
    },
    {
        "heroId": "dwarven_smasher_costume_smith",
        "name": "Karil C1",
        "passives": []
    },
    {
        "heroId": "dwarven_smasher_costume_cute",
        "name": "Karil Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "dwarven_smasher_costume_glass",
        "name": "Karil Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s3_nordri",
        "name": "Nordri",
        "passives": []
    },
    {
        "heroId": "s3_nordri_costume_explorer",
        "name": "Nordri C1",
        "passives": []
    },
    {
        "heroId": "musketeer_planchet",
        "name": "Planchet",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_planchet_costume_adventurer",
        "name": "Planchet C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "gargoyle_soroca",
        "name": "Soroca",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ballerina_swan_maiden",
        "name": "Swan Maiden",
        "passives": [
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Resist Defense Ailments: This character has innate resistance against status ailments that affect defense. Doesn't apply to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "nordic_mage",
        "name": "Ulmer",
        "passives": []
    },
    {
        "heroId": "nordic_mage_costume_hermit",
        "name": "Ulmer C1",
        "passives": []
    },
    {
        "heroId": "nordic_mage_costume_cute",
        "name": "Ulmer Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_mage_costume_glass",
        "name": "Ulmer Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "nordic_swordman",
        "name": "Valen",
        "passives": []
    },
    {
        "heroId": "nordic_swordman_costume_climber",
        "name": "Valen C1",
        "passives": []
    },
    {
        "heroId": "nordic_swordman_costume_cute",
        "name": "Valen Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_swordman_costume_glass",
        "name": "Valen Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "styx_virgil",
        "name": "Virgil",
        "passives": [
            "Decreased Minion Health: Enemy Minions inherit -50% less Health when summoned.",
            "Resist defense Ailments: This character has innate resistance against status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "pirate_vodnik",
        "name": "Vodnik",
        "passives": []
    },
    {
        "heroId": "kingdom_yao",
        "name": "Yao",
        "passives": []
    },
    {
        "heroId": "s2_chameleon_mage",
        "name": "Agwe",
        "passives": []
    },
    {
        "heroId": "s2_chameleon_mage_costume_alchemist",
        "name": "Agwe C1",
        "passives": []
    },
    {
        "heroId": "tales1_aqualith",
        "name": "Aqualith",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_aqualith_costume_purple",
        "name": "Aqualith C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "s5_azmia",
        "name": "Azmia",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies."
        ]
    },
    {
        "heroId": "s5_azmia_costume_dancing",
        "name": "Azmia C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill that grant extra effect on cast are guaranteed to activate.",
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "construct_bonechill",
        "name": "Bonechill",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Destructive Core: The Construct Core of this character is Destructive Core.",
            "The Destructive Core activates each time this character's Special Skill is cast",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core, All charge is exchausted when the Core is activated."
        ]
    },
    {
        "heroId": "dwarven_guard",
        "name": "Boril",
        "passives": []
    },
    {
        "heroId": "dwarven_guard_costume_ram",
        "name": "Boril C1",
        "passives": []
    },
    {
        "heroId": "dwarven_guard_costume_tavern",
        "name": "Boril C2",
        "passives": []
    },
    {
        "heroId": "dwarven_guard_costume_cute",
        "name": "Boril Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "dwarven_guard_costume_glass",
        "name": "Boril Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "beowulf_breca",
        "name": "Breca",
        "passives": [
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "wonderland_captain",
        "name": "Captain of Diamonds",
        "passives": []
    },
    {
        "heroId": "slime_choozen",
        "name": "Choozen",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "tales2_dain",
        "name": "Dain",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 193 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "masquerade_fosco",
        "name": "Fosco",
        "passives": [
            "Resist Defense Ailments: This character has innate resistance against status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "halloween_frank",
        "name": "Frank",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_frank_costume_mafia",
        "name": "Frank C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "bard_garyas",
        "name": "Garyas",
        "passives": [
            "Attack Ailment Reduction: Reduces the effect of status ailments affecting attack by 80%. The effect applies to this character and its allies in the battle."
        ]
    },
    {
        "heroId": "garrison_greg",
        "name": "Greg",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior",
        "name": "Grimm",
        "passives": []
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_corrupted",
        "name": "Grimm C1",
        "passives": []
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_messenger",
        "name": "Grimm C2",
        "passives": []
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_cute",
        "name": "Grimm Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_glass",
        "name": "Grimm Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "nordic_ancestral_warrior_costume_stylish",
        "name": "Grimm Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "gargoyle_grumbl",
        "name": "Grumbl",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 5 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s3_jott",
        "name": "Jott",
        "passives": []
    },
    {
        "heroId": "dwarwen_brewmaster",
        "name": "Kiril",
        "passives": []
    },
    {
        "heroId": "dwarwen_brewmaster_costume_guitarist",
        "name": "Kiril C1",
        "passives": []
    },
    {
        "heroId": "dwarwen_brewmaster_costume_wood_carver",
        "name": "Kiril C2",
        "passives": []
    },
    {
        "heroId": "dwarwen_brewmaster_costume_cute",
        "name": "Kiril Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_glass",
        "name": "Kiril Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "dwarwen_brewmaster_costume_stylish",
        "name": "Kiril Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "monster_hunter_knuckles",
        "name": "Knuckles",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "forsaken_lamentia",
        "name": "Lamentia",
        "passives": [
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "elemental_linus",
        "name": "Linus",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "s3_mireweave",
        "name": "Mireweave",
        "passives": []
    },
    {
        "heroId": "owl_olbec",
        "name": "Olbec",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "ninja_osamu",
        "name": "Osamu",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "mahayoddha_rafeeq",
        "name": "Rafeeq",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "villain_sanngrior",
        "name": "Sanngrior",
        "passives": []
    },
    {
        "heroId": "ninja_sapphire",
        "name": "Sapphire",
        "passives": []
    },
    {
        "heroId": "royal_female_knight",
        "name": "Sonya",
        "passives": []
    },
    {
        "heroId": "royal_female_knight_costume_winter",
        "name": "Sonya C1",
        "passives": []
    },
    {
        "heroId": "royal_female_knight_costume_prospector",
        "name": "Sonya C2",
        "passives": []
    },
    {
        "heroId": "royal_female_knight_costume_cute",
        "name": "Sonya Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "royal_female_knight_costume_glass",
        "name": "Sonya Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s2_triton",
        "name": "Triton",
        "passives": []
    },
    {
        "heroId": "s2_triton_costume_champion",
        "name": "Triton C1",
        "passives": []
    },
    {
        "heroId": "vampire_queen",
        "name": "Valeria",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "kingdom_xiahou_dun",
        "name": "Xiahou Dun",
        "passives": []
    },
    {
        "heroId": "s4_zila_lei",
        "name": "Zila Lei",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_zila_lei_costume_dancer",
        "name": "Zila Lei C1",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "monster_hunter_adalinda",
        "name": "Adalinda",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "ice_god_october",
        "name": "Aegir",
        "passives": []
    },
    {
        "heroId": "ice_god_october_costume_farmer",
        "name": "Aegir C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "mimic_aether_blue",
        "name": "Aether Mimic Ice",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Alpha Aether",
            "* Ice Aether III",
            "* Ice Aether II",
            "* Ice Aether I"
        ]
    },
    {
        "heroId": "kalevala_aino",
        "name": "Aino",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_aino_costume_water_maiden",
        "name": "Aino C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "ice_god_eskimo",
        "name": "Alasie",
        "passives": []
    },
    {
        "heroId": "ice_god_eskimo_costume_champion",
        "name": "Alasie C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "ice_god_alexandrine",
        "name": "Alexandrine",
        "passives": [
            "Resist Healing Ailments: This character is immune to status ailments that affect healing.",
            "Health Recovery on Status Ailment Received: This character recovers 10% health when they receive a status ailment or a negative stack."
        ]
    },
    {
        "heroId": "wonderland_alice",
        "name": "Alice",
        "passives": []
    },
    {
        "heroId": "styx_amphitrite",
        "name": "Amphitrite",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "astral_demon_anatemah",
        "name": "Anatemah",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "tales2_andvari",
        "name": "Andvari",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 309 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_andvari_costume_c1",
        "name": "Andvari C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 370 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "elemental_anzia",
        "name": "Anzia",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_anzia_costume_jailer",
        "name": "Anzia C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "ice_god_areax",
        "name": "Areax",
        "passives": [
            "Resist Water: This character is immune to status ailments that deal Water damage.",
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "s2_ariel",
        "name": "Ariel",
        "passives": []
    },
    {
        "heroId": "s2_ariel_costume_enchanter",
        "name": "Ariel C1",
        "passives": []
    },
    {
        "heroId": "castle_bear_armel",
        "name": "Armel",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "mimic_ascension_item_blue",
        "name": "Ascension Mimic Ice",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "****",
            "- Damascus Blade",
            "- Tome Of Tactics",
            "- Farsight Telescope",
            "***",
            "- Fine Gloves",
            "- Compass",
            "- Warm Cape",
            "- Battle Manual",
            "- Tall Boots",
            "- Chainmail Shirt",
            "**",
            "- Strong Rope"
        ]
    },
    {
        "heroId": "faun_ascian",
        "name": "Ascian",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "ice_god_athena",
        "name": "Athena",
        "passives": []
    },
    {
        "heroId": "ice_god_athena_costume_wargoddess",
        "name": "Athena C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "tales1_atlanteia",
        "name": "Atlanteia",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_atlanteia_costume_siren",
        "name": "Atlanteia C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "ninja_azurite",
        "name": "Azurite",
        "passives": []
    },
    {
        "heroId": "ice_god_balur",
        "name": "Balur",
        "passives": [
            "Heal on Bleed: This character regenerates 50 HP each time an enemy receives Bleed damage.",
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "magic_carpet_bart",
        "name": "Bart",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "s5_bennu",
        "name": "Bennu",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies."
        ]
    },
    {
        "heroId": "s5_bennu_costume_heron",
        "name": "Bennu C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "mahayoddha_bhairavi_devi",
        "name": "Bhairavi Devi",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions."
        ]
    },
    {
        "heroId": "bard_bhaltair",
        "name": "Bhaltair",
        "passives": [
            "Quick Tempo: Ballad. All Ballads cast by enemies only last for 1 turn.",
            "Quick Tempo: Dance. All Dances cast by enemies only last for 1 turn."
        ]
    },
    {
        "heroId": "circus_bobo",
        "name": "Bobo",
        "passives": []
    },
    {
        "heroId": "slime_boboosang",
        "name": "Boboo Sang",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "mighty_pet_bubbles",
        "name": "Bubbles",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "shadow_burton",
        "name": "Burton",
        "passives": []
    },
    {
        "heroId": "garrison_caelen",
        "name": "Caelen",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "magic_camilla",
        "name": "Camilla",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "magic_camilla_costume_flower",
        "name": "Camilla C1",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 60% chance to deal 150% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "kingdom_cao_cao",
        "name": "Cao Cao",
        "passives": []
    },
    {
        "heroId": "kingdom_cao_cao_costume_ice",
        "name": "Cao Cao C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "forsaken_cassilda",
        "name": "Cassilda",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill - Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "slayer_cathal",
        "name": "Cathal",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "masquerade_cel",
        "name": "Cel",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "bard_celimene",
        "name": "Celimene",
        "passives": [
            "Attack Ailment Reduction: Reduces the effect of status ailments affecting attack by 80%. The effect applies to this character and its allies in the battle."
        ]
    },
    {
        "heroId": "tales1_ceto",
        "name": "Ceto",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_ceto_costume_queen",
        "name": "Ceto C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "journey_change",
        "name": "Chang'e",
        "passives": [
            "Mana on Buff Received: This character has a 50% chance to gain 10% mana when they receive a buff or possitive stack.",
            "Health Recovery on Buff Received: This character has a 50% chance to recover 10% health when they receive a buff or possitve stack."
        ]
    },
    {
        "heroId": "halloween_chester",
        "name": "Chester",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "moth_chimister",
        "name": "Chimister",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "mahayoddha_chitrangada",
        "name": "Chitrangada",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions."
        ]
    },
    {
        "heroId": "garrison_ciara",
        "name": "Ciara",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "mighty_pet_cinnamon",
        "name": "Cinnamon",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "ice_god_claeg",
        "name": "Claeg",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Resist Burn: This character is immune to status ailments that deal Burn damage."
        ]
    },
    {
        "heroId": "ninja_cobalt",
        "name": "Cobalt",
        "passives": []
    },
    {
        "heroId": "astral_cosmicspeaker",
        "name": "Cosmicspeaker",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "villain_crystalis",
        "name": "Crystalis",
        "passives": []
    },
    {
        "heroId": "beachparty_davey_wavey",
        "name": "Davey Wavey",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 238 Water damage over 2 turns.",
            "Resist Water Damage: This character has innate resistance against Water Damage."
        ]
    },
    {
        "heroId": "beauty_beast_dominique",
        "name": "Dominique",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "ice_god_dvalin",
        "name": "Dvalin",
        "passives": [
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs.",
            "Mana on Frost: This character gains 5% mana each time an enemy receives Frost damage."
        ]
    },
    {
        "heroId": "mimic_emblem_blue",
        "name": "Emblem Mimic Ice",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Master Sorcerer Emblems",
            "* Master Wizard Emblems",
            "* Sorcerer Emblems",
            "* Wizard Emblems"
        ]
    },
    {
        "heroId": "institute_emilie",
        "name": "Emilie",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldrich Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "castle_wolf_esme",
        "name": "Esme",
        "passives": []
    },
    {
        "heroId": "s4_exeera",
        "name": "Exeera",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_exeera_costume_hierophant",
        "name": "Exeera C1",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill, all allies deal +70% increased normal attack and Special Skills damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "mimic_training_hero_blue",
        "name": "Experience Mimic Ice",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Common Ice Trainer Heroes",
            "* Uncommon Ice Trainer Heroes",
            "* Rare Ice Trainer Heroes",
            "* Common Ice Heroes",
            "* Uncommon Ice Heroes"
        ]
    },
    {
        "heroId": "s3_fenrir",
        "name": "Fenrir",
        "passives": []
    },
    {
        "heroId": "s3_fenrir_costume_guardian",
        "name": "Fenrir C1",
        "passives": []
    },
    {
        "heroId": "garrison_fergus",
        "name": "Fergus",
        "passives": [
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack.",
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Growth effects from all enemies."
        ]
    },
    {
        "heroId": "pirate_commodore_finley",
        "name": "Finley",
        "passives": []
    },
    {
        "heroId": "pirate_commodore_finley_costume_bleak",
        "name": "Finley C1",
        "passives": [
            "Poison on Special Skill: When this character casts their Special Skill, all enemies receive 528 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "ballerina_firmin",
        "name": "Firmin Richard",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 5% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "goblin_fizzcoil",
        "name": "Fizzcoil",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "masquerade_fortuna",
        "name": "Fortuna",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "ice_god_frida",
        "name": "Frida",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "ice_god_frosth",
        "name": "Frosth",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage.",
            "Cleanse on Minion Death: This character is cleansed of status ailments when a Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "garrison_frostsnout",
        "name": "Frostsnout",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "gargoyle_gaillard",
        "name": "Gaillard",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 3 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "construct_blue_mage",
        "name": "Ghealach",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Destructive Core: The Construct Core of this character is Destructive Core.",
            "The Destructive Core activates each time this character's Special Skill is cast",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "wild_cat_gitnib",
        "name": "Gitnib",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "construct_glacivolt",
        "name": "Glacivolt",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core. The Minion Core activates each time this character's Special Skill is cast.",
            "* With fully charged Minion Core, summons a Killer Bot Minion with 22% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge int the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minion from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "ice_god_callum",
        "name": "Gladius",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Mana on Enemy Defensive Buff: This character gains 10% mana when an enemy receives a status effect buff that affects defense. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "ice_god_glenda",
        "name": "Glenda",
        "passives": [
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs."
        ]
    },
    {
        "heroId": "slime_gloozmer",
        "name": "Gloozmer",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "goblin_grimsteel",
        "name": "Grimsteel",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "guardian_hippo",
        "name": "Guardian Hippo",
        "passives": []
    },
    {
        "heroId": "construct_halwinter",
        "name": "Halwinter",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core.",
            "The Minion Core activates each time this character's Special Skill is cast:",
            "* With fully charged Minion Core, summon a Killer Bot Minion with 22% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster is scaled by the amount of charge in Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minions from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "s5_hetepheres",
        "name": "Hetepheres",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies."
        ]
    },
    {
        "heroId": "s5_hetepheres_costume_spa",
        "name": "Hetepheres C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skill that grant extra effects on cast are guaranteed to activate.",
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "valentines_himeros",
        "name": "Himeros",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "tales2_hogne",
        "name": "Hogne",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 315 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "beowulf_hrothgar",
        "name": "Hrothgar",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Heal when Status Ailment Expires or Is Cleared: This character's receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Stacking Attack on Damage Received: When this character receives direct Special Skill damage, gain 30% attack Stack (max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "shadow_hysteria",
        "name": "Hysteria",
        "passives": []
    },
    {
        "heroId": "vegetable_indigon",
        "name": "Indigon",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 50% attack, 20% health",
            "2) Sprout Fiend: 75% attack, 30% health",
            "3) Blossom Mega Fiend: 250% attack, 60% health"
        ]
    },
    {
        "heroId": "ice_god_iris",
        "name": "Iris",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage.",
            "Mana on Buff Dispel: This character receives 10% mana each time a buff is dispelled from this character. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress",
        "name": "Isarnia",
        "passives": []
    },
    {
        "heroId": "nordic_ice_enchantress_costume_aqua",
        "name": "Isarnia C1",
        "passives": []
    },
    {
        "heroId": "nordic_ice_enchantress_costume_ruler",
        "name": "Isarnia C2",
        "passives": []
    },
    {
        "heroId": "nordic_ice_enchantress_costume_cute",
        "name": "Isarnia Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_ice_enchantress_costume_glass",
        "name": "Isarnia Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "astral_dwarf_ixinn",
        "name": "Ixinn",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "elemental_jolt",
        "name": "Jolt",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "faun_jolyon",
        "name": "Jolyon",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Defense Ailments: This character has innate resistance against status ailments, stacks and Wither effects that affect defense."
        ]
    },
    {
        "heroId": "valentines_kabeiroi",
        "name": "Kabeiroi",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "magic_carpet_kesha",
        "name": "Kesha",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "goblin_kettle",
        "name": "Kettle",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "knights_king_arthur",
        "name": "King Arthur",
        "passives": []
    },
    {
        "heroId": "ice_god_klaern",
        "name": "Klaern",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Resist Mana Reduction: This character is immune to mana reductions."
        ]
    },
    {
        "heroId": "christmas_krampus",
        "name": "Krampus",
        "passives": []
    },
    {
        "heroId": "christmas_krampus_costume_eager_devil",
        "name": "Krampus C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by the Hero inflicts 388 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "scoundrel_lane",
        "name": "Lane",
        "passives": [
            "Thief's Opportunity: At the start of each turn this character has a 50% chance to Ransack a random enemy",
            "Ransack:",
            "* Steals 200 health.",
            "* Safely steals one random Growth effect, positive stack, or status effect buff from the enemy. This includes undispellable buffs and Dance effects.",
            "* Safe stealing bypasses secondary effects, such as damage on removal, from the removed buffs. Passive skills and family effects can still activate.",
            "Cheat Death: The first time this character would receive fatal damage, they instead redirect that damage to a random enemy. In battles with multiple waves, the effect is refreshed at the begining of each wave."
        ]
    },
    {
        "heroId": "valentines_lempi",
        "name": "Lempi",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "wild_cat_lennart",
        "name": "Lennart",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "s3_loki_male",
        "name": "Lord Loki",
        "passives": []
    },
    {
        "heroId": "s3_loki_male_costume_shapeshifter",
        "name": "Lord Loki C1",
        "passives": []
    },
    {
        "heroId": "fleur_ludovico",
        "name": "Ludovico",
        "passives": [
            "Sanguine Mark: All damage from normal attacks and Special Skill dealt by this character is increased by 5% per Blood Lily stack on target."
        ]
    },
    {
        "heroId": "titan_hunter_lumi_and_taiga",
        "name": "Lumi & Taiga",
        "passives": [
            "Enhanced Shields on Special: Passive Skill as attacking character",
            "* Ice shields on the board become enhanced with +54% critical chance when this character casts their Special Skill.",
            "Passive Skill as defending character:",
            "* Ice shields on the board become weakened with -47% accuracy when this character casts their Special Skill.",
            "Mark of the Titan Hunter: When this character casts their Special Skill, they mark a random enemy with a Hunting Flare for 4 turns. A target marked with a Hunting Flare receives additional 150 damage when they receive a critical hit."
        ]
    },
    {
        "heroId": "castle_stag_lysanor",
        "name": "Lysanor",
        "passives": [
            "Mana on Buff Received: This character gains 5% mana when receiving a buff or a positive stack.",
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "slime_magistine",
        "name": "Magistine",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "exalted_warrior",
        "name": "Magni",
        "passives": []
    },
    {
        "heroId": "exalted_warrior_costume_ice",
        "name": "Magni C1",
        "passives": []
    },
    {
        "heroId": "exalted_warrior_costume_underworld",
        "name": "Magni C2",
        "passives": []
    },
    {
        "heroId": "exalted_warrior_costume_cute",
        "name": "Magni Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_glass",
        "name": "Magni Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "exalted_warrior_costume_stylish",
        "name": "Magni Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "owl_mariol",
        "name": "Mariol",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "rabbit_blue",
        "name": "Master Lepus",
        "passives": []
    },
    {
        "heroId": "rabbit_blue_costume_riftbreaker",
        "name": "Master Lepus C1",
        "passives": []
    },
    {
        "heroId": "gargoyle_matrera",
        "name": "Matrera",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ice_god_mene",
        "name": "Mene",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage.",
            "Mana on Frost: This character gains 5% mana each time an enemy receives Frost damage."
        ]
    },
    {
        "heroId": "ice_god_miki",
        "name": "Miki",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill."
        ]
    },
    {
        "heroId": "musketeer_milady_de_winter",
        "name": "Milady de Winter",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_milady_de_winter_costume_herbalist",
        "name": "Milady de Winter C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage to all enemies."
        ]
    },
    {
        "heroId": "magic_milena",
        "name": "Milena",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, they have a 50% chance to give 10% mana to all allies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_milena_costume_ice",
        "name": "Milena C1",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, they have a 60% chance to give 10% mana to all allies. If the Special Skill is fully charged, the chance is 100%.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "halloween_miriam_and_midnight",
        "name": "Miriam & Midnight",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "s2_mercenary_woman",
        "name": "Misandra",
        "passives": []
    },
    {
        "heroId": "s2_mercenary_woman_costume_dancer",
        "name": "Misandra C1",
        "passives": []
    },
    {
        "heroId": "easter_miss_ethel",
        "name": "Miss Ethel",
        "passives": []
    },
    {
        "heroId": "champions_mistra",
        "name": "Mistra",
        "passives": [
            "Mana Buff on Status Ailment Received: The character with this skill receives +24% mana generation for 3 turns when they receive any status ailment or a negative stack.",
            "Damage on Enemy Special: If a target is Average mana speed or faster casts a Special Skill, all enemies receive 100 damage. This effect can activate only once per turn.",
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "beachparty_misty",
        "name": "Misty",
        "passives": [
            "Resist Water: This character is immune to status ailments that deal Water damage.",
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 210 Water damage over 2 turns."
        ]
    },
    {
        "heroId": "beowulf_modthryth",
        "name": "Modthryth",
        "passives": [
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or positive stack.",
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Resist Buff Immunity: This character has innate resistance against ailments that give immunity to new buffs."
        ]
    },
    {
        "heroId": "astral_mooncure",
        "name": "Mooncure",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "s4_morel",
        "name": "Morel",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that does damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_morel_costume_sage",
        "name": "Morel C1",
        "passives": [
            "Increased Special Skill Damage: This first time this character cast a Special Skill that deals damage an additional 30% is added to its power.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "christmas_mr_pengi",
        "name": "Mr. Pengi",
        "passives": []
    },
    {
        "heroId": "christmas_mr_pengi_costume_snowboarder",
        "name": "Mr. Pengi C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by the Hero inflicts 416 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "construct_nautica",
        "name": "Nautica",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "ice_god_nerasis",
        "name": "Nerasis",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its target.",
            "Resist Burn: This character is immune to status ailments that deal Burn damage."
        ]
    },
    {
        "heroId": "journey_nineheaded_beast",
        "name": "Nine-Headed Beast",
        "passives": [
            "Health Recovery on Buff Received: This characters has a 50% chance to  recover 10% health when they receive a buff or a positive stack.",
            "Mana on Buff Received: This characters has a 50% chance to recover 10% mana when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "monster_hunter_njal",
        "name": "Njal",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "elemental_nylora",
        "name": "Nylora",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "ballerina_odette",
        "name": "Odette",
        "passives": [
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "ninja_oniwakamaru",
        "name": "Oniwakamaru",
        "passives": []
    },
    {
        "heroId": "astral_dwarf_orcur",
        "name": "Orcur",
        "passives": [
            "Destroy Fiends on Special: When this character casts their Special Skill, all Fiends are destroyed from them.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Resist Healing Ailments: This character has innate resistance against status ailments that affect healing."
        ]
    },
    {
        "heroId": "kalevala_otso",
        "name": "Otso",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "s4_passepartout",
        "name": "Passepartout",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_passepartout_costume_artist",
        "name": "Passepartout C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn.",
            "Health Boost on Special Skill: On Special Skill cast, boosts all allies' HP by 10%."
        ]
    },
    {
        "heroId": "moth_pepperbleu",
        "name": "Pepperbleu",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "ice_god_perseus",
        "name": "Perseus",
        "passives": []
    },
    {
        "heroId": "ice_god_perseus_costume_frozen",
        "name": "Perseus C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "gargoyle_pophit",
        "name": "Pophit",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 3 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "musketeer_porthos",
        "name": "Porthos",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_porthos_costume_merchant",
        "name": "Porthos C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage to all enemies."
        ]
    },
    {
        "heroId": "astral_dwarf_quari",
        "name": "Quari",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "elemental_quinn",
        "name": "Quinn",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "castle_raven_quintin",
        "name": "Quintin",
        "passives": []
    },
    {
        "heroId": "ice_god_raffaele",
        "name": "Raffaele",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "slayer_rian",
        "name": "Rian",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "nordic_male_lord",
        "name": "Richard",
        "passives": []
    },
    {
        "heroId": "nordic_male_lord_costume_senior",
        "name": "Richard C1",
        "passives": []
    },
    {
        "heroId": "nordic_male_lord_costume_injustice",
        "name": "Richard C2",
        "passives": []
    },
    {
        "heroId": "nordic_male_lord_costume_cute",
        "name": "Richard Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_glass",
        "name": "Richard Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "nordic_male_lord_costume_stylish",
        "name": "Richard Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "fox_riverfang",
        "name": "Riverfang",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "fables_rumpelstiltskin",
        "name": "Rumpelstiltskin",
        "passives": []
    },
    {
        "heroId": "fables_rumpelstiltskin_costume_eternal",
        "name": "Rumpelstiltskin C1",
        "passives": []
    },
    {
        "heroId": "s4_russula",
        "name": "Russula",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "s4_russula_costume_painter",
        "name": "Russula C1",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 3 turns."
        ]
    },
    {
        "heroId": "fox_sable",
        "name": "Sable",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "shadow_salvatore",
        "name": "Salvatore",
        "passives": []
    },
    {
        "heroId": "champions_satori",
        "name": "Satori",
        "passives": [
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3 turns when this character receives a status ailment or a negative stack.",
            "Health Boost on Buff Dispel: This character receives 450 boosted health each time a buff is dispelled from this character. This effect can activate only once per turn.",
            "Mana on Buff Dispel: This character receives 10% mana each time a buff is dispelled from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "ninja_sawano",
        "name": "Sawano",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "monster_hunter_sigyn",
        "name": "Sigyn",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "ice_god_sini",
        "name": "Sini",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Status Effect on Mana Reduction: This character get +30% attack for 3 turns when their mana is reduced."
        ]
    },
    {
        "heroId": "castle_stag_siofra",
        "name": "Siofra",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "s3_skadi",
        "name": "Skadi",
        "passives": []
    },
    {
        "heroId": "s3_skadi_costume_ravager",
        "name": "Skadi C1",
        "passives": []
    },
    {
        "heroId": "construct_skarn",
        "name": "Skarn",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Corrosive Core: The Construct Core of this character is Corrosive Core. The Corrosive Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Poison for 3 turns. With a fully charged Corrosive Core, the Corrosive Poison deals 153 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The poison damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "slime_slimgo",
        "name": "Slimgo",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "fables_snow_white",
        "name": "Snow White",
        "passives": []
    },
    {
        "heroId": "fables_snow_white_costume_slayer",
        "name": "Snow White C1",
        "passives": []
    },
    {
        "heroId": "s5_sobek",
        "name": "Sobek",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 255 Sand damage over 3 turns."
        ]
    },
    {
        "heroId": "s5_sobek_costume_guardian",
        "name": "Sobek C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 363 Sand damage over 3 turns.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage an additional 50% is added to its power."
        ]
    },
    {
        "heroId": "outlaw_song_jiang",
        "name": "Song Jiang",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "monster_hunter_sorrow",
        "name": "Sorrow",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 8% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "astral_starwalker",
        "name": "Starwalker",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "ice_god_suzuna",
        "name": "Suzuna",
        "passives": [
            "Resist Healing Ailments: This character is immune to status ailments that affect healing.",
            "Resist Fiends: This character can't receive Fiends."
        ]
    },
    {
        "heroId": "tales2_svafa",
        "name": "Svafa",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 346 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "moth_tealmoine",
        "name": "Tealmoine",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "s2_tethys",
        "name": "Tethys",
        "passives": []
    },
    {
        "heroId": "s2_tethys_costume_steel",
        "name": "Tethys C1",
        "passives": []
    },
    {
        "heroId": "tales1_thalassa",
        "name": "Thalassa",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_thalassa_costume_crystals",
        "name": "Thalassa C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "styx_thanatos",
        "name": "Thanatos",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "circus_theobald",
        "name": "Theobald",
        "passives": []
    },
    {
        "heroId": "royal_knight_commander",
        "name": "Thorne",
        "passives": []
    },
    {
        "heroId": "royal_knight_commander_costume_king",
        "name": "Thorne C1",
        "passives": []
    },
    {
        "heroId": "royal_knight_commander_costume_gryphon",
        "name": "Thorne C2",
        "passives": []
    },
    {
        "heroId": "royal_knight_commander_costume_cute",
        "name": "Thorne Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "royal_knight_commander_costume_glass",
        "name": "Thorne Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "owl_timius",
        "name": "Timius",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "christmas_tinsel",
        "name": "Tinsel",
        "passives": []
    },
    {
        "heroId": "monster_hunter_tremor",
        "name": "Tremor",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "mimic_troop_blue",
        "name": "Troop Mimic Ice",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic grants a chance for the following extra loot when completing stages",
            "RARE",
            "* Imperial Elite Strikers",
            "* Ravager Archers",
            "* Imperial Knights",
            "* Trainer Troop",
            "UNCOMMON",
            "* Imperial Soldiers",
            "* Militia Rookies",
            "* Trainer Troop",
            "COMMON",
            "* Common Villager",
            "* Militia Archers",
            "* Imperial Strikers",
            "* Trainer Troop"
        ]
    },
    {
        "heroId": "magic_ulius",
        "name": "Ulius",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "magic_ulius_costume_buccaneer",
        "name": "Ulius C1",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 60% chance to deal 150% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "ice_god_vela",
        "name": "Vela",
        "passives": [
            "Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions."
        ]
    },
    {
        "heroId": "faun_verity",
        "name": "Verity",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "wild_cat_vernix",
        "name": "Vernix",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "gargoyle_vincent",
        "name": "Vincent",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 3 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "monster_hunter_waterpipe",
        "name": "Waterpipe",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "fox_whitefang",
        "name": "Whitefang",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "outlaw_wu_song",
        "name": "Wu Song",
        "passives": [
            "Health Boost on Critical Special Attack: When this character scores a critical hit with their Special Skill, they boost the health of all their allies by 10%. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "fortune_yan_qing",
        "name": "Yan Qing",
        "passives": [
            "Fierce Dancer: If any allies are Dancing, this character's Special Skill deals +30% more damage."
        ]
    },
    {
        "heroId": "christmas_zappa",
        "name": "Zappa",
        "passives": []
    },
    {
        "heroId": "elemental_zengar",
        "name": "Zengar",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_zengar_costume_farmer",
        "name": "Zengar C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "outlaw_zheng_tianshou",
        "name": "Zheng Tianshou",
        "passives": [
            "Health Boost on Critical Special Attack: When this character scores a critical hit with their Special Skill, they boost the health of all their allies by 10%. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "ninja_zircon",
        "name": "Zircon",
        "passives": []
    },
    {
        "heroId": "forest_female_warrior",
        "name": "Aife",
        "passives": []
    },
    {
        "heroId": "forest_woodsman",
        "name": "Derric",
        "passives": []
    },
    {
        "heroId": "forest_thug",
        "name": "Brogan",
        "passives": []
    },
    {
        "heroId": "forest_female_illusionist",
        "name": "Jenneh",
        "passives": []
    },
    {
        "heroId": "goblin_archer",
        "name": "Needler",
        "passives": []
    },
    {
        "heroId": "masquerade_alessia",
        "name": "Alessia",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "mahayoddha_ali",
        "name": "Ali",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "forest_female_spirit",
        "name": "Belith",
        "passives": []
    },
    {
        "heroId": "forest_female_spirit_costume_autumn",
        "name": "Belith C1",
        "passives": []
    },
    {
        "heroId": "forest_female_spirit_costume_cute",
        "name": "Belith Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_female_spirit_costume_glass",
        "name": "Belith Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forest_archer",
        "name": "Berden",
        "passives": []
    },
    {
        "heroId": "forest_archer_costume_warrior",
        "name": "Berden C1",
        "passives": []
    },
    {
        "heroId": "forest_archer_costume_cute",
        "name": "Berden Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_archer_costume_glass",
        "name": "Berden Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forest_female_druid",
        "name": "Brienne",
        "passives": []
    },
    {
        "heroId": "forest_female_druid_costume_native",
        "name": "Brienne C1",
        "passives": []
    },
    {
        "heroId": "forest_female_druid_costume_cute",
        "name": "Brienne Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_female_druid_costume_glass",
        "name": "Brienne Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forest_female_druid_costume_stylish",
        "name": "Brienne Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "s3_by_ulf",
        "name": "By-Ulf",
        "passives": []
    },
    {
        "heroId": "goblin_fighter",
        "name": "Carver",
        "passives": []
    },
    {
        "heroId": "goblin_fighter_costume_evil",
        "name": "Carver C1",
        "passives": []
    },
    {
        "heroId": "goblin_fighter_costume_cute",
        "name": "Carver Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "goblin_fighter_costume_glass",
        "name": "Carver Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "astral_dwarf_chires",
        "name": "Chires",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Destroy Fiends on Special: When this character casts their Special Skill, all Fiends are destroyed from them."
        ]
    },
    {
        "heroId": "magic_dolgoon",
        "name": "Dolgoon",
        "passives": [
            "Status effect on special: When this character casts their Special Skill, they have a 50% chance to give -25% mana generation for 3 turns to all enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "fleur_eumachius",
        "name": "Eumachius",
        "passives": [
            "Sanguine Mark: All damage from normal attacks and Special Skill dealt by this character is increased by 5% per Blood Lily stack on target."
        ]
    },
    {
        "heroId": "s5_faiez",
        "name": "Faiez",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies."
        ]
    },
    {
        "heroId": "s5_faiez_costume_miner",
        "name": "Faiez C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies.",
            "Guaranteed Effect On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effect on cast are guaranteed to activate.",
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "owl_featherino",
        "name": "Featherino",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "wild_cat_ferni",
        "name": "Ferni",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "monster_hunter_fianna",
        "name": "Fianna",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "forest_friar",
        "name": "Friar Tuck",
        "passives": []
    },
    {
        "heroId": "forest_friar_costume_explorer",
        "name": "Friar Tuck C1",
        "passives": []
    },
    {
        "heroId": "forest_friar_costume_cute",
        "name": "Friar Tuck Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_friar_costume_glass",
        "name": "Friar Tuck Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "journey_general_yin",
        "name": "General Yin",
        "passives": []
    },
    {
        "heroId": "fables_gnomer",
        "name": "Gnomer",
        "passives": []
    },
    {
        "heroId": "halloween_goopy",
        "name": "Goopy",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "s4_gramps",
        "name": "Gramps",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_gramps_costume_gardener",
        "name": "Gramps C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s3_grevle",
        "name": "Grevle",
        "passives": []
    },
    {
        "heroId": "sand_horse",
        "name": "Hisan",
        "passives": []
    },
    {
        "heroId": "lizardman_warrior",
        "name": "Isshtak",
        "passives": []
    },
    {
        "heroId": "lizardman_warrior_costume_dinosaur",
        "name": "Isshtak C1",
        "passives": []
    },
    {
        "heroId": "lizardman_warrior_costume_cute",
        "name": "Isshtak Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "lizardman_warrior_costume_glass",
        "name": "Isshtak Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forsaken_jax",
        "name": "Jax",
        "passives": []
    },
    {
        "heroId": "kingdom_jing",
        "name": "Jing",
        "passives": []
    },
    {
        "heroId": "beauty_beast_lucas",
        "name": "Lucas",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "s2_merman",
        "name": "Mnesseus",
        "passives": []
    },
    {
        "heroId": "s2_merman_costume_leutenant",
        "name": "Mnesseus C1",
        "passives": []
    },
    {
        "heroId": "s2_chameleon_bruiser",
        "name": "Muggy",
        "passives": []
    },
    {
        "heroId": "fox_nettletail",
        "name": "Nettletail",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "slayer_noril",
        "name": "Noril",
        "passives": [
            "Resist Damage from Status Effects: This character has innate resistance against incoming damage from status effects."
        ]
    },
    {
        "heroId": "magic_roxia",
        "name": "Roxia",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, they have a 50% chance to give 10% mana to all allies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "wonderland_bear",
        "name": "Shrubbear",
        "passives": []
    },
    {
        "heroId": "circus_whacker",
        "name": "Whacker",
        "passives": []
    },
    {
        "heroId": "garrison_william",
        "name": "William",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "castle_bear_yona",
        "name": "Yona",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "bard_zarel",
        "name": "Zarel",
        "passives": [
            "Defense ailment reduction: Reduces the effect of defense ailments by -80%. The effect applies to this character and all its allies in the battle."
        ]
    },
    {
        "heroId": "valentines_zarola",
        "name": "Zarola",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "valentines_zarola_costume_cowboy",
        "name": "Zarola C1",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "elemental_alfie",
        "name": "Alfie",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "s3_almur",
        "name": "Almur",
        "passives": []
    },
    {
        "heroId": "s3_almur_costume_lord",
        "name": "Almur C1",
        "passives": []
    },
    {
        "heroId": "magic_anton",
        "name": "Anton",
        "passives": [
            "Healt recovery on special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "styx_brontes",
        "name": "Brontes",
        "passives": [
            "Decreased Minion Health: Enemy Minions inherit -50% less Health when summoned.",
            "Resist Defense Ailments: This character has innate resistance against status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "s3_brynhild",
        "name": "Brynhild",
        "passives": []
    },
    {
        "heroId": "christmas_elf",
        "name": "Buddy",
        "passives": []
    },
    {
        "heroId": "christmas_elf_costume_gift_bookkeper",
        "name": "Buddy C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by this character inflict 252 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "elven_captain",
        "name": "Caedmon",
        "passives": []
    },
    {
        "heroId": "elven_captain_costume_mask",
        "name": "Caedmon C1",
        "passives": []
    },
    {
        "heroId": "elven_captain_costume_cavalier",
        "name": "Caedmon C2",
        "passives": []
    },
    {
        "heroId": "elven_captain_costume_cute",
        "name": "Caedmon Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "elven_captain_costume_glass",
        "name": "Caedmon Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "elven_captain_costume_stylish",
        "name": "Caedmon Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "castle_raven_franz",
        "name": "Franz",
        "passives": []
    },
    {
        "heroId": "slime_fruitio",
        "name": "Fruitio",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "s2_atlantean_robot",
        "name": "Gadeirus",
        "passives": []
    },
    {
        "heroId": "s2_atlantean_robot_costume_sentinel",
        "name": "Gadeirus C1",
        "passives": []
    },
    {
        "heroId": "s2_chameleon_chief",
        "name": "Gobbler",
        "passives": []
    },
    {
        "heroId": "s2_chameleon_chief_costume_heavyweight",
        "name": "Gobbler C1",
        "passives": []
    },
    {
        "heroId": "fables_hansel",
        "name": "Hansel",
        "passives": []
    },
    {
        "heroId": "fables_hansel_costume_vampire_hunter",
        "name": "Hansel C1",
        "passives": []
    },
    {
        "heroId": "rabbit_green",
        "name": "Jack O'Hare",
        "passives": []
    },
    {
        "heroId": "rabbit_green_costume_egg_hunter",
        "name": "Jack O'Hare C1",
        "passives": []
    },
    {
        "heroId": "moth_joyvert",
        "name": "Joyvert",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "gargoyle_kalo",
        "name": "Kalo",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 5 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "lizardman_trapper",
        "name": "Kashhrek",
        "passives": []
    },
    {
        "heroId": "lizardman_trapper_costume_shaman",
        "name": "Kashhrek C1",
        "passives": []
    },
    {
        "heroId": "lizardman_trapper_costume_fisher",
        "name": "Kashhrek C2",
        "passives": []
    },
    {
        "heroId": "lizardman_trapper_costume_cute",
        "name": "Kashhrek Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "lizardman_trapper_costume_glass",
        "name": "Kashhrek Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "fortune_ling_long",
        "name": "Ling Long",
        "passives": [
            "Fierce Dancer: If any allies are Dancing, this character's Special Skill deals +30% more damage."
        ]
    },
    {
        "heroId": "astral_lionstring",
        "name": "Lionstring",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared  with other allies."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior",
        "name": "Little John",
        "passives": []
    },
    {
        "heroId": "forest_woodsman_warrior_costume_camouflage",
        "name": "Little John C1",
        "passives": []
    },
    {
        "heroId": "forest_woodsman_warrior_costume_highlander",
        "name": "Little John C2",
        "passives": []
    },
    {
        "heroId": "forest_woodsman_warrior_costume_cute",
        "name": "Little John Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_woodsman_warrior_costume_glass",
        "name": "Little John Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "circus_marcel",
        "name": "Marcel",
        "passives": []
    },
    {
        "heroId": "forest_mage",
        "name": "Melendor",
        "passives": []
    },
    {
        "heroId": "forest_mage_costume_white",
        "name": "Melendor C1",
        "passives": []
    },
    {
        "heroId": "forest_mage_costume_party",
        "name": "Melendor C2",
        "passives": []
    },
    {
        "heroId": "forest_mage_costume_cute",
        "name": "Melendor Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_mage_costume_glass",
        "name": "Melendor Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forest_mage_costume_stylish",
        "name": "Melendor Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "kalevala_mielikki",
        "name": "Mielikki",
        "passives": [
            "Power of Sisu - When this character starts a turn with low health for the  first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_mielikki_costume_bear_protector",
        "name": "Mielikki C1",
        "passives": [
            "Power of Sisu - When this character starts a turn with low health for the  first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "tales1_mulgog",
        "name": "Mulgog",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_mulgog_costume_bard",
        "name": "Mulgog C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "faun_myrtle",
        "name": "Myrtle",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "monster_hunter_numbskull",
        "name": "Numbskull",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 12% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "slayer_orla",
        "name": "Orla",
        "passives": [
            "Resist Damage from Status Effects: This character has innate resistance against incoming damage from status effects."
        ]
    },
    {
        "heroId": "pirate_cabin_boy",
        "name": "Peters",
        "passives": []
    },
    {
        "heroId": "pirate_cabin_boy_costume_paper",
        "name": "Peters C1",
        "passives": []
    },
    {
        "heroId": "s5_ptolemy",
        "name": "Ptolemy",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies."
        ]
    },
    {
        "heroId": "s5_ptolemy_costume_log",
        "name": "Ptolemy C1",
        "passives": [
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses that latest cleansable status ailment from all allies."
        ]
    },
    {
        "heroId": "castle_stag_raleigh",
        "name": "Raleigh",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "goblin_mage",
        "name": "Skittleskull",
        "passives": []
    },
    {
        "heroId": "goblin_mage_costume_candy",
        "name": "Skittleskull C1",
        "passives": []
    },
    {
        "heroId": "goblin_mage_costume_toad",
        "name": "Skittleskull C2",
        "passives": []
    },
    {
        "heroId": "goblin_mage_costume_cute",
        "name": "Skittleskull Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "goblin_mage_costume_glass",
        "name": "Skittleskull Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "tales2_snorri",
        "name": "Snorri",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 209 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "s4_tettukh",
        "name": "Tettukh",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_tettukh_costume_cheerleader",
        "name": "Tettukh C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "musketeer_villiers",
        "name": "Villiers",
        "passives": [
            "Damage on Special Skill: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_villiers_costume_jester",
        "name": "Villiers C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "castle_raven_wren",
        "name": "Wren",
        "passives": []
    },
    {
        "heroId": "mimic_aether_green",
        "name": "Aether Mimic Nature",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Alpha Aether",
            "* Nature Aether III",
            "* Nature Aether II",
            "* Nature Aether I"
        ]
    },
    {
        "heroId": "s5_ahmose",
        "name": "Ahmose",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_ahmose_costume_reborn",
        "name": "Ahmose C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against Sand damage."
        ]
    },
    {
        "heroId": "forest_god_oberon",
        "name": "Alberich",
        "passives": []
    },
    {
        "heroId": "forest_god_oberon_costume_everoak",
        "name": "Alberich C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "garrison_archibald",
        "name": "Archibald",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Growth effects from all enemies."
        ]
    },
    {
        "heroId": "easter_archie",
        "name": "Archie",
        "passives": []
    },
    {
        "heroId": "easter_archie_costume_gallant",
        "name": "Archie C1",
        "passives": []
    },
    {
        "heroId": "gargoyle_arco",
        "name": "Arco",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "ballerina_armand",
        "name": "Armand Moncharmin",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "mimic_ascension_item_green",
        "name": "Ascension Mimic Nature",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "****",
            "- Damascus Blade",
            "- Tome Of Tactics",
            "- Mysterious Tonic",
            "***",
            "- Fine Gloves",
            "- Compass",
            "- Sturdy Shield",
            "- Tall Boots",
            "- Scabbard",
            "**",
            "- Strong Rope",
            "- Dagger"
        ]
    },
    {
        "heroId": "musketeer_athos",
        "name": "Athos",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_athos_costume_farrier",
        "name": "Athos C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "s2_skyllaros",
        "name": "Atomos",
        "passives": []
    },
    {
        "heroId": "s2_skyllaros_costume_reef",
        "name": "Atomos C1",
        "passives": []
    },
    {
        "heroId": "shadow_atwood",
        "name": "Atwood",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "christmas_augustus",
        "name": "Augustus",
        "passives": []
    },
    {
        "heroId": "nature_god_balbar",
        "name": "Balbar",
        "passives": [
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs.",
            "Health recovery on buff received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "monster_hunter_berit",
        "name": "Berit",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "nature_god_bertila",
        "name": "Bertila",
        "passives": [
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies.",
            "Mana on Minion Death: This character gains a small amount of mana when a Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "nature_god_bo_and_runt",
        "name": "Bo & Runt",
        "passives": [
            "Resist Minion Removal: This character has innate resistance against Minion removal.",
            "Mana on Minion Summon: When a Minion is summoned to an ally, this character gains 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "mahayoddha_bonga",
        "name": "Bonga",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "bard_bonzo",
        "name": "Bonzo",
        "passives": [
            "Quick Tempo: Ballad. All Ballads cast by enemies only last for 1 turn.",
            "Quick Tempo: Dance. All Dances cast by enemies only last for 1 turn."
        ]
    },
    {
        "heroId": "goblin_boom_and_fang",
        "name": "Boom & Fang",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "titan_hunter_borgholf",
        "name": "Borgholf",
        "passives": [
            "Enhanced Shields on Special: Passive Skill as attacking character",
            "* Nature shields on the board become enhanced with +54% critical chance when this character casts their Special Skill.",
            "Passive Skill as defending character",
            "* Nature shields on the board become weakened with -47% accuracy when this character casts their Special Skill.",
            "Mark of the Titan Hunter: When this character casts their Special Skill, they mark a random enemy with a Hunting Flare for 4 turns. A target marked with a Hunting Flare receives additional 150 damage when they receive a critical hit."
        ]
    },
    {
        "heroId": "faun_bramble",
        "name": "Bramble",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Defense Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect defense.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "vegetable_broseph",
        "name": "Broseph",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 50% attack, 20% health",
            "2) Sprout Fiend: 75% attack, 30% health",
            "3) Blossom Mega Fiend: 250% attack, 60% health"
        ]
    },
    {
        "heroId": "slime_bulklug",
        "name": "Bulklug",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "ninja_chikao",
        "name": "Chikao",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "nature_god_chloris",
        "name": "Chloris",
        "passives": [
            "Resist Healing Ailments: This character has innate resistance against ailments that affect healing.",
            "Boost Health on Enemy Special: When an enemy casts their Special Skill, this character has a 50% chance to boost this character's health by 100."
        ]
    },
    {
        "heroId": "nature_god_cinisia",
        "name": "Cinisia",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Increased Attack Per Non-Nature Enemy: At the start of the battle, this character's attack is increased by 5% for enemy that is not of Nature element. In battles with multiple waves, this effect is refreshed at the beginning of each wave."
        ]
    },
    {
        "heroId": "s4_congalach",
        "name": "Congalach",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_congalach_costume_kelp",
        "name": "Congalach C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill, all allies deal +70% increased normal attack and Special Skill damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "elemental_craum",
        "name": "Craum",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "magic_cristobal",
        "name": "Cristobal",
        "passives": [
            "Status effect on special: When this character casts their Special Skill, they have a 50% chance to give -25% mana generation for 3 turns to all their enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_cristobal_costume_emerald",
        "name": "Cristobal C1",
        "passives": [
            "Status effect on special: When this character casts their Special Skill, they have a 60% chance to give -45% mana generation for 3 turns to all their enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "magic_carpet_crustee",
        "name": "Crustee",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "tales2_dagr",
        "name": "Dagr",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 330 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "construct_dancrag",
        "name": "Dancrag",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core.",
            "The Minion Core activates each time this character's Special Skill is cast:",
            "* With a fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minions from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "ballerina_daroga",
        "name": "Daroga",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 5% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "elemental_desmond",
        "name": "Desmond",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "valentines_matchmaker_dodgrom",
        "name": "Dodgrom",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "beowulf_ecgtheow",
        "name": "Ecgtheow",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never mises its target.",
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or positive stack.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "halloween_edwin",
        "name": "Edwin",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_edwin_costume_mafia",
        "name": "Edwin C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "circus_eiora_and_fluffy",
        "name": "Eiora & Fluffy",
        "passives": []
    },
    {
        "heroId": "circus_eiora_and_fluffy_costume_dark",
        "name": "Eiora & Fluffy C1",
        "passives": [
            "Copy Ailment on Cleanse: When a status ailment is cleansed from this hero, a new copy of the cleansed ailment is applied on a random enemy."
        ]
    },
    {
        "heroId": "ninja_ekanite",
        "name": "Ekanite",
        "passives": []
    },
    {
        "heroId": "s5_el_naddaha",
        "name": "El Naddaha",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies."
        ]
    },
    {
        "heroId": "s5_el_naddaha_costume_sea",
        "name": "El Naddaha C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "forest_male_elf",
        "name": "Elkanen",
        "passives": []
    },
    {
        "heroId": "forest_male_elf_costume_dark",
        "name": "Elkanen C1",
        "passives": []
    },
    {
        "heroId": "forest_male_elf_costume_king",
        "name": "Elkanen C2",
        "passives": []
    },
    {
        "heroId": "forest_male_elf_costume_cute",
        "name": "Elkanen Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_glass",
        "name": "Elkanen Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "forest_male_elf_costume_stylish",
        "name": "Elkanen Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "institute_ellery",
        "name": "Ellery",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "forest_god_elradir",
        "name": "Elradir",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or a negative stack."
        ]
    },
    {
        "heroId": "magic_carpet_elyssa",
        "name": "Elyssa",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "mimic_emblem_green",
        "name": "Emblem Mimic Nature",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Master Paladin Emblems",
            "* Master Druid Emblems",
            "* Paladin Emblems",
            "* Druid Emblems"
        ]
    },
    {
        "heroId": "mystery_enigmo",
        "name": "Enigmo",
        "passives": [
            "Memorize Enemy Minions and Fiends: This character has innate ability to Memorize any Minion or Fiend summoned by enemies' Special Skills. The latest Minion and Fiend that enemies summon will stay memorized until the Special Skill is cast."
        ]
    },
    {
        "heroId": "forest_god_evelyn",
        "name": "Evelyn",
        "passives": []
    },
    {
        "heroId": "forest_god_evelyn_costume_huntress",
        "name": "Evelyn C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "mimic_training_hero_green",
        "name": "Experience Mimic Nature",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Common Nature Trainer Heroes",
            "* Uncommon Nature Trainer Heroes",
            "* Rare Nature Trainer Heroes",
            "* Common Nature Heroes",
            "* Uncommon Nature Heroes"
        ]
    },
    {
        "heroId": "tales2_fafnir",
        "name": "Fafnir",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 337 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "masquerade_februus",
        "name": "Februus",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "construct_ferrus",
        "name": "Ferrus",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Corrosive Core: The Construct Core of this character is Corrosive Core. The Corrosive Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Poison for 3 turns. With a fully charged Corrosive Core, the Corrosive Poison deals 128 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The poison damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "nature_god_florenna",
        "name": "Florenna",
        "passives": [
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or a negative stack.",
            "Resist Poison: This character has innate resistance against Poison."
        ]
    },
    {
        "heroId": "fox_foxley",
        "name": "Foxley",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "halloween_francine",
        "name": "Francine",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_francine_costume_mafia",
        "name": "Francine C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "beowulf_freawaru",
        "name": "Freawaru",
        "passives": [
            "Mana Per Enemy Buff: Gains a small amount of mana for every active status effect buff that the enemy team has at the start of each turn (maximum of 20 buffs).",
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs."
        ]
    },
    {
        "heroId": "s3_frigg",
        "name": "Frigg",
        "passives": []
    },
    {
        "heroId": "s3_frigg_costume_clairvoyance",
        "name": "Frigg C1",
        "passives": []
    },
    {
        "heroId": "fables_frog_prince",
        "name": "Frog Prince",
        "passives": []
    },
    {
        "heroId": "construct_frond",
        "name": "Frond",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Destructive Core: The Construct Core of this character is Destructive Core. The Destructive Core activates each time this character's Special Skill is cast:",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "slime_fungustine",
        "name": "Fungustine",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "tales1_galapago",
        "name": "Galapago",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_galapago_costume_quarry",
        "name": "Galapago C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "s4_garjammal",
        "name": "Garjammal",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "s4_garjammal_costume_kite",
        "name": "Garjammal C1",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "gargoyle_garten",
        "name": "Garten",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 4 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "tales1_gelert",
        "name": "Gelert",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_gelert_costume_scavenger",
        "name": "Gelert C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "christmas_ginger",
        "name": "Ginger",
        "passives": []
    },
    {
        "heroId": "christmas_ginger_costume_gift_wrapper",
        "name": "Ginger C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by this character inflict 500 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "garrison_godfrey",
        "name": "Godfrey",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "slime_goorian",
        "name": "Goorian",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "forest_god_grace",
        "name": "Grace",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage.",
            "Mana on Taunt: Each time an enemy receives a Taunt status effect this character's mana is increased by 10%."
        ]
    },
    {
        "heroId": "knights_green_knight",
        "name": "Green Knight",
        "passives": []
    },
    {
        "heroId": "forest_god_gregorion",
        "name": "Gregorion",
        "passives": []
    },
    {
        "heroId": "forest_god_gregorion_costume_alchemist",
        "name": "Gregorion C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "beowulf_grendel",
        "name": "Grendel",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never mises its target.",
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "moth_grovevert",
        "name": "Grovevert",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "kingdom_guan_yu",
        "name": "Guan Yu",
        "passives": []
    },
    {
        "heroId": "kingdom_guan_yu_costume_dragon",
        "name": "Guan Yu C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "guardian_chameleon",
        "name": "Guardian Chameleon",
        "passives": []
    },
    {
        "heroId": "monster_hunter_hammertusk",
        "name": "Hammertusk",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "construct_haulstone",
        "name": "Haulstone",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core, All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "s3_heimdall",
        "name": "Heimdall",
        "passives": []
    },
    {
        "heroId": "s3_heimdall_costume_dreaded",
        "name": "Heimdall C1",
        "passives": []
    },
    {
        "heroId": "forest_titan",
        "name": "Horghall",
        "passives": []
    },
    {
        "heroId": "forest_titan_costume_jester",
        "name": "Horghall C1",
        "passives": []
    },
    {
        "heroId": "forest_titan_costume_nightmare",
        "name": "Horghall C2",
        "passives": []
    },
    {
        "heroId": "forest_titan_costume_cute",
        "name": "Horghall Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_titan_costume_glass",
        "name": "Horghall Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "halloween_hortensia",
        "name": "Hortensia",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "castle_bear_humbert",
        "name": "Humbert",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when  they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "astral_dwarf_hygil",
        "name": "Hygil",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "kalevala_iku_turso",
        "name": "Iku-Turso",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "ninja_ito",
        "name": "Ito",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "ninja_jade",
        "name": "Jade",
        "passives": []
    },
    {
        "heroId": "forest_female_elf",
        "name": "Kadilen",
        "passives": []
    },
    {
        "heroId": "forest_female_elf_costume_mage",
        "name": "Kadilen C1",
        "passives": []
    },
    {
        "heroId": "forest_female_elf_costume_fairy",
        "name": "Kadilen C2",
        "passives": []
    },
    {
        "heroId": "forest_female_elf_costume_cute",
        "name": "Kadilen Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "forest_female_elf_costume_glass",
        "name": "Kadilen Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "monster_hunter_kai",
        "name": "Kai",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "forsaken_khatrox",
        "name": "Khatrox",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "forest_god_kingston",
        "name": "Kingston",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage."
        ]
    },
    {
        "heroId": "garrison_kolya",
        "name": "Kolya",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "pirate_lady",
        "name": "Lady Locke",
        "passives": []
    },
    {
        "heroId": "pirate_lady_costume_queen",
        "name": "Lady Locke C1",
        "passives": [
            "Poison on Special Skill: When this character casts their Special Skill, all enemies receive 540 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "knights_lady_of_the_lake",
        "name": "Lady of the Lake",
        "passives": []
    },
    {
        "heroId": "knights_lady_of_the_lake_costume_blades",
        "name": "Lady of the Lake C1",
        "passives": []
    },
    {
        "heroId": "beauty_beast_laurent",
        "name": "Laurent",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "nature_god_leadria",
        "name": "Leadria",
        "passives": [
            "Resist Max Health Reduction: This character is immune to max health reduction.",
            "Boosted Health From Dead Minion: This character recovers 50 boosted health when a minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "goblin_leafwizzle",
        "name": "Leafwhisk",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "wild_cat_leonie",
        "name": "Leonie",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "elven_archer",
        "name": "Lianna",
        "passives": []
    },
    {
        "heroId": "elven_archer_costume_moon",
        "name": "Lianna C1",
        "passives": []
    },
    {
        "heroId": "elven_archer_costume_raven",
        "name": "Lianna C2",
        "passives": []
    },
    {
        "heroId": "elven_archer_costume_cute",
        "name": "Lianna Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "elven_archer_costume_glass",
        "name": "Lianna Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "elven_archer_costume_stylish",
        "name": "Lianna Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "moth_limeboire",
        "name": "Limeboire",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "outlaw_lin_chong",
        "name": "Lin Chong",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "nature_god_liora",
        "name": "Liora",
        "passives": [
            "Resist Health Steal Ailments: This character is immune to status ailments that steal health.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "kingdom_liu_bei",
        "name": "Liu Bei",
        "passives": []
    },
    {
        "heroId": "kingdom_liu_bei_costume_nature",
        "name": "Liu Bei C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "s4_lughaidh",
        "name": "Lughaidh",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is  reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_lughaidh_costume_deathless",
        "name": "Lughaidh C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character.",
            "Boost Health on Special Skill: When this characters casts their Special Skill, they boost the health of all their allies by 10%."
        ]
    },
    {
        "heroId": "s5_maat",
        "name": "Ma'at",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_maat_costume_river",
        "name": "Ma'at C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their  Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "astral_dwarf_maegwyn",
        "name": "Maegwyn",
        "passives": [
            "Destroy Fiends on Special: When this character casts their Special Skill, all fiends are destroyed from them.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Resist Healing Ailments: This character has innate resistance against status ailments that affect healing."
        ]
    },
    {
        "heroId": "forest_god_elinor",
        "name": "Margaret",
        "passives": [
            "Resist Dispels: This character is immune to effects that would dispel their status effect buffs."
        ]
    },
    {
        "heroId": "mighty_pet_toto",
        "name": "Max",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "beachparty_mazoga",
        "name": "Mazoga",
        "passives": [
            "Resist Water Damage: This character has innate resistance against Water Damage.",
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 254 Water damage over 2 turns."
        ]
    },
    {
        "heroId": "mahayoddha_meenakshi",
        "name": "Meenakshi",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions."
        ]
    },
    {
        "heroId": "gargoyle_mena",
        "name": "Mena",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 3 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "bard_merith",
        "name": "Merith",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "monster_hunter_mistweaver",
        "name": "Mistweaver",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "astral_moonflower",
        "name": "Moonflower",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "knights_morgan_le_fay",
        "name": "Morgan Le Fay",
        "passives": []
    },
    {
        "heroId": "christmas_mrs_claus",
        "name": "Mother North",
        "passives": []
    },
    {
        "heroId": "christmas_mrs_claus_costume_fangirl",
        "name": "Mother North C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by the Hero inflicts 304 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "slime_mucktus",
        "name": "Mucktus",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "ninja_myoinni",
        "name": "Myoin-ni",
        "passives": []
    },
    {
        "heroId": "nature_god_mystia",
        "name": "Mystia",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Ignore Taunt: This character's Special Skill is not affected by Taunt."
        ]
    },
    {
        "heroId": "champions_nogu",
        "name": "Nogu",
        "passives": [
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3  turns when this character receives a status ailment or a negative stack.",
            "Mana on Health Boosting Special Skill: This character gains 10% mana each  time an enemy casts a Special Skill that directly boosts health.",
            "Health Boost on Enemy Health Boost: This character gets 450 boosted health  each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "tales2_ott",
        "name": "Ott",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 305 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_ott_costume_herbalist",
        "name": "Ott C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 364 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "shadow_penelope",
        "name": "Penelope",
        "passives": []
    },
    {
        "heroId": "faun_peregrine",
        "name": "Peregrine",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "ninja_peridot",
        "name": "Peridot",
        "passives": []
    },
    {
        "heroId": "s4_phileas_fogg",
        "name": "Phileas Fogg",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_phileas_fogg_costume_engineer",
        "name": "Phileas Fogg C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "garrison_pip",
        "name": "Pip",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "ballerina_prince_siegfried",
        "name": "Prince Siegfried",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Heal when status ailment expires or is cleared: This character receives 20% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "lunar_new_year_qinglong",
        "name": "Qinglong",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "musketeer_queen_anne",
        "name": "Queen Anne",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "castle_wolf_quenell",
        "name": "Quenell",
        "passives": []
    },
    {
        "heroId": "castle_wolf_quenell_costume_wood",
        "name": "Quenell C1",
        "passives": [
            "Increased Status Effect Duration: Chance to increase the duration of cast status effects.",
            "* +1 turn: 75%",
            "* +2 turns: 25%"
        ]
    },
    {
        "heroId": "magic_carpet_ragrim",
        "name": "Ragrim",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "s3_ratatoskr",
        "name": "Ratatoskr",
        "passives": []
    },
    {
        "heroId": "s3_ratatoskr_costume_architect",
        "name": "Ratatoskr C1",
        "passives": []
    },
    {
        "heroId": "owl_relius",
        "name": "Relius",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "construct_rhineglow",
        "name": "Rhineglow",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Destructive Core: The Construct Core of this character is Destructive Core. The Destructive Core activates each time this character's Special Skill is cast:",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core. All charge is exchausted when the Core is activated."
        ]
    },
    {
        "heroId": "elemental_roz",
        "name": "Roz",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_roz_costume_disco",
        "name": "Roz C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "easter_sadie",
        "name": "Sadie",
        "passives": []
    },
    {
        "heroId": "journey_sha_wujing",
        "name": "Sha Wujing",
        "passives": [
            "Mana on Buff Received: This character has a 50% chance to gain 10% mana when they receive a buff or possitive stack.",
            "Health Recovery on Buff Received: This character has a 50% chance to recover 10% health when they receive a buff or possitve stack."
        ]
    },
    {
        "heroId": "nature_god_silvaria",
        "name": "Silvaria",
        "passives": [
            "Resist Minion Removal: This character is immune to effects that would remove Minions from them.",
            "Summon on Burn: Each time this character receives a Burn status ailment, they summon a Forest Guardian Minion for themselves. Forest Guardian Minion inherits 40% HP and 40% atack from this character."
        ]
    },
    {
        "heroId": "goblin_smarttongue",
        "name": "Smarttongue",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "mighty_pet_snowball",
        "name": "Snowball",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals  85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this  character gains 5% health and 5% mana. This effect can activate only once  per turn."
        ]
    },
    {
        "heroId": "goblin_soursting",
        "name": "Soursting",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "tales1_spartoi",
        "name": "Spartoi",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_spartoi_costume_guard",
        "name": "Spartoi C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "fox_spiff",
        "name": "Spiff",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "rodent_sproutwhisker",
        "name": "Sproutwhisker",
        "passives": [
            "Nibble: When an ally casts their Special Skill, this character deals 200% damage and gives -35% defense for 3 turns to a random enemy.",
            "Tiny Frame: This character is not affected by effects that increase or reduce attack. This includes status effect buffs and ailments, positive and negative Stacks, Growth and Wither effects."
        ]
    },
    {
        "heroId": "monster_hunter_staintongue",
        "name": "Staintongue",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 5% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "astral_starlass",
        "name": "Starlass",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "outlaw_sun_erniang",
        "name": "Sun Erniang",
        "passives": [
            "Health Boost on Critical Special Attack: When this character scores a critical hit with their Special Skill, they boost the health of all their allies by 10%. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "monster_hunter_sune",
        "name": "Sune",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "kalevala_suomuhauki",
        "name": "Suomuhauki",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "ninja_tametomo",
        "name": "Tametomo",
        "passives": []
    },
    {
        "heroId": "s2_junglehunter",
        "name": "Tarlak",
        "passives": []
    },
    {
        "heroId": "s2_junglehunter_costume_party",
        "name": "Tarlak C1",
        "passives": []
    },
    {
        "heroId": "castle_bear_teddy",
        "name": "Teddy",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when  they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "forest_god_telluria",
        "name": "Telluria",
        "passives": [
            "Resist Minion Removal: This character is immune to effects that would remove Minions from them."
        ]
    },
    {
        "heroId": "magic_telonius",
        "name": "Telonius",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "magic_telonius_costume_brew",
        "name": "Telonius C1",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 60% chance to deal 150% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "wild_cat_thaffer",
        "name": "Thaffer",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "wonderland_hatter",
        "name": "The Hatter",
        "passives": []
    },
    {
        "heroId": "wonderland_hatter_costume_tea",
        "name": "The Hatter C1",
        "passives": [
            "Mindless Attack on Special Skill: When this character casts their Special Skill, they have a 50% chance to give Mindless Attack for 3 turns to a random enemy."
        ]
    },
    {
        "heroId": "garrison_theodosius",
        "name": "Theodosius",
        "passives": [
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack.",
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "villain_toxicandra",
        "name": "Toxicandra",
        "passives": []
    },
    {
        "heroId": "villain_toxicandra_costume_rose",
        "name": "Toxicandra C1",
        "passives": [
            "Curse on Special Skill: When this character casts their Special Skill, all enemies receive 461 Curse damage over 4 turns, starting low and increasing every turn."
        ]
    },
    {
        "heroId": "astral_demon_turundh",
        "name": "Turundh",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "kalevala_vainamoinen",
        "name": "Vainamoinen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_vainamoinen_costume_vainamoinen_sage",
        "name": "Vainamoinen C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "slime_verdigoo",
        "name": "Verdigoo",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "valentines_vernon",
        "name": "Vernon",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "owl_verus",
        "name": "Verus",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "nature_god_viselus",
        "name": "Viselus",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Health Boost of Poison: Boosts health of this character and nearby allies by 2% for each enemy inflicted with Poison at the end of each turn. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "fortune_wei_qi",
        "name": "Wei Qi",
        "passives": [
            "Fierce Dancer: If any allies are Dancing, this character's Special Skill deals +30% more damage."
        ]
    },
    {
        "heroId": "bard_winifred",
        "name": "Winifred",
        "passives": [
            "Defense ailment reduction: Reduces the effect of defense ailments by 80%. The effect applies to this character and all its allies in the battle."
        ]
    },
    {
        "heroId": "elemental_xandrella",
        "name": "Xandrella",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_xandrella_costume_idol",
        "name": "Xandrella C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "castle_stag_xiamara",
        "name": "Xiamara",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaoqing",
        "name": "Xiaoqing",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "astral_demon_xshahr",
        "name": "Xshahr",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "sand_king",
        "name": "Yunan",
        "passives": []
    },
    {
        "heroId": "sand_king_costume_lifeguard",
        "name": "Yunan C1",
        "passives": []
    },
    {
        "heroId": "shadow_zavinia",
        "name": "Zavinia",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "forest_god_zeline",
        "name": "Zeline",
        "passives": []
    },
    {
        "heroId": "forest_god_zeline_costume_avian",
        "name": "Zeline C1",
        "passives": [
            "Cleanse on Special Skill: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "institute_zenas",
        "name": "Zenas",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "forest_god_zocc",
        "name": "Zocc",
        "passives": [
            "Resist Water: This character is immune to status ailments that deal Water damage."
        ]
    },
    {
        "heroId": "elemental_zuni",
        "name": "Zuni",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "cultist_thief",
        "name": "Fletcher",
        "passives": []
    },
    {
        "heroId": "blackguard_female_archer",
        "name": "Nightshade",
        "passives": []
    },
    {
        "heroId": "blackguard_scout",
        "name": "Julius",
        "passives": []
    },
    {
        "heroId": "cultist_female_poisoner",
        "name": "Layla",
        "passives": []
    },
    {
        "heroId": "undead_screaming_zombie",
        "name": "Silthus",
        "passives": []
    },
    {
        "heroId": "castle_raven_aderyn",
        "name": "Aderyn",
        "passives": []
    },
    {
        "heroId": "s3_anwindr",
        "name": "An-Windr",
        "passives": []
    },
    {
        "heroId": "s5_aqeela",
        "name": "Aqeela",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies."
        ]
    },
    {
        "heroId": "s5_aqeela_costume_sorcerer",
        "name": "Aqeela C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "cultist_mage",
        "name": "Balthazar",
        "passives": []
    },
    {
        "heroId": "cultist_mage_costume_voodoo",
        "name": "Balthazar C1",
        "passives": []
    },
    {
        "heroId": "cultist_mage_costume_cute",
        "name": "Balthazar Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "cultist_mage_costume_glass",
        "name": "Balthazar Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "cultist_mage_costume_stylish",
        "name": "Balthazar Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "gargoyle_betty",
        "name": "Betty",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 4 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s3_bjorn",
        "name": "Bjorn",
        "passives": []
    },
    {
        "heroId": "s3_bjorn_costume_viking",
        "name": "Bjorn C1",
        "passives": []
    },
    {
        "heroId": "gargoyle_budatin",
        "name": "Budatin",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s2_lantern_ghost",
        "name": "Chochin",
        "passives": []
    },
    {
        "heroId": "villain_edd",
        "name": "Edd",
        "passives": []
    },
    {
        "heroId": "s2_fiji_mermaid",
        "name": "Gill-Ra",
        "passives": []
    },
    {
        "heroId": "s2_fiji_mermaid_costume_hunter",
        "name": "Gill-Ra C1",
        "passives": []
    },
    {
        "heroId": "monster_hunter_greel",
        "name": "Greel",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 12% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "guardian_bat",
        "name": "Guardian Bat",
        "passives": []
    },
    {
        "heroId": "halloween_jack",
        "name": "Jack",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "slayer_maeve",
        "name": "Maeve",
        "passives": [
            "Resist Damage from Status Effects: This character has innate resistance against incoming damage from status effects."
        ]
    },
    {
        "heroId": "ninja_morganite",
        "name": "Morganite",
        "passives": []
    },
    {
        "heroId": "s4_morris",
        "name": "Morris",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "s4_morris_costume_potter",
        "name": "Morris C1",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "undead_horned_skeleton",
        "name": "Oberon",
        "passives": []
    },
    {
        "heroId": "undead_horned_skeleton_costume_fool",
        "name": "Oberon C1",
        "passives": []
    },
    {
        "heroId": "undead_horned_skeleton_costume_cute",
        "name": "Oberon Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "undead_horned_skeleton_costume_glass",
        "name": "Oberon Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "kalevala_para",
        "name": "Para",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "blackguard_female_captain",
        "name": "Prisca",
        "passives": []
    },
    {
        "heroId": "blackguard_female_captain_costume_musketeer",
        "name": "Prisca C1",
        "passives": []
    },
    {
        "heroId": "blackguard_female_captain_costume_cute",
        "name": "Prisca Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "blackguard_female_captain_costume_glass",
        "name": "Prisca Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "blackguard_skulker",
        "name": "Renfeld",
        "passives": []
    },
    {
        "heroId": "blackguard_skulker_costume_doctor",
        "name": "Renfeld C1",
        "passives": []
    },
    {
        "heroId": "blackguard_skulker_costume_cute",
        "name": "Renfeld Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "blackguard_skulker_costume_glass",
        "name": "Renfeld Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "knights_treevil",
        "name": "Treevil",
        "passives": []
    },
    {
        "heroId": "undead_running_skeleton",
        "name": "Tyrum",
        "passives": []
    },
    {
        "heroId": "undead_running_skeleton_costume_roman",
        "name": "Tyrum C1",
        "passives": []
    },
    {
        "heroId": "undead_running_skeleton_costume_cute",
        "name": "Tyrum Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "undead_running_skeleton_costume_glass",
        "name": "Tyrum Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "beowulf_unferth",
        "name": "Unferth",
        "passives": [
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Perfect Accuracy: This character's Special Skill never mises its target."
        ]
    },
    {
        "heroId": "vampire_lord",
        "name": "Vlad",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "s5_ahhotep",
        "name": "Ahhotep",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies."
        ]
    },
    {
        "heroId": "s5_ahhotep_costume_champion",
        "name": "Ahhotep C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana each time they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "s2_ghost_woman",
        "name": "Ameonna",
        "passives": []
    },
    {
        "heroId": "s2_ghost_woman_costume_yurei",
        "name": "Ameonna C1",
        "passives": []
    },
    {
        "heroId": "ninja_ametrine",
        "name": "Ametrine",
        "passives": []
    },
    {
        "heroId": "halloween_ana_belle",
        "name": "Ana-Belle",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_ana_belle_costume_mafia",
        "name": "Ana-Belle C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "styx_arges",
        "name": "Arges",
        "passives": [
            "Decreased Minion Health: Enemy Minions inherit -50% less Health when summoned.",
            "Resist Defense Ailments: This character has innate resistance against status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "pirate_first_mate",
        "name": "Boomer",
        "passives": []
    },
    {
        "heroId": "wonderland_cheshire_cat",
        "name": "Cheshire Cat",
        "passives": []
    },
    {
        "heroId": "wonderland_cheshire_cat_costume_malicious",
        "name": "Cheshire Cat C1",
        "passives": []
    },
    {
        "heroId": "mighty_pet_cupcake",
        "name": "Cupcake",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "undead_captain_warrior",
        "name": "Cyprian",
        "passives": []
    },
    {
        "heroId": "undead_captain_warrior_costume_prince",
        "name": "Cyprian C1",
        "passives": []
    },
    {
        "heroId": "undead_captain_warrior_costume_reveller",
        "name": "Cyprian C2",
        "passives": []
    },
    {
        "heroId": "undead_captain_warrior_costume_cute",
        "name": "Cyprian Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "undead_captain_warrior_costume_glass",
        "name": "Cyprian Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "christmas_dizzy",
        "name": "Dizzy",
        "passives": []
    },
    {
        "heroId": "fox_foxglove",
        "name": "Foxglove",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "s3_fura",
        "name": "Fura",
        "passives": []
    },
    {
        "heroId": "s3_fura_costume_herbalist",
        "name": "Fura C1",
        "passives": []
    },
    {
        "heroId": "sand_vizier",
        "name": "Gafar",
        "passives": []
    },
    {
        "heroId": "journey_heifeng_guai",
        "name": "Heifeng Guai",
        "passives": []
    },
    {
        "heroId": "villain_ingolf",
        "name": "Ingolf",
        "passives": []
    },
    {
        "heroId": "sand_tower",
        "name": "Jabbar",
        "passives": []
    },
    {
        "heroId": "owl_juliani",
        "name": "Juliani",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "musketeer_kitty",
        "name": "Kitty",
        "passives": [
            "Damage on Special Skill: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage to all enemies."
        ]
    },
    {
        "heroId": "musketeer_kitty_costume_harvester",
        "name": "Kitty C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "castle_bear_koda",
        "name": "Koda",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "elemental_lexi",
        "name": "Lexi",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "monster_hunter_meadow",
        "name": "Meadow",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "knights_merlin",
        "name": "Merlin",
        "passives": []
    },
    {
        "heroId": "knights_merlin_costume_astrology",
        "name": "Merlin C1",
        "passives": []
    },
    {
        "heroId": "s2_proteus",
        "name": "Proteus",
        "passives": []
    },
    {
        "heroId": "s2_proteus_costume_farseer",
        "name": "Proteus C1",
        "passives": []
    },
    {
        "heroId": "blackguard_knight",
        "name": "Rigard",
        "passives": []
    },
    {
        "heroId": "blackguard_knight_costume_elegant",
        "name": "Rigard C1",
        "passives": []
    },
    {
        "heroId": "blackguard_knight_costume_healer",
        "name": "Rigard C2",
        "passives": []
    },
    {
        "heroId": "blackguard_knight_costume_cute",
        "name": "Rigard Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "blackguard_knight_costume_glass",
        "name": "Rigard Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "institute_ryleh",
        "name": "Ryleh",
        "passives": [
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "undead_female_warrior",
        "name": "Sabina",
        "passives": []
    },
    {
        "heroId": "undead_female_warrior_costume_princess",
        "name": "Sabina C1",
        "passives": []
    },
    {
        "heroId": "undead_female_warrior_costume_rococo",
        "name": "Sabina C2",
        "passives": []
    },
    {
        "heroId": "undead_female_warrior_costume_cute",
        "name": "Sabina Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "undead_female_warrior_costume_glass",
        "name": "Sabina Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "magic_sergei",
        "name": "Sergei",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "tales1_sharkhai",
        "name": "Shar'Khai",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_sharkhai_costume_butcher",
        "name": "Shar'Khai C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "shadow_shoggo",
        "name": "Shoggo",
        "passives": []
    },
    {
        "heroId": "moth_shyombre",
        "name": "Shyombre",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "s3_stonecleave",
        "name": "Stonecleave",
        "passives": []
    },
    {
        "heroId": "fleur_talesie",
        "name": "Talesie",
        "passives": [
            "Sanguine Mark: All damage from normal attacks and Special Skill dealt by this character is increased by 5% per Blood Lily stack on target."
        ]
    },
    {
        "heroId": "blackguard_commander",
        "name": "Tiburtus",
        "passives": []
    },
    {
        "heroId": "blackguard_commander_costume_metal",
        "name": "Tiburtus C1",
        "passives": []
    },
    {
        "heroId": "blackguard_commander_costume_feather",
        "name": "Tiburtus C2",
        "passives": []
    },
    {
        "heroId": "blackguard_commander_costume_cute",
        "name": "Tiburtus Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "blackguard_commander_costume_glass",
        "name": "Tiburtus Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "ronin_tokage_daigo",
        "name": "Tokage Daigo",
        "passives": [
            "Prevent Boosted Healing: Enemies' health cannot increase above their max health.",
            "Dishonorable Defeat: When this character is defeated by a Special Skill, they perform the following actions",
            "* The attacker receives 400% damage.",
            "* The attacker receives 1200 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "goblin_acidfire",
        "name": "Acidfire",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "elemental_aconia",
        "name": "Aconia",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage -10%"
        ]
    },
    {
        "heroId": "elemental_aconia_costume_courier",
        "name": "Aconia C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage +150%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage -25%"
        ]
    },
    {
        "heroId": "dark_god_aeron",
        "name": "Aeron",
        "passives": []
    },
    {
        "heroId": "dark_god_aeron_costume_periwig",
        "name": "Aeron C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "mimic_aether_purple",
        "name": "Aether Mimic Dark",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Alpha Aether",
            "* Dark Aether III",
            "* Dark Aether II",
            "* Dark Aether I"
        ]
    },
    {
        "heroId": "magic_carpet_agadh",
        "name": "Agadh",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "magic_agrafena",
        "name": "Agrafena",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_agrafena_costume_dark",
        "name": "Agrafena C1",
        "passives": [
            "Damage on Special: When this character casts their Special Skill, they have a 60% chance to deal 150% damage to all enemies. If the Special Skill is fully charged, the chance is 100%.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "dark_god_akilius",
        "name": "Akilius",
        "passives": [
            "Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions.",
            "Health from Dead Minion: This character recovers 100 health when a Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "s3_alfrike",
        "name": "Alfrike",
        "passives": []
    },
    {
        "heroId": "s3_alfrike_costume_hatter",
        "name": "Alfrike C1",
        "passives": []
    },
    {
        "heroId": "magic_carpet_amelia",
        "name": "Amelia",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "ninja_amethyst",
        "name": "Amethyst",
        "passives": []
    },
    {
        "heroId": "dark_god_anoushka",
        "name": "Anoushka",
        "passives": [
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies.",
            "Health Recovery on Status Ailment Received: This character recovers 10% health when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "s5_anubis",
        "name": "Anubis",
        "passives": [
            "Effects on special skill: 60% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies."
        ]
    },
    {
        "heroId": "s5_anubis_costume_dancefloor",
        "name": "Anubis C1",
        "passives": [
            "Effects on special skill: 60% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "musketeer_aramis",
        "name": "Aramis",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_aramis_costume_boulanger",
        "name": "Aramis C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "dark_god_arfanias",
        "name": "Arfanias",
        "passives": [
            "Status Effect on Mana Reduction: This character gets +30% attack for 3 turns when their mana reduced.",
            "Resist Health Steal Ailments: This hero is immune to status ailments that steal health."
        ]
    },
    {
        "heroId": "construct_arzen",
        "name": "Arzen",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core. The Minion Core activates each time this character's Special Skill is cast",
            "* With fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge int the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minion from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "mimic_ascension_item_purple",
        "name": "Ascension Mimic Dark",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "****",
            "- Damascus Blade",
            "- Tome Of Tactics",
            "- Royal Tabard",
            "***",
            "- Fine Gloves",
            "- Compass",
            "- Trap Tools",
            "- Tall Boots",
            "- Scabbard",
            "**",
            "- Strong Rope",
            "- Dagger"
        ]
    },
    {
        "heroId": "shadow_asketel",
        "name": "Asketel",
        "passives": []
    },
    {
        "heroId": "s5_bastet",
        "name": "Bastet",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies."
        ]
    },
    {
        "heroId": "s5_bastet_costume_forest",
        "name": "Bastet C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "magic_becky",
        "name": "Becky",
        "passives": [
            "Health Recovery on Special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully changed, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "magic_becky_costume_gothic",
        "name": "Becky C1",
        "passives": [
            "Health Recovery on Special: When this character casts their Special Skill, they have a 60% chance to recover 20% health for all allies. If the Special Skill is fully changed, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "bard_belladonna",
        "name": "Belladonna",
        "passives": [
            "Mana increase reduction: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "s3_bera",
        "name": "Bera",
        "passives": []
    },
    {
        "heroId": "s3_bera_costume_conjurer",
        "name": "Bera C1",
        "passives": []
    },
    {
        "heroId": "fables_boss_wolf",
        "name": "Boss Wolf",
        "passives": []
    },
    {
        "heroId": "titan_hunter_brachynd",
        "name": "Brachynd",
        "passives": [
            "Enhanced Shields on Special:",
            "Passive Skill as attacking character: Dark shields on the board become enhanced with +54% critical chance when this character casts their Special Skill.",
            "Passive Skill as defending character: Dark shields on the board become weakened with -47% accuracy when this character casts their Special Skill.",
            "Mark of the Titan Hunter: When this character casts their Special Skill, they mark a random enemy with a Hunting Flare for 4 turns. A target marked with a Hunting Flare receives additional 150 damage when they receive a critical hit."
        ]
    },
    {
        "heroId": "construct_carta",
        "name": "Carta",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core. All charge is exchausted when the Core is activated."
        ]
    },
    {
        "heroId": "castle_stag_cecilia",
        "name": "Cecilia",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "owl_cennius",
        "name": "Cennius",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "dark_god_chakkoszrot",
        "name": "Chakkoszrot",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3 turns when this character receives a status ailment or a negative stack."
        ]
    },
    {
        "heroId": "outlaw_chao_gai",
        "name": "Chao Gai",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "styx_charon",
        "name": "Charon",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "dark_god_clarissa",
        "name": "Clarissa",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage."
        ]
    },
    {
        "heroId": "villain_dark_lord",
        "name": "Dark Lord",
        "passives": []
    },
    {
        "heroId": "villain_dark_lord_costume_astronomer",
        "name": "Dark Lord C1",
        "passives": [
            "Curse on Special Skill: When this character casts their Special Skill, all enemies receive 473 Curse damage over 4 turns, starting low and increasing every turn."
        ]
    },
    {
        "heroId": "bard_darkbeat",
        "name": "Darkbeat",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "goblin_darkfeather",
        "name": "Darkfeather",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "goblin_deadboot",
        "name": "Deadboot",
        "passives": [
            "Effects on Special Skill: 30% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "astral_demilune",
        "name": "Demilune",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared  with other allies."
        ]
    },
    {
        "heroId": "mahayoddha_devyani",
        "name": "Devyani",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "kingdom_diaochan",
        "name": "Diaochan",
        "passives": []
    },
    {
        "heroId": "kingdom_diaochan_costume_flowers",
        "name": "Diaochan C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "magitech_sniper",
        "name": "Domitia",
        "passives": []
    },
    {
        "heroId": "magitech_sniper_costume_steampunk",
        "name": "Domitia C1",
        "passives": []
    },
    {
        "heroId": "magitech_sniper_costume_undead",
        "name": "Domitia C2",
        "passives": []
    },
    {
        "heroId": "magitech_sniper_costume_cute",
        "name": "Domitia Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "magitech_sniper_costume_glass",
        "name": "Domitia Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s4_doctor_moreau",
        "name": "Dr. Moreau",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_doctor_moreau_costume_scribe",
        "name": "Dr. Moreau C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all  allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "astral_dreadstar",
        "name": "Dreadstar",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "monster_hunter_dubhain",
        "name": "Dubhan",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "tales2_dularfulr",
        "name": "Dularfulr",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 308 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "scoundrel_duval",
        "name": "Duval",
        "passives": [
            "Thief's Opportunity: At the start of each turn this character has a 50% chance to Ransack a random enemy",
            "Ransack:",
            "* Steals 200 health.",
            "* Safely steals one random Growth effect, positive stack, or status effect buff from the enemy. This includes undispellable buffs and Dance effects.",
            "* Safe stealing bypasses secondary effects, such as damage on removal, from the removed buffs. Passive skills and family effects can still activate.",
            "Cheat Death: The first time this character would receive fatal damage, they instead redirect that damage to a random enemy. In battles with multiple waves, the effect is refreshed at the begining of each wave."
        ]
    },
    {
        "heroId": "dark_god_eldwren",
        "name": "Eldwren",
        "passives": [
            "Resist Fiends: This character can't receive Fiends.",
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "vegetable_elsbeth",
        "name": "Elsbeth",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 50% attack, 20% health",
            "2) Sprout Fiend: 75% attack, 30% health",
            "3) Blossom Mega Fiend: 250% attack, 60% health"
        ]
    },
    {
        "heroId": "mimic_emblem_purple",
        "name": "Emblem Mimic Dark",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Master Rogue Emblems",
            "* Master Ranger Emblems",
            "* Rogue Emblems",
            "* Ranger Emblems"
        ]
    },
    {
        "heroId": "valentines_eros",
        "name": "Eros",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "mimic_training_hero_purple",
        "name": "Experience Mimic Dark",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Common Dark Trainer Heroes",
            "* Uncommon Dark Trainer Heroes",
            "* Rare Dark Trainer Heroes",
            "* Common Dark Heroes",
            "* Uncommon Dark Heroes"
        ]
    },
    {
        "heroId": "elemental_farrah",
        "name": "Farrah",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "s3_freya",
        "name": "Freya",
        "passives": []
    },
    {
        "heroId": "s3_freya_costume_witch",
        "name": "Freya C1",
        "passives": []
    },
    {
        "heroId": "elemental_gastille",
        "name": "Gastille",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "astral_dwarf_gongoth",
        "name": "Gongoth",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "slime_gooldron",
        "name": "Gooldron",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "monster_hunter_goretooth",
        "name": "Goretooth",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 3% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "gargoyle_goseck",
        "name": "Goseck",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 5 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "beowulf_grendels_mother",
        "name": "Grendel's Mother",
        "passives": [
            "Mana of Buff Received: This character gains 5% mana when they receive a buff or possive stack.",
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "elemental_griffex",
        "name": "Griffex",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_griffex_costume_camera",
        "name": "Griffex C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "dark_god_grimble",
        "name": "Grimble",
        "passives": [
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies."
        ]
    },
    {
        "heroId": "guardian_cat_warrior",
        "name": "Guardian Panther",
        "passives": []
    },
    {
        "heroId": "guardian_cat_warrior_costume_fierce",
        "name": "Guardian Panther C1",
        "passives": []
    },
    {
        "heroId": "slime_gunktus",
        "name": "Gunktus",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "s4_hannah",
        "name": "Hannah",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_hannah_costume_drover",
        "name": "Hannah C1",
        "passives": [
            "Start Battle With Mana: This Hero receives 20% mana at the start of the battle.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill, all allies deal +70% increased normal attacks and Special Skills damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "astral_demon_haradea",
        "name": "Haradea",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "monster_hunter_hawthorn",
        "name": "Hawthorn",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "dark_god_hel",
        "name": "Hel",
        "passives": []
    },
    {
        "heroId": "dark_god_hel_costume_omen",
        "name": "Hel C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "tales2_hreidmarr",
        "name": "Hreidmarr",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 312 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "outlaw_hu_sanniang",
        "name": "Hu Sanniang",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "s4_hulda",
        "name": "Hulda",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this character receives from Special Skill is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_hulda_costume_nurse",
        "name": "Hulda C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this character receives from Special Skills is increased by 1 turn.",
            "Health Boost on Special Skill: When this characters casts their Special Skill, they boost the health of all their allies by 10%."
        ]
    },
    {
        "heroId": "shadow_hunter",
        "name": "Hunter",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "monster_hunter_hurricane",
        "name": "Hurricane",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "beowulf_hygd",
        "name": "Hygd",
        "passives": [
            "Mana of Buff Received: This character gains 5% mana when they receive a buff or possive stack.",
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs."
        ]
    },
    {
        "heroId": "wild_cat_imagus",
        "name": "Imagus",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* Status effect buffs and ailments.",
            "* Positive and negative stacks.",
            "* Growth and Wither effects."
        ]
    },
    {
        "heroId": "wonderland_jabberwocky",
        "name": "Jabberwock",
        "passives": []
    },
    {
        "heroId": "wonderland_jabberwocky_costume_moth",
        "name": "Jabberwock C1",
        "passives": [
            "Mindless Attack On Special Skill: On Special Skill cast, 50% chance to inflict Mindless Attack on a random enemy for 3 turns."
        ]
    },
    {
        "heroId": "magic_jett",
        "name": "Jett",
        "passives": [
            "Health Recovery on Special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully changed, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "magic_jett_costume_eyes",
        "name": "Jett C1",
        "passives": [
            "Health Recovery on Special: When this character casts their Special Skill, they have a 60% chance to recover 20% health for all allies. If the Special Skill is fully changed, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "forsaken_kadath",
        "name": "Kadath",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "s2_cursed_samurai",
        "name": "Kageburado",
        "passives": []
    },
    {
        "heroId": "s2_cursed_samurai_costume_beetle",
        "name": "Kageburado C1",
        "passives": []
    },
    {
        "heroId": "villain_karnov",
        "name": "Karnov",
        "passives": []
    },
    {
        "heroId": "villain_karnov_costume_jammies",
        "name": "Karnov C1",
        "passives": [
            "Curse on Special Skill: When this character casts their Special Skill, all enemies receive 461 Curse damage over 4 turns, starting low and increasing every turn."
        ]
    },
    {
        "heroId": "gargoyle_kemeny",
        "name": "Kemeny",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_khepri",
        "name": "Khepri",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_khepri_costume_overlord",
        "name": "Khepri C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against sand damage."
        ]
    },
    {
        "heroId": "dark_god_september",
        "name": "Khiona",
        "passives": []
    },
    {
        "heroId": "dark_god_september_costume_engineer",
        "name": "Khiona C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status efect buff from all enemies."
        ]
    },
    {
        "heroId": "s5_khonshu",
        "name": "Khonshu",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_khonshu_costume_knight",
        "name": "Khonshu C1",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against sand damage."
        ]
    },
    {
        "heroId": "easter_killhare",
        "name": "Killhare",
        "passives": []
    },
    {
        "heroId": "easter_killhare_costume_farmer",
        "name": "Killhare C1",
        "passives": []
    },
    {
        "heroId": "wonderland_knave_of_hearts",
        "name": "Knave of Hearts",
        "passives": []
    },
    {
        "heroId": "slime_knightus",
        "name": "Knightus",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "dark_god_kunchen",
        "name": "Kunchen",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "astral_dwarf_lemniss",
        "name": "Lemniss",
        "passives": [
            "Destroy Fiends on Special: When this character casts their Special Skill, all Fiends are destroyed from them.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Resist Healing Ailments: This character is immune to status ailments that affect healing."
        ]
    },
    {
        "heroId": "s4_lepiota",
        "name": "Lepiota",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character."
        ]
    },
    {
        "heroId": "s4_lepiota_costume_undying",
        "name": "Lepiota C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage from Special Skills is reduced by -20% for this character.",
            "Health Boost on Special Skill: On Special Skill cast, boosts all allies' HP by 10%."
        ]
    },
    {
        "heroId": "moth_lilareine",
        "name": "Lilareine",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "magic_carpet_lilli",
        "name": "Lilli",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions."
        ]
    },
    {
        "heroId": "kalevala_louhi",
        "name": "Louhi",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_louhi_costume_mistress",
        "name": "Louhi C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kingdom_lu_bu",
        "name": "Lu Bu",
        "passives": []
    },
    {
        "heroId": "kingdom_lu_bu_costume_tiger_lord",
        "name": "Lu Bu C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "halloween_lucinda",
        "name": "Lucinda",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "castle_wolf_ludwig",
        "name": "Ludwig",
        "passives": []
    },
    {
        "heroId": "mighty_pet_luna",
        "name": "Luna",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "ballerina_madame_giry",
        "name": "Madame Giry",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 20% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "garrison_maisie",
        "name": "Maisie",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "dark_god_malicna",
        "name": "Malicna",
        "passives": [
            "Resist Health Steal Ailments: This character is immune to status ailments that steal health.",
            "Status Effect on Mana Reduction: This character gets +94% defense against Holy for 3 turns when their mana is reduced."
        ]
    },
    {
        "heroId": "pirate_marie_therese",
        "name": "Marie-Therese",
        "passives": []
    },
    {
        "heroId": "pirate_marie_therese_costume_priestess",
        "name": "Marie-Therese C1",
        "passives": [
            "Poison on Special Skill: When this character casts their Special Skill, all enemies receive 504 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "wild_cat_marnes",
        "name": "Marnes",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* Status effect buffs and ailments.",
            "* Positive and negative stacks.",
            "* Growth and Wither effects."
        ]
    },
    {
        "heroId": "faun_maud",
        "name": "Maud",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "tales1_medea",
        "name": "Medea",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_medea_costume_goddess",
        "name": "Medea C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "shadow_melancholia",
        "name": "Melancholia",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "ronin_mikanagi_miran",
        "name": "Mikanagi Miran",
        "passives": [
            "Prevent Boosted Healing: Enemies' health cannot increase above their max health.",
            "Dishonorable Defeat: When this character is defeated by a Special Skill, they perform the following actions",
            "* The attacker receives 400% damage.",
            "* The attacker receives 1200 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "s2_hammerhead_hulk",
        "name": "Mok-Arr",
        "passives": []
    },
    {
        "heroId": "s2_hammerhead_hulk_costume_emerald",
        "name": "Mok-Arr C1",
        "passives": []
    },
    {
        "heroId": "dark_god_morax",
        "name": "Morax",
        "passives": [
            "Resist Mana Generation Ailments: This character has innate resistance against status ailments and negative stacks that affect mana generation. Doesn't apply to status ailments that stop mana generation or steal mana.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "moth_mortewitch",
        "name": "Mortewitch",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "beachparty_mortimer",
        "name": "Mortimer",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 202 Water damage over 2 turns.",
            "Resist Water: This character is immune to status ailments that deal Water damage."
        ]
    },
    {
        "heroId": "hidden_dark_god_myztero",
        "name": "Myztero",
        "passives": [
            "Memorize Status Ailments: This hero has an innate ability to memorize status ailments. The latest 5 status ailments that are cast on the Hero will stay memorized until the Special Skill is cast."
        ]
    },
    {
        "heroId": "bard_narcisa",
        "name": "Narcisa",
        "passives": [
            "Mana increase reduction: Reduces the amount of mana increased by Special Skill by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "christmas_noel",
        "name": "Noel",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by this character inflict 484 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "styx_nyx",
        "name": "Nyx",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "underworld_champion",
        "name": "Obakan",
        "passives": []
    },
    {
        "heroId": "underworld_champion_costume_champion",
        "name": "Obakan C1",
        "passives": []
    },
    {
        "heroId": "underworld_champion_costume_vampire",
        "name": "Obakan C2",
        "passives": []
    },
    {
        "heroId": "underworld_champion_costume_cute",
        "name": "Obakan Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "underworld_champion_costume_glass",
        "name": "Obakan Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "underworld_champion_costume_stylish",
        "name": "Obakan Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "ballerina_odile",
        "name": "Odile",
        "passives": [
            "Resist Defense Ailments: The character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Heal when status ailment expires or is cleared: This character receives 5% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "owl_ommodus",
        "name": "Ommodus",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "ninja_onyx",
        "name": "Onyx",
        "passives": []
    },
    {
        "heroId": "astral_demon_paimon",
        "name": "Paimon",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "christmas_peppermint",
        "name": "Peppermint",
        "passives": []
    },
    {
        "heroId": "ballerina_phantom_of_the_opera",
        "name": "Phantom of the Opera",
        "passives": [
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "tales1_phorcys",
        "name": "Phorcys",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_phorcys_costume_warrior_god",
        "name": "Phorcys C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "valentines_phthonus",
        "name": "Phthonus",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "institute_professor_morryster",
        "name": "Prof. Morryster",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "ninja_quartz",
        "name": "Quartz",
        "passives": []
    },
    {
        "heroId": "cultist_inventor",
        "name": "Quintus",
        "passives": []
    },
    {
        "heroId": "cultist_inventor_costume_steam",
        "name": "Quintus C1",
        "passives": []
    },
    {
        "heroId": "cultist_inventor_costume_love_doctor",
        "name": "Quintus C2",
        "passives": []
    },
    {
        "heroId": "cultist_inventor_costume_cute",
        "name": "Quintus Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "cultist_inventor_costume_glass",
        "name": "Quintus Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "champions_ramona",
        "name": "Ramona",
        "passives": [
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3 turns when this character receives a status ailment or a negative stack.",
            "Health Boost on Fiend Summon: When a Fiend is summoned to any enemy, this character gets 300 boosted health. This effect can activate only once per turn.",
            "Mana on Fiend Summon: When a Fiend is summoned to any enemy, this character gains 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "castle_raven_rayne",
        "name": "Rayne",
        "passives": []
    },
    {
        "heroId": "musketeer_rochefort",
        "name": "Rochefort",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage to all enemies."
        ]
    },
    {
        "heroId": "s3_loki_fish",
        "name": "Salmon Loki",
        "passives": []
    },
    {
        "heroId": "s3_loki_fish_costume_dapper",
        "name": "Salmon Loki C1",
        "passives": []
    },
    {
        "heroId": "pirate_dread_captain",
        "name": "Sargasso",
        "passives": []
    },
    {
        "heroId": "pirate_dread_captain_costume_rotten",
        "name": "Sargasso C1",
        "passives": [
            "Poison on Special Skill: When this character casts their Special Skill, all enemies receive 476 Poison damage over 4 turns."
        ]
    },
    {
        "heroId": "cultist_sorceress",
        "name": "Sartana",
        "passives": []
    },
    {
        "heroId": "cultist_sorceress_costume_shaman",
        "name": "Sartana C1",
        "passives": []
    },
    {
        "heroId": "cultist_sorceress_costume_snake",
        "name": "Sartana C2",
        "passives": []
    },
    {
        "heroId": "cultist_sorceress_costume_cute",
        "name": "Sartana Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_glass",
        "name": "Sartana Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "cultist_sorceress_costume_stylish",
        "name": "Sartana Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "ninja_satsui",
        "name": "Satsui",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "construct_nocturne",
        "name": "Scath",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "slayer_senan",
        "name": "Senan",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "slayer_senan_costume_tentacles",
        "name": "Senan C1",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks.",
            "Bleed on Special Skill: When this character casts their Special Skill, all enemies receive 544 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "beachparty_serena",
        "name": "Serena",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 278 Water damage over 2 turns.",
            "Resist Water Damage: This character has innate resistance against Water Damage."
        ]
    },
    {
        "heroId": "dark_god_seshat",
        "name": "Seshat",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction."
        ]
    },
    {
        "heroId": "dark_god_seshat_costume_revenant",
        "name": "Seshat C1",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "s5_set",
        "name": "Set",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_set_costume_tyrant",
        "name": "Set C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against Sand damage."
        ]
    },
    {
        "heroId": "construct_shacklebolt",
        "name": "Shacklebolt",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Destructive Core: The Construct Core of this character is Destructive Core. The Destructive Core activates each time this character's Special Skill is cast:",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "fox_shadowfang",
        "name": "Shadowfang",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "outlaw_shi_jin",
        "name": "Shi Jin",
        "passives": [
            "Health Boost on Critical Special Attack: When this character scores a critical hit with their Special Skill, they boost the health of all their allies by 10%. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "dark_god_sir_casmir",
        "name": "Sir Casmir",
        "passives": [
            "Resist Mana Generation Ailments: This character has innate resistance against ailments and negative stacks that affect mana generation. Doesn't apply to status ailments that stop mana generation or steal mana.",
            "Mana on Health Recovery: This character receives 5% mana each time its health is recovered."
        ]
    },
    {
        "heroId": "slime_slaymire",
        "name": "Slaymire",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "slime_sliposi",
        "name": "Sliposi",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "s5_sneferu",
        "name": "Sneferu",
        "passives": [
            "Effects on special skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from all enemies."
        ]
    },
    {
        "heroId": "s5_sneferu_costume_vanquisher",
        "name": "Sneferu C1",
        "passives": [
            "Effects on special skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from all enemies.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "monster_hunter_sorcha",
        "name": "Sorcha",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "fox_swiftpaw",
        "name": "Swiftpaw",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "faun_tamlin",
        "name": "Tamlin",
        "passives": [
            "Resist Insanity: This character is immune to Insanity.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or a negative stacks.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "construct_tenebrae",
        "name": "Tenebrae",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Corrosive Core: The Construct Core of this character is Corrosive Core. The Corrosive Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Poison for 3 turns. With a fully charged Corrosive Core, the Corrosive Poison deals 140 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The poison damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "beauty_beast_the_beast",
        "name": "The Beast",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "witch_king",
        "name": "Thoth-Amun",
        "passives": []
    },
    {
        "heroId": "witch_king_costume_cosmic",
        "name": "Thoth-Amun C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "tales2_thrivaldi",
        "name": "Thrivaldi",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 331 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "ninja_tora",
        "name": "Tora",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "mimic_troop_purple",
        "name": "Troop Mimic Dark",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic grants a chance for the following extra loot when completing stages",
            "RARE",
            "* Reanimated Fighters",
            "* Reanimated Knights",
            "* Guild Knights",
            "* Trainer Troop",
            "UNCOMMON",
            "* Guild Assassins",
            "* Guild Strikers",
            "* Trainer Troop",
            "COMMON",
            "* Common Villager",
            "* Reanimated Fighters",
            "* Guild Initiates",
            "* Trainer Troop"
        ]
    },
    {
        "heroId": "dark_god_turgruk",
        "name": "Turgruk",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 50% is added to its power.",
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies."
        ]
    },
    {
        "heroId": "wonderland_tweedles",
        "name": "Tweedles",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "tales1_ultrox",
        "name": "Ultrox",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_ultrox_costume_ethereal",
        "name": "Ultrox C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "masquerade_umbria",
        "name": "Umbria",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "ninja_umeko",
        "name": "Umeko",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "s2_ursena",
        "name": "Ursena",
        "passives": []
    },
    {
        "heroId": "s2_ursena_costume_reef",
        "name": "Ursena C1",
        "passives": []
    },
    {
        "heroId": "dark_god_uthragan",
        "name": "Uthragan",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Resist Mana Generation Stopping: This character is immune to status ailments that stop mana generation."
        ]
    },
    {
        "heroId": "gargoyle_uwe",
        "name": "Uwe",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 5 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "elemental_vander",
        "name": "Vander",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "astral_dwarf_vard",
        "name": "Vard",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "mahayoddha_veer",
        "name": "Veer",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "vampire_king",
        "name": "Victor",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "vampire_king_costume_mafia",
        "name": "Victor C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "garrison_violet_potts",
        "name": "Violet Potts",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "dark_god_viscaro",
        "name": "Viscaro",
        "passives": [
            "Cursed sapling summoner: When an enemy summons any minions by special skill, this character summons a Cursed Sapling Fiend for that enemy.",
            "Resist negative minion effects: This character is immune to incoming negative effects and damage from Minions."
        ]
    },
    {
        "heroId": "easter_viscount_cluckwood",
        "name": "Viscount Cluckwood",
        "passives": []
    },
    {
        "heroId": "astral_voidstar",
        "name": "Voidstar",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "ballerina_von_rothbart",
        "name": "Von Rothbart",
        "passives": [
            "Resist Defense Ailments: This character has innate resistance against status ailments that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "journey_xie_zi_jing",
        "name": "Xie Zi Jing",
        "passives": [
            "Mana on Buff Received: This character has a 50% chance to gain 10% mana when they receive a buff or possitive stack.",
            "Health Recovery on Buff Received: This character has a 50% chance to recover 10% health when they receive a buff or possitve stack."
        ]
    },
    {
        "heroId": "journey_xiong_shanjun",
        "name": "Xiong Shanjun",
        "passives": []
    },
    {
        "heroId": "s4_xnolphod",
        "name": "Xnolphod",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skills is decreased by 1 turn."
        ]
    },
    {
        "heroId": "s4_xnolphod_costume_jailer",
        "name": "Xnolphod C1",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skills is decreased by 1 turn.",
            "Health Boost on Special Skill: On Special Skill cast, boosts all allies' HP by 10%."
        ]
    },
    {
        "heroId": "faun_ysabel",
        "name": "Ysabel",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "construct_zavok",
        "name": "Zavolt",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core. The Minion Core activates each time this character's Special Skill is cast.",
            "* With fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge int the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minion from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "dark_god_zed",
        "name": "Zed",
        "passives": [
            "Resist Blind: This character has innate resistance against status ailments that affect accuracy. Doesn't apply to original status effects from allies.",
            "Increased Special Skill Damage: This first 2 times this character casts a Special Skill that deals damage, an additional 50% is added to its power."
        ]
    },
    {
        "heroId": "dark_god_zulag",
        "name": "Zulag",
        "passives": [
            "Resist Sand: This character is immune to status ailments that deal Sand damage."
        ]
    },
    {
        "heroId": "nomad_female_archer",
        "name": "Sharan",
        "passives": []
    },
    {
        "heroId": "nomad_scout",
        "name": "Tudan",
        "passives": []
    },
    {
        "heroId": "nomad_fighter",
        "name": "Farid",
        "passives": []
    },
    {
        "heroId": "nomad_female_thief",
        "name": "Jill",
        "passives": []
    },
    {
        "heroId": "nomad_shaman",
        "name": "Shaarkot",
        "passives": []
    },
    {
        "heroId": "orc_skirmisher",
        "name": "Zudak",
        "passives": []
    },
    {
        "heroId": "nomad_female_swordmaster",
        "name": "Azar",
        "passives": []
    },
    {
        "heroId": "nomad_female_swordmaster_costume_native",
        "name": "Azar C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_swordmaster_costume_cute",
        "name": "Azar Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_swordmaster_costume_glass",
        "name": "Azar Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "tales1_bagreg",
        "name": "Bagreg",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_bagreg_costume_scout",
        "name": "Bagreg C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "monster_hunter_basil",
        "name": "Basil",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 12% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "knights_bauchan",
        "name": "Bauchan",
        "passives": []
    },
    {
        "heroId": "goblin_boots",
        "name": "Boots",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "christmas_buster",
        "name": "Buster",
        "passives": []
    },
    {
        "heroId": "styx_dante",
        "name": "Dante",
        "passives": [
            "Decreased Minion Health: Enemy Minions inherit -50% less Health when summoned.",
            "Resist defense ailments: This character has innate resistance against status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "fortune_dragon_kids",
        "name": "Dragon Kids",
        "passives": [
            "Graceful Dancer: If any allies are Dancing when this character casts their Special Skill, boosts the health of all allies by 400. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "s3_ei_dunn",
        "name": "Ei-Dunn",
        "passives": []
    },
    {
        "heroId": "s3_ei_dunn_costume_shield",
        "name": "Ei-Dunn C1",
        "passives": []
    },
    {
        "heroId": "mimic_experience_rare_red",
        "name": "Experience Mimic Rare Fire",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "**",
            "- Uncommon Fire, Nature, Ice, Dark and Holy Heroes.",
            "*",
            "- Common Master Trainer Heroes",
            "- Common Fire, Nature, Ice, Dark and Holy Heroes"
        ]
    },
    {
        "heroId": "castle_stag_fawn",
        "name": "Fawn",
        "passives": [
            "Health Recovery on Buff Received - This character recovers 5% health when  they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "nomad_female_shaman",
        "name": "Hawkmoon",
        "passives": []
    },
    {
        "heroId": "nomad_female_shaman_costume_native",
        "name": "Hawkmoon C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_shaman_costume_cute",
        "name": "Hawkmoon Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_shaman_costume_glass",
        "name": "Hawkmoon Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "tales2_helgi",
        "name": "Helgi",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 147 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_helgi_costume_combatant",
        "name": "Helgi C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 170 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "nomad_mage",
        "name": "Jahangir",
        "passives": []
    },
    {
        "heroId": "nomad_mage_costume_goggles",
        "name": "Jahangir C1",
        "passives": []
    },
    {
        "heroId": "nomad_mage_costume_cute",
        "name": "Jahangir Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_mage_costume_glass",
        "name": "Jahangir Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "nomad_mage_costume_stylish",
        "name": "Jahangir Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "magic_kornel",
        "name": "Kornel",
        "passives": [
            "Damage on special: When this character casts their Special Skill, they have a 50% chance to deal 100% damage to all enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "kingdom_li",
        "name": "Li",
        "passives": []
    },
    {
        "heroId": "outlaw_liu_tang",
        "name": "Liu Tang",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "s2_straw_demon",
        "name": "Namahage",
        "passives": []
    },
    {
        "heroId": "orc_warrior",
        "name": "Nashgar",
        "passives": []
    },
    {
        "heroId": "orc_warrior_costume_urukhai",
        "name": "Nashgar C1",
        "passives": []
    },
    {
        "heroId": "orc_warrior_costume_cute",
        "name": "Nashgar Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "orc_warrior_costume_glass",
        "name": "Nashgar Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "wonderland_phoenicus",
        "name": "Phoenicus",
        "passives": []
    },
    {
        "heroId": "institute_piper",
        "name": "Piper",
        "passives": []
    },
    {
        "heroId": "moth_rosepetite",
        "name": "Rosepetite",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "christmas_reindeer",
        "name": "Rudolph",
        "passives": []
    },
    {
        "heroId": "christmas_reindeer_costume_knightly_steed",
        "name": "Rudolph C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by this character inflict 244 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "mighty_pet_rufus",
        "name": "Rufus",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "villain_skrekok",
        "name": "Skrekok",
        "passives": []
    },
    {
        "heroId": "rabbit_red",
        "name": "Squire Wabbit",
        "passives": []
    },
    {
        "heroId": "astral_starswift",
        "name": "Starswift",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared  with other allies."
        ]
    },
    {
        "heroId": "s3_sudri",
        "name": "Sudri",
        "passives": []
    },
    {
        "heroId": "s4_vollermork",
        "name": "Vollermork",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_vollermork_costume_bartender",
        "name": "Vollermork C1",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s5_waqas",
        "name": "Waqas",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_waqas_costume_blade",
        "name": "Waqas C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "ronin_yamada_jingasa",
        "name": "Yamada Jingasa",
        "passives": [
            "Prevent Boosted Healing: Enemies' health cannot increase above their max health.",
            "Dishonorable Defeat: When this character is defeated by a Special Skill, they perform the following actions",
            "* The attacker receives 400% damage.",
            "* The attacker receives 1200 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "slayer_aodhan",
        "name": "Aodhan",
        "passives": [
            "Resist Damage from Status Effects: This character has innate resistance against incoming damage from status effects."
        ]
    },
    {
        "heroId": "orc_gladiator",
        "name": "Boldtusk",
        "passives": []
    },
    {
        "heroId": "orc_gladiator_costume_chef",
        "name": "Boldtusk C1",
        "passives": []
    },
    {
        "heroId": "orc_gladiator_costume_sage",
        "name": "Boldtusk C2",
        "passives": []
    },
    {
        "heroId": "orc_gladiator_costume_cute",
        "name": "Boldtusk Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_glass",
        "name": "Boldtusk Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "orc_gladiator_costume_stylish",
        "name": "Boldtusk Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "christmas_carol",
        "name": "Carol",
        "passives": []
    },
    {
        "heroId": "slayer_cillian",
        "name": "Cillian",
        "passives": [
            "Resist Damage from Status Effects: This character has innate resistance against incoming damage from status effects."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer",
        "name": "Colen",
        "passives": []
    },
    {
        "heroId": "nomad_axe_adventurer_costume_magma",
        "name": "Colen C1",
        "passives": []
    },
    {
        "heroId": "nomad_axe_adventurer_costume_tracker",
        "name": "Colen C2",
        "passives": []
    },
    {
        "heroId": "nomad_axe_adventurer_costume_cute",
        "name": "Colen Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_axe_adventurer_costume_glass",
        "name": "Colen Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "circus_eichbelborg",
        "name": "Eichbelborg",
        "passives": []
    },
    {
        "heroId": "castle_wolf_ferant",
        "name": "Ferant",
        "passives": []
    },
    {
        "heroId": "castle_wolf_ferant_costume_fire",
        "name": "Ferant C1",
        "passives": [
            "Ability: Increased Status Effect Duration Chance to increase the duration of cast status effects.",
            "* +1 turn: 75%",
            "* +2 turns: 25%"
        ]
    },
    {
        "heroId": "orc_troopmaster",
        "name": "Gormek",
        "passives": []
    },
    {
        "heroId": "orc_troopmaster_costume_merchant",
        "name": "Gormek C1",
        "passives": []
    },
    {
        "heroId": "orc_troopmaster_costume_gourmet",
        "name": "Gormek C2",
        "passives": []
    },
    {
        "heroId": "orc_troopmaster_costume_cute",
        "name": "Gormek Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "orc_troopmaster_costume_glass",
        "name": "Gormek Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "guardian_falcon_priest",
        "name": "Guardian Falcon",
        "passives": []
    },
    {
        "heroId": "construct_hotspin",
        "name": "Hotspin",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core.",
            "The Minion Core activates each time this character's Special Skill is cast:",
            "* With a fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minions from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "beachparty_itham",
        "name": "Itham",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 160 Water damage over 2 turns.",
            "Resist Water Damage: This character has innate resistance against Water  Damage."
        ]
    },
    {
        "heroId": "s5_junaid",
        "name": "Junaid",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_junaid_costume_champion",
        "name": "Junaid C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand Damage: This character has innate resistance against sand damage."
        ]
    },
    {
        "heroId": "nomad_female_berserker",
        "name": "Kelile",
        "passives": []
    },
    {
        "heroId": "nomad_female_berserker_costume_shaman",
        "name": "Kelile C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_berserker_costume_sorceress",
        "name": "Kelile C2",
        "passives": []
    },
    {
        "heroId": "nomad_female_berserker_costume_cute",
        "name": "Kelile Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_berserker_costume_glass",
        "name": "Kelile Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "kalevala_lemminkainen",
        "name": "Lemminkainen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_lemminkainen_costume_swan",
        "name": "Lemminkainen C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "magic_lucy",
        "name": "Lucy",
        "passives": [
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Health recovery on Special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "s4_mack",
        "name": "Mack",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_mack_costume_novelist",
        "name": "Mack C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "astral_demon_mael",
        "name": "Mael",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "monster_hunter_maheegan",
        "name": "Maheegan",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "magic_carpet_manpip",
        "name": "Manpip",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "elemental_nova",
        "name": "Nova",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "ballerina_raul",
        "name": "Raul",
        "passives": [
            "Heal when status ailment expires or is cleared: This character receives 10%  health each time a status ailment expires or is cleansed, removed or  reallocated from them. This effect can activate only once per turn.",
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "s4_rokkamush",
        "name": "Rokkamush",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "s4_rokkamush_costume_mason",
        "name": "Rokkamush C1",
        "passives": [
            "Decrease Ailment Duration: Duration of the first 3 status ailments this character receives from Special Skill is decreased by 1 turn."
        ]
    },
    {
        "heroId": "nomad_female_assassin",
        "name": "Scarlett",
        "passives": []
    },
    {
        "heroId": "nomad_female_assassin_costume_poison",
        "name": "Scarlett C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_assassin_costume_dancer",
        "name": "Scarlett C2",
        "passives": []
    },
    {
        "heroId": "nomad_female_assassin_costume_cute",
        "name": "Scarlett Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_assassin_costume_glass",
        "name": "Scarlett Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s3_shadereave",
        "name": "Shadereave",
        "passives": []
    },
    {
        "heroId": "ninja_shale",
        "name": "Shale",
        "passives": []
    },
    {
        "heroId": "knights_sir_lancelot",
        "name": "Sir Lancelot",
        "passives": []
    },
    {
        "heroId": "s2_demon_master",
        "name": "Sumitomo",
        "passives": []
    },
    {
        "heroId": "s2_demon_master_costume_steppe",
        "name": "Sumitomo C1",
        "passives": []
    },
    {
        "heroId": "s3_sumle",
        "name": "Sumle",
        "passives": []
    },
    {
        "heroId": "s3_sumle_costume_unhallowed",
        "name": "Sumle C1",
        "passives": []
    },
    {
        "heroId": "kingdom_sun_shangxiang",
        "name": "Sun Shangxiang",
        "passives": []
    },
    {
        "heroId": "gargoyle_vonreine",
        "name": "Vonreine",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 4 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s2_rugged_fisherman",
        "name": "Wilbur",
        "passives": []
    },
    {
        "heroId": "s2_rugged_fisherman_costume_sake_master",
        "name": "Wilbur C1",
        "passives": []
    },
    {
        "heroId": "bard_zhabog",
        "name": "Zhabog",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "kingdom_zhou_yu",
        "name": "Zhou Yu",
        "passives": []
    },
    {
        "heroId": "kingdom_zhou_yu_costume_white_raven",
        "name": "Zhou Yu C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "shadow_abigail",
        "name": "Abigail",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "titan_hunter_adelitza",
        "name": "Adelitza",
        "passives": [
            "Enhanced Shields on Special: Passive Skill as attacking character",
            "* Fire shields on the board become enhanced with +54% critical chance when this character casts their Special Skill.",
            "Passive Skill as defending character:",
            "* Fire shields on the board become weakened with -47% accuracy when this character casts their Special Skill.",
            "Mark of the Titan Hunter: When this character casts their Special Skill, they mark a random enemy with a Hunting Flare for 4 turns. A target marked with a Hunting Flare receives additional 150 damage when they receive a critical hit."
        ]
    },
    {
        "heroId": "mimic_aether_red",
        "name": "Aether Mimic Fire",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Alpha Aether",
            "* Fire Aether III",
            "* Fire Aether II",
            "* Fire Aether I"
        ]
    },
    {
        "heroId": "tales2_aethslegaur",
        "name": "Aethslegaur",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 312 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "halloween_alucard",
        "name": "Alucard",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_alucard_costume_mafia",
        "name": "Alucard C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_amber",
        "name": "Amber",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "fire_god_andre",
        "name": "Andre de Clermont",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Boost Health on Enemy Special: When an enemy casts their Special Skill, this character has a 50% chance to boost this character's health by 100."
        ]
    },
    {
        "heroId": "beachparty_andy_jay",
        "name": "Andy Jay",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 292 Water damage over 2 turns.",
            "Resist Water Damage: This character has innate resistance against Water Damage."
        ]
    },
    {
        "heroId": "fire_god_anzogh",
        "name": "Anzogh",
        "passives": [
            "Resist Mana Generation Ailments: This character is immune to status ailments and negative stacks that affect mana generation. Doesn't apply to status ailments that stop mana generation or steal mana."
        ]
    },
    {
        "heroId": "masquerade_aradia",
        "name": "Aradia",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "faun_araminta",
        "name": "Araminta",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "fire_god_ares",
        "name": "Ares",
        "passives": []
    },
    {
        "heroId": "fire_god_ares_costume_keymaster",
        "name": "Ares C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "ronin_asakura_masao",
        "name": "Asakura Masao",
        "passives": [
            "Prevent Boosted Healing: Enemies' health cannot increase above their max health.",
            "Dishonorable Defeat: When this character is defeated by a Special Skill, they perform the following actions",
            "* The attacker receives 400% damage.",
            "* The attacker receives 1200 Bleed damage over 3 turns."
        ]
    },
    {
        "heroId": "mimic_ascension_item_red",
        "name": "Ascension Mimic",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "****",
            "- Damascus Blade",
            "- Tome Of Tactics",
            "- Mistic Rings",
            "***",
            "- Fine Gloves",
            "- Compass",
            "- Hidden Blade",
            "- Chainmail Shirt",
            "- Tall Boots",
            "**",
            "- Arcane Scipt"
        ]
    },
    {
        "heroId": "elemental_ash",
        "name": "Ash",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "villain_asterius",
        "name": "Asterius",
        "passives": []
    },
    {
        "heroId": "ninja_aurum",
        "name": "Aurum",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "lionman_barbarian",
        "name": "Azlar",
        "passives": []
    },
    {
        "heroId": "lionman_barbarian_costume_armor",
        "name": "Azlar C1",
        "passives": []
    },
    {
        "heroId": "lionman_barbarian_costume_babysitter",
        "name": "Azlar C2",
        "passives": []
    },
    {
        "heroId": "lionman_barbarian_costume_cute",
        "name": "Azlar Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_glass",
        "name": "Azlar Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "lionman_barbarian_costume_stylish",
        "name": "Azlar Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "fortune_bai_yan",
        "name": "Bai Yan",
        "passives": [
            "Graceful Dancer: If any allies are Dancing when this character casts their Special Skill, boosts the health of all allies by 400. Boosted health can exceed max HP."
        ]
    },
    {
        "heroId": "s3_baldur",
        "name": "Baldur",
        "passives": []
    },
    {
        "heroId": "s3_baldur_costume_fiery",
        "name": "Baldur C1",
        "passives": []
    },
    {
        "heroId": "mighty_pet_barkley",
        "name": "Barkley",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "vegetable_bartholomew",
        "name": "Bartholomew",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 50% attack, 20% health",
            "2) Sprout Fiend: 75% attack, 30% health",
            "3) Blossom Mega Fiend: 250% attack, 60% health"
        ]
    },
    {
        "heroId": "castle_bear_bearnadette",
        "name": "Bearnadette",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "beowulf_beowulf",
        "name": "Beowulf",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never mises its target.",
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "mahayoddha_bhima",
        "name": "Bhima",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "pirate_boatswain",
        "name": "Black Caesar",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "knights_black_knight",
        "name": "Black Knight",
        "passives": []
    },
    {
        "heroId": "knights_black_knight_costume_negative",
        "name": "Black Knight C1",
        "passives": []
    },
    {
        "heroId": "construct_japanese_doll",
        "name": "Blossom",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "monster_hunter_bonecrusher",
        "name": "Bonecrusher",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "construct_brimstone",
        "name": "Brimstone",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Destructive Core: The Construct Core of this character is Destructive Core.",
            "The Destructive Core activates each time this character's Special Skill is cast",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core, All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "pirate_swashbuckler",
        "name": "Captain Kestrel",
        "passives": []
    },
    {
        "heroId": "s4_captain_nemo",
        "name": "Captain Nemo",
        "passives": [
            "This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_captain_nemo_costume_machinist",
        "name": "Captain Nemo C1",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "musketeer_cardinal_richelieu",
        "name": "Cardinal Richelieu",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "masquerade_carmenta",
        "name": "Carmenta",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "wild_cat_catalina",
        "name": "Catalina",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "astral_dwarf_ceris",
        "name": "Ceris",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "ballerina_charlotta",
        "name": "Charlotta",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 20% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "slime_charmione",
        "name": "Charmione",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "slime_chingiriko",
        "name": "Chingiriko",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "mighty_pet_chomper",
        "name": "Chomper",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "moth_chunkyroi",
        "name": "Chunkyroi",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "fables_cinderella",
        "name": "Cinderella",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "monster_hunter_cleaver",
        "name": "Cleaver",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "christmas_cookie",
        "name": "Cookie",
        "passives": []
    },
    {
        "heroId": "valentines_cupido",
        "name": "Cupido",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "valentines_cupido_costume_flame",
        "name": "Cupido C1",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "musketeer_dartagnan",
        "name": "D Artagnan",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_dartagnan_costume_chimney_sweeper",
        "name": "D Artagnan C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage to all enemies."
        ]
    },
    {
        "heroId": "castle_stag_daemon",
        "name": "Daemon",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "forsaken_demhalar",
        "name": "Demhalar",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "garrison_dima",
        "name": "Dima",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "tales1_domiventus",
        "name": "Domiventus",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_domiventus_costume_supreme",
        "name": "Domiventus C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "elemental_doxan",
        "name": "Doxan",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_doxan_costume_hacker",
        "name": "Doxan C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "bard_dunnar_hart",
        "name": "Dunnar Hart",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "monster_hunter_ebba",
        "name": "Ebba",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "gargoyle_el_duque",
        "name": "El Duque",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 2 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "valentines_elba",
        "name": "Elba",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "nomad_female_lord",
        "name": "Elena",
        "passives": []
    },
    {
        "heroId": "nomad_female_lord_costume_flame",
        "name": "Elena C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_lord_costume_wicked",
        "name": "Elena C2",
        "passives": []
    },
    {
        "heroId": "nomad_female_lord_costume_cute",
        "name": "Elena Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_lord_costume_glass",
        "name": "Elena Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "fire_god_eliane",
        "name": "Eliane",
        "passives": [
            "Resist Burn: This character is immune to status ailments that deal Burn damage.",
            "Mana on Burn: This character gains 5% mana each time an enemy receives Burn damage."
        ]
    },
    {
        "heroId": "s4_elizabeth",
        "name": "Elizabeth",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this hero receives from Special Skills is increased by 1 turn"
        ]
    },
    {
        "heroId": "s4_elizabeth_costume_bride",
        "name": "Elizabeth C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "fleur_elyzabel",
        "name": "Elyzabel de Tuillieres",
        "passives": [
            "Sanguine Mark: All damage from normal attacks and Special Skill dealt by this character is increased by 5% per Blood Lily stack on target."
        ]
    },
    {
        "heroId": "fox_ember",
        "name": "Ember",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "rodent_embertail",
        "name": "Embertail",
        "passives": [
            "Nibble: When an ally casts their Special Skill, this character deals 200% damage and gives -35% defense for 3 turns to a random enemy.",
            "Tiny Frame: This character is not affected by effects that increase or reduce attack. This includes status effect buffs and ailments, positive and negative Stacks, Growth and Wither effects."
        ]
    },
    {
        "heroId": "mimic_emblem_red",
        "name": "Emblem Mimic Fire",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Master Fighter Emblems",
            "* Master Barbarian Emblems",
            "* Fighter Emblems",
            "* Barbarian Emblems"
        ]
    },
    {
        "heroId": "circus_emilio",
        "name": "Emilio",
        "passives": []
    },
    {
        "heroId": "circus_emilio_costume_frog",
        "name": "Emilio C1",
        "passives": [
            "Copy Ailment on Cleanse: When a status ailment is cleansed from this hero, a new copy of the cleansed ailment is applied on a random enemy."
        ]
    },
    {
        "heroId": "styx_erebus",
        "name": "Erebus",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "owl_eron",
        "name": "Eron",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "mimic_training_hero_red",
        "name": "Experience Mimic",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Common Fire Trainer Heroes",
            "* Uncommon Fire Trainer Heroes",
            "* Rare Fire Trainer Heroes",
            "* Common Fire Heroes",
            "* Uncommon Fire Heroes"
        ]
    },
    {
        "heroId": "tales2_fimafeng",
        "name": "Fimafeng",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 338 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "garrison_flamehide",
        "name": "Flamehide",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Growth effects from all enemies."
        ]
    },
    {
        "heroId": "beachparty_flip",
        "name": "Flip",
        "passives": [
            "Resist Water: This character is immune to status ailments that deal Water damage.",
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 200 Water damage over 2 turns."
        ]
    },
    {
        "heroId": "beachparty_flip_costume_donut",
        "name": "Flip C1",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 272 Water damage over 2 turns.",
            "Resist Water Damage: This character has innate resistance against Water Damage."
        ]
    },
    {
        "heroId": "owl_fulvia",
        "name": "Fulvia",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "moth_gardered",
        "name": "Gardered",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "ninja_garnet",
        "name": "Garnet",
        "passives": []
    },
    {
        "heroId": "s3_gefjon",
        "name": "Gefjon",
        "passives": []
    },
    {
        "heroId": "s3_gefjon_costume_wilderness",
        "name": "Gefjon C1",
        "passives": []
    },
    {
        "heroId": "tales1_gestalt",
        "name": "Gestalt",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_gestalt_costume_pearls",
        "name": "Gestalt C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster gets +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "slime_gooze",
        "name": "Gooze",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "fire_god_doom",
        "name": "Gravemaker",
        "passives": []
    },
    {
        "heroId": "fire_god_doom_costume_avenger",
        "name": "Gravemaker C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "fire_god_nadnog",
        "name": "Grazul",
        "passives": [
            "Resist Healing Ailments: This character is immune to status ailments that affect healing."
        ]
    },
    {
        "heroId": "guardian_gorilla_chieftain",
        "name": "Guardian Kong",
        "passives": []
    },
    {
        "heroId": "guardian_gorilla_chieftain_costume_conqueror",
        "name": "Guardian Kong C1",
        "passives": []
    },
    {
        "heroId": "gargoyle_guffa",
        "name": "Guffa",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 5 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "astral_hammerclang",
        "name": "Hammerclang",
        "passives": [
            "Resist Poison: This character has innate resistance against Poison.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "s5_hathor",
        "name": "Hathor",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Boosts health of all allies by 10%. Boosted Heath can exceed max HP.",
            "* All allies gain a small amount of mana."
        ]
    },
    {
        "heroId": "s5_hathor_costume_starlit",
        "name": "Hathor C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Boosts health of all allies by 10%. Boosted Heath can exceed max HP.",
            "* All allies gain a small amount of mana.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Resist Mana Generation Stopping: This character is immune to status ailments that stop mana generation."
        ]
    },
    {
        "heroId": "gargoyle_hohenwerf",
        "name": "Hohenwerf",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 3 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "lunar_new_year_hongyunxing",
        "name": "Hongyunxing",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "construct_hornfel",
        "name": "Hornfel",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Destructive Core: The Construct Core of this character is Destructive Core.",
            "The Destructive Core activates each time this character's Special Skill is cast",
            "* With fully charged Destructive Core, deals 180% damage to all enemies.",
            "* The damage is scaled by the amount of charge in the Core, All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "styx_hypnos",
        "name": "Hypnos",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "garrison_iarlaith",
        "name": "Iarlaith",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "elemental_ignazio",
        "name": "Ignazio",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_ignazio_costume_medic",
        "name": "Ignazio C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "kalevala_ilmarinen",
        "name": "Ilmarinen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_ilmarinen_costume_gold",
        "name": "Ilmarinen C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "garrison_iocantha",
        "name": "Iocantha",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "faun_isidore",
        "name": "Isidore",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Ailments: This character is immune to status ailments that affect attack."
        ]
    },
    {
        "heroId": "villain_isrod",
        "name": "Isrod",
        "passives": []
    },
    {
        "heroId": "fire_god_jean_francois",
        "name": "Jean-Francois",
        "passives": [
            "Resist Health Steal Ailments: This hero is immune to status ailments that steal health."
        ]
    },
    {
        "heroId": "magic_carpet_jwala",
        "name": "Jwala",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "mahayoddha_jyoti",
        "name": "Jyoti",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions."
        ]
    },
    {
        "heroId": "tribal_chief",
        "name": "Khagan",
        "passives": []
    },
    {
        "heroId": "tribal_chief_costume_conqueror",
        "name": "Khagan C1",
        "passives": []
    },
    {
        "heroId": "tribal_chief_costume_leopard",
        "name": "Khagan C2",
        "passives": []
    },
    {
        "heroId": "tribal_chief_costume_cute",
        "name": "Khagan Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "tribal_chief_costume_glass",
        "name": "Khagan Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "s5_khafre",
        "name": "Khufu",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 243 Sand damage over 3 turns."
        ]
    },
    {
        "heroId": "s5_khafre_costume_aquatic",
        "name": "Khufu C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 366 Sand damage over 3 turns.",
            "Extra Chance for Effects On Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 50% is added to its power."
        ]
    },
    {
        "heroId": "s4_kravekrush",
        "name": "Kravekrush",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_kravekrush_costume_grillmaster",
        "name": "Kravekrush C1",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill, all allies deal +70% increased normal attack and Special Skills damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "s3_loki_female",
        "name": "Lady Loki",
        "passives": []
    },
    {
        "heroId": "s3_loki_female_costume_mother",
        "name": "Lady Loki C1",
        "passives": []
    },
    {
        "heroId": "tales1_lasalle",
        "name": "Lasalle",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_lasalle_costume_jockey",
        "name": "Lasalle C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "castle_raven_lewena",
        "name": "Lewena",
        "passives": []
    },
    {
        "heroId": "outlaw_li_kui",
        "name": "Li Kui",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "owl_lodius",
        "name": "Lodius",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "outlaw_lu_zhishen",
        "name": "Lu Zhishen",
        "passives": [
            "Health Boost on Critical Special Attack: When this character scores a critical hit with their Special Skill, they boost the health of all their allies by 10%. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "goblin_madhammer",
        "name": "Madhammer",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "ninja_malum",
        "name": "Malum",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "fire_god_maple",
        "name": "Maple",
        "passives": [
            "Resist Buff Immunity: This character has innate resistance against status ailments that give immunity to new buffs.",
            "Health Recovery on Buff Received: This character recover 5% health when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "nomad_female_captain",
        "name": "Marjana",
        "passives": []
    },
    {
        "heroId": "nomad_female_captain_costume_pirate",
        "name": "Marjana C1",
        "passives": []
    },
    {
        "heroId": "nomad_female_captain_costume_thief",
        "name": "Marjana C2",
        "passives": []
    },
    {
        "heroId": "nomad_female_captain_costume_cute",
        "name": "Marjana Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_glass",
        "name": "Marjana Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "nomad_female_captain_costume_stylish",
        "name": "Marjana Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "s2_noble_lady",
        "name": "Mitsuko",
        "passives": []
    },
    {
        "heroId": "s2_noble_lady_costume_warrior",
        "name": "Mitsuko C1",
        "passives": []
    },
    {
        "heroId": "magic_nadezhda",
        "name": "Nadezhda",
        "passives": [
            "Health recovery on special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_nadezhda_costume_postmaster",
        "name": "Nadezhda C1",
        "passives": [
            "Health Recovery on Special: When this character casts their Special Skill, they have a 60% chance to recover 20% health for allies. If the Special Skill is fully charged, the chance is 100%.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "magic_carpet_naeem",
        "name": "Naeem",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "fire_god_natalya",
        "name": "Natalya",
        "passives": []
    },
    {
        "heroId": "fire_god_natalya_costume_seamstress",
        "name": "Natalya C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "fire_god_neema",
        "name": "Neema",
        "passives": [
            "Ignore Taunt: This character's Special Skill is not affected by Taunt.",
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "fox_nibbles",
        "name": "Nibbles",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "elemental_niki",
        "name": "Niki",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "ninja_nomad",
        "name": "Nomad",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "fire_god_noor",
        "name": "Noor",
        "passives": [
            "Sparrow Summoner: Summons a Sparrow Minion for self when an enemy summons any Minions by Special Skill."
        ]
    },
    {
        "heroId": "champions_norman",
        "name": "Norman",
        "passives": [
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3 turns when this character receives a status ailment or a negative stack.",
            "Mana on Taunt: Each time an enemy receives Taunt status effect this character's mana is increased by 10%.",
            "Ignore Taunt: The character's Special Skill is not affected by Taunt."
        ]
    },
    {
        "heroId": "s2_oceanus",
        "name": "Oceanus",
        "passives": []
    },
    {
        "heroId": "s2_oceanus_costume_volcano",
        "name": "Oceanus C1",
        "passives": []
    },
    {
        "heroId": "s4_octros",
        "name": "Octros",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_octros_costume_suitor",
        "name": "Octros C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "shadow_omen",
        "name": "Omen",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "monster_hunter_otis",
        "name": "Otis",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 12% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "christmas_ottilia",
        "name": "Ottilia",
        "passives": []
    },
    {
        "heroId": "beauty_beast_pendulus_clonk",
        "name": "Pendulus Clonk",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when Status Ailment Expires or Is Cleared: This character's receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment or from a negative stack, they will recover that much health instead."
        ]
    },
    {
        "heroId": "goblin_pepperflame",
        "name": "Pepperflame",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "bard_phenexa",
        "name": "Phenexa",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "astral_dwarf_pluth",
        "name": "Pluth",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "fables_puss_in_boots",
        "name": "Puss in Boots",
        "passives": []
    },
    {
        "heroId": "fables_puss_in_boots_costume_highwaycat",
        "name": "Puss in Boots C1",
        "passives": []
    },
    {
        "heroId": "wonderland_queen",
        "name": "Queen of Hearts",
        "passives": []
    },
    {
        "heroId": "wonderland_queen_costume_benefactor",
        "name": "Queen of Hearts C1",
        "passives": [
            "Mindless Attack On Special Skill: On Special Skill cast, 50% chance to inflict Mindless Attack on a random enemy for 3 turns."
        ]
    },
    {
        "heroId": "wild_cat_rajesh",
        "name": "Rajesh",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "shadow_rashan",
        "name": "Rashan",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "magic_ray",
        "name": "Ray",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Stack on Special: When this character casts their Special Skill, they have a 50% chance to give 10% mana to all allies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_ray_costume_spiky",
        "name": "Ray C1",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, they have a 60% chance to give 10% mana to all allies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -7% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "fables_red_hood",
        "name": "Red Hood",
        "passives": []
    },
    {
        "heroId": "tales2_regin",
        "name": "Regin",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 319 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_regin_costume_omen",
        "name": "Regin C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 387 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "fire_god_reuben",
        "name": "Reuben",
        "passives": [
            "Resist Mana Generation Ailments: This character is immune to status ailments and negative stacks that affect mana generation. Doesn't apply to status ailments that stop mana generation or steal mana."
        ]
    },
    {
        "heroId": "monster_hunter_revna",
        "name": "Revna",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "goblin_rocket",
        "name": "Rocket",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "shadow_rosanna",
        "name": "Rosanna",
        "passives": []
    },
    {
        "heroId": "beauty_beast_rose_de_flo",
        "name": "Rose de Flo",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "fire_god_roughian_and_nurgib",
        "name": "Roughian & Nurgib",
        "passives": [
            "Eat Minions and Gain Mana Over Time: Every 3 turns eats all Minions from a random enemy and gains a small amount of mana for each eaten Minion.",
            "Mana on Health Recovery: This character receives 5% mana each time its health is recovered."
        ]
    },
    {
        "heroId": "monster_hunter_ruadh",
        "name": "Ruadh",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "ninja_ruby",
        "name": "Ruby",
        "passives": []
    },
    {
        "heroId": "fire_god_russell",
        "name": "Russell",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Mana on Burn: This character gains 5% mana each time an enemy receives Burn damage."
        ]
    },
    {
        "heroId": "fox_rust",
        "name": "Rust",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "bard_balafon",
        "name": "Salimata",
        "passives": [
            "Quick Tempo: Ballad. All Ballads cast by enemies only last for 1 turn.",
            "Quick Tempo: Dance. All Dances cast by enemies only last for 1 turn."
        ]
    },
    {
        "heroId": "astral_demon_salome",
        "name": "Salome",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Resist Healing Ailments: This character is immune to status ailments that affect healing."
        ]
    },
    {
        "heroId": "christmas_santa",
        "name": "Santa Claus",
        "passives": []
    },
    {
        "heroId": "christmas_santa_costume_metal",
        "name": "Santa Claus C1",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by the Hero inflicts 332 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "slayer_saoirse",
        "name": "Saoirse",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "slayer_saoirse_costume_knight",
        "name": "Saoirse C1",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks.",
            "Bleed on Special Skill: When this character casts their Special Skill, all enemies receive 452 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "construct_scoria",
        "name": "Scoria",
        "passives": [
            "Resist Special Skill Blocking: This character has innate resistance against status ailments that block Special Skill.",
            "Corrosive Core: The Construct Core of this character is Corrosive Core. The Corrosive Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Poison for 3 turns. With a fully charged Corrosive Core, the Corrosive Poision deals 146 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The poison damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "astral_dwarf_sedille",
        "name": "Sedille",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character has innate resistance against incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "s5_sekhmet",
        "name": "Sekhmet",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_sekhmet_costume_warden",
        "name": "Sekhmet C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "ninja_serandite",
        "name": "Serandite",
        "passives": []
    },
    {
        "heroId": "construct_sizzleomatic",
        "name": "Sizzleomatic",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core.",
            "The Minion Core activates each time this character's Special Skill is cast:",
            "* With a fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minions from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "fire_god_skargremar",
        "name": "Skargremar",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill."
        ]
    },
    {
        "heroId": "astral_sparklight",
        "name": "Sparklight",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "kingdom_sun_quan",
        "name": "Sun Quan",
        "passives": []
    },
    {
        "heroId": "kingdom_sun_quan_costume_fire_bat",
        "name": "Sun Quan C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "fire_god_tahir",
        "name": "Tahir",
        "passives": [
            "Health recovery on status Ailment Received: This character recovers 50 HP when they receive a status ailment or a negative stack.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "s5_tetisheri",
        "name": "Tetisheri",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies."
        ]
    },
    {
        "heroId": "s5_tetisheri_costume_molten",
        "name": "Tetisheri C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispells the latest dispellable buff from all enemies.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "easter_timothy",
        "name": "Timothy",
        "passives": []
    },
    {
        "heroId": "castle_bear_torben",
        "name": "Torben",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "mimic_troop_red",
        "name": "Troop Mimic Fire",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic grants a chance for the following extra loot when completing stages",
            "RARE",
            "* Barbaric Maulers",
            "* Barbaric Minotaurs",
            "* Firecaller Battlemages",
            "* Trainer Troop",
            "UNCOMMON",
            "* Barbaric Berserkers",
            "* Firecaller Wizards",
            "* Trainer Troop",
            "COMMON",
            "* Common Villager",
            "* Barbaric Monks",
            "* Barbaric Fighters",
            "* Trainer Troop"
        ]
    },
    {
        "heroId": "s3_tyr",
        "name": "Tyr",
        "passives": []
    },
    {
        "heroId": "s3_tyr_costume_savage",
        "name": "Tyr C1",
        "passives": []
    },
    {
        "heroId": "kalevala_ukkonen",
        "name": "Ukkonen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_ukkonen_costume_ukkonen_infernal",
        "name": "Ukkonen C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "halloween_vanda",
        "name": "Vanda",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "halloween_vanda_costume_mafia",
        "name": "Vanda C1",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "garrison_vanya",
        "name": "Vanya",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "beowulf_wiglaf",
        "name": "Wiglaf",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never mises its target.",
            "Empowered Resist Mana Reductions: This character has innate resistance against mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "institute_wilcox",
        "name": "Wilcox",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Eldritch Pact: If defeated, this character has a chance to be reborn as Eldritch Host. The chance is 10% per 10 Insanity on this character, up to maximum chance of 100%.",
            "If this character defeats themself when activating Insanity, the chance to be reborn is always 100%.",
            "The Eldritch Host has:",
            "* 100% inherited health.",
            "* 1200 attack.",
            "* 1200 defense.",
            "Special Skill: Eldritch Bright.",
            "* Deals 400% damage to the target and inflicts 35 Insanity on them."
        ]
    },
    {
        "heroId": "s4_xenda",
        "name": "Xenda",
        "passives": [
            "Special Skill Damage Reduction: Received damage is reduced by -20% for the first 3 times this character receives damage from Special Skills."
        ]
    },
    {
        "heroId": "s4_xenda_costume_flame",
        "name": "Xenda C1",
        "passives": [
            "Special Skill Damage Reduction: Received damage is reduced by -20% for the first 3 times this character receives damage from Special Skills",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill, all allies deal +70% increased normal attack and Special Skill damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaotu",
        "name": "Xiaotu",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "lunar_new_year_xiaotu_costume_golden",
        "name": "Xiaotu C1",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "journey_xiwangmu",
        "name": "Xiwangmu",
        "passives": [
            "Mana on Buff Received: This character has a 50% chance to gain 10% mana when they receive a buff or possitive stack.",
            "Health Recovery on Buff Received: This character has a 50% chance to recover 10% health when they receive a buff or possitve stack."
        ]
    },
    {
        "heroId": "fire_god_yang_mai",
        "name": "Yang Mai",
        "passives": [
            "Status effect on mana reduction: The caster gets +30% attack for 3 turns when their mana is reduced.",
            "Resist Water: This character is immune to status ailments that deal Water damage."
        ]
    },
    {
        "heroId": "faun_yolanda",
        "name": "Yolanda",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character has innate resistance against status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "fire_god_zagrog",
        "name": "Zagrog",
        "passives": [
            "Resist Mana Ailments: This character is immune to status ailments and negative stacks that affect mana generation. Applies also to status ailments that block mana or steal mana.",
            "Resist Attack Status Effects: This character is immune to all status effects and stacks that effect attack. This includes status effect buffs."
        ]
    },
    {
        "heroId": "fire_god_zarga",
        "name": "Zarga",
        "passives": [
            "Heal on Bleed: This character regenerates 50 HP each time an enemy receives Bleed damage.",
            "Mana on Bleed: This character receives 8% mana each time an enemy receives Bleed damage."
        ]
    },
    {
        "heroId": "elemental_zaria",
        "name": "Zaria",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "s4_zenobia",
        "name": "Zenobia",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buff this hero receives from Special Skills is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_zenobia_costume_floral",
        "name": "Zenobia C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this character receives from Special Skill is increased by 1 turn.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "slime_zestique",
        "name": "Zestique",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "fire_god_zidane",
        "name": "Zidane",
        "passives": [
            "Increased Attack per Non-Fire Enemy: At the start of each battle, this character's attack is increased by +5% for every enemy that is not of Fire element. In battles with multiple waves, the effect is refreshed at the beginning of each wave.",
            "Resist Buff Blocking: This character is immune to effects that would block them from receiving new status effect buffs."
        ]
    },
    {
        "heroId": "fire_god_zimkitha",
        "name": "Zimkitha",
        "passives": []
    },
    {
        "heroId": "fire_god_zimkitha_costume_adventurer",
        "name": "Zimkitha C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "oriental_female_ninja",
        "name": "Hikaru",
        "passives": []
    },
    {
        "heroId": "oriental_warrior",
        "name": "Kenjiro",
        "passives": []
    },
    {
        "heroId": "oriental_monkey_warrior",
        "name": "Hou",
        "passives": []
    },
    {
        "heroId": "oriental_squire",
        "name": "Nash",
        "passives": []
    },
    {
        "heroId": "oriental_panda_scout",
        "name": "Sha Ji",
        "passives": []
    },
    {
        "heroId": "s3_agnes",
        "name": "Agnes",
        "passives": []
    },
    {
        "heroId": "sand_soldier",
        "name": "Arman",
        "passives": []
    },
    {
        "heroId": "oriental_brawler",
        "name": "Bane",
        "passives": []
    },
    {
        "heroId": "oriental_brawler_costume_egypt",
        "name": "Bane C1",
        "passives": []
    },
    {
        "heroId": "oriental_brawler_costume_cute",
        "name": "Bane Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_brawler_costume_glass",
        "name": "Bane Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "castle_wolf_bertulf",
        "name": "Bertulf",
        "passives": []
    },
    {
        "heroId": "circus_candy",
        "name": "Candy",
        "passives": []
    },
    {
        "heroId": "monster_hunter_cedar",
        "name": "Cedar",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "shadow_cthuwu",
        "name": "Cthuwu",
        "passives": []
    },
    {
        "heroId": "oriental_female_guard",
        "name": "Dawa",
        "passives": []
    },
    {
        "heroId": "oriental_female_guard_costume_soldier",
        "name": "Dawa C1",
        "passives": []
    },
    {
        "heroId": "oriental_female_guard_costume_cute",
        "name": "Dawa Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_female_guard_costume_glass",
        "name": "Dawa Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "beachparty_dolrak",
        "name": "Dolrak",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 124 Water damage over 2 turns.",
            "Resist Water: This character is immune to status ailments that deal Water damage."
        ]
    },
    {
        "heroId": "monster_hunter_edelaide",
        "name": "Edelaide",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "musketeer_felton",
        "name": "Felton",
        "passives": [
            "Damage on Special Skill: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "musketeer_felton_costume_pirate",
        "name": "Felton C1",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 75% chance to deal 50% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "oriental_panda_berserker",
        "name": "Gan Ju",
        "passives": []
    },
    {
        "heroId": "oriental_panda_berserker_costume_farmer",
        "name": "Gan Ju C1",
        "passives": []
    },
    {
        "heroId": "oriental_panda_berserker_costume_cute",
        "name": "Gan Ju Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_glass",
        "name": "Gan Ju Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "oriental_panda_berserker_costume_stylish",
        "name": "Gan Ju Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "slime_harubo",
        "name": "Harubo",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "construct_ironvein",
        "name": "Ironvein",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core.",
            "The Minion Core activates each time this character's Special Skill is cast:",
            "* With a fully charged Minion Core, summons a Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minions from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "tales1_jaco",
        "name": "Jaco",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_jaco_costume_alchemist",
        "name": "Jaco C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 3 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "christmas_jolly",
        "name": "Jolly",
        "passives": []
    },
    {
        "heroId": "oriental_female_mage",
        "name": "Kailani",
        "passives": []
    },
    {
        "heroId": "oriental_female_mage_costume_mender",
        "name": "Kailani C1",
        "passives": []
    },
    {
        "heroId": "oriental_female_mage_costume_cute",
        "name": "Kailani Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_glass",
        "name": "Kailani Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "oriental_female_mage_costume_stylish",
        "name": "Kailani Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "ninja_kinsaishi",
        "name": "Kinsaishi",
        "passives": []
    },
    {
        "heroId": "s3_kvasir",
        "name": "Kvasir",
        "passives": []
    },
    {
        "heroId": "s3_kvasir_costume_captain",
        "name": "Kvasir C1",
        "passives": []
    },
    {
        "heroId": "s2_merwoman",
        "name": "Melia",
        "passives": []
    },
    {
        "heroId": "s2_merwoman_costume_emissary",
        "name": "Melia C1",
        "passives": []
    },
    {
        "heroId": "owl_paeia",
        "name": "Paeia",
        "passives": [
            "Reduce Mana Gain from Special Skills: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "fables_pixie",
        "name": "Pixie",
        "passives": []
    },
    {
        "heroId": "s4_poppy",
        "name": "Poppy",
        "passives": [
            "Increased Specail Skill Damage: This first time this character cast a  Special Skill that deals damage an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_poppy_costume_lodger",
        "name": "Poppy C1",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s5_rekhetre",
        "name": "Rekhetre",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies."
        ]
    },
    {
        "heroId": "s5_rekhetre_costume_artist",
        "name": "Rekhetre C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailments from all allies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "mighty_pet_ribbit",
        "name": "Ribbit",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "construct_rustbeak",
        "name": "Rustbeak",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Repair Core: The Construct Core of this character is Repair Core.",
            "The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "pirate_sally",
        "name": "Sally",
        "passives": []
    },
    {
        "heroId": "faun_saskia",
        "name": "Saskia",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Defense Reduction: This character is immune to status ailments, stacks and Wither effects that affect defense."
        ]
    },
    {
        "heroId": "beowulf_aeschere",
        "name": "Aeschere",
        "passives": [
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or a negative stack."
        ]
    },
    {
        "heroId": "magic_anastasia",
        "name": "Anastasia",
        "passives": [
            "Status effect on special: When this character casts their Special Skill, they have a 50% chance to give -25% mana generation for 3 turns to all enemies. If the Special Skill is fully charged, the chance is 100%."
        ]
    },
    {
        "heroId": "mimic_ascension_epic_yellow",
        "name": "Ascension Mimic Epic Holy",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "***",
            "- Hidden Blade",
            "- Orb of Magic",
            "- Sturdy Shield",
            "- Trap Tool",
            "- Warm Cape",
            "- Battle Manual",
            "- Chainmail Shirt",
            "- Scabbard",
            "- Tall Boots",
            "**",
            "- Arcane Scripts",
            "- Dagger",
            "- Leather Armor",
            "- Sharpening Stone",
            "- Strong Rope",
            "- Wooden Shield",
            "*",
            "- Advanturer's Kit",
            "- Practice Sword",
            "- Rugged Clothes"
        ]
    },
    {
        "heroId": "gargoyle_bellerive",
        "name": "Bellerive",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "monster_hunter_bogart",
        "name": "Bogart",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 8% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "beauty_beast_chandel",
        "name": "Chandel",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment, they will recover that much health instead."
        ]
    },
    {
        "heroId": "oriental_falconer",
        "name": "Chao",
        "passives": []
    },
    {
        "heroId": "oriental_falconer_costume_dodo",
        "name": "Chao C1",
        "passives": []
    },
    {
        "heroId": "oriental_falconer_costume_cub",
        "name": "Chao C2",
        "passives": []
    },
    {
        "heroId": "oriental_falconer_costume_cute",
        "name": "Chao Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_falconer_costume_glass",
        "name": "Chao Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "circus_dandre",
        "name": "D'Andre",
        "passives": []
    },
    {
        "heroId": "s2_tanuki_raccoon",
        "name": "Danzaburo",
        "passives": []
    },
    {
        "heroId": "s2_tanuki_raccoon_costume_merchant",
        "name": "Danzaburo C1",
        "passives": []
    },
    {
        "heroId": "astral_dwarf_errin",
        "name": "Errin",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions.",
            "Destroy Fiends on Special: When this character casts their Special Skill, all Fiends are destroyed from them."
        ]
    },
    {
        "heroId": "tales2_fjalar",
        "name": "Fjalar",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 193 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_fjalar_costume_undead",
        "name": "Fjalar C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deal Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With a fully charged Molten Core, the Corrosive Burn deals 238 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "goblin_goldie",
        "name": "Goldie",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "fables_gretel",
        "name": "Gretel",
        "passives": []
    },
    {
        "heroId": "s4_griffin",
        "name": "Griffin",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_griffin_costume_priest",
        "name": "Griffin C1",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "outlaw_gu_dasao",
        "name": "Gu Dasao",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "guardian_jackal_assassin",
        "name": "Guardian Jackal",
        "passives": []
    },
    {
        "heroId": "guardian_jackal_assassin_costume_bones",
        "name": "Guardian Jackal C1",
        "passives": []
    },
    {
        "heroId": "s3_gullinbursti",
        "name": "Gullinbursti",
        "passives": []
    },
    {
        "heroId": "s3_gullinbursti_costume_toxic",
        "name": "Gullinbursti C1",
        "passives": []
    },
    {
        "heroId": "christmas_holly",
        "name": "Holly",
        "passives": []
    },
    {
        "heroId": "oriental_panda_warrior",
        "name": "Hu Tao",
        "passives": []
    },
    {
        "heroId": "oriental_panda_warrior_costume_armor",
        "name": "Hu Tao C1",
        "passives": []
    },
    {
        "heroId": "oriental_panda_warrior_costume_dueller",
        "name": "Hu Tao C2",
        "passives": []
    },
    {
        "heroId": "oriental_panda_warrior_costume_cute",
        "name": "Hu Tao Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_panda_warrior_costume_glass",
        "name": "Hu Tao Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "easter_lady_woolerton",
        "name": "Lady Woolerton",
        "passives": []
    },
    {
        "heroId": "oriental_female_templar",
        "name": "Li Xiu",
        "passives": []
    },
    {
        "heroId": "oriental_female_templar_costume_kimono",
        "name": "Li Xiu C1",
        "passives": []
    },
    {
        "heroId": "oriental_female_templar_costume_fireworks",
        "name": "Li Xiu C2",
        "passives": []
    },
    {
        "heroId": "oriental_female_templar_costume_cute",
        "name": "Li Xiu Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_glass",
        "name": "Li Xiu Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "oriental_female_templar_costume_stylish",
        "name": "Li Xiu Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "s3_mist",
        "name": "Mist",
        "passives": []
    },
    {
        "heroId": "vegetable_pineon",
        "name": "Pineon",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy. This Passive Skill only activates once per turn for each team.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 35% attack, 10% health",
            "2) Sprout Fiend: 60% attack, 20% health",
            "3) Blossom Mega Fiend: 200% attack, 45% health"
        ]
    },
    {
        "heroId": "s5_scoratek",
        "name": "Scoratek",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -24% mana generation for 3 turns."
        ]
    },
    {
        "heroId": "s5_scoratek_costume_sentinel",
        "name": "Scoratek C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* Dispels the latest dispellable buff from enemies.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Resist Sand: This character is immune to status ailments that deal Sand damage."
        ]
    },
    {
        "heroId": "styx_steropes",
        "name": "Steropes",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "wild_cat_tunes",
        "name": "Tunes",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "valentines_voluptas",
        "name": "Voluptas",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "valentines_voluptas_costume_paint",
        "name": "Voluptas C1",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills."
        ]
    },
    {
        "heroId": "mighty_pet_waddles",
        "name": "Waddles",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "kingdom_wang_yuanji",
        "name": "Wang Yuanji",
        "passives": []
    },
    {
        "heroId": "kingdom_wang_yuanji_costume_artisan",
        "name": "Wang Yuanji C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "oriental_monkey_captain",
        "name": "Wu Kong",
        "passives": []
    },
    {
        "heroId": "oriental_monkey_captain_costume_warrior",
        "name": "Wu Kong C1",
        "passives": []
    },
    {
        "heroId": "oriental_monkey_captain_costume_reveller",
        "name": "Wu Kong C2",
        "passives": []
    },
    {
        "heroId": "oriental_monkey_captain_costume_cute",
        "name": "Wu Kong Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_monkey_captain_costume_glass",
        "name": "Wu Kong Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "elemental_zione",
        "name": "Zione",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "mimic_aether_yellow",
        "name": "Aether Mimic Holy",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Alpha Aether",
            "* Holy Aether III",
            "* Holy Aether II",
            "* Holy Aether I"
        ]
    },
    {
        "heroId": "s4_akkorog",
        "name": "Akkorog",
        "passives": [
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage, an additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_akkorog_costume_football",
        "name": "Akkorog C1",
        "passives": [
            "Increased Special Skill Damage: This first time this character cast a Special Skill that deals damage an additional 30% is added to its power.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 3 turns."
        ]
    },
    {
        "heroId": "christmas_albin",
        "name": "Albin",
        "passives": []
    },
    {
        "heroId": "castle_stag_alvar",
        "name": "Alvar",
        "passives": [
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "monster_hunter_amund",
        "name": "Amund",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "pirate_anne",
        "name": "Anne",
        "passives": []
    },
    {
        "heroId": "valentines_anteros",
        "name": "Anteros",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill."
        ]
    },
    {
        "heroId": "s4_aouda",
        "name": "Aouda",
        "passives": [
            "Increased Special Skill Damage: First time this hero casts Special Skill that does damage, additional 30% is added to its power."
        ]
    },
    {
        "heroId": "s4_aouda_costume_lotus",
        "name": "Aouda C1",
        "passives": [
            "Increased Special Skill Damage: This first time this character cast a Special Skill that deals damage an additional 30% is added to its power.",
            "Increased Damage Against Boosted Health: After Special Skill cast, all allies' normal attacks and Special Skills deal +70% damage against targets with boosted health for 4 turns."
        ]
    },
    {
        "heroId": "mimic_ascension_item_yellow",
        "name": "Ascension Mimic Holy",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "****",
            "- Damascus Blade",
            "- Tome Of Tactics",
            "- Poison Darts",
            "***",
            "- Fine Gloves",
            "- Compass",
            "- Orb of Magic",
            "- Chainmail Shirt",
            "- Tall Boots",
            "**",
            "- Arcane Scipt"
        ]
    },
    {
        "heroId": "fox_ashen",
        "name": "Ashen",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "bard_astrid",
        "name": "Astrid",
        "passives": [
            "Quick Tempo: Ballad. All Ballads cast by enemies only last for 1 turn.",
            "Quick Tempo: Dance. All Dances cast by enemies only last for 1 turn."
        ]
    },
    {
        "heroId": "moth_auricarc",
        "name": "Auricarc",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "holy_god_aurox",
        "name": "Aurox",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Increased Special Skill Damage: The first time this character cast a Special Skill that deals damage, an additional 50% is added to its power."
        ]
    },
    {
        "heroId": "holy_god_aviana",
        "name": "Aviana",
        "passives": [
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage.",
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "holy_god_bai_yeong",
        "name": "Bai Yeong",
        "passives": [
            "Resist Status Ailments From Minions: This character is immune to status ailments that are from Minions."
        ]
    },
    {
        "heroId": "lunar_new_year_baishu",
        "name": "Baishu",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "tales2_bragi",
        "name": "Bragi",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 343 Frost damage and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "slayer_caitlin",
        "name": "Caitlin",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "slayer_caitlin_costume_crusader",
        "name": "Caitlin C1",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks.",
            "Bleed on Special Skill: When this character casts their Special Skill, all enemies receive 528 Bleed damage over 4 turns."
        ]
    },
    {
        "heroId": "holy_god_celidana",
        "name": "Celidana",
        "passives": [
            "Resist Max Health Reduction: This character is immune to max health reduction.",
            "Boost Health on Enemy Special: When an enemy casts their Special Skill, this character has a 50% chance to boost this character's health by 100."
        ]
    },
    {
        "heroId": "beauty_beast_cerissa",
        "name": "Cerissa",
        "passives": [
            "Revival Health Reduction: All enemies have -80% health when revived. Boss enemies are not affected.",
            "Heal when status ailment expires or is cleared: This character receives 15% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Beautiful Inside: Whenever this character would take damage from a status ailment or from a negative stack, they will recover that much health instead."
        ]
    },
    {
        "heroId": "ballerina_christine_daae",
        "name": "Christine Daae",
        "passives": [
            "Resist Attack Ailments: This character is immune to status ailments that affect attack.",
            "Heal when status ailment expires or is cleared: This character receives 5% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "s5_cleopatra",
        "name": "Cleopatra",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies."
        ]
    },
    {
        "heroId": "s5_cleopatra_costume_feline",
        "name": "Cleopatra C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* Cleanses the latest cleansable status ailment from all allies.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill that grant extra effect on cast are guaranteed to activate.",
            "Health Recover on Buff Received: This character recovers 5% HP when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "musketeer_constance",
        "name": "Constance",
        "passives": [
            "Damage on Special Skill and Cover Damage: When this character receives damage from Special Skills or in place of a character in Cover, there's a 60% chance to deal 20% of the received damage on all enemies."
        ]
    },
    {
        "heroId": "monster_hunter_dabria",
        "name": "Dabria",
        "passives": [
            "Hunter's Sense: When this character casts their Special Skill, they transfer the newest cleansable status ailment from themself to the target. If the Special Skill cannot target an enemy, a random enemy is chosen instead. If this character has no cleansable status ailments, they recover 8% health.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "holy_god_delilah",
        "name": "Delilah",
        "passives": []
    },
    {
        "heroId": "holy_god_delilah_costume_guardian",
        "name": "Delilah C1",
        "passives": [
            "Cleanse on Special: When this character casts their Special Skill, they cleanse the newest status ailment from all allies."
        ]
    },
    {
        "heroId": "holy_god_devana",
        "name": "Devana",
        "passives": [
            "Resist Dispels: This character is immune to effects that would dispel their status effect buffs.",
            "Resist negative minion effects: This character is immune to incoming negative effects and damage from Minions."
        ]
    },
    {
        "heroId": "circus_director_zuri",
        "name": "Director Zuri",
        "passives": []
    },
    {
        "heroId": "circus_director_zuri_costume_clown",
        "name": "Director Zuri C1",
        "passives": [
            "Copy Ailment on Cleanse: When a status ailment is cleansed from this hero, a new copy of the cleansed ailment is applied on a random enemy."
        ]
    },
    {
        "heroId": "shadow_dolores",
        "name": "Dolores",
        "passives": [
            "Marked by the Old Ones: All damage is reduced by 5% per 10 Insanity for this character up to a maximum reduction of 50%."
        ]
    },
    {
        "heroId": "holy_god_drake_lee",
        "name": "Drake Fong",
        "passives": []
    },
    {
        "heroId": "holy_god_drake_lee_costume_serene",
        "name": "Drake Fong C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "castle_raven_eloise",
        "name": "Eloise",
        "passives": []
    },
    {
        "heroId": "mimic_emblem_yellow",
        "name": "Emblem Mimic Holy",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Master Cleric Emblems",
            "* Master Monk Emblems",
            "* Cleric Emblems",
            "* Monk Emblems"
        ]
    },
    {
        "heroId": "tales1_ephyra",
        "name": "Ephyra",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns."
        ]
    },
    {
        "heroId": "tales1_ephyra_costume_reef",
        "name": "Ephyra C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* All allies get +21% critical chance for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "journey_erlang_shen",
        "name": "Erlang Shen",
        "passives": []
    },
    {
        "heroId": "s5_eset",
        "name": "Eset",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_eset_costume_goldensun",
        "name": "Eset C1",
        "passives": [
            "Effects on Special Skill: 70% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "mimic_training_hero_yellow",
        "name": "Experience Mimic Holy",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its targets.",
            "Mimic Loot: This Mimic gives a chance for extra loot when completing stages",
            "* Rare Holy Trainer Heroes",
            "* Uncommon Holy Trainer Heroes",
            "* Uncommon Holy Heroes",
            "* Common Holy Trainer Heroes",
            "* Common Holy Heroes"
        ]
    },
    {
        "heroId": "holy_god_faeona",
        "name": "Faeona",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "circus_faline",
        "name": "Faline",
        "passives": []
    },
    {
        "heroId": "christmas_florencia",
        "name": "Florencia",
        "passives": [
            "Frost on Minion Hit: Each hit from the Minions owned by this character inflict 500 Frost damage over 4 turns."
        ]
    },
    {
        "heroId": "garrison_frank_fangs_brimwell",
        "name": "Frank 'Fangs' Brimwell",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "mighty_pet_furdinand",
        "name": "Furdinand",
        "passives": [
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn.",
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "moth_furgeant",
        "name": "Furgeant",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "tales2_gandr",
        "name": "Gandr",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 450 boosted health and 5% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 315 Burn damage, and lowers the target's defense by -12% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "tales2_gandr_costume_guardian",
        "name": "Gandr C1",
        "passives": [
            "Empowered Resist Burn: This character is immune to status ailments that deals Burn damage and gains 600 boosted health and 10% mana each time they resist.",
            "Molten Core: The Molten Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Burn for 3 turns. With fully charged Molten Core, the Corrosive Burn deals 380 Burn damage, and lowers the target's defense by -13% each turn. Deals extra damage against heroes with Minions or Mega Minions.",
            "* The Burn damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "faun_gideon",
        "name": "Gideon",
        "passives": [
            "Resist Defense Reduction: This character is immune to status ailments, stacks and Wither effects that affect defense.",
            "Resist Insanity: This character is immune to Insanity.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or a negative stacks."
        ]
    },
    {
        "heroId": "holy_god_gilda",
        "name": "Gilda",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies."
        ]
    },
    {
        "heroId": "holy_god_gilligan",
        "name": "Gilligan",
        "passives": [
            "Resist Mana Ailments: This character is immune to status ailments that affect mana.",
            "Mana Per Enemy Buff: Gains a small amount of mana for every active status effect buff that the enemy team has at the start of each turn (maximum of 20 buffs)."
        ]
    },
    {
        "heroId": "slime_goldrip",
        "name": "Goldrip",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "lunar_new_year_gongniu",
        "name": "Gongniu",
        "passives": [
            "Health Recovery on Status Ailment Received: This character recovers 10%  health when they receive a status ailment or a negative stack.",
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "slime_gooric",
        "name": "Gooric",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "elemental_grilka",
        "name": "Grilka",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "guardian_elephant",
        "name": "Guardian Elephant",
        "passives": [
            "Resist Damage from Status Effects: This character is immune to incoming damage from status effects and stacks."
        ]
    },
    {
        "heroId": "guardian_gazelle",
        "name": "Guardian Gazelle",
        "passives": []
    },
    {
        "heroId": "guardian_gazelle_costume_bandalore",
        "name": "Guardian Gazelle C1",
        "passives": []
    },
    {
        "heroId": "guardian_owl_gentleman",
        "name": "Guardian Owl",
        "passives": []
    },
    {
        "heroId": "fleur_guillemette",
        "name": "Guillemette",
        "passives": [
            "Sanguine Mark: All damage from normal attacks and Special Skill dealt by this character is increased by 5% per Blood Lily stack on target."
        ]
    },
    {
        "heroId": "knights_guinevere",
        "name": "Guinevere",
        "passives": []
    },
    {
        "heroId": "knights_guinevere_costume_rider",
        "name": "Guinevere C1",
        "passives": []
    },
    {
        "heroId": "shadow_gwendoline",
        "name": "Gwendoline",
        "passives": []
    },
    {
        "heroId": "construct_gwynn",
        "name": "Gwynn",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Corrosive Core: The Construct Core of this character is Corrosive Core. The Corrosive Core activates each time this character's Special Skill is cast:",
            "* All enemies receive Corrosive Poison for 3 turns. With a fully charged Corrosive Core, the Corrosive Poison deals 151 Poison damage and lowers the target's mana generation by -13% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The poison damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "mighty_pet_hachiko",
        "name": "Hachiko",
        "passives": [
            "Friend of the Familiars: When a Minion is summoned to any ally, this character gains 5% health and 5% mana. This effect can activate only once per turn.",
            "Wrath of Pets: When a Fiend is summoned to any enemy, this character deals 85% damage to all enemies. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "fox_halcyon",
        "name": "Halcyon",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "holy_god_hanitra",
        "name": "Hanitra",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skill.",
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "astral_dwarf_haumri",
        "name": "Haumri",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "gargoyle_hilda",
        "name": "Hilda",
        "passives": [
            "Gargoyle's Softskin: Every time this Gargoyle casts a Special Skill, their Softskin activates. The next 4 times they receive damage, it is reduced by -90%. They are also immune to all status ailments, mana reductions and Insanity. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "s5_horus",
        "name": "Horus",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns."
        ]
    },
    {
        "heroId": "s5_horus_costume_golden",
        "name": "Horus C1",
        "passives": [
            "Effects on Special Skill: 40% chance to perform the following actions when this character casts their Special Skill:",
            "* Deals 70% damage to all enemies.",
            "* All enemies get -34% attack for 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Mana on Health Boosting Special Skill: This character gains 5% mana each time an enemy casts a Special Skill that directly boosts health."
        ]
    },
    {
        "heroId": "astral_demon_ibelis",
        "name": "Ibelis",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "ninja_iga",
        "name": "Iga",
        "passives": [
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "forsaken_inanis",
        "name": "Inanis",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "s2_fox_girl",
        "name": "Inari",
        "passives": []
    },
    {
        "heroId": "s2_fox_girl_costume_white_kitsune",
        "name": "Inari C1",
        "passives": []
    },
    {
        "heroId": "construct_ironheart",
        "name": "Iron-Heart",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Minion Core: The Construct Core of this character is Minion Core. The Minion Core activates each time this character's Special Skill is cast.",
            "* With fully charged Minion Core, summon Killer Bot Minion with 27% HP and 55% attack inherited from the caster on all allies.",
            "* The HP and attack inherited from the caster are scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated.",
            "* Before the Killer Bot Minion hits a target, it destroys all Minion from the target and damages Mega Minions.",
            "* The Killer Bot Minion recovers 5% health for its owner at the end of each turn.",
            "* Wither: Each hit from a Killer Bot Minion gives its target -50 attack."
        ]
    },
    {
        "heroId": "elemental_ironmaw",
        "name": "Ironmaw",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "holy_god_ithar",
        "name": "Ithar",
        "passives": [
            "Resist Status Ailments From Minions: This character is immune to status ailments that are from Minions.",
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "masquerade_jana",
        "name": "Jana",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "easter_jasper",
        "name": "Jasper",
        "passives": []
    },
    {
        "heroId": "easter_jasper_costume_fisherman",
        "name": "Jasper C1",
        "passives": []
    },
    {
        "heroId": "elemental_jequn",
        "name": "Jequn",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_jequn_costume_gilded",
        "name": "Jequn C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "oriental_enchanted_monk",
        "name": "Joon",
        "passives": []
    },
    {
        "heroId": "oriental_enchanted_monk_costume_tiger",
        "name": "Joon C1",
        "passives": []
    },
    {
        "heroId": "oriental_enchanted_monk_costume_stoneguard",
        "name": "Joon C2",
        "passives": []
    },
    {
        "heroId": "oriental_enchanted_monk_costume_cute",
        "name": "Joon Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_enchanted_monk_costume_glass",
        "name": "Joon Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "masquerade_jove",
        "name": "Jove",
        "passives": [
            "Cleanse on Minion Death: This character is cleansed of status ailments when Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "exalted_female_statue",
        "name": "Justice",
        "passives": []
    },
    {
        "heroId": "exalted_female_statue_costume_sungoddess",
        "name": "Justice C1",
        "passives": []
    },
    {
        "heroId": "exalted_female_statue_costume_thorns",
        "name": "Justice C2",
        "passives": []
    },
    {
        "heroId": "exalted_female_statue_costume_cute",
        "name": "Justice Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "exalted_female_statue_costume_glass",
        "name": "Justice Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "slime_justico",
        "name": "Justico",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "holy_god_kara",
        "name": "Kara",
        "passives": [
            "Mana on Buff Dispel: This character receives 10% mana each time a buff is dispelled from this character.",
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "kalevala_kullervo",
        "name": "Kullervo",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "kalevala_kullervo_costume_battle_scarred",
        "name": "Kullervo C1",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "ninja_kushanku",
        "name": "Kushanku",
        "passives": []
    },
    {
        "heroId": "slime_labblub",
        "name": "Labblub",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "magic_carpet_lando",
        "name": "Lando",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "lunar_new_year_laohu",
        "name": "Laohu",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "lunar_new_year_laohu_costume_golden",
        "name": "Laohu C1",
        "passives": [
            "Stop Minions: Enemy Minions can't attack or use abilities."
        ]
    },
    {
        "heroId": "champions_lazara",
        "name": "Lazara",
        "passives": [
            "Mana Buff on Status Ailment Received: Receives +24% mana generation for 3 turns when this character receives a status ailment or a negative stack.",
            "Health Boost on Attempted Ally Cleanse: When an ally attempts to cleanse by using Special Skill, all allies receive 300 boosted health. This effect can activate only once per turn.",
            "Damage on Attempted Enemy Cleanse: When an enemy attempts to cleanse by using Special Skill, all enemies receive 300 damage. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "astral_lemonwood",
        "name": "Lemonwood",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "oriental_warrior_king",
        "name": "Leonidas",
        "passives": []
    },
    {
        "heroId": "oriental_warrior_king_costume_roman",
        "name": "Leonidas C1",
        "passives": []
    },
    {
        "heroId": "oriental_warrior_king_costume_mage",
        "name": "Leonidas C2",
        "passives": []
    },
    {
        "heroId": "oriental_warrior_king_costume_cute",
        "name": "Leonidas Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_glass",
        "name": "Leonidas Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "oriental_warrior_king_costume_stylish",
        "name": "Leonidas Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "owl_livia",
        "name": "Livia",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "bard_lyria",
        "name": "Lyria",
        "passives": [
            "Revival Chance Reduction: The chance of revival is reduced for all enemies in the battle. The chance is 20% of the original value."
        ]
    },
    {
        "heroId": "monster_hunter_malin",
        "name": "Malin",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "holy_god_malosi",
        "name": "Malosi",
        "passives": [
            "Resist Defense Ailments: The character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense."
        ]
    },
    {
        "heroId": "halloween_matilda",
        "name": "Matilda",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "holy_god_may",
        "name": "May",
        "passives": [
            "Resist Minion Removal: This character is immune to effects that would remove Minions from them.",
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "ballerina_meg_giry",
        "name": "Meg Giry",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments and negative stacks that affect defense. Doesn't apply to status ailments that affect elemental defense.",
            "Heal when status ailment expires or is cleared: This character receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn."
        ]
    },
    {
        "heroId": "astral_melodymuse",
        "name": "Melodymuse",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "s5_meresankh",
        "name": "Meresankh",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 231 Sand damage over 3 turns."
        ]
    },
    {
        "heroId": "s5_meresankh_costume_disco",
        "name": "Meresankh C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 70% damage to all enemies.",
            "* All enemies receive 357 Sand damage over 3 turns.",
            "Extra Chance for Effects on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast have 3 chances to activate.",
            "Increased Special Skill Damage: The first time this character casts a Special Skill that deals damage an additional 50% is added to its power."
        ]
    },
    {
        "heroId": "ninja_mica",
        "name": "Mica",
        "passives": []
    },
    {
        "heroId": "astral_moonbell",
        "name": "Moonbell",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage.",
            "Share Received Damage: 20% of damage received by this character is shared with other allies."
        ]
    },
    {
        "heroId": "magic_motega",
        "name": "Motega",
        "passives": [
            "Health recovery on Special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully charged, the chance is 100%.'"
        ]
    },
    {
        "heroId": "kalevala_mother_lemminkainen",
        "name": "Mother Lemminkainen",
        "passives": [
            "Power of Sisu: When this character starts a turn with low health for the first time during a battle, they recover 15% health and receive 15% mana."
        ]
    },
    {
        "heroId": "tales2_motsognir",
        "name": "Motsognir",
        "passives": [
            "Empowered Resist Frost: This character is immune to status ailments that deals Frost damage and gains 450 boosted health and 5% mana each time they resist.",
            "Arctic Core: The Arctic Core activates each time this character's Special Skill is cast",
            "* All enemies receive Corrosive Frost for 3 turns. With fully charged Arctic Core, the Corrosive Frost deals 316 Frost damage, and lowers the target's attack by -15% each turn. Deals extra damage against heroes with Minions or a Mega Minion.",
            "* The Frost damage is scaled by the amount of charge in the Core. All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "holy_god_musashi",
        "name": "Musashi",
        "passives": []
    },
    {
        "heroId": "holy_god_musashi_costume_prisoner",
        "name": "Musashi C1",
        "passives": [
            "Dispel on Special Skill: When this character casts their Special Skill, they dispel the newest status effect buff from all enemies."
        ]
    },
    {
        "heroId": "holy_god_neith",
        "name": "Neith",
        "passives": [
            "Resist Mana Generation Stopping: This character is immune to status ailments that stop mana generation."
        ]
    },
    {
        "heroId": "styx_nemesis",
        "name": "Nemesis",
        "passives": [
            "Resist Defense Ailments: This character is immune to status ailments that affect defense. Applies also to status ailments that affect elemental defense.",
            "Weaker Minions: Enemy Minions have -50% HP."
        ]
    },
    {
        "heroId": "beowulf_nithgaest",
        "name": "Nithgaest",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never misses its target.",
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "s3_norns",
        "name": "Norns",
        "passives": []
    },
    {
        "heroId": "s3_norns_costume_puppeteers",
        "name": "Norns C1",
        "passives": []
    },
    {
        "heroId": "s3_odin",
        "name": "Odin",
        "passives": []
    },
    {
        "heroId": "s3_odin_costume_champion",
        "name": "Odin C1",
        "passives": []
    },
    {
        "heroId": "bard_ogima",
        "name": "Ogima",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "holy_god_onatel",
        "name": "Onatel",
        "passives": [
            "Resist Blind: This character is immune to status ailments that affect accuracy. Doesn't apply to original status effects from allies."
        ]
    },
    {
        "heroId": "vegetable_onwyn",
        "name": "Onwyn",
        "passives": [
            "Empowered Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills. They also gain 450 boosted health and 5% mana each time they resist.",
            "Seedling Summoner: Summons a Seedling Fiend every turn to a random enemy.",
            "* The Seedling Fiend evolves into a Sprout Fiend after 2 turns.",
            "* The Sprout Fiend evolves into a Blossom Mega Fiend after 2 turns.",
            "* The evolution of the Fiends is delayed by 1 turn each time they absorb healing.",
            "1) Seedling Fiend: 50% attack, 20% health",
            "2) Sprout Fiend: 75% attack, 30% health",
            "3) Blossom Mega Fiend: 250% attack, 60% health."
        ]
    },
    {
        "heroId": "s5_papyros",
        "name": "Papyros",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* All allies gain a small amount of mana."
        ]
    },
    {
        "heroId": "s5_papyros_costume_colossus",
        "name": "Papyros C1",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill",
            "* Boosts health of all allies by 10%. Boosted health can exceed max HP.",
            "* All allies gain a small amount of mana.",
            "Guaranteed Effect on Special Skill: When this character casts their Special Skill, any of their Passive Skills that grant extra effects on cast are guaranteed to activate.",
            "Resist Mana Generation Stopping: This character is immune to status ailments that stop mana generation."
        ]
    },
    {
        "heroId": "gargoyle_penolite",
        "name": "Penolite",
        "passives": [
            "Gargoyle's Stoneskin: Every time this Gargoyle casts a Special Skill, their Stoneskin hardens. The next 4 times they receive damage, it is dropped to 1. This effect can't be dispelled."
        ]
    },
    {
        "heroId": "tales1_persa",
        "name": "Persa",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns."
        ]
    },
    {
        "heroId": "tales1_persa_costume_jellyfish_noble",
        "name": "Persa C1",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill",
            "* Deals 80% damage to all enemies.",
            "* The caster get +19% mana generation for 2 turns.",
            "Resist Insanity: This character is immune to Insanity."
        ]
    },
    {
        "heroId": "owl_pertinax",
        "name": "Pertinax",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "faun_philomena",
        "name": "Philomena",
        "passives": [
            "Minion Blind: All enemies' Minions have -60% accuracy. All enemies' Mega Minions have -50% accuracy.",
            "Resist Insanity: This character is immune to Insanity.",
            "Resist Attack Reduction: This character is immune to status ailments, stacks and Wither effects that affect attack."
        ]
    },
    {
        "heroId": "s2_poseidon",
        "name": "Poseidon",
        "passives": []
    },
    {
        "heroId": "s2_poseidon_costume_slayer",
        "name": "Poseidon C1",
        "passives": []
    },
    {
        "heroId": "institute_professor_ambrose",
        "name": "Prof. Ambrose",
        "passives": [
            "Minion Corruption: At the end of each turn, enemies with Insanity have a chance to have their Minions turn to Fiends. Reaching 70 Insanity activates the transformation automatically. A Minion will transform into an Eldritch Fiend: 15% attack, 18% health, inflicts 5 Insanity every turn. A mega Minion will transform into an Eldritch Mega Fiend: 115% attack, 68% health, inflicts 10% Insanity every turn.",
            "Branded by the Old Ones: All damage from normal attacks and Special Skills dealt by this character is increased by 6% per 10 Insanity on this character, up to 60%."
        ]
    },
    {
        "heroId": "s4_professor_lidenbrock",
        "name": "Prof. Lidenbrock",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle."
        ]
    },
    {
        "heroId": "s4_professor_lidenbrock_costume_jeweler",
        "name": "Prof. Lidenbrock C1",
        "passives": [
            "Start Battle with Mana: This character receives 20% mana at the start of the battle.",
            "Health Boost on Special Skill: On Special Skill cast, boosts all allies' HP by 10%."
        ]
    },
    {
        "heroId": "journey_queen_guowang",
        "name": "Queen Guowang",
        "passives": []
    },
    {
        "heroId": "sand_queen",
        "name": "Rana",
        "passives": []
    },
    {
        "heroId": "sand_queen_costume_surfer",
        "name": "Rana C1",
        "passives": []
    },
    {
        "heroId": "holy_god_ranvir",
        "name": "Ranvir",
        "passives": [
            "Resist Poison: This character is immune to status ailments that deal Poison damage."
        ]
    },
    {
        "heroId": "goblin_ratgrub",
        "name": "Ratgrub",
        "passives": [
            "Effects on Special Skill: 50% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "bard_rhys",
        "name": "Rhys",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skill, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in the battle."
        ]
    },
    {
        "heroId": "sand_roc",
        "name": "Roc",
        "passives": []
    },
    {
        "heroId": "sand_roc_costume_juice",
        "name": "Roc C1",
        "passives": []
    },
    {
        "heroId": "garrison_rosalind",
        "name": "Rosalind",
        "passives": [
            "Resist mana reduction: This character is immune to mana reduction.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "outlaw_ruan_xiaoqi",
        "name": "Ruan Xiaoqi",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "astral_dwarf_salniss",
        "name": "Salniss",
        "passives": [
            "Superior Bypass Minions: All damage done by this character bypasses Minions and Mega Minions.",
            "Superior Resist Negative Minion Effects: This character is immune to incoming negative effects and damage from Minions and Mega Minions.",
            "Perfect Accuracy: This character's Special Skill never misses its targets."
        ]
    },
    {
        "heroId": "moth_satinpimenter",
        "name": "Satinpimenter",
        "passives": [
            "Dodge Special Damage: This character has a 15% chance to dodge Special Skills that deal damage."
        ]
    },
    {
        "heroId": "wild_cat_savann",
        "name": "Savann",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments on Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* Status effect buffs and ailments.",
            "* Positive and negative stacks.",
            "* Growth and Wither effects."
        ]
    },
    {
        "heroId": "goblin_scrollbeast",
        "name": "Scrollbeast",
        "passives": [
            "Effects on Special Skill: 60% chance to perform the following actions when this character casts their Special Skill.",
            "* Deals 90% damage to all enemies.",
            "* All enemies get -25% accuracy for 3 turns."
        ]
    },
    {
        "heroId": "construct_shaal",
        "name": "Shaal",
        "passives": [
            "Resist Special Skill Blocking: This character is immune to status ailments that prevent the use of Special Skills.",
            "Repair Core: The Construct Core of this character is Repair Core. The Repair Core activates each time this character's Special Skill is cast:",
            "* With fully charged Repair Core, boosts the health of all allies by 25%.",
            "* The healing is scaled by the amount of charge in the Core, All charge is exhausted when the Core is activated."
        ]
    },
    {
        "heroId": "magic_carpet_shareef",
        "name": "Shareef",
        "passives": [
            "Transform Buffs: Each time this character casts their Special Skill, all dispellable buffs affecting attack, defense and mana generation on all enemies are transformed into matching undispellable status ailments. Transformed effects:",
            "* Attack buffs are transformed into -40% attack status ailments for 3 turns.",
            "* Defense buffs are transformed into -40% defense status ailments for 3 turns.",
            "* Mana generation buffs are transformed into -40% mana generation status ailments for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "garrison_shimmerscale",
        "name": "Shimmerscale",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Guard Rally: Every 4 turns, removes all Wither effects from all allies."
        ]
    },
    {
        "heroId": "s3_sif",
        "name": "Sif",
        "passives": []
    },
    {
        "heroId": "s3_sif_costume_golden",
        "name": "Sif C1",
        "passives": []
    },
    {
        "heroId": "fox_silverpaw",
        "name": "Silverpaw",
        "passives": [
            "Decreased Healing: All enemies get -50% healing."
        ]
    },
    {
        "heroId": "easter_sir_roostley",
        "name": "Sir Roostley",
        "passives": []
    },
    {
        "heroId": "slime_sludgus",
        "name": "Sludgus",
        "passives": [
            "Slime Minion Upon Defeat: When this character is defeated, they summon Slime Mega Minions to nearby allies with 50% HP and 40% attack inherited from this character.",
            "Slime Minion Split: If this character loses more than 25% of max health at once, they summon a Slime Mega Minion for themselves with 50% HP and 40% attack."
        ]
    },
    {
        "heroId": "wild_cat_stravia",
        "name": "Stravia",
        "passives": [
            "Nine Lives:",
            "* When defeated this character has 80% chance to revive at the begining of their next turn with 50% health and 80% mana.",
            "* Activates up to 9 times. Chance to revive is reduced on each activation. Can't be prevented with status ailments or Passive Skills.",
            "Trait: Lithe Frame",
            "This character is not affected by effects that increase or reduce defense.",
            "This includes:",
            "* - Status effect buffs and ailments.",
            "* - Positive and negative stacks.",
            "* - Growth and Wither effects."
        ]
    },
    {
        "heroId": "journey_tang_sanzang",
        "name": "Tang Sanzang",
        "passives": [
            "Mana on Buff Received: This character has a 50% chance to gain 10% mana when they receive a buff or positive stack.",
            "Health Recovery on Buff Received: This character has a 50% chance to recover 10% health when they receive a buff or positive stack."
        ]
    },
    {
        "heroId": "s3_thor",
        "name": "Thor",
        "passives": []
    },
    {
        "heroId": "s3_thor_costume_conduit",
        "name": "Thor C1",
        "passives": []
    },
    {
        "heroId": "monster_hunter_thunderclap",
        "name": "Thunderclap",
        "passives": [
            "Hunter's Vigor: When this character casts their Special Skill, they get +20% attack for 3 turns. This effect can be active in addition to other effects that alter attack.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "monster_hunter_thura",
        "name": "Thura",
        "passives": [
            "Special Skill Damage Reduction: This character has a 10% chance to drop the direct damage received from Special Skills to 1.",
            "Damage over Time on Special: When this character casts their Special Skill, they give a Hunter's Mark on a random enemy. The target receives 150 damage over 3 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 150, up to 1500 damage in total."
        ]
    },
    {
        "heroId": "ninja_topaz",
        "name": "Topaz",
        "passives": []
    },
    {
        "heroId": "holy_god_uraeus",
        "name": "Uraeus",
        "passives": [
            "Resist Sand: This character is immune to status ailments that deal Sand damage.",
            "Health from Dead Minion: This character recovers 50 health when a Minion owned by them is destroyed."
        ]
    },
    {
        "heroId": "mahayoddha_ustad_anand",
        "name": "Ustad Anand",
        "passives": [
            "Mana on Damage Received:",
            "* When this character receives direct damage from Special Skills or Normal Attacks they receive a small amount of mana.",
            "* Maximum of 10% mana gained per turn.",
            "Extra Damage to Minions & Mega Minions: This character does +150% damage to Minions and Mega Minions."
        ]
    },
    {
        "heroId": "magic_vaishali",
        "name": "Vaishali",
        "passives": [
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Mana on Special: When this character casts their Special Skill, they have a 50% chance to give 10% mana to all allies. If the Special Skill is fully changed, the chance is 100%."
        ]
    },
    {
        "heroId": "magic_vaishali_costume_chef",
        "name": "Vaishali C1",
        "passives": [
            "Mana on Special: When this character casts their Special Skill, they have a 50% chance to give 10% mana to all allies. If the Special Skill is fully changed, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully changed, all enemies get two stacks. An enemy can have up to 10 stacks.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "oriental_female_mystic",
        "name": "Vivica",
        "passives": []
    },
    {
        "heroId": "oriental_female_mystic_costume_magician",
        "name": "Vivica C1",
        "passives": []
    },
    {
        "heroId": "oriental_female_mystic_costume_scribe",
        "name": "Vivica C2",
        "passives": []
    },
    {
        "heroId": "oriental_female_mystic_costume_cute",
        "name": "Vivica Toon",
        "passives": [
            "Toon: 75% extra chance to resist all status ailments, mana reductions and buff dispels."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_glass",
        "name": "Vivica Glass",
        "passives": [
            "Glass: 60% extra chance to reflect status ailments back to the attacker."
        ]
    },
    {
        "heroId": "oriental_female_mystic_costume_stylish",
        "name": "Vivica Stylish",
        "passives": [
            "Stylish!: 65% chance to replace incoming negative effects with matching positive ones."
        ]
    },
    {
        "heroId": "halloween_wayne",
        "name": "Wayne",
        "passives": [
            "Steal Buff: When this character casts their Special Skill, they have a 65% chance to steal the newest dispellable buff from a random enemy that has buffs. If no enemy has buffs, deals 150% damage to all enemies."
        ]
    },
    {
        "heroId": "beowulf_wealhtheow",
        "name": "Wealhtheow",
        "passives": [
            "Mana on Buff Received: This character gains 5% mana when they receive a buff or positive stack.",
            "Heal when Status Ailment Expires or Is Cleared: This character's receives 10% health each time a status ailment expires or is cleansed, removed or reallocated from them. This effect can activate only once per turn.",
            "Resist Buff Blocking: This character is immune to effect that would block them from receiving new status effect buffs."
        ]
    },
    {
        "heroId": "beowulf_weland",
        "name": "Weland",
        "passives": [
            "Perfect Accuracy: This character's Special Skill never mises its target.",
            "Empowered Resist Mana Reduction: This character is immune to mana reduction. They also gain 600 boosted health and 10% mana each time they resist.",
            "Stacking Attack On Damage Received: When this character receives damage from Special Skills, they gain +30% attack Stack (Max: 10). One Stack can be gained per turn."
        ]
    },
    {
        "heroId": "wonderland_white_rabbit",
        "name": "White Rabbit",
        "passives": []
    },
    {
        "heroId": "wonderland_white_rabbit_costume_mask",
        "name": "White Rabbit C1",
        "passives": [
            "Mindless Attack On Special Skill: On Special Skill cast, 50% chance to inflict Mindless Attack on a random enemy for 3 turns."
        ]
    },
    {
        "heroId": "magic_willow",
        "name": "Willow",
        "passives": [
            "Health recovery on Special: When this character casts their Special Skill, they have a 50% chance to recover 15% health for all allies. If the Special Skill is fully charged, the chance is 100%.",
            "Stack on Special: When this character casts their Special Skill, all enemies get -5% mana generation stack. If the Special Skill is fully charged, all enemies get two stacks. An enemy can have up to 10 stacks."
        ]
    },
    {
        "heroId": "castle_bear_winnie",
        "name": "Winnie",
        "passives": [
            "Mana on Buff Received: This character gains 5% mana when receiving a buff or a positive stack",
            "Health Recovery on Buff Received: This character recovers 5% health when they receive a buff or a positive stack."
        ]
    },
    {
        "heroId": "castle_wolf_wolfgang",
        "name": "Wolfgang",
        "passives": []
    },
    {
        "heroId": "castle_wolf_wolfgang_costume_treasure",
        "name": "Wolfgang C1",
        "passives": [
            "Increased Status Effect Duration: Chance to increase the duration of cast status effects",
            "* +1 turn: 75%",
            "* +2 turns: 25%"
        ]
    },
    {
        "heroId": "outlaw_wu_yong",
        "name": "Wu Yong",
        "passives": [
            "Cleanse on Critical Special Attack: When this character scores a critical hit with their Special Skill, they safely cleanse the latest cleansable status effect from all allies. This effect can activate once per turn.",
            "Righteous Rebellion:",
            "* When this character's Special Skill hits a character that had higher current HP, gain +20% boosted health.",
            "* When this character is hit by the Special Skill of a character that had higher current HP, gain +20% mana.",
            "* Each of these effects can activate once per turn.",
            "Resist Bleed: This character is immune to status ailments that deal Bleed damage."
        ]
    },
    {
        "heroId": "shadow_wulfstan",
        "name": "Wulfstan",
        "passives": []
    },
    {
        "heroId": "elemental_xavier",
        "name": "Xavier",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra  elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental  damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_xavier_costume_arthropod",
        "name": "Xavier C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This character's Troops deal extra damage against the weaker element.",
            "* Extra damage dealt: +150%",
            "Passive Skill as defending character: This character receives less damage from Troops of the stronger element.",
            "* Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "elemental_zandria",
        "name": "Zandria",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "* Dealt extra elemental damage: +100%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "* Received elemental damage: -10%"
        ]
    },
    {
        "heroId": "elemental_zandria_costume_planet",
        "name": "Zandria C1",
        "passives": [
            "Troop Mastery:",
            "Passive Skill as attacking character: This hero's Troops deal extra elemental damage against weaker element.",
            "- Dealt extra elemental damage: +150%",
            "Passive Skill as defending character: This hero receives less elemental damage from Troops of stronger element.",
            "- Received elemental damage: -25%"
        ]
    },
    {
        "heroId": "magic_carpet_zazha",
        "name": "Zazha",
        "passives": [
            "Transform Ailments: Each time this character casts their Special Skill, all cleansable status ailments affecting attack, defense and mana generation on all allies are transformed into matching undispellable buffs. Transformed effects:",
            "* Attack status ailments are transformed into +40% attack buffs for 3 turns.",
            "* Defense status ailments are transformed into +40% defense buffs for 3 turns.",
            "* Mana generation status ailments are transformed into +40% mana generation buffs for 3 turns.",
            "Flight Momentum: If this character has any amount of Flight Momentum, they receive:",
            "* Up to +35% mana generation.",
            "* Up to +25% extra chance to dodge.",
            "* The effects diminish the less Flight Momentum character has.",
            "Weaker Mega Minions: Enemy Mega Minions have -75% HP."
        ]
    },
    {
        "heroId": "s4_zekena",
        "name": "Zekena",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this character receives from Special Skill is increased by 1 turn."
        ]
    },
    {
        "heroId": "s4_zekena_costume_vines",
        "name": "Zekena C1",
        "passives": [
            "Increase Buff Duration: Duration of the first 3 buffs this character receives from Special Skill is increased by 1 turn.",
            "Increased Damage Against Boosted Health: After this character casts their Special Skill cast, all allies deal +70% increased normal attacks and Special Skills damage against targets with boosted health for 4 turns ."
        ]
    },
    {
        "heroId": "beachparty_zenukwa",
        "name": "Zenuk'wa",
        "passives": [
            "Damage over time on Special: When this character casts their Special Skill, all enemies receive 238 Water damage over 2 turns.",
            "Resist Water Damage: This character is immune to status ailments that deal Water damage."
        ]
    },
    {
        "heroId": "kingdom_zhang_fei",
        "name": "Zhang Fei",
        "passives": []
    },
    {
        "heroId": "kingdom_zhang_fei_costume_bear_slayer",
        "name": "Zhang Fei C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "kingdom_zhuge_liang",
        "name": "Zhuge Liang",
        "passives": []
    },
    {
        "heroId": "kingdom_zhuge_liang_costume_crane",
        "name": "Zhuge Liang C1",
        "passives": [
            "Unstoppable Minions:",
            "* Immune to effects that remove Minions.",
            "* Can't be prevented from receiving Minions.",
            "* Minion attacks and abilities can't be disabled."
        ]
    },
    {
        "heroId": "astral_demon_zondalath",
        "name": "Zondalath",
        "passives": [
            "Hinder Mana: Reduces the amount of mana increased by Special Skills, Passive Skills, family bonuses and status effects by -80%. The effect applies to all enemies in battle.",
            "Resist Negative Mana Effects: This character is immune to mana reductions, as well as status ailments and negative stacks that affect mana generation. Applies also to effects and status ailments that block or steal mana.",
            "Resist Healing Ailments: This character is immune to status ailments that affect healing."
        ]
    },
    {
        "heroId": "holy_god_zora",
        "name": "Zora",
        "passives": [
            "Resist Mana Reduction: This character is immune to mana reductions.",
            "Mana on Status Ailment Received: This character gains 5% mana when they receive a status ailment or negative stack."
        ]
    },
    {
        "heroId": "outlaw_xiang_chong",
        "name": "Xiang Chong",
        "passives": []
    },
    {
        "heroId": "easter_sir_roostley_costume_alchemist",
        "name": "Sir Roostley C1",
        "passives": []
    },
    {
        "heroId": "easter_lady_woolerton_costume_coiffeuse",
        "name": "Lady Woolerton C1",
        "passives": []
    },
    {
        "heroId": "rabbit_red_costume_knight",
        "name": "Squire Wabbit C1",
        "passives": []
    },
    {
        "heroId": "easter_duke_whitley",
        "name": "Duke Whitley",
        "passives": []
    },
    {
        "heroId": "easter_marko",
        "name": "Marko",
        "passives": []
    },
    {
        "heroId": "vegetable_auberguy",
        "name": "Auberguy",
        "passives": []
    },
    {
        "heroId": "astral_demon_carthizux",
        "name": "Carthizux",
        "passives": []
    },
    {
        "heroId": "ronin_kageyama_nagato",
        "name": "Kageyama Nagato",
        "passives": []
    }
];