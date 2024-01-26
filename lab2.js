'use strict';

const { scryptSync } = require('crypto');

const hashFunc = (hashData) => {
	const { salt, password } = hashData;
	const keylen = hashData.keylen ? hashData.keylen : hashData.defaultKeyLen;
  
	return scryptSync(password, salt, keylen, (err, derivedKey) => {
		if (err) throw err;
		console.log(derivedKey);  // '3745e48...08d59ae'
	});
};

module.exports = {
	hashFunc,
};
