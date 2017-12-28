const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	}
	app.__set__('db', db);

	it('Should call spy correctly', () => {
		var spy = expect.createSpy();
		spy('Yehia');
		expect(spy).toHaveBeenCalledWith('Yehia');
	});

	it('Should call saveUser with user object', () => {
		var email = 'yehia.saleh@yale.edu';
		var password = '123';

		app.createUser(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});

});