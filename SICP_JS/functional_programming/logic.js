// Удивительно, но факт — условные конструкции можно реализовать самостоятельно с использованием одних лишь каррированных функций.

// logic.js
// В этой практике мы реализуем упрощённую версию, имитирующую работу условной конструкции if.

// Экспортируйте три функции True, False, If, внутри которых есть только функции. То есть нельзя пользоваться встроенным в язык условным оператором if,
//  а также true и false. Сами функции должны быть каррированы.

// Пример использования:

// import { If, True, False } from './logic';
 
// If(True)('one')('two');  // one
// If(False)('one')('two'); // two
// Подсказки
// Общая схема работы функций такова:

// If(func)('one')('two'); // ?
// То есть, в итоге должно вернуться то или иное значение, в зависимости от того, какая функция передана на вход If.

// Если функции If была передана True, то выражение ниже вернёт значение аргумента первого вызова (one):

// const ConditionFunction = If(True);
// ConditionFunction('one')('two'); // one
 
// Если функции If была передана False, то выражение ниже вернёт значение аргумента второго вызова (two):

// const ConditionFunction = If(False);
// ConditionFunction('one')('two'); // two


export const True = (one, two) => {
    if (one) {
      return one;
    }
    return function () {
      return undefined
    }
} 
  
  export const False = (one, two) => {
    if (two) {
      return two;
    }
    return function () {
      return undefined
    }
  }
  
  
  export const If = (predicat) => {
    return function (one) {
      return function (two) {
        return predicat(one, two);
      }
    }
  }
console.log(False()())