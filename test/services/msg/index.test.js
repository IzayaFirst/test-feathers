'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('msg service', function() {
  it('registered the msgs service', () => {
    assert.ok(app.service('msgs'));
  });
});
