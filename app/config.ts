let CONFIG: object = {
    port: 3000,
    mysql: {
        client: 'mysql',
        connection: {
            host: '119.29.170.103',
            post: 3306,
            user: 'root',
            password: 'admin666',
            database: 'flutter_app',
            charset: 'utf8',
        }
    },
    sessionStore: {
        host: '119.29.170.103',
        port: 3306,
        user: 'root',
        password: 'admin666',
        database: 'flutter_app',
        checkExpirationInterval: 60000, //一分钟检查一次
        expiration: 3600000, //最大的生命期
        connectionLimit: 1,
        schema: {
            tableName: 'sessions', //表名
            columnNames: { //列
                session_id: 'session_id',
                expires: 'expires',
                data: 'data'
            }
        }
    }
}

module.exports = CONFIG;