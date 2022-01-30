// Реализуйте и экспортируйте по умолчанию функцию, 
// которая проверяет переданное число на простоту и печатает на экран yes или no.
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.

const  isPrimeNumber = (num) => {

    if (num < 2) {
        return false 
    }

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false 
        }
  }

  return true 
}

const sayPrimeOrNot = (num) => isPrimeNumber(num) ? console.log('yes') : console.log('no')