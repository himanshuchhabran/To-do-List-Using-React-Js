//for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

const greeting = "Hello World"
for(const greet of greeting){
    console.log(greet)
}


//Maps -> constains unqiue value
const map = new Map(); 
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
console.log(map)


for(const [key,value] of map){
    console.log(key)
}


const myObj = {
    "game1":"NFS",
    "game2":"Spiderman"
}

// we cant apply for of loop on object 

//for in loop 

for(const key in myObj){
    console.log(key,myObj[key])
}


//for each loop -> pass call back function inside loop without name

//parameteres me ham item,index,arr le sakte hai

const coding = ["Js","ruby","java","python","cpp"]

//1st type

// coding.forEach( function (item) {
//     console.log(item)
//  } )

//2nd type

// coding.forEach( (item) =>{
//     console.log(item);
// })

//3rd type

function printing(item){
    console.log(item)
}

coding.forEach(printing)


const  myCoding = [
    {
        languageName:"javascript",
        langaugeFileName:"js"
    },
    {
        languageName:"python",
        langaugeFileName:"py"
    },
    {
        languageName:"java",
        langaugeFileName:"java"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.langaugeFileName)
})


//foreach does not return anything so we can use filter or reduce or map

//filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num)=> num>4 )

console.log(newNums);


//map
const newnumbers = myNums.map( (num)=> num + ` hi from ${num}` )
console.log(newnumbers);

//chaining
const newnumbers1 = myNums
                        .map((num)=> num+10)
                        .map((num) =>num+1)
                        .filter((num)=>num>20)

console.log(newnumbers1);

//reduce
const reducedNums = myNums.reduce((num,accc)=> num+accc ,0)
console.log(reducedNums)