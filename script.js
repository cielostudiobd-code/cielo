const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -45px 0px" });

revealItems.forEach(item => observer.observe(item));

const form = document.querySelector(".subscribe-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const oldText = button.textContent;
    button.textContent = "SUBSCRIBED";
    form.reset();
    setTimeout(() => button.textContent = oldText, 1800);
  });
}
