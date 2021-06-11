'use strict';

const { scryptSync } = require('crypto');
const bcrypt = require('bcrypt');

// const hashFunc = scrypt('password', 'salt', 64, (err, derivedKey) => {
// 	if (err) throw err;
// 	console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });

// const hashFunc = ('pass', 'salt', 64, (err, derivedKey) => {
// 	if (err) console.error(err);
// 	console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// 	return scrypt(pass, salt, 64)
// });

const hashFunc = (hashData) => {
	const { salt, password } = hashData;
	const keylen = hashData.keylen ? hashData.keylen : defaultKeyLen;
  
	return scryptSync(password, salt, keylen, (err, derivedKey) => {
		if (err) throw err;
		console.log(derivedKey);  // '3745e48...08d59ae'
	});
};

module.exports = {
	hashFunc
};
