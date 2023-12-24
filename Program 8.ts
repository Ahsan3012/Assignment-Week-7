// Function to convert Celsius temperatures to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function convertTemperatures(): number[] {
    const numTemperatures = parseInt(prompt("Enter the number of temperatures: ") || "0", 10);

    const convertedTemperatures: number[] = [];

    for (let i = 0; i < numTemperatures; i++) {
        const celsiusInput = parseFloat(prompt(`Enter temperature ${i + 1} in Celsius: `) || "0");
        const fahrenheit = celsiusToFahrenheit(celsiusInput);

        convertedTemperatures.push(fahrenheit);
    }

    return convertedTemperatures;
}

const temperaturesInFahrenheit = convertTemperatures();

console.log("Converted Temperatures in Fahrenheit:", temperaturesInFahrenheit);
