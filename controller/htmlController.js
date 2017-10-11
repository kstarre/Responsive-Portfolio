const path = require("path");

module.exports = {
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	};
	portfolio: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/portfolio.html"));
	};
	contact: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/contact.html"));
	};
};