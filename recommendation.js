function getRecommendation(input) {
  // Simple decision logic
  if (input.temperature > 25 && input.humidity > 60) {
    return "Rice";
  } else if (input.ph >= 6 && input.ph <= 7.5 && input.rainfall < 100) {
    return "Wheat";
  } else if (input.temperature < 20) {
    return "Potato";
  } else if (input.humidity < 40) {
    return "Millet";
  }
  return "Maize";
}
