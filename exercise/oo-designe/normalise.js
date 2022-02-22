// Эту задачу можно решить огромным числом способов. Почти наверняка ваш способ будет не такой, как решение учителя.

// Мы не даём никаких подсказок насчет того, какие функции нужно использовать. Как минимум вы знаете главную тройку map, filter и reduce.

// solution.js
// Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран, нормализует их имена, 
// сортирует и группирует по стране.

// import normalize from './solution.js';
 
// const countries = [
//   { name: 'Miami', country: 'usa' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Moscow ', country: ' Russia' },
// ];
 
// normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }


const normalize = (listCities) => {
    const newObj = listCities
        .map(({name, country}) =>{
            name = name.toLowerCase().trim();
            country = country.toLowerCase().trim();
            return {name, country}
        })
        .sort((a, b) => (a.country > b.country) ? 1 : -1)
        .reduce((acc, item) => {
            if (!Object.hasOwn(acc, item.country)) {
                acc[item.country] = [];
              }
              if (!acc[item.country].includes(item.name)) {
                acc[item.country].push(item.name);
              }
            acc[item.country].sort();
    
        return acc
    }, {});
    return newObj;
}

export default normalize;