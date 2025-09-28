function setupForm() {
  const form = document.getElementById("cropForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const input = {
      temperature: parseFloat(formData.get("temperature")),
      humidity: parseFloat(formData.get("humidity")),
      ph: parseFloat(formData.get("ph")),
      rainfall: parseFloat(formData.get("rainfall")),
    };
    const crop = getRecommendation(input);
    document.getElementById("recommendationResult").textContent =
      "Best crop for these conditions: " + crop;
  });
}
