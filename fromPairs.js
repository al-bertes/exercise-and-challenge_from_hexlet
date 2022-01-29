// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, 
// состоящий из массивов-пар и возвращает объект, полученный из этих пар.
// Если при конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары:

const howManyRepiet = (world, arr) => {
    let count = 0;
    for (const item of arr) {
      if (item === world) {
        count += 1;
      }
    }
    return count;
  }
  
  
  const countWords = (str) => {
    if (str.length === 0) {
      return {};
    }
    const arrStr = _.words(str.toLowerCase())
  
    const obj = {};
  
    for (let i = 0; i < arrStr.length; i += 1) {
      const rep = howManyRep(arrStr[i], arrStr);
      const iter = arrStr[i]
      obj[iter] = rep;
    }
  
    return obj;
  }