const crypto = require('crypto');

// UUID v1 Epoch Offset (Oct 15, 1582, in 100ns intervals)
const UUID_EPOCH_OFFSET = 122192928000000000n;
let lastTimestamp = 0n; // Ensures strictly increasing timestamps
let counter = 0n; // Fallback counter for identical timestamps

function uuidv1() {
    // Get the current timestamp in 100-nanosecond intervals
    let unixTimestamp = BigInt(Date.now()) * 10_000n; // Convert ms -> 100ns units

    // Ensure strictly increasing timestamps
    if (unixTimestamp <= lastTimestamp) {
        counter += 1n; // Increment counter if timestamp hasn't increased
    } else {
        counter = 0n; // Reset counter for new timestamps
    }
    lastTimestamp = unixTimestamp;

    // Final timestamp with fallback counter
    const timestamp = UUID_EPOCH_OFFSET + unixTimestamp + counter;
    
    // Convert timestamp to hex (60 bits = 15 hex chars)
    const timestampHex = timestamp.toString(16).padStart(15, '0');

    // Generate random clock sequence (2 bytes) and node (6 bytes)
    const randomBytes = crypto.randomBytes(8);

    // Apply UUID version (UUID v1: 0b0001xxxx in upper 4 bits)
    const timeHighAndVersion = (parseInt(timestampHex.slice(0, 4), 16) & 0x0FFF) | 0x1000; 

    // Set clock sequence (variant 0b10xx)
    const clockSeq = ((randomBytes[0] & 0x3F) | 0x80).toString(16).padStart(2, '0') + 
                     randomBytes[1].toString(16).padStart(2, '0');

    // Set node (first byte must have MSB set to "1" for randomness compliance)
    const node = (randomBytes[2] | 0x01).toString(16).padStart(2, '0') + 
                 randomBytes.slice(3, 8).toString('hex');

    // Assemble final UUID
    return [
        timestampHex.slice(7, 15),  // time_low (8 hex chars)
        timestampHex.slice(3, 7),   // time_mid (4 hex chars)
        timeHighAndVersion.toString(16).padStart(4, '0'), // time_high_and_version (4 chars)
        clockSeq,                   // clock_seq (4 chars)
        node                         // node (12 chars)
    ].join('-');
}

module.exports = uuidv1;
