// 1. result = 5+5+'5'
let result = 5 + 5 + '5';
console.log(result);          // "105"
console.log(typeof result);   // "string"

// 2. Перевірка email
let email = "example@gmail.com";
console.log("Чи містить '@':", email.includes("@")); 
console.log("Кількість символів:", email.length);

// 3. Об’єднання слів
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3 + " " + "Viktor";
console.log(fullName);  // "My name is Viktor"

// 4. userName + payment
let userName = "Олександро";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);