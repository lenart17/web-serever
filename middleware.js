//middleware
var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: '+ new Date().toString()+ ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//allows other modules to use this fle
module.exports = middleware;