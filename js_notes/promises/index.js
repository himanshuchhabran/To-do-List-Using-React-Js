// Promise ->is an object the, task is in queue but it cannot complete immediately
// file access,db call to other continent
// pending,fulfilled,rejected

//promise creation
const promise1 = new Promise((resolve,reject)=>{

    //Do async task
    //DB calls,cryptography,network
    setTimeout(()=>{
        console.log("async task is completed");
        resolve()
    },1000)
});

//consume the promise1
promise1.then(()=>{
    console.log("Promise consumed");
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username:"chai",
            email:"chai@example.com"
        })
    },1000)
})

promise2.then((user)=>{
    console.log(user.email);
})


const promise3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username:"himanshu",
                password:"123"
            });
        } else{
            reject("Error:Something went wrong");
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally the promise is resolved or rejected")
})

const promise4 = new Promise((resolve,reject)=>{
     setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username:"javascript",
                password:"123"
            });
        } else{
            reject("Error:js went wrong");
        }
    },1000)
});

async function consumePromise4(){
    try{
        const response = await promise4
        console.log(response);
    } catch(err){
        console.log(err);
    }   
}

consumePromise4();


async function getAllusers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
    console.log(data);
     } catch(err){
        console.log("error aa raha hai data me")
        console.log(err);
     }
    
}

getAllusers();