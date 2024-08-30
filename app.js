document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display files from GitHub
    fetchFiles();

    // Handle file upload
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        uploadFile();
    });
});

function fetchFiles() {
    // Make a request to the backend to get the list of files from GitHub
    // Display the files in #file-list
}

function uploadFile() {
    const fileInput = document.getElementById('file');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    // Make a POST request to the backend to upload the file to GitHub
    // Refresh the file list upon success
}
