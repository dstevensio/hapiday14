exports.register = function (server, options, next) {
  
  server.route({
    path: '/version',
    method: 'GET',
    handler: require('./version')
  });

  server.route({
    path: '/{apiVersion}/version',
    method: 'GET',
    handler: require('./version')
  });

  next();

};

exports.register.attributes = {
  pkg: require('./package.json')
};