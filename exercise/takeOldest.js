// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. 
// Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. 
// Экспортируйте данную функцию по умолчанию.

import _ from "lodash"

const takeOldest = (users, qual = 1) => {

    const sortUsers = _.sortBy(users, function(item) {
        return Date.parse(item.birthday);
    })

    const listUsers = [];

    for (let i = 0; i < qual; i += 1) {
        listUsers.push(sort[i])
    }

    return listUsers;
}

export default takeOldest;
