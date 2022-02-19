// Circle.js
// Реализуйте и экспортируйте по умолчанию класс Circle описывающий круг. У круга есть только одно свойство - его радиус. 
// Реализуйте методы getArea() и getCircumference(), которые вычисляют и возвращают площадь и длину окружности соответственно.

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * (this.radius*this.radius);
    }

    getCircumference() {
        return 2 * (Math.PI * this.getArea());
    }
}


