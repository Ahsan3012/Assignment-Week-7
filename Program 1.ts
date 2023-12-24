function insertValueAtIndex(arr: any[], index: number, value: any): any[] {
    arr.splice(index, 0, value);
    
    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 99);

console.log(modifiedArray);  // Output: [1, 2, 99, 3, 4, 5]
