import { runFunction } from './run.js';

let listOfImages = {
	onePiece:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fanitrendz.net%2Fnews%2Fwp-content%2Fuploads%2F2020%2F04%2FOne-Piece.jpg%3Ffit%3D2560%252C1440%26ssl%3D1&f=1&nofb=1',
	naruto:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F07%2Fuzumaki-naruto.jpg&f=1&nofb=1',
	bleach:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FfofOa-h_ns4elEeAa0FyLhaayMjh1dIcofZYKFK2008.jpg%3Fauto%3Dwebp%26s%3D829b0559f1389cd400540470019f3abf054ce7a4&f=1&nofb=1',
	onepunch:
		'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1809904.jpg&f=1&nofb=1',
};

window.onload = () => {
	runFunction(listOfImages, 2);
};
