class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }
}

const boots = new Cat("boots", "siamese");

console.log(boots);
