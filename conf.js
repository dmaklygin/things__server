module.exports = function() {
console.log("process.env.NODE_ENV == ", process.env.NODE_ENV);
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                hostname: 'http://xxx.herokuapp.com/',
                mongo: process.env.MONGOLAB_URI,
                secret: 'sfsdf'
            };
        case 'test':
            return {
                hostname: 'localhost',
                port: 3000,
                mongo: 'mongodb://localhost/things',
	              secret: 'srgetherstheth'
            };
        default:
            return {
                hostname: 'localhost',
                port: 3000,
                mongo: 'mongodb://localhost:27017/things',
                secret: 'hwrthrthwrth'
            };
    }
};
