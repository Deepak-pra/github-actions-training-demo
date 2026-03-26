import { getEnvironmentData } from "../src/env";

test("environment data returns correct keys", () => {
  const data = getEnvironmentData();
  expect(data).toHaveProperty("environment");
  expect(data).toHaveProperty("version");
  expect(data).toHaveProperty("timestamp");
  expect(data).toHaveProperty("commitSha");
});