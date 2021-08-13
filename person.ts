export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  constructor(name: string, middle: string, last: string, age: number) {
    this.firstName = name;
    this.middleName = middle;
    this.lastName = last;
    this.age = age;
  }
  getFullName() {
    return `Me chamo ${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  getBirthDayYear() {
    return `Nascido em ${this.age}`;
  }
}
