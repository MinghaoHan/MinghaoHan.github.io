(() => {
'use strict';
const p = window.PROFILE;
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags = items => `<div class="tags">${items.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`;
function visual(project, index) {
 const drawings = {
 home:'<div class="home-flow"><div class="flow-command">理解意图，连接家庭场景。</div><div class="flow-wire"></div><div class="flow-core"><b>Agent</b><span>PLAN → ACT<br>REFLECT → REPLAN</span></div><div class="flow-wire"></div><div class="flow-tools"><span>MCP / TOOLS</span><span>MEMORY</span><span>OpenUI</span></div></div>',
 agents:'<div class="agents-map"><div class="agent-node"><b>⌘</b>DISCOVER</div><div class="agent-node"><b>↗</b>DELIVER</div><div class="agent-node"><b>◇</b>REVIEW</div></div>',
 engine:'<div class="engine-map"><div class="engine-symbol"><i style="--h:35%"></i><i style="--h:55%"></i><i style="--h:75%"></i><i style="--h:100%"></i></div><div class="engine-number">10,000+<span>QUERIES / SECOND</span></div></div>'
 };
 const labels = {home:'INTENT → ACTION',agents:'INDEPENDENT AGENTS. SHARED PROGRESS.',engine:'BUILT FOR THROUGHPUT.'};
 return `<div class="project-visual visual-${esc(project.art)}" aria-hidden="true"><div class="visual-label"><span>0${index+1} / ${esc(project.category)}</span><span>↗</span></div>${drawings[project.art]}<div class="visual-caption">${labels[project.art]}</div></div>`;
}
let category = '全部项目';
const categories = ['全部项目', ...new Set(p.projects.map(x=>x.category))];
$('filters').innerHTML = categories.map(c=>`<button type="button" aria-pressed="${c===category}">${esc(c)}</button>`).join('');
function renderProjects() {
 const q = $('search').value.trim().toLowerCase();
 const selected = p.projects.filter(x => (category==='全部项目'||x.category===category) && [x.title,x.summary,x.context,x.category,...x.tags].join(' ').toLowerCase().includes(q));
 $('results-count').textContent = `${String(selected.length).padStart(2,'0')} PROJECT${selected.length===1?'':'S'} / ${q||category!=='全部项目'?'筛选结果':'精选工程实践'}`;
 $('projects-list').innerHTML = selected.length ? selected.map(x=>`<article class="project" id="project-${esc(x.id)}">${visual(x,p.projects.indexOf(x))}<div class="project-copy"><div class="project-meta"><span>${esc(x.context)}</span><time>${esc(x.period)}</time></div><h3><a href="#projects/${esc(x.id)}">${esc(x.title)} <span aria-hidden="true">↗</span></a></h3><p class="project-summary">${esc(x.summary)}</p>${tags(x.tags)}<div class="metrics">${x.metrics.map(m=>`<div class="metric"><strong>${esc(m[0])}</strong><small>${esc(m[1])}</small></div>`).join('')}</div><details><summary>探索实现细节</summary>${x.details.map(d=>`<div class="detail-item"><h4>${esc(d[0])}</h4><p>${esc(d[1])}</p></div>`).join('')}</details></div></article>`).join('') : '<p class="empty">没有找到匹配的项目，试试其他技术关键词。</p>';
}
function setCategory(next) {
 category=next;
 document.querySelectorAll('#filters button').forEach(b=>b.setAttribute('aria-pressed',String(b.textContent===category)));
}
$('filters').addEventListener('click',e=>{const b=e.target.closest('button');if(b){setCategory(b.textContent);renderProjects();}});
$('search').addEventListener('input',renderProjects);
function timeline(items) {
 return items.map(x=>`<article class="timeline-item"><div class="timeline-meta"><time>${esc(x.period)}</time><span class="timeline-role">${esc(x.role)}</span></div><h4>${esc(x.title)}</h4><p class="timeline-detail">${esc(x.detail)}</p>${x.bullets?`<ul>${x.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</article>`).join('');
}
$('work').innerHTML=timeline(p.work);
$('education').innerHTML=timeline(p.education);
$('skill-list').innerHTML=p.skills.map(s=>`<article class="skill"><span class="skill-number">/${esc(s.number)}</span><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p>${tags(s.items)}</article>`).join('');
$('copyright-year').textContent=new Date().getFullYear();
renderProjects();
function openProject() {
 const id=location.hash.slice(1).split('/');
 if(id[0]!=='projects'||!p.projects.some(x=>x.id===id[1]))return;
 setCategory('全部项目');$('search').value='';renderProjects();
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
