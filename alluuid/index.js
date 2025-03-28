const generateNilUUID = require('./nilUUID');
const uuidv1 = require('./uuidv1');
const uuidv4 = require('./uuidv4');
const uuidv7 = require('./uuidv7');
const generateGuid = require('./guid')
const { generateMultipleUUIDs, generateCustomUUID, generateUUIDForEmail } = require('./multipleAndCustom');
const uniqueIDGenerator = require('./uniqueIDGenerator');

module.exports = {
    generateNilUUID,
    uuidv1,
    uuidv4,
    uuidv7,
    generateGuid,
    generateMultipleUUIDs,
    generateCustomUUID,
    generateUUIDForEmail,
    uniqueIDGenerator
};

// For Browser (if not using a bundler)
if (typeof window !== 'undefined') {
  window.alluuid = {
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
}