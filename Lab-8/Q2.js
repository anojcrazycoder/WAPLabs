/*

2. Create a Student Constructor function:

Properties: firstName:String, lastName:String, grades:Array

methods:

inputNewGrade(newGrade): push newGrade to grades

computeAverage(): return average of the grades

After you finish, create some students using the constructor function.

Then draw prototypal inheritance diagram.

*/

function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];
}

Student.prototype.inputNewGrade=function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage=function(){
    return this.grades.reduce((accum,x)=>accum+(x/this.grades.length),0);
}

const akshada=new Student("Akshada","Shrestha");
akshada.inputNewGrade(4);
akshada.inputNewGrade(3.9);
akshada.inputNewGrade(3.8);
akshada.inputNewGrade(3.8);
akshada.inputNewGrade(4);
console.log(akshada);
console.log(akshada.computeAverage());

console.log('\n\n');

const anoj=new Student("Anoj","Shrestha");
anoj.inputNewGrade(4);
anoj.inputNewGrade(4);
anoj.inputNewGrade(4);
anoj.inputNewGrade(4);
anoj.inputNewGrade(4);
console.log(anoj);
console.log(anoj.computeAverage());

console.log('\n\n');

const prakriti=new Student("Prakriti","Pradhan");
prakriti.inputNewGrade(3);
prakriti.inputNewGrade(4);
prakriti.inputNewGrade(2.5);
prakriti.inputNewGrade(3.5);
prakriti.inputNewGrade(4);
console.log(prakriti);
console.log(prakriti.computeAverage());