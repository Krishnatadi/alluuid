const crypto = require('crypto');

/**
 * Generates a cryptographically secure UUID v4 with optional HMAC signing.
 * @param {string} [secretKey] - Optional secret key for HMAC signing.
 * @returns {string} UUID in format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (with or without HMAC)
 */
function generateGuid(secretKey = '') {
    // Generate 16 secure random bytes
    const uuid = crypto.randomBytes(16);

    // Set UUID version to 4 (0100 xxxx)
    uuid[6] = (uuid[6] & 0x0F) | 0x40;

    // Set variant to 10xx xxxx
    uuid[8] = (uuid[8] & 0x3F) | 0x80;

    // Convert to hex and format as UUID
    const hex = uuid.toString('hex').toUpperCase();
    let guid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;

    // If a secret key is provided, generate an HMAC signature
    if (secretKey && typeof secretKey === 'string' && secretKey.length >= 32) {
        const hmac = crypto.createHmac('sha256', secretKey)
                           .update(guid)
                           .digest('hex')
                           .toUpperCase();
        guid = `${guid}.${hmac}`;
    }

    return guid;
}

// Example Usage:
console.log(generateGuid());  // Standard UUID
console.log(generateGuid(crypto.randomBytes(32).toString('hex')));  // HMAC-signed UUID

module.exports = generateGuid;
