(() => {
'use strict';
const p = window.PROFILE;
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags = items => `<div class="tags">${items.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`;
$('projects-list').innerHTML = p.projects.map(x=>`<article class="project" id="project-${esc(x.id)}"><div class="project-heading"><h3><a href="#projects/${esc(x.id)}">${esc(x.title)}</a></h3><time>${esc(x.period)}</time></div><p class="project-context">${esc(x.context)}</p><p class="project-summary">${esc(x.summary)}</p>${tags(x.tags)}<div class="metrics">${x.metrics.map(m=>`<span class="metric"><strong>${esc(m[0])}</strong>${esc(m[1])}</span>`).join('')}</div><details><summary>技术细节</summary><div class="detail-body">${x.details.map(d=>`<div class="detail-item"><h4>${esc(d[0])}</h4><p>${esc(d[1])}</p></div>`).join('')}</div></details></article>`).join('');
function timeline(items) {
 return items.map(x=>`<article class="timeline-item"><div class="timeline-heading"><h4>${esc(x.title)}</h4><time>${esc(x.period)}</time></div><p class="timeline-role">${esc(x.role)}</p><p class="timeline-detail">${esc(x.detail)}</p>${x.bullets?`<details><summary>工作内容</summary><ul>${x.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></details>`:''}</article>`).join('');
}
$('work').innerHTML=timeline(p.work);
$('education').innerHTML=timeline(p.education);
$('skill-list').innerHTML=p.skills.map(s=>`<article class="skill"><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p>${tags(s.items)}</article>`).join('');
$('copyright-year').textContent=new Date().getFullYear();
function openProject() {
 const id=location.hash.slice(1).split('/');
 if(id[0]!=='projects'||!p.projects.some(x=>x.id===id[1]))return;
 const card=$(`project-${id[1]}`);card.querySelector('details').open=true;
 card.scrollIntoView({block:'start'});
}
window.addEventListener('hashchange',openProject);
document.addEventListener('click',event=>{
 const link=event.target.closest('a');
 if(link && link.getAttribute('href')===location.hash && location.hash.startsWith('#projects/')){event.preventDefault();openProject();}
});
openProject();
if('IntersectionObserver' in window) {
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){if(!entry.isIntersecting)continue;
   document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  }
 },{rootMargin:'-15% 0px -55% 0px'});
 document.querySelectorAll('main>section[id]').forEach(section=>observer.observe(section));
}
})();
