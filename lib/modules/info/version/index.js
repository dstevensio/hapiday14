module.exports = function (request, reply) {
  
  // Versioned by URI route
  if (request.params.apiVersion && (/^v[0-9]+$/).test(request.params.apiVersion) ) {
    return require('./' + request.params.apiVersion)(request, reply);
  }

  // Versioned by customer request header
  if (request.headers['api-version'] && (/^[0-9]+$/).test(request.headers['api-version']) ) {
    return require('./v' + request.headers['api-version'])(request, reply);
  }

  // Versioned by accept header
  if (request.headers['accept'] && (/^application\/vnd\.exampleapi\.v[0-9]+$/).test(request.headers['accept']) ) {

    var version = request.headers['accept'].replace('application/vnd.exampleapi.', '');

    return require('./' + version)(request, reply);
  }

  // Default gets original API, to be backwards compatible
  return require('./v1')(request, reply);
  
};

