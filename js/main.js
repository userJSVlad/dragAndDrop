let pict = document.querySelectorAll('.pict');

let crX = 0;
let crY = 0;

pict.forEach(element => {
	element.addEventListener('dragstart', startDrag)
});

function startDrag(event) {
	event.dataTransfer.setData('text/html', 'dragstart')
	crX = event.offsetX;
	crY = event.offsetY;
}

pict.forEach(element => {
	element.addEventListener('dragend', dragEnd)
});

function dragEnd(event) {
	event.target.style.position = 'absolute';
	event.target.style.top = (event.pageY - crY) + 'px';
	event.target.style.left = (event.pageX - crY) + 'px';
}
