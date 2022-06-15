/*
1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.

Happy birthday to you
Happy birthday to you
Happy birthday, dear <name>
Happy birthday to you

Используйте любой цикл для реализации.
*/
const welcome = 'Hi, what is your name?';
const userName = prompt(welcome);

for (let i = 0; i < 4; i++) {
    if(i === 2) {
        console.log(`Happy birthday, dear ${userName}`);
    } else {
        console.log('Happy birthday to you');
    }
}


/*
2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, где количество повторений символов '.#' задает пользователь через команду prompt().
*/

const counterMessageWelcome = 'how many counts to repeat the symbol ".#"';
const counter = parseInt(prompt(counterMessageWelcome));
let counterMessageConsole = '';

if (counter) {
    for (let i = 0; i < counter; i++) {
        counterMessageConsole += '.#';
    };

} else (
    counterMessageConsole = 'Error, you ned enter only number!!!'
);

console.log(counterMessageConsole);

