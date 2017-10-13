const nodemailer = require("nodemailer");

require('dotenv').config();

module.exports = {
	send: function(req, res) {

		let transporter = nodemailer.createTransport({
			service: "hotmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EPASS
			}
		});
		transporter.sendMail({
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: 'New message from: ' + req.body.email,
			text: req.body.message + "\n\n" + req.body.name + "\n\n" + req.body.email
		}, (err, info) => {
			if (err) {
				return res.send(err);
			}
			else {
				res.send("Sent");
			}
		});
	}
};