import "./style.css";
import { getEnvironmentData } from "./env";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>GitHub Actions CI/CD Training Demo</h1>
    <p>This build was deployed to:</p>
    <h2 id="env"></h2>
    <p>Version: <span id="version"></span></p>
    <p>Build Timestamp: <span id="timestamp"></span></p>
    <p>Commit SHA: <span id="sha"></span></p>
  </div>
`;

const data = getEnvironmentData();

document.getElementById("env").textContent = data.environment;
document.getElementById("version").textContent = data.version;
document.getElementById("timestamp").textContent = data.timestamp;
document.getElementById("sha").textContent = data.commitSha;