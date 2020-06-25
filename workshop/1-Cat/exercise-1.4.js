class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 50;
    this.happiness = 50;
    this.name = name;
    this.breed = breed;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 4;
  };

  eats = (kibbles) => {
    (this.hunger -= kibbles * 0.2), (this.happiness += kibbles * 0.05);
  };

  play = (minutes) => {
    this.loneliness -= 3 * minutes;
    this.happiness += minutes * 0.25;
  };

  wait = (minutes) => {
    this.tiredness += 0.2 * minutes;
    this.loneliness += 0.05 * minutes;
    this.hunger += 0.1 * minutes;
    this.happiness -= 0.25 * minutes;
  };
}

const boots = new Cat("boots", "siamese");
boots.wait(60);
console.log(boots); //all are modified with the functions that are rune
