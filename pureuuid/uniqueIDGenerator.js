const version1 = require('./version1');
const version4 = require('./version4');
const version7 = require('./version7');
const generateNilUUID = require('./nilUUID');
const generateGuid = require('./guid');
const { generateMultipleUUIDs, generateCustomUUID, generateUUIDForEmail } = require('./multipleAndCustom');

const uniqueIDGenerator = {
    version1,
    version4,
    version7,
    generateNilUUID,
    generateGuid,
    generateMultipleUUIDs,
    generateCustomUUID,
    generateUUIDForEmail
};

module.exports = uniqueIDGenerator;
