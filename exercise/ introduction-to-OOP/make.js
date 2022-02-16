// Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. 
// Рациональное число должно быть представлено объектом со следующими методами:

// Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)


const make = (numer, denom) => ({    
    numer,
    denom,
    getNumer() {
        return this.numer;
    },
    getDenom() {
        return this.denom;
    },
    add(rat) {
        const num = rat.getNumer();
        const den = rat.getDenom();
        const sumRatNum = (this.numer * den) + (this.denom * num); 
        const sumRatDen = (this.denom * den);
        
        return make(sumRatNum, sumRatDen);
    },
    toString() {
        return `${this.getNumer()}/${this.getDenom()}`
    }
})

export default make;

                                                                                                           