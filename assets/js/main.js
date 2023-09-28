const text = document.querySelector("#inputText");
const key = document.querySelector("#key");
const result= document.querySelector("#result")



const encoder = () => {
    let inputtext= ((text.value).replaceAll(" ","").toUpperCase());
    let caesar="";
    let charAscii;
    numKey= Number(key.value);
    console.log(numKey);
    for (const char of inputtext) {
        charAscii = (char.charCodeAt(0))+numKey;
        if(charAscii > 90){
            charAscii= charAscii - 90 + 64 ;
        }
        caesar+= String.fromCharCode((charAscii));
    }
    result.innerHTML= caesar;
}

const decoder = () => {
    let inputtext= (text.value).replaceAll(" ","");
    let caesar="";
    let charAscii;
    numKey= Number(key.value);
    for (const char of inputtext) {
        console.log((char.charCodeAt(0))-numKey);
        charAscii = (char.charCodeAt(0))-numKey;
        if(charAscii < 65 ){
            charAscii= 91 - (65 - charAscii);
        }
        caesar+= String.fromCharCode((charAscii));
        console.log(caesar);
    }
    result.innerHTML= caesar.toLowerCase();
}