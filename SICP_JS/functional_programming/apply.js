// apply.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход три параметра:

// Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
// Функцию для применения
// Аргумент для применения
// Примеры
// apply(0, Math.sqrt, 4); // 4
// apply(1, Math.sqrt, 4); // 2
 
// // Math.sqrt(Math.sqrt(16));
// apply(2, Math.sqrt, 16); // 2
// // Math.sqrt(Math.sqrt(Math.sqrt(256)));
// apply(3, Math.sqrt, 256); // 2
 
// apply(1, v => v ** 2, 3); // 9
// apply(5, v => v + 10, 3); // 53


const appl = (count, func, arg) => {
    if (count === 0) {
        return arg;
    }
    let result = 0;
    let newArg = arg;

    for (let i = 1; i <= count; i += 1) {

        newArg = func(newArg);
        result = newArg
    }
    return result;
}
