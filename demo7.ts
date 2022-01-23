class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    return super.getName() + 'lee';
  }
}

const person = new Person();
console.log(person.getName());

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());