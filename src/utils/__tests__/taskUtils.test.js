import { getTaskCount } from "../taskUtils";

describe("getTaskCount", () => {
  const todos = [
    { id: 1, content: "Buy milk", completed: true },
    { id: 2, content: "Walk dog", completed: false },
    { id: 3, content: "Write code", completed: true },
  ];

  test("returns total count when filter is 'all'", () => {
    expect(getTaskCount(todos, "all")).toBe(3);
  });

  test("returns total count when no filter is passed (default)", () => {
    expect(getTaskCount(todos)).toBe(3);
  });

  test("returns completed count when filter is 'completed'", () => {
    expect(getTaskCount(todos, "completed")).toBe(2);
  });

  test("returns pending count when filter is 'pending'", () => {
    expect(getTaskCount(todos, "pending")).toBe(1);
  });

  test("returns 0 for an empty array", () => {
    expect(getTaskCount([], "all")).toBe(0);
  });

  test("returns 0 when input is not an array", () => {
    expect(getTaskCount(null, "all")).toBe(0);
    expect(getTaskCount(undefined, "all")).toBe(0);
    expect(getTaskCount("not an array", "all")).toBe(0);
  });

  test("falls back to 'all' behavior for an unrecognized filter value", () => {
    expect(getTaskCount(todos, "bogus-filter")).toBe(3);
  });
});