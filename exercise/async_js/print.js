// Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.

// Примеры:

// import print from './printer.js';
// print('./myfile');
// Подсказки
// В теории был пример асинхронного чтения файла. Нужно сделать по аналогии.

import fs from 'fs';

// BEGIN (write your solution here) (write your solution here)
const print = (filename) => console.log(fs.readFileSync(filename, 'utf-8'));

export default print;

// END