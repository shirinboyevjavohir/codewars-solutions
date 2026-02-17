function toFreud(string) {
  return string
    ? string
        .split(" ")
        .map(() => "sex")
        .join(" ")
    : "";
}
