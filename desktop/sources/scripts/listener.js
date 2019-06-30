const dgram = require('dgram')

export default function Listener (pilot) {
  // TODO: Configurable on load
  let params = new URLSearchParams(window.location.search)
  this.port = 49161

  if (params.has('port')) {
    this.port = params.get('port')
  }

  this.server = dgram.createSocket('udp4')

  this.server.on('message', (msg, rinfo) => {
    pilot.mixer.run(`${msg}`)
  })

  this.server.on('listening', () => {
    const address = this.server.address()
    console.log(`Server listening for UDP:\n ${address.address}:${address.port}`)
  })

  this.server.on('error', (err) => {
    console.log(`Server error:\n ${err.stack}`)
    server.close()
  })

  this.setPort = function (port){
    this.port = port;

    this.server.bind(this.port) 
  }

  this.setPort(this.port)
}
