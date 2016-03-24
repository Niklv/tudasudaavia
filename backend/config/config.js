module.exports = {
    mongo: {
        db: process.env.MONGO_URL || 'mongodb://localhost/tudasuda',
        opts: {db: {safe: true}}
    },
    port: process.env.PORT || 3000,
    flightstats: {
        appId: 'xx',
        apiKey: 'xx'
    }
};
