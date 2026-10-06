// Temperature Converter using map()

const celsius = [0, 20, 30, 40];

// TODO:
// Convert the Celsius temperatures to Fahrenheit
// Formula: (C * 9/5) + 32
// Use the map() function and store the result in fahrenheit.

let fahrenheit = [];

fahrenheit = celsius.map(c => (c * 9/5) + 32);

// Do not modify this line
module.exports = fahrenheit;
