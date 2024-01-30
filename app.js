// Control Flow Exercise;
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

function sum(limit){
    let sum = 0;
    for (let index = 1; index <= limit; index++) {
        if(index%3 == 0 || index%5 == 0){
            sum += index;
        }        
    }
    return sum;
}

function calculateGrade(marks){
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    avg = sum / marks.length;
    console.log(sum);
    console.log(avg);

    if(avg < 60){
        return 'F';
    }else if(avg >= 60 && avg <= 69){
        return 'D';
    }else if(avg >= 70 && avg <= 79){
        return 'C';
    }else if (avg >= 80 && avg <= 89) {
        return 'B';
    }else if (avg >= 90 && avg <= 100) {
        return 'A';
    }
}

function showStars(rows){
    for(let i=1; i<=rows; i++){
        let pattern = '';
        for(let j=1; j<=i ;j++){
            pattern += '* ';
        }
        console.log(pattern);
    }
}

function showPrimes(limit){
    let boolean ;
    for (let i = 1; i <= limit; i++) {
        boolean = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                boolean = false;
                break;
            }
        }
        if (boolean) {
            console.log(i);
        }
    }
}
//function
//Exercise

function sum(...arr){
    return arr.reduce((a,b) => a+b);
}

// console.log(sum(1,6,4,8));

function sumArr(...arr){
    if (arr.length === 1 && Array.isArray(arr[0])) {
        arr = [...arr[0]];
    }
    return arr.reduce((a,b) => a+b);
}

// console.log(sumArr([1,9,7,5]));

const circle = {
    radius : 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);