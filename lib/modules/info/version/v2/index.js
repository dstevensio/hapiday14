module.exports = function (request, reply) {
  
  reply({
    statusCode: 200,
    applicationDetail: {
      name: "exampleAPI",
      version: "2"
    }
  });
  
};