// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход коллекцию объектов и колбек функцию. 
// Эта функция должна вызывать колбек для каждого объекта коллекции. Главная особенность этой функции в том, 
// что она передает объекты коллекции не в саму функцию, а устанавливает их как контекст.

// Подобная функция существует в библиотеке JQuery

function each (arr, coll) {
    return arr.map((item) => coll.call(item));
}

export default each;