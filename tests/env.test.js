import { getEnvironmentData } from "../src/env.js";

test("environment data returns correct keys", () => {
  const data = getEnvironmentData();
  expect(data.environment).toBeDefined();
  expect(data.version).toBeDefined();
  expect(data.timestamp).toBeDefined();
  expect(data.commitSha).toBeDefined();
});