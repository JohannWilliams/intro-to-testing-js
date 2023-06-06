// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    let returnStr = "Hello, ";
    if(typeof name !== "string" || name === "" || name === " " || !isNaN(name)){
        returnStr += "World!"
    } else {
        returnStr += `${name}!`;
    }
    return returnStr;
}

function isFive(num){
    let itIsFive = false;
    if(parseInt(num) === 5){
        itIsFive = true;
    }
    return itIsFive;
}

function isEven(num){
    let itIsEven = false;

    if(parseInt(num) % 2 === 0 && num !== Infinity){
        itIsEven = true;
    }

    return itIsEven;
}

function isVowel(str){
    let itIsVowel = false;
    let vowelArr = ["a", "e", "i", "o", "u"];

    if(typeof str === "string" && vowelArr.includes(str.toLowerCase())){
        itIsVowel = true;
    }

    return itIsVowel;
}

function add(a, b){
    let sum = NaN;
    if(!isNaN(parseInt(a)) && !isNaN(parseInt(b)) && typeof a !== "boolean" && typeof b !== "boolean"){
        sum = parseInt(a) + parseInt(b);
    }
    return sum;
}