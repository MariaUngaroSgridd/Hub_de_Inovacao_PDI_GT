(() => {
  const mobileBreakpoint = window.matchMedia("(max-width: 768px)");
  const menus = document.querySelectorAll(".mobile-navigation");

  const syncMenuState = () => {
    menus.forEach((menu) => {
      menu.open = !mobileBreakpoint.matches;
    });
  };

  syncMenuState();
  mobileBreakpoint.addEventListener("change", syncMenuState);
})();
