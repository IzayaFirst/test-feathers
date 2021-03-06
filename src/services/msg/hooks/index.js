'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');

const myHook = options => { // always wrap in a function so you can pass options and for consistency.
  return hook => {
    console.log(options);
    return Promise.resolve(hook); // A good convention is to always return a promise.
  };
};

const logging = options =>{
  return hook =>{
    console.log(hook)
    return Promise.resolve(hook); // A good convention is to always return a promise.
  }
}

exports.before = {
  all: [],
  find: [logging()],
  get: [],
  create: [myHook()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
