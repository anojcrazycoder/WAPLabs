// 1. using 5 ways to fix the errors which will print below in the console:
// Our Group: John
// Our Group: Pete
// Our Group: Alice

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
      this.students.forEach(function (student) {
          console.log(this.title + ": " + student
          );
      });
  }
};
group.showList();
console.log("\n\n");

//----Solution-1: Using bind():
console.log("=======Using bind===========")
let group1 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    this.students.forEach(function(student) {
      console.log(this.title + ": " + student);
    }.bind(this)); // Bind 'this' to the group object
  }
};
group1.showList();
console.log("\n\n");

// Solution 2: Arrow Function
console.log("=======Arrow function===========")
let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    }); 
  }
};
group2.showList();
console.log("\n\n");

//Solution-3: Use Self
console.log("=======Assigning this to a variable===========")
let group3 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    let self = this; // Assign 'this' to a variable
    this.students.forEach(function(student) {
      console.log(self.title + ": " + student);
    });
  }
};
group2.showList();
console.log("\n\n");

//Solution-4: Using a for...of Loop
console.log("=======Using a for...of Loop===========")
let group4 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function() {
    for (let student of this.students) {
        console.log(this.title + ": " + student);
    }
}
};
group4.showList();
console.log("\n\n");


//Solution-5: Using forEach Second Argument
console.log("=======Using forEach Second Argument===========")
let group5 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
      this.students.forEach(function (student) {
          console.log(this.title + ": " + student);
      }, this); // Pass `this` as the second argument to `forEach`
  }
};
group5.showList();
console.log("\n\n");

