function showMetadata() {
  document.getElementById("env").innerText =
    "Environment: " + (window.DEPLOY_ENV || "LOCAL");

  document.getElementById("sha").innerText =
    "Commit: " + (window.COMMIT_SHA || "LOCAL");

  document.getElementById("timestamp").innerText =
    "Build Time: " + (window.BUILD_TIME || new Date().toISOString());
}

document.addEventListener("DOMContentLoaded", showMetadata);