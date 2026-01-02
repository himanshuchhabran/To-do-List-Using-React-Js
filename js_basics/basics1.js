// Singleton object 
const obj1 = new Object();

//Non Singleton object 
const obj2 = {};

// To access objects properties
obj1.propety_name

obj1['property_name']

// To declare symbol in object properties

//Use
//[property_name] : "property_value"

//To freeze the object so that it's properties can not change further

Object.freeze(obj_name);

// To combine the objects

const obj3 =Object.assign({},object1_name,object2_name)

//Or use spread operator

const obj4 = {...object1_name,...object2_name};

Objects.keys(object_name) // return array of keys

Object.values(object_name) // return array of values

// To check if any property exist or not

Obj_name.hasOwnProperty('property_name') // returns Boolean value


//Destructring of objects 
//To access properties of objects

const {property__name} = object_name;
//Now I can access using property_name directly 

// Api ki jo value aati h vo json format  me aati h like this is json format
// {
// "name":"hitesh",
// "id": 1
// }


//Object cloning 

//Shallow copy

//As a reference pass

//1.Spread operator
//{...obj}

//2.Object.assign({},obj)

//Deep Copy

//1.
JSON.parse(JSON.stringify(obj))

//2.structuredClone
(obj)


//Lexical scope

//It is also called static scope it means a variable scopes defines its scope while writing the code by its position not at the time of executing.