export function generateRandomPosition(): [number, number, number] {
  const x = (Math.random() - 0.5) * 100;
  const y = (Math.random() - 0.5) * 60;
  const z = (Math.random() - 0.5) * 100 - 30;
  return [x, y, z];
}

export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ] : [1, 1, 1];
}