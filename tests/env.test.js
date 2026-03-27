import { getEnvironmentData } from "../src/env.js";

test("env keys exist", () => {
  const d = getEnvironmentData();
  expect(d.environment).toBeDefined();
  expect(d.version).toBeDefined();
  expect(d.timestamp).toBeDefined();
  expect(d.commitSha).toBeDefined();
});