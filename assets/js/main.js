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

const counterMessageWelcome = 'How many counts to repeat the symbol ".#"';
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


/*
3) Напишите программу, котрая спрашивает у пользователя число и суммирует все нечетные числа, до этого числа.

Если пользователь не ввел число, вызвать команду prompt() c текстом "Invalid. You should enter a number" и попросить его заново ввести число.

Результат отобразите в консоли.
*/

const sumMessageWelcome = 'Please enter an integer';
const sumMessageError = 'Invalid. You should enter a number';
let sumEntered = parseInt(prompt(sumMessageWelcome));

while (!sumEntered) {
    sumEntered = parseInt(prompt(sumMessageError));
}

let sumIncrease = sumEntered;

for (let i = 1; i <= sumEntered; i++) {
    if( (i % 2) === 0 ) {
        sumIncrease += i;
    }
}

console.log(sumIncrease);

/*
5) Напишите цикл от 1 до 50, в котором будет выводится поочередно числа от 1 до 50, при этом:

Если число делится на 3 без остатка, то выводить не это число, а слово 'Div by 3';

Если число делится на 5 без остатка, то выводить не это число, а слово 'Div by 5';

Если число делится и на 3 и на 5, то выводить не это число, а слово 'Div by 5 and 3';4
*/

for (let i = 1; i <= 50; i++) {

    if ( (i % 3) === 0 && (i % 5) !== 0 ) {
        console.log('Div by 3');
    } else if ((i % 5) === 0 && (i % 3) !== 0 ) {
        console.log('Div by 5');
    } else if ( (i % 5) === 0 && (i % 3) === 0 ) {
        console.log('Div by 5 and 3');
    } else {
        console.log(i);
    }

}

