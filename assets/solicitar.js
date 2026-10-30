// Formulario de solicitud de Ardu Solutions. Sin cookies ni rastreadores.
(()=>{const f=document.getElementById('solicitud'); if(!f) return;
const M=JSON.parse(f.dataset.msgs), err=f.querySelector('.err'), btn=f.querySelector('button[type=submit]'), btxt=btn.innerHTML;
const ep=/(^|\.)ardusolutions\.pages\.dev$|^localhost$/.test(location.hostname)?'/api/solicitud':f.action;
const sv=new URLSearchParams(location.search).get('servicio'); if(sv&&f.servicio.querySelector(`option[value="${CSS.escape(sv)}"]`)) f.servicio.value=sv;
const mark=(names)=>{f.querySelectorAll('.bad').forEach(e=>e.classList.remove('bad')); names.forEach(n=>{const e=f.elements[n]; if(!e) return; const el=n==='privacidad'?e.closest('.consent'):e; el&&el.classList.add('bad'); el&&el.setAttribute&&e.setAttribute('aria-invalid','true');});};
const show=(m)=>{err.textContent=m; err.hidden=!m;};
f.addEventListener('submit',async ev=>{ev.preventDefault(); show('');
 const bad=[]; if(f.nombre.value.trim().length<2) bad.push('nombre'); const em=f.email.value.trim(), tl=f.telefono.value.trim();
 if(!em&&!tl) bad.push('email','telefono'); if(em&&!f.email.checkValidity()) bad.push('email'); if(!f.servicio.value) bad.push('servicio');
 if(f.mensaje.value.trim().length<10) bad.push('mensaje'); if(!f.privacidad.checked) bad.push('privacidad');
 mark(bad); if(bad.length){ show(M.errv); const e=f.elements[bad[0]]; e&&e.focus&&e.focus(); return; }
 btn.disabled=true; btn.textContent=M.sending;
 try{ const r=await fetch(ep,{method:'POST',body:new FormData(f),headers:{accept:'application/json'}}); const d=await r.json().catch(()=>({}));
  if(r.ok&&d.ok){ f.hidden=true; const g=document.getElementById('gracias'); document.getElementById('ref').textContent=(d.id||'').slice(0,8).toUpperCase(); g.hidden=false; g.focus(); g.scrollIntoView({block:'center'}); return; }
  if(d.error==='validation'){ mark(d.fields||[]); show(M.errv); } else if(d.error==='ratelimit') show(M.errr); else if(d.error==='captcha'){ show(M.errc); window.turnstile&&turnstile.reset(); } else show(M.errs);
 }catch(e){ show(M.errs); }
 btn.disabled=false; btn.innerHTML=btxt; });
})();
