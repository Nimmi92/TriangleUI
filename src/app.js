import fetchTsElement from './fetchTsElement';
import findTriangle from './findTriangle';
import isCanvasBlank from './isCanvasBlank';
import drawTriangle from './drawTriangle';
import clearCanvas from './clearCanvas';
import resetForm from './resetForm';

import './index.css';

// TS UI ready function
ts.ui.ready(function() {

	// TS TopBar initialization
	ts.ui.TopBar.title('Triangle UI');
	ts.ui.TopBar.buttons([
	{ label: 'Learn about Triangle', type: 'ts-secondary'}])

	// TS input box, keyup event
	document.addEventListener('keyup', function(e) {
	  if(e.target.tagName=="INPUT" && e.target.type=="number") {
	  	const side1 = fetchTsElement('#side1').value,
			side2 = fetchTsElement('#side2').value,
		    side3 = fetchTsElement('#side3').value;

		// Show error, if input is not a valid nummber
		if(isNaN(e.key)) {
			e.target.parentNode.nextElementSibling.classList.remove('hidden');
		}
		else {
			e.target.parentNode.nextElementSibling.classList.add('hidden');
		}
		
		// Enable the button, only if 3 inputs are valid
		if (side1 && side2 && side3) {
			document.getElementById('check').removeAttribute('disabled');
		}
		else {
			document.getElementById('check').setAttribute('disabled','disabled');
		}
	  }
	})

	// Check button on click event
	document.getElementById('check').onclick = () =>  {
		const side1 = fetchTsElement('#side1').value,
			side2 = fetchTsElement('#side2').value,
			side3 = fetchTsElement('#side3').value;
		const result = findTriangle(side1, side2, side3);
		document.getElementById('result').innerText = result;
		clearCanvas('resultCanvas');
		drawTriangle('#resultCanvas', result, 0, 0, true);
		fetchTsElement('#resultModal').open();
	}

	// Retry button on click event
	document.getElementById('retry').onclick = () =>  {
		fetchTsElement('#resultModal').close();
		resetForm('triangleForm');
	}

	// TS UI TopBar button on click event
	ts.ui.TopBar.buttons()[0].onclick = () =>  {
		let blank = isCanvasBlank(document.getElementById('triangleCanvas'));
		if(blank) {
			drawTriangle('#triangleCanvas','equilateral', 60, 50);
			drawTriangle('#triangleCanvas','scalene', -60, 80);
			drawTriangle('#triangleCanvas','isosceles', 0, 150);
		}
		document.getElementById('triangleinfo').setAttribute('data-ts.open', true);
	}

});