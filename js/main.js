document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const filterButtons = [...document.querySelectorAll('.filter-btn[data-filter]')];
  const projectCards = [...document.querySelectorAll('.project-grid .project-card[data-category]')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').trim().split(/\s+/).filter(Boolean);
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
    });
  });
  document.querySelectorAll('#year').forEach((el) => { el.textContent = new Date().getFullYear(); });
});
