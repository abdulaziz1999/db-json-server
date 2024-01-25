const jsonServer = require('json-server');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});

// Tambahkan kode untuk membaca db.json
fs.readFile('db.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading db.json:', err);
        return;
    }
    console.log('Contents of db.json:', data);
});

// Export the Server API
module.exports = server;
