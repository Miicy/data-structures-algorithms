// Custom mapping function to convert Celsius to Fahrenheit

function customMap(arr, fn) {
    const mappedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const transformedValue = fn(arr[i], i);
      mappedArr.push(transformedValue);
    }
  
    return mappedArr;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  const celsiusTemperatures = [0, 25, 100];
  const fahrenheitTemperatures = customMap(celsiusTemperatures, celsiusToFahrenheit);
  console.log(fahrenheitTemperatures);