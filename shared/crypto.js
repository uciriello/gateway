const crypto = require('crypto');
const antString = '416E747265656D53726C5F4F7065726174696F6E5F5365637572697479';
const convert = (from, to) => (str) => Buffer.from(str, from).toString(to);

const utf8ToHex = convert('utf8', 'hex');

toB64 = (val) => {
	return Buffer.from(val).toString('base64');
};

createRndmKey = (type) => {
	return type === 4231
		? utf8ToHex(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 11) + 'DQWUHHP')
		: utf8ToHex('LYECPPX' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 11));
};

generateSecretKey = (rndmKey, rndmKey2, randts) => {
	const middle = Math.ceil(rndmKey.length / 2);
	const firstPart = rndmKey.slice(0, middle);
	const lastPart = rndmKey.slice(middle);
	rndmKey3 = rndmKey2.slice(0, -1);
	const finalKey = antString + toB64(firstPart + randts) + utf8ToHex(rndmKey3 + lastPart);
	return toB64('!' + finalKey + '!OTOTEQZCEPSWFWK_==');
};

encryptToken = (token) => {
	return new Promise((resolve) => {
		const randts = (+new Date() - 11).toString(2);
		const rndmKey1 = createRndmKey(4231);
		const rndmKey2 = createRndmKey(1337);
		let hash = crypto.createHmac('sha512', generateSecretKey(rndmKey1, rndmKey2, randts));
		hash.update(+new Date().toString() + token, 'utf-8');
		value = hash.digest('hex');
		const finalResult = toB64(value).toLowerCase().replace(/=\s*$/, '');
		resolve(finalResult);
	});
};

module.exports.encryptToken = encryptToken;
