export function normalize(val) {
  // pixels / viewport total width x 100
  return `${(val / 1920) * 100}vw`;
}

export function vertical_normalize(val) {
  // pixels / viewport total height x 100
  return `${(val / 1080) * 100}vh`;
}
