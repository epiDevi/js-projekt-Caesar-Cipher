const text = document.querySelector("#inputText");
const key = document.querySelector("#key");
const result= document.querySelector("#result")



const encoder = () => {
    let inputtext= ((text.value).replaceAll(" ","").toUpperCase());
    let caesar="";
    let charAscii;
    numKey= Number(key.value) % 26;
    // console.log(numKey);
    for (const char of inputtext) {
        charAscii = (char.charCodeAt(0))+numKey;
        if(charAscii > 90){
            console.log("aaaa"+ charAscii);
            charAscii= charAscii -26 ;
        }
        caesar+= String.fromCharCode((charAscii));
    }
    result.innerHTML= caesar;
}

const decoder = () => {
    let inputtext= ((text.value).replaceAll(" ","")).toUpperCase();
    let caesar="";
    let charAscii;
    numKey= Number(key.value) % 26;
    for (const char of inputtext) {
        console.log((char.charCodeAt(0))-numKey);
        charAscii = (char.charCodeAt(0))-numKey;
        if(charAscii < 65 ){
            charAscii= charAscii + 26;
        }
        caesar+= String.fromCharCode((charAscii));
        console.log(caesar);
    }
    result.innerHTML= caesar.toLowerCase();
}