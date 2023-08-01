function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  (this.marks === undefined) ? this.marks = undefined : this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return (this.marks === undefined) ? this.marks = 0 : this.marks.reduce((acc, marks, index, arr) => acc + marks / arr.length, 0);
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
