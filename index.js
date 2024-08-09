// Task 1
const arr = [2, 4, 5, 6, 7, 2, 4, 9, 5,7];

function repeatFun(arr) {
    let frequency = {};
    let arrDup = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];        
        if (frequency[num]) {
            
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    
    for (let num in frequency) {
        if (frequency[num] > 1) {
            arrDup.push(parseInt(num));
        }
    }
    
    console.log(arrDup);
}

repeatFun(arr); 
// Task 2
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeNumbersInRange(start, end) {
    let primes = [];
    
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes;
}

let start = 10;
let end = 30;
console.log(primeNumbersInRange(start, end)); 

// task 3
function sortWordsByLength(sentence) {
    let words = sentence.split(' ');

    words.sort((a, b) => a.length - b.length);

    return words.join(' ');
}

let sentence = "صلي علي رسول الله"
console.log(sortWordsByLength(sentence));

// task 4
function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}
function isLongerThanThree(word) {
    return word.length > 3;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let words = ["apple", "cat", "banana", "dog", "elephant"];

console.log(filterArray(numbers, isEven)); 
console.log(filterArray(words, isLongerThanThree)); 







