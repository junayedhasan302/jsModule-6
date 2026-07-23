function TempConverter(celsius){
    kelvin = celsius + 273.15;
    return kelvin;
}
console.log("Celsius to Kelvin: ",TempConverter(30));