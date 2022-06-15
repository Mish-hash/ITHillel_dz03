/*
1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.

Happy birthday to you
Happy birthday to you
Happy birthday, dear <name>
Happy birthday to you

Используйте любой цикл для реализации.
*/
const welcome = 'Hi, what is your name?';
const userName = prompt();

for (let i = 0; i < 4; i++) {
    if(i === 2) {
        console.log(`Happy birthday, dear ${userName}`);
    } else {
        console.log('Happy birthday to you');
    }
}




