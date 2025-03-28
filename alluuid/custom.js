const { checkUniqueID, createUUID } = require('./uniqueIDGenerator');

const generateCustomUUID = (userData) => {
    if (!userData || !userData.prefix) {
        throw new Error("Please provide valid user data with a prefix.");
    }

    const customUUID = `${userData.prefix}-${createUUID(4)}`; // Using Version 4 UUID as base
    return checkUniqueID(customUUID);
};

module.exports = generateCustomUUID;
