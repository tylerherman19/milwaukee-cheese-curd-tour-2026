const stops=[
{name:"Who's on Third",address:"1007 N Doctor M.L.K. Jr Dr",area:"Westown",style:"Lakefront Riverwest Stein beer-battered cheese curds",note:"Same street as Old World 3rd, renamed in 2022",lat:43.0431681,lng:-87.9146417,site:"https://whosonthirdmke.com/menu",map:"https://www.google.com/maps/search/?api=1&query=Who%27s+on+Third&query_place_id=ChIJC4Uvv3QZBYgRElnmPP7d1no"},
{name:"Pilot Project Brewing",address:"1128 N 9th St",area:"Brewery District",style:"Parmesan potato-crusted white cheddar curds",note:"Buttermilk chive crema",lat:43.0450,lng:-87.9224,site:"https://www.pilotprojectbrewing.com/milwaukeefood",map:"https://www.google.com/maps/search/?api=1&query=Pilot+Project+Brewing+-+Milwaukee&query_place_id=ChIJk1lTIIAZBYgRdjtxml1x8gY"},
{name:"Miller Time Pub & Grill",address:"509 W Wisconsin Ave",area:"Westown",style:"Famous buttermilk-battered local cheese curds",note:"Served with ranch and marinara",lat:43.038676,lng:-87.917750,site:"https://milwaukee.millertimepubandgrill.com/menu",map:"https://www.google.com/maps/search/?api=1&query=Miller+Time+Pub+%26+Grill&query_place_id=ChIJGUOIcp4ZBYgR2vim2UVlmMs"},
{name:"The Wicked Hop",address:"345 N Broadway",area:"Historic Third Ward",style:"Hand-breaded fried Wisconsin cheese curds",note:"Ranch or house-made marinara",lat:43.03488,lng:-87.90698,site:"https://www.thewickedhop.com/",map:"https://www.google.com/maps/search/?api=1&query=The+Wicked+Hop&query_place_id=ChIJ71JuoqYZBYgRRStD3vllXKo"},
{name:"Café Benelux",address:"346 N Broadway",area:"Historic Third Ward",style:"Hand-breaded Ellsworth white cheddar curds",note:"Yogurt buttermilk ranch or choice of sauce",lat:43.0348824,lng:-87.9069637,site:"https://cafebenelux.com/menus",map:"https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Benelux&query_place_id=ChIJZ_10J6QZBYgRjajwdJ3ukeg"},
{name:"Black Sheep MKE",address:"216 S 2nd St",area:"Walker's Point",style:"Pancake-battered white cheddar curds",note:"Powdered sugar and maple syrup",lat:43.028949,lng:-87.912312,site:"https://www.blacksheepmke.com/weekend-brunch/",map:"https://www.google.com/maps/search/?api=1&query=Black+Sheep+MKE&query_place_id=ChIJUwUkOr0ZBYgR6hjkkB4peRw"}
];
const directions=[
"https://www.google.com/maps/dir/?api=1&destination=1128+N+9th+St%2C+Milwaukee%2C+WI+53233%2C+USA&destination_place_id=ChIJk1lTIIAZBYgRdjtxml1x8gY&origin=1007+N+Doctor+M.L.K.+Jr+Dr%2C+Milwaukee%2C+WI+53203%2C+USA&origin_place_id=ChIJC4Uvv3QZBYgRElnmPP7d1no&travelmode=walking",
"https://www.google.com/maps/dir/?api=1&destination=509+W+Wisconsin+Ave%2C+Milwaukee%2C+WI+53203%2C+USA&destination_place_id=ChIJGUOIcp4ZBYgR2vim2UVlmMs&origin=1128+N+9th+St%2C+Milwaukee%2C+WI+53233%2C+USA&origin_place_id=ChIJk1lTIIAZBYgRdjtxml1x8gY&travelmode=walking",
"https://www.google.com/maps/dir/?api=1&destination=345+N+Broadway%2C+Milwaukee%2C+WI+53202%2C+USA&destination_place_id=ChIJ71JuoqYZBYgRRStD3vllXKo&origin=509+W+Wisconsin+Ave%2C+Milwaukee%2C+WI+53203%2C+USA&origin_place_id=ChIJGUOIcp4ZBYgR2vim2UVlmMs&travelmode=walking",
"https://www.google.com/maps/dir/?api=1&destination=346+N+Broadway%2C+Milwaukee%2C+WI+53202%2C+USA&destination_place_id=ChIJZ_10J6QZBYgRjajwdJ3ukeg&origin=345+N+Broadway%2C+Milwaukee%2C+WI+53202%2C+USA&origin_place_id=ChIJ71JuoqYZBYgRRStD3vllXKo&travelmode=walking",
"https://www.google.com/maps/dir/?api=1&destination=216+S+2nd+St%2C+Milwaukee%2C+WI+53204%2C+USA&destination_place_id=ChIJUwUkOr0ZBYgR6hjkkB4peRw&origin=346+N+Broadway%2C+Milwaukee%2C+WI+53202%2C+USA&origin_place_id=ChIJZ_10J6QZBYgRjajwdJ3ukeg&travelmode=walking"];
const walks=['0.6 mi · ~14 min','0.7 mi · ~16 min','0.8 mi · ~18 min','131 ft · ~1 min','0.6 mi · ~14 min'];
const stopList=document.querySelector('#stop-list');stops.forEach((s,i)=>{stopList.insertAdjacentHTML('beforeend',`<article class="stop"><div class="stop-num">${String(i+1).padStart(2,'0')}</div><div><p class="neighborhood">${s.area}${i===0?' · Start at 2:00 PM':''}</p><h3>${s.name}</h3><a href="${s.map}" target="_blank" rel="noopener">${s.address}, Milwaukee, WI ↗</a>${directions[i]?`<a class="leg-nav" href="${directions[i]}" target="_blank" rel="noopener">Walk to stop ${i+2}: ${walks[i]} →</a>`:''}</div><div class="style-pill"><span class="style-label">The style</span><p>${s.style}</p><small>${s.note}</small></div><a class="venue-link" href="${s.site}" target="_blank" rel="noopener">Check venue ↗</a></article>`)});
const scoreRoot=document.querySelector('#scorecards'),metrics=['Crunch','Pull','Seasoning','Sauce','Score'];
const params=new URLSearchParams(location.search);let scores={};
try{scores=JSON.parse(localStorage.getItem('mke-curd-scores')||'{}')}catch(e){}
if(params.has('ratings')){try{scores=JSON.parse(decodeURIComponent(atob(params.get('ratings'))));localStorage.setItem('mke-curd-scores',JSON.stringify(scores));history.replaceState({},'',location.pathname+'#scorecard')}catch(e){}}
function values(d){return metrics.map(m=>Number(d[m.toLowerCase()]||0)).filter(Boolean)}
function average(d){const v=values(d);return v.length?v.reduce((a,b)=>a+b,0)/v.length:0}
function renderScores(){scoreRoot.innerHTML='';stops.forEach((s,i)=>{const data=scores[i]||{},avg=average(data);scoreRoot.insertAdjacentHTML('beforeend',`<article class="score-card" data-stop="${i}"><div class="score-head"><div class="badge">${i+1}</div><div><h3>${s.name}</h3><span class="total">${avg?avg.toFixed(1):'—'}</span></div></div><div class="metrics">${metrics.map(m=>{const k=m.toLowerCase();return `<div class="metric"><label>${m}<output>${data[k]||'—'}</output></label><div class="rating-buttons" role="group" aria-label="${s.name} ${m}">${[1,2,3,4,5].map(n=>`<button type="button" data-key="${k}" data-value="${n}" class="${Number(data[k])===n?'selected':''}" aria-label="${m} ${n} out of 5">${n}</button>`).join('')}</div></div>`}).join('')}</div></article>`)});updateSummary()}
function save(){localStorage.setItem('mke-curd-scores',JSON.stringify(scores));document.querySelector('#save-state').textContent='Saved on this device ✓'}
scoreRoot.addEventListener('click',e=>{const b=e.target.closest('.rating-buttons button');if(!b)return;const card=b.closest('.score-card'),i=card.dataset.stop;scores[i]=scores[i]||{};scores[i][b.dataset.key]=b.dataset.value;save();b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('selected',x===b));b.closest('.metric').querySelector('output').textContent=b.dataset.value;card.querySelector('.total').textContent=average(scores[i]).toFixed(1);updateSummary();queueSync()});
scoreRoot.addEventListener('input',e=>{if(e.target.tagName!=='TEXTAREA')return;const i=e.target.closest('.score-card').dataset.stop;scores[i]=scores[i]||{};scores[i].note=e.target.value;save()});
function updateSummary(){const ranked=stops.map((s,i)=>({i,name:s.name,avg:average(scores[i]||{}),count:values(scores[i]||{}).length})).sort((a,b)=>(b.avg-a.avg)||(a.i-b.i));const leader=document.querySelector('#leaderboard h3'),list=document.querySelector('#ranking');const scored=ranked.filter(x=>x.count);leader.textContent=scored.length?`${scored[0].name} leads at ${scored[0].avg.toFixed(1)} / 5.`:'All six start even.';list.innerHTML=ranked.map((x,n)=>`<li><span><b>${n+1}</b> ${x.name}</span><strong>${x.count?x.avg.toFixed(1):'—'}</strong></li>`).join('');const all=ranked.flatMap(x=>values(scores[x.i]||{})),overall=all.length?all.reduce((a,b)=>a+b,0)/all.length:0,complete=ranked.filter(x=>x.count===5).length;document.querySelector('#tour-summary').innerHTML=`<p class="eyebrow">Tour-wide summary</p><h3>${overall?overall.toFixed(1)+' / 5 overall':'No stops scored yet.'}</h3><p>${ranked.length} of 6 stops started · ${complete} fully rated · ${all.length} quality ratings saved.</p>`}
function plainSummary(){const ranked=stops.map((s,i)=>({name:s.name,avg:average(scores[i]||{})})).filter(x=>x.avg).sort((a,b)=>b.avg-a.avg);const all=Object.values(scores).flatMap(values),overall=all.length?(all.reduce((a,b)=>a+b,0)/all.length).toFixed(1):'—';return `Milwaukee Cheese Curd Tour 2026\nOverall: ${overall}/5\n${ranked.map((x,i)=>`${i+1}. ${x.name} — ${x.avg.toFixed(1)}/5`).join('\n')}`}
async function copy(text,button){try{await navigator.clipboard.writeText(text);const old=button.textContent;button.textContent='Copied ✓';setTimeout(()=>button.textContent=old,1600)}catch(e){prompt('Copy this:',text)}}
document.querySelector('#copy-summary').addEventListener('click',e=>copy(plainSummary(),e.currentTarget));
document.querySelector('#share-scores').addEventListener('click',async e=>{const encoded=btoa(encodeURIComponent(JSON.stringify(scores))),url=`${location.origin}${location.pathname}?ratings=${encoded}#scorecard`,text=plainSummary();if(navigator.share){try{await navigator.share({title:'Milwaukee Cheese Curd Tour 2026',text,url});return}catch(err){}}copy(url,e.currentTarget)});
document.querySelector('#reset-scores').addEventListener('click',()=>{if(confirm('Clear every rating and tasting note?')){scores={};localStorage.removeItem('mke-curd-scores');renderScores()}});renderScores();

