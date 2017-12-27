const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);
	expect(res).toBe(44).toBeA('number');
});

it('should add two numbers asynchronously', (done) => {
	utils.asyncAdd(3, 2, (sum) => {
		expect(sum).toBeA('number').toBe(5);
		done();
	})
})

it('should square a number', () => {
	var res = utils.square(5);
	expect(res).toBe(25).toBeA('number');
});

it('should square a number asynchronously', (done) => {
	utils.asyncSquare(5, (square) => {
		expect(square).toBeA('number').toBe(25);
		done();
	})
});

it('should have first and last names', () => {
	var user = {
		age: 25,
		location: 'Alexandria'
	};
	var res = utils.setName(user, 'Yehia Saleh');
	expect(res).toInclude({
		firstName: 'Yehia',
		lastName: 'Saleh'
	});
});