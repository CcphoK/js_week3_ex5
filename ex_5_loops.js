// TODO: Create an array called numbers with values 1 through 5 
// TODO: Write a for loop that prints each number in the array 
// TODO: Write a while loop that counts down from 5 to 1 
// TODO: Create a loop that prints only even numbers from the numbers array 
// TODO: Create a loop that calculates the sum of all numbers in the array


let numbers = [1, 2, 3, 4, 5];

console.log("Printing all numbers:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("\nCounting down from 5 to 1:");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

console.log("\nPrinting even numbers only:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("\nCalculating sum of all numbers:");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("The sum is: " + sum);