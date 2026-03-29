document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("env").innerText =
    "Environment: " + (window.DEPLOY_ENV || "LOCAL");

  document.getElementById("sha").innerText =
    "Commit SHA: " + (window.COMMIT_SHA || "LOCAL");

  document.getElementById("time").innerText =
    "Build Time: " + (window.BUILD_TIME || new Date().toISOString());
});