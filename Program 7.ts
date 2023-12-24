// Function to calculate the sum of an array of numbers
function calculateSum(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

const numbersArrays = [1, 2, 3, 4, 5];
const resultSum = calculateSum(numbersArrays);

console.log("Array of Numbers:", numbersArrays);
console.log("Sum of Numbers:", resultSum);
