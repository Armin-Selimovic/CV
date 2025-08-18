const root = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');

if(saved ? saved==='dark' : prefersDark) root.classList.add('dark');

const themeToggle = document.getElementById('themeToggle');

themeToggle?.addEventListener('click',()=>{
  root.classList.toggle('dark');
  const dark=root.classList.contains('dark');
  themeToggle.setAttribute('aria-pressed', String(dark));
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

const email = 'armin.selimovic24@gmail.com';
const phone = '+4367762873247';
const vcard = `BEGIN:VCARD
  VERSION:3.0
  FN:Armin Selimović
  TEL;TYPE=CELL:${phone}
  EMAIL:${email}
  ADR:;;Graz;;;AT
  TITLE:Aspiring Software Engineer
  END:VCARD`;
['vcard','dockVcard','deskVcard'].forEach(id=>{
  const a=document.getElementById(id);
  if(a) a.href='data:text/vcard;charset=utf-8,'+encodeURIComponent(vcard);
});

const toast = document.getElementById('toast');
function toastMsg(m){ toast.textContent=m; toast.hidden=false; setTimeout(()=>toast.hidden=true,1400); }
document.getElementById('copyEmail')?.addEventListener('click', async()=>{
  try{ await navigator.clipboard.writeText(email); toastMsg('E-Mail kopiert'); }catch{}
});

const dock = document.querySelector('.dock-mobile');
function showDock(){ if(window.innerWidth<900) dock.setAttribute('data-visible','true'); }
let dockShown=false;
function checkDock(){ if(!dockShown && (document.documentElement.scrollTop||document.body.scrollTop)>100){ showDock(); dockShown=true; } }
window.addEventListener('scroll', checkDock, { passive:true });
if(window.innerWidth<900){ setTimeout(showDock, 700); }


// Expand buttons
const openAllBtn = document.getElementById('expandAll');
const closeAllBtn = document.getElementById('collapseAll');

// Expand all details
openAllBtn.addEventListener('click', () => {
  document.querySelectorAll('details').forEach(detail => {
    detail.setAttribute('open', '');
  });
});

// Collapse all details
closeAllBtn.addEventListener('click', () => {
  document.querySelectorAll('details').forEach(detail => {
    detail.removeAttribute('open');
  });
});
