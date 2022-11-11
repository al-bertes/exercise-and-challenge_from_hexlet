// points.js
// Реализуйте и экспортируйте следующие функции для работы с точками:

// getQuadrant() — функция, которая вычисляет квадрант, в котором находится точка. Ниже приведена схема, показывающая номера квадрантов на плоскости.
//            +
//          2 | 1
//            |
//    +----------------+
//            |
//          3 | 4
//            +
//    const point = makePoint(1, 5);
//    getQuadrant(point); // 1
//    getQuadrant(makePoint(3, -3)); // 4
// Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат), то функция должна возвращать null:

//    const point = makePoint(0, 7);
//    getQuadrant(point); // null
//    getQuadrant(makePoint(2, 0)); // null
// getSymmetricalPoint() — функция, возвращающая новую точку, симметричную относительно начала координат. Такая симметричность означает, что меняются знаки у x и y.
//    getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
// calculateDistance() — функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)

// @ts-check
import { makePoint, getX, getY } from '@hexlet/points';

// BEGIN (write your solution here)
export const getQuadrant = (point) => {
  const xPoint = getX(point);
  const yPoint = getY(point);

  if (xPoint > 0 && yPoint > 0) {
    return 1;
  } else if(xPoint < 0 && yPoint > 0) {
    return 2;
  } else if(xPoint < 0 && yPoint < 0) {
    return 3;
  } else if(xPoint > 0 && yPoint < 0) {
    return 4;
  }
  return null;
}

export const getSymmetricalPoint = (point) => {
  const xPoint = getX(point);
  const yPoint = getY(point);


  return makePoint(xPoint * -1, yPoint * -1)
}

export const calculateDistance = (pointA, pointB) => {
  const x1 = getX(pointA);
  const y1 = getY(pointA);
  const x2 = getX(pointB);
  const y2 = getY(pointB);

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1)** 2);
}; 