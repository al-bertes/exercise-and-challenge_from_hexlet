// Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние между двумя точками на плоскости:

const calculateDistance = (point1, point2) => {

    const catet1 = point2[0] - point1[0];
    const catet2 = point1[1] - point2[1];

    return Math.sqrt((catet1**2) + (catet2**2))
}
 export default calculateDistance;