// В этой задаче тесты написаны для отрезков, которые, в свою очередь, используют точки. 
// Ваша задача — реализовать интерфейсные функции для работы с точками. 
// Внутреннее представление точек должно быть основано на полярной системе координат, 
// хотя интерфейс предполагает работу с декартовой системой (снаружи). 
// Для обозначения координат используются целые числа.

// points.js
// Реализуйте интерфейсные функции точек:

// getX(point)
// getY(point)
// makePoint(x, y). Принимает на вход координаты и возвращает точку. Уже реализован.

const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };

const getAngle = (point) => point.angle;
const getRadius = (point) => point.radius;

const getX = (point) => {
    return Math.round(getRadius(point) * Math.cos(getAngle(point)))
}

const getY = (point) => {
    return Math.round(getRadius(point) * Math.sin(getAngle(point)));
}


export { makePoint, getX, getY };