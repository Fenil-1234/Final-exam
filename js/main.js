console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

 /* Name: Fenil Modi
  Student Number: 200522578*/


// Step 2: Create a block scoped, immutable variable that stores an empty array
const ar1 = [];

// Step 3: Add the 3 people's names to the array
ar1.push("fenil");
ar1.push("fenil");
ar1.push("fenil");

// Step 4: Remove the second ar1 item from the array
ar1.splice(1, 1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
const vs = ar1.map(function (fe) {
    return fe.toUpperCase();
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
let header = document.querySelector("aside h2");
header.addEventListener("click", function () {
alert("Hello from Boo the World's Cutest Dog!")});