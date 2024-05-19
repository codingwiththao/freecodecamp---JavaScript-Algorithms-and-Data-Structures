const convertButton = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");
const numberInputElement = document.getElementById("number");

const convertToRoman = num => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const res = [];
  
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });
  
    return res.join('');
  };

convertButton.addEventListener("click", () => {
    // Convert the input value to a number
    const numberInput = numberInputElement.value;
    const numberValue = parseFloat(numberInput);

    // Validate the input
    if (numberInput === '' || isNaN(numberValue)) {
        outputElement.innerText = 'Please enter a valid number';
    } else if (numberValue < 1) {
        outputElement.innerText = "Please enter a number greater than or equal to 1";
    } else if (numberValue > 3999) {
        outputElement.innerText = "Please enter a number less than or equal to 3999";
    } else {
        const roman = convertToRoman(numberValue)
        outputElement.innerText = roman;
        // Perform your conversion or other logic here
    }
})

