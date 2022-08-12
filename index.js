const http = require('http')
const {
  sum,
  divide,
  multiply,
  toThePower,
  takeAway,
  squareRoot,
  square,
} = require('./src/calculator')

function wrapInHtml(title, toPrint) {
  return `<div>${title}: ${toPrint}</div>`
}

function createDocument(body) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>VS Code Debug</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    ${body}
  </body>
  </html>`
}

function createBodyHtml() {
  return `<main>
  ${wrapInHtml('sum', sum(1, 2, 3, 4, 5))}
  ${wrapInHtml('subtract', takeAway(1, 2, 3, 4, 5))}
  ${wrapInHtml('divide', divide(1, 2, 3, 4, 5))}
  ${wrapInHtml('multiply', multiply(1, 2, 3, 4, 5))}
  ${wrapInHtml('square', square(3))}
  ${wrapInHtml('squareRoot', squareRoot(9))}
  ${wrapInHtml('toThePower', toThePower(9, 3))}
  </main>`
}

//create a server object:
http
  .createServer(function (req, res) {
    const body = createBodyHtml()
    const formatResponse = createDocument(body)
    res.write(formatResponse) //write a response to the client
    res.end() //end the response
  })
  .on('listening', (port) =>
    console.log(`listening on "http://localhost:8080"`),
  )
  .listen(8080) //the server object listens on port 8080
