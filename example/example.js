var RPCTransport = require('../nodejs/RPCTransport.js');
var transport = new RPCTransport('/dev/cu.usbserial-A965DFR7', 115200);


var io = require('socket.io')(9999);

io.on('connect', function(socket) {

	transport.on('changed', function(args, ret) {
		socket.emit('changed', args, ret);
	});

	socket.on('rpc:call', function(name, args, ret) {
		transport.call(name, args, ret);
	});

});