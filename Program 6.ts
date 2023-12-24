// Function to remove negative numbers from an array
function removeNegativeNumbers(arr: number[]): number[] {
    const filteredArray = arr.filter(number => number >= 0);

    return filteredArray;
}

const numbersArray = [5, -2, 10, -8, 3, -1, 7];
const resultArray = removeNegativeNumbers(numbersArray);

console.log("Original Array:", numbersArray);
console.log("Array without negative numbers:", resultArray);
