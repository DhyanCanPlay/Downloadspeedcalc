function calculateDownloadTime() {
  const fileSize = parseFloat(document.getElementById('file-size').value);
  const fileSizeUnit = document.getElementById('file-size-unit').value;
  const downloadSpeed = parseFloat(document.getElementById('download-speed').value);
  const downloadSpeedUnit = document.getElementById('download-speed-unit').value;
  const speedUnit = document.getElementById('speed-unit').value;

  let totalBytes = fileSize;
  if (fileSizeUnit === 'GB') {
    totalBytes *= 1024 * 1024 * 1024;
  } else if (fileSizeUnit === 'MB') {
    totalBytes *= 1024 * 1024;
  }

  let bitsPerSecond = downloadSpeed;
  if (downloadSpeedUnit === 'Gbit') {
    bitsPerSecond *= 1024 * 1024 * 1024;
  } else if (downloadSpeedUnit === 'Mbit') {
    bitsPerSecond *= 1024 * 1024;
  }

  let downloadTimeSeconds = totalBytes * 8 / bitsPerSecond;

  let hours = Math.floor(downloadTimeSeconds / 3600);
  let minutes = Math.floor((downloadTimeSeconds % 3600) / 60);
  let seconds = Math.floor(downloadTimeSeconds %
