const toHex = (val: number) => val.toString(16).padStart(2, '0');

const clamp = (val: number) => Math.max(0, Math.min(255, val));

export function shiftHexColor(hex: string, step: number): string {
  const cleaned = hex.startsWith('#') ? hex.slice(1) : hex;

  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);

  const shiftedR = clamp(r + step);
  const shiftedG = clamp(g + step);
  const shiftedB = clamp(b + step);

  return `#${toHex(shiftedR)}${toHex(shiftedG)}${toHex(shiftedB)}`;
}
