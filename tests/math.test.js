const {fahrenheitToCelsius, celsiusToFahrenheit} = require("../src/math")
console.log(celsiusToFahrenheit(30))


test('convert 0 C to 32 F', () => {
    const result = celsiusToFahrenheit(0)
    expect(result).toEqual(32 )
})

test('convert 32 F t 0 C', () =>{
    const result = fahrenheitToCelsius(32)
    expect(result).toEqual(0)

})