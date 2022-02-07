// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, 
// элементами которого являются дети вложенных узлов (см. пример).

// Примеры
// import removeFirstLevel from '../removeFirstLevel.js';
 
// Второй уровень тут: 5, 3, 4
// const tree1 = [[5], 1, [3, 4]];
// removeFirstLevel(tree1); // [5, 3, 4]
 
// const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
// removeFirstLevel(tree2);
// [3, 5, [4, 3], 2]

const removeFirstLevel = (tree) => {
    const newArr = tree.filter((item) => Array.isArray(item))

    return newArr.flat();
}

console.log(removeFirstLevel([1, 2, [3, 5], [[4, 3], 2]]))