

const slider = document.getElementById("borderRadiusSlider");
const image = document.getElementById("image");

slider.addEventListener("input", function () {
  const borderRadiusValue = this.value;
  image.style.borderRadius = `${borderRadiusValue}%`;
});
