const net = require('net');
const server = net.createServer();
server.on('connection', handleConnection);
server.listen(9000, () => {
  console.log('server listening to %j', server.address());
});
function handleConnection(conn) {
  const remoteAddressAndPort = `${conn.remoteAddress}:${conn.remotePort}`;
  console.log(`new client connection from ${remoteAddressAndPort}`);

  conn.on('data', (data) => {
    console.log('DATA', data.toString('utf8'))
    conn.write(`Thanks for sending us: ${data}`)
  })

  conn.on('error', (error) => {
    console.log('ERROR', error.message)
  })

  conn.on('close', () => {
    console.log('CONNECTION CLOSED')
  })
}