// Shared backend: one row per browser identity, so refreshes update rather than double-count.
const API='https://fptyiklgiagjegufexvq.supabase.co/rest/v1/curd_tour_ratings';
const APIKEY='sb_publishable_I4PlipLTVnuRS3DRmUyWzA_rB5rp0qJ';
const participantId=localStorage.getItem('curd-participant-id')||crypto.randomUUID();localStorage.setItem('curd-participant-id',participantId);
const nameInput=document.querySelector('#rater-name'),syncState=document.querySelector('#sync-state');nameInput.value=localStorage.getItem('curd-rater-name')||'';
let syncTimer;
async function syncShared(){const name=nameInput.value.trim();if(!name){syncState.textContent='Enter your name to join group results';return}syncState.textContent='Syncing...';try{const res=await fetch(`${API}?on_conflict=tour_id,participant_id`,{method:'POST',headers:{apikey:APIKEY,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({tour_id:'milwaukee-2026',participant_id:participantId,participant_name:name,scores})});if(!res.ok)throw Error(res.status);syncState.textContent='Synced with the group ✓';await loadGroup()}catch(e){syncState.textContent='Offline · saved here, will retry';}}
function queueSync(){clearTimeout(syncTimer);syncTimer=setTimeout(syncShared,700)}
nameInput.addEventListener('input',()=>{localStorage.setItem('curd-rater-name',nameInput.value);queueSync()});
scoreRoot.addEventListener('click',e=>{if(e.target.closest('.rating-buttons button'))queueSync()});scoreRoot.addEventListener('input',e=>{if(e.target.tagName==='TEXTAREA')queueSync()});window.addEventListener('online',syncShared);
async function loadGroup(){try{const r=await fetch(`${API}?tour_id=eq.milwaukee-2026&select=participant_id,participant_name,scores,updated_at`,{headers:{apikey:APIKEY}});if(!r.ok)throw Error(r.status);const people=await r.json(),byStop=stops.map((s,i)=>{const rows=people.map(p=>({p,d:p.scores?.[i]})).filter(x=>values(x.d||{}).length);const q={};metrics.forEach(m=>{const vs=rows.map(x=>Number(x.d[m.toLowerCase()]||0)).filter(Boolean);q[m]=vs.length?vs.reduce((a,b)=>a+b,0)/vs.length:0});const vals=Object.values(q).filter(Boolean);return{name:s.name,raters:rows.length,avg:vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0,q}}).filter(x=>x.raters).sort((a,b)=>b.avg-a.avg);document.querySelector('#group-heading').textContent=byStop.length?`${byStop[0].name} leads at ${byStop[0].avg.toFixed(1)} / 5.`:'No group scores yet.';document.querySelector('#group-count').textContent=`${people.length} ${people.length===1?'rater':'raters'} synced · averages show rater count per stop`;document.querySelector('#group-ranking').innerHTML=byStop.map((x,i)=>`<li><span><b>${i+1}</b> ${x.name}<small> · ${x.raters} ${x.raters===1?'rater':'raters'} · C ${x.q.Crunch.toFixed(1)} / P ${x.q.Pull.toFixed(1)} / Se ${x.q.Seasoning.toFixed(1)} / Sa ${x.q.Sauce.toFixed(1)} / Sc ${x.q.Score.toFixed(1)}</small></span><strong>${x.avg.toFixed(1)}</strong></li>`).join('')}catch(e){document.querySelector('#group-heading').textContent='Group results unavailable offline';document.querySelector('#group-count').textContent='Your scores still save on this device.'}}
loadGroup();if(nameInput.value)syncShared();

// Interactive route map
function initMap(){
  const mapEl=document.querySelector('#map');if(!mapEl||typeof L==='undefined')return;
  const map=L.map(mapEl,{scrollWheelZoom:false,fadeAnimation:false,zoomAnimation:false,markerZoomAnimation:false});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const bounds=[];
  stops.forEach((s,i)=>{
    const icon=L.divIcon({className:'number-marker',html:`<span>${i+1}</span>`,iconSize:[32,32],iconAnchor:[16,16]});
    L.marker([s.lat,s.lng],{icon}).addTo(map).bindPopup(`<h3>${s.name}</h3><p>${s.style}</p>`);
    bounds.push([s.lat,s.lng]);
  });
  mapEl.addEventListener('mouseenter',()=>map.scrollWheelZoom.enable());
  mapEl.addEventListener('mouseleave',()=>map.scrollWheelZoom.disable());
  const legsReady=fetch('routes.json').then(r=>r.json()).catch(()=>[]);
  const fontsReady=document.fonts?document.fonts.ready:Promise.resolve();
  Promise.all([legsReady,fontsReady]).then(([legs])=>{
    legs.forEach(leg=>{L.polyline(leg.coords,{color:'#df5b2a',weight:4,opacity:.85}).addTo(map);leg.coords.forEach(c=>bounds.push(c))});
    map.fitBounds(bounds,{padding:[30,30]});
  });
}
initMap();

// Admin panel
const ADMIN_PW='CHEESE';
const adminModal=document.querySelector('#admin-modal'),adminOpen=document.querySelector('#admin-open'),adminClose=document.querySelector('#admin-close'),adminLoginEl=document.querySelector('#admin-login'),adminBody=document.querySelector('#admin-panel-body'),adminPwInput=document.querySelector('#admin-password'),adminError=document.querySelector('#admin-error'),adminTable=document.querySelector('#admin-table');
adminOpen.addEventListener('click',()=>{adminModal.hidden=false;adminPwInput.value='';adminError.textContent='';adminLoginEl.hidden=false;adminBody.hidden=true;adminPwInput.focus()});
adminClose.addEventListener('click',()=>adminModal.hidden=true);
adminModal.addEventListener('click',e=>{if(e.target===adminModal)adminModal.hidden=true});
function adminLogin(){if(adminPwInput.value===ADMIN_PW){adminLoginEl.hidden=true;adminBody.hidden=false;loadAdminTable()}else{adminError.textContent='Wrong password'}}
document.querySelector('#admin-submit').addEventListener('click',adminLogin);
adminPwInput.addEventListener('keydown',e=>{if(e.key==='Enter')adminLogin()});
async function loadAdminTable(){
  adminTable.textContent='Loading…';
  try{
    const r=await fetch(`${API}?tour_id=eq.milwaukee-2026&select=participant_id,participant_name,scores`,{headers:{apikey:APIKEY}});
    if(!r.ok)throw Error(r.status);
    const people=await r.json();
    if(!people.length){adminTable.innerHTML='<p>No group scores yet.</p>';return}
    adminTable.innerHTML=`<table class="admin-grid"><thead><tr><th>Rater</th>${stops.map((s,i)=>`<th>${s.name}<button type="button" class="admin-col-clear" data-stop="${i}">Clear all</button></th>`).join('')}<th></th></tr></thead><tbody>${people.map(p=>`<tr><td>${p.participant_name||'(unnamed)'}</td>${stops.map((s,i)=>{const avg=average(p.scores?.[i]||{});return `<td>${avg?`${avg.toFixed(1)} <button type="button" class="admin-cell-clear" data-stop="${i}" data-pid="${p.participant_id}" aria-label="Clear ${p.participant_name}'s ${s.name} score">×</button>`:'—'}</td>`}).join('')}<td><button type="button" class="admin-row-remove" data-pid="${p.participant_id}">Remove rater</button></td></tr>`).join('')}</tbody></table>`;
  }catch(e){adminTable.innerHTML='<p>Could not load group data.</p>'}
}
document.querySelector('#admin-wipe-all').addEventListener('click',async()=>{
  if(!confirm('Delete ALL group scores? This cannot be undone.'))return;
  await fetch(`${API}?tour_id=eq.milwaukee-2026`,{method:'DELETE',headers:{apikey:APIKEY}});
  loadAdminTable();loadGroup();
});
adminTable.addEventListener('click',async e=>{
  const colBtn=e.target.closest('.admin-col-clear'),cellBtn=e.target.closest('.admin-cell-clear'),rowBtn=e.target.closest('.admin-row-remove');
  if(colBtn){
    const stopI=colBtn.dataset.stop;
    if(!confirm(`Clear everyone's scores for ${stops[stopI].name}?`))return;
    const r=await fetch(`${API}?tour_id=eq.milwaukee-2026&select=participant_id,scores`,{headers:{apikey:APIKEY}});
    const people=await r.json();
    await Promise.all(people.filter(p=>p.scores&&p.scores[stopI]).map(p=>{const s={...p.scores};delete s[stopI];return fetch(`${API}?tour_id=eq.milwaukee-2026&participant_id=eq.${p.participant_id}`,{method:'PATCH',headers:{apikey:APIKEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({scores:s})})}));
    loadAdminTable();loadGroup();
  }
  if(cellBtn){
    const stopI=cellBtn.dataset.stop,pid=cellBtn.dataset.pid;
    const r=await fetch(`${API}?tour_id=eq.milwaukee-2026&participant_id=eq.${pid}&select=scores`,{headers:{apikey:APIKEY}});
    const rows=await r.json();if(!rows.length)return;
    const s={...rows[0].scores};delete s[stopI];
    await fetch(`${API}?tour_id=eq.milwaukee-2026&participant_id=eq.${pid}`,{method:'PATCH',headers:{apikey:APIKEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({scores:s})});
    loadAdminTable();loadGroup();
  }
  if(rowBtn){
    const pid=rowBtn.dataset.pid;
    if(!confirm('Remove this rater entirely?'))return;
    await fetch(`${API}?tour_id=eq.milwaukee-2026&participant_id=eq.${pid}`,{method:'DELETE',headers:{apikey:APIKEY}});
    loadAdminTable();loadGroup();
  }
});
