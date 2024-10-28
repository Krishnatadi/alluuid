const generateNilUUID = require('./nilUUID');
const version1 = require('./version1');
const version4 = require('./version4');
const version7 = require('./version7');
const generateGuid = require('./guid')
const { generateMultipleUUIDs, generateCustomUUID, generateUUIDForEmail } = require('./multipleAndCustom');
const uniqueIDGenerator = require('./uniqueIDGenerator');

module.exports = {
    generateNilUUID,
    version1,
    version4,
    version7,
    generateGuid,
    generateMultipleUUIDs,
    generateCustomUUID,
    generateUUIDForEmail,
    uniqueIDGenerator
};
