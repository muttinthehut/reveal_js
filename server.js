var util = require('util'),
    connect = require('connect'),
    port = process.env.PORT || 3000;
connect.createServer(connect.static(__dirname)).listen(port);