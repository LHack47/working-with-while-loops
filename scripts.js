/****************** Exercise 1 ********************/

// List five examples of websites using loops. 
'filtering a search results'






/****************** Exercise 2 ********************/

//Use a while loop to log to the console the numbers from 1 to 10

console.log('Exercise 2 code:\n let log = 1\n while (log <= 10) {\n console.log(log++)\n }');
let log = 0
while (log < 10) {
    console.log(log++)
}






// /****************** Exercise 3 ********************/

// // Use a while loop to calculate the sum of even numbers from 2 to 20
console.log(`Exercise 3 code:\n
let sum = 0\n
let limit = 20\n
let i = 0\n
while (i<=limit){\n
    if(i%2==0){\n
    sum = sum + i;\n
}\n
i++;\n
    }\n
    console.log(sum);`)
let sum = 0
let limit = 20
let i = 0
while (i <= limit) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);

// /****************** Exercise 4 ********************/

// // Implement a countdown using a while loop

console.log(`Exercise 4 code:\n
let countdown = 10;\n
while (countdown > 0) {
    \nconsole.log(countdown--)\n
} `);
let countdown = 10;
while (countdown > 0) {
    console.log(countdown--)
}



// /****************** Exercise 5 ********************/

//Review This Code
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else { attempts++ }
    if (guess < secretNumber) {
        alert("Too low!");
    } else if (guess > secretNumber) {
        alert("Too high!")
    } else {
        console.log(`Exercise 5:\nExercise 5 is over because you guessed the secret number ${secretNumber} in ${attempts} attempts!`);
        alert(`Congratulations! You guess the number ${secretNumber} in ${attempts} attempts!`);
    }
}


// // Refactor the code so that:
// // 1. The user will see the alert "Too low!", if the number is too low. 
// // 2. The user will see the alert "Too high!" if the number is too high. 
// // 3. The user will see the alert "`Congratulations! You guessed the number [NUMBER] in [ATTEMPTS] attempts.`)" if the number is correct. 




// /****************** Exercise 6 ********************/

// // Simulating a vending machine using a while loop

// // Initial amount of money the user has
// let userBalance = 20;

// // Price of an item in the vending machine
// const itemPrice = 3;

// console.log("Welcome to the Vending Machine!");
// console.log(`You have $${userBalance} in your balance.`);

// while ('YOUR CODE HERE') {
//     console.log("Available options:");
//     console.log("1. Snack A ($3)");
//     console.log("2. Snack B ($2)");
//     console.log("3. Exit");

//     const choice = parseInt(prompt("Enter enter the number related to your snack choice: \n 1. Snack A ($3)\n 2. Snack B ($2)\n 3. Exit"));

//     if (choice === 1) {
//         console.log("You selected Snack A. Enjoy your snack!");
//         userBalance -= itemPrice;
//     } else if (choice === 2) {
//         console.log("You selected Snack B. Enjoy your snack!");
//         userBalance -= 2;
//     } else if (choice === 3){
//         console.log("Thank you for using the Vending Machine. Have a great day!");
//         userBalance = 0;
//         choice = none;
//     } else if (choice > 3){
//         console.log("Invalid choice. Please select a valid option.\n 1. Snack A ($3)\n 2. Snack B ($2)\n 3. Exit");
//     } 


//     console.log(`Your current balance: $${userBalance}`);
// }

// console.log("Insufficient balance. Please add more money to use the Vending Machine.");

// // 1. Write the condition so that the while loop will eventually stop. 
