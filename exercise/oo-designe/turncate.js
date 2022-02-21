// Для работы с текстом в вебе бывает полезна функция truncate(), которая обрезает слишком длинный текст и ставит в конце многоточие:

// truncate('long text', { length: 3 }); // lon...
// solution.js
// Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает текст и следующие опции:

// separator - символ, заменяющий обрезанную часть строки
// length - максимальная длина исходной строки. Если строка короче, чем эта опция, то возвращается исходная строка.
// Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода truncate(). 
// Оба способа можно комбинировать.

class Truncater {
    static defaultOptions = {
      separator: '...',
      length: 200,
    };
  
    // BEGIN (write your solution here)
    constructor(options = {}) {
         this.options = { ...this.constructor.defaultOptions, ...options }; 
    }
    truncate(text, options = {}) { 
        const { length, separator } = { ...this.options, ...options }; 
        return (text.length <= length) ? text : `${text.slice(0, length)}${separator}`; 
    }
    // END
}

export default Truncater;

