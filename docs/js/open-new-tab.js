document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav.md-nav__list a.md-nav__link");
  
    const openInNewTab = ["Scout Mini", "Scout_Hunter"];
  
    links.forEach(link => {
      const label = link.textContent.trim();
      if (openInNewTab.includes(label)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener");
      }
    });
  });
  