// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. 
// Количество символов передаётся в takeLast() вторым параметром. 
// Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
const run = (text) => {
    // BEGIN (write your solution here)

    const takeLast = (str, num) => {

        if (str.length === 0 || str.length < num) {
            return null;
        }

        const substVal = str.length - num - 1

        let newStr = ''

        for (let i = str.length - 1; i > substVal; i -= 1) {
            newStr += str[i]
        }
        
        return newStr;
    }
    // END
  
    return takeLast(text, 4);
  };
  
