    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result_multiplication = multiply(num1, num2);
                        let result_add = add(num1, num2);
                        let result_division = division(num1, num2)
    
                        // Create a single string with all results
                        let finalResult = `Multiplication: ${result_multiplication}\nAddition: ${result_add}\nDivision: ${result_division}`;

                        // Display the concatenated result
                        displayResult(finalResult);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }

                function add(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger; 

                    return a + b;
                }

                function division(a, b) {
                    if (b != 0) {
                        // Introduce a debugger statement to pause execution
                        debugger;

                        return a/b;
                    } else {
                        alert('Number 2 must be greater than 0')
                    }
                }

            
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            