class Buttons {
	/**
	 * This function is called when the class is instantiated, and it sets the id and element properties
	 * of the class.
	 * @param id - The id of the carousel.
	 */
	constructor(id) {
		this.id = id;

		this.element =
			document.getElementsByClassName('carousel-container')[this.id];
	}

	/* Creating a button and adding it to the DOM. */
	addButton = (direction) => {
		let buttonContainer = document.createElement('button');
		buttonContainer.id = `${direction}-btn`;
		buttonContainer.classList.add('btn', `btn--${direction}`);

		let button = document.createElement('img');
		button.src = `../images/angle-${direction}-solid.svg`;
		button.classList.add('btn--icon');

		buttonContainer.appendChild(button);

		this.element.appendChild(buttonContainer);
	};

	/* Creating a div container and then creating a dot for each image in the carousel. */
	addDots = () => {
		let divContainer = document.createElement('div');
		divContainer.classList.add('dots__container');

		let imageAmount = document.getElementsByClassName(
			'carousel-image-container'
		)[this.id].children.length;

		for (let i = 0; i < imageAmount; i++) {
			let dot = document.createElement('div');
			dot.classList.add('dot');
			dot.id = `${i}-image`;
			divContainer.appendChild(dot);
		}

		this.element.appendChild(divContainer);
	};
}

export { Buttons };
