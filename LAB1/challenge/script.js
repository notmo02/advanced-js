
// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;




// 1. If divided evenly, how much would each sibling get for the week?
let even = weeklyAllowance/3;
console.log(even);
// $43 for each

// 2. How many games can Jordan buy with their cut?
console.log(even/game);
// only 2 games

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = 16.99;
shoes = 89.78/2;

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
var quinnRicardo = even * 2;
var salaryMonthQr = quinnRicardo * 4;
console.log(salaryMonthQr/shoes);
// around 7 shoes

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
var gamestg = quinnRicardo/game;
console.log(gamestg);
var gamesAlone = Math.floor(even3/game);
console.log(gamesAlone);
console.log(gamestg - gamesAlone + "more games");

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log("The three siblings are" + sibling1 + "," + sibling2 + "," + sibling3 + ".")

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase);

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase);

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(sibling3.replaceAll("a",''));

// 11. Use console.log() and a built-in method to print out "De La Rosa"
const deLaRosa = sibling3.split(' ').slice(2, 5).join(' ');
console.log(deLaRosa);

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

function getRandomNum() {
    return Math.floor(Math.random() * 100);
}

console.log(getRandomNum(5));

function greeting(name) {
    return `Hello ${name}, I'm glad you can make it!`;
}

console.log(greeting("Mohammed"));



function perfectRoot(x) {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

console.log(perfectRoot(4));
console.log(perfectRoot (5));

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
    console.log("The sum of" + x,"+ " + y , "= " + sum);
}
// uncomment the line below, to call the function, and add one more function call
console.log( addNums(4, 6) );
console.log( addNums(3, 5) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
     if(name == "Beyonce" ) { 
         return "Welcome Queen!";
     } else {
         return `Sorry ${name}, you're not Beyonce`;
     }
}
// Test "Beyonce" and other names to ensure it works
console.log (isBeyonce("Mohammed"));
console.log (isBeyonce("Beyonce"));


/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
     if(x%2 === 0) {
        console.log(x/2);

     } else {
         return x;
     }
}
//Write your own function calls
console.log(reduceEvens(10));
console.log(reduceEvens(11));

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
function shortenString(string) {

    if (string.length > 10) {
        return string.slice(0, 10);
    }
    return string;
}
console.log(shortenString("Mohammed"));
console.log(shortenString("MohammedMohammedMohammed"));


// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

let budget = prompt(" What is your budget? ");
const buyBurgers = (budget) => {
    if(budget < 1){
        console.log("Sorry, no burgers for you.");
    } else{
        let burgerPay = budget / burger;
        console.log("You can buy, ", burgerPay, "Burgers");
    }
}
console.log(buyBurgers(0.5));
console.log(buyBurgers(5));

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const mealPrice = burger + fries + soda;
console.log(mealPrice);
//Meal Price = 9
const buyMeals = (budget) => {
    if(budget < 9){
        console.log("You cannot buy any meals");
    } else {
        let mealsAmount=budget/mealPrice;
        let mealsAmountBought=Math.round(mealsAmount)
        console.log("You can buy:", mealsAmountBought, "meals");
        let total=mealsAmountBought*9;
        console.log("You have", "$",budget - total, "left");
    }
}
console.log(buyMeals(9));
console.log(buyMeals(18));
console.log(buyMeals(21));
console.log(buyMeals(29));


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  
let lengthH=prompt("What is the length of the hypotenuse? ");
let legRt=prompt("What is the length of the leg of the right traingle? ");
const missingLeg = (lengthH, legRt) => {
    if(lengthH < legRt){
        console.log("Length of the hypotenuse must be largest length in the traingle");
    } else {
        let equationMathH =  lengthH *2;
        let equationMathRt= legRt * 2;
        let baseOfMS=equationMathH - equationMathRt;
        let missingSideLength=Math.sqrt(baseOfMS);
        console.log(missingSideLength + " is the length of the missing side. ");
    }
}
console.log(missingLeg(10, 5));
console.log(missingLeg(5, 10));


// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function

let numForFactorial=prompt("Type in a number for a factorial");
const factorialCalculations = (numForFactorial) => {
    if(numForFactorial == 1){
        console.log("number typed must be bigger than one becuase factorial of one is one.");
    } else {
    let base= 1;
    for (let i = 1; i <= numForFactorial; i++) {
        base *= i;
    }
    return base;
    }
}
console.log(factorialCalculations(1));
console.log(factorialCalculations(5));
console.log(factorialCalculations(10));