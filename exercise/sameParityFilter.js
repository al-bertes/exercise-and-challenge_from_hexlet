// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, 
// состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.

const isEven = (num) => num % 2 === 0;

const sameParity = (arr) => {
    const isEven = (num) => num % 2 === 0;
    const newArr = arr.reduce((acc, item) => {
        if (isEven(arr[0]) && item % 2 === 0 ) {
            acc.push(item)
        } else if (!isEven(arr[0]) && item % 2 !== 0) {
            acc.push(item);
        }
        return acc;
    }, [])
    return newArr;
}

export default sameParity;