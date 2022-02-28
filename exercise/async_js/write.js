// Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает 
// о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.

// import write from './writer.js';
 
// write('./myfile', 'data', () => {
//   console.log('success');
// });
// Подсказки:
// для записи в файл используйте функцию fs.writeFile().

import fs from 'fs';


const write = (path, data, callback) => {
    fs.writeFile(path, data, callback);
}

export default write;