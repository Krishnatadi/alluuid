const crypto = require('crypto');

function uuidv4() {
    // Generate 16 cryptographically secure random bytes
    const randomBytes = crypto.randomBytes(16);

    // Set UUID version to 4 (0b0100 xxxx)
    randomBytes[6] = (randomBytes[6] & 0x0F) | 0x40;

    // Set UUID variant to 10xx xxxx
    randomBytes[8] = (randomBytes[8] & 0x3F) | 0x80;

    // Convert to hex and format as UUID
    return [
        randomBytes.toString('hex').slice(0, 8),   // 8 characters
        randomBytes.toString('hex').slice(8, 12),  // 4 characters
        randomBytes.toString('hex').slice(12, 16), // 4 characters (with version)
        randomBytes.toString('hex').slice(16, 20), // 4 characters (with variant)
        randomBytes.toString('hex').slice(20, 32)  // 12 characters
    ].join('-');
}

module.exports = uuidv4;
