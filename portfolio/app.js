'use strict';
const p = window.PROFILE;
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e = escapeHTML;
let artSequence = 0;
function art(kind) {
 const uid = 'art-' + (++artSequence);
 const palette = {home:['#102c3d','#33d3c0'], agents:['#25243f','#b5a1fa'], engine:['#302d28','#edba73']}[kind];
 const node = (x,y,w,label) => `<rect x="${x}" y="${y}" width="${w}" height="27" rx="5" fill="${palette[1]}" fill-opacity=".12" stroke="${palette[1]}" stroke-opacity=".55"/><text x="${x+w/2}" y="${y+17}" text-anchor="middle" fill="#f1f8ff" font-family="Arial,sans-serif" font-size="10">${label}</text>`;
 const diagrams = {
 home: `<path d="M92 76h35m65 0h35M260 90v25H65V90" fill="none" stroke="#33d3c0" stroke-width="1.4" stroke-dasharray="4 4"/>${node(28,62,64,'PLAN')}${node(127,62,65,'ACT')}${node(227,62,66,'REFLECT')}<path d="M160 115v18m-53 0h106" fill="none" stroke="#33d3c0" stroke-opacity=".5"/>${node(69,133,74,'MCP Tools')}${node(174,133,76,'Memory')}<circle cx="159" cy="76" r="39" fill="none" stroke="#33d3c0" stroke-opacity=".13"/>`,
 agents: `<path d="M160 53L82 125h156L160 53zm0 0v47m0 0-78 25m78-25 78 25" fill="none" stroke="#b5a1fa" stroke-width="1.3" stroke-dasharray="4 4"/><circle cx="160" cy="97" r="18" fill="#39324e" stroke="#b5a1fa"/><text x="160" y="101" text-anchor="middle" fill="#e8deff" font-family="Arial" font-size="9">A2A</text>${node(121,27,78,'Planner')}${node(38,123,88,'Builder')}${node(197,123,88,'Reviewer')}`,
 engine: `<path d="M40 95h240M40 130h240" stroke="#edba73" stroke-opacity=".12"/>${[38,78,118,158,198,238].map((x,i)=>`<rect x="${x}" y="${129-[35,49,42,73,84,106][i]}" width="25" height="${[35,49,42,73,84,106][i]}" rx="3" fill="#edba73" fill-opacity="${.22+i*.13}"/>`).join('')}<path d="M44 85l44-19 38 10 42-33 44-13 41-15" fill="none" stroke="#ffda9d" stroke-width="2"/><text x="160" y="157" text-anchor="middle" fill="#ead9bd" font-family="Arial" font-size="10" letter-spacing="2">RETRIEVE → RANK → PRICE</text>`
 };
 return `<div class="art art-${kind}"><svg viewBox="0 0 320 180" aria-hidden="true"><defs><pattern id="${uid}" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="${palette[1]}" opacity=".19"/></pattern></defs><rect width="320" height="180" fill="${palette[0]}"/><rect width="320" height="180" fill="url(#${uid})"/>${diagrams[kind]}</svg></div>`;
}
$('interests').innerHTML=p.interests.map(x=>'<span>'+e(x)+'</span>').join('');
$('bio').innerHTML=p.bio.map(x=>'<p>'+e(x).replace(/AI Agent 基础设施|全栈开发|新加坡国立大学|南京大学|腾讯微信事业群|高级软件工程师/g, word=>'<strong>'+word+'</strong>')+'</p>').join('');
$('copyright-year').textContent=new Date().getFullYear();
$('featured').innerHTML=p.projects.map(x=>'<a class="featured-card" href="#projects/'+e(x.id)+'">'+art(x.art)+'<div class="featured-copy"><span class="project-kind">'+e(x.context)+'<span class="card-arrow">↗</span></span><h3>'+e(x.title)+'</h3><p>'+e(x.summary)+'</p><div class="featured-tags">'+x.tags.slice(0,3).map(t=>'<span>'+e(t)+'</span>').join('')+'</div></div><div class="featured-result"><strong>'+e(x.metrics[0][0])+'</strong><span>'+e(x.metrics[0][1])+'</span></div></a>').join('');
const categories=['全部',...new Set(p.projects.map(x=>x.category))];
let category='全部';
$('filters').innerHTML=categories.map(x=>'<button type="button" data-category="'+e(x)+'" aria-pressed="'+(x===category)+'">'+e(x)+'</button>').join('');
function renderProjects(){
 const q=$('search').value.trim().toLocaleLowerCase();
 const list=p.projects.filter(x=>(category==='全部'||x.category===category)&&[x.title,x.category,x.summary,...x.tags].join(' ').toLocaleLowerCase().includes(q));
 $('results-count').textContent='共 '+list.length+' 个项目';
 $('projects-list').innerHTML=list.length?list.map(x=>'<article class="project-row" id="project-'+e(x.id)+'">'+art(x.art)+'<div><div class="project-meta"><span>'+e(x.context)+'</span><span>'+e(x.period)+'</span></div><h3>'+e(x.title)+'</h3><p class="project-summary">'+e(x.summary)+'</p><div class="tags">'+x.tags.map(t=>'<span>'+e(t)+'</span>').join('')+'</div><div class="metrics">'+x.metrics.map(([n,l])=>'<div class="metric"><strong>'+e(n)+'</strong><span>'+e(l)+'</span></div>').join('')+'</div><details><summary>实现细节</summary><div class="project-details">'+x.details.map(([t,d])=>'<h4>'+e(t)+'</h4><p>'+e(d)+'</p>').join('')+'</div></details></div></article>').join(''):'<p class="empty-state">没有匹配的项目，试试其他关键词或选择「全部」。</p>';
}
$('filters').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;category=button.dataset.category;for(const b of $('filters').querySelectorAll('button'))b.setAttribute('aria-pressed',String(b===button));renderProjects();});
$('search').addEventListener('input',renderProjects);
function timeline(items){return items.map(x=>'<article class="timeline-entry"><div class="timeline-heading"><h3>'+e(x.title)+'</h3><time>'+e(x.period)+'</time></div><p class="timeline-role">'+e(x.role)+'</p><p class="timeline-detail">'+e(x.detail)+'</p>'+(x.bullets?'<ul>'+x.bullets.map(t=>'<li>'+e(t)+'</li>').join('')+'</ul>':'')+'</article>').join('');}
$('work').innerHTML=timeline(p.work);$('education').innerHTML=timeline(p.education);
$('skill-list').innerHTML=p.skills.map(x=>'<article class="skill-row"><span class="skill-number">'+e(x.number)+'</span><div><h3>'+e(x.title)+'</h3><p class="skill-subtitle">'+e(x.subtitle)+'</p></div><div><div class="skill-tags">'+x.items.map(t=>'<span>'+e(t)+'</span>').join('')+'</div><p class="skill-description">'+e(x.description)+'</p></div></article>').join('');
const validPages=['home','projects','experience','skills'];
function route(){
 const [requested,projectId]=location.hash.slice(1).split('/');const page=validPages.includes(requested)?requested:'home';
 for(const section of document.querySelectorAll('.page'))section.hidden=section.id!==page;
 for(const link of document.querySelectorAll('[data-page]')){if(link.dataset.page===page)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}
 if(page==='projects'&&projectId){category='全部';$('search').value='';for(const b of $('filters').querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.category===category));renderProjects();const article=$('project-'+projectId);if(article){article.querySelector('details').open=true;article.scrollIntoView({block:'center'});}}
 else if(document.documentElement.scrollTop>280)$('content').scrollIntoView({block:'start'});
}
renderProjects();route();window.addEventListener('hashchange',route);
document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();$('content').focus({preventScroll:true});$('content').scrollIntoView({block:'start'});});
