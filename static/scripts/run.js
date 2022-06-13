import { Carousel } from './carousel.js';
import { Buttons } from './buttons.js';
import { rtg } from './randomTimeGenerator.js';

let runFunction = (listOfImages, numberOfCarousel) => {
	let carousel = [];
	let button = [];

	for (let i = 0; i < numberOfCarousel; i++) {
		carousel[i] = new Carousel(i + 1, listOfImages, rtg(), rtg());
		carousel[i].appendImages();
		carousel[i].transitionImage();
		button[i] = new Buttons(i);
		button[i].addButton('left');
		button[i].addButton('right');
		button[i].addDots();
		carousel[i].buttonInteraction();
		carousel[i].dotInteraction();
	}
};

export { runFunction };
