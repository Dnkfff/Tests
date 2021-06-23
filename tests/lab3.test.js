const { BinaryFlag, minLength, maxLength } = require('../main');
const errors = require('../exceptions');

test(`init length < ${minLength}`, () => {
	try{
		const newFlag = new BinaryFlag(1, true);
	} catch (err) {
		const errorIncludesString = err.toString().includes(errors.length_1);
		expect(errorIncludesString).toBe(false);
	}
})

test(`init length > ${maxLength}`, () => {
	try {
		const newFlag = new BinaryFlag(17179868705, true);
	  } catch (err) {
		const errorIncludesString = err.toString().includes(errors.length_2);
		expect(errorIncludesString).toBe(false);
	  }
})

test('{ setFlag pos val } pos incorrect (1)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.SetFlag(4, true);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.position_1);
	  expect(errorIncludesString).toBe(false);
	}
  });

  test('{ setFlag pos val } pos incorrect (2)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.SetFlag(-10, true);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.position_2);
	  expect(errorIncludesString).toBe(false);
	}
  });
  
  test('{ setFlag pos val } val incorrect', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.SetFlag(2, 'incorrect data');
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.boolean);
	  expect(errorIncludesString).toBe(false);
	}
  });
    
  test('{ dispose flag } pos incorrect (1)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.DisposeFlag(4);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.positionErr1);
	  expect(errorIncludesString).toBe(false);
	}
  });
  
  test('{ dispose flag } position incorrect (2)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.DisposeFlag(-10);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.positionErr2);
	  expect(errorIncludesString).toBe(false);
	}
  });
    
  test('{ get flag } position incorrect (1)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.GetFlag(4);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.position_1);
	  expect(errorIncludesString).toBe(false);
	}
  });
  
  test('{ get flag } position incorrect (2)', () => {
	try {
	  const newFlag = new BinaryFlag(3, true);
	  newFlag.GetFlag(-10);
	} catch (err) {
	  const errorIncludesString = err.toString().includes(errors.position_2);
	  expect(errorIncludesString).toBe(false);
	}
  });
  