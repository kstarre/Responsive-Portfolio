$(document).ready(function() {

	$("#contact-form").on("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		var contactData = $("#contact-form").serialize();
		sendMessage(contactData);
	}

	function sendMessage(data) {
		$.post("/contact/send", data, function(results) {
			console.log(results);
		});
	}

});