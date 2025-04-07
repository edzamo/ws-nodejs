class Person {
  constructor(name, secondName, age) {
    this.name = name;
    this.secondName = secondName;
    this.age = age;
  }

  print() {
    return `Mi name is ${this.name} ${this.secondName} i am ${this.age} `;
  }
}

module.exports = Person;
