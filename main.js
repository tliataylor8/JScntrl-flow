
// section 308- Control Flow 

// Scope
// conditionals

// Blocks

// let x = 10;
// let y = 5;

// {
//     let z = x + y;
//     console.log(z)
// }

// Global scope: can be accessed anywhere in the project code
// in this case scenario, we set variables outside of the block scope

// Types of scopes

// Global scope
// Module scope
// function scope
// block scope

// This is block scope with global
// {
//     let x = 20;
//     let y = 30;
// }
// console.log(x);

// module scope relates to React- will cover later

// a conditional is a statement that checks if it is truthy or falsy 
// conditinoals are helpful when working with data on a more professional scale
// if/else
// switch

// let gregsFavMusic = 'Alt-J'
// if(gregsFavMusic == 'El Alfa') {
//     console.log('I did not know Greg liked Dem Bow');
// }
// else{
//     console.log('Greg plays Alt-J a lot')
// }

// let favFood = 'Steak'

// if (favFood == 'Pizza') {
//     console.log('Pizza is great')
// } else if (favFood == 'Steak') {
//     console.log('Tomahawk steak is great')
// } else if (favFood == 'Brisket') {
//     console.log('BBq is great')
// } else if (favFood == 'Burger') {
//     console.log('Mickey D\'s is good')
// } else {
//     console.log('I just eat salads')
// }

// // => Tomahawk steak is great

// let age = 20;

// if (age <= 17) {
//     console.log('Not an adult')
// } else if (age < 21) {
//     console.log('not old enough to drink')
// } else {
//     console.log('person is old enough')
// }

// // => not old enough to drink

// Let's see if you have enough money to buy a cat! Using the following terms, create an if / else if / else conditional statement:

// If yourMoney is equal to catPrice, log the message "You have just enough to buy a cat!"
// If yourMoney is more than catPrice, log the message "You can buy a cat and will have dollars left over"
// If yourMoney is less than catPrice, log the message "You cannot buy a cat. You need more dollars :("
// Check your code with the following variables (Remember, you can use Node to run the file in your terminal: node if-else-practice.js)

// const yourMoney = 50
// const catPrice = 100

// if (yourMoney == catPrice) {
//     console.log('You have just enough to buy a cat!')
// } else if (yourMoney > catPrice) {
//     console.log('You can buy a cat and will have dollars left over')
// } else if (yourMoney < catPrice) {
//     console.log('You cannot buy a cat. You need more dollars :(')
// }
// => You cannot buy a cat. You need more dollars :(

// const yourMoney = 100
// const catPrice = 100

// if (yourMoney == catPrice) {
//     console.log('You have just enough to buy a cat!')
// } else if (yourMoney > catPrice) {
//     console.log('You can buy a cat and will have dollars left over')
// } else if (yourMoney < catPrice) {
//     console.log('You cannot buy a cat. You need more dollars :(')
// }
// => You have just enough to buy a cat!

// const yourMoney = 200
// const catPrice = 100

// if (yourMoney == catPrice) {
//     console.log('You have just enough to buy a cat!')
// } else if (yourMoney > catPrice) {
//     console.log('You can buy a cat and will have dollars left over')
// } else if (yourMoney < catPrice) {
//     console.log('You cannot buy a cat. You need more dollars :(')
// }
// => You can buy a cat and will have dollars left over

