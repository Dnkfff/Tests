const testCases = {
  withErrors: {
    expectError: (error) => expect(error).not.toBe(undefined),
    cases: [
      {
        name: 'Null salt',
        values: {
          password: 'qwerty',
          salt: null,
        },
      },
      {
        name: 'Null password',
        values: {
          password: null,
          hash: 'qwerty',
        },
      },
      {
        name: 'Keylen NaN',
        values: {
          password: 'qwerty',
          hash: 'qwerty',
          keylen: NaN,
        },
      },
      {
        name: 'Keylen Inf',
        values: {
          password: 'qwerty',
          hash: 'qwerty',
          keylen: Infinity,
        },
      },
    ],
  },
}

const pass = {
  string: 'password1234',
  smthStrange: 'takeMeToTheMo00N@!',
  num: 14092001,
  grandFather: 'GrandSonBirthday14092001',
  regExp: /d(b+)d/g,
  emoji: '😀 😃 😄 😁',
  ukr: 'Слава Україні!',
  specSymb: '^^$#@!:',
}

const input = {
  num: 1409,
  string: 'teststring',
  cyr: 'Словяне вперёд!',
  specSymb: '^^$#@!:',
  emoji: '😀 😃 😄 😁',
  arabic: 'الله أكبر',
  japan: 'こんにちは',
}

const emptyString = {
  password: '',
  salt: '',
}

const emptyPass = {
  password: '',
  salt: '1',
}

module.exports = {
  pass,
  input,
  emptyString,
  emptyPass,
  testCases,
}
