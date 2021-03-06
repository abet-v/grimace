/**
* Pic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	url: {
  		type: "string"
  	},

  	fd: {
  		type: 'integer'
  	},

  	ranking: {
  		type: 'float'
  	},

  	owner: {
  		model: 'User'
  	},

  	votes: {
  		collection: 'Vote'
  	}

  }
};

