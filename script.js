/**
 * Mojeed Bello
 * CSC225
 * Task 8
 */


// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string) {
    return string.split('').reverse().join('');
}
console.log('Reverse Function: ')
console.log(reverseThisString('Hello'));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
     
    var strArr = "";
    for (var i = 0; i < string.length; i++){
        if (string[i] === string[i].toLowerCase()){
            strArr += string[i].toUpperCase();
        }
        else {
            strArr += string[i].toLowerCase();
        }
    }
    return strArr;
}
console.log('Swap Cases Function: ')
console.log(swapCase('Hello World'));

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array) {
    const celcius = array.map(farenheit => ((farenheit - 32) * (5 / 9)));
    return celcius;
}

console.log('Celcius Function: ')
console.log(toCelcius([23, 32, 41, 50, 59]));

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array) {
    const passFailRes = array.map(grade => {
        if(grade >=75){
            return true;
        }
        else return false;
    });
    return passFailRes;
}

console.log('Pass/Fail Function: ')
console.log(passOrFail([20, 30, 50, 80, 90, 100]));

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var res = [];
    for (let i = 0; i < cardinalNumbers.length; i++) {
        res[i] = cardinalNumbers[i] + ' is ' + germanNumbers[i];
    }
    return res;
}
console.log('German Num Function: ')
console.log(germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const returnPrime = numbers.filter((num) =>{
        if (num <=1){
            return false;
        } else {
            for(var i = 2; i<num;i++){
                if(num % i === 0){
                    return false;
                }
            }
            return true;
        }
    });
    return returnPrime;
}
console.log('Prime Function: ')
console.log(returnPrimeNumbers());


/* Write a function that loops through and console.log's the numbers from 1 to 100,
 * except multiples of three, log (without quotes) "CSC225 RULES" instead of the number,
 * for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which
 * are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"
 * Console log out:
 * 1
 * 2
 * CSC225 RULES
 * 4
 * I LOVE JAVASCRIPT
 * CSC225 RULES
 * 7
 * 8
 * CSC225 RULES
 * I LOVE JAVASCRIPT
 * 11
 * CSC225 RULES
 * 13
 * 14
 * CSC225 RULES I LOVE JAVASCRIPT
*/

function multiples3and5() {
    var outputArr = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            outputArr[i] = 'CSC225 RULES';
        }
        else if (i % 5 === 0) {
            outputArr[i] = 'I LOVE JAVASCRIPT';
        }
        else if ((i % 3 === 0) && (i % 5 === 0)) {
            outputArr[i] = 'CSC225 RULES I LOVE JAVASCRIPT';
        }
        else {
            outputArr[i] = i;
        }
    }
    return outputArr;
}
console.log('Multiples of 3 and 5 Function: ')
console.log(multiples3and5());