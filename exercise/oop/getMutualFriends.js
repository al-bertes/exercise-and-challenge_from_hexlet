// Реализуйте и экспортируйте функцию getMutualFriends(), которая принимает на вход двух пользователей 
// и возвращает массив состоящий из общих друзей этих пользователей.

// Интерфейс абстракции "Пользователь":

// user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
// user.getFriends() – возвращает список друзей (то есть пользователей).
const makeUser = ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
  });

// BEGIN (write your solution here)
const getMutualFriends = (us1, us2) => {
    const fr1 = us1.getFriends().map(({id}) => {
        return id;
    });
    const fr2 = us2.getFriends();
    const result = fr2.reduce((acc, item) => {
        if (fr1.includes(item.id)) {
            acc.push(item);
        }
        return acc;
    }, [])
    return result;
}
export { getMutualFriends };
// END