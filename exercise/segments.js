// Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, 
// другая — конец. Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, 
// а какую концом.

// В этом задании подразумевается, что вы уже понимаете принцип построения абстракции 
// и способны самостоятельно принять решение о том, как она будет реализована. 
// Напомню, что сделать это можно разными способами и нет одного правильного.

// segments.js
// Реализуйте и экспортируйте указанные ниже функции:

// makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.


const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
  };
  
  const getX = (point) => point.x;
  
  const getY = (point) => point.y;

const makeSegment = (start, end) => {
    return {
        start,
        end
    }
}

const getMidpointOfSegment = (segment) => {
    const x = (getX(segment.start) + getX(segment.end)) / 2;
    const y = (getY(segment.start) + getY(segment.end)) / 2;

    return {x, y};
}

const getBeginPoint = (segment) => {
    const x = getX(segment.start);
    const y = getY(segment.start);

    return {x, y};
}

const getEndPoint = (segment) => {
    const x = getX(segment.end);
    const y = getY(segment.end);

    return { x, y };
}

export { makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint } 