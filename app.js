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
    else {
        return "Not a Number";
    }
}

function checkSpeed(speed) {
    if (speed <= 74) {
        return "OK";
    }
    if (speed >= 130) {
        return "Licence Suspended";
    }
    else {
        let newSpeed = Math.floor(speed - 70);
        return ("Points : " + newSpeed / 5);
    }
}

function showNumber(number) {
    for (let index = 0; index <= number; index++) {
        let oddEven = (index % 2 == 0) ? "Even" : "Odd";
        console.log(index + " " + oddEven);
    }
}

function countTruthy(array) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]) {
            count++;
        }
    }
    return count;
}

function showProperties(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) === "string") {
            console.log(key, obj[key]);
        }
    }
}

function sum(limit) {
    let sum = 0;
    for (let index = 1; index <= limit; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            sum += index;
        }
    }
    return sum;
}

function calculateGrade(marks) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    avg = sum / marks.length;
    console.log(sum);
    console.log(avg);

    if (avg < 60) {
        return 'F';
    } else if (avg >= 60 && avg <= 69) {
        return 'D';
    } else if (avg >= 70 && avg <= 79) {
        return 'C';
    } else if (avg >= 80 && avg <= 89) {
        return 'B';
    } else if (avg >= 90 && avg <= 100) {
        return 'A';
    }
}

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

function showPrimes(limit) {
    let boolean;
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

// Objects

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

// circle.draw();
// console.log(circle.radius);

// factory function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}
// const circle1 = createCircle(1);
// console.log(circle1);



// Constructor Function (Pascal Notation)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// const circle1 = new Circle(5);
// console.log(circle1.radius);

// Exercise

const address = {
    street: "Kurmi",
    city: "Ahmedabad",
    zipcode: 382350
}

// function showAddress(address) {
//     console.log(`Street = ${address.street}, City = ${address.city}, Zipcode = ${address.zipcode}`);
// }

function createAddresss(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

// const another = createAddresss('kurmi', 'Mumbai', 382359);
// console.log(another);


function CreateAddresss(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// const newAdd = new CreateAddresss('kasa','delhi',455668);
// console.log(newAdd);

let add1 = new createAddresss('A', 'B', 10);
let add2 = new createAddresss('A', 'B', 10);
let add3 = add1;

function areEqual(add1, add2) {
    return (add1.street === add2.street &&
        add1.city === add2.city &&
        add1.zipcode === add2.zipcode);
}

function areSame(add1, add2) {
    return add1 === add2;
}

// console.log(areEqual(add1,add2));
// console.log(areSame(add1,add2));
// console.log(areEqual(add1,add3));
// console.log(areSame(add1,add3));

//Array
//Exercise 

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    console.log(output);
}
// arrayFromRange(-1,7);

function includes(array, searchElement) {
    for (const num of array) {
        if (num === searchElement) {
            return true;
        }
    }
    return false;
}

const arr = [10, 56, 78, 30, 45, 36];
// console.log(includes(arr,780));

function except(array, excluded) {
    const ans = [];
    for (let i = 0; i < array.length; i++) {
        if (!excluded.includes(array[i])) {
            ans.push(array[i]);
        }
    }
    console.log(ans);
}

// except(arr, [30,45]);


function move(array, index, offset) {
    if (offset >= array.length - index || 0 < offset + index) {
        console.error("Invalid Offset");
    }
    else {
        let temp = array[index];
        array[index] = array[index + offset];
        array[index + offset] = temp;
        console.log(array);
    }
}

// move(arr, 2, -3);

function getMax(array){
    if(array.length === 0){
        return undefined;
    }
    return array.reduce((a, b) => (b > a) ? b : a);
}
// const arr1 = [2,4,6,9,4];
// console.log(getMax(arr1));

const movies = [
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.7},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5}
]

// const titles = movies.filter(m => m.year === 2018 && m.rating >= 4).sort((a,b) => a.rating - b.rating).reverse().map(m => m.title);
// console.log(titles);
