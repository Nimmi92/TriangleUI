const clearCanvas = (element) => {
	const canvas = document.getElementById(element);
	const context = canvas.getContext('2d');

	context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = clearCanvas;