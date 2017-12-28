const db = require('./db');

var createUser = (email, password) => {
	// Check email exists
	db.saveUser({email, password});
};

module.exports = {
	createUser
}