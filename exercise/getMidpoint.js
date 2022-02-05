
// Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине между двумя указанными точками.
const getMidpoint = (point1, point2) => {

    const midX = (point1.x + point2.x) / 2;
    const midY = (point1.y + point2.y) / 2;
    return {
        x: midX,
        y: midY,
    }
}

export default getMidpoint;

