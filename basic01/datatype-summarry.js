// primitive datatype
// string , boolean, number, BigInt, Null,Undefined,Symbol
// Non- primitive(Refrences)= object, Function, Array

// const String = "sahil Thakur"
// let boolean = true/false
// BigInt = 78734734;
// let Undefinednum;

const id = Symbol('123')
const secondid = Symbol('123')

console.log( id === secondid);

// non-primitive datatype

const cars =["BMW", "Mercedes","Porche"]
console.log(cars)

let myobj ={
    name : "Sahil Thakur",
    age : 20,
}
 
const myfunction = function(){
    console.log("hello world")
}