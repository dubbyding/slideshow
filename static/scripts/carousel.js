class Carousel {
	/**
	 * The constructor function is used to create a new object.
	 * @param id - The id of the carousel.
	 * @param listOfImages - An array of images that you want to display in the carousel.
	 * @param [transitionTime=1000] - The time(ms) it takes for the image to transition from one to the next.
	 * @param [displayTime=2000] - The time(ms) the image is displayed before transitioning to the next image.
	 */
	constructor(id, listOfImages, transitionTime = 1000, displayTime = 2000) {
		this.id = id;
		this.listOfImages = listOfImages;
		this.transitionTime = transitionTime;
		this.displayTime = displayTime;

		this.move = 1;

		this.elementCounter = 0;

		this.counter = 0;

		this.imageContainer = document.getElementsByClassName(
			'carousel-image-container'
		)[id - 1];

		this.imageContainer.style.left = '0%';
		this.elementWidth = 100;
	}

	/* Appending the images to the carousel. */
	appendImages = () => {
		let index = 0;
		for (let i in this.listOfImages) {
			let image = document.createElement('img');

			image.src = this.listOfImages[i];
			image.classList.add('image-slider');
			image.id = index++;

			this.imageContainer.appendChild(image);
		}
	};

	/**
	 *  This is the code that is responsible for the transition.
	 * @param transitionType - Type of transition i.e. normal or cyclic
	 *  */
	transitionImage = (transitionType = 'normal') => {
		this.transition = this.transitionTime / this.elementWidth;

		this.transitionInterval = setInterval(() => {
			this.imageContainer.style.left = `-${this.counter}%`;
			this.counter += this.move;

			/* This is the code that is responsible for the transition. */
			if (
				(this.move > 0 &&
					this.counter > this.elementWidth * this.elementCounter) ||
				(this.move < 0 &&
					this.counter < this.elementWidth * (this.elementCounter - 1)) ||
				(this.counter > 0 && this.counter < this.listOfImages.length)
			) {
				this.elementCounter += this.move;

				clearInterval(this.transitionInterval);

				/* This is the code that is responsible for the changing the active dot. */
				let dotContainer = document.getElementsByClassName('dot');

				for (let i in dotContainer) {
					let dot = document.getElementById(`${dotContainer[i].id}`);

					if (dot != undefined) {
						if (parseInt(dot.id) == Math.round(this.counter / 100)) {
							dot.classList.add('active');
						} else {
							dot.classList.remove('active');
						}
					}
				}

				/* This is the code that is responsible for the normal transition. */
				if (transitionType == 'normal') {
					this.displayInterval = setTimeout(() => {
						this.edgeReturn();
						this.transitionImage(transitionType);
					}, this.displayTime);
				}

				/* This is the code that is responsible for the cyclic transition. */
				if (transitionType == 'cyclic') {
					if (this.move > 0 || this.elementCounter == 0) {
						this.displayInterval = setTimeout(() => {
							this.edgeReturn();
							this.transitionImage(transitionType);
						}, this.displayTime);
					} else {
						this.edgeReturn();
						this.transitionImage(transitionType);
					}
				}
			}
		}, this.transition);
	};

	/* This is the code that is responsible for the changing transition direction. */
	edgeReturn = () => {
		if (
			this.elementCounter > this.imageContainer.children.length - 1 ||
			this.elementCounter < 1
		) {
			this.move *= -1; // Alternate direction

			this.elementCounter += this.move;
		}
	};

	/* This add interaction feature in the buttons */
	buttonInteraction = () => {
		let container =
			document.getElementsByClassName('carousel-container')[this.id - 1];
		let buttonClass;
		if (container != undefined) {
			buttonClass = container.getElementsByClassName('btn'); // get all the btn class
		}

		for (let i in buttonClass) {
			let buttonId = buttonClass[i].id;

			/* Few factors are shown undefined so checking*/
			if (buttonId != undefined) {
				let button = document.getElementById(buttonId);

				button.onclick = () => {
					if (buttonId == 'left-btn') {
						if (this.counter <= 0) {
							this.counter = 100 * (this.imageContainer.children.length - 1);
							this.elementCounter = 5;
						}
						if (this.move > 0) {
							this.move *= -1;
						}
					} else {
						if (
							this.counter >=
							100 * (this.imageContainer.children.length - 1)
						) {
							this.counter = 0;
							this.elementCounter = 0;
						}
						if (this.move < 0) this.move *= -1;
					}

					clearInterval(this.transitionInterval);
					clearTimeout(this.displayInterval);
					this.transitionImage();
				};
			}
		}
	};

	dotInteraction = () => {
		let dot = document.getElementsByClassName('dot');
		for (let i = 0; i < dot.length; i++) {
			let dotId = dot[i].id;
			if (dotId != undefined) {
				let dotElement = document.getElementById(dotId);
				dotElement.onclick = () => {
					clearInterval(this.transitionInterval);
					clearTimeout(this.displayInterval);

					let position = parseInt(dotId) * 100;
					this.elementCounter = parseInt(dotId);

					this.transitionInterval = setInterval(() => {
						if (this.counter > position) {
							this.imageContainer.style.left = `-${--this.counter}%`;
						} else if (this.counter < position) {
							this.imageContainer.style.left = `-${++this.counter}%`;
						} else {
							clearInterval(this.transitionInterval);
							this.transitionImage();
						}
					}, this.transition);
				};
			}
		}
	};
}

export { Carousel };
