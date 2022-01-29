// Реализуйте и экспортируйте по умолчанию функцию, 
// которая возвращает среднее арифметическое всех переданных аргументов. 
// Если функции не передать ни одного аргумента, то она должна вернуть null.

import _ from "lodash";

const average = (...rest) => {

    if (rest.length === 0) {
        return null
    }
    
    const middNum = _.sum(rest) / rest.length; 

    return middNum;
}

export default average;