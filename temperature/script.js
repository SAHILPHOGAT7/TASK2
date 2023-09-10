function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    // Get the temperature in Celsius from the input
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        resultElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
}
