'use strict';

const service = require('feathers-sequelize');
const msg = require('./msg-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;
  const orm = msg(app.get('sequelize'));
  const options = {
    Model: msg(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    },
  };

 
  // Initialize our service with any options it requires
  app.use('/msgs', service(options));
  // Get our initialize service to that we can bind hooks
  const msgService = app.service('/msgs');

  // Set up our before hooks
  msgService.before(hooks.before);

  // Set up our after hooks
  msgService.after(hooks.after);
};
