const http = require('http')

const svr http.creatServer(handler)
svr.listen(8080)

function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello, world!</h1>\n')
}