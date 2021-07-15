const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: 'mongodb+srv://bloguser:blogpassword@mongo-dbs.5bz8u.mongodb.net/blog'
    },
    server: {
        host: 'localhost',
        port: 1337
    }
}

export default config
