export function pow(x,n) {
  result = 2;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
