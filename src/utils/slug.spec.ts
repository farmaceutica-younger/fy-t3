import { describe, expect, test } from "vitest";
import { computePostPath } from "./slug";

describe("slug", () => {
  test.each([
    {
      title: "this is a, logn blog post",
      date: new Date("2021-01-01"),
      expected: "/blog/2021/01/this-is-a-logn-blog-post",
    },
    {
      title:
        "this is a, logn blog post that is ! too long to fit in a url and shoudl be truncated",
      date: new Date("2021-12-01"),
      expected: "/blog/2021/12/this-is-a-logn-blog-post-that-is-too-long-to-fi",
    },
  ])("computePostPath", ({ title, date, expected }) => {
    const actual = computePostPath(title, date);
    expect(actual).toBe(expected);
  });
});
