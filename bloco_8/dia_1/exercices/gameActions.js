const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function generateRandom(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

function dragonDamage() {
  return generateRandom(15, dragon.strength);
}

function warriorDamage() {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return generateRandom(min, max);
}

function mageDamageMana() {
  return {
    damage: (mage.mana >= 15) ? generateRandom(mage.intelligence, mage.intelligence * 2) : 'low mana',
    manaSpend: (mage.mana >= 15) ? mage.mana - 15 : mage.mana,
  }
}

console.log(mageDamageMana());
