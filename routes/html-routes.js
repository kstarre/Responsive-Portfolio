var htmlController = require("htmlController.js");

module.exports = function(app) {
	app.get("/", htmlController.home);
	app.get("/portfolio", htmlController.portfolio);
	app.get("/contact", htmlController.contact);
};