var Glue = require('glue');

var manifest = {
  connections: [
    {
      port: 9000
    }
  ],
  plugins: {
    "./info": null
  }
};

var options = {
  relativeTo: process.cwd() + '/lib/modules'
};

Glue.compose(manifest, options, function (err, server) {
  if (err) throw err;

  server.start(function (err) {

    console.log('Server running on port 9000');

  });
});