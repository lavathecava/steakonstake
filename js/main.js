(function () {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileNav.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  var form = document.querySelector(".rewards-form");
  if (form) {
    form.addEventListener("submit", function () {
      var input = form.querySelector("input[type=email]");
      if (input && input.value.trim()) {
        alert("Welcome to Stake Rewards! (Demo signup — no data sent.)");
        input.value = "";
      }
    });
  }
})();
