const express = require('express');
const dotenv = require('dotenv');

const renderStatic = require('./middleware/servingSite');

dotenv.config();

const app = express();
app.set('view option', { layout: false });
app.use(express.static(__dirname + '/static'));

app.use('/', renderStatic);

app.listen(process.env.port, process.env.host, (err, done) => {
	if (err) {
		console.log('Error starting the server');
	} else {
		console.log(
			`The server has started in http://${process.env.host}:${process.env.port}`
		);
	}
});
