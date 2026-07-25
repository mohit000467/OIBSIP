const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

convertBtn.addEventListener("click", function () {

    const value = parseFloat(temperature.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    error.textContent = "";
    result.textContent = "";

    if (isNaN(value)) {
        error.textContent = "Please enter a valid temperature.";
        return;
    }

    // Absolute zero validation
    if (
        (from === "celsius" && value < -273.15) ||
        (from === "fahrenheit" && value < -459.67) ||
        (from === "kelvin" && value < 0)
    ) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    let celsius;

    // Convert to Celsius
    if (from === "celsius") {
        celsius = value;
    }
    else if (from === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    }
    else {
        celsius = value - 273.15;
    }

    let converted;

    // Convert from Celsius to target unit
    if (to === "celsius") {
        converted = celsius;
    }
    else if (to === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    }
    else {
        converted = celsius + 273.15;
    }

    let symbol = "";

    if (to === "celsius") {
        symbol = "°C";
    }
    else if (to === "fahrenheit") {
        symbol = "°F";
    }
    else {
        symbol = "K";
    }

    result.textContent = `Result: ${converted.toFixed(2)} ${symbol}`;

});