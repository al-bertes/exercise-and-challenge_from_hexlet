// Point.js
// Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами, 
// представляющими координаты на плоскости x и y и геттеры для извлечения этих свойств: getX и getY. 
// На основании пройденого материала выберите тот способ организовать работу абстракции, который считаете нужным.

// Segment.js
// Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint 
// и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

// solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход отрезок и возвращает новый отрезок с точками, 
// добавленными в обратном порядке (begin меняется местами с end).

// Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. 
// То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами). 
// Для создания копий используйте соответствующие конструкторы.



// BEGIN (write your solution here)
function getX () {
    return this.x;
  }
  function getY () {
    return this.y;
  }
  function Point (x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
  }
  
//   export default Point;
  // END

// BEGIN (write your solution here)
function getBeginPoint () {
    return this.beginPoint;
  }
  
  function getEndPoint () {
    return this.endPoint;
  }
  
  function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
  }
  
//   export default Segment;
  // END

  // BEGIN (write your solution here)
function solution (section) {
    const newBegine = section.getBeginPoint();
    const newEnd = section.getEndPoint();
    const newEndY = new Point(newBegine.getX(), newBegine.getY());
    const newBegineX = new Point(newEnd.getX(), newEnd.getY());
    
  
    return new Segment(newBegineX, newEndY);
  }
  
  export default solution;