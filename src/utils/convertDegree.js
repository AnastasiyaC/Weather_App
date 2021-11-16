export function convertCelsiusToFahrenheit(degree) {
    return Math.round(degree * 9 / 5 + 32)
}

export function convertFahrenheitToCelsius(degree) {
    return Math.round(5 / 9 * (degree - 32))
}