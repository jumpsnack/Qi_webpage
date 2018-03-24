const express = require('express')
const path = require('path')
const http2 = require('spdy')
const fs = require('fs')
const bodyParser = require('body-parser')
const url = require('url')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function(req, res){

    var url_parts = url.parse(req.url, true)
    var query = url_parts.query

    switch(url_parts.pathname) {
        case '/api':
            switch (query.node){
                case 'iot-platform':
                    switch (query.target){
                        case 'board_content':
                            res.sendFile(path.join(__dirname, 'api', query.node, 'board', '_content.json'))
                            break
                        case 'prev_content':
                            res.sendFile(path.join(__dirname, 'api', query.node, 'prev', '_'+query.id + '.json'))
                            break
                    }
                    break
            }
            break
        default:
            res.sendFile(path.join(__dirname, 'dist/index.html'));
    }
})

const port = process.env.PORT || '80'
app.set('port', port)

const options = {
    spdy: {
        protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
        plain: true,
        'x-forwarded-for': true,
        connection: {
            windowSize: 1024 * 1024, // Server's window size
            // **optional** if true - server will send 3.1 frames on 3.0 *plain* spdy
            autoSpdy31: false
        }
    }
}

const server = http2.createServer(options, app);

server.listen(port, ()=>{console.log(`API running on localhost:${port}`)});
