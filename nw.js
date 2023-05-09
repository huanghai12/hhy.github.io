let path = require('path');
let Service = require('node-windows').Service;
let svc = new Service({
    name: 'api1',
    description: 'api1',
    script: path.resolve('./server.js'),
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
});
svc.on('install',function(){
    svc.start();
})
svc.install();