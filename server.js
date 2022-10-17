const Express = require('express');
const path = require('path');

const app = Express();
const port = 8080;

app.get('/', function(req, res) {
    console.log('In Get')
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);

