function normalize(value, min, max) {
  return (value - min) / (max - min);
}

function average(values) {
  const sum = values.reduce((a, b) => a + b, 0);
  return sum / values.length;
}

function maxValue(values) {
  return Math.max(...values);
}

function minValue(values) {
  return Math.min(...values);
}
