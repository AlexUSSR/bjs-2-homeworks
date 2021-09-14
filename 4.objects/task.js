"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) { 
    this.marks  = [mark];
    } else {
    this.marks.push(mark);
    }
}


Student.prototype.addMarks = function(...marks) {
  if ( this.marks === undefined) {
  	this.marks = marks;
    } else {
    this.marks.push(marks);
    }
}



Student.prototype.getAverage = function() {
  if ( this.marks === undefined) return 0;

  let sum = 0;

  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];

  }
  return sum / this.marks.length;
}



Student.prototype.exclude = function(reason) {
  this.excluded = reason;

	  delete this.subject;
    delete this.marks;
} 

let student11 = new Student("George", "male", 18);
student11.setSubject("Astronomia");
student11.addMark(5);
student11.addMark(4);
student11.addMark(4);
console.log(student11.getAverage());
console.log(student11);

let student12 = new Student("Alice", "female", 19);
student12.setSubject("Geography");
student12.addMark(3);
student12.addMark(2);
student12.addMark(2);
student12.exclude('low grades')
console.log(student12);
