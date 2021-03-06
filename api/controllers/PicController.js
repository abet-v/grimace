/**
 * PicController
 *
 * @description :: Server-side logic for managing pics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	uploadGrimace: function (req, res) {
	  req.file('grimace').upload({
	    // don't allow the total upload size to exceed ~10MB
	    maxBytes: 10000000
	  },function whenDone(err, uploadedFiles) {
	    if (err) {
	      return res.negotiate(err);
	    }
	    // If no files were uploaded, respond with an error.
	    if (uploadedFiles.length === 0){
	      return res.badRequest('No file was uploaded');
	    }
	    // Save the "fd" and the url where the avatar for a user can be accessed
	    User.update(req.session.me, {
	      // Generate a unique URL where the avatar can be downloaded.
	      avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(), req.session.me),
	      // Grab the first file and use it's `fd` (file descriptor)
	      avatarFd: uploadedFiles[0].fd
	    })
	    .exec(function (err){
	      if (err) return res.negotiate(err);
	      return res.ok();
	    });
	  });
	}
	
};

