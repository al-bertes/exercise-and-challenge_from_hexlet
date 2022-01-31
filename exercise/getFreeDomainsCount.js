// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов, 
// а возвращает количество емейлов, расположенных на каждом бесплатном домене. 
// Список бесплатных доменов хранится в константе freeEmailDomains.

import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (arr) => {
    const newArr = arr.map((item) => {
        const a = item.split('@');
        return a[1];
    })
        .filter((item) => freeEmailDomains.includes(item))
        .reduce((acc, item) => {
            acc[item] = (acc[item] ?? 0) + 1;
            return acc;
    }, {})
    return newArr;
}

export default getFreeDomainsCount;