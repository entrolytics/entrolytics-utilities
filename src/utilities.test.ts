import { describe, expect, it, vi } from "vite-plus/test";

import { generateId } from "./hash";
import { retry } from "./retry";
import { buildQueryString, combineUrl } from "./url";

describe("utilities", () => {
  it("creates deterministic identifiers", () => {
    expect(generateId("website", 42)).toBe(generateId("website", 42));
    expect(generateId("website", 42)).not.toBe(generateId("website", 43));
  });

  it("serializes query values and combines URLs", () => {
    expect(buildQueryString({ active: true, page: 2, skip: undefined })).toBe("active=true&page=2");
    expect(combineUrl("https://example.test/", "/api", "events")).toBe(
      "https://example.test/api/events",
    );
  });

  it("retries failures and reports each retry", async () => {
    const operation = vi
      .fn<() => Promise<string>>()
      .mockRejectedValueOnce(new Error("temporary"))
      .mockResolvedValue("ok");
    const onRetry = vi.fn<(error: Error, attempt: number) => void>();
    await expect(retry(operation, { delayMs: 0, onRetry })).resolves.toBe("ok");
    expect(operation).toHaveBeenCalledTimes(2);
    expect(onRetry).toHaveBeenCalledOnce();
  });
});
