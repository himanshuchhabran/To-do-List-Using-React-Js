// Reverse a string without using reverse()
let str = "himanshu"
function reverseString(str){
    let arr = str.split("")
    let i = 0;
    let j = str.length - 1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--;

    }
    return arr.join("");
}
let result = reverseString(str);
console.log(str);
console.log(result);

//reverse words- > "hi i am himanshu"
let words = "hi i am himanshu"

function reverseWords(words){

    let wordsArr = words.split(" "); 
    let i =0;
    let j =wordsArr.length-1;
    while(i<j){
        [wordsArr[i],wordsArr[j]] = [wordsArr[j],wordsArr[i]];
        i++;
        j--;
    }
    return wordsArr.join(" ");
}

console.log(reverseWords(words));