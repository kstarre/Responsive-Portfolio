$(document).ready(function() {

	$("#contact-form").on("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		$(".alert").hide();
		var contactData = $("#contact-form").serialize();
		sendMessage(contactData);
	}

	function sendMessage(data) {
		$.post("/contact/send", data, function(results) {
			if (results.accepted) {
				location.reload();
				handleSuccess();
			} else {
				handleError();
			}
		});
	}

	function handleSuccess() {
		$(".alert-success").show();
	}

	function handleError() {
		$(".alert-danger").show();
	}

});