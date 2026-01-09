// document.getElementById("owl").onclick = function(){
//     alert("owl clicked");
// }

//type,timestamp,defaultPrevented,target,toElement
// srcElement,currentTarget,clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode

document.getElementById("owl").addEventListener('click',function(e){
    //console.log(e) //it gives browser and environemnt events like when 
    //user clicked ,what is the time,height when clicked
},false) //event bubbling - false,event capturing - true

//event propogation

//event bubbling - niche se upar 
//event capturing - upar se niche
document.getElementById("images").addEventListener('click',function(e){
    console.log("clicked inside the ul");
},true)

document.getElementById("owl").addEventListener('click',function(e){
    console.log("owl clicked");
   // e.stopPropagation() //upar nhi jayega ab stop ho jayega propogation
},true)

document.getElementById("google").addEventListener("click",function(e){
    e.preventDefault();
})

//now i want if i click on image then image would disappear
document.getElementById("images").addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    let removeImage = e.target.parentNode.remove(); //or we can use removeChild(removeImage)
})