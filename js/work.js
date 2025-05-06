//1.
const celsius = 26;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

//2.
const daysInMonth = 31;
const hoursInMonth = 24 * daysInMonth;
const minutesInMonth = 60 * hoursInMonth;
console.log(minutesInMonth);

//3.
let health = 3200;
let energy = 150;
const healthMinus = prompt("скільки бажаєте відняти здоровя?");
const energyMinus = prompt("скільки бажаєте відняти енергії?");

health -= Number(healthMinus);
energy -= Number(energyMinus);
console.log(health);
console.log(energy);

4.
let totalPrice = 4500;
const discountedPrice = (totalPrice * 10) / 100;
const result = totalPrice - discountedPrice;
console.log(result);
console.log(discountedPrice);

//5.
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

//6.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log("Перетворене число:", parsedFloat);

//7.
const intString = "123";
const parsedIntта = parseInt(intString);
console.log(parsedIntта);

//8.
const number = Number(prompt("введіть число"));
const sqrtNumber = Math.sqrt(Number(number));
console.log(sqrtNumber);

// можна розкласти всі дії по змінних.
const number = prompt("введіть число");
const myNumber = Number(number);
const sqrtNumber = Math.sqrt(myNumber);
console.log(sqrtNumber);

//9.
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);

const convertedString = integer.toString();
console.log(typeof convertedString);