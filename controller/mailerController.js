const nodemailer = require("nodemailer");

module.exports = {
	send: function(req, res) {
		let transporter = nodemailer.createTransport({
			sendmail: true
		});
		transporter.sendMail({
			from: req.body.email,
			to: 'contact@katie-starrett.com',
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