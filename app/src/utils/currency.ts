export function toLocaleCurrency(value: number): string {
  return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}
