let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

let banana;
let milk;
let chicken;

function calculateTotalAmount() {
    banana = parseFloat(document.getElementById('banana').value);
    milk = parseFloat(document.getElementById('milk').value);
    chicken = parseFloat(document.getElementById('chicken').value);

    let total = banana + milk + chicken;

    document.getElementById('result2').innerText = `The total amount is: \$ ${total}`;
}