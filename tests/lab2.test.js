const { hashFunc } = require('../lab2');
const { pass, input, } = require('../testdata/validTestData');
const emptyString = {
	password: '',
	salt: '',
};

const emptyPass = {
	password: '',
	salt: '1',
}

test('Checking empty string ( expects error )', async () => {
 
	try {
	  await hashFunc(emptyString);
	} catch (error) {
	  expect(error).not.toBe(undefined);
	}
});

test('Checking errors if missing password ( expect error )', async () => {  
	try {
	  await hashFucn(emptyPass);
	} catch (error) {
	  expect(error).not.toBe(undefined);
	}
});

//testing keylen
test('Checking if keylen length matching variable', async () => {
	const hashData = {
	  password: pass.string,
	  salt: input.string,
	  keylen: 27,
	};
	
	const result = await hashFunc(hashData);
	expect(typeof result.toString("hex")).toBe("string");
});

  // testing default en-US strings
test('Checking default strings', async () => {
	const hashData = {
	  password: pass.string,
	  salt: input.string,
	};
	try {
		await hashFucn(hashData);
	  } catch (error) {
		expect(error).not.toBe(undefined);
	  }
});

  // testing numbers ( must throw error )
test('Checking numbers ( expect error )', async () => {
	const hashData = {
	  password: pass.num,
	  salt: input.num,
	};

	try {
	  await hashFucn(hashData);
	} catch (error) {
	  expect(error).not.toBe(undefined);
	}
});

  // tesing regular expressions
test('Checking regular expressions ( expect error )', async () => {
	const hashData = {
	  password: pass.regExp,
	  salt: input.regExp,
	};
  
	try {
	  await hashFucn(hashData);
	} catch (error) {
	  expect(error).not.toBe(undefined);
	}
});
  
  // tesing cyrillic languages in password and salt
test('Checking cyrillic languages', async () => {
	const hashData = {
	  password: pass.ukr,
	  salt: input.cyr,
	  defaultKeyLen: 64,
	};

	const result = await hashFunc(hashData);
	expect(typeof result.toString("hex")).toBe("string");
});
  
   // testing spec symbols
  test('Checking special symbols', async () => {
	const hashData = {
	  password: pass.specSymb,
	  salt: input.specSymb,
	  defaultKeyLen: 64,
	};
  
	const result = await hashFunc(hashData);
	expect(typeof result.toString("hex")).toBe("string");
  });
    

  // tesing emoji
  test('Checking emoji', async () => {
	const hashData = {
	  password: pass.emoji,
	  salt: input.emoji,
	  defaultKeyLen: 64,
	};
  
	const result = await hashFunc(hashData);
	expect(typeof result.toString("hex")).toBe("string");
  });
  
  // tesing another languages
  test('Checking another language', async () => {
	const hashData = {
	  password: pass.ukr,
	  salt: input.arabic,
	  defaultKeyLen: 64,
	};
  
	const result = await hashFunc(hashData);
	expect(typeof result.toString("hex")).toBe("string");
  });
