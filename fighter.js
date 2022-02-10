function fighter(newFighter) {

    newFighter = {
        name: fighterName,
        strength: strength,
        agility: agility,
        vitality: vitality,
        hp: baseHp + (vitality * 10) + (strength + 5) + (agility * 3),
        dmg: baseDmg + ((strength * 5) - (agility * 3)),
        def: baseDef + (agility * 5) + (strength * 3) + (vitality * 1)
    }

    let maxPoints = 30;
    let baseDmg = 10;
    let baseDef = 10;
    let baseHp = 50;

    return {
        getName: () => newFighter.name,
        getHp: () => newFighter.hp,
        takeDamage: (damage) => {
            let currentHp = newFighter.hp - damage;
            if (currentHp < 0) {
                newFighter.hp = 0
            } else if (newFighter.hp > maxPoints) {
                newFighter.hp = maxPoints;
            } else {
                currentHp = newFighter.hp;
            };
        },
        dealDamage: (damage, newFighter) => {
            let currentHp = newFighter.hp - damage;
            if (currentHp < 0) {
                newFighter.hp = 0
            } else if (newFighter.hp > maxPoints) {
                newFighter.hp = maxPoints;
            } else {
                currentHp = newFighter.hp;
            };
        }
    }

    function letsFight(firstFighter, secondFighter) {
        while (newFighter.hp > 0) {
            firstFighter.takeDamage();
            console.log(`${firstFighter.getName()} received damage and the current HP is ${firstFighter.getHp()}`);
            secondFighter.takeDamage();
            console.log(`${secondFighter.getName()} received damage and the current HP is ${secondFighter.getHp()}`);

            if (firstFighter.getHp() === 0) {
                console.log(`${firstFighter.getName()} is defeated! The winner is ${secondFighter.getName()}!`);
                break;
            };
            if (secondFighter.getHp() === 0) {
                console.log(`${secondFighter.getName()} is defeated! The winner is ${firstFighter.getName()}!`);
                break;
            };
        }
    }


}

letsFight(firstFighter, secondFighter);

const firstFighter = new fighter({ name: 'Achilles', strength: 20, agility: 25, vitality: 29 });
const secondFighter = new fighter({ name: 'Hector', strength: 29, agility: 27, vitality: 27 });

