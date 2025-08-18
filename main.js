import { print_projects } from './projects.js';

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

//--vCard answers---
//
['vcard','dockVcard','deskVcard'].forEach( id => {
  const a = document.getElementById(id);

  if(a)
    a.href='data:text/vcard;charset=utf-8,'+ encodeURIComponent(vcard);
});

document.querySelector('.projects-grid').innerHTML = print_projects();

function initThemeToggle() {
  const root = document.documentElement;
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const dark = saved ? saved === 'dark' : prefersDark;

  if(dark)
    root.classList.add('dark');

  const btn = document.getElementById('themeToggle');

  if(!btn)
    return;

  btn.setAttribute('aria-pressed', dark);

  btn.addEventListener('click', () => {
    const newDark = root.classList.toggle('dark');
    btn.setAttribute('aria-pressed', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  });
}

initThemeToggle();

//----Copy email and pop message
//
function popup_Msg(message) {
  document.getElementById('popup').textContent = message;
  document.getElementById('popup').hidden = false;
  setTimeout(()=> popup.hidden = true, 1400);
}

document.getElementById('copyEmail')?.addEventListener('click', async()=>{
  try{
    await navigator.clipboard.writeText(email);
    popup_Msg('E-Mail kopiert');
  } catch {}
});
//----------------------------

//----Dock functions----------
//
function showDock(){
  if(window.innerWidth < 900)
    document.querySelector('.dock-mobile').setAttribute('data-visible','true');
}

let dockShown = false;

function checkDock(){
  if(!dockShown && (document.documentElement.scrollTop||document.body.scrollTop) > 100)
    showDock(); dockShown=true;
}

window.addEventListener('scroll', checkDock, { passive:true });

if(window.innerWidth < 900){
  setTimeout(showDock, 700);
}
//----------------------------

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
