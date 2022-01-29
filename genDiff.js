// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged.

// Возможные значения:

// added — ключ отсутствовал в первом объекте, но был добавлен во второй
// deleted — ключ был в первом объекте, но отсутствует во втором
// changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
// unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями


const genDiff = (obj1, obj2) => {

    const arr1 = Object.keys(obj1);
    const arr2 = Object.keys(obj2);
    const newObj = {}

    for (const item of arr1) {
        if (arr2.includes(item) && obj2[item] === obj1[item]) {
            newObj[item] = 'unchanged';
        } else if (arr2.includes(item) && obj2[item] !== obj1[item]) {
            newObj[item] = 'changed';
        } else if (!arr2.includes(item)) {
            newObj[item] = 'deleted';
        }
    }

    for (const item of arr2) {
        if (!arr1.includes(item)) {
            newObj[item] = 'added';
        }
    }
    
    return newObj;
}