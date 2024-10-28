function generateVersion1UUID() {
    return 'xxxxxxxx-xxxx-1xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

module.exports = generateVersion1UUID;
