console.log("This is the first program in javascript")
console.log("Note: View Files from this Repl to Access the Source Code")
console.log("This program adds 1, 2 and 54")

// variables 
// var is globally scoped but it can be updated and redeclared
// let is block scoped and it can be updated but not redeclared
// const is block scoped and it can't be updated but redeclared

var a = 76;
console.log(a)
let b = "Teacher"
var a = "Harry"
console.log(a + " " + b)
{
  var a = "Aditya"
  console.log(b);
}
console.log(a)

const name = "Shubham";// const can't be changed if once they are declared
const name1 = "Aditya";
console.log(name)