const header: HTMLElement | null = document.getElementById("header");
let ticking: boolean = false;

function updateShadow(): void {
  if (!header) {
    return;
  }
  header.classList.toggle("scrolled", window.scrollY > 0);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateShadow);
      ticking = true;
    }
  },
  { passive: true },
);

updateShadow();
