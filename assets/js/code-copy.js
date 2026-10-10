document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("div.highlight").forEach(function (block) {
    var pre = block.querySelector("pre");
    if (!pre) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy";
    btn.setAttribute("aria-label", "Copy code");
    btn.textContent = "copy";
    btn.addEventListener("click", function () {
      var text = pre.innerText.replace(/\n$/, "");
      navigator.clipboard.writeText(text).then(
        function () {
          btn.textContent = "copied";
          setTimeout(function () {
            btn.textContent = "copy";
          }, 1500);
        },
        function () {
          btn.textContent = "error";
          setTimeout(function () {
            btn.textContent = "copy";
          }, 1500);
        }
      );
    });
    block.appendChild(btn);
  });
});
