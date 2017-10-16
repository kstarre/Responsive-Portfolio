$(document).ready(function() {

	$("#contact-form").on("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		$(".my-alert").hide();
		var contactData = $("#contact-form").serialize();
		sendMessage(contactData);
	}

	function sendMessage(data) {
		$.post("/contact/send", data, function(results) {
			if (results.accepted) {
				handleSuccess();
			} else {
				handleError();
			}
		});
	}

	function handleSuccess() {
		$(".my-alert-success").show();
	}

	function handleError() {
		$(".my-alert-danger").show();
	}

});