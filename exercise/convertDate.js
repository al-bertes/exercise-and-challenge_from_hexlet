import { get } from "lodash";

const convert = (...rest) => {
    const newArr = []
    for (const item of rest) {
        newArr.push(new Date(...item).toDateString());
    }
    return newArr;
}
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]))

const obj = {
    name: 'Albert',
    age: 26,
}
const arr = [['name', 'Albert'], ['age', 26]];

const getName = ([, name]) => {
    console.log(name)
}
getName(arr)