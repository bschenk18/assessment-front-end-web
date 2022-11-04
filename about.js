console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function handleMouseover(event) {
	event.preventDefault();

	alert(`Quack Quack`);
}

let image = document.querySelector(`#img`);

image.addEventListener('mouseover', handleMouseover);
