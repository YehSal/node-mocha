const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

	describe('Get /', () => {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect('Hello world!')
				.end(done);
		});	
	});
	
	describe('Get /users', () => {
		it('should return users objects', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Yehia',
						age: 23
					});
				})
				.end(done);
		});		
	});	
});

