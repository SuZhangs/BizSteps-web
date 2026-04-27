// Persist language choice
(function() {
  const saved = localStorage.getItem('lang') || 'zh';
  document.documentElement.className = saved;
})();

function toggleLang() {
  const current = document.documentElement.className === 'zh' ? 'zh' : 'en';
  const next = current === 'zh' ? 'en' : 'zh';
  document.documentElement.className = next;
  localStorage.setItem('lang', next);
  updateLangBtn();
}

function updateLangBtn() {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  btn.textContent = document.documentElement.className === 'zh' ? 'English' : '中文';
}

document.addEventListener('DOMContentLoaded', updateLangBtn);
