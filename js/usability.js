// WIDGET DE USABILIDAD

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const openAccessibility = document.getElementById("openAccessibility");
  const closeAccessibility = document.getElementById("closeAccessibility");
  const accessibilityPanel = document.getElementById("accessibilityPanel");

  const increaseText = document.getElementById("increaseText");
  const increaseLineHeight = document.getElementById("increaseLineHeight");
  const toggleContrast = document.getElementById("toggleContrast");
  const toggleGrayScale = document.getElementById("toggleGrayScale");
  const highlightLinks = document.getElementById("highlightLinks");
  const readingMask = document.getElementById("readingMask");
  const resetAccessibility = document.getElementById("resetAccessibility");

  const readingMaskOverlay = document.getElementById("readingMaskOverlay");

  // Abrir widget
  openAccessibility.addEventListener("click", function () {
    accessibilityPanel.classList.toggle("active");

    const isOpen = accessibilityPanel.classList.contains("active");
    openAccessibility.setAttribute("aria-expanded", isOpen);
  });

  // Cerrar widget
  closeAccessibility.addEventListener("click", function () {
    accessibilityPanel.classList.remove("active");
    openAccessibility.setAttribute("aria-expanded", "false");
  });

  // Texto: aumentar tamaño
  increaseText.addEventListener("click", function () {
    body.classList.toggle("large-text");
    increaseText.classList.toggle("active-option");
  });

  // Texto: aumentar altura de línea
  increaseLineHeight.addEventListener("click", function () {
    body.classList.toggle("large-line-height");
    increaseLineHeight.classList.toggle("active-option");
  });

  // Visual: alto contraste
  toggleContrast.addEventListener("click", function () {
    body.classList.toggle("high-contrast");
    toggleContrast.classList.toggle("active-option");
  });

  // Visual: escala de grises
  toggleGrayScale.addEventListener("click", function () {
    body.classList.toggle("gray-scale");
    toggleGrayScale.classList.toggle("active-option");
  });

  // Orientación: resaltar enlaces
  highlightLinks.addEventListener("click", function () {
    body.classList.toggle("highlight-links");
    highlightLinks.classList.toggle("active-option");
  });

  // Orientación: máscara de lectura
  readingMask.addEventListener("click", function () {
    readingMaskOverlay.classList.toggle("active");
    readingMask.classList.toggle("active-option");
  });

  // Restablecer todo
  resetAccessibility.addEventListener("click", function () {
    body.classList.remove(
      "large-text",
      "large-line-height",
      "high-contrast",
      "gray-scale",
      "highlight-links"
    );

    readingMaskOverlay.classList.remove("active");

    const activeButtons = document.querySelectorAll(".active-option");

    activeButtons.forEach(function (button) {
      button.classList.remove("active-option");
    });
  });
});