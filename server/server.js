const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Hello world!');
});

app.get('/users', (req, res) => {
	res.status(200).send([{
		name: 'Yehia',
		age: 23
	},
	{
		name: 'Saleh',
		age: 70
	}]);
});


app.listen(3000);

module.exports.app = app;