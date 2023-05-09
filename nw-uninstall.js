let path = require('path');
let Service = require('node-windows').Service;
let svc = new Service({
    name: 'api server',
    description: 'api server',
    script: path.resolve('./bin/www'),
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
});
svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists:',svc.exists);
})
svc.uninstall();