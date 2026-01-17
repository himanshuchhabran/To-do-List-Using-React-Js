
// Check if a string is palindrome
let str = "racecar"

function checkPalindrome(str){
    let i=0;
    let j = str.length-1;
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(str));
