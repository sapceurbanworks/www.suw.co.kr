const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// v15 SPACE PROJECTS: photos remain visible; button toggles only project list.
document.querySelectorAll('[data-project-category]').forEach(category => {
  const button = category.querySelector('.space-project-toggle');
  if (!button) return;
  button.addEventListener('click', () => {
    const open = category.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
