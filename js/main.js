// ===== ANG SOLUTIONS — MAIN JS =====

document.addEventListener("DOMContentLoaded", function () {

  // ---- MOBILE MENU ----
  const toggle = document.getElementById("mobileMenuToggle");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");
  const close = document.getElementById("mobileClose");

  function openMenu() { menu.classList.add("open"); overlay.classList.add("open"); }
  function closeMenu() { menu.classList.remove("open"); overlay.classList.remove("open"); }

  if (toggle) toggle.addEventListener("click", openMenu);
  if (close) close.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // Mobile accordion sub-menus
  document.querySelectorAll(".mobile-has-sub > a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sub = this.nextElementSibling;
      if (sub) sub.classList.toggle("open");
      const icon = this.querySelector("i");
      if (icon) icon.style.transform = sub.classList.contains("open") ? "rotate(180deg)" : "";
    });
  });

  // ---- BACK TO TOP ----
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (btn) btn.classList.toggle("show", window.scrollY > 300);
  });
  if (btn) btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---- ENQUIRY FORM SUBMIT ----
  const form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("enquiryName").value.trim();
      const phone = document.getElementById("enquiryPhone").value.trim();
      if (name.length < 2) { alert("Please enter your full name."); return; }
      if (!/^[0-9]{10}$/.test(phone)) { alert("Please enter a valid 10-digit mobile number."); return; }

      // In production: send via fetch() to your backend or email service
      // For now: show success toast and close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById("enquiryModal"));
      if (modal) modal.hide();
      const toast = new bootstrap.Toast(document.getElementById("successToast"));
      toast.show();
      form.reset();
    });
  }

  // ---- STICKY HEADER SHADOW ----
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    if (header) header.style.boxShadow = window.scrollY > 10 ? "0 4px 20px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.08)";
  });

  // ---- SEARCH BAR ----
  const searchInput = document.querySelector(".search-input");
  const searchBtn   = document.querySelector(".btn-search");
  function doHomeSearch() {
    const val = searchInput?.value.trim();
    if (!val) return;
    // Detect if we are already on category page (pages/ subfolder)
    const isCategory = window.location.pathname.includes('/pages/');
    const target = isCategory
      ? `category.html?search=${encodeURIComponent(val)}`
      : `pages/category.html?search=${encodeURIComponent(val)}`;
    window.location.href = target;
  }
  if (searchInput) {
    searchInput.addEventListener("keydown", e => { if (e.key === "Enter") doHomeSearch(); });
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", doHomeSearch);
  }

});
