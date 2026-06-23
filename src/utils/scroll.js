let lenisInstance = null;

export function setLenis(instance) {
  lenisInstance = instance;
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -64 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}
