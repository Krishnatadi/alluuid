const crypto = require('crypto');

// Track last generated timestamp to ensure monotonic ordering
let lastTimestamp = 0n;
let counter = 0n;

function uuidv7() {
    // Get the current Unix timestamp in milliseconds
    const milliseconds = BigInt(Date.now());

    // Get high-resolution time (nanoseconds converted to microseconds)
    const microseconds = (process.hrtime.bigint() % 1_000_000n) / 1_000n;

    // Combine timestamp for microsecond precision
    let timestamp = (milliseconds * 1000n) + microseconds;

    // Ensure strictly increasing timestamps
    if (timestamp <= lastTimestamp) {
        counter++;
        timestamp = lastTimestamp + counter;
    } else {
        counter = 0n;
    }
    lastTimestamp = timestamp;

    // Convert timestamp to hex (12 characters)
    const timestampHex = timestamp.toString(16).padStart(12, '0');

    // Generate 10 cryptographically secure random bytes
    const randomBytes = crypto.randomBytes(10);

    // Set UUID version (7): `0111 xxxx`
    randomBytes[0] = (randomBytes[0] & 0x0F) | 0x70;

    // Set Variant (10xx xxxx)
    randomBytes[2] = (randomBytes[2] & 0x3F) | 0x80;

    // Convert to hex and format as UUID
    return [
        timestampHex.slice(0, 8),  // time_low
        timestampHex.slice(8, 12), // time_mid
        randomBytes.toString('hex').slice(0, 4),  // time_high_and_version
        randomBytes.toString('hex').slice(4, 8),  // clock_seq
        randomBytes.toString('hex').slice(8, 20)  // node
    ].join('-');
}

module.exports = uuidv7;
