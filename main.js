'use strict'

const errors = require('./exceptions.js');

const maxLength = 144144258;
const minLength = 2;

class BinaryFlag {
	constructor(length, initialValue) {
		if (length < minLength) {
		  throw new Error(errors.length_1);
		}
		if (length > maxLength) {
		  throw new Error(errors.length_2);
		}
		this.obj = {};
		this.length = length;
		this.initValue = initValue;
	}

	GetFlag(pos){
		const {obj, length, initValue } = this;

		if (+position > length) throw new Error(errors.position_1);
		if (+position < 0) throw new Error(errors.position_2);
		if (!position || !object[position]) return initialValue;
	
		return object[position];
	}

	SetFlag(position, value) {
		const { object, length } = this;
	
		if (typeof value !== 'boolean') throw new Error(errors.boolean);
		if (+position > length) throw new Error(errors.position_1);
		if (+position < 0) throw new Error(errors.position_2);
	
		object[position] = value;
	}

	DisposeFlag(position) {
		const { object, length } = this;
	
		if (+position > length) throw new Error(errors.position_1);
		if (+position < 0) throw new Error(errors.position_2);
	
		delete object[position];
	}
}

module.exports = { BinaryFlag, maxLength, minLength }