const findTriangle = (side1, side2, side3) => {
	return (side1 === side2 && side2 === side3) && 'equilateral' ||
	(side1 === side2 || side1 === side3 || side2 === side3) && 'isosceles' ||
	'scalene';
}
module.exports = findTriangle;