import "./style.css";
import { getEnvironmentData } from "./env.js";

const data = getEnvironmentData();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    <div class="container">
      <h1>GitHub Actions CI/CD Training Demo</h1>
      <p>This build was deployed to:</p>
      <h2 id="env">${data.environment}</h2>
      <p>Version: <span id="version">${data.version}</span></p>
      <p>Build Timestamp: <span id="timestamp">${data.timestamp}</span></p>
      <p>Commit SHA: <span id="sha">${data.commitSha}</span></p>
    </div>
  `;
});