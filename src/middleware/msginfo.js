'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    console.log(req.params)
    app.service('msgs').find().then(function(user){
          res.json(user);
    }).catch(function(err){
      console.log(err)
    })
    /*
    app.service('msgs').findById(req.params.id)
    .then(function(res){
      console.log(res)
    }).catch(function(err){
      console.log(err)
    })*/
  };
};
