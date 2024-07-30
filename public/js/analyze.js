
document.getElementById('resumeForm').addEventListener('submit', function (e) {
	e.preventDefault();
	const formData = new FormData(this);
	const fileInput = document.getElementById('resumeFile');
	const textInput = document.getElementById('resumeText').value.trim();
	const loadingSpinner = document.getElementById('loadingSpinner');
	const upArrowIcon = sendButton.querySelector('.fa-arrow-up');

	if (fileInput.files.length > 0) {
		formData.append('resumeFile', fileInput.files[0]);
	}


	if (!fileInput.files.length && !textInput) {
		Toastify({
			text: "Please provide resume text or share something about you.",
			duration: 5000,
			close: true,
			gravity: "bottom",
			position: "right",
			backgroundColor: "#ef4444",
		}).showToast();
		return;
	}

	// Show spinner, hide arrow, disable button
	upArrowIcon.classList.add('d-none');
	loadingSpinner.classList.remove('d-none');
	sendButton.disabled = true;

	axios.post('/process-data', formData)
		.then(response => {
			const formattedData = response.data.formattedData;
			updateResultsContainer(formattedData);
			loadSuggestions();

			loadingSpinner.classList.add('d-none');
			upArrowIcon.classList.remove('d-none');
			sendButton.disabled = false;

			Toastify({
				text: "Resume analyzed successfully!",
				duration: 3000,
				close: true,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#10b981",
			}).showToast();
		})
		.catch(error => {
			console.error('Error:', error);

			loadingSpinner.classList.add('d-none');
			upArrowIcon.classList.remove('d-none');
			sendButton.disabled = false;

			Toastify({
				text: `An error occurred: ${error.response?.data?.error || 'Unknown error'}`,
				duration: 5000,
				close: true,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#ef4444",
			}).showToast();
		});
});
