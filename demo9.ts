//getter and setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' lee';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('dell');
// console.log(person.name);
// person.name = 'dell lee';
// console.log(person.name);


class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}

  static getInatance() {
    if(!this.instance) {
      this.instance = new Demo('dell lee');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInatance();
const demo2 = Demo.getInatance();
console.log(demo1.name);
console.log(demo2.name);


