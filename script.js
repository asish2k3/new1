document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform custom validation here (if needed)

    // Submit the form programmatically after validation
    this.submit();
});
