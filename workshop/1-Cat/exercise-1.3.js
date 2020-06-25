// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

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
}

const boots = new Cat("boots", "siamese");
boots.play(100);
boots.sleep(8);
boots.eats(100);
console.log(boots); //all are modified with the functions that are rune
