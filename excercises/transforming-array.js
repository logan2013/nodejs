function reflectInY(point) {
    return [-point[0], point[1]];
}

function reflectInX(point) {
    return [point[0], -point[1]];
}

function rotate90cw(point) {
    return [point[1], -point[0]];
}

/**
 * Array.map返回的是一个新的对象
 *
 * @param points
 * @returns {Array}
 */
function reflectAllInY(points) {
    return points.map(reflectInY);
}

function  reflectAllInX(points) {
    return points.map(reflectInX);
}

function  rotateAll90cw(points) {
    return points.map(rotate90cw);
}

var points = [[3, 4], [3, 1], [1, 1]];

var reflected = reflectAllInX(points);
console.log(reflected);
console.log(points);

var rotated = rotateAll90cw(points);
console.log(rotated);