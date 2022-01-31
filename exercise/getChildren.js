// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей 
// и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.

const getChildren = (users) => {

    const child = users.map(({children}) => children)

    return child.flat();
}

export default getChildren;
