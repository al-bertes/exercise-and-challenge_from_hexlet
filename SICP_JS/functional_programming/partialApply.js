// partialApply.js
// Реализуйте и экспортируйте по умолчанию функцию, которая умеет частично применять один (второй) аргумент у переданной функции c двумя аргументами:

const partialApply = (cb, arg) => {
    return function (a) {
        return cb(a, arg)
    }
}

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
f1(1); // 1
console.log(f1(10)); // 100
 
const f2 = partialApply((a, b) => a * b, 5);
f2(2); // 10
console.log(f2(5)); // 25
