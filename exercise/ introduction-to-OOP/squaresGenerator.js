// Square.js
// Реализуйте и экспортируйте по умолчанию класс Square для представления квадрата. У квадрата есть только одно свойство — сторона. 
// Реализуйте метод getSide(), возвращающий значение стороны.

// Пример
// const square = new Square(10);
// square.getSide(); // 10
// SquaresGenerator.js
// Реализуйте класс SquaresGenerator со статическим методом generate(), принимающим два параметра: 
//     сторону и количество экземпляров квадрата (по умолчанию 5 штук), которые нужно создать. 
//     Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.

// Пример
// const squares = SquaresGenerator.generate(3, 2);
// [new Square(3), new Square(3)];

class Square {
    constructor(side) {
      this.side = side;
    }
    getSide() {
      return this.side;
    }
  }
  
// export default Square;

// import Square from './Square.js';

class SquresGenerator {
  static generate(side, count = 5) {
    const newArr = [];
    for (let i = newArr.length; newArr.length < count; i++) {
      const sd = new Square(side);
      newArr.push(sd)
    }
    return newArr;
    }
}

// export default SquresGenerator;