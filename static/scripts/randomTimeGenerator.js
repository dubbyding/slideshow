/**
 * It returns a random number between 1000 and 5000.
 * @returns A random number between 1000 and 5000.
 */
function rtg() {
	return Math.floor(Math.random() * 4000) + 1000;
}

export { rtg };
