const { scrypt } = require('crypto')

// promisify scrypt with callback
const hashFunc = ({ salt, password, keylen = 64 }) =>
  new Promise((resolve) => {
    scrypt(password, salt, keylen, (err, derivedKey) => {
      if (err) {
        throw err
      }
      resolve(derivedKey)
    })
  })

module.exports = { hashFunc };
