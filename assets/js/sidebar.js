(function () {
  var root = document.documentElement;
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  var backdrop = document.getElementById("sidebar-backdrop");
  if (!sidebar || !toggle) return;

  function setOpen(open) {
    root.classList.toggle("sidebar-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    sidebar.setAttribute("aria-hidden", String(!open));
    if (backdrop) backdrop.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    setOpen(!root.classList.contains("sidebar-open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      setOpen(false);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && root.classList.contains("sidebar-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  setOpen(false);
})();
