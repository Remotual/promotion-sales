export function toKebabCase(str) {
  let kebabCaseStr = str.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
  return kebabCaseStr;
}

export function kebabToNormalText(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}
