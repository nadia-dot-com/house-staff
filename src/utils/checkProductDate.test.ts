import { describe, expect, it } from "vitest";
import { checkProductDate } from "@/utils/checkProductDate";
import { NEW_PRODUCT_THRESHOLD_DAYS } from "@/config";

describe("checkProductDate", () => {
  it("should return false for data > newThresholdMs", () => {
    const oldData = new Date();
    oldData.setDate(oldData.getDate() - 100);

    expect(checkProductDate("2025-11-09T00:00:00.000Z")).toEqual(false);
  });
  it("should return true for data < newThresholdMs", () => {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    expect(checkProductDate(oneHourAgo.toISOString())).toBe(true);
  });
  it("should return true for a product just inside the threshold", () => {
    const thresholdMs = NEW_PRODUCT_THRESHOLD_DAYS * 24 * 60 * 60 * 1000;
    const oneHourMs = 60 * 60 * 1000;
    const justInsideThreshold = new Date(Date.now() - thresholdMs + oneHourMs);

    expect(checkProductDate(justInsideThreshold.toISOString())).toBe(true);
  });
});
