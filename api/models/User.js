/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	firstName: {
  		type: 'string',
  		defaultsTo: 'undefined'
  	},

  	lastName: {
  		type: 'string'
  	},

  	login: {
  		type: 'string'
  	},

  	email: {
  		type: 'email'
  	},

  	grimaces: {
  		collection: 'Pic'
  	},

  	friends: {
  		collection: 'User'
  	}

  }
};

