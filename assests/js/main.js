// Set dynamic year and simple local checklist persistence
(function () {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const checklist = document.querySelector('.checklist');
  if (!checklist || !window.localStorage) return;

  const key = 'siteforge-checklist';
  const saved = JSON.parse(localStorage.getItem(key) || '{}');

  checklist.querySelectorAll('input[type="checkbox"]').forEach((box, index) => {
    const id = String(index);
    if (saved[id]) box.checked = true;
    box.addEventListener('change', () => {
      saved[id] = box.checked;
      localStorage.setItem(key, JSON.stringify(saved));
    });
  });
})();
