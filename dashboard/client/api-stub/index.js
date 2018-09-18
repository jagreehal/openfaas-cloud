const http = require('http');
const {
    parse
} = require('url');

const {
    join
} = require('path');

const fs = require('fs');

const PORT = process.env.PORT || 3001;

function returnError(res){
    res.statusCode = 400;
    return res.end();
}


function returnFile(res, path) {
    const stream = fs.createReadStream(path).on('error', (e) => {
        const error = `Error streaming file ${path}`;
        console.error(error, e);
        res.statusMessage = error;
        return returnError(res);
    });
    stream.pipe(res);
}

http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        return res.end();
    }
    const parts = parse(req.url, true);
    let path;
    switch (parts.pathname) {
        case '/api/list-functions':
            path = join(__dirname, `/api/list-functions/${parts.query.user}.json`);
            return returnFile(res, path);
        case '/api/pipeline-log':
            path = join(__dirname, `/api/pipeline-log/${parts.query.commitSHA}.txt`);
            return returnFile(res, path);            
        default:            
            res.statusMessage = `No handler for ${parts.pathname}`;
            res.statusCode = 404;
            return res.end();
    }
}).listen(PORT, function () {
    console.log(`stub listening on port ${PORT}`);
});