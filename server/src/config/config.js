module.exports = {
    port: 27017,
    dbURL: 'mongodb://localhost/articles',
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true

    }
}