const uuidv1 = require('./uuidv1');
const uuidv4 = require('./uuidv4');
const uuidv7 = require('./uuidv7');
const generateNilUUID = require('./nilUUID');
const generateGuid = require('./guid');
const { generateMultipleUUIDs, generateCustomUUID, generateUUIDForEmail } = require('./multipleAndCustom');

const uniqueIDGenerator = {
    uuidv1,
    uuidv4,
    uuidv7,
    generateNilUUID,
    generateGuid,
    generateMultipleUUIDs,
    generateCustomUUID,
    generateUUIDForEmail
};

module.exports = uniqueIDGenerator;
