module.exports = {
    mongo: {
        db: process.env.MONGO_URL || 'mongodb://localhost/tudasuda',
        opts: {db: {safe: true}}
    },
    port: process.env.PORT || 3000,
    flightstats: {
        appId: '3b74b5f8',
        apiKey: '6da327d814d7b0653e92b787c00ed260'
    }
};
