const { BinaryFlag, minLength } = require('../main');
const errors = require('../exceptions');

test(`init length < ${minLength}`, () => {
	try{
		const newFlag = new BinaryFlag(1, true);
	} catch (err) {
		const errorIncludesString = err.toString().includes(errors.length_1);
		expect(errorIncludesString).toBe(false);
	}
})