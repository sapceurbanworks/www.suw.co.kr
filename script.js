const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if(e.isIntersecting) e.target.classList.add('visible');
}), {threshold:.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
