export function getEnvironmentData() {
return {
    environment: "local-development",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    commitSha: "LOCAL-SHA"
  };
}