// console.log("Hello World");

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;

    console.log("a = " + a);
    console.log("b = " + b);
}

function max(a, b) {
    return (a > b) ? a : b;
}

function isLandscape(width, height) {
    return width > height;
}

function fizzBuzz(num) {
    if (typeof (num) == "number") {
        if (num % 3 == 0 && num % 5 == 0) {
            return "FizzBuzz";
        }
        else if (num % 5 == 0) {
            return "Buzz";
        }
        else if (num % 3 == 0) {
            return "Fizz";
        }
        else {
            return num;
        }
    }
    else{
        return "Not a Number";
    }
}

function checkSpeed(speed){
    if(speed <= 74){
        return "OK";
    }
    if (speed >= 130) {
        return "Licence Suspended";
    }
    else{
        let newSpeed = Math.floor(speed - 70);
        return ("Points : " +newSpeed/5);
    }
}

function showNumber(number){
    for (let index = 0; index <= number; index++) {
        let oddEven = (index%2 == 0) ? "Even" : "Odd";
        console.log(index+ " "+ oddEven);
    }
}

function countTruthy(array){
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]) {
            count++;
        }        
    }
    return count;
}

function showProperties(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "string"){
            console.log(key, obj[key]); 
        }
    }
}

const movie = {
    title : 'a',
    releaseYear: 2012 kshsh

}