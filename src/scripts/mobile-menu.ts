const menu: Element | null = document.querySelector(".menu");

menu?.addEventListener("click", () => {
  const isExpanded: boolean = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
