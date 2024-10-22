var name=(prompt("enter your name!"))
var kg=Number(prompt("please enter your weight " +name+"!"));
var m=Number(prompt("enter your height (cm)!"));
var bmi =kg/(m*m/(10000));

console.log(bmi);
console.log(typeof bmi);
alert(bmi.toFixed(1)+" is your bmi "+name+"!");

