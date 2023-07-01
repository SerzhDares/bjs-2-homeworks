function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined && this.marks !== []) {
    this.marks.push(...marks);
  } else {
    return 0;
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks !== undefined && this.marks.length !== 0) {
    sum = this.marks.reduce((acc, item) => acc + item, 0);
    return sum / this.marks.length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
