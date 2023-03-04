import { toLocaleCurrency } from "./currency";

test("convert number to locale currency string", () => {
  const str = toLocaleCurrency(125500);
  expect(str).toBe("Rp 125.500,00");
});
