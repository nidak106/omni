function calculateDownloadTime(event) {
    event.preventDefault();

    var fileSizeInMB = parseFloat(document.getElementById("fileSize").value);
    var internetSpeedInMbps = parseFloat(document.getElementById("internetSpeed").value);

    if (isNaN(fileSizeInMB) || isNaN(internetSpeedInMbps) || fileSizeInMB <= 0 || internetSpeedInMbps <= 0) {
        document.getElementById("downloadTime").textContent = "Please enter valid values.";
    } else {
        var downloadTimeInSeconds = (fileSizeInMB * 8) / internetSpeedInMbps;
        var downloadTimeInMinutes = downloadTimeInSeconds / 60;

        document.getElementById("downloadTime").textContent = "Estimated Download Time: " + downloadTimeInMinutes.toFixed(2) + " minutes";
    }
}
