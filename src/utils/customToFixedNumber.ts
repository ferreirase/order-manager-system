export default function customToFixed(num: number, fixed: number): number {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');

  return Number(num.toString().match(re)[0]);
}
