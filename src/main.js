import "./style.css";
import { getEnvironmentData } from "./env.js";

document.addEventListener("DOMContentLoaded", () => {
  const data = getEnvironmentData();

  document.querySelector("#app").innerHTML = `
    <div class="container">
      <h1>GitHub Actions CI/CD Training Demo</h1>
      <h2>${data.environment}</h2>
      <p>Version: ${data.version}</p>
      <p>Timestamp: ${data.timestamp}</p>
      <p>Commit: ${data.commitSha}</p>
    </div>
  `;
});