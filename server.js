var util = require('util'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    port = process.env.PORT;
connect().use(serveStatic(__dirname)).listen(port);

