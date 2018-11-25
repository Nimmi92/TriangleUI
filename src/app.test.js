const findTriangle = require('./findTriangle');

test('scalene traiangle check', () => {
	expect(findTriangle(1,2,3)).toBe('scalene')
})

test('isosceles traiangle check', () => {
	expect(findTriangle(1,2,2)).toBe('isosceles')
})

test('equilateral traiangle check', () => {
	expect(findTriangle(2,2,2)).toBe('equilateral')
})