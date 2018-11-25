const drawTriangle = (element, type, translateX, translateY, resultCanvas) => {

	let canvasElement = document.querySelector(element);
	let context = canvasElement.getContext("2d");
	 
	switch(type) {
		case 'equilateral':
			let h = 100 * (Math.sqrt(3)/2);
			if(resultCanvas) translateX = 50, translateY = 60 ;
			context.translate(translateX, translateY);
			context.beginPath();
	        context.moveTo(0, -h / 2);
	        context.lineTo( -100 / 2, h / 2);
	        context.lineTo(100 / 2, h / 2);
	        context.lineTo(0, -h / 2);
	        if(!resultCanvas) {
	        	context.font = "16px Arial";
				context.fillText("equilateral - 3 sides are equal",-50,60);
			}
			break;
		case 'scalene':
			context.beginPath();
			//if(resultCanvas) translateX = 80, translateY = 0 ;
			context.translate(translateX, translateY);
			context.moveTo(10, 10);
			context.lineTo(10, 60);
			context.lineTo(60, 120);
			context.closePath();
			if(!resultCanvas) {
				context.font = "16px Arial";
				context.fillText("scalene - 3 sides are different",10,140);
			}
			break;
		case'isosceles':
			context.beginPath();
			//if(resultCanvas) translateX = 80, translateY = 50 ;
			context.translate(translateX, translateY);
			context.moveTo(10, 10);
			context.lineTo(10, 60);
			context.lineTo(60, 60);
			context.closePath();
			if(!resultCanvas) {
				context.font = "16px Arial";
				context.fillText("isosceles - 2 sides are equal",10,80);
			}
			break;
		default:
			break;
	}
	 
	// the outline
	context.lineWidth = 2;
	context.strokeStyle = '#666666';
	context.stroke();
	 
	// the fill color
	context.fillStyle = "#FFCC00";
	context.fill();
}

module.exports = drawTriangle;

