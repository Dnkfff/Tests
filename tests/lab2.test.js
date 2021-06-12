const { hashFunc } = require('../lab2');
const { pass, input, } = require('../data');
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

test('')

//   test("Checking if keylen 64 equal to default keylen", async () => {
// 	const hashData1 = {
// 	  password: pass_string,
// 	  salt: salt_string,
// 	  keylen: 64,
// 	};

// 	const hashData2 = {
// 	  password: pass_string,
// 	  salt: salt_string,
// 	};

// 	const firstHash = await hashFucn(hashData1);
// 	const secondHash = await hashFucn(hashData2);
// 	expect(firstHash.toString("hex")).toEqual(secondHash.toString("hex"));
//   });
  
//   // testing empty strings
//   test("Checking errors if missing salt ( expect error )", async () => {
// 	const hashData = {
// 	  password: "",
// 	  salt: "",
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(err).not.toBe(undefined);
// 	}
//   });
  
//   // testing default en-US strings
//   test("Checking default strings", async () => {
// 	const hashData = {
// 	  password: pass_string,
// 	  salt: salt_string,
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(err).not.toBe(undefined);
// 	}
//   });
  
//   // testing numbers ( must throw error )
//   test("Checking numbers ( expect error )", async () => {
// 	const hashData = {
// 	  password: pass_num,
// 	  salt: salt_num,
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(error).not.toBe(undefined);
// 	}
//   });
  
//   // tesing cyrillic languages in password and salt
//   test("Checking cyrillic languages", async () => {
// 	const hashData = {
// 	  password: pass_cyr,
// 	  salt: salt_cyr,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
  
//   // testing spec symbols
//   test("Checking special symbols", async () => {
// 	const hashData = {
// 	  password: pass_spec_symbols,
// 	  salt: salt_spec_symbols,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
  
//   // tesing regular expressions
//   test("Checking regular expressions ( expect error )", async () => {
// 	const hashData = {
// 	  password: pass_reg_exp,
// 	  salt: salt_reg_exp,
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(error).not.toBe(undefined);
// 	}
//   });
  
//   // tesing obj parameters
//   test("Checking object parameters ( expect error )", async () => {
// 	const hashData = {
// 	  password: pass_obj,
// 	  salt: salt_obj,
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(error).not.toBe(undefined);
// 	}
//   });
  
//   // tesing array parameters
//   test("Checking array parameters ( expect error )", async () => {
// 	const hashData = {
// 	  password: pass_arr,
// 	  salt: salt_arr,
// 	};
  
// 	try {
// 	  await hashFucn(hashData);
// 	} catch (error) {
// 	  expect(error).not.toBe(undefined);
// 	}
//   });
  
//   // tesing emoji part 1
//   test("Checking emoji (1)", async () => {
// 	const hashData = {
// 	  password: pass_emoji,
// 	  salt: salt_emoji,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
  
//   // tesing another languages part 1
//   test("Checking another languages (1)", async () => {
// 	const hashData = {
// 	  password: pass_another_lang,
// 	  salt: salt_another_lang,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
  
//   // tesing emoji part 2
//   test("Checking emoji (2)", async () => {
// 	const hashData = {
// 	  password: pass_emoji2,
// 	  salt: salt_emoji2,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
  
//   // tesing another languages part 2
//   test("Checking another languages (2)", async () => {
// 	const hashData = {
// 	  password: pass_another_lang2,
// 	  salt: salt_another_lang2,
// 	};
  
// 	const result = await hashFucn(hashData);
// 	expect(typeof result.toString("hex")).toBe("string");
//   });
