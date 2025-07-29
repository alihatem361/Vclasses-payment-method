// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme") || "light";

// Set initial theme
document.documentElement.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Add interactivity for payment methods
document.querySelectorAll(".payment-method").forEach((method) => {
  method.addEventListener("click", function () {
    // Remove selected class from all methods
    document
      .querySelectorAll(".payment-method")
      .forEach((m) => m.classList.remove("selected"));
    // Add selected class to clicked method
    this.classList.add("selected");
  });
});

// Add click handlers for buttons
document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (confirm("هل أنت متأكد من حذف هذا العنصر؟")) {
      this.closest(".course-card").remove();
    }
  });
});

document.querySelector(".checkout-btn").addEventListener("click", function () {
  alert("جاري المعالجة...");
});

// Heart button toggle
document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const svg = this.querySelector("svg");
    if (this.classList.contains("active")) {
      svg.style.fill = "var(--brand-orange)";
    } else {
      svg.style.fill = "none";
    }
  });
});
