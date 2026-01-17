// Count frequency of characters in a string

let str = "hello world";
let char = "l"



countChar = (str,char)=>{
    let map = new Map;
    for(let i =0;i<str.length;i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1);
        }
        else{
            map.set(str[i],1);
        }
    }
    console.log(map.get(char));
}

countChar(str,char);