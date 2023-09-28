const text = document.querySelector("#inputText");
const key = document.querySelector("#key");
const result= document.querySelector("#result")



const encoder = () => {
    let inputtext= (text.value).replaceAll(" ","");
    let caesar="";
    numKey= Number(key.value);
    console.log(numKey);
    for (const char of inputtext) {
        caesar+= String.fromCharCode((char.charCodeAt(0))+numKey)
    }
    result.innerHTML= caesar.toUpperCase();
}

const decoder = () => {
    let inputtext= (text.value).replaceAll(" ","");
    let caesar="";
    numKey= Number(key.value);
    console.log(numKey);
    for (const char of inputtext) {
        console.log((char.charCodeAt(0))+numKey);
        caesar+= String.fromCharCode((char.charCodeAt(0))-numKey)
        console.log(caesar);
    }
    result.innerHTML= caesar.toLowerCase();
}