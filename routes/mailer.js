const mailerController = require("../controller/mailerController.js");

module.exports = function(app) {
    app.post("/contact/send", mailerController.send);
};