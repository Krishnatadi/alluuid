const version1 = require('./uuidv1'); // Placeholder for Version 1 UUID
const version4 = require('./uuidv4'); // Version 4 UUID generation
const version7 = require('./uuidv7'); // Placeholder for Version 7 UUID

function generateMultipleUUIDs(version, count) {
    if (count < 2 || count > 50) {
        throw new Error("Count must be between 2 and 50.");
    }
    const uuids = [];
    for (let i = 0; i < count; i++) {
        switch (version) {
            case 1:
                uuids.push(version1());
                break;
            case 4:
                uuids.push(version4());
                break;
            case 7:
                uuids.push(version7());
                break;
            default:
                throw new Error("Unsupported version.");
        }
    }
    return uuids;
}

// Function to generate a UUID based on email
function generateUUIDForEmail(email) {
    if (!email || typeof email !== 'string') {
        throw new Error("Please provide a valid email address.");
    }
    return emailToUUID(email);
}

// Convert email to a consistent UUID-like string
function emailToUUID(email) {
    // Create a buffer from the email and convert it to a hex string
    const buffer = Buffer.from(email);
    const hash = buffer.toString('hex');

    // Format the hash to match the UUID structure
    return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(12, 15)}-${(parseInt(hash[15], 16) & 0x3 | 0x8).toString(16)}${hash.slice(16, 20)}-${hash.slice(20, 32)}`;
}


// Function to generate a random UUID (Version 4 style)
function generateCustomUUID() {
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0; // Generate a random number between 0 and 15
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); // Set the 13th character to 4 and the 17th character to 8, as per UUID v4
    });
}

module.exports = {
    generateMultipleUUIDs,
    generateUUIDForEmail,
    generateCustomUUID
};
