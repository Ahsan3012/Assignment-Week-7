// Function to calculate the factorial of a positive integer
function calculateFactorial(number: number): number {
    if (number < 0 || !Number.isInteger(number)) {
        throw new Error("Input must be a positive integer.");
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);
