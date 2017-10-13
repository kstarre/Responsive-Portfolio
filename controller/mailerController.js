const nodemailer = require("nodemailer");

require('dotenv').config();

module.exports = {
	send: function(req, res) {

		let transporter = nodemailer.createTransport({
			service: "Yahoo",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EPASS
			}
		});
		transporter.sendMail({
			from: req.body.email,
			to: process.env.EMAIL,
			subject: 'New message from: ' + req.body.email,
			text: req.body.message + "\n\n" + req.body.name
		}, (err, info) => {
			if (err) {
				console.log(err);
				return res.send(err);
			}
			res.send(info);
			console.log(info.envelope);
			console.log(info.messageId);
		});
	}
};