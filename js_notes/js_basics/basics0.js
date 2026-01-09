// datatypes in js

//primitive data types
//7 data types 
//number -> 2 to power 53
//bigint
//string -> ""
//boolean
//null -> standalone value
//undefined
//symbol -> unique

//non primitive data types

//objects
//array
//functions

//to check datatype
age = 10
console.log(typeof age) 

//to convert string to number
age = "10"
let numv = Number(age)
console.log(typeof age)
console.log(typeof numv)


//"10" -> 10
//"10abc" -> Nan
//true -> 1
//"Null" -> 0

let booleann = null
console.log(Boolean(booleann))

//How memory works?

//Primitive types uses stack and Non Primitive -> Heap 
//For ex - 
let myName = "himanshu"

let otherName = "Chhabra"

otherName = myName //copy by value
console.log(otherName) //himanshu
console.log(myName) //himanshu


let user = {
    email:"himanshuchhabra4321@gmail.com",
    upi:"124@okicici"
}

let otherUser = {
    email:"himanshhuchhabradev@gmail.com",
    upi:"123@okhdfc"
}

otherUser = user //copy by reference
console.log(otherUser); 
console.log(user)