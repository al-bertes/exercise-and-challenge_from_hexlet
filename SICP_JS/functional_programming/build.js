// Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.

// table(
//   tr(td('one'), td('two')),
//   tr(td('three'), td('four'))
// );
// В результате вызовов возвращается вот такой HTML:

// <table>
//   <tr>
//     <td>one</td>
//     <td>two</td>
//   </tr>
//   <tr>
//     <td>three</td>
//     <td>four</td>
//   </tr>
// </table>
// buildHtml.js
// Реализуйте и экспортируйте по умолчанию функцию, простой вызов которой:

// buildHtml();
// создаёт и возвращает следующий HTML:

// <table>
//   <tr>
//     <td>lang</td>
//     <td>comment</td>
//   </tr>
//   <tr>
//     <td>php</td>
//     <td>statements</td>
//   </tr>
//   <tr>
//     <td>clojure</td>
//     <td>expressions</td>
//   </tr>
// </table>

// @ts-check



import { table, tr, td } from './tags.js';

// BEGIN (write your solution here)
export default () => {
  return table(tr(td('lang'), td('comment')), tr(td('php'), td('statements')), tr(td('clojure'), td('expressions')))
}
// END