(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`#2b1d3a`,t=0,n=e=>{let n=++t,r=e;for(let[,t]of e.matchAll(/ id="([^"]+)"/g))r=r.replaceAll(`id="${t}"`,`id="${t}-${n}"`).replaceAll(`url(#${t})`,`url(#${t}-${n})`);return r},r=(e,t,n,r)=>`<radialGradient id="${e}" cx=".36" cy=".3" r=".85"><stop offset="0" stop-color="${t}"/><stop offset=".55" stop-color="${n}"/><stop offset="1" stop-color="${r}"/></radialGradient>`,i=(e,t,n,r=n)=>`<linearGradient id="${e}" x1=".2" y1="0" x2=".6" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/>${r===n?``:`<stop offset="1" stop-color="${r}"/>`}</linearGradient>`,a=(t,n,i)=>`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><filter id="${t}-b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.8"/></filter>${r(`${t}-sk`,`#ffe9d2`,`#f2bf92`,`#d89868`)}${n}</defs><g stroke="${e}" stroke-opacity=".8" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">${i}</g></svg>`,o=(e,t,n=`#5b7fa0`,r=1)=>`<ellipse cx="${e}" cy="${t}" rx="${4.4*r}" ry="${3*r}" fill="#fff" stroke-width="1"/><circle cx="${e}" cy="${t}" r="${2.5*r}" fill="${n}" stroke="none"/><circle cx="${e}" cy="${t}" r="${1.3*r}" fill="#0d0a14" stroke="none"/><circle cx="${e+.9*r}" cy="${t-.9*r}" r="${.75*r}" fill="#fff" stroke="none"/><path d="M${e-4.6*r} ${t-.4*r} Q${e} ${t-4.6*r} ${e+4.6*r} ${t-.4*r}" fill="none" stroke-width="1.4"/>`,s=(e,t={})=>{let{y:n=56,rx:r=17,ry:i=19,iris:a=`#5b7fa0`,lips:s=`#c4605f`,brow:c=`#5a3b2a`,mouth:l=!0,skin:u=`${e}-sk`}=t,d=r*.47,f=n-i*.1;return`<ellipse cx="50" cy="${n}" rx="${r}" ry="${i}" fill="url(#${u})"/><ellipse cx="${50-r*.55}" cy="${n+i*.28}" rx="4.2" ry="3" fill="#ff7a70" opacity=".35" stroke="none" filter="url(#${e}-b)"/><ellipse cx="${50+r*.55}" cy="${n+i*.28}" rx="4.2" ry="3" fill="#ff7a70" opacity=".35" stroke="none" filter="url(#${e}-b)"/>`+o(50-d,f,a,r/17)+o(50+d,f,a,r/17)+`<path d="M${50-d-4.5} ${f-5.5} Q${50-d} ${f-8} ${50-d+4.5} ${f-5.8} M${50+d-4.5} ${f-5.8} Q${50+d} ${f-8} ${50+d+4.5} ${f-5.5}" fill="none" stroke="${c}" stroke-width="1.8"/><path d="M50 ${f+3} Q47.6 ${n+i*.3} 49 ${n+i*.36} Q50 ${n+i*.4} 51.4 ${n+i*.36}" fill="none" stroke="#b07a52" stroke-width="1.1"/>`+(l?`<path d="M45 ${n+i*.6} Q50 ${n+i*.76} 55 ${n+i*.6} Q50 ${n+i*.55} 45 ${n+i*.6} Z" fill="${s}" stroke-width="1"/>`:``)},c=(e,t,n,r=`#e8173f`)=>`<path d="M0 8 C-12 -2 -9 -11 0 -5 C9 -11 12 -2 0 8 Z" transform="translate(${e} ${t}) scale(${n})" fill="${r}" stroke-width="${1.2/n}"/>`,l=(e,t,n)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="#14101c" stroke-width="${1/n}"><path d="M0 -9 C-13 3 -10 11 0 6 C10 11 13 3 0 -9 Z"/><path d="M0 4 L-4 13 L4 13 Z"/></g>`,u=(e,t)=>`<path d="M${50-t} ${e} L${50-t} ${e+9} Q${50-t} ${e+17} 50 ${e+18} Q${50+t} ${e+17} ${50+t} ${e+9} L${50+t} ${e} Z" fill="url(#pa-sd)"/><ellipse cx="50" cy="${e}" rx="${t}" ry="${t*.26}" fill="url(#pa-tp)"/>`,d=(e,t,n,r)=>{let i=``;for(let a=0;a<10;a++){let o=-Math.PI/2+a*Math.PI/5,s=a%2?r:n;i+=`${a?`L`:`M`}${(e+s*Math.cos(o)).toFixed(1)} ${(t+s*Math.sin(o)).toFixed(1)}`}return`${i}Z`},f=(e,t,n)=>`<path d="M${e} ${t-n} Q${e} ${t} ${e+n} ${t} Q${e} ${t} ${e} ${t+n} Q${e} ${t} ${e-n} ${t} Q${e} ${t} ${e} ${t-n} Z" fill="#fff" stroke="none"/>`,p=(e,t=0,n=0,r=1)=>`<g transform="translate(${t} ${n}) scale(${r})" stroke-width="${1.5/r}">
    <rect x="20" y="58" width="60" height="38" rx="7" fill="#8e98ad"/>
    <path d="M14 100 Q17 66 50 64 Q83 66 86 100 Z" fill="url(#${e})"/>
    <rect x="38" y="76" width="24" height="14" rx="3.5" fill="#d6dcea"/>
    <circle cx="44" cy="83" r="2.2" fill="#e8404c" stroke="none"/><circle cx="50" cy="83" r="2.2" fill="#4caf50" stroke="none"/><circle cx="56" cy="83" r="2.2" fill="#ffd23a" stroke="none"/>
    <ellipse cx="50" cy="64" rx="18" ry="4.4" fill="#aab4c8"/>
    <circle cx="22" cy="40" r="5" fill="#aab4c8"/><circle cx="78" cy="40" r="5" fill="#aab4c8"/>
    <circle cx="50" cy="38" r="28" fill="url(#${e})"/>
    <ellipse cx="50" cy="41" rx="20" ry="17" fill="url(#as-vz)"/>
    <path d="M36 34 Q42 28 52 28" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="3"/>
    <path d="M60 52 Q68 48 70 40" fill="none" stroke="#9fb4ff" stroke-opacity=".6" stroke-width="2"/>
  </g>`,m=r(`as-vz`,`#7d97ff`,`#1c2a7a`,`#090d2e`),h=`M20 90 L20 52 Q7 50 7 36 Q7 19 28 19 Q38 10 50 10 Q62 10 72 19 Q93 19 93 36 Q93 50 80 52 L80 90 Q80 95 75 95 L25 95 Q20 95 20 90 Z`,g=(t,n,r)=>`<circle cx="${t}" cy="${n}" r="4.6" fill="none" stroke="${e}" stroke-opacity=".8" stroke-width="5.6"/><circle cx="${t}" cy="${n}" r="4.6" fill="none" stroke="${r}" stroke-width="3.4"/>`,_=(t,n,r)=>`<path d="${t}" fill="none" stroke="${e}" stroke-opacity=".8" stroke-width="${r+2.4}"/><path d="${t}" fill="none" stroke="${n}" stroke-width="${r}"/>`,v=(e,t,n,r,i,a)=>{let o=(n,r)=>`${(e+n*Math.cos(r)).toFixed(1)} ${(t+n*Math.sin(r)).toFixed(1)}`,s=``;for(let e=0;e<i;e++){let t=e*2*Math.PI/i;s+=`M${o(n,t-.16)} L${o(r,t)} L${o(n,t+.16)} Z`}return`<path d="${s}" fill="${a}"/>`},y=(e,t,n)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="#dff6ff" fill-opacity=".35" stroke="#bfeaff" stroke-width="1"/><circle cx="${e-n*.35}" cy="${t-n*.35}" r="${n*.25}" fill="#fff" stroke="none"/>`,b=(e,t,n)=>`<ellipse cx="50" cy="96" rx="34" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#${e}-b)"/>
  ${n?`${_(`M90 30 L90 100`,`#7ac74f`,6)}<path d="M85 52 L95 52 M85 76 L95 76" fill="none" stroke="#3f8a2a" stroke-width="1.6"/><path d="M90 34 Q100 22 98 8 Q90 18 90 34 Z M90 44 Q78 36 76 24 Q86 30 90 44 Z" fill="#58bd4c" stroke-width="1.2"/>`:``}
  <ellipse cx="50" cy="94" rx="33" ry="20" fill="url(#${e}-wh)"/>
  <ellipse cx="21" cy="86" rx="12" ry="18" fill="${t}" transform="rotate(-18 21 86)"/><ellipse cx="79" cy="86" rx="12" ry="18" fill="${t}" transform="rotate(18 79 86)"/>
  <circle cx="25" cy="24" r="11.5" fill="${t}"/><circle cx="75" cy="24" r="11.5" fill="${t}"/>
  <ellipse cx="50" cy="52" rx="32" ry="28" fill="url(#${e}-wh)"/>
  <ellipse cx="36" cy="49" rx="8.6" ry="12" fill="${t}" transform="rotate(24 36 49)"/><ellipse cx="64" cy="49" rx="8.6" ry="12" fill="${t}" transform="rotate(-24 64 49)"/>
  <circle cx="37" cy="48" r="3.8" fill="#fff" stroke="none"/><circle cx="63" cy="48" r="3.8" fill="#fff" stroke="none"/>
  <circle cx="37.6" cy="48.6" r="2.2" fill="#14101c" stroke="none"/><circle cx="62.4" cy="48.6" r="2.2" fill="#14101c" stroke="none"/>
  <circle cx="38.2" cy="47.6" r=".8" fill="#fff" stroke="none"/><circle cx="63" cy="47.6" r=".8" fill="#fff" stroke="none"/>
  <ellipse cx="50" cy="60" rx="6.4" ry="4.4" fill="#2a1b3d"/><ellipse cx="48.4" cy="58.6" rx="2" ry="1.1" fill="#fff" opacity=".6" stroke="none"/>
  <path d="M50 64 L50 67 M50 67 Q45 72 41 68 M50 67 Q55 72 59 68" fill="none" stroke-width="1.4"/>
  <circle cx="30" cy="64" r="3.6" fill="#ff8a8a" opacity=".45" stroke="none"/><circle cx="70" cy="64" r="3.6" fill="#ff8a8a" opacity=".45" stroke="none"/>
  <path d="M30 34 Q40 28 52 29" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>`,x=(e,t,n,r,i=`#fff`)=>`<circle cx="${e}" cy="${t}" r="${n*1.7}" fill="${r}" opacity=".3" stroke="none" filter="url(#__K__-b)"/><circle cx="${e}" cy="${t}" r="${n}" fill="${r}" stroke="none"/><circle cx="${e-n*.3}" cy="${t-n*.35}" r="${n*.35}" fill="${i}" stroke="none" opacity=".9"/>`,S=(e,t,n)=>a(e,t,n.replaceAll(`__K__`,e)),C=()=>Array.from({length:11},(e,t)=>`<g transform="rotate(${-66+t*13.2} 50 78)"><path d="M50 78 L50 44" stroke="#2f7a3a" stroke-width="1.2" fill="none"/><ellipse cx="50" cy="42" rx="8.4" ry="16" fill="url(#z8-ft)"/><ellipse cx="50" cy="35" rx="5" ry="6.6" fill="#ffd54a" stroke-width="1"/><ellipse cx="50" cy="35" rx="3.8" ry="5.2" fill="#2a9bd8" stroke="none"/><ellipse cx="50" cy="35.6" rx="2" ry="2.9" fill="#14487a" stroke="none"/></g>`).join(``),w=(e,t,n,r=`#ffffff`)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="none" stroke="${r}" stroke-width="${1.8/n}" stroke-opacity=".9">${[0,60,120].map(e=>`<path transform="rotate(${e})" d="M0 -14 L0 14 M-4 -9 L0 -5 L4 -9 M-4 9 L0 5 L4 9"/>`).join(``)}</g>`,T=(e,t,n=``)=>`<ellipse cx="50" cy="94" rx="42" ry="4" fill="#7fd0ff" opacity=".5" stroke="none"/>
  <path d="M26 62 Q2 58 4 76 Q16 84 32 74 Z" fill="url(#${e}-fr)"/>
  <ellipse cx="36" cy="84" rx="10" ry="5" fill="${t}"/><ellipse cx="62" cy="86" rx="10" ry="5" fill="${t}"/>
  <path d="M30 86 l3 4 M36 87 l1 5 M42 86 l-2 4 M56 88 l3 4 M62 89 l1 5 M68 88 l-2 4" fill="none" stroke-width="1.2"/>
  <ellipse cx="46" cy="66" rx="31" ry="20" fill="url(#${e}-fr)"/>
  <ellipse cx="50" cy="76" rx="22" ry="8" fill="#fff" opacity=".28" stroke="none"/>
  <ellipse cx="68" cy="52" rx="19" ry="16" fill="url(#${e}-fr)"/>
  <path d="M80 50 Q98 46 99 55 Q98 65 80 62 Z" fill="url(#${e}-bl)"/><path d="M82 57 Q92 58 98 56" fill="none" stroke-width="1.2" stroke-opacity=".6"/>
  <circle cx="91" cy="51" r="1.3" fill="#1d1830" stroke="none"/><circle cx="95" cy="52" r="1.3" fill="#1d1830" stroke="none"/>
  <circle cx="72" cy="46" r="4" fill="#fff"/><circle cx="73" cy="47" r="2.4" fill="#14101c" stroke="none"/><circle cx="73.8" cy="46" r=".9" fill="#fff" stroke="none"/>
  <path d="M66 41 Q72 38 78 42" fill="none" stroke-width="1.4"/>
  <path d="M24 56 L30 60 M32 52 L38 58 M44 50 L48 56 M56 48 L58 54" fill="none" stroke="#fff" stroke-width="1" stroke-opacity=".35"/>
  <path d="M40 50 Q50 44 62 46" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>${n}`,E=(e,t,n,r=``)=>{let i=`<path d="M49 48 Q20 0 5 18 Q-2 38 16 54 Q34 58 49 52 Z" fill="url(#${e}-wg)" stroke="${t}" stroke-width="2.6"/><path d="M49 54 Q26 60 19 80 Q25 98 42 86 Q52 76 49 58 Z" fill="url(#${e}-wg)" stroke="${t}" stroke-width="2.6"/><path d="M47 48 L14 20 M47 50 L8 40 M47 52 L18 54 M47 58 L24 80" fill="none" stroke="${t}" stroke-width="1.4" stroke-opacity=".8"/><g fill="${n}" stroke="none"><circle cx="9" cy="26" r="2"/><circle cx="8" cy="38" r="2"/><circle cx="14" cy="49" r="2"/><circle cx="24" cy="54" r="2"/><circle cx="22" cy="90" r="2"/><circle cx="30" cy="92" r="1.6"/></g>`;return`${i}<g transform="translate(100 0) scale(-1 1)">${i}</g><ellipse cx="50" cy="56" rx="3.6" ry="22" fill="#2a1a14"/><circle cx="50" cy="32" r="5" fill="#2a1a14"/><path d="M48 29 Q44 16 36 12 M52 29 Q56 16 64 12" fill="none" stroke="#2a1a14" stroke-width="1.6"/><circle cx="36" cy="12" r="2" fill="#2a1a14" stroke="none"/><circle cx="64" cy="12" r="2" fill="#2a1a14" stroke="none"/>${r}`},D=(e,t,n,r,i,a,o=72)=>{let s=``;for(let c=0;c<=o;c++){let l=c/o*2*Math.PI,u=1+i*Math.sin(a*l);s+=`${c?`L`:`M`}${(e+n*u*Math.cos(l)).toFixed(1)} ${(t+r*u*Math.sin(l)).toFixed(1)}`}return`${s}Z`},O=(e,t,n,r=``)=>{let i=(t+n)/2;return`<rect x="${t}" y="74" width="${n-t}" height="16" rx="6" fill="url(#${e}-br)" stroke="#b87a2a" stroke-width="2.6"/><path d="M${t} 74 Q${i} 80 ${n} 74 L${n+2} 68 Q${i} 76 ${t-2} 68 Z" fill="#f4a0a8"/><path d="M${t-4} 61 L${n+4} 61 L${n+6} 69 L${t-6} 69 Z" fill="url(#${e}-ch)"/><ellipse cx="${t+(n-t)*.3}" cy="58" rx="${(n-t)*.2}" ry="4" fill="#e8402c"/><ellipse cx="${t+(n-t)*.7}" cy="58" rx="${(n-t)*.2}" ry="4" fill="#e8402c"/><path d="M${t-6} 56 Q${t+4} 48 ${t+12} 56 T${t+28} 56 T${t+44} 56 T${n+6} 56 L${n+6} 62 L${t-6} 62 Z" fill="#6fcf5a" stroke-width="1.2"/><rect x="${t}" y="38" width="${n-t}" height="18" rx="7" fill="url(#${e}-br)" stroke="#b87a2a" stroke-width="2.6"/><path d="M${t+8} 46 L${n-8} 46" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.4"/><g fill="#d8a860" stroke="none" opacity=".55"><circle cx="${t+(n-t)*.3}" cy="50" r="1.2"/><circle cx="${t+(n-t)*.6}" cy="51" r="1.2"/><circle cx="${t+(n-t)*.8}" cy="49" r="1.2"/></g>${r}`},k=(e,t={})=>{let{ear:n=`floppy`,muzzleY:r=64,muzzleRx:i=14,tongue:a=!1,eyeR:o=3.4,headRx:s=25,headRy:c=24,before:l=``,mid:u=``,after:d=``,bodyFill:f=`url(#${e}-fr)`,brow:p=`#3a2a20`,eyeColor:m=`#14101c`,worried:h=!1}=t,g=`url(#${e}-ea)`,_={floppy:`<path d="M27 30 Q9 34 11 64 Q14 76 27 66 Q31 50 33 34 Z" fill="${g}"/><path d="M73 30 Q91 34 89 64 Q86 76 73 66 Q69 50 67 34 Z" fill="${g}"/>`,point:`<path d="M29 38 L25 6 L48 24 Z" fill="${g}"/><path d="M71 38 L75 6 L52 24 Z" fill="${g}"/>`,bat:`<path d="M26 40 L8 2 L46 22 Z" fill="${g}"/><path d="M74 40 L92 2 L54 22 Z" fill="${g}"/>`,fold:`<path d="M27 26 Q8 22 12 52 Q22 54 33 38 Z" fill="${g}"/><path d="M73 26 Q92 22 88 52 Q78 54 67 38 Z" fill="${g}"/>`,long:`<path d="M30 28 Q4 34 8 86 Q14 94 24 84 Q28 58 34 38 Z" fill="${g}"/><path d="M70 28 Q96 34 92 86 Q86 94 76 84 Q72 58 66 38 Z" fill="${g}"/>`,none:``}[n],v=r;return`<ellipse cx="50" cy="98" rx="32" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#${e}-b)"/><ellipse cx="50" cy="96" rx="32" ry="19" fill="${f}"/>`+l+_+`<ellipse cx="50" cy="50" rx="${s}" ry="${c}" fill="url(#${e}-fr)"/>`+u+`<ellipse cx="50" cy="${v}" rx="${i}" ry="${(i*.78).toFixed(1)}" fill="url(#${e}-mz)" stroke-width="1"/><ellipse cx="50" cy="${v-6}" rx="5.6" ry="3.8" fill="#14101c"/><ellipse cx="48.4" cy="${v-7.2}" rx="1.8" ry="1" fill="#fff" opacity=".6" stroke="none"/><path d="M50 ${v-2} L50 ${v+3} M50 ${v+3} Q45 ${v+8} 40 ${v+5} M50 ${v+3} Q55 ${v+8} 60 ${v+5}" fill="none" stroke-width="1.4"/>`+(a?`<path d="M45 ${v+6} Q50 ${v+18} 55 ${v+6} Z" fill="#ff8aa0" stroke-width="1.2"/>`:``)+`<circle cx="38" cy="46" r="${o}" fill="${m}" stroke="none"/><circle cx="62" cy="46" r="${o}" fill="${m}" stroke="none"/><circle cx="39" cy="45" r="${(o*.34).toFixed(1)}" fill="#fff" stroke="none"/><circle cx="63" cy="45" r="${(o*.34).toFixed(1)}" fill="#fff" stroke="none"/>`+(h?`<path d="M31 41 Q38 39 45 34 M69 41 Q62 39 55 34" fill="none" stroke="${p}" stroke-width="1.8"/>`:`<path d="M31 38 Q38 34 45 38 M69 38 Q62 34 55 38" fill="none" stroke="${p}" stroke-width="1.6"/>`)+`<path d="M34 36 Q42 30 52 31" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2.6"/>`+d},A=(e,t,n,r=`#e0a400`)=>`<path d="M${e-n/2} ${t} Q${e-n*.3} ${t-n*.52} ${e} ${t-n*.4} Q${e+n*.3} ${t-n*.52} ${e+n/2} ${t} Q${e} ${t+n*.14} ${e-n/2} ${t} Z" fill="#1d1830"/><path d="M${e-n/2} ${t} Q${e} ${t+n*.14} ${e+n/2} ${t}" fill="none" stroke="${r}" stroke-width="1.6"/><circle cx="${e}" cy="${t-n*.18}" r="${n*.07}" fill="#fff" stroke-width=".8"/><path d="M${e-n*.1} ${t-n*.1} L${e+n*.1} ${t-n*.04} M${e+n*.1} ${t-n*.1} L${e-n*.1} ${t-n*.04}" stroke="#fff" stroke-width="1.4" fill="none"/>`,j={Pumpkin:S(`x1`,`${r(`x1-pk`,`#ffc060`,`#f26a10`,`#a83a00`)}${r(`x1-gl`,`#fff8b0`,`#ffd23a`,`#ff8a00`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#x1-b)"/>
    ${_(`M50 26 Q54 10 68 12`,`#3f8a2a`,7)}<path d="M62 14 Q74 4 80 14 Q72 16 66 20" fill="none" stroke="#58bd4c" stroke-width="2.4"/>
    <ellipse cx="28" cy="62" rx="21" ry="29" fill="url(#x1-pk)"/><ellipse cx="72" cy="62" rx="21" ry="29" fill="url(#x1-pk)"/><ellipse cx="50" cy="60" rx="25" ry="33" fill="url(#x1-pk)"/>
    <path d="M38 30 Q32 60 38 90 M62 30 Q68 60 62 90 M20 40 Q14 62 22 84 M80 40 Q86 62 78 84" fill="none" stroke="#8a3200" stroke-width="1.4" stroke-opacity=".55"/>
    <g filter="url(#x1-b)" opacity=".9" stroke="none"><path d="M28 46 L46 52 L34 64 Z M72 46 L54 52 L66 64 Z M50 60 L58 72 L42 72 Z" fill="#fff06a"/><path d="M26 74 L34 84 L40 76 L46 86 L52 76 L58 86 L64 76 L72 84 L76 74 Q50 94 26 74 Z" fill="#fff06a"/></g>
    <path d="M28 46 L46 52 L34 64 Z M72 46 L54 52 L66 64 Z M50 60 L58 72 L42 72 Z" fill="url(#x1-gl)" stroke="#6a2a00" stroke-width="1.4"/>
    <path d="M26 74 L34 84 L40 76 L46 86 L52 76 L58 86 L64 76 L72 84 L76 74 Q50 94 26 74 Z" fill="url(#x1-gl)" stroke="#6a2a00" stroke-width="1.4"/>
    <path d="M24 44 Q30 32 42 30" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.4"/>`),"Swamp Monster":S(`x2`,`${r(`x2-skn`,`#a8d070`,`#5a8a30`,`#1f3a12`)}${i(`x2-ms`,`#6a9a3a`,`#2a4a14`)}${i(`x2-wt`,`#4a7a3a`,`#10301a`)}`,`<path d="M6 100 Q10 76 50 74 Q90 76 94 100 Z" fill="url(#x2-ms)"/>
    <path d="M14 82 Q10 94 16 100 M30 78 Q26 92 32 100 M70 78 Q74 92 68 100 M86 82 Q90 94 84 100" fill="none" stroke="#2f5a1a" stroke-width="3"/>
    <ellipse cx="50" cy="50" rx="27" ry="29" fill="url(#x2-skn)"/>
    <path d="M22 44 Q26 12 50 12 Q74 12 78 44 L76 54 Q72 42 68 58 Q64 40 58 62 Q52 44 46 62 Q40 40 36 58 Q32 42 28 56 Z" fill="url(#x2-ms)" stroke-width="1.4"/>
    <path d="M30 20 Q26 34 30 46 M44 14 Q40 30 44 44 M60 14 Q64 30 60 44" fill="none" stroke="#1f3a12" stroke-width="1.4" stroke-opacity=".6"/>
    <ellipse cx="66" cy="14" rx="9" ry="4" fill="#3f9a3a" stroke-width="1.2"/><circle cx="68" cy="11" r="3" fill="#ff8ac8" stroke-width="1"/>
    <g fill="#2a4a14" stroke="none" opacity=".55"><circle cx="34" cy="66" r="2.6"/><circle cx="66" cy="68" r="2.2"/><circle cx="60" cy="38" r="1.8"/></g>
    ${x(38,50,6,`#ffe14a`)}${x(62,50,6,`#ffe14a`)}<ellipse cx="38" cy="50" rx="1.6" ry="5" fill="#14101c" stroke="none"/><ellipse cx="62" cy="50" rx="1.6" ry="5" fill="#14101c" stroke="none"/>
    <path d="M26 42 L44 48 M74 42 L56 48" fill="none" stroke="#1f3a12" stroke-width="3.4"/>
    <path d="M32 68 Q50 86 68 68 Q50 74 32 68 Z" fill="#1a0a10"/><path d="M36 70 l3 6 3 -5 z M44 72 l3 6 3 -6 z M54 72 l3 6 3 -6 z M62 70 l3 6 3 -5 z" fill="#f4f0d8" stroke-width="1"/>
    <path d="M44 58 q-2 3 0 5 M56 58 q2 3 0 5" fill="none" stroke="#1f3a12" stroke-width="1.6"/>`),Frankenstein:a(`x3`,`${r(`x3-skn`,`#cdea9a`,`#86b856`,`#3f7a2a`)}${i(`x3-hr`,`#3a3a48`,`#0a0a10`)}${i(`x3-mt`,`#c8ced8`,`#6a7284`)}${i(`x3-co`,`#3a3a5a`,`#12121e`)}`,`<path d="M6 100 Q10 78 50 76 Q90 78 94 100 Z" fill="url(#x3-co)"/><path d="M38 78 L50 96 L62 78 Z" fill="#e8ecf4" stroke-width="1.2"/>
    <rect x="42" y="68" width="16" height="12" fill="#6aa040" stroke-width="1.2"/>
    <rect x="12" y="58" width="16" height="7" rx="2" fill="url(#x3-mt)"/><rect x="8" y="55" width="5" height="13" rx="2" fill="url(#x3-mt)"/><rect x="72" y="58" width="16" height="7" rx="2" fill="url(#x3-mt)"/><rect x="87" y="55" width="5" height="13" rx="2" fill="url(#x3-mt)"/>
    <rect x="26" y="24" width="48" height="50" rx="9" fill="url(#x3-skn)"/>
    <path d="M24 28 L76 28 L74 42 L68 36 L60 44 L52 36 L44 44 L36 36 L28 42 Z" fill="url(#x3-hr)"/>
    <rect x="30" y="44" width="40" height="7" rx="2" fill="#2a4a1a" stroke="none"/>
    <circle cx="40" cy="55" r="4" fill="#fff"/><circle cx="60" cy="55" r="4" fill="#fff"/><circle cx="40.6" cy="56" r="2" fill="#14101c" stroke="none"/><circle cx="60.6" cy="56" r="2" fill="#14101c" stroke="none"/>
    <path d="M34 50 L46 50 M54 50 L66 50" stroke="#2a4a1a" stroke-width="3"/>
    <path d="M32 40 L68 40" fill="none" stroke="#2a3a14" stroke-width="1.6"/><path d="M38 37 l0 6 M46 37 l0 6 M54 37 l0 6 M62 37 l0 6" stroke="#2a3a14" stroke-width="1.4"/>
    <path d="M38 68 L62 68" fill="none" stroke="#2a3a14" stroke-width="2"/><path d="M42 65 l0 6 M50 65 l0 6 M58 65 l0 6" stroke="#2a3a14" stroke-width="1.4"/>
    <path d="M52 56 l2 6 l-4 0" fill="none" stroke="#3f7a2a" stroke-width="1.6"/>
    <path d="M32 32 Q40 28 50 29" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.6"/>`),Vampire:a(`x4`,`${r(`x4-skn`,`#ffffff`,`#f2eaf2`,`#c8bccc`)}${i(`x4-cp`,`#4a2a6a`,`#12081e`)}${i(`x4-rd`,`#e8344a`,`#6a0a1c`)}${i(`x4-hr`,`#3a3a4a`,`#08080e`)}`,`<path d="M22 50 L8 12 L42 40 Z M78 50 L92 12 L58 40 Z" fill="url(#x4-cp)"/><path d="M22 46 L14 22 L38 40 Z M78 46 L86 22 L62 40 Z" fill="url(#x4-rd)" stroke="none"/>
    <path d="M4 100 Q8 74 50 72 Q92 74 96 100 Z" fill="url(#x4-cp)"/><path d="M30 76 L50 100 L70 76 Q50 84 30 76 Z" fill="url(#x4-rd)"/>
    <path d="M38 78 L50 92 L62 78 Z" fill="#f6f2f8" stroke-width="1"/><circle cx="50" cy="80" r="3" fill="#e8344a" stroke-width="1"/>
    <ellipse cx="50" cy="52" rx="22" ry="25" fill="url(#x4-skn)"/>
    <path d="M28 46 Q26 24 50 22 Q74 24 72 46 Q66 38 58 34 L50 42 L42 34 Q34 38 28 46 Z" fill="url(#x4-hr)"/>
    <path d="M32 52 Q38 49 44 52 M56 52 Q62 49 68 52" fill="none" stroke="#14101c" stroke-width="1.4"/>
    <circle cx="39" cy="52" r="4.4" fill="#e8344a" stroke-width="1"/><circle cx="61" cy="52" r="4.4" fill="#e8344a" stroke-width="1"/><ellipse cx="39" cy="52" rx="1.2" ry="3.4" fill="#14101c" stroke="none"/><ellipse cx="61" cy="52" rx="1.2" ry="3.4" fill="#14101c" stroke="none"/>
    <path d="M30 44 L46 49 M70 44 L54 49" fill="none" stroke="#14101c" stroke-width="2.2"/>
    <path d="M50 56 L48 62 L52 62" fill="none" stroke="#b8a8bc" stroke-width="1.2"/>
    <path d="M40 66 Q50 72 60 66 Q50 68 40 66 Z" fill="#8a0a24"/><path d="M42 66 L44 74 L47 67 Z M58 66 L56 74 L53 67 Z" fill="#fff" stroke-width="1"/>
    <circle cx="34" cy="62" r="3.4" fill="#e8a0b8" opacity=".5" stroke="none"/><circle cx="66" cy="62" r="3.4" fill="#e8a0b8" opacity=".5" stroke="none"/>`),Zombie:a(`x5`,`${r(`x5-skn`,`#c8d8b0`,`#8aa070`,`#4a5e38`)}${i(`x5-sh`,`#8a7a9a`,`#3a2e48`)}${i(`x5-hr`,`#6a5a3a`,`#241a0c`)}`,`<path d="M6 100 Q10 78 50 76 Q90 78 94 100 Z" fill="url(#x5-sh)"/><path d="M14 90 l6 6 -8 2 Z M82 84 l8 4 -8 4 Z M40 88 l4 8 6 -6" fill="#c8d8b0" stroke-width="1"/>
    <path d="M30 78 L38 90 L44 80 L50 92 L56 80 L62 90 L70 78 Q50 70 30 78 Z" fill="#6a5a7a"/>
    <ellipse cx="50" cy="52" rx="24" ry="27" fill="url(#x5-skn)" transform="rotate(-5 50 52)"/>
    <path d="M28 40 Q30 18 52 20 Q72 22 72 40 L66 34 L60 40 L54 32 L46 40 L40 32 L34 42 Z" fill="url(#x5-hr)"/><path d="M30 28 Q24 24 22 32 M70 28 Q78 24 80 32" fill="none" stroke="#241a0c" stroke-width="2.4"/>
    <circle cx="38" cy="48" r="8.4" fill="#fff"/><circle cx="40" cy="50" r="3" fill="#14101c" stroke="none"/><circle cx="41" cy="48.8" r=".9" fill="#fff" stroke="none"/>
    <circle cx="62" cy="49" r="5" fill="#2a3a1c"/><circle cx="62" cy="49" r="2" fill="#e8d84a" stroke="none"/>
    <path d="M28 42 L46 44 M72 44 L56 47" fill="none" stroke="#3a4a2a" stroke-width="2.4"/>
    <path d="M30 56 Q26 66 34 70" fill="none" stroke="#4a5e38" stroke-width="1.4"/><path d="M28 58 l5 -1 M28 62 l5 0 M29 66 l5 1" stroke="#4a3a2a" stroke-width="1.4"/>
    <path d="M38 64 Q50 78 66 64 Q54 68 38 64 Z" fill="#3a0e1c"/><path d="M42 65 l3 5 3 -4 z M58 65 l2 6 3 -5 z" fill="#e8e0b0" stroke-width="1"/><path d="M50 72 Q52 82 56 80" fill="none" stroke="#e86a8a" stroke-width="2.2"/>
    <path d="M56 28 L68 26 L70 34 L58 36 Z" fill="#f2ead0" stroke-width="1"/><path d="M60 28 L62 35 M65 27 L66 34" stroke="#c8b890" stroke-width="1"/>`),Mummy:S(`x6`,`${i(`x6-bd`,`#fff4d4`,`#d8c08a`)}${i(`x6-dk`,`#2a1f10`,`#0c0804`)}`,`<path d="M10 100 Q12 76 50 74 Q88 76 90 100 Z" fill="url(#x6-bd)"/>
    <path d="M16 84 Q50 94 84 84 M14 92 Q50 102 86 92 M26 78 L40 98 M60 78 L76 96" fill="none" stroke="#a88a52" stroke-width="1.6"/>
    <path d="M12 96 Q4 100 6 108 M20 98 Q16 106 22 110 M88 96 Q96 100 94 108" fill="none" stroke="#e8d4a0" stroke-width="3.4"/>
    <ellipse cx="50" cy="46" rx="27" ry="30" fill="url(#x6-bd)"/>
    <path d="M24 30 Q50 18 76 30 M23 38 Q50 28 77 38 M24 62 Q50 72 76 62 M28 70 Q50 78 72 70 M26 24 L40 44 M74 24 L60 44 M30 60 L44 52 M70 62 L56 52" fill="none" stroke="#a88a52" stroke-width="1.8"/>
    <path d="M24 44 Q50 36 76 44 L76 54 Q50 62 24 54 Z" fill="url(#x6-dk)"/>
    ${x(38,50,5.4,`#e8ffb0`)}${x(62,50,5.4,`#e8ffb0`)}<ellipse cx="39" cy="50" rx="1.6" ry="3.2" fill="#14101c" stroke="none"/><ellipse cx="61" cy="50" rx="1.6" ry="3.2" fill="#14101c" stroke="none"/>
    <path d="M70 32 Q86 28 92 40 Q80 38 72 44 Z" fill="#fff4d4" stroke-width="1.2"/><path d="M26 66 Q10 72 8 84 Q20 76 30 74 Z" fill="#fff4d4" stroke-width="1.2"/>
    <path d="M28 30 Q38 22 50 22" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>`),"Candy Apple":a(`x7`,`${r(`x7-ap`,`#ff8a8a`,`#e0182a`,`#7a0612`)}`,`<ellipse cx="50" cy="94" rx="30" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#x7-b)"/>
    <rect x="47" y="2" width="6" height="34" rx="3" fill="#d8b070" stroke-width="1.4"/>
    <path d="M50 34 Q24 18 14 44 Q6 70 24 86 Q36 96 50 90 Q64 96 76 86 Q94 70 86 44 Q76 18 50 34 Z" fill="url(#x7-ap)"/>
    <path d="M18 66 Q14 84 22 90 Q26 80 24 70 Z M40 86 Q38 98 46 98 Q50 92 46 86 Z M64 86 Q66 100 72 96 Q74 88 70 84 Z M78 74 Q86 86 80 90 Q74 82 76 74 Z" fill="url(#x7-ap)" stroke-width="1.4"/>
    <path d="M24 46 Q28 32 42 30" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="5"/><path d="M22 58 Q22 52 25 48" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>
    <ellipse cx="50" cy="34" rx="8" ry="3.4" fill="#4a2a10" stroke="none" opacity=".6"/>
    <path d="M58 30 Q74 20 82 28 Q70 36 58 32 Z" fill="#58bd4c" stroke-width="1.2"/>`),"Candy Corn":a(`x8`,`${i(`x8-yl`,`#ffe96a`,`#f2b200`)}${i(`x8-or`,`#ffb84a`,`#e8620a`)}${i(`x8-wh`,`#ffffff`,`#e4e0d4`)}`,`<ellipse cx="50" cy="95" rx="40" ry="3.2" fill="#000" opacity=".28" stroke="none" filter="url(#x8-b)"/>
    <g transform="translate(-8 24) scale(.5) rotate(-18 50 60)"><path d="M16 94 L84 94 L76 64 L24 64 Z" fill="url(#x8-yl)"/><path d="M24 64 L76 64 L66 36 L34 36 Z" fill="url(#x8-or)"/><path d="M34 36 L66 36 Q50 4 34 36 Z" fill="url(#x8-wh)"/></g>
    <g transform="translate(62 28) scale(.5) rotate(20 50 60)"><path d="M16 94 L84 94 L76 64 L24 64 Z" fill="url(#x8-yl)"/><path d="M24 64 L76 64 L66 36 L34 36 Z" fill="url(#x8-or)"/><path d="M34 36 L66 36 Q50 4 34 36 Z" fill="url(#x8-wh)"/></g>
    <path d="M14 92 L86 92 Q88 92 87 88 L78 62 L22 62 L13 88 Q12 92 14 92 Z" fill="url(#x8-yl)"/>
    <path d="M22 62 L78 62 L68 34 L32 34 Z" fill="url(#x8-or)"/>
    <path d="M32 34 L68 34 Q50 -2 32 34 Z" fill="url(#x8-wh)"/>
    <path d="M24 86 L30 66 M30 58 L38 38 M40 26 L46 12" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>`),Crow:a(`x9`,`${r(`x9-bd`,`#6a6a88`,`#2a2a3a`,`#08080e`)}${i(`x9-br`,`#8a6a3c`,`#4a3018`)}`,`${_(`M0 90 Q50 84 100 88`,`#6a4a28`,6)}<path d="M84 88 Q94 80 98 86 Q92 92 84 90 Z" fill="#4a7a2a" stroke-width="1.2"/>
    <path d="M28 66 L6 86 L22 90 L36 76 Z" fill="url(#x9-bd)"/><path d="M12 82 L22 88 M18 78 L28 84" stroke="#4a4a68" stroke-width="1" fill="none"/>
    ${_(`M44 80 L42 90 M44 90 l-5 2 M44 90 l5 2 M56 80 L58 90 M58 90 l-5 2 M58 90 l5 2`,`#c8841c`,2.2)}
    <ellipse cx="46" cy="62" rx="26" ry="20" fill="url(#x9-bd)"/>
    <path d="M26 58 Q44 46 64 62 Q50 78 30 70 Q24 66 26 58 Z" fill="#14141e" stroke-width="1.2"/><path d="M34 64 L50 70 M32 58 L52 62 M38 54 L56 58" fill="none" stroke="#6a6a9a" stroke-width="1.2" stroke-opacity=".7"/>
    <circle cx="68" cy="40" r="16" fill="url(#x9-bd)"/>
    <path d="M80 34 Q98 34 100 42 Q94 48 80 46 Z" fill="#4a4a58" stroke-width="1.4"/><path d="M82 36 L96 38" stroke="#8a8aa0" stroke-width="1.4"/>
    <circle cx="72" cy="36" r="4.6" fill="#ffd54a"/><circle cx="73" cy="36.6" r="2.4" fill="#14101c" stroke="none"/><circle cx="73.8" cy="35.6" r=".9" fill="#fff" stroke="none"/>
    <path d="M60 26 Q68 20 78 26" fill="none" stroke="#7a7aa8" stroke-opacity=".7" stroke-width="2.4"/><path d="M26 56 Q36 46 48 48" fill="none" stroke="#9a9ad0" stroke-opacity=".5" stroke-width="2.6"/>`),"Vampire Bat":S(`xa`,`${r(`xa-bd`,`#9a8ab8`,`#4a3a6a`,`#160a28`)}${i(`xa-wg`,`#6a4a9a`,`#1c0e32`)}`,`<path d="M44 50 Q22 26 2 34 Q8 42 5 52 Q13 48 15 59 Q25 51 29 63 Q37 56 44 66 Z" fill="url(#xa-wg)"/><path d="M44 52 L9 38 M44 56 L14 56 M44 60 L27 62" fill="none" stroke="#8a6ab8" stroke-width="1.2"/>
    <g transform="translate(100 0) scale(-1 1)"><path d="M44 50 Q22 26 2 34 Q8 42 5 52 Q13 48 15 59 Q25 51 29 63 Q37 56 44 66 Z" fill="url(#xa-wg)"/><path d="M44 52 L9 38 M44 56 L14 56 M44 60 L27 62" fill="none" stroke="#8a6ab8" stroke-width="1.2"/></g>
    ${_(`M44 82 L43 92 M56 82 L57 92`,`#4a3a6a`,3)}
    <ellipse cx="50" cy="64" rx="14" ry="19" fill="url(#xa-bd)"/>
    <path d="M37 36 L31 6 L48 28 Z M63 36 L69 6 L52 28 Z" fill="url(#xa-bd)"/><path d="M37 32 L34 14 L44 28 Z M63 32 L66 14 L56 28 Z" fill="#c8508a" stroke="none" opacity=".7"/>
    <ellipse cx="50" cy="42" rx="18" ry="15" fill="url(#xa-bd)"/>
    ${x(42,40,4.6,`#ff3a3a`)}${x(58,40,4.6,`#ff3a3a`)}
    <path d="M47 46 L53 46 L50 50 Z" fill="#14101c" stroke-width="1"/>
    <path d="M40 50 Q50 58 60 50" fill="#5a0a1c" stroke-width="1.2"/><path d="M43 51 l2 8 2 -7 z M53 52 l2 7 2 -8 z" fill="#fff" stroke-width="1.1"/><circle cx="45" cy="60" r="1.4" fill="#e8344a" stroke="none"/>
    <path d="M36 32 Q42 28 48 29" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4"/>`),Werewolf:S(`xb`,`${r(`xb-mn`,`#fffbd0`,`#f6e48a`,`#c8a84a`)}${r(`xb-fr`,`#a8a0a8`,`#6a6068`,`#2a2230`)}${r(`xb-mz`,`#d8d0d4`,`#a49aa4`,`#5a505c`)}`,`<circle cx="50" cy="40" r="38" fill="url(#xb-mn)" stroke="none" opacity=".95"/><circle cx="30" cy="26" r="5" fill="#d8c070" stroke="none" opacity=".6"/><circle cx="74" cy="52" r="4" fill="#d8c070" stroke="none" opacity=".6"/><circle cx="66" cy="20" r="3" fill="#d8c070" stroke="none" opacity=".6"/>
    <path d="M8 100 Q12 78 50 76 Q88 78 92 100 Z" fill="url(#xb-fr)"/><path d="M30 80 L38 92 L44 82 M70 80 L62 92 L56 82" fill="#c8302c" stroke-width="1.2"/>
    ${v(50,56,26,38,14,`#6a6068`)}
    <path d="M28 44 L22 6 L48 30 Z M72 44 L78 6 L52 30 Z" fill="url(#xb-fr)"/><path d="M30 38 L26 16 L42 32 Z M70 38 L74 16 L58 32 Z" fill="#c8607a" stroke="none" opacity=".7"/>
    <ellipse cx="50" cy="54" rx="26" ry="26" fill="url(#xb-fr)"/>
    <ellipse cx="50" cy="66" rx="15" ry="16" fill="url(#xb-mz)"/>
    <path d="M24 46 Q38 38 46 50 M76 46 Q62 38 54 50" fill="none" stroke="#2a2230" stroke-width="3"/>
    ${x(38,48,5,`#ffe14a`)}${x(62,48,5,`#ffe14a`)}<ellipse cx="38.6" cy="48.4" rx="1.4" ry="3.6" fill="#14101c" stroke="none"/><ellipse cx="62.6" cy="48.4" rx="1.4" ry="3.6" fill="#14101c" stroke="none"/>
    <path d="M43 58 L57 58 L50 66 Z" fill="#14101c" stroke-width="1"/>
    <path d="M36 72 Q50 90 64 72 Q50 78 36 72 Z" fill="#3a0a14"/><path d="M38 73 l3 8 3 -7 z M47 76 l3 9 3 -9 z M56 74 l3 8 3 -7 z" fill="#fff" stroke-width="1.1"/>
    <path d="M32 36 Q40 30 50 31" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.6"/>`),"Goo Monster":S(`xc`,`${r(`xc-gl`,`#d8ff9a`,`#7ae02a`,`#1f8a0a`)}${r(`xc-ey`,`#ffffff`,`#fff6a0`,`#e8c820`)}`,`<ellipse cx="50" cy="92" rx="42" ry="6" fill="#4ac01a" opacity=".5" stroke="none" filter="url(#xc-b)"/>
    <path d="M8 88 Q0 48 30 30 Q50 18 70 30 Q100 48 92 88 Q90 98 82 92 Q80 104 72 94 Q66 100 60 92 Q50 100 42 92 Q34 102 28 92 Q20 98 14 94 Q8 96 8 88 Z" fill="url(#xc-gl)"/>
    <path d="M30 94 Q28 104 33 106 Q36 100 34 94 Z M64 92 Q68 106 72 102 Q72 96 68 92 Z" fill="url(#xc-gl)" stroke-width="1.2"/>
    <g fill="#2a9a10" stroke="none" opacity=".4"><circle cx="22" cy="70" r="4"/><circle cx="76" cy="62" r="5"/><circle cx="46" cy="84" r="3"/></g>
    <g fill="#d8ff9a" fill-opacity=".5" stroke="#eaffc8" stroke-width="1"><circle cx="82" cy="40" r="4"/><circle cx="88" cy="28" r="2.4"/><circle cx="16" cy="48" r="3"/></g>
    <circle cx="50" cy="44" r="14" fill="url(#xc-ey)"/><circle cx="26" cy="58" r="8" fill="url(#xc-ey)"/><circle cx="74" cy="56" r="9" fill="url(#xc-ey)"/>
    <circle cx="51" cy="46" r="6.4" fill="#c8102c" stroke="none"/><circle cx="51" cy="46" r="3" fill="#14101c" stroke="none"/><circle cx="49" cy="43" r="1.6" fill="#fff" stroke="none"/>
    <circle cx="27" cy="59" r="3.6" fill="#c8102c" stroke="none"/><circle cx="27" cy="59" r="1.6" fill="#14101c" stroke="none"/><circle cx="75" cy="57" r="4" fill="#c8102c" stroke="none"/><circle cx="75" cy="57" r="1.8" fill="#14101c" stroke="none"/>
    <path d="M26 72 Q50 94 76 70 Q50 80 26 72 Z" fill="#14380a"/><path d="M30 74 l2 5 3 -4 z M38 78 l2 6 3 -5 z M48 80 l2 6 3 -6 z M58 78 l2 6 3 -6 z M68 74 l2 5 3 -5 z" fill="#f4ffd8" stroke-width="1"/>
    <path d="M44 80 Q42 92 46 96 M58 82 Q60 94 56 98" fill="none" stroke="#b8ff6a" stroke-width="2.4"/>`),Ghost:a(`xd`,`${r(`xd-gh`,`#ffffff`,`#eef2ff`,`#b8c4e8`)}${r(`xd-gw`,`#e8f0ff`,`#a8c0ff`,`#6a80d0`)}`,`<ellipse cx="50" cy="52" rx="42" ry="46" fill="url(#xd-gw)" opacity=".5" stroke="none" filter="url(#xd-b)"/>
    <path d="M22 94 Q16 38 50 16 Q84 38 78 94 Q71 86 64 96 Q57 86 50 96 Q43 86 36 96 Q29 86 22 94 Z" fill="url(#xd-gh)" fill-opacity=".95"/>
    <path d="M22 62 Q8 64 8 74 Q16 72 24 74 Z M78 62 Q92 64 92 74 Q84 72 76 74 Z" fill="url(#xd-gh)" fill-opacity=".95" stroke-width="1.4"/>
    <ellipse cx="39" cy="48" rx="6.4" ry="9" fill="#14101c" stroke="none"/><ellipse cx="61" cy="48" rx="6.4" ry="9" fill="#14101c" stroke="none"/><circle cx="37.6" cy="44" r="2" fill="#fff" stroke="none"/><circle cx="59.6" cy="44" r="2" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="68" rx="6" ry="8.4" fill="#14101c" stroke="none"/><circle cx="31" cy="62" r="3.6" fill="#ffb0c8" opacity=".5" stroke="none"/><circle cx="69" cy="62" r="3.6" fill="#ffb0c8" opacity=".5" stroke="none"/>
    <path d="M30 32 Q38 22 50 21" fill="none" stroke="#fff" stroke-width="3.4"/><path d="M30 78 Q50 86 70 78" fill="none" stroke="#c8d4f4" stroke-width="1.6" stroke-opacity=".7"/>`),"Spooky Moth":a(`xe`,`${i(`xe-wg`,`#6a3a9a`,`#1a0a2e`)}${i(`xe-hw`,`#ffb04a`,`#c8400a`)}${r(`xe-es`,`#fff6a0`,`#ffb020`,`#c84a00`)}`,`<path d="M49 44 Q18 4 4 22 Q-2 44 18 56 Q36 60 49 52 Z" fill="url(#xe-wg)"/><path d="M49 54 Q26 62 20 84 Q28 98 44 86 Q54 76 49 58 Z" fill="url(#xe-hw)"/>
    <g transform="translate(100 0) scale(-1 1)"><path d="M49 44 Q18 4 4 22 Q-2 44 18 56 Q36 60 49 52 Z" fill="url(#xe-wg)"/><path d="M49 54 Q26 62 20 84 Q28 98 44 86 Q54 76 49 58 Z" fill="url(#xe-hw)"/></g>
    <path d="M30 50 Q18 36 14 26 M36 48 Q24 40 22 30 M44 46 Q36 34 30 22" fill="none" stroke="#b890e8" stroke-width="1" stroke-opacity=".6"/><path d="M70 50 Q82 36 86 26 M64 48 Q76 40 78 30 M56 46 Q64 34 70 22" fill="none" stroke="#b890e8" stroke-width="1" stroke-opacity=".6"/>
    <circle cx="22" cy="34" r="7.4" fill="url(#xe-es)"/><circle cx="22" cy="34" r="3.4" fill="#14101c" stroke="none"/><circle cx="78" cy="34" r="7.4" fill="url(#xe-es)"/><circle cx="78" cy="34" r="3.4" fill="#14101c" stroke="none"/>
    <path d="M26 82 L34 88 M30 76 L40 80 M74 82 L66 88 M70 76 L60 80" fill="none" stroke="#3a1a08" stroke-width="2.2"/>
    <ellipse cx="50" cy="56" rx="7.4" ry="24" fill="#2a1a3a"/>
    <circle cx="50" cy="46" r="4.6" fill="#f6f0e8" stroke-width="1"/><path d="M46 49 L54 49 L53 54 L47 54 Z" fill="#f6f0e8" stroke-width="1"/><circle cx="48.2" cy="45.6" r="1.2" fill="#14101c" stroke="none"/><circle cx="51.8" cy="45.6" r="1.2" fill="#14101c" stroke="none"/>
    <path d="M50 62 L50 76 M47 66 L53 66 M47 71 L53 71" stroke="#b890e8" stroke-width="1.2"/>
    <circle cx="50" cy="26" r="5.6" fill="#3a2a4a"/><circle cx="48" cy="25" r="1.4" fill="#ffb020" stroke="none"/><circle cx="52" cy="25" r="1.4" fill="#ffb020" stroke="none"/>
    <path d="M47 22 Q40 12 32 10 M53 22 Q60 12 68 10" fill="none" stroke="#b890e8" stroke-width="1.6"/><path d="M34 12 l-2 3 M38 14 l-2 3 M66 12 l2 3 M62 14 l2 3" stroke="#b890e8" stroke-width="1"/>
    ${f(8,12,4)}${f(92,14,3.4)}${f(10,78,3)}${f(92,84,3)}`),"Jack Russell Terrier":a(`h1`,`${r(`h1-fr`,`#ffffff`,`#f6f1ea`,`#d6ccbc`)}${r(`h1-mz`,`#ffffff`,`#f8f2ea`,`#e0d6c4`)}${r(`h1-ea`,`#e6a868`,`#b8661e`,`#6a3a10`)}`,k(`h1`,{ear:`fold`,mid:`<ellipse cx="36" cy="42" rx="10" ry="9" fill="#b8661e" stroke="none"/><path d="M46 26 Q56 24 62 34 Q52 40 46 26 Z" fill="#b8661e" stroke="none"/>`,tongue:!0})),Chihuahua:a(`h2`,`${r(`h2-fr`,`#fbe6bc`,`#e0b070`,`#8a5a2a`)}${r(`h2-mz`,`#fff0d4`,`#f4d4a0`,`#d0a064`)}${r(`h2-ea`,`#f0c88a`,`#d09858`,`#8a5a2a`)}`,k(`h2`,{ear:`bat`,eyeR:5,muzzleY:66,muzzleRx:11,headRx:24,headRy:23,before:`<path d="M24 36 L12 8 L40 24 Z M76 36 L88 8 L60 24 Z" fill="#ffb3c4" stroke="none" opacity=".9"/>`,after:`<path d="M32 80 Q50 92 68 80" fill="none" stroke="#ff4d86" stroke-width="4.4"/><circle cx="50" cy="88" r="3.6" fill="#7ee0ff" stroke-width="1.2"/>`})),"Yorkshire Terrier":a(`h3`,`${r(`h3-fr`,`#b4c4dc`,`#6a7ea2`,`#2a3a5a`)}${r(`h3-mz`,`#d2deee`,`#98aacb`,`#5a6e92`)}${r(`h3-ea`,`#8aa0c0`,`#4e6488`,`#26344e`)}${r(`h3-hr`,`#a8bad4`,`#5a6e92`,`#26344e`)}`,k(`h3`,{ear:`point`,bodyFill:`url(#h3-hr)`,before:`<path d="M32 32 Q6 44 12 92 Q26 98 32 66 Z M68 32 Q94 44 88 92 Q74 98 68 66 Z" fill="url(#h3-hr)"/><path d="M16 60 Q18 78 22 90 M84 60 Q82 78 78 90" fill="none" stroke="#26344e" stroke-width="1" stroke-opacity=".6"/>`,after:`<ellipse cx="50" cy="26" rx="9" ry="6" fill="#98aacb" stroke-width="1.2"/><path d="M50 24 L36 14 L36 28 Z M50 24 L64 14 L64 28 Z" fill="#ff4d6a" stroke-width="1.4"/><circle cx="50" cy="24" r="3.4" fill="#e8344a" stroke-width="1.2"/>`})),Poodle:a(`h4`,`${r(`h4-fr`,`#ffffff`,`#f8f2ea`,`#d8cdbc`)}${r(`h4-mz`,`#ffffff`,`#fbf6ee`,`#e4dac8`)}${r(`h4-ea`,`#ffffff`,`#f8f2ea`,`#d8cdbc`)}`,k(`h4`,{ear:`none`,headRx:22,before:`<g fill="url(#h4-fr)"><circle cx="16" cy="54" r="14"/><circle cx="12" cy="68" r="10"/><circle cx="84" cy="54" r="14"/><circle cx="88" cy="68" r="10"/><circle cx="22" cy="80" r="10"/><circle cx="78" cy="80" r="10"/></g>`,after:`<g fill="url(#h4-fr)"><circle cx="50" cy="20" r="12"/><circle cx="37" cy="26" r="9"/><circle cx="63" cy="26" r="9"/><circle cx="50" cy="31" r="7"/></g><g fill="url(#h4-fr)"><circle cx="34" cy="88" r="10"/><circle cx="50" cy="90" r="11"/><circle cx="66" cy="88" r="10"/></g><path d="M44 18 q6 -6 12 0 M10 50 q6 -6 12 0 M78 50 q6 -6 12 0" fill="none" stroke="#c8bca8" stroke-width="1.2"/><path d="M50 78 L40 70 L40 84 Z M50 78 L60 70 L60 84 Z" fill="#ff7eb6" stroke-width="1.4"/><circle cx="50" cy="78" r="3.4" fill="#ff4d96" stroke-width="1.2"/>`})),"German Shepherd":a(`h5`,`${r(`h5-fr`,`#f0c080`,`#c88a40`,`#7a4a18`)}${r(`h5-mz`,`#f4d09c`,`#d49a58`,`#8a5a28`)}${r(`h5-ea`,`#5a5a68`,`#26262e`,`#0c0c12`)}`,k(`h5`,{ear:`point`,muzzleY:66,muzzleRx:12,before:`<path d="M20 90 Q50 70 80 90 Z" fill="#26262e" stroke="none" opacity=".55"/>`,mid:`<path d="M44 26 L50 42 L56 26 Q50 22 44 26 Z" fill="#3a3040" stroke="none"/><ellipse cx="50" cy="62" rx="9" ry="10" fill="#3a3040" stroke="none" opacity=".85"/>`,eyeColor:`#6a3a10`,tongue:!0,after:`<path d="M30 28 L28 14 L40 24 Z M70 28 L72 14 L60 24 Z" fill="#e8b878" stroke="none" opacity=".9"/>`})),"Saint Bernard":a(`h6`,`${r(`h6-fr`,`#ffffff`,`#f6f0e8`,`#d8cbbc`)}${r(`h6-mz`,`#ffffff`,`#faf4ec`,`#e2d6c4`)}${r(`h6-ea`,`#c07a3a`,`#8a4a18`,`#4a2408`)}`,k(`h6`,{muzzleRx:16,worried:!0,tongue:!0,eyeR:3,mid:`<ellipse cx="36" cy="42" rx="11" ry="10" fill="#b0642a" stroke="none"/><path d="M46 24 Q50 22 54 24 L52 38 Q50 40 48 38 Z" fill="#b0642a" stroke="none"/>`,after:`<path d="M30 70 Q28 82 38 80 Q42 74 40 68 Z M70 70 Q72 82 62 80 Q58 74 60 68 Z" fill="url(#h6-mz)" stroke-width="1.2"/><path d="M36 82 Q50 92 64 82" fill="none" stroke="#c8281c" stroke-width="3.6"/><rect x="38" y="84" width="24" height="15" rx="5" fill="#9a5a24"/><path d="M38 89 L62 89 M38 94 L62 94" stroke="#4a2408" stroke-width="1.2"/><circle cx="50" cy="91" r="3.4" fill="#fff" stroke-width=".8"/><path d="M50 88.6 L50 93.4 M47.6 91 L52.4 91" stroke="#e8281c" stroke-width="1.4"/>`})),"Golden Retriever":a(`h7`,`${r(`h7-fr`,`#ffe9a0`,`#e8b44a`,`#a8681a`)}${r(`h7-mz`,`#fff2c4`,`#f6d27a`,`#d09a3a`)}${r(`h7-ea`,`#e8b44a`,`#b87a22`,`#6a4010`)}`,k(`h7`,{tongue:!0,eyeR:3.6,before:`<path d="M22 84 Q28 98 40 96 Q36 90 38 84 Z M78 84 Q72 98 60 96 Q64 90 62 84 Z" fill="url(#h7-fr)" stroke-width="1.2"/>`,after:`<circle cx="84" cy="90" r="8" fill="#d8f04a" stroke-width="1.4"/><path d="M77 88 Q84 92 91 88" fill="none" stroke="#fff" stroke-width="1.6" stroke-opacity=".8"/>`})),Dalmatian:a(`h8`,`${r(`h8-fr`,`#ffffff`,`#f6f4f0`,`#d6d2ca`)}${r(`h8-mz`,`#ffffff`,`#faf8f4`,`#e4e0d8`)}${r(`h8-ea`,`#5a5a66`,`#2a2a34`,`#0c0c12`)}`,k(`h8`,{before:`<g fill="#14101c" stroke="none"><circle cx="22" cy="88" r="3.4"/><circle cx="36" cy="94" r="2.6"/><circle cx="64" cy="92" r="3"/><circle cx="78" cy="86" r="3.6"/><circle cx="50" cy="98" r="2.4"/></g>`,mid:`<g fill="#14101c" stroke="none"><circle cx="34" cy="32" r="3.4"/><circle cx="60" cy="28" r="2.8"/><circle cx="68" cy="42" r="3.6"/><circle cx="30" cy="54" r="2.6"/><circle cx="46" cy="30" r="2"/><ellipse cx="62" cy="44" rx="6.6" ry="6" /></g>`,tongue:!0,after:`<path d="M34 80 Q50 92 66 80" fill="none" stroke="#e8281c" stroke-width="4"/><circle cx="50" cy="88" r="3" fill="#ffd23a" stroke-width="1.2"/>`})),Bloodhound:a(`h9`,`${r(`h9-fr`,`#f0be88`,`#c47c40`,`#6a3a14`)}${r(`h9-mz`,`#f6cfa0`,`#d8965a`,`#9a5a24`)}${r(`h9-ea`,`#a8602a`,`#6a3414`,`#2e1606`)}`,k(`h9`,{ear:`long`,muzzleY:66,muzzleRx:15,headRy:26,worried:!0,eyeR:3,mid:`<path d="M34 34 Q42 30 50 32 Q58 30 66 34 M36 28 Q50 24 64 28" fill="none" stroke="#6a3a14" stroke-width="1.2" stroke-opacity=".7"/>`,after:`<ellipse cx="38" cy="50" rx="4.6" ry="2.4" fill="#d8403c" stroke="none" opacity=".7"/><ellipse cx="62" cy="50" rx="4.6" ry="2.4" fill="#d8403c" stroke="none" opacity=".7"/><path d="M28 70 Q26 84 40 82 Q44 76 40 70 Z M72 70 Q74 84 60 82 Q56 76 60 70 Z" fill="url(#h9-mz)" stroke-width="1.2"/>`})),"Old English Sheepdog":a(`ha`,`${i(`ha-fr`,`#aab0bc`,`#f4f4f6`)}${r(`ha-mz`,`#ffffff`,`#f6f6f8`,`#d8dae0`)}${i(`ha-hr`,`#8a909c`,`#cfd3dc`)}`,`<ellipse cx="50" cy="98" rx="34" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#ha-b)"/>
    <path d="${D(50,92,36,22,.05,10)}" fill="url(#ha-fr)"/>
    <path d="${D(50,50,36,34,.06,11)}" fill="url(#ha-fr)"/>
    <ellipse cx="50" cy="66" rx="17" ry="14" fill="url(#ha-mz)" stroke-width="1"/>
    <ellipse cx="50" cy="60" rx="6.4" ry="4.4" fill="#14101c"/><ellipse cx="48.2" cy="58.6" rx="2" ry="1.1" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 64 L50 69 M50 69 Q44 76 38 72 M50 69 Q56 76 62 72" fill="none" stroke-width="1.4"/><path d="M45 73 Q50 86 55 73 Z" fill="#ff8aa0" stroke-width="1.2"/>
    <path d="M18 34 Q50 14 82 34 L80 58 Q74 46 64 52 L58 44 L50 54 L42 44 L36 52 Q26 46 20 58 Z" fill="url(#ha-hr)"/>
    <path d="M30 30 L26 52 M40 26 L38 48 M50 24 L50 46 M60 26 L62 48 M70 30 L74 52" fill="none" stroke="#6a707c" stroke-width="1.2" stroke-opacity=".6"/>
    <circle cx="40" cy="52" r="1.8" fill="#14101c" stroke="none" opacity=".55"/><circle cx="60" cy="52" r="1.8" fill="#14101c" stroke="none" opacity=".55"/>
    <path d="M30 70 Q28 84 40 84 M70 70 Q72 84 60 84" fill="none" stroke="#c0c4cc" stroke-width="1.4"/>`),"Robot Dog":S(`hb`,`${i(`hb-m`,`#eef2fa`,`#8896b0`)}${i(`hb-d`,`#9aa6bc`,`#4a566c`)}`,`<ellipse cx="50" cy="98" rx="34" ry="3" fill="#000" opacity=".3" stroke="none" filter="url(#hb-b)"/>
    ${_(`M70 90 Q92 92 90 66`,`#8896b0`,5.4)}${x(90,62,4.4,`#ff5a5a`)}
    <rect x="26" y="72" width="48" height="26" rx="11" fill="url(#hb-m)"/>
    <rect x="28" y="92" width="16" height="8" rx="4" fill="url(#hb-d)"/><rect x="56" y="92" width="16" height="8" rx="4" fill="url(#hb-d)"/>
    <path d="M36 82 L64 82 M36 88 L64 88" stroke="#4a566c" stroke-width="1.3" stroke-opacity=".7"/>
    <path d="M27 40 Q6 44 8 74 Q12 86 27 74 Q32 58 34 42 Z" fill="url(#hb-d)"/><path d="M73 40 Q94 44 92 74 Q88 86 73 74 Q68 58 66 42 Z" fill="url(#hb-d)"/>
    <circle cx="16" cy="64" r="2" fill="#2a3446" stroke="none"/><circle cx="84" cy="64" r="2" fill="#2a3446" stroke="none"/><path d="M14 54 Q12 64 16 74 M86 54 Q88 64 84 74" fill="none" stroke="#2a3446" stroke-width="1" stroke-opacity=".6"/>
    <rect x="24" y="24" width="52" height="50" rx="20" fill="url(#hb-m)"/>
    <path d="M36 28 L64 28" stroke="#4a566c" stroke-width="1.6" stroke-opacity=".6"/><circle cx="32" cy="32" r="1.8" fill="#4a566c" stroke="none"/><circle cx="68" cy="32" r="1.8" fill="#4a566c" stroke="none"/>
    <circle cx="39" cy="44" r="8.4" fill="#0f1a2a"/><circle cx="61" cy="44" r="8.4" fill="#0f1a2a"/>${x(39,44,5,`#5ff1ff`)}${x(61,44,5,`#5ff1ff`)}
    <path d="M30 34 L46 38 M70 34 L54 38" fill="none" stroke="#4a566c" stroke-width="2.2"/>
    <ellipse cx="50" cy="64" rx="17" ry="12" fill="url(#hb-d)"/>
    <ellipse cx="50" cy="57" rx="6.4" ry="4.4" fill="#14101c"/><ellipse cx="48.2" cy="55.6" rx="2" ry="1.1" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 61 L50 66 M50 66 Q44 72 38 68 M50 66 Q56 72 62 68" fill="none" stroke="#2a3446" stroke-width="1.5"/>
    <path d="M45 70 Q50 80 55 70 Z" fill="#ff5a7a" stroke-width="1.2"/>
    <g fill="#2a3446" stroke="none"><circle cx="40" cy="62" r="1"/><circle cx="43" cy="65" r="1"/><circle cx="60" cy="62" r="1"/><circle cx="57" cy="65" r="1"/></g>
    <path d="M30 76 Q50 90 70 76" fill="none" stroke="#3a8aff" stroke-width="3.6"/>
    <path d="M44 86 Q50 82 56 86 Q56 92 50 92 Q44 92 44 86 Z" fill="#ffd23a" stroke-width="1.2"/><circle cx="50" cy="87" r="1.4" fill="#a87a00" stroke="none"/>
    <path d="M32 30 Q40 26 48 26" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.6"/>
    ${f(8,20,4)}${f(92,30,3.4)}${f(10,88,3)}`),Banana:a(`m1`,`${i(`m1-by`,`#fff6a0`,`#f2b600`)}`,`<ellipse cx="50" cy="95" rx="28" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#m1-b)"/>
    <path d="M32 90 Q6 62 28 30 Q44 10 68 12 L76 24 Q54 30 48 52 Q46 76 42 90 Q38 96 32 90 Z" fill="url(#m1-by)"/>
    <path d="M34 82 Q16 58 34 34 Q46 20 66 18" fill="none" stroke="#c88a00" stroke-width="1.6" stroke-opacity=".55"/>
    <path d="M64 12 L72 4 L80 12 L74 26 Z" fill="#6a4a1c"/>
    <circle cx="36" cy="92" r="3.6" fill="#4a3010" stroke-width="1"/>
    <g fill="#b87a10" stroke="none" opacity=".6"><circle cx="40" cy="60" r="1.6"/><circle cx="36" cy="46" r="1.4"/><circle cx="46" cy="72" r="1.4"/></g>
    <path d="M20 56 Q22 40 36 26" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3.4"/>`),Watermelon:a(`m2`,`${i(`m2-rd`,`#ff7a7a`,`#d6262e`)}${i(`m2-rn`,`#5fcf6a`,`#1f7a30`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#m2-b)"/>
    <path d="M6 34 L94 34 Q94 96 50 96 Q6 96 6 34 Z" fill="url(#m2-rn)"/>
    <path d="M10 34 L90 34 Q90 91 50 91 Q10 91 10 34 Z" fill="#f4fbe4" stroke-width="1"/>
    <path d="M14 34 L86 34 Q86 86 50 86 Q14 86 14 34 Z" fill="url(#m2-rd)" stroke-width="1"/>
    <g fill="#1a1020" stroke="none"><ellipse cx="30" cy="48" rx="2.6" ry="4" transform="rotate(-20 30 48)"/><ellipse cx="50" cy="44" rx="2.6" ry="4"/><ellipse cx="70" cy="48" rx="2.6" ry="4" transform="rotate(20 70 48)"/><ellipse cx="40" cy="64" rx="2.6" ry="4" transform="rotate(-10 40 64)"/><ellipse cx="60" cy="64" rx="2.6" ry="4" transform="rotate(10 60 64)"/><ellipse cx="50" cy="76" rx="2.4" ry="3.6"/></g>
    <path d="M20 40 Q22 62 36 76" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <ellipse cx="50" cy="34" rx="44" ry="5.4" fill="url(#m2-rd)"/>`),Cheese:a(`m3`,`${i(`m3-ch`,`#fff08a`,`#f2b81a`)}${i(`m3-sd`,`#f2c840`,`#c88a00`)}`,`<ellipse cx="50" cy="93" rx="42" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#m3-b)"/>
    <path d="M6 76 L84 36 Q96 32 96 46 L96 78 Q96 84 90 84 L10 84 Q2 84 6 76 Z" fill="url(#m3-ch)"/>
    <path d="M6 76 L96 76 L96 84 Q96 88 90 88 L10 88 Q2 88 6 80 Z" fill="url(#m3-sd)"/>
    <path d="M84 36 Q96 32 96 46 L96 76 L84 76 Z" fill="#e8a010" stroke-width="1.2"/>
    <g fill="#d99410" stroke-width="1.2"><ellipse cx="34" cy="68" rx="7" ry="5.4"/><ellipse cx="56" cy="62" rx="5" ry="4"/><ellipse cx="72" cy="52" rx="4" ry="3.4"/><ellipse cx="62" cy="76" rx="4.4" ry="3"/><ellipse cx="20" cy="80" rx="3.2" ry="2.4"/></g>
    <path d="M12 74 L58 50" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.6"/>`),Doughnut:a(`m4`,`${r(`m4-dg`,`#f6d09a`,`#d49a52`,`#8a5420`)}${r(`m4-fr`,`#ffc4de`,`#ff7eb6`,`#d6428a`)}`,`<ellipse cx="50" cy="90" rx="38" ry="4" fill="#000" opacity=".25" stroke="none" filter="url(#m4-b)"/>
    <ellipse cx="50" cy="62" rx="40" ry="32" fill="url(#m4-dg)"/>
    <path d="${D(50,56,38,29,.05,9)}" fill="url(#m4-fr)"/>
    <ellipse cx="50" cy="56" rx="13" ry="10" fill="#6a3a14"/><ellipse cx="50" cy="58" rx="10" ry="7" fill="#d49a52" stroke="none"/><ellipse cx="50" cy="55" rx="11" ry="8" fill="none" stroke="#1d1008" stroke-width="2.4"/>
    <g stroke-width="2.6" stroke-linecap="round"><path d="M22 52 l5 -2" stroke="#fff"/><path d="M30 38 l4 3" stroke="#4aa8e8"/><path d="M44 32 l5 1" stroke="#ffe14a"/><path d="M62 33 l5 -1" stroke="#7ee07a"/><path d="M76 42 l4 3" stroke="#fff"/><path d="M82 56 l-2 5" stroke="#ffe14a"/><path d="M70 74 l-4 -2" stroke="#4aa8e8"/><path d="M52 80 l-1 -5" stroke="#fff"/><path d="M34 72 l4 3" stroke="#7ee07a"/><path d="M20 64 l5 1" stroke="#ffe14a"/><path d="M66 46 l3 4" stroke="#4aa8e8"/><path d="M34 52 l-4 3" stroke="#7ee07a"/><path d="M42 68 l3 -4" stroke="#e8404c"/><path d="M62 64 l4 1" stroke="#e8404c"/></g>
    <path d="M24 44 Q34 32 50 30" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>`),Taco:a(`m5`,`${i(`m5-sh`,`#ffe58a`,`#e8982a`)}${i(`m5-in`,`#c8862a`,`#7a4a10`)}${i(`m5-lt`,`#9fe070`,`#3f9a2a`)}${i(`m5-mt`,`#a86a3a`,`#4a2810`)}`,`<ellipse cx="50" cy="93" rx="40" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#m5-b)"/>
    <g transform="rotate(-9 50 60)">
    <path d="M6 54 Q8 20 50 18 Q92 20 94 54 Q50 66 6 54 Z" fill="url(#m5-in)"/>
    <path d="M10 52 Q16 40 30 46 Q42 36 54 46 Q68 38 80 46 Q88 44 92 52 Q50 62 10 52 Z" fill="url(#m5-mt)"/>
    <g fill="#2a1408" stroke="none" opacity=".55"><circle cx="24" cy="50" r="1.6"/><circle cx="40" cy="46" r="1.6"/><circle cx="58" cy="48" r="1.6"/><circle cx="74" cy="48" r="1.6"/></g>
    <path d="M4 44 Q12 22 24 34 Q32 14 44 30 Q54 12 66 30 Q78 16 88 32 Q98 30 98 48 Q90 56 80 52 Q50 62 20 52 Q8 56 4 44 Z" fill="url(#m5-lt)"/>
    <path d="M16 36 Q24 28 30 38 M52 28 Q60 22 64 32 M76 32 Q84 28 88 38" fill="none" stroke="#c8f0a0" stroke-width="1.6" stroke-opacity=".8"/>
    <g stroke-width="1"><rect x="26" y="36" width="9" height="9" rx="1.6" fill="#e8402c" transform="rotate(-14 30 40)"/><rect x="48" y="30" width="9" height="9" rx="1.6" fill="#e8402c" transform="rotate(12 52 34)"/><rect x="70" y="36" width="8" height="8" rx="1.6" fill="#e8402c" transform="rotate(20 74 40)"/></g>
    <path d="M14 44 l8 -3 M38 46 l8 2 M58 42 l8 -4 M80 44 l7 -2 M22 32 l7 3 M62 26 l7 2" stroke="#ffd23a" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M6 54 Q8 92 50 92 Q92 92 94 54 Q50 76 6 54 Z" fill="url(#m5-sh)"/>
    <path d="M13 62 Q18 82 40 88" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>
    <path d="M8 58 Q50 80 92 58" fill="none" stroke="#b8701a" stroke-width="1.6" stroke-opacity=".65"/>
    <g fill="#c8741a" stroke="none" opacity=".55"><circle cx="30" cy="76" r="1.6"/><circle cx="52" cy="82" r="1.6"/><circle cx="70" cy="74" r="1.6"/><circle cx="84" cy="66" r="1.4"/></g>
    </g>`),Bao:a(`m6`,`${r(`m6-bn`,`#ffffff`,`#f6f1e6`,`#d8cdb4`)}${i(`m6-bk`,`#d8a868`,`#8a5a2a`)}`,`<ellipse cx="50" cy="82" rx="46" ry="14" fill="url(#m6-bk)"/>
    <path d="M10 82 Q50 98 90 82 M18 90 Q50 100 82 90" fill="none" stroke="#5a3a18" stroke-width="1.4" stroke-opacity=".7"/><path d="M20 74 L30 92 M34 78 L42 96 M50 80 L50 98 M66 78 L58 96 M80 74 L70 92" stroke="#5a3a18" stroke-width="1" stroke-opacity=".5" fill="none"/>
    <ellipse cx="50" cy="76" rx="42" ry="10" fill="#b88848" stroke-width="1.2"/>
    <path d="M16 70 Q14 34 50 32 Q86 34 84 70 Q50 80 16 70 Z" fill="url(#m6-bn)"/>
    <path d="M50 33 Q36 42 30 66 M50 33 Q42 46 40 70 M50 33 Q50 48 50 72 M50 33 Q58 46 60 70 M50 33 Q64 42 70 66" fill="none" stroke="#c8b898" stroke-width="1.6"/>
    <circle cx="50" cy="32" r="4.4" fill="#f2e6cc" stroke-width="1.2"/>
    <path d="M24 56 Q26 44 38 38" fill="none" stroke="#fff" stroke-width="3.2"/>`),Sushi:a(`m7`,`${i(`m7-rc`,`#ffffff`,`#e8e4dc`)}${i(`m7-sa`,`#ffa070`,`#f0602a`)}${i(`m7-wd`,`#c8905a`,`#7a4a20`)}`,`<rect x="4" y="68" width="92" height="24" rx="4" fill="url(#m7-wd)"/><path d="M8 74 L92 74 M8 82 L92 82 M12 88 L88 88" stroke="#4a2810" stroke-width="1" stroke-opacity=".5"/>
    <circle cx="28" cy="52" r="20" fill="#14101c"/><circle cx="28" cy="52" r="16.4" fill="url(#m7-rc)" stroke-width="1"/>
    <circle cx="28" cy="52" r="8" fill="url(#m7-sa)" stroke-width="1"/><circle cx="33" cy="47" r="3.4" fill="#7ee07a" stroke-width="1"/>
    <g fill="#c8c4b8" stroke="none"><circle cx="16" cy="46" r="1"/><circle cx="40" cy="58" r="1"/><circle cx="22" cy="63" r="1"/><circle cx="38" cy="42" r="1"/></g>
    <rect x="52" y="52" width="40" height="22" rx="10" fill="url(#m7-rc)"/>
    <path d="M50 50 Q70 36 94 50 Q96 62 90 66 Q70 58 54 66 Q46 60 50 50 Z" fill="url(#m7-sa)"/>
    <path d="M56 50 Q70 56 62 64 M68 44 Q82 54 74 62 M80 46 Q90 54 86 62" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.8"/>
    <circle cx="88" cy="74" r="4.6" fill="#7ee07a" stroke-width="1.2"/>`),Cheeseburger:a(`m8`,`${r(`m8-bn`,`#f6c070`,`#d98a30`,`#8a4a14`)}${i(`m8-pt`,`#8a5a3a`,`#3a2010`)}${i(`m8-ch`,`#ffe566`,`#f2b01a`)}`,`<ellipse cx="50" cy="95" rx="42" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#m8-b)"/>
    <path d="M12 82 Q12 92 24 92 L76 92 Q88 92 88 82 Z" fill="url(#m8-bn)"/>
    <rect x="8" y="68" width="84" height="14" rx="7" fill="url(#m8-pt)"/>
    <path d="M6 62 L94 62 L88 70 L76 80 L68 70 L50 72 L38 82 L30 70 L12 70 Z" fill="url(#m8-ch)"/>
    <path d="M10 56 L90 56 L92 62 L8 62 Z" fill="#e8402c"/>
    <path d="M6 54 Q16 42 24 54 T40 54 T56 54 T72 54 T94 54 L92 58 L8 58 Z" fill="#6fcf5a" stroke-width="1.2"/>
    <path d="M10 50 Q8 14 50 14 Q92 14 90 50 Z" fill="url(#m8-bn)"/>
    <g fill="#fff6d8" stroke="none"><ellipse cx="34" cy="26" rx="3.4" ry="1.8" transform="rotate(-20 34 26)"/><ellipse cx="50" cy="22" rx="3.4" ry="1.8"/><ellipse cx="66" cy="26" rx="3.4" ry="1.8" transform="rotate(20 66 26)"/><ellipse cx="42" cy="36" rx="3.4" ry="1.8" transform="rotate(-10 42 36)"/><ellipse cx="60" cy="36" rx="3.4" ry="1.8" transform="rotate(10 60 36)"/><ellipse cx="26" cy="40" rx="3.2" ry="1.6" transform="rotate(-30 26 40)"/><ellipse cx="76" cy="40" rx="3.2" ry="1.6" transform="rotate(30 76 40)"/></g>
    <path d="M18 40 Q22 24 38 18" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Sandwich:a(`m9`,`${i(`m9-br`,`#fff0c8`,`#e0b068`)}${i(`m9-ch`,`#ffe566`,`#f2b01a`)}`,`<ellipse cx="50" cy="95" rx="42" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#m9-b)"/>
    ${O(`m9`,12,88,`<path d="M50 36 L50 8" stroke="#c89a5a" stroke-width="2.4"/><path d="M50 8 L64 12 L50 16 Z" fill="#e8404c" stroke-width="1"/><circle cx="50" cy="28" r="4" fill="#5a8a2a" stroke-width="1"/><circle cx="50" cy="28" r="1.6" fill="#e8402c" stroke="none"/>`)}`),"Half a Sandwich":a(`ma`,`${i(`ma-br`,`#fff0c8`,`#e0b068`)}${i(`ma-ch`,`#ffe566`,`#f2b01a`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#ma-b)"/>
    ${O(`ma`,30,72,`<g fill="#e8d4a0" stroke="none"><circle cx="82" cy="90" r="1.6"/><circle cx="88" cy="86" r="1.2"/><circle cx="76" cy="93" r="1.2"/><circle cx="20" cy="91" r="1.4"/></g>`)}`),Ant:a(`g1`,`${r(`g1-bd`,`#7a6a62`,`#3a2e28`,`#150e0c`)}`,`<ellipse cx="50" cy="95" rx="38" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#g1-b)"/>
    ${_(`M56 60 Q66 66 74 84 L78 94`,`#2a1f1a`,3)}${_(`M50 64 L46 84 L42 95`,`#2a1f1a`,3)}${_(`M44 62 Q34 74 28 84 L20 95`,`#2a1f1a`,3)}
    ${_(`M60 56 Q74 62 82 74 L90 82`,`#3a2e28`,2.4)}${_(`M52 60 L56 80 L60 92`,`#3a2e28`,2.4)}${_(`M46 58 Q38 68 36 80 L34 92`,`#3a2e28`,2.4)}
    <ellipse cx="24" cy="62" rx="19" ry="15" fill="url(#g1-bd)"/>
    <path d="M42 60 L46 60" stroke="#2a1f1a" stroke-width="3"/>
    <ellipse cx="52" cy="57" rx="12" ry="10" fill="url(#g1-bd)"/>
    <circle cx="76" cy="48" r="14" fill="url(#g1-bd)"/>
    ${_(`M82 38 Q86 24 96 24`,`#2a1f1a`,2)}${_(`M76 36 Q76 22 86 16`,`#2a1f1a`,2)}<circle cx="96" cy="24" r="2" fill="#2a1f1a" stroke="none"/><circle cx="86" cy="16" r="2" fill="#2a1f1a" stroke="none"/>
    <circle cx="80" cy="44" r="4.6" fill="#fff"/><circle cx="81.4" cy="45" r="2.6" fill="#14101c" stroke="none"/><circle cx="82.2" cy="43.8" r=".9" fill="#fff" stroke="none"/>
    <path d="M78 55 Q84 60 90 55" fill="none" stroke="#e8d8c8" stroke-width="1.4"/>
    <path d="M10 54 Q22 46 34 52" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/><path d="M68 38 Q74 33 80 34" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.4"/>`),"Rhino Beetle":a(`g2`,`${r(`g2-sh`,`#d99a4a`,`#8a5420`,`#3a200c`)}${r(`g2-hd`,`#7a5030`,`#3e2412`,`#1a0e06`)}`,`<ellipse cx="50" cy="95" rx="40" ry="3.2" fill="#000" opacity=".25" stroke="none" filter="url(#g2-b)"/>
    ${_(`M60 70 Q70 80 74 94`,`#2a1a0c`,3.4)}${_(`M46 72 L48 94`,`#2a1a0c`,3.4)}${_(`M32 70 Q24 82 20 94`,`#2a1a0c`,3.4)}
    <ellipse cx="42" cy="60" rx="33" ry="26" fill="url(#g2-sh)"/>
    <path d="M12 62 Q42 30 74 56" fill="none" stroke="#2a1608" stroke-width="2" stroke-opacity=".6"/><path d="M42 36 L44 84" fill="none" stroke="#2a1608" stroke-width="1.4" stroke-opacity=".5"/>
    <path d="M18 50 Q30 38 46 38" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.4"/>
    <ellipse cx="76" cy="62" rx="14" ry="12" fill="url(#g2-hd)"/>
    ${_(`M80 54 Q94 46 92 24 Q90 12 80 10`,`#4a2c14`,8)}${_(`M86 58 Q96 56 98 48`,`#4a2c14`,4)}
    <circle cx="80" cy="60" r="4.2" fill="#fff"/><circle cx="81" cy="61" r="2.4" fill="#14101c" stroke="none"/><circle cx="82" cy="59.8" r=".9" fill="#fff" stroke="none"/>
    <path d="M78 70 Q84 74 90 70" fill="none" stroke="#e8d8c8" stroke-width="1.3"/>
    ${_(`M70 52 Q68 42 62 40`,`#2a1a0c`,1.8)}`),Ladybug:a(`g3`,`${r(`g3-bd`,`#ff8a7a`,`#e0301e`,`#8a0e08`)}${r(`g3-hd`,`#6a6a78`,`#2a2a36`,`#0a0a10`)}`,`${_(`M24 50 L10 44 M22 62 L8 64 M26 76 L12 86 M76 50 L90 44 M78 62 L92 64 M74 76 L88 86`,`#14101c`,2.4)}
    ${_(`M42 22 Q38 8 28 8 M58 22 Q62 8 72 8`,`#14101c`,1.8)}<circle cx="28" cy="8" r="2" fill="#14101c" stroke="none"/><circle cx="72" cy="8" r="2" fill="#14101c" stroke="none"/>
    <ellipse cx="50" cy="58" rx="31" ry="35" fill="url(#g3-bd)"/>
    <path d="M50 24 L50 93" fill="none" stroke="#14101c" stroke-width="2.2"/>
    <g fill="#14101c" stroke="none"><circle cx="36" cy="46" r="6"/><circle cx="64" cy="46" r="6"/><circle cx="34" cy="68" r="5.4"/><circle cx="66" cy="68" r="5.4"/><circle cx="44" cy="82" r="4"/><circle cx="56" cy="82" r="4"/></g>
    <path d="M28 42 Q34 32 44 30" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3.4"/>
    <ellipse cx="50" cy="26" rx="17" ry="13" fill="url(#g3-hd)"/>
    <ellipse cx="42" cy="24" rx="5.4" ry="6" fill="#fff"/><ellipse cx="58" cy="24" rx="5.4" ry="6" fill="#fff"/><circle cx="43" cy="25" r="2.4" fill="#14101c" stroke="none"/><circle cx="57" cy="25" r="2.4" fill="#14101c" stroke="none"/>`),Fly:a(`g4`,`${r(`g4-bd`,`#7a8696`,`#3e4858`,`#161c28`)}${r(`g4-ey`,`#ff9a8a`,`#d6261c`,`#6a0a08`)}`,`${_(`M42 56 L24 64 L18 78 M44 64 L30 80 L28 94 M58 56 L76 64 L82 78 M56 64 L70 80 L72 94`,`#14101c`,2.2)}
    <ellipse cx="22" cy="44" rx="22" ry="10" fill="#dff4ff" fill-opacity=".72" transform="rotate(-32 22 44)"/><path d="M8 32 L34 52 M6 42 L32 54 M14 28 L30 48" fill="none" stroke="#8ab4d0" stroke-width="1" transform="rotate(0)"/>
    <ellipse cx="78" cy="44" rx="22" ry="10" fill="#dff4ff" fill-opacity=".72" transform="rotate(32 78 44)"/><path d="M92 32 L66 52 M94 42 L68 54 M86 28 L70 48" fill="none" stroke="#8ab4d0" stroke-width="1"/>
    <ellipse cx="50" cy="82" rx="12" ry="14" fill="url(#g4-bd)"/><path d="M40 78 Q50 82 60 78 M40 86 Q50 90 60 86" fill="none" stroke="#9aa8ba" stroke-width="1.6" stroke-opacity=".7"/>
    <ellipse cx="50" cy="58" rx="15" ry="16" fill="url(#g4-bd)"/><path d="M40 52 L60 52" stroke="#9aa8ba" stroke-width="1.4" stroke-opacity=".6"/>
    <circle cx="50" cy="34" r="12" fill="url(#g4-bd)"/>
    <ellipse cx="41" cy="31" rx="7.4" ry="9" fill="url(#g4-ey)"/><ellipse cx="59" cy="31" rx="7.4" ry="9" fill="url(#g4-ey)"/>
    <circle cx="39" cy="27" r="2" fill="#fff" stroke="none" opacity=".85"/><circle cx="57" cy="27" r="2" fill="#fff" stroke="none" opacity=".85"/>
    <path d="M44 42 Q50 47 56 42" fill="none" stroke="#e8d8c8" stroke-width="1.4"/>
    ${_(`M46 24 Q42 14 36 14 M54 24 Q58 14 64 14`,`#14101c`,1.4)}`),Worm:a(`g5`,`${i(`g5-dt`,`#a8764a`,`#4a2c14`)}`,`<path d="M0 100 L0 82 Q10 78 20 82 T40 82 Q50 76 60 82 T80 82 Q90 78 100 82 L100 100 Z" fill="url(#g5-dt)"/>
    <g fill="#7a4e2c" stroke="none" opacity=".7"><circle cx="14" cy="92" r="2.4"/><circle cx="84" cy="90" r="2"/><circle cx="30" cy="96" r="1.8"/><circle cx="70" cy="96" r="2.4"/></g>
    <ellipse cx="50" cy="84" rx="16" ry="5" fill="#1d1008"/>
    <path d="M10 82 l2 -8 l3 8 M88 82 l2 -9 l3 9" fill="none" stroke="#58bd4c" stroke-width="1.8"/>
    ${_(`M50 86 Q22 70 46 54 Q72 40 52 22`,`#f0a0a0`,17)}
    <path d="M50 86 Q22 70 46 54 Q72 40 52 22" fill="none" stroke="#c46a6a" stroke-width="17" stroke-dasharray="1.4 8" stroke-opacity=".55"/>
    ${_(`M50 86 Q22 70 46 54 Q72 40 52 22`,`#f0a0a0`,12)}
    <path d="M32 66 Q26 58 36 52" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <circle cx="46" cy="18" r="3.6" fill="#fff"/><circle cx="58" cy="18" r="3.6" fill="#fff"/><circle cx="47" cy="19" r="1.8" fill="#14101c" stroke="none"/><circle cx="59" cy="19" r="1.8" fill="#14101c" stroke="none"/>
    <path d="M47 27 Q52 31 57 27" fill="none" stroke="#a04a4a" stroke-width="1.4"/>
    <circle cx="42" cy="26" r="2.4" fill="#ff7a7a" opacity=".55" stroke="none"/><circle cx="62" cy="26" r="2.4" fill="#ff7a7a" opacity=".55" stroke="none"/>`),Bee:a(`g6`,`${r(`g6-bd`,`#fff08a`,`#ffc21a`,`#c88a00`)}${r(`g6-hd`,`#ffe27a`,`#d89a10`,`#6a4400`)}<clipPath id="g6-cl"><ellipse cx="42" cy="62" rx="28" ry="19"/></clipPath>`,`${_(`M52 76 L54 90 M40 78 L38 92 M30 74 L24 88`,`#2a1a08`,2.2)}
    <ellipse cx="40" cy="34" rx="18" ry="10" fill="#e6f6ff" fill-opacity=".8" transform="rotate(-28 40 34)"/><path d="M26 24 L50 38 M30 20 L52 34" fill="none" stroke="#8ab4d0" stroke-width="1"/>
    <ellipse cx="58" cy="32" rx="14" ry="8" fill="#e6f6ff" fill-opacity=".7" transform="rotate(14 58 32)"/>
    <path d="M14 62 L2 64 L14 68 Z" fill="#2a1a08" stroke-width="1.2"/>
    <ellipse cx="42" cy="62" rx="28" ry="19" fill="url(#g6-bd)"/>
    <g clip-path="url(#g6-cl)" fill="#1d1408" stroke="none"><rect x="22" y="40" width="8" height="46"/><rect x="38" y="40" width="9" height="46"/><rect x="55" y="40" width="9" height="46"/></g>
    <path d="M22 54 Q34 44 50 46" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <circle cx="76" cy="56" r="14" fill="url(#g6-hd)"/>
    ${_(`M80 44 Q84 30 94 30`,`#2a1a08`,1.8)}${_(`M72 44 Q72 30 82 24`,`#2a1a08`,1.8)}<circle cx="94" cy="30" r="2" fill="#2a1a08" stroke="none"/><circle cx="82" cy="24" r="2" fill="#2a1a08" stroke="none"/>
    <circle cx="80" cy="52" r="5" fill="#fff"/><circle cx="81.4" cy="53" r="2.8" fill="#14101c" stroke="none"/><circle cx="82.2" cy="51.8" r="1" fill="#fff" stroke="none"/>
    <path d="M78 62 Q84 67 90 62" fill="none" stroke="#2a1a08" stroke-width="1.4"/><circle cx="72" cy="62" r="3" fill="#ff9a8a" opacity=".55" stroke="none"/>`),Mantis:a(`g7`,`${r(`g7-gr`,`#d6f7a0`,`#7ac74f`,`#2f7a2a`)}${r(`g7-ey`,`#fff6c8`,`#f0d860`,`#8a6a10`)}${i(`g7-wg`,`#d8f9b0`,`#7ac74f`)}`,`<ellipse cx="50" cy="96" rx="38" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#g7-b)"/>
    ${_(`M38 70 Q18 78 12 92 L8 98`,`#3f9a32`,2.8)}${_(`M62 70 Q82 78 88 92 L92 98`,`#3f9a32`,2.8)}
    ${_(`M40 62 Q24 66 20 80 L18 92`,`#4aa83a`,2.6)}${_(`M60 62 Q76 62 80 74 L84 80`,`#4aa83a`,2.6)}
    <path d="M36 54 Q22 76 32 98 Q50 90 68 98 Q78 76 64 54 Z" fill="url(#g7-wg)" fill-opacity=".8" stroke-width="1.2"/>
    <path d="M42 50 Q50 46 58 50 L62 82 Q50 96 38 82 Z" fill="url(#g7-gr)"/>
    <path d="M44 62 L56 62 M44 70 L56 70 M45 78 L55 78" stroke="#2f7a2a" stroke-width="1.2" stroke-opacity=".6"/>
    ${_(`M42 56 Q4 58 6 14 Q8 6 16 8`,`#4aa83a`,5.2)}${_(`M58 56 Q96 58 94 14 Q92 6 84 8`,`#4aa83a`,5.2)}
    <path d="M10 6 Q8 32 17 56 Q26 32 23 6 Z" fill="url(#g7-gr)"/><path d="M23 14 l7 4 -8 1 Z M24 26 l7 4 -8 1 Z M23 38 l7 4 -8 1 Z" fill="#2a6a24" stroke-width="1"/>
    <path d="M90 6 Q92 32 83 56 Q74 32 77 6 Z" fill="url(#g7-gr)"/><path d="M77 14 l-7 4 8 1 Z M76 26 l-7 4 8 1 Z M77 38 l-7 4 8 1 Z" fill="#2a6a24" stroke-width="1"/>

    <g transform="rotate(-7 50 28)">
    <path d="M28 18 Q50 2 72 18 Q72 40 50 50 Q28 40 28 18 Z" fill="url(#g7-gr)"/>
    <ellipse cx="39" cy="22" rx="8.4" ry="10" fill="url(#g7-ey)"/><ellipse cx="61" cy="22" rx="8.4" ry="10" fill="url(#g7-ey)"/>
    <ellipse cx="40" cy="23" rx="3.4" ry="6.6" fill="#14101c" stroke="none"/><ellipse cx="60" cy="23" rx="3.4" ry="6.6" fill="#14101c" stroke="none"/>
    <circle cx="38.6" cy="19" r="1.5" fill="#fff" stroke="none"/><circle cx="58.6" cy="19" r="1.5" fill="#fff" stroke="none"/>
    <path d="M30 12 L46 18 M70 12 L54 18" fill="none" stroke="#2a6a24" stroke-width="2.4"/>
    <path d="M42 40 L50 48 L58 40" fill="none" stroke="#2a6a24" stroke-width="1.8"/><path d="M46 42 L46 47 M54 42 L54 47" stroke="#2a6a24" stroke-width="1.3"/>
    ${_(`M40 8 Q36 -1 28 0`,`#4aa83a`,1.4)}${_(`M60 8 Q64 -1 72 0`,`#4aa83a`,1.4)}</g>`),Butterfly:a(`g8`,`${i(`g8-wg`,`#ffc24a`,`#e8531e`)}`,E(`g8`,`#1d1408`,`#fff`)),"Blue Butterfly":a(`g9`,`${i(`g9-wg`,`#b8f0ff`,`#2a6fe0`)}`,E(`g9`,`#14307a`,`#e8fbff`,`${f(8,10,4)}${f(92,12,3.4)}${f(92,86,3)}${f(10,90,3)}`)),Deckhand:a(`r1`,`${i(`r1-sh`,`#ffffff`,`#dfe6f0`)}${i(`r1-cp`,`#5a8ae8`,`#1f3a8a`)}<clipPath id="r1-cl"><path d="M8 100 Q12 78 50 76 Q88 78 92 100 Z"/></clipPath>`,`${_(`M86 100 L82 46`,`#8a5a2c`,3.6)}
    <path d="M70 46 Q74 30 84 32 Q94 34 92 46 Q82 54 70 46 Z" fill="#dcdfe6" stroke-width="1.2"/><path d="M74 44 L72 52 M80 46 L80 54 M86 45 L88 52" stroke="#aab0bc" stroke-width="1.2" fill="none"/>
    <path d="M8 100 Q12 78 50 76 Q88 78 92 100 Z" fill="url(#r1-sh)"/>
    <g clip-path="url(#r1-cl)" stroke="none" fill="#2a4a9a"><rect x="0" y="82" width="100" height="4"/><rect x="0" y="90" width="100" height="4"/><rect x="0" y="98" width="100" height="4"/></g>
    <path d="M36 77 L50 92 L64 77 Q50 82 36 77 Z" fill="#e8404c" stroke-width="1.2"/>
    ${s(`r1`,{y:56,rx:17,ry:18,iris:`#3a7aa8`,brow:`#7a4a1c`})}
    <g fill="#c4784a" stroke="none" opacity=".75"><circle cx="38" cy="62" r="1"/><circle cx="42" cy="64" r="1"/><circle cx="58" cy="64" r="1"/><circle cx="62" cy="62" r="1"/><circle cx="36" cy="60" r=".9"/><circle cx="64" cy="60" r=".9"/></g>
    <path d="M33 46 Q50 38 67 46 Q58 44 50 46 Q42 44 33 46 Z" fill="#7a4a1c" stroke-width="1"/>
    <path d="M31 44 Q32 18 50 16 Q68 18 69 44 Q50 36 31 44 Z" fill="url(#r1-cp)"/>
    <path d="M30 44 Q50 52 70 44 L69 36 Q50 44 31 36 Z" fill="#1f3a8a"/><path d="M36 40 L36 46 M44 42 L44 49 M52 43 L52 49 M60 42 L60 48" stroke="#5a8ae8" stroke-width="1.2" fill="none"/>
    <circle cx="50" cy="14" r="4" fill="#e8404c" stroke-width="1.2"/>`),Buccaneer:a(`r2`,`${r(`r2-tn`,`#f2c090`,`#c88a56`,`#8a5530`)}${i(`r2-co`,`#9a6a3c`,`#4a2a14`)}${i(`r2-bd`,`#6a4a30`,`#241408`)}`,`<path d="M6 100 Q10 78 50 76 Q90 78 94 100 Z" fill="url(#r2-co)"/>
    <path d="M38 78 L50 98 L62 78 Z" fill="#f4eede" stroke-width="1.2"/><circle cx="36" cy="92" r="2" fill="#e0a400" stroke-width=".8"/><circle cx="64" cy="92" r="2" fill="#e0a400" stroke-width=".8"/>
    ${s(`r2`,{y:55,rx:18,ry:19,mouth:!1,iris:`#3a2a1a`,brow:`#241408`,skin:`r2-tn`})}
    <path d="M58 46 L65 60" fill="none" stroke="#b04a4a" stroke-width="1.6"/><path d="M60 52 l3 -2 M62 57 l3 -2" fill="none" stroke="#b04a4a" stroke-width="1"/>
    <ellipse cx="41" cy="49" rx="6.4" ry="5.2" fill="#14101c"/><path d="M28 38 L36 46 M46 44 L72 36" fill="none" stroke="#14101c" stroke-width="1.8"/>
    <path d="M30 56 Q27 86 50 92 Q73 86 70 56 Q62 72 50 68 Q38 72 30 56 Z" fill="url(#r2-bd)"/><path d="M38 70 Q44 64 50 68 Q56 64 62 70 Q56 74 50 72 Q44 74 38 70 Z" fill="#241408" stroke-width="1"/>
    <path d="M44 78 Q50 82 56 78" fill="none" stroke="#e0b060" stroke-width="1.2" stroke-opacity=".6"/>
    <circle cx="29" cy="62" r="3" fill="none" stroke="#e0a400" stroke-width="1.6"/>
    ${A(50,38,70)}`),Swashbuckler:a(`r3`,`${r(`r3-hr`,`#b07a4a`,`#6a3e1a`,`#2a1408`)}${i(`r3-co`,`#4a6ee8`,`#1c2f8a`)}${i(`r3-ht`,`#7a4a2a`,`#2a1408`)}${i(`r3-fe`,`#ff7a6a`,`#b3201a`)}`,`<path d="M24 42 Q16 76 28 92 Q50 84 72 92 Q84 76 76 42 Z" fill="url(#r3-hr)"/>
    <path d="M6 100 Q10 78 50 76 Q90 78 94 100 Z" fill="url(#r3-co)"/>
    <path d="M14 98 L60 78 L72 82 L28 100 Z" fill="#e8404c" stroke-width="1.2"/>
    <path d="M32 78 Q36 86 42 80 Q46 88 50 82 Q54 88 58 80 Q64 86 68 78 Q60 74 50 76 Q40 74 32 78 Z" fill="#fff" stroke-width="1.2"/>
    ${s(`r3`,{y:56,rx:17,ry:19,iris:`#3a7a4a`,lips:`#c4605f`,brow:`#2a1408`})}
    <path d="M37 66 Q44 62 50 65 Q56 62 63 66 Q56 66 50 68 Q44 66 37 66 Z" fill="#2a1408" stroke-width="1"/>
    <path d="M18 60 Q50 26 82 60 Q50 44 18 60 Z" fill="url(#r3-ht)"/><ellipse cx="50" cy="42" rx="22" ry="7" fill="url(#r3-ht)"/>
    <path d="M34 30 Q50 14 68 30 Q50 22 34 30 Z" fill="url(#r3-ht)"/><path d="M34 40 Q50 46 66 40" fill="none" stroke="#e0a400" stroke-width="1.6"/>
    <path d="M62 30 Q80 8 94 18 Q82 18 76 28 Q70 24 62 34 Z" fill="url(#r3-fe)" stroke-width="1.2"/>
    <path d="M82 94 L95 22" fill="none" stroke="${e}" stroke-width="4"/><path d="M82 94 L95 22" fill="none" stroke="#e8edf6" stroke-width="2"/>
    <path d="M74 86 Q84 80 92 86" fill="none" stroke="#e0a400" stroke-width="3"/><circle cx="82" cy="97" r="2.6" fill="#e0a400" stroke-width="1"/>`),"Treasure Map":a(`r4`,`${r(`r4-pa`,`#fff2cc`,`#f0d490`,`#c89850`)}${r(`r4-is`,`#f6e4a8`,`#d8c07a`,`#a88c48`)}`,`<path d="M8 14 L28 8 L50 14 L72 6 L92 14 L88 40 L94 64 L88 90 L66 96 L44 90 L22 96 L6 88 L12 62 L6 38 Z" fill="url(#r4-pa)" stroke="#6a3e1a" stroke-width="2"/>
    <path d="M12 20 Q18 40 12 56 M88 24 Q82 44 88 62 M20 90 Q40 84 60 90" fill="none" stroke="#a87830" stroke-width="1.6" stroke-opacity=".5"/>
    <g fill="#b0702a" stroke="none" opacity=".3"><ellipse cx="80" cy="82" rx="8" ry="5"/><ellipse cx="14" cy="30" rx="5" ry="7"/></g>
    <path d="M18 44 Q22 30 38 32 Q52 30 56 44 Q58 56 44 60 Q28 62 20 54 Z" fill="url(#r4-is)" stroke="#7a5a28" stroke-width="1.4"/>
    <path d="M38 42 L38 32 M38 32 Q30 30 28 36 M38 32 Q46 28 50 34" fill="none" stroke="#3f8a2a" stroke-width="2"/>
    <path d="M30 52 Q44 78 66 62 Q84 52 78 36" fill="none" stroke="#b3201a" stroke-width="2" stroke-dasharray="3.4 3.4" stroke-opacity=".9"/>
    <path d="M72 30 L84 42 M84 30 L72 42" stroke="#d6261c" stroke-width="5"/><path d="M72 30 L84 42 M84 30 L72 42" stroke="#ff6a5a" stroke-width="2"/>
    <circle cx="22" cy="78" r="9" fill="#fff6dc" stroke="#6a3e1a" stroke-width="1.4"/><path d="M22 70 L24.6 78 L22 86 L19.4 78 Z" fill="#b3201a" stroke-width=".8"/><path d="M14 78 L30 78" stroke="#6a3e1a" stroke-width="1.2"/><text x="22" y="69" text-anchor="middle" font-size="5" font-family="Georgia, serif" font-weight="700" fill="#6a3e1a" stroke="none">N</text>
    <path d="M44 80 Q48 76 52 80 T60 80 M60 90 Q64 86 68 90 T76 90 M30 22 Q34 18 38 22 T46 22" fill="none" stroke="#5a8ac8" stroke-width="1.4"/>`),Seagull:a(`r5`,`${r(`r5-wh`,`#ffffff`,`#f4f6fa`,`#cfd6e4`)}${i(`r5-wg`,`#c8d0de`,`#7e889c`)}${i(`r5-pt`,`#a87040`,`#5a3414`)}`,`<rect x="40" y="72" width="20" height="28" rx="2" fill="url(#r5-pt)"/><ellipse cx="50" cy="72" rx="10" ry="3.4" fill="#c89050" stroke-width="1.2"/><path d="M44 80 L44 98 M56 80 L56 98" stroke="#3a2210" stroke-width=".8" stroke-opacity=".6"/>
    <path d="M30 58 L8 68 L26 72 Z" fill="url(#r5-wg)"/><path d="M8 68 L16 66 L18 70 Z" fill="#1d1830" stroke="none"/>
    <ellipse cx="50" cy="56" rx="23" ry="17" fill="url(#r5-wh)"/>
    <path d="M28 52 Q46 42 64 56 Q50 72 30 64 Z" fill="url(#r5-wg)"/><path d="M30 64 Q40 70 52 68 L50 72 Q38 74 28 66 Z" fill="#1d1830" stroke="none"/>
    ${_(`M45 72 L44 78 M44 78 l-4 3 M44 78 l4 3 M55 72 L56 78 M56 78 l-4 3 M56 78 l4 3`,`#f0a030`,2.2)}
    <circle cx="68" cy="36" r="13" fill="url(#r5-wh)"/>
    <path d="M78 34 L96 40 L78 44 Z" fill="#ffc83a" stroke-width="1.2"/><path d="M82 41 L92 41" stroke="#e8404c" stroke-width="2" stroke-linecap="round"/>
    <circle cx="71" cy="32" r="3.4" fill="#14101c" stroke="none"/><circle cx="72" cy="30.8" r="1.1" fill="#fff" stroke="none"/><circle cx="71" cy="32" r="5" fill="none" stroke="#f0a030" stroke-width="1.2"/>
    <path d="M58 28 Q66 22 74 26" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.4"/>`),"Jolly Pirate":a(`r6`,`${r(`r6-tn`,`#f6c8a0`,`#d89a64`,`#9a6038`)}${i(`r6-sh`,`#ffffff`,`#e0e6f0`)}${i(`r6-bd`,`#ff6a5a`,`#a01a14`)}<clipPath id="r6-cl"><path d="M8 100 Q12 78 50 76 Q88 78 92 100 Z"/></clipPath>`,`<path d="M8 100 Q12 78 50 76 Q88 78 92 100 Z" fill="url(#r6-sh)"/>
    <g clip-path="url(#r6-cl)" stroke="none" fill="#e8404c"><rect x="0" y="82" width="100" height="4"/><rect x="0" y="90" width="100" height="4"/><rect x="0" y="98" width="100" height="4"/></g>
    ${s(`r6`,{y:55,rx:22,ry:21,mouth:!1,iris:`#2a5a8a`,brow:`#5a2a10`,skin:`r6-tn`})}
    <ellipse cx="60" cy="49" rx="6.6" ry="5.4" fill="#14101c"/><path d="M72 44 L82 38 M48 46 L36 44" fill="none" stroke="#14101c" stroke-width="1.6"/>
    <path d="M32 64 Q50 86 68 64 Q50 70 32 64 Z" fill="#3a0f2a"/><path d="M36 65 Q50 72 64 65 L62 68 Q50 76 38 68 Z" fill="#fff" stroke-width="1"/><rect x="53" y="66" width="4" height="4.4" rx="1" fill="#ffd23a" stroke-width=".8"/>
    <path d="M42 74 Q50 80 58 74 Q50 77 42 74 Z" fill="#ff8aa0" stroke="none"/>
    <circle cx="30" cy="62" r="4" fill="#ff8a8a" opacity=".5" stroke="none"/>
    <circle cx="26" cy="64" r="3" fill="none" stroke="#e0a400" stroke-width="1.6"/>
    <path d="M26 46 Q50 18 74 46 Q50 36 26 46 Z" fill="url(#r6-bd)"/><g fill="#fff" stroke="none"><circle cx="38" cy="36" r="2"/><circle cx="52" cy="30" r="2"/><circle cx="64" cy="38" r="2"/><circle cx="46" cy="42" r="1.6"/></g>
    <path d="M70 40 L90 32 L84 48 Z" fill="url(#r6-bd)"/>`),"Pirate Ship":a(`r7`,`${i(`r7-hl`,`#a8723c`,`#3a2010`)}${i(`r7-sl`,`#ffffff`,`#e4dcc4`)}${i(`r7-wv`,`#6ac8f4`,`#1f78c8`)}`,`<path d="M50 6 L50 68" stroke="${e}" stroke-width="5"/><path d="M50 6 L50 68" stroke="#7a5230" stroke-width="2.6"/>
    <path d="M25 24 L25 68 M75 30 L75 68" stroke="#5a3a1c" stroke-width="2.4"/>
    <path d="M50 8 L66 4 L66 12 L50 14 Z" fill="#1d1830" stroke-width="1"/><circle cx="58" cy="8.6" r="1.8" fill="#fff" stroke="none"/>
    <path d="M32 16 Q50 12 68 16 L66 28 Q50 32 34 28 Z" fill="url(#r7-sl)"/>
    <path d="M28 32 Q50 26 72 32 L70 60 Q50 66 30 60 Z" fill="url(#r7-sl)"/>
    <circle cx="50" cy="44" r="4.4" fill="#1d1830" stroke="none"/><path d="M42 50 L58 54 M58 50 L42 54" stroke="#1d1830" stroke-width="2" fill="none"/><circle cx="48.6" cy="43.4" r="1" fill="#fff" stroke="none"/><circle cx="51.4" cy="43.4" r="1" fill="#fff" stroke="none"/>
    <path d="M12 38 L36 36 L36 60 L14 62 Z" fill="url(#r7-sl)" opacity=".95"/><path d="M80 36 L96 40 L92 60 L80 60 Z" fill="url(#r7-sl)" opacity=".95"/>
    <path d="M6 64 L94 64 Q90 86 72 92 L28 92 Q10 86 6 64 Z" fill="url(#r7-hl)"/>
    <path d="M8 70 L92 70 M12 78 L88 78" stroke="#2a1408" stroke-width="1" stroke-opacity=".6"/><path d="M6 64 L94 64" stroke="#e0a400" stroke-width="2"/>
    <g fill="#14101c" stroke="none"><circle cx="24" cy="74" r="2.4"/><circle cx="38" cy="74" r="2.4"/><circle cx="52" cy="74" r="2.4"/><circle cx="66" cy="74" r="2.4"/><circle cx="80" cy="74" r="2.4"/></g>
    <path d="M0 90 Q8 82 16 90 T32 90 T48 90 T64 90 T80 90 T96 90 L100 100 L0 100 Z" fill="url(#r7-wv)" opacity=".92"/><path d="M8 94 Q14 91 20 94 M56 96 Q62 93 68 96" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6"/>`),Kraken:S(`r8`,`${r(`r8-bd`,`#a28ad8`,`#5a3aa0`,`#1f1050`)}${i(`r8-wv`,`#4aa6ec`,`#103a8a`)}`,`<path d="M20 100 Q6 70 14 40 Q18 28 26 34 Q22 50 28 70" fill="none" stroke="${e}" stroke-opacity=".8" stroke-width="13"/><path d="M20 100 Q6 70 14 40 Q18 28 26 34 Q22 50 28 70" fill="none" stroke="#6a4ac0" stroke-width="10.6"/>
    <path d="M80 100 Q94 70 86 38 Q82 26 74 32 Q78 50 72 70" fill="none" stroke="${e}" stroke-opacity=".8" stroke-width="13"/><path d="M80 100 Q94 70 86 38 Q82 26 74 32 Q78 50 72 70" fill="none" stroke="#6a4ac0" stroke-width="10.6"/>
    <g fill="none" stroke="#e6dcff" stroke-width="2.4" stroke-dasharray="0.1 6" stroke-linecap="round"><path d="M20 100 Q6 70 14 40 Q18 28 26 34 Q22 50 28 70"/><path d="M80 100 Q94 70 86 38 Q82 26 74 32 Q78 50 72 70"/></g>
    <path d="M30 100 Q24 84 34 74 M70 100 Q76 84 66 74" fill="none" stroke="${e}" stroke-opacity=".8" stroke-width="9"/><path d="M30 100 Q24 84 34 74 M70 100 Q76 84 66 74" fill="none" stroke="#5a3aa0" stroke-width="6.6"/>
    <path d="M24 60 L16 40 L34 52 Z M76 60 L84 40 L66 52 Z" fill="#3a2480" stroke-width="1.2"/>
    <ellipse cx="50" cy="56" rx="28" ry="32" fill="url(#r8-bd)"/>
    <g fill="#c8b8f4" stroke="none" opacity=".5"><circle cx="38" cy="30" r="3"/><circle cx="56" cy="26" r="2.4"/><circle cx="64" cy="38" r="3"/><circle cx="46" cy="40" r="2"/></g>
    <path d="M30 40 Q36 26 52 24" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <circle cx="38" cy="56" r="9" fill="#ffe14a"/><circle cx="62" cy="56" r="9" fill="#ffe14a"/>
    <ellipse cx="38" cy="56" rx="2" ry="7.4" fill="#14101c" stroke="none"/><ellipse cx="62" cy="56" rx="2" ry="7.4" fill="#14101c" stroke="none"/><circle cx="35" cy="52" r="1.4" fill="#fff" stroke="none"/><circle cx="59" cy="52" r="1.4" fill="#fff" stroke="none"/>
    <path d="M26 44 L46 52 M74 44 L54 52" fill="none" stroke="#1f1050" stroke-width="3.6"/>
    <path d="M32 74 L38 68 L44 76 L50 68 L56 76 L62 68 L68 74 Q50 90 32 74 Z" fill="#1a0a30"/><path d="M38 70 l3 6 3 -6 z M56 70 l3 6 3 -6 z" fill="#fff" stroke-width="1"/>
    <path d="M0 86 Q8 78 16 86 T32 86 T48 86 T64 86 T80 86 T96 86 L100 100 L0 100 Z" fill="url(#r8-wv)" opacity=".92"/><path d="M8 92 Q14 89 20 92 M60 94 Q66 91 72 94" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6"/>`),"Captain Blackbeard":S(`r9`,`${r(`r9-tn`,`#f2c090`,`#c88a56`,`#8a5530`)}${i(`r9-co`,`#3a4a7a`,`#12183a`)}${i(`r9-bd`,`#3a3a48`,`#06060c`)}`,`<path d="M4 100 Q8 78 50 76 Q92 78 96 100 Z" fill="url(#r9-co)"/>
    <path d="M36 78 L50 100 L64 78 Z" fill="#8a1a22" stroke-width="1.2"/><circle cx="28" cy="90" r="2" fill="#e0a400" stroke-width=".8"/><circle cx="72" cy="90" r="2" fill="#e0a400" stroke-width=".8"/><path d="M6 96 L26 82 M94 96 L74 82" stroke="#e0a400" stroke-width="2.4"/>
    ${s(`r9`,{y:52,rx:18,ry:19,mouth:!1,iris:`#8a1a22`,brow:`#06060c`,skin:`r9-tn`})}
    <path d="M30 46 L46 52 M70 46 L54 52" fill="none" stroke="#06060c" stroke-width="3.6"/>
    <path d="M26 54 Q18 86 38 98 Q50 102 62 98 Q82 86 74 54 Q66 72 50 66 Q34 72 26 54 Z" fill="url(#r9-bd)"/>
    <path d="M36 72 Q44 64 50 68 Q56 64 64 72 Q56 78 50 74 Q44 78 36 72 Z" fill="#06060c" stroke-width="1"/><path d="M44 80 Q50 84 56 80" fill="none" stroke="#e8e8f0" stroke-width="1.6"/>
    <path d="M32 86 Q30 96 36 98 M68 86 Q70 96 64 98" fill="none" stroke="#06060c" stroke-width="3"/>
    <path d="M24 66 Q22 56 28 52" fill="none" stroke="#3a3a48" stroke-width="1.4"/>
    <g stroke="none"><path d="M20 78 Q16 70 22 66 Q22 72 24 76 Z" fill="#ff9a2a"/><path d="M80 78 Q84 70 78 66 Q78 72 76 76 Z" fill="#ff9a2a"/><circle cx="21" cy="70" r="1.6" fill="#ffe14a"/><circle cx="79" cy="70" r="1.6" fill="#ffe14a"/></g>
    <path d="M18 14 Q16 4 22 2 M82 14 Q84 4 78 2" fill="none" stroke="#b8bcc8" stroke-width="2" stroke-opacity=".7"/>
    <path d="M14 33 Q14 8 50 6 Q86 8 86 33 Q50 24 14 33 Z" fill="#14101c"/><path d="M14 33 Q50 41 86 33" fill="none" stroke="#e0a400" stroke-width="2.4"/>
    <circle cx="50" cy="19" r="6" fill="#fff" stroke-width="1"/><circle cx="47.4" cy="18" r="1.4" fill="#14101c" stroke="none"/><circle cx="52.6" cy="18" r="1.4" fill="#14101c" stroke="none"/><path d="M42 26 L58 30 M58 26 L42 30" stroke="#fff" stroke-width="2.2" fill="none"/>
    <path d="M24 18 Q36 10 48 10" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>`),"Pirate Pufferfish":a(`ra`,`${r(`ra-bd`,`#fff2a8`,`#f2c850`,`#c08a24`)}${r(`ra-bl`,`#fffaf0`,`#fbe9bd`,`#e6c98a`)}`,`${v(50,56,29,39,16,`#c9962c`)}
    <path d="M22 56 L4 42 Q10 56 4 70 Z" fill="url(#ra-bd)"/>
    <circle cx="50" cy="56" r="31" fill="url(#ra-bd)"/>
    <ellipse cx="50" cy="74" rx="22" ry="12" fill="url(#ra-bl)" stroke="none"/>
    <ellipse cx="42" cy="66" rx="8" ry="5.4" fill="#f2c850" transform="rotate(20 42 66)"/>
    <circle cx="64" cy="48" r="9" fill="#fff"/><circle cx="66" cy="49" r="5" fill="#14101c" stroke="none"/><circle cx="67.6" cy="46.6" r="1.8" fill="#fff" stroke="none"/>
    <ellipse cx="36" cy="46" rx="7.4" ry="6" fill="#14101c"/><path d="M26 36 L44 52 M50 36 L72 40" fill="none" stroke="#14101c" stroke-width="1.8"/>
    <ellipse cx="80" cy="62" rx="3.6" ry="4.6" fill="#e8587a" stroke-width="1.2"/>
    <circle cx="84" cy="70" r="3" fill="none" stroke="#e0a400" stroke-width="1.6"/>
    ${A(50,32,54)}
    ${f(10,20,4)}${f(92,26,3.4)}${f(90,84,3)}`),Dingo:a(`o1`,`${r(`o1-fr`,`#f2c88a`,`#c4843c`,`#7a4a18`)}${r(`o1-mz`,`#fff6e0`,`#f6e2bc`,`#d8b888`)}`,`<ellipse cx="50" cy="97" rx="32" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#o1-b)"/>
    <ellipse cx="50" cy="96" rx="32" ry="19" fill="url(#o1-fr)"/><ellipse cx="50" cy="94" rx="15" ry="15" fill="url(#o1-mz)" stroke-width="1"/>
    <path d="M24 42 L20 6 L46 28 Z M76 42 L80 6 L54 28 Z" fill="url(#o1-fr)"/><path d="M27 36 L25 16 L40 28 Z M73 36 L75 16 L60 28 Z" fill="#7a3a1c" stroke="none"/>
    <ellipse cx="50" cy="52" rx="28" ry="25" fill="url(#o1-fr)"/>
    <path d="M30 56 Q24 62 30 66 M70 56 Q76 62 70 66" fill="none" stroke="#fff6e0" stroke-width="3" stroke-opacity=".8"/>
    <path d="M50 30 L50 42" fill="none" stroke="#fff6e0" stroke-width="3" stroke-opacity=".8"/>
    <ellipse cx="50" cy="66" rx="16" ry="12" fill="url(#o1-mz)" stroke-width="1"/>
    <circle cx="38" cy="46" r="5" fill="#ffd54a"/><circle cx="62" cy="46" r="5" fill="#ffd54a"/><circle cx="38.6" cy="46.4" r="2.6" fill="#14101c" stroke="none"/><circle cx="62.6" cy="46.4" r="2.6" fill="#14101c" stroke="none"/>
    <circle cx="39.6" cy="45" r=".9" fill="#fff" stroke="none"/><circle cx="63.6" cy="45" r=".9" fill="#fff" stroke="none"/>
    <path d="M30 38 Q38 34 44 38 M70 38 Q62 34 56 38" fill="none" stroke="#7a4a18" stroke-width="1.6"/>
    <ellipse cx="50" cy="60" rx="5.6" ry="3.8" fill="#2a1b3d"/><ellipse cx="48.4" cy="58.8" rx="1.8" ry="1" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 64 L50 68 M50 68 Q44 74 38 70 M50 68 Q56 74 62 70" fill="none" stroke-width="1.5"/><path d="M45 72 Q50 82 55 72 Z" fill="#ff8aa0" stroke-width="1.2"/>
    <path d="M28 36 Q38 28 50 28" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="3"/>`),Echidna:a(`o2`,`${r(`o2-bd`,`#9a7a58`,`#5a4030`,`#2a1a10`)}${r(`o2-sn`,`#f0d8b0`,`#d8b890`,`#a88860`)}`,`<ellipse cx="46" cy="94" rx="40" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#o2-b)"/>
    ${v(42,58,24,41,24,`#f0e0b8`)}${v(42,58,24,33,24,`#3a281c`)}
    <ellipse cx="30" cy="87" rx="8" ry="5" fill="url(#o2-sn)"/><ellipse cx="54" cy="89" rx="8" ry="5" fill="url(#o2-sn)"/>
    <path d="M24 90 l-2 5 M30 91 l0 5 M36 90 l2 5 M48 92 l-2 4 M54 93 l0 5 M60 92 l2 4" fill="none" stroke="#3a281c" stroke-width="1.6"/>
    <circle cx="42" cy="60" r="27" fill="url(#o2-bd)"/>
    <path d="M60 51 L98 57 L98 63 L60 67 Z" fill="url(#o2-sn)"/><circle cx="98" cy="60" r="2.8" fill="#1d1830"/>
    <ellipse cx="62" cy="58" rx="13" ry="11" fill="url(#o2-sn)"/>
    <path d="M60 51 L98 57 L98 63 L60 67" fill="none" stroke-width="1.3"/>
    <circle cx="64" cy="53" r="3.6" fill="#fff"/><circle cx="64.8" cy="53.6" r="2.2" fill="#14101c" stroke="none"/><circle cx="65.4" cy="52.6" r=".8" fill="#fff" stroke="none"/>
    <path d="M60 48 Q66 44 72 49" fill="none" stroke-width="1.4"/><path d="M70 64 Q80 66 90 62" fill="none" stroke-width="1.2" stroke-opacity=".8"/>
    <path d="M24 48 Q34 38 48 38" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3"/>`),Koala:a(`o3`,`${r(`o3-fr`,`#d6dae2`,`#9298a8`,`#555a6c`)}${r(`o3-fl`,`#ffffff`,`#f2f2f6`,`#cfd2de`)}`,`${_(`M0 90 L100 86`,`#7a5028`,7)}
    <path d="M78 88 Q92 70 98 62 Q86 66 78 88 Z M84 86 Q100 80 104 70 Q92 70 84 86 Z" fill="#58bd4c" stroke-width="1.2"/>
    <ellipse cx="50" cy="96" rx="32" ry="18" fill="url(#o3-fr)"/>
    <ellipse cx="30" cy="86" rx="8" ry="6" fill="url(#o3-fr)"/><ellipse cx="70" cy="86" rx="8" ry="6" fill="url(#o3-fr)"/>
    <path d="M26 88 l-1 4 M31 89 l0 5 M36 88 l1 4 M64 88 l-1 4 M69 89 l0 5 M74 88 l1 4" fill="none" stroke="#2a2e3c" stroke-width="1.4"/>
    <circle cx="20" cy="32" r="16" fill="url(#o3-fr)"/><circle cx="20" cy="32" r="9" fill="url(#o3-fl)" stroke="none"/>
    <circle cx="80" cy="32" r="16" fill="url(#o3-fr)"/><circle cx="80" cy="32" r="9" fill="url(#o3-fl)" stroke="none"/>
    <ellipse cx="50" cy="52" rx="29" ry="27" fill="url(#o3-fr)"/>
    <ellipse cx="50" cy="66" rx="15" ry="11" fill="url(#o3-fl)" stroke-width="1" opacity=".9"/>
    <circle cx="38" cy="46" r="3.4" fill="#14101c" stroke="none"/><circle cx="62" cy="46" r="3.4" fill="#14101c" stroke="none"/><circle cx="39" cy="45" r="1.1" fill="#fff" stroke="none"/><circle cx="63" cy="45" r="1.1" fill="#fff" stroke="none"/>
    <path d="M36 38 Q40 36 44 39 M64 38 Q60 36 56 39" fill="none" stroke="#555a6c" stroke-width="1.4"/>
    <path d="M42 54 Q50 48 58 54 Q60 66 50 68 Q40 66 42 54 Z" fill="#2a2430"/><ellipse cx="46.6" cy="55" rx="3" ry="1.4" fill="#fff" opacity=".4" stroke="none"/>
    <path d="M50 68 Q46 74 40 71 M50 68 Q54 74 60 71" fill="none" stroke-width="1.4"/>
    <path d="M30 40 Q38 33 50 34" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Kookaburra:a(`o4`,`${r(`o4-cr`,`#ffffff`,`#f6efe0`,`#d8ccb0`)}${r(`o4-br`,`#b88a60`,`#7a5230`,`#3f2814`)}`,`${_(`M0 90 L100 86`,`#7a5028`,6)}
    <path d="M26 66 L4 90 L18 94 L36 78 Z" fill="url(#o4-br)"/><path d="M12 84 L20 90 M18 78 L26 84" fill="none" stroke="#f6efe0" stroke-width="2.4"/>
    ${_(`M42 80 L40 90 M52 80 L52 90`,`#f0a060`,2.6)}
    <ellipse cx="46" cy="62" rx="26" ry="21" fill="url(#o4-cr)"/>
    <path d="M30 70 L32 76 M38 74 L38 80 M46 74 L46 80 M54 72 L54 78" fill="none" stroke="#a88a60" stroke-width="1.6" stroke-opacity=".7"/>
    <path d="M24 54 Q42 40 66 58 Q56 80 30 72 Q20 66 24 54 Z" fill="url(#o4-br)"/>
    <ellipse cx="44" cy="58" rx="6" ry="3.4" fill="#3a8ae8" transform="rotate(-10 44 58)"/><ellipse cx="54" cy="62" rx="5" ry="3" fill="#3a8ae8" transform="rotate(-10 54 62)"/><circle cx="34" cy="60" r="1.8" fill="#9ad0ff" stroke="none"/>
    <circle cx="62" cy="32" r="18" fill="url(#o4-cr)"/>
    <path d="M46 26 Q58 10 78 22 Q66 24 46 34 Z" fill="url(#o4-br)"/>
    <path d="M54 36 L80 34" fill="none" stroke="#3f2814" stroke-width="5"/>
    <circle cx="66" cy="34" r="3.2" fill="#14101c" stroke="none"/><circle cx="66.8" cy="33" r="1" fill="#fff" stroke="none"/>
    <path d="M74 24 Q96 22 100 36 L74 36 Z" fill="#4a4e5c"/><path d="M74 36 L100 36 Q96 52 74 46 Z" fill="#e8dcc0"/><path d="M80 30 L92 30" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.6"/>
    <path d="M50 40 Q52 48 58 50" fill="none" stroke="#a88a60" stroke-width="1.4" stroke-opacity=".7"/>`),Platypus:a(`o5`,`${r(`o5-fr`,`#e0b080`,`#9a6a40`,`#4a2e18`)}${i(`o5-bl`,`#8a96a8`,`#444e60`)}`,T(`o5`,`#e8a060`)),"Teal Platypus":a(`oa`,`${r(`oa-fr`,`#b8fff2`,`#2fc4b4`,`#0e6670`)}${i(`oa-bl`,`#ffe08a`,`#e8902a`)}`,T(`oa`,`#ffc060`,`${f(10,20,4.4)}${f(90,24,3.6)}${f(20,44,3)}`)),Joey:a(`o6`,`${r(`o6-fr`,`#f0c090`,`#c47a44`,`#7a4020`)}${r(`o6-pl`,`#fff0d8`,`#f4d6aa`,`#d8aa78`)}`,`<ellipse cx="50" cy="97" rx="40" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#o6-b)"/>
    <ellipse cx="50" cy="94" rx="42" ry="28" fill="url(#o6-fr)"/>
    <ellipse cx="50" cy="90" rx="30" ry="22" fill="url(#o6-pl)" stroke-width="1"/>
    <ellipse cx="32" cy="38" rx="9" ry="22" fill="url(#o6-fr)" transform="rotate(-14 32 38)"/><ellipse cx="68" cy="38" rx="9" ry="22" fill="url(#o6-fr)" transform="rotate(14 68 38)"/>
    <ellipse cx="32" cy="38" rx="4.6" ry="15" fill="#f4a9b0" stroke="none" transform="rotate(-14 32 38)"/><ellipse cx="68" cy="38" rx="4.6" ry="15" fill="#f4a9b0" stroke="none" transform="rotate(14 68 38)"/>
    <ellipse cx="50" cy="62" rx="22" ry="21" fill="url(#o6-fr)"/>
    <ellipse cx="50" cy="70" rx="12" ry="9" fill="url(#o6-pl)" stroke-width="1"/>
    <circle cx="40" cy="58" r="5.4" fill="#fff"/><circle cx="60" cy="58" r="5.4" fill="#fff"/>
    <circle cx="41" cy="59" r="3.2" fill="#14101c" stroke="none"/><circle cx="61" cy="59" r="3.2" fill="#14101c" stroke="none"/><circle cx="42" cy="57.8" r="1.1" fill="#fff" stroke="none"/><circle cx="62" cy="57.8" r="1.1" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="66" rx="4.4" ry="3" fill="#3a2418"/><path d="M50 69 L50 71 M50 71 Q46 75 42 72 M50 71 Q54 75 58 72" fill="none" stroke-width="1.3"/>
    <circle cx="33" cy="68" r="3.2" fill="#ff8a8a" opacity=".5" stroke="none"/><circle cx="67" cy="68" r="3.2" fill="#ff8a8a" opacity=".5" stroke="none"/>
    <path d="M44 82 Q50 78 56 82" fill="none" stroke="#9a5a2c" stroke-width="2.4"/>
    <ellipse cx="34" cy="82" rx="6" ry="5" fill="url(#o6-fr)"/><ellipse cx="66" cy="82" rx="6" ry="5" fill="url(#o6-fr)"/>
    <path d="M34 44 Q42 36 52 38" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>`),Kangaroo:a(`o7`,`${r(`o7-fr`,`#f0b088`,`#c06a38`,`#6a3418`)}${r(`o7-pl`,`#fff0d8`,`#f4d6aa`,`#d8aa78`)}`,`<ellipse cx="50" cy="97" rx="40" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#o7-b)"/>
    ${_(`M74 98 Q93 92 90 66`,`#c06a38`,11)}
    <ellipse cx="48" cy="92" rx="34" ry="22" fill="url(#o7-fr)"/><ellipse cx="48" cy="90" rx="18" ry="17" fill="url(#o7-pl)" stroke-width="1"/>
    ${_(`M26 80 Q16 90 24 98`,`#c06a38`,7)}${_(`M70 80 Q80 90 72 98`,`#c06a38`,7)}
    <ellipse cx="33" cy="24" rx="8" ry="19" fill="url(#o7-fr)" transform="rotate(-12 33 24)"/><ellipse cx="65" cy="24" rx="8" ry="19" fill="url(#o7-fr)" transform="rotate(12 65 24)"/>
    <ellipse cx="33" cy="26" rx="4" ry="13" fill="#f4a9b0" stroke="none" transform="rotate(-12 33 26)"/><ellipse cx="65" cy="26" rx="4" ry="13" fill="#f4a9b0" stroke="none" transform="rotate(12 65 26)"/>
    <ellipse cx="49" cy="50" rx="21" ry="23" fill="url(#o7-fr)"/>
    <ellipse cx="50" cy="64" rx="13" ry="11" fill="url(#o7-pl)" stroke-width="1"/>
    <circle cx="40" cy="45" r="4.2" fill="#14101c" stroke="none"/><circle cx="60" cy="45" r="4.2" fill="#14101c" stroke="none"/><circle cx="41" cy="44" r="1.3" fill="#fff" stroke="none"/><circle cx="61" cy="44" r="1.3" fill="#fff" stroke="none"/>
    <path d="M34 38 Q40 34 46 38 M66 38 Q60 34 54 38" fill="none" stroke="#6a3418" stroke-width="1.6"/>
    <ellipse cx="50" cy="58" rx="5.4" ry="3.6" fill="#2a1b3d"/><ellipse cx="48.4" cy="57" rx="1.6" ry=".9" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 62 L50 66 M50 66 Q45 71 40 68 M50 66 Q55 71 60 68" fill="none" stroke-width="1.4"/>
    <path d="M32 38 Q40 32 50 33" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>`),Crocodile:a(`o8`,`${r(`o8-gr`,`#b0e070`,`#5fa83a`,`#27601e`)}${r(`o8-mo`,`#e0505e`,`#8a1426`,`#3a0510`)}`,`<path d="M4 58 Q0 40 18 36 L24 52 Z" fill="url(#o8-gr)"/>
    <path d="M10 56 Q8 34 34 32 Q50 30 70 36 Q92 38 98 46 L98 50 Q90 50 50 54 L10 60 Z" fill="url(#o8-gr)"/>
    <path d="M12 58 Q50 52 96 50 L94 56 Q50 68 16 62 Z" fill="url(#o8-mo)" stroke-width="1.2"/>
    <path d="M24 56 l2 6 3 -6 z M34 55 l2 6 3 -6 z M44 54 l2 6 3 -6 z M54 54 l2 6 3 -6 z M64 53 l2 6 3 -6 z M74 52 l2 6 3 -6 z M84 51 l2 5 3 -5 z" fill="#fffdf2" stroke-width="1"/>
    <path d="M16 62 Q50 68 94 56 Q96 66 80 72 Q50 82 24 76 Q10 72 16 62 Z" fill="url(#o8-gr)"/>
    <path d="M28 62 l2 -6 3 6 z M38 63 l2 -6 3 6 z M48 62 l2 -6 3 6 z M58 62 l2 -6 3 6 z M68 60 l2 -6 3 6 z M78 58 l2 -5 3 5 z" fill="#fffdf2" stroke-width="1"/>
    <path d="M14 36 L18 28 L24 36 L30 28 L36 34 L42 28 L46 34" fill="#3f8a2a" stroke-width="1.2"/>
    <circle cx="40" cy="32" r="8.4" fill="url(#o8-gr)"/><circle cx="40" cy="32" r="5" fill="#ffd54a"/><ellipse cx="40.6" cy="32" rx="1.3" ry="4.2" fill="#14101c" stroke="none"/><circle cx="38.6" cy="30" r="1" fill="#fff" stroke="none"/>
    <circle cx="92" cy="41" r="3.6" fill="url(#o8-gr)"/><circle cx="92" cy="41" r="1.2" fill="#1f4a14" stroke="none"/>
    <path d="M20 44 Q30 40 40 42 M60 40 Q74 40 88 44" fill="none" stroke="#1f4a14" stroke-width="1.2" stroke-opacity=".5"/>
    <path d="M0 78 Q12 70 24 78 T48 78 T72 78 T96 78 L100 100 L0 100 Z" fill="#4aa6ec" opacity=".8"/>
    <path d="M6 82 Q14 78 22 82 M54 86 Q62 82 70 86" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6"/>`),"Super Glider":a(`o9`,`${r(`o9-fr`,`#e6e8ee`,`#a4a8b8`,`#5a5e72`)}${i(`o9-cp`,`#ff7a6a`,`#b3201a`)}${r(`o9-fl`,`#ffffff`,`#f4f4f8`,`#d0d4e0`)}`,`<path d="M50 42 Q10 28 2 64 Q22 74 40 68 L60 68 Q78 74 98 64 Q90 28 50 42 Z" fill="url(#o9-cp)"/>
    <path d="M50 44 L14 62 M50 44 L86 62 M50 50 L26 68 M50 50 L74 68" fill="none" stroke="#7a1410" stroke-width="1" stroke-opacity=".45"/>
    ${_(`M50 78 Q54 90 68 89 Q80 86 77 76`,`#b4b8c6`,8)}
    ${_(`M42 56 L12 62`,`#a4a8b8`,5)}${_(`M58 56 L88 62`,`#a4a8b8`,5)}<circle cx="11" cy="62" r="3.6" fill="#f0b0b8"/><circle cx="89" cy="62" r="3.6" fill="#f0b0b8"/>
    <ellipse cx="50" cy="68" rx="13" ry="19" fill="url(#o9-fr)"/><ellipse cx="50" cy="72" rx="8" ry="13" fill="url(#o9-fl)" stroke="none"/>
    <path d="${d(50,70,5.4,2.4)}" fill="#ffd23a" stroke-width="1"/>
    <ellipse cx="35" cy="20" rx="8" ry="12" fill="url(#o9-fr)" transform="rotate(-22 35 20)"/><ellipse cx="35" cy="21" rx="4.4" ry="8" fill="#f4a9b0" stroke="none" transform="rotate(-22 35 21)"/>
    <ellipse cx="65" cy="20" rx="8" ry="12" fill="url(#o9-fr)" transform="rotate(22 65 20)"/><ellipse cx="65" cy="21" rx="4.4" ry="8" fill="#f4a9b0" stroke="none" transform="rotate(22 65 21)"/>
    <circle cx="50" cy="36" r="17" fill="url(#o9-fr)"/>
    <path d="M50 20 L50 32" fill="none" stroke="#2a2a3a" stroke-width="3"/>
    <path d="M34 36 Q50 28 66 36 Q64 46 50 43 Q36 46 34 36 Z" fill="#1c3a8a" stroke-width="1.2"/>
    <ellipse cx="42.4" cy="37" rx="4.4" ry="3.6" fill="#fff"/><ellipse cx="57.6" cy="37" rx="4.4" ry="3.6" fill="#fff"/><circle cx="43" cy="37.4" r="2.4" fill="#14101c" stroke="none"/><circle cx="58" cy="37.4" r="2.4" fill="#14101c" stroke="none"/><circle cx="43.8" cy="36.4" r=".8" fill="#fff" stroke="none"/><circle cx="58.8" cy="36.4" r=".8" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="46" rx="3" ry="2" fill="#f4a9b0"/><path d="M45 49 Q50 53 55 49" fill="none" stroke-width="1.3"/>
    <path d="M38 26 Q44 21 52 22" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.4"/>`),"Ice Bat":S(`i1`,`${r(`i1-bd`,`#e6fbff`,`#8fd6ff`,`#2a78c0`)}${i(`i1-wg`,`#cdf0ff`,`#3f8fd8`)}`,`<g opacity=".95"><path d="M44 50 Q22 26 2 34 Q8 42 5 52 Q13 48 15 59 Q25 51 29 63 Q37 56 44 66 Z" fill="url(#i1-wg)"/>
    <path d="M44 52 L9 38 M44 56 L14 56 M44 60 L27 62" fill="none" stroke="#2a6fb8" stroke-width="1.2"/>
    <path d="M12 44 L16 38 L20 44 L16 50 Z" fill="#e8fbff" stroke-width="1"/></g>
    <g transform="translate(100 0) scale(-1 1)" opacity=".95"><path d="M44 50 Q22 26 2 34 Q8 42 5 52 Q13 48 15 59 Q25 51 29 63 Q37 56 44 66 Z" fill="url(#i1-wg)"/>
    <path d="M44 52 L9 38 M44 56 L14 56 M44 60 L27 62" fill="none" stroke="#2a6fb8" stroke-width="1.2"/>
    <path d="M12 44 L16 38 L20 44 L16 50 Z" fill="#e8fbff" stroke-width="1"/></g>
    ${_(`M44 82 L43 92 M56 82 L57 92`,`#8fd6ff`,3)}
    <ellipse cx="50" cy="64" rx="14" ry="19" fill="url(#i1-bd)"/><ellipse cx="50" cy="68" rx="8" ry="12" fill="#fff" opacity=".55" stroke="none"/>
    <path d="M37 36 L31 8 L48 28 Z M63 36 L69 8 L52 28 Z" fill="url(#i1-bd)"/><path d="M37 32 L34 15 L44 28 Z M63 32 L66 15 L56 28 Z" fill="#bfeaff" stroke="none"/>
    <ellipse cx="50" cy="42" rx="18" ry="15" fill="url(#i1-bd)"/>
    ${x(42,40,4.4,`#5ff1ff`)}${x(58,40,4.4,`#5ff1ff`)}
    <path d="M47 46 L53 46 L50 50 Z" fill="#1d3a68" stroke-width="1"/>
    <path d="M42 51 Q50 58 58 51" fill="#1d3a68" stroke-width="1.2"/><path d="M44 52 l2 5 2 -5 z M52 52 l2 5 2 -5 z" fill="#fff" stroke-width="1"/>
    <path d="M36 32 Q42 28 48 29" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.4"/>
    ${f(10,18,3.4)}${f(90,20,3.4)}${f(50,5,2.6)}`),"Ice Bug":S(`i2`,`${r(`i2-sh`,`#f2fdff`,`#8fd6ff`,`#2a78c0`)}${r(`i2-hd`,`#9fd6ff`,`#3f8fd8`,`#1c4a96`)}`,`${_(`M30 50 Q14 44 8 52`,`#6cc4f4`,3.4)}${_(`M28 62 Q10 64 6 76`,`#6cc4f4`,3.4)}${_(`M32 74 Q16 82 14 94`,`#6cc4f4`,3.4)}
    ${_(`M70 50 Q86 44 92 52`,`#6cc4f4`,3.4)}${_(`M72 62 Q90 64 94 76`,`#6cc4f4`,3.4)}${_(`M68 74 Q84 82 86 94`,`#6cc4f4`,3.4)}
    ${_(`M44 18 Q40 6 30 8`,`#6cc4f4`,2.4)}${_(`M56 18 Q60 6 70 8`,`#6cc4f4`,2.4)}${x(30,8,2.8,`#5ff1ff`)}${x(70,8,2.8,`#5ff1ff`)}
    <ellipse cx="50" cy="62" rx="27" ry="32" fill="url(#i2-sh)"/>
    <path d="M50 32 L77 62 L50 92 L23 62 Z" fill="#fff" fill-opacity=".22" stroke="#2a78c0" stroke-width="1.2"/>
    <path d="M23 62 L77 62 M50 32 L50 92 M36 47 L64 77 M64 47 L36 77" fill="none" stroke="#2a78c0" stroke-width="1" stroke-opacity=".7"/>
    <path d="M50 32 L77 62 L50 62 Z" fill="#fff" opacity=".3" stroke="none"/>
    <path d="M30 44 Q38 36 48 34" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="3"/>
    <ellipse cx="50" cy="24" rx="14" ry="12" fill="url(#i2-hd)"/>
    ${x(44,22,3.4,`#5ff1ff`)}${x(56,22,3.4,`#5ff1ff`)}
    <path d="M44 32 L40 40 M56 32 L60 40" fill="none" stroke-width="2.4"/>
    ${f(86,30,3)}${f(14,34,3)}`),"Ice Elemental":S(`i3`,`${i(`i3-ic`,`#f2fdff`,`#5fb8ee`)}`,`${f(14,72,3)}${f(88,70,3)}
    <path d="M12 20 L16 14 L20 20 L16 26 Z M82 22 L86 16 L90 22 L86 28 Z M8 84 L11 79 L14 84 L11 89 Z M90 88 L93 83 L96 88 L93 93 Z" fill="#cdf0ff" stroke-width="1.2"/>
    <path d="M28 46 L4 36 L18 56 Z M72 46 L96 36 L82 56 Z" fill="url(#i3-ic)"/>
    <path d="M50 30 L73 46 L66 78 L50 97 L34 78 L27 46 Z" fill="url(#i3-ic)"/>
    <path d="M50 30 L50 97 L73 46 Z" fill="#fff" opacity=".28" stroke="none"/><path d="M50 30 L27 46 L34 78 L50 97 Z" fill="#1a5fa8" opacity=".16" stroke="none"/>
    <path d="M27 46 L50 62 L73 46 M50 62 L50 97 M34 78 L50 62 L66 78" fill="none" stroke="#2a78c0" stroke-width="1" stroke-opacity=".75"/>
    ${x(50,62,7,`#aef6ff`)}
    <path d="M50 2 L66 18 L50 35 L34 18 Z" fill="url(#i3-ic)"/><path d="M50 2 L50 35 L66 18 Z" fill="#fff" opacity=".3" stroke="none"/>
    ${x(43,18,2.8,`#5ff1ff`)}${x(57,18,2.8,`#5ff1ff`)}`),"Rock Monster":S(`i4`,`${r(`i4-rk`,`#d3d6de`,`#8a8f9c`,`#454a58`)}${r(`i4-ms`,`#b6ec8a`,`#5fae3c`,`#2a6a22`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#i4-b)"/>
    <path d="M6 62 Q2 46 14 44 Q24 48 22 64 Q14 74 6 62 Z" fill="url(#i4-rk)"/><path d="M94 62 Q98 46 86 44 Q76 48 78 64 Q86 74 94 62 Z" fill="url(#i4-rk)"/>
    <path d="M16 56 Q10 34 28 24 Q36 10 52 12 Q70 8 78 24 Q94 34 86 58 Q92 80 70 90 Q52 98 32 90 Q10 82 16 56 Z" fill="url(#i4-rk)"/>
    <path d="M20 40 L30 46 M72 30 L80 38 M62 74 L56 84 L66 88 M26 72 L32 80" fill="none" stroke="#2a2e3a" stroke-width="1.6" stroke-opacity=".7"/>
    <path d="M34 20 Q44 8 56 14 Q64 22 52 25 Q42 21 34 24 Z" fill="url(#i4-ms)"/><path d="M70 74 Q80 70 82 80 Q76 86 70 80 Z" fill="url(#i4-ms)" stroke-width="1.2"/>
    <path d="M28 22 Q36 14 46 14 Q40 22 28 26 Z M60 12 Q70 12 74 22 Q66 20 60 12 Z" fill="#fff" stroke-width="1"/>
    <path d="M26 34 L47 42 M74 34 L53 42" fill="none" stroke="#2a2e3a" stroke-width="3.4"/>
    ${x(38,44,5.2,`#ffb43a`)}${x(62,44,5.2,`#ffb43a`)}
    <path d="M30 64 L37 57 L44 66 L50 57 L56 66 L63 57 L70 64 Q50 84 30 64 Z" fill="#1a1620"/>
    <path d="M37 59 l3 6 3 -6 z M57 59 l3 6 3 -6 z M47 68 l3 -6 3 6 z" fill="#f4f1e6" stroke-width="1"/>
    <path d="M24 38 Q32 30 44 30" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Ding:S(`i5`,`${r(`i5-bd`,`#d4fbff`,`#56cce6`,`#1f7fa8`)}${i(`i5-hl`,`#f0feff`,`#9be8f4`)}`,`<ellipse cx="50" cy="96" rx="30" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#i5-b)"/>
    <rect x="31" y="78" width="14" height="16" rx="6" fill="#1f7fa8"/><rect x="55" y="78" width="14" height="16" rx="6" fill="#1f7fa8"/>
    <ellipse cx="17" cy="58" rx="8" ry="14" fill="url(#i5-bd)"/><ellipse cx="83" cy="58" rx="8" ry="14" fill="url(#i5-bd)"/>
    <path d="M24 30 Q24 18 38 18 L62 18 Q76 18 76 30 L76 72 Q76 84 62 84 L38 84 Q24 84 24 72 Z" fill="url(#i5-bd)"/>
    <path d="M27 18 L73 18 L71 26 L29 26 Z" fill="url(#i5-hl)" stroke-width="1.2"/>
    <path d="M42 18 L47 4 L54 8 L58 18 Z" fill="url(#i5-hl)" stroke-width="1.4"/><path d="M47 4 L50 18" fill="none" stroke="#56cce6" stroke-width="1" stroke-opacity=".8"/>
    <path d="M28 40 Q27 56 30 70" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.6"/>
    <circle cx="40" cy="48" r="8.4" fill="#fff"/><circle cx="60" cy="48" r="8.4" fill="#fff"/>
    <circle cx="41" cy="49" r="4.6" fill="#0f3a5a" stroke="none"/><circle cx="61" cy="49" r="4.6" fill="#0f3a5a" stroke="none"/>
    <circle cx="42.4" cy="47.4" r="1.5" fill="#fff" stroke="none"/><circle cx="62.4" cy="47.4" r="1.5" fill="#fff" stroke="none"/>
    <path d="M31 36 Q38 31 45 35 M69 36 Q62 31 55 35" fill="none" stroke="#0f3a5a" stroke-width="2.2"/>
    <ellipse cx="50" cy="60" rx="6" ry="4.2" fill="#9be8f4"/><circle cx="47.6" cy="60" r="1.2" fill="#1f7fa8" stroke="none"/><circle cx="52.4" cy="60" r="1.2" fill="#1f7fa8" stroke="none"/>
    <circle cx="31" cy="60" r="3.4" fill="#ff9ab8" opacity=".55" stroke="none"/><circle cx="69" cy="60" r="3.4" fill="#ff9ab8" opacity=".55" stroke="none"/>
    <path d="M36 68 Q50 82 64 68 Z" fill="#0f2a44"/><path d="M45 69.4 L45 75 L51 75 L51 70.6 Z" fill="#fff" stroke-width="1"/>
    <path d="${d(14,14,5,2.2)}" fill="#ffe14a" stroke-width="1"/>
`),Donk:S(`i6`,`${r(`i6-bd`,`#bfe0ff`,`#4a8ad8`,`#1f4a96`)}${i(`i6-hl`,`#e6f4ff`,`#8fc4f4`)}`,`<ellipse cx="50" cy="96" rx="34" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#i6-b)"/>
    <rect x="28" y="76" width="16" height="17" rx="6" fill="#2a5fa8"/><rect x="56" y="76" width="16" height="17" rx="6" fill="#2a5fa8"/>
    <ellipse cx="13" cy="60" rx="9" ry="15" fill="url(#i6-bd)"/><ellipse cx="87" cy="60" rx="9" ry="15" fill="url(#i6-bd)"/>
    <path d="M18 32 Q18 18 34 18 L66 18 Q82 18 82 32 L82 68 Q82 82 66 82 L34 82 Q18 82 18 68 Z" fill="url(#i6-bd)"/>
    <path d="M22 18 L78 18 L76 26 L24 26 Z" fill="url(#i6-hl)" stroke-width="1.2"/>
    <path d="M40 18 Q50 28 60 18" fill="#2a5fa8" stroke-width="1.2"/>
    <ellipse cx="68" cy="34" rx="8.6" ry="6.4" fill="#cde8ff" stroke-width="1.2"/><ellipse cx="66" cy="32" rx="3" ry="1.8" fill="#fff" stroke="none"/>
    <path d="${d(84,12,5.6,2.4)}" fill="#ffe14a" stroke-width="1"/><path d="${d(14,16,4.6,2)}" fill="#ffe14a" stroke-width="1"/>
    <circle cx="38" cy="50" r="9" fill="#fff"/><circle cx="40" cy="52" r="4.6" fill="#14305a" stroke="none"/><circle cx="41.4" cy="50.4" r="1.4" fill="#fff" stroke="none"/>
    <circle cx="64" cy="52" r="6.6" fill="#fff"/><circle cx="62" cy="54" r="3.4" fill="#14305a" stroke="none"/>
    <path d="M56 49 L72 52" fill="none" stroke-width="2.6"/>
    <path d="M28 40 Q38 36 46 42" fill="none" stroke="#14305a" stroke-width="2.4"/>
    <ellipse cx="50" cy="62" rx="8" ry="5.4" fill="#8fc4f4"/><circle cx="46.6" cy="62" r="1.4" fill="#1f4a96" stroke="none"/><circle cx="53.4" cy="62" r="1.4" fill="#1f4a96" stroke="none"/>
    <path d="M34 72 Q48 80 66 70" fill="none" stroke-width="2"/><path d="M54 74 Q58 84 64 78 Q64 72 58 72 Z" fill="#ff8aa8" stroke-width="1.2"/>
    <path d="M24 40 Q22 56 26 70" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>`),"Bush Monster":S(`i7`,`${r(`i7-lf`,`#c4f59a`,`#4aa83a`,`#1f6a22`)}`,`<ellipse cx="50" cy="96" rx="38" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#i7-b)"/>
    ${_(`M22 68 Q6 62 4 46`,`#6a4a24`,5)}<path d="M4 46 l-3 -6 M4 46 l4 -6 M4 46 l-6 -2" fill="none" stroke="#6a4a24" stroke-width="2"/>
    ${_(`M78 68 Q94 62 96 46`,`#6a4a24`,5)}<path d="M96 46 l3 -6 M96 46 l-4 -6 M96 46 l6 -2" fill="none" stroke="#6a4a24" stroke-width="2"/>
    ${_(`M44 20 L40 6 M56 20 L60 4`,`#6a4a24`,3)}
    <g fill="url(#i7-lf)"><circle cx="30" cy="58" r="21"/><circle cx="70" cy="58" r="21"/><circle cx="50" cy="44" r="26"/><circle cx="34" cy="78" r="17"/><circle cx="66" cy="78" r="17"/><circle cx="50" cy="68" r="24"/></g>
    <g fill="url(#i7-lf)" stroke="none"><circle cx="30" cy="58" r="21"/><circle cx="70" cy="58" r="21"/><circle cx="50" cy="44" r="26"/><circle cx="34" cy="78" r="17"/><circle cx="66" cy="78" r="17"/><circle cx="50" cy="68" r="24"/></g>
    <g fill="#2a7a2a" stroke="none" opacity=".55"><path d="M24 50 q4 -4 8 0 q-4 4 -8 0 z M62 40 q4 -4 8 0 q-4 4 -8 0 z M72 64 q4 -4 8 0 q-4 4 -8 0 z M38 86 q4 -4 8 0 q-4 4 -8 0 z M56 86 q4 -4 8 0 q-4 4 -8 0 z M18 70 q4 -4 8 0 q-4 4 -8 0 z"/></g>
    <ellipse cx="50" cy="58" rx="20" ry="15" fill="#12301a"/>
    ${x(42,55,4,`#ffe14a`)}${x(58,55,4,`#ffe14a`)}
    <path d="M38 65 Q50 74 62 65 Q50 68 38 65 Z" fill="#0a1a0e" stroke-width="1"/><path d="M41 65 l2 5 2 -4 z M50 67 l2 5 2 -5 z M57 66 l2 4 2 -5 z" fill="#fff" stroke-width="1"/>
    <g stroke-width="1"><circle cx="26" cy="38" r="3.4" fill="#e8173f"/><circle cx="76" cy="42" r="3.4" fill="#e8173f"/><circle cx="38" cy="88" r="3.4" fill="#e8173f"/><circle cx="64" cy="86" r="3.4" fill="#e8173f"/></g>
    <path d="M30 34 Q40 20 54 24 Q66 18 72 34 Q62 28 54 32 Q42 28 30 34 Z" fill="#fff"/>
    <path d="M24 26 L26 22 L28 26 L26 30 Z" fill="#cdf0ff" stroke-width="1"/>`),Yeti:S(`i8`,`${r(`i8-fr`,`#ffffff`,`#e6f5ff`,`#a8d0ea`)}${r(`i8-fc`,`#d6ecfa`,`#8fbbe0`,`#4f86bd`)}`,`${v(50,50,34,47,22,`#e6f5ff`)}
    <ellipse cx="50" cy="98" rx="42" ry="20" fill="url(#i8-fr)"/>
    <circle cx="14" cy="88" r="11" fill="url(#i8-fr)"/><circle cx="86" cy="88" r="11" fill="url(#i8-fr)"/>
    <circle cx="50" cy="50" r="35" fill="url(#i8-fr)"/>
    <path d="M36 22 L36 8 L44 18 Z M46 18 L50 2 L54 18 Z M56 18 L64 8 L64 22 Z" fill="#9be0ff" stroke-width="1.2"/>
    <ellipse cx="50" cy="58" rx="23" ry="21" fill="url(#i8-fc)"/>
    <ellipse cx="40" cy="56" rx="7" ry="5" fill="#fff"/><ellipse cx="60" cy="56" rx="7" ry="5" fill="#fff"/>
    <circle cx="41" cy="57" r="3.6" fill="#2a98e0" stroke="none"/><circle cx="59" cy="57" r="3.6" fill="#2a98e0" stroke="none"/><circle cx="41" cy="57" r="1.8" fill="#0d0a14" stroke="none"/><circle cx="59" cy="57" r="1.8" fill="#0d0a14" stroke="none"/>
    <circle cx="42" cy="55.8" r=".9" fill="#fff" stroke="none"/><circle cx="60" cy="55.8" r=".9" fill="#fff" stroke="none"/>
    <path d="M28 46 L46 53 M72 46 L54 53" fill="none" stroke="#25344f" stroke-width="4.4"/>
    <ellipse cx="50" cy="64" rx="5" ry="3.6" fill="#25344f"/>
    <path d="M34 71 Q50 84 66 71 Q50 76 34 71 Z" fill="#2a1020"/><path d="M38 73 l3 9 3 -8 z M56 73 l3 8 3 -9 z" fill="#fff" stroke-width="1.2"/>
    <path d="M26 34 Q36 24 50 24" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="3"/>`),"Ice Slime":S(`i9`,`${r(`i9-bd`,`#f4feff`,`#8fdcff`,`#2a8ad0`)}`,`<ellipse cx="50" cy="94" rx="40" ry="5" fill="#2a8ad0" opacity=".35" stroke="none" filter="url(#i9-b)"/>
    <path d="M34 36 L38 14 L47 32 Z M46 30 L52 6 L58 30 Z M58 32 L66 14 L69 38 Z" fill="#dff6ff" stroke-width="1.4"/>
    <path d="M10 86 Q4 50 32 32 Q50 22 68 32 Q96 50 90 86 Q86 96 76 90 Q70 100 62 90 Q54 98 46 90 Q38 100 30 90 Q20 96 10 86 Z" fill="url(#i9-bd)" fill-opacity=".94"/>
    ${w(50,46,.62)}
    <path d="M22 50 Q28 38 40 33" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="3.6"/>
    <circle cx="35" cy="66" r="9.4" fill="#fff"/><circle cx="65" cy="66" r="9.4" fill="#fff"/>
    <circle cx="36" cy="67" r="5" fill="#14305a" stroke="none"/><circle cx="66" cy="67" r="5" fill="#14305a" stroke="none"/><circle cx="37.6" cy="65" r="1.8" fill="#fff" stroke="none"/><circle cx="67.6" cy="65" r="1.8" fill="#fff" stroke="none"/>
    <path d="M44 78 Q50 84 56 78" fill="none" stroke-width="1.8"/>
    <circle cx="80" cy="74" r="3" fill="#fff" fill-opacity=".5" stroke-width="1"/><circle cx="20" cy="76" r="2.2" fill="#fff" fill-opacity=".5" stroke-width="1"/>`),"Frozen Fossil":a(`ia`,`${i(`ia-fr`,`#effcff`,`#8fd6ff`)}${i(`ia-bn`,`#fffbea`,`#e8dcb0`)}`,`<path d="M20 90 L24 99 L28 90 Z M36 90 L40 98 L44 90 Z M54 90 L57 97 L60 90 Z" fill="#bfeaff" stroke-width="1.2"/>
    <path d="M72 34 L86 20 L86 76 L72 90 Z" fill="#5aaee0"/>
    <path d="M12 34 L26 20 L86 20 L72 34 Z" fill="#f4feff"/>
    <rect x="12" y="34" width="60" height="56" rx="4" fill="url(#ia-fr)" fill-opacity=".92"/>
    <path d="M28 26 L46 26" fill="none" stroke="#fff" stroke-width="2" stroke-opacity=".9"/>
    <path d="M20 62 Q36 54 52 60 Q62 64 68 72" fill="none" stroke="${e}" stroke-opacity=".7" stroke-width="5.4"/><path d="M20 62 Q36 54 52 60 Q62 64 68 72" fill="none" stroke="url(#ia-bn)" stroke-width="3.4"/>
    <path d="M28 58 Q26 72 32 78 M36 56 Q35 72 42 80 M44 56 Q45 70 50 78 M52 60 Q54 70 58 76" fill="none" stroke="${e}" stroke-opacity=".7" stroke-width="4"/><path d="M28 58 Q26 72 32 78 M36 56 Q35 72 42 80 M44 56 Q45 70 50 78 M52 60 Q54 70 58 76" fill="none" stroke="url(#ia-bn)" stroke-width="2.2"/>
    <path d="M14 56 Q16 46 26 46 L32 50 L29 64 Q19 66 14 60 Z" fill="url(#ia-bn)"/><circle cx="24" cy="54" r="3.4" fill="#3a4a5a"/>
    <path d="M16 62 l2 4 2 -4 z M22 63 l2 4 2 -4 z" fill="#fff" stroke-width="1"/>
    <path d="M16 40 L24 48 M60 82 L68 74 M64 40 L56 50" fill="none" stroke="#fff" stroke-width="1.6" stroke-opacity=".9"/>
    <path d="M16 38 L40 36 M52 86 L68 86" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
    ${f(90,12,4)}${f(8,30,3)}`),"Ice Crab":S(`ib`,`${r(`ib-r`,`#effcff`,`#7fd0ff`,`#2a6fb8`)}`,`${_(`M26 68 Q12 64 6 76`,`#5fb8ee`,4.4)}${_(`M28 74 Q14 78 10 92`,`#5fb8ee`,4.4)}${_(`M34 80 Q24 88 22 98`,`#5fb8ee`,4.4)}
    ${_(`M74 68 Q88 64 94 76`,`#5fb8ee`,4.4)}${_(`M72 74 Q86 78 90 92`,`#5fb8ee`,4.4)}${_(`M66 80 Q76 88 78 98`,`#5fb8ee`,4.4)}
    ${_(`M30 56 Q18 54 16 42`,`#7fd0ff`,6)}${_(`M70 56 Q82 54 84 42`,`#7fd0ff`,6)}
    <path d="M3 36 Q-1 14 13 9 Q17 20 21 11 Q33 19 25 38 Q15 46 3 36 Z" fill="url(#ib-r)"/><path d="M13 9 L15 24" fill="none" stroke="#1c4a96" stroke-width="1.6"/>
    <path d="M97 36 Q101 14 87 9 Q83 20 79 11 Q67 19 75 38 Q85 46 97 36 Z" fill="url(#ib-r)"/><path d="M87 9 L85 24" fill="none" stroke="#1c4a96" stroke-width="1.6"/>
    <path d="M40 54 L44 36 L52 52 Z M52 52 L60 30 L64 54 Z M62 56 L74 42 L74 60 Z" fill="#dff6ff" stroke-width="1.2"/>
    <ellipse cx="50" cy="66" rx="31" ry="22" fill="url(#ib-r)"/>
    <path d="M24 62 L36 50 L50 66 L64 50 L76 62 M36 50 L50 66 L36 78" fill="none" stroke="#2a78c0" stroke-width="1" stroke-opacity=".6"/>
    <path d="M30 52 Q40 44 54 46" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>
    <path d="M42 48 L40 36 M58 48 L60 36" fill="none" stroke-width="3"/>
    ${x(40,33,4.6,`#5ff1ff`)}${x(60,33,4.6,`#5ff1ff`)}
    <path d="M42 68 Q50 76 58 68" fill="none" stroke-width="2"/>
    ${f(10,60,3)}${f(90,62,3)}`),Amber:a(`d1`,`${r(`d1-am`,`#fff0a8`,`#f2a81c`,`#9a4a00`)}${i(`d1-ln`,`#fff6c8`,`#ffd55a`)}`,`<ellipse cx="50" cy="94" rx="32" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#d1-b)"/>
    <path d="M16 42 Q12 14 46 10 Q82 6 88 36 Q94 62 72 84 Q46 98 24 82 Q8 62 16 42 Z" fill="url(#d1-am)"/>
    <path d="M24 38 Q26 22 44 18" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="4"/>
    <path d="M70 80 Q58 90 40 86" fill="none" stroke="#fff3b0" stroke-opacity=".6" stroke-width="2.4"/>
    <g transform="rotate(-18 50 50)">
      <ellipse cx="44" cy="40" rx="10" ry="5" fill="#fff" fill-opacity=".55" stroke-width="1"/><ellipse cx="56" cy="42" rx="10" ry="4.4" fill="#fff" fill-opacity=".5" stroke-width="1"/>
      <ellipse cx="50" cy="52" rx="13" ry="5" fill="#4a2c10"/><circle cx="64" cy="52" r="4.6" fill="#4a2c10"/><circle cx="66" cy="50.6" r="1.6" fill="#ffd54a" stroke="none"/>
      <path d="M68 53 L80 56" fill="none" stroke-width="1.6"/><path d="M42 56 L36 66 M50 57 L48 68 M57 56 L60 67" fill="none" stroke-width="1.6"/>
    </g>
    <circle cx="30" cy="66" r="2.6" fill="#fff6c8" fill-opacity=".6" stroke-width="1"/><circle cx="72" cy="30" r="2" fill="#fff6c8" fill-opacity=".6" stroke-width="1"/><circle cx="66" cy="70" r="1.6" fill="#fff6c8" fill-opacity=".6" stroke-width="1"/>`),"Dino Egg":a(`d2`,`${r(`d2-eg`,`#fffbe0`,`#e8e4a8`,`#a8a870`)}${i(`d2-ne`,`#e8c46a`,`#8a5a1c`)}`,`<ellipse cx="50" cy="92" rx="42" ry="7" fill="url(#d2-ne)"/>
    <path d="M14 90 Q30 78 40 88 M86 90 Q70 78 60 88 M30 94 Q50 86 70 94" fill="none" stroke="#6a4412" stroke-width="1.6"/>
    <path d="M50 8 Q80 12 80 52 Q80 88 50 88 Q20 88 20 52 Q20 12 50 8 Z" fill="url(#d2-eg)"/>
    <g fill="#6a8a3a" stroke="none" opacity=".75"><circle cx="34" cy="30" r="4"/><circle cx="62" cy="24" r="3"/><circle cx="68" cy="46" r="4.6"/><circle cx="30" cy="54" r="3.4"/><circle cx="44" cy="74" r="4"/><circle cx="64" cy="70" r="3"/><circle cx="52" cy="16" r="2.2"/></g>
    <path d="M20 50 L34 44 L40 56 L52 46 L60 58 L72 50 L80 56 L74 66 L62 62 L54 72 L42 62 L32 70 L22 62 Z" fill="#2a2418" stroke-width="1.2"/>
    <circle cx="44" cy="56" r="4" fill="#fff"/><circle cx="58" cy="58" r="4" fill="#fff"/><circle cx="45" cy="57" r="2.2" fill="#14101c" stroke="none"/><circle cx="59" cy="59" r="2.2" fill="#14101c" stroke="none"/>
    <path d="M24 28 Q34 14 48 12" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3.4"/>`),"Dino Fossil":a(`d3`,`${i(`d3-st`,`#e0d2b0`,`#8e7a52`)}`,`<ellipse cx="50" cy="94" rx="42" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#d3-b)"/>
    <path d="M8 24 L18 10 L84 8 L94 22 L92 80 L82 92 L16 92 L8 78 Z" fill="url(#d3-st)"/>
    <path d="M18 10 L26 30 L20 50 M84 8 L74 24 L80 44 M16 92 L30 78 M82 92 L70 76 L78 66" fill="none" stroke="#6a5834" stroke-width="1.4" stroke-opacity=".7"/>
    <g fill="#7a6840" stroke="none" opacity=".6"><circle cx="86" cy="68" r="2.4"/><circle cx="14" cy="64" r="2"/><circle cx="52" cy="86" r="1.8"/></g>
    <path d="M34 50 Q52 42 70 52 Q82 58 88 70" fill="none" stroke="${e}" stroke-width="8"/><path d="M34 50 Q52 42 70 52 Q82 58 88 70" fill="none" stroke="#f6ecd2" stroke-width="5.4"/>
    <path d="M40 48 Q38 66 46 76 M48 46 Q48 66 56 76 M57 47 Q58 64 64 72 M65 51 Q68 64 72 68" fill="none" stroke="${e}" stroke-width="5"/><path d="M40 48 Q38 66 46 76 M48 46 Q48 66 56 76 M57 47 Q58 64 64 72 M65 51 Q68 64 72 68" fill="none" stroke="#f6ecd2" stroke-width="2.6"/>
    <g fill="#d8c8a0" stroke-width="1"><circle cx="44" cy="46" r="1.6"/><circle cx="52" cy="44" r="1.6"/><circle cx="60" cy="46" r="1.6"/><circle cx="68" cy="50" r="1.6"/></g>
    <path d="M12 44 Q14 32 28 32 L38 36 L34 54 Q22 58 12 52 Z" fill="#f6ecd2"/>
    <circle cx="26" cy="42" r="4.6" fill="#2a2418"/><circle cx="25" cy="41" r="1.2" fill="#8a7a52" stroke="none"/>
    <path d="M14 53 l2 5 2 -5 z M20 55 l2 5 2 -5 z M26 55 l2 5 2 -5 z" fill="#fff" stroke-width="1"/>
    <path d="M18 20 Q30 14 46 14" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4"/>`),Stegosaurus:a(`d4`,`${r(`d4-bd`,`#b6e88a`,`#6fc24a`,`#2f7a30`)}${i(`d4-pl`,`#ffc27a`,`#e0501a`)}${i(`d4-bl`,`#f0f8c8`,`#cfe890`)}`,`<ellipse cx="50" cy="94" rx="44" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#d4-b)"/>
    <path d="M24 38 L30 14 L38 36 Z M38 34 L47 8 L55 34 Z M54 34 L64 10 L70 38 Z M68 40 L78 20 L82 46 Z M16 50 L16 30 L26 46 Z" fill="url(#d4-pl)"/>
    <path d="M30 18 L32 30 M47 12 L47 28 M64 14 L63 30" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>
    <path d="M30 56 Q10 58 4 78 Q10 70 22 70 Z" fill="url(#d4-bd)"/>
    <path d="M6 76 L0 62 L10 70 Z M14 72 L10 58 L20 68 Z" fill="#fff3d0" stroke-width="1.2"/>
    <rect x="26" y="68" width="14" height="22" rx="6" fill="url(#d4-bd)"/><rect x="62" y="68" width="14" height="22" rx="6" fill="url(#d4-bd)"/>
    <ellipse cx="33" cy="90" rx="9" ry="3.6" fill="#4f9a38"/><ellipse cx="69" cy="90" rx="9" ry="3.6" fill="#4f9a38"/>
    <ellipse cx="50" cy="58" rx="36" ry="21" fill="url(#d4-bd)"/>
    <ellipse cx="52" cy="70" rx="24" ry="8" fill="url(#d4-bl)" stroke="none"/>
    <path d="M78 54 Q94 52 98 64 Q94 74 82 70 Q74 66 78 54 Z" fill="url(#d4-bd)"/>
    <circle cx="88" cy="60" r="3.8" fill="#fff"/><circle cx="89" cy="60.6" r="2.2" fill="#14101c" stroke="none"/><circle cx="89.8" cy="59.6" r=".8" fill="#fff" stroke="none"/>
    <path d="M84 68 Q90 71 96 66" fill="none" stroke-width="1.5"/><circle cx="95" cy="60" r="1" fill="#1f5a22" stroke="none"/>
    <g fill="#2f7a30" stroke="none" opacity=".5"><circle cx="36" cy="52" r="2.6"/><circle cx="52" cy="46" r="2.2"/><circle cx="64" cy="54" r="2.8"/><circle cx="46" cy="60" r="2"/></g>
    <path d="M28 46 Q44 38 62 42" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Velociraptor:a(`d5`,`${r(`d5-bd`,`#f6b86a`,`#d9843a`,`#7a3a14`)}${i(`d5-bl`,`#ffe9c0`,`#f0c080`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#d5-b)"/>
    ${_(`M36 56 Q16 60 4 78`,`#d9843a`,9)}
    ${_(`M48 74 L40 92 L30 94 M40 92 L48 94`,`#c26f2c`,6)}
    <path d="M30 94 L24 90 L34 90 Z" fill="#fff3d0" stroke-width="1"/>
    ${_(`M58 70 L64 90 L74 94 M64 90 L56 94`,`#d9843a`,6)}
    <path d="M74 94 L80 90 L70 90 Z" fill="#fff3d0" stroke-width="1"/>
    ${_(`M60 54 Q70 44 74 34`,`#d9843a`,12)}
    <ellipse cx="48" cy="58" rx="26" ry="17" fill="url(#d5-bd)" transform="rotate(-14 48 58)"/>
    <ellipse cx="50" cy="66" rx="18" ry="7" fill="url(#d5-bl)" stroke="none" transform="rotate(-14 50 66)"/>
    <path d="M30 52 L38 46 M42 46 L50 40 M54 46 L60 42" fill="none" stroke="#7a3a14" stroke-width="3"/>
    ${_(`M62 62 Q72 64 76 58`,`#d9843a`,4.4)}
    <path d="M76 58 l6 -3 M76 58 l5 3 M76 58 l6 1" fill="none" stroke="#fff3d0" stroke-width="1.6"/>
    <path d="M66 28 Q78 18 94 26 Q100 30 96 36 L94 40 Q82 44 72 42 Q64 40 66 28 Z" fill="url(#d5-bd)"/>
    <path d="M72 38 Q84 44 96 38 L94 44 Q82 48 74 44 Z" fill="#7a1a24"/>
    <path d="M78 41 l2 4 2 -4 z M86 41 l2 4 2 -4 z" fill="#fff" stroke-width="1"/>
    <circle cx="78" cy="30" r="4.6" fill="#ffd54a"/><ellipse cx="78.4" cy="30" rx="1.3" ry="3.6" fill="#14101c" stroke="none"/><circle cx="77" cy="28.6" r="1" fill="#fff" stroke="none"/>
    <path d="M72 24 Q78 20 86 24" fill="none" stroke="#7a3a14" stroke-width="2"/>
    <circle cx="94" cy="30" r="1" fill="#7a3a14" stroke="none"/>
    <path d="M70 18 L66 8 M74 16 L72 5 M78 16 L78 4" fill="none" stroke="#7a3a14" stroke-width="2"/>
    <path d="M30 50 Q42 42 58 46" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.6"/>`),Brontosaurus:a(`d6`,`${r(`d6-bd`,`#bfe6e0`,`#6fb8aa`,`#2f6a64`)}${i(`d6-bl`,`#e8f7ee`,`#b4dcc8`)}`,`<ellipse cx="46" cy="96" rx="44" ry="3" fill="#000" opacity=".25" stroke="none" filter="url(#d6-b)"/>
    <path d="M18 66 Q2 72 4 92 Q10 80 24 80 Z" fill="url(#d6-bd)"/>
    <rect x="18" y="70" width="14" height="24" rx="6" fill="url(#d6-bd)"/><rect x="56" y="70" width="14" height="24" rx="6" fill="url(#d6-bd)"/>
    <ellipse cx="25" cy="94" rx="9.4" ry="3.6" fill="#3f8a82"/><ellipse cx="63" cy="94" rx="9.4" ry="3.6" fill="#3f8a82"/>
    ${_(`M60 60 Q86 52 82 30 Q80 22 84 18`,`#6fb8aa`,14)}
    <ellipse cx="42" cy="66" rx="34" ry="21" fill="url(#d6-bd)"/>
    <ellipse cx="44" cy="76" rx="24" ry="8" fill="url(#d6-bl)" stroke="none"/>
    <path d="M76 14 Q88 6 98 14 Q100 22 92 24 Q82 26 78 22 Z" fill="url(#d6-bd)"/>
    <circle cx="86" cy="14" r="3.4" fill="#fff"/><circle cx="87" cy="14.6" r="2" fill="#14101c" stroke="none"/><circle cx="87.8" cy="13.6" r=".7" fill="#fff" stroke="none"/>
    <path d="M84 21 Q90 24 96 20" fill="none" stroke-width="1.4"/><circle cx="96" cy="15" r="1" fill="#1f4a46" stroke="none"/>
    <g fill="#2f6a64" stroke="none" opacity=".4"><circle cx="30" cy="58" r="3"/><circle cx="46" cy="52" r="2.6"/><circle cx="58" cy="62" r="3.2"/><circle cx="36" cy="68" r="2.2"/></g>
    <path d="M22 54 Q38 44 58 48" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Triceratops:a(`d7`,`${r(`d7-fr`,`#ffb86a`,`#e0702a`,`#8a3a10`)}${r(`d7-hd`,`#c4ec8a`,`#7cc04a`,`#3a7a28`)}${i(`d7-hn`,`#fffbe8`,`#ddcf9a`)}`,`<path d="M10 52 Q4 22 28 12 Q50 2 72 12 Q96 22 90 52 Q92 78 66 86 L34 86 Q8 78 10 52 Z" fill="url(#d7-fr)"/>
    <g fill="#ffdf9a" stroke-width="1.2"><circle cx="14" cy="38" r="4.4"/><circle cx="20" cy="22" r="4.4"/><circle cx="34" cy="10" r="4.4"/><circle cx="50" cy="6" r="4.4"/><circle cx="66" cy="10" r="4.4"/><circle cx="80" cy="22" r="4.4"/><circle cx="86" cy="38" r="4.4"/></g>
    <path d="M22 34 Q50 20 78 34 M20 48 Q50 34 80 48" fill="none" stroke="#8a3a10" stroke-width="1.6" stroke-opacity=".5"/>
    <path d="M34 40 L20 6 L42 34 Z M66 40 L80 6 L58 34 Z" fill="url(#d7-hn)"/>
    <path d="M28 20 L26 12 M72 20 L74 12" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.6"/>
    <ellipse cx="50" cy="60" rx="25" ry="26" fill="url(#d7-hd)"/>
    <path d="M46 52 L50 30 L54 52 Z" fill="url(#d7-hn)"/>
    <path d="M30 82 Q50 98 70 82 Q64 70 50 72 Q36 70 30 82 Z" fill="#e8c46a" stroke-width="1.6"/>
    <path d="M50 74 L50 92" fill="none" stroke="#8a5a1c" stroke-width="1.2"/>
    <circle cx="38" cy="52" r="6" fill="#fff"/><circle cx="62" cy="52" r="6" fill="#fff"/>
    <circle cx="39" cy="53" r="3.4" fill="#14101c" stroke="none"/><circle cx="63" cy="53" r="3.4" fill="#14101c" stroke="none"/><circle cx="40" cy="51.6" r="1.2" fill="#fff" stroke="none"/><circle cx="64" cy="51.6" r="1.2" fill="#fff" stroke="none"/>
    <path d="M30 46 Q38 42 46 46 M70 46 Q62 42 54 46" fill="none" stroke="#2f6a20" stroke-width="2"/>
    <ellipse cx="44" cy="66" rx="2" ry="1.4" fill="#2f6a20" stroke="none"/><ellipse cx="56" cy="66" rx="2" ry="1.4" fill="#2f6a20" stroke="none"/>
    <path d="M30 44 Q40 38 52 40" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2.4"/>`),"T. Rex":a(`d8`,`${r(`d8-bd`,`#9ad06a`,`#5a9a3a`,`#2a5a22`)}${i(`d8-bl`,`#e8f2b8`,`#b8d880`)}${r(`d8-mo`,`#e0505e`,`#8a1426`,`#3a0510`)}`,`<path d="M26 34 Q6 52 8 100 L64 100 Q62 76 52 62 Q46 56 46 50 Z" fill="url(#d8-bd)"/>
    <path d="M10 70 Q36 80 56 74 L62 100 L10 100 Z" fill="url(#d8-bl)" stroke="none" opacity=".9"/>
    <g fill="#2a5a22" stroke="none" opacity=".5"><circle cx="20" cy="56" r="3"/><circle cx="32" cy="48" r="2.4"/><circle cx="16" cy="76" r="2.6"/><circle cx="38" cy="60" r="2.2"/></g>
    ${_(`M54 76 Q66 74 68 84`,`#5a9a3a`,5)}<path d="M68 84 l-2 6 M68 84 l3 5" fill="none" stroke="#fff3d0" stroke-width="1.8"/>
    <path d="M40 40 Q60 8 92 22 Q99 26 97 38 L94 42 Q70 38 48 46 Q40 48 40 40 Z" fill="url(#d8-bd)"/>
    <path d="M40 46 Q70 38 95 42 L96 52 Q70 56 46 54 Z" fill="url(#d8-mo)" stroke-width="1.4"/>
    <path d="M44 56 Q70 56 94 52 Q90 72 66 70 Q50 68 44 56 Z" fill="url(#d8-bd)"/>
    <path d="M52 56 Q70 62 90 56 Q86 70 66 68 Q56 66 52 56 Z" fill="url(#d8-bl)" stroke="none"/>
    <path d="M52 44 l3 7 3 -8 z M62 42 l3 8 3 -8 z M72 41 l3 8 3 -8 z M82 41 l3 7 3 -7 z M90 42 l2 6 3 -6 z" fill="#fffdf2" stroke-width="1"/>
    <path d="M56 56 l3 -7 3 7 z M66 56 l3 -8 3 8 z M76 55 l3 -7 3 7 z M85 54 l3 -6 3 6 z" fill="#fffdf2" stroke-width="1"/>
    <path d="M64 56 Q72 58 78 56" fill="none" stroke="#e8707e" stroke-width="2.4" stroke-opacity=".7"/>
    <circle cx="62" cy="28" r="5.4" fill="#ffd54a"/><ellipse cx="62.4" cy="28" rx="1.4" ry="4.4" fill="#14101c" stroke="none"/><circle cx="60.8" cy="26.4" r="1.2" fill="#fff" stroke="none"/>
    <path d="M52 24 Q62 17 72 26" fill="none" stroke="#1f4a1a" stroke-width="3"/>
    <ellipse cx="92" cy="29" rx="1.8" ry="1.4" fill="#1f4a1a" stroke="none"/>`),Panda:a(`z1`,`${r(`z1-wh`,`#ffffff`,`#f1f2f6`,`#cfd3de`)}`,b(`z1`,`#1d1830`,!0)),"Rainbow Panda":a(`zb`,`${r(`zb-wh`,`#ffffff`,`#f1f2f6`,`#cfd3de`)}<linearGradient id="zb-rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff4d4d"/><stop offset=".2" stop-color="#ff9a2e"/><stop offset=".4" stop-color="#ffe14a"/><stop offset=".6" stop-color="#4cd964"/><stop offset=".8" stop-color="#3a9bff"/><stop offset="1" stop-color="#a65cff"/></linearGradient>`,`${b(`zb`,`url(#zb-rb)`,!1)}${f(10,18,5)}${f(92,14,4)}${f(88,60,3.4)}${f(8,56,3.4)}`),Sloth:a(`z2`,`${r(`z2-fr`,`#d9b88a`,`#a9804e`,`#5e4226`)}${r(`z2-fc`,`#fff0d2`,`#ecd2a4`,`#c9a874`)}${i(`z2-br`,`#8a5a30`,`#4a2e16`)}`,`${_(`M0 16 Q50 8 100 18`,`#6a4426`,7)}
    <path d="M12 13 Q6 2 16 4 Q20 8 12 13 Z M88 15 Q96 4 90 2 Q84 8 88 15 Z" fill="#58bd4c" stroke-width="1.2"/>
    ${_(`M22 16 Q18 36 32 50`,`#8a6638`,9)}${_(`M78 18 Q82 38 68 50`,`#8a6638`,9)}
    <path d="M18 14 l-2 -5 M23 14 l0 -6 M28 15 l2 -5 M72 17 l-2 -5 M77 17 l0 -6 M82 16 l2 -5" fill="none" stroke="#efe2c4" stroke-width="2"/>
    <ellipse cx="50" cy="90" rx="32" ry="20" fill="url(#z2-fr)"/>
    <path d="M26 86 l4 6 M38 92 l3 6 M60 94 l-2 6 M72 88 l-4 6" fill="none" stroke="#5e4226" stroke-width="1.4" stroke-opacity=".6"/>
    <ellipse cx="50" cy="54" rx="30" ry="25" fill="url(#z2-fr)"/>
    <ellipse cx="50" cy="57" rx="22" ry="18" fill="url(#z2-fc)" stroke-width="1"/>
    <path d="M24 44 l-4 4 l5 0 l-3 5 M76 44 l4 4 l-5 0 l3 5" fill="none" stroke="#5e4226" stroke-width="1.4" stroke-opacity=".7"/>
    <ellipse cx="38" cy="52" rx="10" ry="5.4" fill="url(#z2-br)" transform="rotate(26 38 52)"/><ellipse cx="62" cy="52" rx="10" ry="5.4" fill="url(#z2-br)" transform="rotate(-26 62 52)"/>
    <circle cx="38" cy="52" r="2.8" fill="#14101c" stroke="none"/><circle cx="62" cy="52" r="2.8" fill="#14101c" stroke="none"/><circle cx="39" cy="51" r="1" fill="#fff" stroke="none"/><circle cx="63" cy="51" r="1" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="60" rx="4.6" ry="3.4" fill="#3a2414"/><ellipse cx="48.6" cy="58.8" rx="1.4" ry=".9" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M40 66 Q50 74 60 66" fill="none" stroke-width="1.8"/>
    <path d="M30 40 Q40 34 52 35" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4"/>`),Tenrec:a(`z3`,`${r(`z3-bd`,`#e6c498`,`#b5865a`,`#6e4a2c`)}${r(`z3-sn`,`#fff0d8`,`#f4d6aa`,`#d9b07a`)}`,`<ellipse cx="48" cy="94" rx="40" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#z3-b)"/>
    ${v(44,56,27,40,20,`#7a5a3a`)}
    <ellipse cx="30" cy="86" rx="7" ry="5" fill="#d9b07a"/><ellipse cx="58" cy="88" rx="7" ry="5" fill="#d9b07a"/>
    <path d="M62 54 Q76 50 96 62 Q76 72 62 70 Z" fill="url(#z3-sn)"/>
    <ellipse cx="44" cy="58" rx="28" ry="28" fill="url(#z3-bd)"/>
    <ellipse cx="60" cy="62" rx="17" ry="14" fill="url(#z3-sn)" stroke-width="1"/>
    <path d="M60 54 Q78 52 96 62 Q78 70 62 68" fill="url(#z3-sn)"/>
    <circle cx="95" cy="62" r="3.6" fill="#1a1020"/><circle cx="94" cy="61" r="1" fill="#fff" stroke="none"/>
    <circle cx="68" cy="50" r="5.4" fill="#fff"/><circle cx="69.6" cy="51" r="3" fill="#14101c" stroke="none"/><circle cx="70.4" cy="49.8" r="1" fill="#fff" stroke="none"/>
    <path d="M60 44 Q68 40 76 45" fill="none" stroke-width="1.4"/>
    <circle cx="34" cy="38" r="6.4" fill="#e6c498"/><circle cx="34" cy="38" r="3.4" fill="#e89a8a" stroke="none"/>
    <path d="M80 64 Q86 68 92 66" fill="none" stroke-width="1.2"/>
    <path d="M78 58 L98 54 M78 66 L98 70" fill="none" stroke="#fff" stroke-width=".9" stroke-opacity=".8"/>
    <path d="M24 56 Q34 44 50 42" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),Flamingo:a(`z4`,`${i(`z4-pk`,`#ffb3cc`,`#ec4f86`)}${i(`z4-pl`,`#ffd0e0`,`#f77aa6`)}`,`<ellipse cx="50" cy="96" rx="34" ry="3" fill="#7fd0ff" opacity=".55" stroke="none"/>
    ${_(`M42 78 L42 94 M42 94 L34 95 M42 94 L50 95`,`#ff8fb4`,3)}
    ${_(`M56 76 L66 84 L60 94 M60 94 L52 95 M60 94 L68 95`,`#ff8fb4`,3)}
    ${_(`M64 58 Q88 50 78 30 Q68 14 52 20`,`#ff7aa6`,8)}
    <ellipse cx="46" cy="62" rx="27" ry="17" fill="url(#z4-pk)" transform="rotate(-8 46 62)"/>
    <path d="M26 56 Q34 78 62 70 Q50 74 40 62 Q32 52 26 56 Z" fill="url(#z4-pl)"/>
    <path d="M34 56 L38 62 M42 54 L46 62 M50 54 L54 62" fill="none" stroke="#c8336a" stroke-width="1.2" stroke-opacity=".6"/>
    <path d="M22 54 L10 48 Q16 58 24 62 Z" fill="url(#z4-pk)"/>
    <circle cx="54" cy="19" r="8.4" fill="url(#z4-pl)"/>
    <path d="M58 16 Q76 14 74 28 Q68 22 60 22 Z" fill="#fff0e6"/><path d="M66 18 Q76 16 74 28 Q71 22 66 20 Z" fill="#1a1020" stroke-width="1"/>
    <circle cx="55" cy="17" r="2.6" fill="#fff"/><circle cx="55.6" cy="17.4" r="1.4" fill="#14101c" stroke="none"/>
    <path d="M30 56 Q38 50 50 52" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.4"/>`),Zebra:a(`z5`,`${r(`z5-wh`,`#ffffff`,`#f2f3f6`,`#cbd0da`)}${r(`z5-mz`,`#7a7a8c`,`#46465a`,`#1f1f2c`)}<clipPath id="z5-cp"><ellipse cx="50" cy="52" rx="27" ry="35"/></clipPath>`,`<path d="M32 26 L28 2 L48 18 Z M68 26 L72 2 L52 18 Z" fill="url(#z5-wh)"/>
    <path d="M33 22 L31 8 L42 17 Z M67 22 L69 8 L58 17 Z" fill="#1d1830" stroke="none"/>
    <path d="M43 18 L45 4 L55 4 L57 18 Z" fill="#1d1830"/>
    <ellipse cx="50" cy="52" rx="27" ry="35" fill="url(#z5-wh)"/>
    <g clip-path="url(#z5-cp)" fill="#1d1830" stroke="none">
      <path d="M10 22 Q50 32 90 22 L90 29 Q50 39 10 29 Z"/><path d="M10 38 Q50 48 90 38 L90 45 Q50 55 10 45 Z"/><path d="M10 54 Q50 64 90 54 L90 61 Q50 71 10 61 Z"/>
      <path d="M46 8 L50 30 L54 8 Z"/><path d="M30 18 L36 40 L40 14 Z"/><path d="M70 18 L64 40 L60 14 Z"/>
    </g>
    <ellipse cx="50" cy="52" rx="27" ry="35" fill="none"/>
    <ellipse cx="50" cy="80" rx="18" ry="15" fill="url(#z5-mz)"/>
    <ellipse cx="43" cy="82" rx="3" ry="4.4" fill="#0e0e16" stroke="none"/><ellipse cx="57" cy="82" rx="3" ry="4.4" fill="#0e0e16" stroke="none"/>
    <path d="M44 92 Q50 95 56 92" fill="none" stroke-width="1.4"/><ellipse cx="44" cy="72" rx="6" ry="2.4" fill="#fff" opacity=".25" stroke="none"/>
    <ellipse cx="38" cy="50" rx="6" ry="4.6" fill="#14101c"/><ellipse cx="62" cy="50" rx="6" ry="4.6" fill="#14101c"/>
    <circle cx="39.6" cy="48.6" r="1.6" fill="#fff" stroke="none"/><circle cx="63.6" cy="48.6" r="1.6" fill="#fff" stroke="none"/>
    <path d="M28 40 Q38 34 48 38" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.4"/>`),Elephant:a(`z6`,`${r(`z6-gy`,`#c9d2e0`,`#8e9bb0`,`#556075`)}${r(`z6-pk`,`#ffd0d8`,`#f0a0b0`,`#c8707e`)}${i(`z6-iv`,`#ffffff`,`#e2d6b6`)}`,`<ellipse cx="18" cy="46" rx="18" ry="28" fill="url(#z6-gy)"/><ellipse cx="82" cy="46" rx="18" ry="28" fill="url(#z6-gy)"/>
    <ellipse cx="20" cy="48" rx="10" ry="20" fill="url(#z6-pk)" stroke="none"/><ellipse cx="80" cy="48" rx="10" ry="20" fill="url(#z6-pk)" stroke="none"/>
    <path d="M38 76 Q26 84 30 98 Q38 90 44 82 Z M62 76 Q74 84 70 98 Q62 90 56 82 Z" fill="url(#z6-iv)"/>
    <ellipse cx="50" cy="44" rx="27" ry="30" fill="url(#z6-gy)"/>
    ${_(`M50 56 Q50 78 52 90 Q54 98 62 96`,`#9aa7bb`,15)}
    <path d="M43 66 Q50 69 58 66 M43 74 Q50 77 58 74 M44 82 Q50 85 58 82" fill="none" stroke="#5a667c" stroke-width="1.2" stroke-opacity=".75"/>
    <circle cx="39" cy="42" r="3.4" fill="#14101c" stroke="none"/><circle cx="61" cy="42" r="3.4" fill="#14101c" stroke="none"/>
    <circle cx="40" cy="41" r="1.1" fill="#fff" stroke="none"/><circle cx="62" cy="41" r="1.1" fill="#fff" stroke="none"/>
    <path d="M32 36 Q38 32 45 36 M68 36 Q62 32 55 36" fill="none" stroke="#5a667c" stroke-width="1.6"/>
    <circle cx="33" cy="54" r="4" fill="#ff9aa8" opacity=".45" stroke="none"/><circle cx="67" cy="54" r="4" fill="#ff9aa8" opacity=".45" stroke="none"/>
    <path d="M34 26 Q44 18 56 20" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>`),Lemur:a(`z7`,`${r(`z7-gy`,`#d4dae4`,`#9aa4b6`,`#5c667c`)}${r(`z7-fc`,`#ffffff`,`#f4f4f8`,`#d2d6e0`)}${r(`z7-or`,`#ffe27a`,`#ffa622`,`#c06800`)}`,`${_(`M72 96 Q98 86 90 58 Q84 38 68 34`,`#c2cad8`,12)}
    <path d="M72 96 Q98 86 90 58 Q84 38 68 34" fill="none" stroke="#1d1830" stroke-width="12" stroke-dasharray="6 6" stroke-linecap="butt" stroke-opacity=".9"/>
    <ellipse cx="46" cy="92" rx="26" ry="16" fill="url(#z7-gy)"/>
    <circle cx="26" cy="30" r="9" fill="url(#z7-gy)"/><circle cx="26" cy="30" r="4.6" fill="#f0b0b8" stroke="none"/><circle cx="66" cy="30" r="9" fill="url(#z7-gy)"/><circle cx="66" cy="30" r="4.6" fill="#f0b0b8" stroke="none"/>
    <ellipse cx="46" cy="54" rx="26" ry="25" fill="url(#z7-gy)"/>
    <ellipse cx="46" cy="60" rx="18" ry="17" fill="url(#z7-fc)" stroke-width="1"/>
    <path d="M26 46 Q36 38 44 50 Q38 62 28 58 Z" fill="#1d1830"/><path d="M66 46 Q56 38 48 50 Q54 62 64 58 Z" fill="#1d1830"/>
    <circle cx="35" cy="51" r="5.6" fill="url(#z7-or)"/><circle cx="57" cy="51" r="5.6" fill="url(#z7-or)"/>
    <ellipse cx="35" cy="51" rx="1.6" ry="4.6" fill="#14101c" stroke="none"/><ellipse cx="57" cy="51" rx="1.6" ry="4.6" fill="#14101c" stroke="none"/>
    <circle cx="33.4" cy="49" r="1.2" fill="#fff" stroke="none"/><circle cx="55.4" cy="49" r="1.2" fill="#fff" stroke="none"/>
    <path d="M42 62 L50 62 L46 67 Z" fill="#1d1830" stroke-width="1.2"/><path d="M46 67 L46 70 M46 70 Q42 74 38 71 M46 70 Q50 74 54 71" fill="none" stroke-width="1.2"/>
    <path d="M32 38 Q40 32 50 34" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.6"/>`),Peacock:a(`z8`,`${i(`z8-ft`,`#4fc27a`,`#1c7a46`)}${r(`z8-bl`,`#6fd0ff`,`#1f7fd0`,`#0c3f8a`)}`,`${C()}
    ${_(`M50 80 Q54 62 50 46`,`#2a8fe0`,9)}
    <ellipse cx="48" cy="84" rx="17" ry="13" fill="url(#z8-bl)"/>
    <path d="M36 82 Q46 92 60 82" fill="none" stroke="#8fe0ff" stroke-width="1.6" stroke-opacity=".8"/>
    <circle cx="50" cy="42" r="8" fill="url(#z8-bl)"/>
    <path d="M48 34 Q46 24 42 22 M50 34 L50 20 M52 34 Q54 24 58 22" fill="none" stroke-width="1.4"/>
    <circle cx="42" cy="21" r="2.2" fill="#2a9bd8" stroke-width="1"/><circle cx="50" cy="19" r="2.2" fill="#2a9bd8" stroke-width="1"/><circle cx="58" cy="21" r="2.2" fill="#2a9bd8" stroke-width="1"/>
    <path d="M56 42 L64 45 L56 47 Z" fill="#ffc238" stroke-width="1.2"/>
    <circle cx="52" cy="40" r="2.4" fill="#fff"/><circle cx="52.6" cy="40.4" r="1.3" fill="#14101c" stroke="none"/>
    <path d="M47 46 L47 56" fill="none" stroke="#fff" stroke-width="0"/>`),Chameleon:a(`z9`,`${r(`z9-gr`,`#c8f08a`,`#6fc24a`,`#2f7a30`)}${i(`z9-br`,`#9a6a3a`,`#5a3a1c`)}${r(`z9-ey`,`#d6f7a0`,`#8ed05a`,`#3f8a2a`)}`,`${_(`M0 88 Q50 80 100 90`,`#7a5028`,8)}
    <path d="M86 84 Q96 72 98 78 Q96 90 86 88 Z" fill="#58bd4c" stroke-width="1.2"/>
    ${_(`M28 66 Q4 66 6 48 Q8 34 22 38 Q30 42 24 50`,`#6fc24a`,8)}
    ${_(`M38 74 L34 86 M34 86 Q30 88 28 86`,`#5fb040`,5)}${_(`M58 74 L60 86 M60 86 Q64 88 66 86`,`#5fb040`,5)}
    <path d="M22 54 L26 42 L32 52 L38 40 L44 50 L52 38 L58 50 L66 42 L68 56 Z" fill="#2f7a30" stroke-width="1.2"/>
    <ellipse cx="46" cy="62" rx="27" ry="19" fill="url(#z9-gr)"/>
    <path d="M24 70 Q46 84 68 70 Q46 78 24 70 Z" fill="#e8f7c0" stroke="none"/>
    <g stroke="none"><circle cx="34" cy="58" r="3" fill="#ffb347"/><circle cx="46" cy="52" r="3.4" fill="#ff7a6a"/><circle cx="58" cy="60" r="3" fill="#ffe14a"/><circle cx="40" cy="68" r="2.4" fill="#ff7a6a"/><circle cx="54" cy="70" r="2.4" fill="#ffb347"/></g>
    <path d="M62 44 L74 30 L84 44 Z" fill="url(#z9-gr)" stroke-width="1.2"/>
    <ellipse cx="76" cy="54" rx="19" ry="13" fill="url(#z9-gr)"/>
    <circle cx="78" cy="46" r="9.4" fill="url(#z9-ey)"/><circle cx="78" cy="46" r="5.6" fill="#fff6c8" stroke-width="1"/><circle cx="79.4" cy="46" r="2.8" fill="#14101c" stroke="none"/><circle cx="80.2" cy="45" r="1" fill="#fff" stroke="none"/>
    <path d="M66 60 Q80 66 95 58" fill="none" stroke-width="1.6"/>
    <path d="M93 59 Q97.4 59.4 96.6 53.6" fill="none" stroke="#ff7a9a" stroke-width="2.4"/><circle cx="96.4" cy="52.2" r="2.2" fill="#ff7a9a" stroke-width="1"/>
    <path d="M30 52 Q40 46 52 48" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.4"/>`),Lion:a(`za`,`${r(`za-mn`,`#e69a3c`,`#b8641c`,`#6a3008`)}${r(`za-fc`,`#ffe3a8`,`#f2c27a`,`#c98f4a`)}${r(`za-mz`,`#fff0d0`,`#f8dca8`,`#e0b878`)}`,`${v(50,52,34,47,22,`#b8641c`)}
    <circle cx="50" cy="52" r="37" fill="url(#za-mn)"/>
    <g fill="none" stroke="#6a3008" stroke-width="1.4" stroke-opacity=".5"><path d="M20 40 Q24 52 20 64 M80 40 Q76 52 80 64 M32 22 Q40 28 36 36 M68 22 Q60 28 64 36 M30 82 Q36 76 40 82 M70 82 Q64 76 60 82"/></g>
    <circle cx="28" cy="24" r="9" fill="url(#za-fc)"/><circle cx="28" cy="24" r="4.6" fill="#f0a098" stroke="none"/><circle cx="72" cy="24" r="9" fill="url(#za-fc)"/><circle cx="72" cy="24" r="4.6" fill="#f0a098" stroke="none"/>
    <ellipse cx="50" cy="54" rx="25" ry="27" fill="url(#za-fc)"/>
    <path d="M30 36 Q40 30 48 38 M70 36 Q60 30 52 38" fill="none" stroke="#8a4a14" stroke-width="2.4"/>
    <ellipse cx="39" cy="46" rx="5.6" ry="4.6" fill="#fff"/><ellipse cx="61" cy="46" rx="5.6" ry="4.6" fill="#fff"/>
    <circle cx="39" cy="46" r="3.4" fill="#e8a020" stroke="none"/><circle cx="61" cy="46" r="3.4" fill="#e8a020" stroke="none"/>
    <circle cx="39" cy="46" r="1.8" fill="#14101c" stroke="none"/><circle cx="61" cy="46" r="1.8" fill="#14101c" stroke="none"/>
    <circle cx="39.8" cy="45" r=".8" fill="#fff" stroke="none"/><circle cx="61.8" cy="45" r=".8" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="68" rx="15" ry="11" fill="url(#za-mz)" stroke-width="1"/>
    <path d="M44 58 L56 58 L50 65 Z" fill="#c4605f" stroke-width="1.4"/>
    <path d="M50 65 L50 70 M50 70 Q44 76 38 72 M50 70 Q56 76 62 72" fill="none" stroke-width="1.5"/>
    <g fill="#8a4a14" stroke="none" opacity=".6"><circle cx="40" cy="67" r="1"/><circle cx="44" cy="70" r="1"/><circle cx="60" cy="67" r="1"/><circle cx="56" cy="70" r="1"/></g>
    <path d="M22 66 L36 68 M22 72 L36 71 M78 66 L64 68 M78 72 L64 71" fill="none" stroke="#fff" stroke-width=".9" stroke-opacity=".8"/>
    <path d="M30 34 Q38 26 50 27" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>`),"Old Boot":a(`q1`,`${i(`q1-lt`,`#c58650`,`#5a3416`)}${i(`q1-so`,`#6a5846`,`#2a2018`)}`,`<ellipse cx="50" cy="96" rx="42" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#q1-b)"/>
    <path d="M14 80 L94 80 Q98 94 86 94 L22 94 Q12 94 14 80 Z" fill="url(#q1-so)"/>
    <path d="M28 8 L60 8 L62 50 Q66 58 80 62 Q96 66 94 82 L16 82 Q24 76 26 62 Z" fill="url(#q1-lt)"/>
    <rect x="26" y="8" width="36" height="11" rx="3" fill="#8a5428"/>
    <path d="M46 25 L58 31 M58 25 L46 31 M46 37 L58 43 M58 37 L46 43" fill="none" stroke="#efe0b6" stroke-width="2"/>
    <rect x="30" y="36" width="12" height="15" rx="2" fill="#7b4a22" stroke-width="1"/><rect x="32" y="38" width="8" height="11" rx="1" fill="none" stroke="#e0c090" stroke-width=".9" stroke-dasharray="2 1.6"/>
    <ellipse cx="82" cy="72" rx="5.4" ry="3.6" fill="#1a1008" stroke-width="1"/>
    <path d="M30 14 Q32 22 34 30 M70 66 Q80 66 88 70 M20 76 Q28 72 34 74" fill="none" stroke="#e8c08a" stroke-opacity=".6" stroke-width="1.4"/>
    ${_(`M32 16 Q22 32 30 46 Q36 58 28 72`,`#3f9a3a`,4.4)}${_(`M36 16 Q42 30 34 42`,`#58bd4c`,3.4)}
    <path d="M66 78 l2 -5 2 5 z M74 77 l2 -6 2 6 z M58 79 l1.6 -4 1.6 4 z" fill="#f4f1e6" stroke-width="1"/>
    ${y(80,28,3.4)}${y(88,16,2.4)}${y(70,18,2)}`),Jellyfish:a(`q2`,`${i(`q2-dm`,`#ffd6f4`,`#b27dff`)}`,`${_(`M42 56 Q34 72 44 82 Q50 90 44 98`,`#e0a8ff`,5)}${_(`M58 56 Q66 72 56 82 Q50 90 56 98`,`#e0a8ff`,5)}
    ${_(`M26 56 Q20 72 28 86 Q32 94 26 98`,`#f0c4ff`,2.2)}${_(`M34 58 Q30 76 38 90`,`#f0c4ff`,2.2)}${_(`M66 58 Q70 76 62 90`,`#f0c4ff`,2.2)}${_(`M74 56 Q80 72 72 86 Q68 94 74 98`,`#f0c4ff`,2.2)}
    <path d="M14 56 Q12 10 50 8 Q88 10 86 56 Q75 64 67 56 Q58 66 50 56 Q42 66 33 56 Q25 64 14 56 Z" fill="url(#q2-dm)" fill-opacity=".9"/>
    <ellipse cx="50" cy="32" rx="26" ry="16" fill="#fff" opacity=".25" stroke="none"/>
    <g fill="#fff" stroke="none" opacity=".6"><circle cx="34" cy="30" r="3.4"/><circle cx="58" cy="22" r="3"/><circle cx="68" cy="40" r="3.6"/><circle cx="44" cy="44" r="2.6"/><circle cx="26" cy="46" r="2.2"/><circle cx="72" cy="24" r="2"/></g>
    <path d="M24 32 Q28 18 42 13" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="3"/>
    ${y(88,70,3)}${y(92,56,2)}`),Clownfish:a(`q3`,`${i(`q3-or`,`#ffb04a`,`#e8530e`)}<clipPath id="q3-cp"><path d="M16 50 Q30 24 62 26 Q88 28 94 52 Q88 76 60 76 Q30 78 16 54 Z"/></clipPath>`,`<path d="M18 52 L2 30 Q10 52 2 74 Z" fill="url(#q3-or)"/>
    <path d="M32 34 Q48 8 72 28 Z" fill="url(#q3-or)"/><path d="M46 74 Q54 92 66 76 Z" fill="url(#q3-or)"/>
    <path d="M16 50 Q30 24 62 26 Q88 28 94 52 Q88 76 60 76 Q30 78 16 54 Z" fill="url(#q3-or)"/>
    <g clip-path="url(#q3-cp)"><path d="M66 20 Q58 52 66 84 L78 84 Q70 52 78 20 Z M42 20 Q36 52 42 84 L54 84 Q48 52 54 20 Z M20 20 Q16 52 20 84 L30 84 Q26 52 30 20 Z" fill="#fff"/>
    <path d="M24 34 Q40 28 62 30 Q40 24 24 34 Z" fill="#fff" opacity=".35" stroke="none"/></g>
    <path d="M16 50 Q30 24 62 26 Q88 28 94 52 Q88 76 60 76 Q30 78 16 54 Z" fill="none"/>
    <circle cx="82" cy="44" r="6.4" fill="#fff"/><circle cx="83.6" cy="44.4" r="3.4" fill="#14101c" stroke="none"/><circle cx="84.6" cy="43" r="1.1" fill="#fff" stroke="none"/>
    <path d="M93 56 Q89 60 84 58" fill="none" stroke-width="1.4"/>
    <path d="M38 40 Q46 36 56 38" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4"/>
    ${y(94,24,3)}${y(88,12,2)}`),Frog:a(`q4`,`${r(`q4-g`,`#c4f59a`,`#5fbf4a`,`#2a7a2c`)}${r(`q4-bl`,`#fbffe0`,`#dcf4a8`,`#aedb74`)}${i(`q4-pd`,`#6fd466`,`#2a8a36`)}`,`<ellipse cx="50" cy="94" rx="46" ry="5" fill="#7fd0ff" opacity=".5" stroke="none"/>
    <ellipse cx="50" cy="90" rx="40" ry="8" fill="url(#q4-pd)"/><path d="M50 90 L66 84" fill="none" stroke="#1f6a2a" stroke-width="1.2"/>
    <ellipse cx="22" cy="78" rx="13" ry="8" fill="url(#q4-g)" transform="rotate(-25 22 78)"/><ellipse cx="78" cy="78" rx="13" ry="8" fill="url(#q4-g)" transform="rotate(25 78 78)"/>
    <ellipse cx="50" cy="68" rx="27" ry="22" fill="url(#q4-g)"/>
    <ellipse cx="50" cy="75" rx="17" ry="14" fill="url(#q4-bl)" stroke-width="1"/>
    <ellipse cx="33" cy="85" rx="6" ry="8" fill="url(#q4-g)"/><ellipse cx="67" cy="85" rx="6" ry="8" fill="url(#q4-g)"/>
    <g fill="#9be07c" stroke-width="1.2"><circle cx="27" cy="92" r="2.8"/><circle cx="33" cy="93.6" r="2.8"/><circle cx="39" cy="92" r="2.8"/><circle cx="61" cy="92" r="2.8"/><circle cx="67" cy="93.6" r="2.8"/><circle cx="73" cy="92" r="2.8"/></g>
    <ellipse cx="50" cy="50" rx="33" ry="21" fill="url(#q4-g)"/>
    <circle cx="31" cy="34" r="12" fill="url(#q4-g)"/><circle cx="69" cy="34" r="12" fill="url(#q4-g)"/>
    <circle cx="31" cy="33" r="8.6" fill="#fff" stroke-width="1.2"/><circle cx="69" cy="33" r="8.6" fill="#fff" stroke-width="1.2"/>
    <circle cx="32.4" cy="34" r="4.6" fill="#14101c" stroke="none"/><circle cx="70.4" cy="34" r="4.6" fill="#14101c" stroke="none"/>
    <circle cx="34" cy="32" r="1.5" fill="#fff" stroke="none"/><circle cx="72" cy="32" r="1.5" fill="#fff" stroke="none"/>
    <circle cx="46" cy="46" r="1.2" fill="#1f5a22" stroke="none"/><circle cx="54" cy="46" r="1.2" fill="#1f5a22" stroke="none"/>
    <path d="M24 54 Q50 74 76 54" fill="none" stroke-width="2"/>
    <circle cx="28" cy="58" r="3.6" fill="#ff8a8a" opacity=".5" stroke="none"/><circle cx="72" cy="58" r="3.6" fill="#ff8a8a" opacity=".5" stroke="none"/>
    <g fill="#2f8a30" stroke="none" opacity=".6"><circle cx="46" cy="40" r="2"/><circle cx="56" cy="38" r="1.6"/><circle cx="40" cy="62" r="2.2"/><circle cx="62" cy="64" r="2"/></g>
    <path d="M30 44 Q40 38 50 40" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.4"/>`),Crab:a(`q5`,`${r(`q5-r`,`#ff8a6a`,`#e0402c`,`#8e1a10`)}`,`${_(`M26 68 Q12 64 6 76`,`#d6361f`,4.4)}${_(`M28 74 Q14 78 10 92`,`#d6361f`,4.4)}${_(`M34 80 Q24 88 22 98`,`#d6361f`,4.4)}
    ${_(`M74 68 Q88 64 94 76`,`#d6361f`,4.4)}${_(`M72 74 Q86 78 90 92`,`#d6361f`,4.4)}${_(`M66 80 Q76 88 78 98`,`#d6361f`,4.4)}
    ${_(`M30 56 Q18 54 16 42`,`#e0402c`,6)}${_(`M70 56 Q82 54 84 42`,`#e0402c`,6)}
    <path d="M3 36 Q-1 14 13 9 Q17 20 21 11 Q33 19 25 38 Q15 46 3 36 Z" fill="url(#q5-r)"/><path d="M13 9 L15 24" fill="none" stroke="#7a140c" stroke-width="1.6"/>
    <path d="M97 36 Q101 14 87 9 Q83 20 79 11 Q67 19 75 38 Q85 46 97 36 Z" fill="url(#q5-r)"/><path d="M87 9 L85 24" fill="none" stroke="#7a140c" stroke-width="1.6"/>
    <ellipse cx="50" cy="66" rx="31" ry="22" fill="url(#q5-r)"/>
    <path d="M30 52 Q40 44 54 46" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <g fill="#ffb09a" stroke="none" opacity=".55"><circle cx="34" cy="68" r="2.4"/><circle cx="64" cy="62" r="2"/><circle cx="56" cy="76" r="2.2"/><circle cx="42" cy="58" r="1.6"/></g>
    <path d="M42 48 L40 36 M58 48 L60 36" fill="none" stroke-width="3"/>
    <circle cx="40" cy="33" r="6.4" fill="#fff"/><circle cx="60" cy="33" r="6.4" fill="#fff"/>
    <circle cx="41" cy="34" r="3" fill="#14101c" stroke="none"/><circle cx="61" cy="34" r="3" fill="#14101c" stroke="none"/><circle cx="42" cy="32.6" r="1" fill="#fff" stroke="none"/><circle cx="62" cy="32.6" r="1" fill="#fff" stroke="none"/>
    <path d="M42 66 Q50 74 58 66" fill="none" stroke-width="2"/><circle cx="36" cy="64" r="3" fill="#ff7a6a" opacity=".5" stroke="none"/><circle cx="64" cy="64" r="3" fill="#ff7a6a" opacity=".5" stroke="none"/>`),Pufferfish:a(`q6`,`${r(`q6-bd`,`#fff2a8`,`#f2c850`,`#c08a24`)}${r(`q6-bl`,`#fffaf0`,`#fbe9bd`,`#e6c98a`)}`,`${v(50,52,29,39,16,`#c9962c`)}
    <path d="M22 52 L4 38 Q10 52 4 66 Z" fill="url(#q6-bd)"/>
    <circle cx="50" cy="52" r="31" fill="url(#q6-bd)"/>
    <ellipse cx="50" cy="70" rx="22" ry="12" fill="url(#q6-bl)" stroke="none"/>
    <g fill="#b0791c" stroke="none" opacity=".5"><circle cx="34" cy="38" r="2.4"/><circle cx="46" cy="30" r="2"/><circle cx="36" cy="54" r="2.2"/><circle cx="26" cy="48" r="1.8"/><circle cx="48" cy="46" r="1.8"/></g>
    <ellipse cx="42" cy="62" rx="8" ry="5.4" fill="#f2c850" transform="rotate(20 42 62)"/>
    <circle cx="66" cy="42" r="10" fill="#fff"/><circle cx="68" cy="43" r="5.6" fill="#14101c" stroke="none"/><circle cx="70" cy="40.6" r="2" fill="#fff" stroke="none"/>
    <path d="M58 33 Q66 29 74 34" fill="none" stroke-width="1.6"/>
    <ellipse cx="80" cy="58" rx="3.8" ry="4.8" fill="#e8587a" stroke-width="1.2"/>
    <circle cx="68" cy="60" r="4" fill="#ff8a7a" opacity=".5" stroke="none"/>
    <path d="M30 40 Q38 28 52 26" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>
    ${y(92,30,3)}${y(96,18,2)}`),Blobfish:a(`q7`,`${r(`q7-bd`,`#ffd6d0`,`#f3a8a0`,`#c4746c`)}${r(`q7-n`,`#f6aaa2`,`#d9807a`,`#a65650`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#q7-b)"/>
    <ellipse cx="14" cy="64" rx="8" ry="5" fill="#e69890" transform="rotate(30 14 64)"/><ellipse cx="86" cy="64" rx="8" ry="5" fill="#e69890" transform="rotate(-30 86 64)"/>
    <path d="M12 82 Q2 48 30 32 Q50 22 70 32 Q98 48 88 82 Q72 96 50 94 Q26 96 12 82 Z" fill="url(#q7-bd)"/>
    <path d="M24 44 Q32 34 46 31" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3.4"/>
    <ellipse cx="30" cy="72" rx="10" ry="7" fill="#d98a82" opacity=".5" stroke="none"/><ellipse cx="70" cy="72" rx="10" ry="7" fill="#d98a82" opacity=".5" stroke="none"/>
    <path d="M40 46 Q34 68 50 74 Q66 68 60 46 Q50 38 40 46 Z" fill="url(#q7-n)"/>
    <ellipse cx="46" cy="52" rx="2.2" ry="3.2" fill="#8e403a" stroke="none"/><ellipse cx="54" cy="52" rx="2.2" ry="3.2" fill="#8e403a" stroke="none"/>
    <circle cx="28" cy="54" r="3.4" fill="#2a1418" stroke="none"/><circle cx="72" cy="54" r="3.4" fill="#2a1418" stroke="none"/>
    <circle cx="29" cy="53" r="1.1" fill="#fff" stroke="none"/><circle cx="73" cy="53" r="1.1" fill="#fff" stroke="none"/>
    <path d="M22 56 L35 50 M78 56 L65 50" fill="none" stroke-width="2"/>
    <path d="M22 82 Q50 68 78 82 Q50 77 22 82 Z" fill="#b8504c"/>
    <path d="M34 70 Q30 80 38 86 M66 70 Q70 80 62 86" fill="none" stroke="#c4746c" stroke-width="1.4"/>
    <path d="M32 88 Q31 94 34 95 Q37 94 36 89 Z" fill="#cdeeff" opacity=".8" stroke-width="1"/>`),Octopus:a(`q8`,`${r(`q8-h`,`#e0a8ff`,`#a35ad6`,`#5a2a96`)}`,`${_(`M28 52 Q10 54 8 70 Q8 82 20 82`,`#a35ad6`,7)}${_(`M34 58 Q18 72 24 86 Q27 95 37 93`,`#a35ad6`,7)}${_(`M41 60 Q32 76 40 88 Q45 97 54 93`,`#a35ad6`,7)}
    ${_(`M72 52 Q90 54 92 70 Q92 82 80 82`,`#a35ad6`,7)}${_(`M66 58 Q82 72 76 86 Q73 95 63 93`,`#a35ad6`,7)}${_(`M59 60 Q68 76 60 88 Q55 97 46 93`,`#a35ad6`,7)}
    <g fill="none" stroke="#ffd6f4" stroke-width="2.2" stroke-dasharray="0.1 5.4" stroke-linecap="round" stroke-opacity=".95"><path d="M28 52 Q10 54 8 70 Q8 82 20 82"/><path d="M34 58 Q18 72 24 86 Q27 95 37 93"/><path d="M41 60 Q32 76 40 88 Q45 97 54 93"/><path d="M72 52 Q90 54 92 70 Q92 82 80 82"/><path d="M66 58 Q82 72 76 86 Q73 95 63 93"/><path d="M59 60 Q68 76 60 88 Q55 97 46 93"/></g>
    <ellipse cx="50" cy="36" rx="30" ry="28" fill="url(#q8-h)"/>
    <g fill="#d89cf5" stroke="none" opacity=".7"><circle cx="34" cy="22" r="2.4"/><circle cx="48" cy="16" r="2"/><circle cx="62" cy="22" r="2.4"/><circle cx="72" cy="34" r="1.8"/><circle cx="28" cy="34" r="1.8"/></g>
    <path d="M28 28 Q34 14 50 11" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>
    <circle cx="39" cy="42" r="9" fill="#fff"/><circle cx="61" cy="42" r="9" fill="#fff"/>
    <circle cx="40.6" cy="43" r="4.8" fill="#14101c" stroke="none"/><circle cx="62.6" cy="43" r="4.8" fill="#14101c" stroke="none"/><circle cx="42" cy="41" r="1.6" fill="#fff" stroke="none"/><circle cx="64" cy="41" r="1.6" fill="#fff" stroke="none"/>
    <path d="M44 56 Q50 61 56 56" fill="none" stroke-width="1.8"/><circle cx="30" cy="52" r="3.4" fill="#ff8ab8" opacity=".5" stroke="none"/><circle cx="70" cy="52" r="3.4" fill="#ff8ab8" opacity=".5" stroke="none"/>`),Narwhal:a(`q9`,`${i(`q9-bd`,`#a6bfdc`,`#4a6890`)}${i(`q9-tk`,`#fffbe8`,`#d9c68a`)}`,`<path d="M36 50 L2 36 L4 43 L36 58 Z" fill="url(#q9-tk)"/>
    <path d="M10 39 L12 46 M16 41.4 L18 48.4 M22 44 L24 51 M28 46.4 L30 53.4" fill="none" stroke="#b09a5a" stroke-width="1.3"/>
    <path d="M34 54 Q34 30 62 30 Q82 30 90 44 L99 32 Q99 48 94 54 Q99 62 99 74 L90 66 Q82 78 60 78 Q34 78 34 54 Z" fill="url(#q9-bd)"/>
    <path d="M38 64 Q62 74 90 62 Q84 76 60 78 Q40 78 38 64 Z" fill="#eaf3fb" stroke="none"/>
    <g fill="#34507a" stroke="none" opacity=".45"><ellipse cx="58" cy="40" rx="5" ry="3"/><ellipse cx="72" cy="46" rx="4" ry="2.6"/><ellipse cx="50" cy="48" rx="3" ry="2"/><ellipse cx="80" cy="56" rx="3" ry="2"/></g>
    <path d="M54 68 Q52 86 64 88 Q64 76 68 68 Z" fill="url(#q9-bd)"/>
    <circle cx="46" cy="49" r="3.8" fill="#14101c" stroke="none"/><circle cx="47.2" cy="47.8" r="1.2" fill="#fff" stroke="none"/>
    <path d="M36 60 Q44 66 54 62" fill="none" stroke-width="1.5"/><circle cx="48" cy="58" r="3.2" fill="#ff9aa8" opacity=".5" stroke="none"/>
    <path d="M42 36 Q52 30 66 32" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.6"/>
    ${y(14,70,3.4)}${y(22,82,2.4)}${y(8,58,2)}`),Dolphin:a(`qa`,`${i(`qa-bd`,`#8ec4ee`,`#2f6aa8`)}`,`<path d="M4 56 Q8 48 20 46 Q30 28 56 26 Q76 24 88 36 L98 24 Q97 38 92 46 Q98 50 99 62 Q90 56 84 56 Q72 76 44 76 Q24 74 18 62 Q10 62 4 56 Z" fill="url(#qa-bd)"/>
    <path d="M10 58 Q24 70 46 70 Q70 70 84 56 Q74 76 44 76 Q24 74 18 62 Z" fill="#f4f9ff" stroke="none"/>
    <path d="M50 28 Q58 8 72 16 Q66 22 66 30 Z" fill="url(#qa-bd)"/>
    <path d="M34 62 Q32 80 44 84 Q44 72 46 64 Z" fill="url(#qa-bd)"/>
    <circle cx="25" cy="51" r="3" fill="#14101c" stroke="none"/><circle cx="26" cy="50" r="1" fill="#fff" stroke="none"/>
    <path d="M5 58 Q16 63 28 58" fill="none" stroke-width="1.5"/>
    <path d="M28 38 Q40 30 56 30" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>
    <path d="M0 92 Q12 84 24 92 T48 92 T72 92 T96 92 L100 100 L0 100 Z" fill="#4aa6ec" opacity=".85"/>
    <path d="M6 94 Q14 90 22 94 M52 96 Q60 92 68 96" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6"/>
    ${y(14,80,2.6)}${y(62,84,2.2)}${y(80,78,3)}`),"Baby Shark":a(`qb`,`${i(`qb-bd`,`#9fd0f5`,`#3a7cc0`)}`,`<path d="M16 54 L2 36 Q8 54 2 72 Z" fill="url(#qb-bd)"/>
    <path d="M44 38 L54 12 L68 40 Z" fill="url(#qb-bd)"/>
    <path d="M12 54 Q28 30 60 34 Q86 38 92 56 Q74 80 40 76 Q18 74 12 54 Z" fill="url(#qb-bd)"/>
    <path d="M18 62 Q40 80 86 62 Q74 80 40 78 Q22 76 18 62 Z" fill="#f4f9ff" stroke="none"/>
    <path d="M46 70 Q42 88 56 90 Q54 78 58 72 Z" fill="url(#qb-bd)"/>
    <path d="M52 52 L56 62 M58 50 L62 60" fill="none" stroke-width="1.2" stroke-opacity=".6"/>
    <circle cx="72" cy="50" r="9" fill="#fff"/><circle cx="74" cy="51" r="5" fill="#14101c" stroke="none"/><circle cx="75.6" cy="48.8" r="1.8" fill="#fff" stroke="none"/>
    <path d="M64 41 Q72 37 80 42" fill="none" stroke-width="1.6"/>
    <circle cx="62" cy="62" r="4" fill="#ff8a9a" opacity=".55" stroke="none"/>
    <path d="M62 66 Q76 76 90 62" fill="none" stroke-width="1.6"/><path d="M68 70 l2.4 5 2.4 -5 z M78 70 l2.4 4.4 2.4 -5 z" fill="#fff" stroke-width="1"/>
    <path d="M26 44 Q40 34 56 36" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>
    ${y(88,24,3)}${y(94,12,2)}`),Megalodon:a(`qc`,`${r(`qc-hd`,`#9db0c4`,`#566a82`,`#222d3e`)}${r(`qc-mo`,`#d04a5a`,`#7a1020`,`#2a0510`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3" fill="#000" opacity=".3" stroke="none" filter="url(#qc-b)"/>
    <path d="M44 10 Q50 -2 58 10 Z" fill="#566a82"/>
    <ellipse cx="50" cy="52" rx="46" ry="42" fill="url(#qc-hd)"/>
    <path d="M10 40 Q12 24 24 18 M90 40 Q88 24 76 18" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="3"/>
    <path d="M6 54 L14 56 M7 60 L15 61 M94 54 L86 56 M93 60 L85 61" fill="none" stroke="#1c2432" stroke-width="2"/>
    <path d="M30 26 L38 30 M62 30 L70 26" fill="none" stroke-width="3"/>
    <circle cx="24" cy="32" r="5.6" fill="#0b0e14"/><circle cx="76" cy="32" r="5.6" fill="#0b0e14"/>
    <circle cx="22.4" cy="30.4" r="1.8" fill="#fff" stroke="none"/><circle cx="74.4" cy="30.4" r="1.8" fill="#fff" stroke="none"/>
    <ellipse cx="50" cy="60" rx="32" ry="26" fill="url(#qc-mo)"/>
    <ellipse cx="50" cy="66" rx="15" ry="9" fill="#e86a7a" opacity=".85" stroke="none"/>
    <path d="M20 54 L25 66 L30 54 L35 66 L40 54 L45 66 L50 54 L55 66 L60 54 L65 66 L70 54 L75 66 L80 54" fill="none"/>
    <path d="M22 44 Q50 34 78 44 L76 50 L72 44 L68 52 L64 44 L60 52 L56 44 L52 53 L48 44 L44 52 L40 44 L36 52 L32 44 L28 52 L24 44 Z" fill="#fffbe8" stroke-width="1.1"/>
    <path d="M24 78 L28 70 L32 80 L36 71 L40 82 L44 72 L48 83 L52 72 L56 82 L60 71 L64 80 L68 70 L72 80 L76 72 Z" fill="#fffbe8" stroke-width="1.1"/>
    ${y(94,78,2.6)}`),"Lil Bot":S(`b1`,`${i(`b1-m`,`#e6eef7`,`#8aa0bf`)}${i(`b1-h`,`#f4f8fd`,`#9db3d0`)}`,`<ellipse cx="50" cy="95" rx="22" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b1-b)"/>
    <g transform="translate(50 58) scale(.82) translate(-50 -58)">
    <path d="M50 26 L50 14" fill="none" stroke-width="2.4"/>${x(50,12,4.4,`#ff5a5a`)}
    <rect x="34" y="64" width="32" height="28" rx="7" fill="url(#b1-m)"/>
    <rect x="22" y="68" width="10" height="18" rx="5" fill="url(#b1-m)"/><rect x="68" y="68" width="10" height="18" rx="5" fill="url(#b1-m)"/>
    <circle cx="50" cy="78" r="5" fill="#ffd23a"/><circle cx="48.4" cy="76.4" r="1.6" fill="#fff" stroke="none"/>
    <path d="M40 86 L60 86" fill="none" stroke="#6e86a8" stroke-width="2"/>
    <rect x="28" y="26" width="44" height="38" rx="15" fill="url(#b1-h)"/>
    <circle cx="26" cy="45" r="3.6" fill="#8aa0bf"/><circle cx="74" cy="45" r="3.6" fill="#8aa0bf"/>
    <rect x="33" y="31" width="34" height="26" rx="10" fill="#0f2438"/>
    ${x(42,43,5.6,`#5ff1ff`)}${x(58,43,5.6,`#5ff1ff`)}
    <path d="M45 52 Q50 55 55 52" fill="none" stroke="#5ff1ff" stroke-width="1.8"/>
    <path d="M31 32 Q38 28 46 28" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2"/></g>`),"Lovely Bot":S(`b2`,`${i(`b2-m`,`#ffc2d8`,`#e0608f`)}${i(`b2-h`,`#ffe0ec`,`#f08cb2`)}`,`<ellipse cx="50" cy="96" rx="26" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b2-b)"/>
    <path d="M40 24 Q36 14 29 12 M60 24 Q64 14 71 12" fill="none" stroke-width="2.4"/>
    ${c(27,11,.8,`#ff4d86`)}${c(73,11,.8,`#ff4d86`)}
    <path d="M36 66 L64 66 L69 94 L31 94 Z" fill="url(#b2-m)"/>
    <rect x="20" y="68" width="11" height="20" rx="5.5" fill="url(#b2-m)"/><rect x="69" y="68" width="11" height="20" rx="5.5" fill="url(#b2-m)"/>
    ${c(50,79,1.2,`#ffffff`)}${c(50,80,.8,`#ff4d86`)}
    <rect x="26" y="24" width="48" height="40" rx="17" fill="url(#b2-h)"/>
    <rect x="31" y="30" width="38" height="27" rx="11" fill="#3a1030"/>
    ${c(41,41,.62,`#ff7aa8`)}${c(59,41,.62,`#ff7aa8`)}
    <circle cx="35" cy="51" r="3" fill="#ff7aa8" opacity=".6" stroke="none"/><circle cx="65" cy="51" r="3" fill="#ff7aa8" opacity=".6" stroke="none"/>
    <path d="M45 51 Q50 56 55 51" fill="none" stroke="#ff9cc0" stroke-width="1.8"/>
    <path d="M30 31 Q38 27 46 27" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>`),"Angry Bot":S(`b3`,`${i(`b3-m`,`#ff7a5a`,`#a01f10`)}${i(`b3-h`,`#ff8a6a`,`#b52414`)}`,`<ellipse cx="50" cy="96" rx="30" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b3-b)"/>
    <g fill="#fff" stroke="none" opacity=".75"><circle cx="14" cy="16" r="5"/><circle cx="7" cy="8" r="3.6"/><circle cx="86" cy="16" r="5"/><circle cx="93" cy="8" r="3.6"/></g>
    <path d="M28 66 L72 66 L72 94 L28 94 Z" fill="url(#b3-m)"/>
    <rect x="12" y="66" width="16" height="22" rx="4" fill="url(#b3-m)"/><rect x="72" y="66" width="16" height="22" rx="4" fill="url(#b3-m)"/>
    <rect x="10" y="84" width="20" height="12" rx="5" fill="#7a1408"/><rect x="70" y="84" width="20" height="12" rx="5" fill="#7a1408"/>
    <path d="M36 74 L64 74 M36 80 L64 80 M36 86 L64 86" fill="none" stroke="#5a0e06" stroke-width="2.4"/>
    <path d="M30 26 L20 8 L38 22 Z M70 26 L80 8 L62 22 Z" fill="#7a1408"/>
    <rect x="24" y="22" width="52" height="42" rx="8" fill="url(#b3-h)"/>
    <rect x="29" y="31" width="42" height="15" rx="3" fill="#1a0a0a"/>
    <path d="M31 36 L47 42 L47 45 L31 42 Z" fill="#ffcf3a" stroke="none"/><path d="M69 36 L53 42 L53 45 L69 42 Z" fill="#ffcf3a" stroke="none"/>
    <path d="M30 30 L47 36 M70 30 L53 36" fill="none" stroke="#3a0a04" stroke-width="3"/>
    <rect x="32" y="50" width="36" height="10" rx="2" fill="#1a0a0a"/>
    <path d="M34 50 L37 58 L40 50 L43 58 L46 50 L49 58 L52 50 L55 58 L58 50 L61 58 L64 50 L66 56" fill="#fff" stroke-width="1"/>
    <circle cx="28" cy="26" r="1.8" fill="#5a0e06" stroke="none"/><circle cx="72" cy="26" r="1.8" fill="#5a0e06" stroke="none"/>
    <path d="M28 24 Q36 21 46 22" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>`),"Happy Bot":S(`b4`,`${i(`b4-m`,`#fff08a`,`#e0a000`)}${i(`b4-h`,`#fff6a8`,`#f2b600`)}`,`<ellipse cx="50" cy="96" rx="26" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b4-b)"/>
    <path d="M50 22 L46 19 L54 16 L46 13 L54 10" fill="none" stroke-width="2"/>${x(54,8,3.6,`#ff8a2a`)}
    <path d="M30 76 Q14 74 12 58" fill="none" stroke="${e}" stroke-width="8"/><path d="M30 76 Q14 74 12 58" fill="none" stroke="#f2c230" stroke-width="5"/>
    <circle cx="12" cy="55" r="6" fill="url(#b4-m)"/>
    <rect x="68" y="68" width="11" height="20" rx="5.5" fill="url(#b4-m)"/>
    <rect x="30" y="66" width="40" height="28" rx="11" fill="url(#b4-m)"/>
    <circle cx="50" cy="80" r="7" fill="#ff9a2a"/><path d="M45.6 79 Q50 86 54.4 79" fill="none" stroke="#fff" stroke-width="1.6"/>
    <circle cx="47.2" cy="76.6" r="1" fill="#fff" stroke="none"/><circle cx="52.8" cy="76.6" r="1" fill="#fff" stroke="none"/>
    <rect x="24" y="22" width="52" height="42" rx="21" fill="url(#b4-h)"/>
    <rect x="30" y="29" width="40" height="28" rx="13" fill="#3b2a08"/>
    <path d="M35 44 Q41 35 47 44 M53 44 Q59 35 65 44" fill="none" stroke="#ffe066" stroke-width="3.4"/>
    <path d="M38 48 Q50 59 62 48 Q50 53 38 48 Z" fill="#ffe066" stroke="none"/>
    <circle cx="35" cy="51" r="2.6" fill="#ff9a2a" opacity=".8" stroke="none"/><circle cx="65" cy="51" r="2.6" fill="#ff9a2a" opacity=".8" stroke="none"/>
    <path d="M30 30 Q40 26 50 26" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>`),Watson:S(`b5`,`${i(`b5-m`,`#f4f8ff`,`#9fb0cc`)}${i(`b5-h`,`#ffffff`,`#b7c4dc`)}${r(`b5-e`,`#e6f6ff`,`#3ba0ff`,`#0b4ab0`)}`,`<ellipse cx="50" cy="96" rx="28" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b5-b)"/>
    <path d="M24 96 L29 68 Q50 60 71 68 L76 96 Z" fill="url(#b5-m)"/>
    <path d="M50 76 L38 70 L38 82 Z M50 76 L62 70 L62 82 Z" fill="#2a6fe0" stroke-width="1.4"/><circle cx="50" cy="76" r="3.4" fill="#4a8cf0"/>
    <path d="M34 90 L66 90" fill="none" stroke="#2a6fe0" stroke-width="2.4"/>
    <rect x="45" y="62" width="10" height="8" rx="2" fill="#9fb0cc"/>
    <rect x="25" y="18" width="50" height="46" rx="23" fill="url(#b5-h)"/>
    <ellipse cx="24" cy="42" rx="4.6" ry="9" fill="#b7c4dc"/><ellipse cx="76" cy="42" rx="4.6" ry="9" fill="#b7c4dc"/>
    <circle cx="24" cy="42" r="1.8" fill="#4aa8ff" stroke="none"/><circle cx="76" cy="42" r="1.8" fill="#4aa8ff" stroke="none"/>
    <circle cx="50" cy="42" r="19" fill="#0b1d3a"/>
    <circle cx="50" cy="42" r="14.4" fill="none" stroke="#3aa0ff" stroke-width="2"/><circle cx="50" cy="42" r="10" fill="none" stroke="#7fd0ff" stroke-width="1.6"/>
    <circle cx="50" cy="42" r="6" fill="url(#b5-e)" stroke="none"/><circle cx="48.4" cy="40.2" r="1.8" fill="#fff" stroke="none"/>
    <circle cx="50" cy="27.6" r="1.8" fill="#7fd0ff" stroke="none"/><circle cx="64.4" cy="42" r="1.8" fill="#7fd0ff" stroke="none"/><circle cx="39.8" cy="52.2" r="1.8" fill="#7fd0ff" stroke="none"/>
    <rect x="42" y="12" width="16" height="6" rx="3" fill="#3a8cf0"/>
    <path d="M32 26 Q40 21 50 21" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.2"/>`),"Buddy Bot":S(`b6`,`${i(`b6-m`,`#9be89a`,`#2f9a3a`)}${i(`b6-h`,`#b6f4ac`,`#38a845`)}`,`<ellipse cx="50" cy="96" rx="28" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b6-b)"/>
    <path d="M50 22 L50 11" fill="none" stroke-width="2.4"/>${x(50,9.6,4.6,`#ffa22a`)}
    <path d="M30 74 Q14 74 11 60" fill="none" stroke="${e}" stroke-width="8"/><path d="M30 74 Q14 74 11 60" fill="none" stroke="#58c860" stroke-width="5"/>
    <path d="M70 74 Q86 74 89 60" fill="none" stroke="${e}" stroke-width="8"/><path d="M70 74 Q86 74 89 60" fill="none" stroke="#58c860" stroke-width="5"/>
    <circle cx="11" cy="57" r="6" fill="url(#b6-m)"/><circle cx="89" cy="57" r="6" fill="url(#b6-m)"/>
    <rect x="28" y="64" width="44" height="30" rx="13" fill="url(#b6-m)"/>
    <rect x="38" y="72" width="24" height="16" rx="8" fill="#d6fbd0" stroke-width="1.2"/>${c(50,79,.9,`#ff5a7a`)}
    <rect x="24" y="22" width="52" height="42" rx="17" fill="url(#b6-h)"/>
    <rect x="30" y="28" width="40" height="30" rx="12" fill="#0e2a1a"/>
    <circle cx="41" cy="40" r="6.4" fill="#fff" stroke-width="1"/><circle cx="59" cy="40" r="6.4" fill="#fff" stroke-width="1"/>
    <circle cx="42" cy="41" r="3.2" fill="#14101c" stroke="none"/><circle cx="60" cy="41" r="3.2" fill="#14101c" stroke="none"/>
    <circle cx="43" cy="39.6" r="1.1" fill="#fff" stroke="none"/><circle cx="61" cy="39.6" r="1.1" fill="#fff" stroke="none"/>
    <path d="M38 49 Q50 61 62 49 Q50 53 38 49 Z" fill="#fff" stroke-width="1.2"/>
    <path d="M30 30 Q40 25 50 25" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>`),"Brainy Bot":S(`b7`,`${i(`b7-m`,`#c8a8ff`,`#6a3fc4`)}${r(`b7-br`,`#ffd0e0`,`#ff7aa6`,`#c23a78`)}${i(`b7-gl`,`#e9fbff`,`#bfeaff`)}`,`<ellipse cx="50" cy="96" rx="26" ry="3.4" fill="#000" opacity=".25" stroke="none" filter="url(#b7-b)"/>
    <rect x="32" y="70" width="36" height="24" rx="7" fill="url(#b7-m)"/>
    <rect x="20" y="72" width="11" height="17" rx="5.5" fill="url(#b7-m)"/><rect x="69" y="72" width="11" height="17" rx="5.5" fill="url(#b7-m)"/>
    <path d="M40 82 L48 82 L50 78 L52 86 L54 82 L60 82" fill="none" stroke="#5ff1ff" stroke-width="1.8"/>
    <path d="M24 62 Q22 14 50 12 Q78 14 76 62 Z" fill="url(#b7-gl)" fill-opacity=".72"/>
    <path d="M31 50 Q26 36 37 33 Q39 24 50 28 Q61 22 65 33 Q75 37 69 50 Q64 58 50 55 Q38 58 31 50 Z" fill="url(#b7-br)" stroke-width="1.3"/>
    <path d="M40 36 Q46 40 42 46 M50 30 Q54 38 50 46 Q50 50 52 54 M60 36 Q56 42 62 47 M36 46 Q42 48 44 52" fill="none" stroke="#a02a64" stroke-width="1.2" stroke-opacity=".8"/>
    <g fill="#5ff1ff" stroke="none"><circle cx="40" cy="36" r="1.4"/><circle cx="59" cy="32" r="1.4"/><circle cx="48" cy="50" r="1.4"/><circle cx="66" cy="44" r="1.4"/></g>
    <path d="M32 24 Q40 16 50 15" fill="none" stroke="#fff" stroke-width="3" stroke-opacity=".9"/>
    <rect x="20" y="58" width="60" height="13" rx="5" fill="url(#b7-m)"/>
    ${x(40,64.5,3.2,`#5ff1ff`)}${x(60,64.5,3.2,`#5ff1ff`)}
    <path d="M45 67 Q50 70 55 67" fill="none" stroke="#5ff1ff" stroke-width="1.4"/>
    <path d="M50 12 L50 5" fill="none" stroke-width="2"/>${x(50,4,3.2,`#ffd23a`)}`),"Mega Bot":S(`b8`,`${i(`b8-m`,`#fff0a0`,`#c88a00`)}${i(`b8-d`,`#e8c64a`,`#7a5200`)}${i(`b8-s`,`#e9eef5`,`#7c8aa2`)}`,`<ellipse cx="50" cy="97" rx="42" ry="3.4" fill="#000" opacity=".3" stroke="none" filter="url(#b8-b)"/>
    <path d="M14 100 Q16 68 50 64 Q84 68 86 100 Z" fill="url(#b8-m)"/>
    <path d="M30 100 L32 84 M70 100 L68 84 M50 92 L50 100" fill="none" stroke="#7a5200" stroke-width="2"/>
    <ellipse cx="14" cy="70" rx="13" ry="14" fill="url(#b8-d)"/><ellipse cx="86" cy="70" rx="13" ry="14" fill="url(#b8-d)"/>
    <rect x="7" y="52" width="6" height="16" rx="2" fill="url(#b8-s)"/><rect x="87" y="52" width="6" height="16" rx="2" fill="url(#b8-s)"/>
    <circle cx="14" cy="72" r="4" fill="#7a5200" stroke-width="1"/><circle cx="86" cy="72" r="4" fill="#7a5200" stroke-width="1"/>
    <circle cx="50" cy="84" r="11" fill="#0a2a34"/><circle cx="50" cy="84" r="8" fill="none" stroke="#5ff1ff" stroke-width="2"/>${x(50,84,5,`#7ff6ff`)}
    <rect x="42" y="60" width="16" height="8" rx="2" fill="url(#b8-s)"/>
    <path d="M32 20 L20 2 L40 14 Z M68 20 L80 2 L60 14 Z" fill="url(#b8-d)"/>
    <path d="M28 56 L28 26 Q28 14 40 14 L60 14 Q72 14 72 26 L72 56 Q72 63 62 63 L38 63 Q28 63 28 56 Z" fill="url(#b8-m)"/>
    <path d="M50 14 L50 24" fill="none" stroke="#7a5200" stroke-width="2.4"/>
    <rect x="32" y="29" width="36" height="14" rx="5" fill="#06232e"/>
    <rect x="35" y="33" width="30" height="6" rx="3" fill="#5ff1ff" stroke="none"/><rect x="38" y="34" width="24" height="2.2" rx="1.1" fill="#e6ffff" stroke="none"/>
    <circle cx="50" cy="36" r="9" fill="#5ff1ff" opacity=".25" stroke="none" filter="url(#b8-b)"/>
    <rect x="37" y="48" width="26" height="11" rx="3" fill="url(#b8-s)"/>
    <path d="M42 48 L42 59 M47 48 L47 59 M53 48 L53 59 M58 48 L58 59" fill="none" stroke="#5a6680" stroke-width="1.6"/>
    <circle cx="31" cy="50" r="2" fill="#7a5200" stroke="none"/><circle cx="69" cy="50" r="2" fill="#7a5200" stroke="none"/>
    <path d="M31 22 Q38 17 48 17" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.4"/>`),Earth:a(`er`,`${r(`er-oc`,`#7fd0ff`,`#2a82d8`,`#0d3d8a`)}${r(`er-ln`,`#8fe070`,`#3f9a3a`,`#256a28`)}<clipPath id="er-cp"><circle cx="50" cy="50" r="40"/></clipPath>
    <radialGradient id="er-sh" cx=".3" cy=".28" r=".95"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient>`,`<circle cx="50" cy="50" r="46" fill="#7fd0ff" opacity=".35" stroke="none" filter="url(#er-b)"/>
    <circle cx="50" cy="50" r="40" fill="url(#er-oc)"/>
    <g clip-path="url(#er-cp)" stroke-width="1.2">
      <path d="M22 22 Q34 14 46 22 Q50 30 42 36 Q46 44 40 50 Q42 60 34 66 Q26 58 28 48 Q18 42 20 32 Z" fill="url(#er-ln)"/>
      <path d="M58 24 Q72 18 82 28 Q86 40 76 46 Q74 58 66 70 Q58 62 60 50 Q52 42 54 32 Z" fill="url(#er-ln)"/>
      <path d="M48 78 Q60 74 70 80 Q62 90 50 88 Z" fill="#f4f8ff"/>
      <path d="M30 12 Q46 8 62 12 Q50 18 30 12 Z" fill="#f4f8ff"/>
      <g fill="#fff" stroke="none" opacity=".8"><ellipse cx="34" cy="30" rx="10" ry="2.8"/><ellipse cx="62" cy="58" rx="12" ry="3"/><ellipse cx="44" cy="68" rx="9" ry="2.6"/><ellipse cx="72" cy="30" rx="8" ry="2.4"/></g>
      <circle cx="50" cy="50" r="40" fill="url(#er-sh)" stroke="none"/>
    </g>
    <circle cx="50" cy="50" r="40" fill="none"/>
    <ellipse cx="34" cy="30" rx="9" ry="5.5" fill="#fff" opacity=".35" stroke="none" transform="rotate(-35 34 30)"/>`),Meteor:a(`mt`,`${r(`mt-rk`,`#b0a49a`,`#6e625a`,`#2f2823`)}${i(`mt-fl`,`#ffe66a`,`#ff5a1a`)}`,`<path d="M40 56 Q52 30 94 4 Q72 34 80 56 Z" fill="url(#mt-fl)" opacity=".95"/>
    <path d="M44 58 Q60 40 86 22 Q70 44 74 58 Z" fill="#fff3a0" stroke="none" opacity=".85"/>
    <path d="M30 70 Q18 78 8 96 Q28 84 38 78 Z M50 78 Q50 88 44 98 Q58 90 60 80 Z" fill="#ff7a28" opacity=".9"/>
    <path d="M24 56 L34 44 L50 42 L62 52 L66 68 L56 82 L38 86 L24 78 L18 66 Z" fill="url(#mt-rk)"/>
    <ellipse cx="40" cy="58" rx="8" ry="5.4" fill="#4a403a" stroke-width="1"/><ellipse cx="38" cy="57" rx="5.4" ry="3" fill="#2f2823" stroke="none"/>
    <ellipse cx="54" cy="70" rx="5.4" ry="3.8" fill="#4a403a" stroke-width="1"/><ellipse cx="53" cy="69.4" rx="3.4" ry="2" fill="#2f2823" stroke="none"/>
    <ellipse cx="29" cy="72" rx="3.4" ry="2.4" fill="#4a403a" stroke-width="1"/>
    <path d="M26 54 L34 46 L48 44" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
    <g fill="#ffd23a" stroke="none"><circle cx="76" cy="14" r="1.6"/><circle cx="88" cy="30" r="1.4"/><circle cx="64" cy="20" r="1.2"/><circle cx="92" cy="16" r="1.2"/></g>`),Stars:a(`sr`,`${i(`sr-go`,`#fff59d`,`#ffb300`)}${i(`sr-go2`,`#fff9c4`,`#ffca28`)}`,`<path d="${d(50,52,36,16)}" fill="url(#sr-go)" stroke-width="2"/>
    <path d="${d(50,52,36,16)}" fill="none" stroke="#fff" stroke-opacity=".0"/>
    <path d="M50 24 L45 44 L36 46 Z" fill="#fff" opacity=".4" stroke="none"/>
    <path d="${d(18,24,13,5.6)}" fill="url(#sr-go2)"/>
    <path d="${d(83,22,15,6.6)}" fill="url(#sr-go2)"/>
    <path d="${d(84,80,11,4.8)}" fill="url(#sr-go2)"/>
    <path d="${d(16,80,9,4)}" fill="url(#sr-go2)"/>
    ${f(36,12,4)}${f(66,90,4)}${f(92,52,3.4)}${f(8,52,3.4)}`),Alien:a(`ln`,`${r(`ln-hd`,`#b9f08a`,`#6cc04a`,`#2f7a2a`)}${r(`ln-ey`,`#4a5a7a`,`#14101c`,`#000000`)}${i(`ln-bd`,`#d6dbe8`,`#8e98ad`)}`,`<path d="M24 100 Q28 80 50 78 Q72 80 76 100 Z" fill="url(#ln-bd)"/>
    <path d="M44 74 L44 84 Q50 88 56 84 L56 74 Z" fill="url(#ln-hd)"/>
    <path d="M20 40 Q20 8 50 8 Q80 8 80 40 Q80 60 60 80 Q50 88 40 80 Q20 60 20 40 Z" fill="url(#ln-hd)"/>
    <path d="M26 32 Q30 18 44 14" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <path d="M24 38 Q38 32 46 54 Q34 62 24 38 Z" fill="url(#ln-ey)"/><path d="M76 38 Q62 32 54 54 Q66 62 76 38 Z" fill="url(#ln-ey)"/>
    <ellipse cx="33" cy="42" rx="3.4" ry="2" fill="#fff" stroke="none" transform="rotate(-25 33 42)"/><ellipse cx="67" cy="42" rx="3.4" ry="2" fill="#fff" stroke="none" transform="rotate(25 67 42)"/>
    <circle cx="47.6" cy="62" r=".9" fill="#2f7a2a" stroke="none"/><circle cx="52.4" cy="62" r=".9" fill="#2f7a2a" stroke="none"/>
    <path d="M44 69 Q50 72 56 69" fill="none" stroke-width="1.4"/>`),Planet:a(`pl`,`${r(`pl-sp`,`#ffc7a0`,`#e0674a`,`#7a2a5e`)}${i(`pl-rg`,`#ffe7b0`,`#c8964a`)}<clipPath id="pl-cp"><circle cx="50" cy="50" r="27"/></clipPath>
    <radialGradient id="pl-sh" cx=".3" cy=".28" r=".95"><stop offset=".4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient>`,`<g transform="rotate(-20 50 50)"><path d="M3 50 A47 13 0 0 1 97 50" fill="none" stroke="${e}" stroke-width="9"/><path d="M3 50 A47 13 0 0 1 97 50" fill="none" stroke="url(#pl-rg)" stroke-width="6"/></g>
    <circle cx="50" cy="50" r="27" fill="url(#pl-sp)"/>
    <g clip-path="url(#pl-cp)" fill="none" stroke-width="3.4" stroke-opacity=".5"><path d="M20 38 Q50 30 80 40" stroke="#fff2d0"/><path d="M20 50 Q50 44 80 54" stroke="#8e2f6a"/><path d="M20 62 Q50 56 80 66" stroke="#fff2d0"/><circle cx="50" cy="50" r="27" fill="url(#pl-sh)" stroke="none"/></g>
    <ellipse cx="40" cy="38" rx="7" ry="4" fill="#fff" opacity=".35" stroke="none" transform="rotate(-35 40 38)"/>
    <g transform="rotate(-20 50 50)"><path d="M3 50 A47 13 0 0 0 97 50" fill="none" stroke="${e}" stroke-width="9"/><path d="M3 50 A47 13 0 0 0 97 50" fill="none" stroke="url(#pl-rg)" stroke-width="6"/><path d="M12 56 A42 11 0 0 0 88 56" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.4"/></g>`),UFO:a(`uf`,`${i(`uf-ds`,`#e8edf7`,`#6f7a94`)}${i(`uf-dm`,`#d9f2ff`,`#8ec9ee`)}${r(`ln-hd`,`#b9f08a`,`#6cc04a`,`#2f7a2a`)}
    <linearGradient id="uf-bm2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff59d" stop-opacity=".75"/><stop offset="1" stop-color="#fff59d" stop-opacity="0"/></linearGradient>`,`<path d="M38 64 L62 64 L88 98 L12 98 Z" fill="url(#uf-bm2)" stroke="none"/>
    <path d="M30 52 Q30 20 50 20 Q70 20 70 52 Z" fill="url(#uf-dm)" fill-opacity=".85"/>
    <path d="M42 52 Q42 36 50 36 Q58 36 58 52 Z" fill="url(#ln-hd)" stroke-width="1.2"/>
    <ellipse cx="46.4" cy="44" rx="2" ry="3.4" fill="#14101c" stroke="none" transform="rotate(14 46.4 44)"/><ellipse cx="53.6" cy="44" rx="2" ry="3.4" fill="#14101c" stroke="none" transform="rotate(-14 53.6 44)"/>
    <path d="M36 28 Q40 22 48 21" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.4"/>
    <path d="M6 56 Q6 46 50 46 Q94 46 94 56 Q94 68 50 70 Q6 68 6 56 Z" fill="url(#uf-ds)"/>
    <path d="M10 58 Q50 66 90 58" fill="none" stroke="#5a6580" stroke-width="1.2"/>
    <circle cx="20" cy="57" r="3" fill="#ff5a5a"/><circle cx="35" cy="61" r="3" fill="#ffd23a"/><circle cx="50" cy="62.6" r="3" fill="#7ef07a"/><circle cx="65" cy="61" r="3" fill="#6ac2ff"/><circle cx="80" cy="57" r="3" fill="#e07aff"/>
    <path d="M14 52 Q30 48 44 48" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>`),Spaceship:a(`sp`,`${i(`sp-bd`,`#ffffff`,`#aab4ca`)}${i(`sp-rd`,`#ff6a5a`,`#b3201a`)}${r(`sp-wn`,`#bfe6ff`,`#3a8fe0`,`#12408a`)}${i(`sp-fl`,`#ffe96a`,`#ff5a1a`)}`,`<g transform="rotate(32 50 50)">
    <path d="M42 70 Q50 106 58 70 Z" fill="url(#sp-fl)"/><path d="M45.6 70 Q50 92 54.4 70 Z" fill="#fff6b0" stroke="none"/>
    <path d="M32 46 L14 72 L32 68 Z M68 46 L86 72 L68 68 Z" fill="url(#sp-rd)"/>
    <path d="M50 2 Q72 22 70 66 L30 66 Q28 22 50 2 Z" fill="url(#sp-bd)"/>
    <path d="M50 2 Q61 11 66 26 L34 26 Q39 11 50 2 Z" fill="url(#sp-rd)"/>
    <path d="M30 66 L70 66 L64 74 L36 74 Z" fill="#7a8398"/>
    <circle cx="50" cy="42" r="10" fill="#aab4c8"/><circle cx="50" cy="42" r="7.6" fill="url(#sp-wn)"/>
    <path d="M45 38 Q48 35 52 36" fill="none" stroke="#fff" stroke-width="1.8" stroke-opacity=".9"/>
    <path d="M36 34 Q35 50 37 62" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.4"/>
    <path d="M34 56 L66 56" fill="none" stroke="url(#sp-rd)" stroke-width="3"/></g>
    ${f(14,20,3.4)}${f(88,82,3.4)}`),Astronaut:a(`au`,`${m}${i(`as-w`,`#ffffff`,`#b8c2d8`)}`,`${p(`as-w`)}`),...Object.fromEntries([[`Red Astronaut`,`ar`,`#ff8a80`,`#c62828`],[`Orange Astronaut`,`ao`,`#ffc27a`,`#e65100`],[`Yellow Astronaut`,`ay`,`#fff59d`,`#f9a825`],[`Green Astronaut`,`ag`,`#b6f08a`,`#2e8b3a`],[`Blue Astronaut`,`ab`,`#8ec9ff`,`#1f5fc4`],[`Purple Astronaut`,`ap`,`#e1b8ff`,`#7b32c4`]].map(([e,t,n,r])=>[e,a(t,`${m}${i(`${t}-su`,n,r)}`,p(`${t}-su`))])),Cereal:a(`ce`,`${i(`ce-bw`,`#ffffff`,`#b7c6e6`)}${r(`ce-ml`,`#ffffff`,`#f6f6fb`,`#dcdfee`)}`,`<ellipse cx="50" cy="94" rx="42" ry="4" fill="#000" opacity=".25" stroke="none" filter="url(#ce-b)"/>
    <path d="M8 50 Q8 92 50 92 Q92 92 92 50 Z" fill="url(#ce-bw)"/>
    <path d="M14 66 Q50 78 86 66 M18 76 Q50 88 82 76" fill="none" stroke="#e8587a" stroke-width="2" stroke-opacity=".7"/>
    <ellipse cx="50" cy="50" rx="42" ry="11" fill="#e8ecf8"/>
    <ellipse cx="50" cy="50.5" rx="37" ry="8.2" fill="url(#ce-ml)"/>
    ${g(28,50,`#f2a63a`)}${g(40,53,`#f06a8a`)}${g(52,50,`#6ac2f2`)}${g(64,53,`#8fd45a`)}${g(72,49,`#ffd23a`)}${g(46,46,`#b58cf0`)}${g(58,46.4,`#f2a63a`)}${g(35,46.4,`#8fd45a`)}
    <path d="M62 40 L92 14" stroke="${e}" stroke-width="6" fill="none"/><path d="M62 40 L92 14" stroke="#dfe3ee" stroke-width="3.4" fill="none"/>
    <ellipse cx="57" cy="45" rx="7" ry="4.4" fill="#dfe3ee" transform="rotate(-38 57 45)"/>
    <path d="M12 56 Q14 76 28 84" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3"/>`),Yogurt:a(`yo`,`${i(`yo-cu`,`#ffffff`,`#f4d0de`)}${i(`yo-lb`,`#ff6f9a`,`#d6245e`)}${i(`yo-fo`,`#f4f6fa`,`#aeb6c6`)}${r(`yo-ym`,`#ffffff`,`#fff1f6`,`#f3cfdc`)}`,`<ellipse cx="50" cy="96" rx="28" ry="3.6" fill="#000" opacity=".25" stroke="none" filter="url(#yo-b)"/>
    <path d="M20 34 L80 34 L72 90 Q50 98 28 90 Z" fill="url(#yo-cu)"/>
    <path d="M22 52 L78 52 L75 78 Q50 86 25 78 Z" fill="url(#yo-lb)" stroke="none"/>
    <path d="M22 52 Q50 58 78 52 M25 78 Q50 86 75 78" fill="none" stroke-width="1.2"/>
    <path d="M50 76 C34 66 36 56 44 58 C48 59 50 62 50 62 C50 62 52 59 56 58 C64 56 66 66 50 76 Z" fill="#fff" transform="translate(0 -2)"/>
    <path d="M50 74 C36 65 38 57 45 59 C48 60 50 63 50 63 C50 63 52 60 55 59 C62 57 64 65 50 74 Z" fill="#ef2f4e" stroke-width="1"/>
    <path d="M44 58 L50 54 L56 58 L50 60 Z" fill="#43a047" stroke-width="1"/>
    <g fill="#ffe9a8" stroke="none"><circle cx="46" cy="64" r=".8"/><circle cx="52" cy="66" r=".8"/><circle cx="56" cy="62" r=".8"/><circle cx="49" cy="69" r=".8"/></g>
    <ellipse cx="50" cy="34" rx="30" ry="7" fill="url(#yo-fo)"/>
    <path d="M24 33 Q50 40 76 33" fill="none" stroke="#fff" stroke-width="2" stroke-opacity=".7"/>
    <path d="M62 30 Q76 24 78 34 Q70 38 60 34 Z" fill="url(#yo-ym)"/>
    <path d="M38 26 Q50 16 62 26 Q50 30 38 26 Z" fill="url(#yo-ym)" stroke-width="1"/>
    <path d="M56 24 L88 6" stroke="${e}" stroke-width="6" fill="none"/><path d="M56 24 L88 6" stroke="#dfe3ee" stroke-width="3.4" fill="none"/>
    <path d="M26 44 Q28 70 34 88" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2.6"/>`),Milk:a(`mk`,`${i(`mk-fr`,`#ffffff`,`#dfe6f4`)}${i(`mk-sd`,`#cfd9ee`,`#98a8cc`)}${i(`mk-tp`,`#d6e6ff`,`#8fb2f2`)}${i(`mk-bl`,`#4f86e8`,`#2154b8`)}`,`<ellipse cx="52" cy="96" rx="34" ry="3.8" fill="#000" opacity=".25" stroke="none" filter="url(#mk-b)"/>
    <path d="M70 36 L86 28 L86 84 L70 92 Z" fill="url(#mk-sd)"/>
    <path d="M30 36 L50 14 L72 36 Z" fill="url(#mk-tp)"/>
    <path d="M50 14 L68 8 L88 28 L70 36 Z" fill="#a9c4f6"/>
    <path d="M44 14 L68 8 L72 12 L48 18 Z" fill="#e8f0ff" stroke-width="1.2"/>
    <rect x="30" y="36" width="40" height="56" rx="1.5" fill="url(#mk-fr)"/>
    <path d="M30 56 L70 56 L70 76 L30 76 Z" fill="url(#mk-bl)" stroke="none"/>
    <path d="M30 56 L70 56 M30 76 L70 76" fill="none" stroke-width="1.2"/>
    <text x="50" y="71.6" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11.5" fill="#fff" stroke="none" letter-spacing=".4">MILK</text>
    <path d="M36 42 Q44 38 52 44 Q56 50 48 52 Q40 52 36 48 Z" fill="#2a2438" stroke="none"/>
    <path d="M56 84 Q64 80 66 86 Q62 90 56 88 Z" fill="#2a2438" stroke="none"/>
    <path d="M33 38 L33 90" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2"/>`),Waffle:a(`wf`,`${r(`wf-tp`,`#ffe3a0`,`#e8a850`,`#bb7424`)}${i(`wf-sd`,`#c98a3a`,`#7e4a14`)}${i(`wf-sy`,`#c8641c`,`#6e2c0a`)}${i(`wf-bt`,`#fff6a8`,`#f2c230`)}<clipPath id="wf-cp"><ellipse cx="50" cy="52" rx="43" ry="33"/></clipPath>`,`<ellipse cx="50" cy="94" rx="42" ry="4" fill="#000" opacity=".25" stroke="none" filter="url(#wf-b)"/>
    <ellipse cx="50" cy="60" rx="43" ry="33" fill="url(#wf-sd)"/>
    <ellipse cx="50" cy="52" rx="43" ry="33" fill="url(#wf-tp)"/>
    <g clip-path="url(#wf-cp)" stroke="#9c5c1a" stroke-width="2.4" stroke-opacity=".75" fill="none">
      <path d="M0 30 L100 30 M0 42 L100 42 M0 54 L100 54 M0 66 L100 66 M0 78 L100 78"/>
      <path d="M18 0 L18 100 M32 0 L32 100 M46 0 L46 100 M60 0 L60 100 M74 0 L74 100 M88 0 L88 100"/>
    </g>
    <ellipse cx="50" cy="52" rx="43" ry="33" fill="none"/>
    <path d="M14 38 Q24 26 40 22" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2.4"/>
    <path d="M36 40 L64 36 L66 56 L38 60 Z" fill="url(#wf-bt)"/>
    <path d="M38 42 L62 38" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none"/>
    <path d="M22 44 Q30 34 44 36 L60 32 Q76 30 80 44 Q82 54 74 52 Q68 62 60 56 Q54 66 46 58 Q38 64 32 56 Q22 56 22 44 Z" fill="url(#wf-sy)" opacity=".95"/>
    <path d="M26 54 Q26 70 30 76 Q35 72 33 60 Z M50 62 Q50 78 54 82 Q58 78 56 66 Z M72 50 Q76 62 74 70 Q80 66 78 54 Z" fill="url(#wf-sy)"/>
    <path d="M30 42 Q40 38 50 40" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
    <path d="M38 41 L62 37" stroke="#fff" stroke-opacity=".0" fill="none"/>`),"French Toast":a(`ft`,`${r(`ft-in`,`#ffdc8c`,`#e0922f`,`#b4661a`)}${i(`ft-cr`,`#b9692a`,`#74391a`)}${i(`ft-pl`,`#ffffff`,`#cfd6e6`)}${i(`ft-sy`,`#c8641c`,`#6e2c0a`)}${r(`ft-sb`,`#ff7a7a`,`#e0242e`,`#8e0f18`)}`,`<ellipse cx="50" cy="93" rx="46" ry="4" fill="#000" opacity=".25" stroke="none" filter="url(#ft-b)"/>
    <ellipse cx="50" cy="82" rx="47" ry="13" fill="url(#ft-pl)"/>
    <g transform="translate(6 24) scale(.66) rotate(-6 50 53)"><path d="${h}" fill="url(#ft-cr)"/><path d="${h}" fill="url(#ft-in)" stroke="none" transform="translate(50 53) scale(.86) translate(-50 -53)"/></g>
    <g transform="translate(34 30) scale(.66) rotate(7 50 53)"><path d="${h}" fill="url(#ft-cr)"/><path d="${h}" fill="url(#ft-in)" stroke="none" transform="translate(50 53) scale(.86) translate(-50 -53)"/>
      <g fill="#8a4a14" stroke="none" opacity=".5"><circle cx="34" cy="60" r="1.6"/><circle cx="60" cy="48" r="1.6"/><circle cx="52" cy="76" r="1.6"/><circle cx="68" cy="68" r="1.6"/></g></g>
    <path d="M46 52 Q58 44 76 50 Q88 58 76 68 Q70 74 62 70 Q52 70 46 64 Z" fill="url(#ft-sy)" opacity=".95"/>
    <path d="M52 58 Q62 54 72 58" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
    <g fill="#fff" stroke="none" opacity=".9"><circle cx="30" cy="52" r="1.3"/><circle cx="24" cy="60" r="1.1"/><circle cx="36" cy="64" r="1.2"/><circle cx="44" cy="46" r="1.2"/><circle cx="56" cy="74" r="1.2"/><circle cx="70" cy="48" r="1.1"/><circle cx="18" cy="68" r="1"/></g>
    <path d="M32 38 C20 30 22 22 30 24 C33 25 34 28 34 28 C34 28 36 25 40 24 C48 22 48 32 32 38 Z" fill="url(#ft-sb)"/>
    <path d="M28 25 L34 20 L40 25 L34 27 Z" fill="#43a047" stroke-width="1"/>
    <path d="M36 24 L44 16 M40 28 L50 22" fill="none" stroke-opacity="0"/>`),Pizza:a(`pz`,`${i(`pz-ch`,`#ffe27a`,`#f0a620`)}${i(`pz-cr`,`#e5aa5c`,`#a8661e`)}${r(`pz-pp`,`#f06a5a`,`#c42a24`,`#7a1410`)}`,`<ellipse cx="50" cy="96" rx="12" ry="2.6" fill="#000" opacity=".25" stroke="none" filter="url(#pz-b)"/>
    <path d="M10 24 Q50 10 90 24 L52 94 Q50 97 48 94 Z" fill="url(#pz-ch)"/>
    <path d="M40 88 Q38 98 44 100 Q46 94 46 90 Z M58 82 Q60 92 56 96 Q52 90 54 86 Z" fill="url(#pz-ch)" stroke-width="1.2"/>
    <g fill="#e08a14" stroke="none" opacity=".55"><circle cx="30" cy="40" r="2.4"/><circle cx="62" cy="48" r="2.2"/><circle cx="48" cy="66" r="2"/><circle cx="70" cy="34" r="2"/></g>
    <circle cx="32" cy="38" r="9" fill="url(#pz-pp)"/><circle cx="64" cy="42" r="9" fill="url(#pz-pp)"/><circle cx="48" cy="62" r="8" fill="url(#pz-pp)"/>
    <g fill="#8e1a14" stroke="none"><circle cx="29" cy="36" r="1.2"/><circle cx="35" cy="41" r="1.1"/><circle cx="62" cy="39" r="1.2"/><circle cx="67" cy="45" r="1.1"/><circle cx="46" cy="60" r="1.1"/><circle cx="51" cy="64" r="1"/></g>
    <g fill="#fff" stroke="none" opacity=".35"><ellipse cx="29" cy="33" rx="3" ry="1.4"/><ellipse cx="61" cy="37" rx="3" ry="1.4"/></g>
    <path d="M48 36 Q56 30 58 38 Q54 44 48 42 Z" fill="#43a047" stroke-width="1.2"/><path d="M50 38 L56 36" fill="none" stroke-width=".8" stroke-opacity=".6"/>
    <path d="M8 22 Q50 4 92 22 Q96 32 88 32 Q50 18 12 32 Q4 32 8 22 Z" fill="url(#pz-cr)"/>
    <path d="M20 22 Q50 10 80 22" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.4"/>`),"Two of Spades":a(`ts`,`${i(`ts-cd`,`#ffffff`,`#dfe2ee`)}`,`<ellipse cx="50" cy="96" rx="22" ry="3.5" fill="#000" opacity=".25" stroke="none" filter="url(#ts-b)"/>
    <path d="M42 70 L41 90 M58 70 L59 90" fill="none" stroke="${e}" stroke-width="7"/>
    <path d="M42 70 L41 90 M58 70 L59 90" fill="none" stroke="#e8404c" stroke-width="4" stroke-opacity="1"/>
    <ellipse cx="38" cy="92" rx="7.4" ry="3.6" fill="#2a1b3d"/><ellipse cx="62" cy="92" rx="7.4" ry="3.6" fill="#2a1b3d"/>
    <path d="M30 40 L15 54 M70 40 L85 54" fill="none" stroke="${e}" stroke-width="7"/>
    <path d="M30 40 L15 54 M70 40 L85 54" fill="none" stroke="#e8404c" stroke-width="4"/>
    <circle cx="14" cy="55" r="4.2" fill="#fff"/><circle cx="86" cy="55" r="4.2" fill="#fff"/>
    <rect x="27" y="10" width="46" height="64" rx="6" fill="url(#ts-cd)" stroke-width="2"/>
    <rect x="30" y="13" width="40" height="58" rx="4" fill="none" stroke="#c9ccdc" stroke-width="1"/>
    <text x="34" y="26" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#14101c" stroke="none">2</text>
    ${l(34,33,.42)}
    <g transform="rotate(180 50 42)"><text x="34" y="26" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#14101c" stroke="none">2</text>${l(34,33,.42)}</g>
    ${l(52,31,1)}
    <g transform="rotate(180 52 53)">${l(52,31,1)}</g>
    <path d="M32 16 Q34 14 40 14" fill="none" stroke="#fff" stroke-width="1.6" stroke-opacity=".9"/>`),"Queen of Hearts":a(`qh`,`${i(`qh-dr`,`#ee4558`,`#7e0c20`)}${i(`qh-hr`,`#4a3030`,`#1d1212`)}${i(`qh-cr`,`#fff0a0`,`#e0a400`)}${i(`qh-ru`,`#ffffff`,`#d8d6e4`)}`,`<path d="M4 100 Q8 76 50 74 Q92 76 96 100 Z" fill="url(#qh-dr)"/>
    ${c(24,94,.9,`#ffffff`)}${c(76,94,.9,`#ffffff`)}${c(50,98,.7,`#14101c`)}
    <ellipse cx="50" cy="44" rx="27" ry="21" fill="url(#qh-hr)"/>
    <path d="M24 50 Q14 66 26 72 Q30 62 30 54 Z M76 50 Q86 66 74 72 Q70 62 70 54 Z" fill="url(#qh-hr)"/>
    ${s(`qh`,{y:57,rx:18,ry:19,mouth:!1,iris:`#3a2a1a`,brow:`#14101c`,lips:`#d11f4f`})}
    <path d="M34 46 L46 51 M66 46 L54 51" fill="none" stroke="#14101c" stroke-width="2.8"/>
    <path d="M43 68 Q50 62 57 68 Q50 77 43 68 Z" fill="#8c0f24"/><path d="M45.5 67.5 Q50 64.6 54.5 67.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-opacity=".9"/>
    <path d="M22 80 Q50 100 78 80 Q80 88 70 90 Q64 96 58 91 Q50 98 42 91 Q36 96 30 90 Q20 88 22 80 Z" fill="url(#qh-ru)"/>
    <path d="M30 42 L31 20 L40 30 L50 14 L60 30 L69 20 L70 42 Z" fill="url(#qh-cr)"/>
    <path d="M30 42 Q50 48 70 42 L70 38 Q50 44 30 38 Z" fill="#e0a400"/>
    ${c(50,29,.7)}<circle cx="31" cy="20" r="1.8" fill="#e8173f" stroke-width=".8"/><circle cx="69" cy="20" r="1.8" fill="#e8173f" stroke-width=".8"/><circle cx="50" cy="14" r="1.8" fill="#e8173f" stroke-width=".8"/>`),Dormouse:a(`dm`,`${r(`dm-fr`,`#dba76c`,`#a9702f`,`#6e421a`)}${i(`dm-cp`,`#ffffff`,`#cdd7e8`)}`,`<ellipse cx="50" cy="98" rx="42" ry="3.6" fill="#000" opacity=".25" stroke="none" filter="url(#dm-b)"/>
    <circle cx="28" cy="34" r="11" fill="url(#dm-fr)"/><circle cx="72" cy="34" r="11" fill="url(#dm-fr)"/>
    <circle cx="28" cy="34" r="6.4" fill="#f4a9b8" stroke="none"/><circle cx="72" cy="34" r="6.4" fill="#f4a9b8" stroke="none"/>
    <ellipse cx="50" cy="52" rx="23" ry="19" fill="url(#dm-fr)"/>
    <ellipse cx="50" cy="60" rx="12" ry="8.6" fill="#f4dab4" stroke-width="1"/>
    <path d="M32 47 Q38 52 44 47 M56 47 Q62 52 68 47" fill="none" stroke="#2b1d3a" stroke-width="1.8"/>
    <path d="M33 46 l-3 -2 M37 44.6 l-1 -3 M67 46 l3 -2 M63 44.6 l1 -3" fill="none" stroke-width="1.1"/>
    <ellipse cx="50" cy="55" rx="3.2" ry="2.4" fill="#e8587a" stroke-width="1"/>
    <path d="M50 57.5 L50 61 M50 61 Q46 65 43 62.5 M50 61 Q54 65 57 62.5" fill="none" stroke-width="1.1"/>
    <rect x="47.6" y="62.6" width="4.8" height="4.4" rx="1" fill="#fff" stroke-width="1"/>
    <path d="M24 56 L38 58 M24 62 L38 61 M76 56 L62 58 M76 62 L62 61" fill="none" stroke="#fff" stroke-width=".9" stroke-opacity=".8"/>
    <path d="M18 70 Q18 96 50 96 Q82 96 82 70 Z" fill="url(#dm-cp)"/>
    <path d="M18 80 Q50 90 82 80 M18 86 Q50 96 82 86" fill="none" stroke="#3b6fd0" stroke-width="2" stroke-opacity=".8"/>
    <path d="M82 74 Q98 72 95 85 Q91 94 78 91" fill="none" stroke-width="4"/>
    <path d="M82 74 Q98 72 95 85 Q91 94 78 91" fill="none" stroke="#e9eef8" stroke-width="2"/>
    <ellipse cx="50" cy="70" rx="32" ry="5.4" fill="#e1e8f4"/>
    <ellipse cx="34" cy="69" rx="6.4" ry="3.6" fill="url(#dm-fr)"/><ellipse cx="66" cy="69" rx="6.4" ry="3.6" fill="url(#dm-fr)"/>
    <text x="80" y="30" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#fff" stroke="none" opacity=".9">z</text>
    <text x="88" y="19" font-family="Georgia, serif" font-weight="700" font-size="8" fill="#fff" stroke="none" opacity=".7">z</text>`),"White Rabbit":a(`wr`,`${r(`wr-fr`,`#ffffff`,`#f2f3f8`,`#cfd3e2`)}${i(`wr-co`,`#5b7fe0`,`#223a8a`)}${i(`wr-go`,`#fff3a8`,`#e0a400`)}`,`<path d="M12 100 Q16 76 50 74 Q84 76 88 100 Z" fill="url(#wr-co)"/>
    <path d="M34 78 L50 100 L66 78 Q50 86 34 78 Z" fill="#f4f0e4" stroke-width="1.2"/>
    <path d="M50 78 L42 84 L50 90 L58 84 Z" fill="#e8173f" stroke-width="1.2"/>
    <ellipse cx="38" cy="24" rx="7.4" ry="22" fill="url(#wr-fr)" transform="rotate(-10 38 24)"/>
    <ellipse cx="62" cy="24" rx="7.4" ry="22" fill="url(#wr-fr)" transform="rotate(10 62 24)"/>
    <ellipse cx="38.4" cy="26" rx="3.4" ry="15" fill="#f6b3c6" stroke="none" transform="rotate(-10 38 26)"/>
    <ellipse cx="61.6" cy="26" rx="3.4" ry="15" fill="#f6b3c6" stroke="none" transform="rotate(10 62 26)"/>
    <ellipse cx="50" cy="54" rx="20" ry="18" fill="url(#wr-fr)"/>
    <ellipse cx="36" cy="60" rx="4.2" ry="3" fill="#ff9db9" opacity=".5" stroke="none" filter="url(#wr-b)"/><ellipse cx="64" cy="60" rx="4.2" ry="3" fill="#ff9db9" opacity=".5" stroke="none" filter="url(#wr-b)"/>
    ${o(41,51,`#e53966`,.85)}${o(59,51,`#e53966`,.85)}
    <path d="M47 59 L53 59 L50 62.4 Z" fill="#ff7eb0" stroke-width="1"/>
    <path d="M50 62.4 L50 65 M50 65 Q46 69 43 66 M50 65 Q54 69 57 66" fill="none" stroke-width="1.1"/>
    <rect x="47.4" y="65" width="5.2" height="5" rx="1" fill="#fff" stroke-width="1"/>
    <path d="M24 60 L38 62 M24 66 L38 65 M76 60 L62 62 M76 66 L62 65" fill="none" stroke="#9aa0b8" stroke-width=".9"/>
    <path d="M60 80 Q70 78 70 88" fill="none" stroke="#e0a400" stroke-width="1.4"/>
    <circle cx="70" cy="91" r="7" fill="url(#wr-go)"/><circle cx="70" cy="91" r="5" fill="#fff" stroke-width="1"/>
    <path d="M70 91 L70 87.6 M70 91 L73 92.6" fill="none" stroke-width="1.2"/>`),Caterpillar:a(`ca`,`${r(`ca-bl`,`#9ad8ff`,`#4aa3d9`,`#1f6a9e`)}${r(`ca-gr`,`#c4f09a`,`#7ac74f`,`#3f8a2a`)}${r(`ca-mu`,`#ff7a70`,`#e0302c`,`#8e0f16`)}${i(`ca-st`,`#fff6e2`,`#d9c9a4`)}`,`<ellipse cx="50" cy="97" rx="40" ry="3.6" fill="#000" opacity=".25" stroke="none" filter="url(#ca-b)"/>
    <path d="M40 98 Q44 90 40 84 L60 84 Q56 90 60 98 Z" fill="url(#ca-st)"/>
    <path d="M6 88 Q8 62 50 60 Q92 62 94 88 Q50 98 6 88 Z" fill="url(#ca-mu)"/>
    <circle cx="20" cy="76" r="4" fill="#fff" stroke="none"/><circle cx="40" cy="82" r="3" fill="#fff" stroke="none"/><circle cx="66" cy="78" r="4.6" fill="#fff" stroke="none"/><circle cx="82" cy="84" r="3" fill="#fff" stroke="none"/>
    <circle cx="16" cy="62" r="7" fill="url(#ca-gr)"/><circle cx="27" cy="62" r="8" fill="url(#ca-bl)"/><circle cx="39" cy="61" r="9" fill="url(#ca-gr)"/>
    <circle cx="50" cy="55" r="9.4" fill="url(#ca-bl)"/><circle cx="56" cy="43" r="10" fill="url(#ca-gr)"/>
    <circle cx="58" cy="25" r="15" fill="url(#ca-bl)"/>
    <path d="M50 12 Q45 2 38 5 M66 12 Q72 2 79 5" fill="none"/><circle cx="38" cy="5" r="2.4" fill="#ff8a3d" stroke-width="1"/><circle cx="79" cy="5" r="2.4" fill="#ff8a3d" stroke-width="1"/>
    <ellipse cx="51" cy="24" rx="5.2" ry="4.4" fill="#fff" stroke-width="1"/><ellipse cx="66" cy="24" rx="5.2" ry="4.4" fill="#fff" stroke-width="1"/>
    <circle cx="51" cy="26" r="2.3" fill="#0d0a14" stroke="none"/><circle cx="66" cy="26" r="2.3" fill="#0d0a14" stroke="none"/>
    <path d="M45.4 24 L56.6 24 M60.4 24 L71.6 24" fill="none" stroke-width="2.2"/>
    <path d="M50 33 Q59 39 68 32" fill="none" stroke-width="1.6"/>
    <path d="M78 26 Q84 22 82 16" fill="none" stroke="#fff" stroke-width="1.4" stroke-opacity=".6"/>
    <circle cx="88" cy="14" r="3.2" fill="none" stroke="#bfe6ff" stroke-width="1.2" stroke-opacity=".8"/><circle cx="92" cy="6" r="2.2" fill="none" stroke="#bfe6ff" stroke-width="1" stroke-opacity=".6"/>`),"Mad Hatter":a(`mh`,`${i(`mh-hr`,`#ffb04a`,`#c85a00`)}${i(`mh-jk`,`#5dba48`,`#255c1b`)}${i(`mh-ht`,`#4f9a3d`,`#16411a`)}`,`<path d="M8 100 Q12 80 50 78 Q88 80 92 100 Z" fill="url(#mh-jk)"/>
    <path d="M40 80 L50 98 L60 80 Z" fill="#fff" stroke-width="1.2"/>
    <path d="M50 87 L33 78 L33 95 Z M50 87 L67 78 L67 95 Z" fill="#e8503a" stroke-width="1.4"/><circle cx="50" cy="87" r="3.6" fill="#ff7a5a" stroke-width="1.2"/>
    <circle cx="44" cy="84" r="1.2" fill="#fff" stroke="none"/>
    <path d="M24 52 L8 44 L20 58 L6 64 L22 70 Z M76 52 L92 44 L80 58 L94 64 L78 70 Z" fill="url(#mh-hr)"/>
    <ellipse cx="50" cy="56" rx="26" ry="23" fill="url(#mh-hr)"/>
    ${s(`mh`,{y:58,rx:18,ry:18,mouth:!1,iris:`#2e8f5a`,brow:`#a84a00`})}
    <path d="M35 66 Q50 84 65 66 Q50 72 35 66 Z" fill="#3a0f2a"/>
    <path d="M37 67.4 Q50 74 63 67.4 L61 70 Q50 76.6 39 70 Z" fill="#fff" stroke-width="1"/>
    <path d="M32 50 Q40 44 50 47 Q60 44 68 50 Q58 50 50 52 Q42 50 32 50 Z" fill="url(#mh-hr)"/>
    <g transform="rotate(-6 50 46)">
    <path d="M32 46 L34 6 L66 6 L68 46 Z" fill="url(#mh-ht)"/>
    <ellipse cx="50" cy="46" rx="31" ry="7" fill="url(#mh-ht)"/>
    <ellipse cx="50" cy="6" rx="16" ry="4" fill="#2f7a2a"/>
    <path d="M33 36 Q50 41 67 36 L67.6 43 Q50 48 32.4 43 Z" fill="#e8503a"/>
    <g transform="rotate(8 56 30)"><rect x="49" y="24" width="15" height="10" rx="1.4" fill="#fff8e1" stroke-width="1"/><text x="56.5" y="31.6" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="6.2" fill="#7b3a1d" stroke="none">10/6</text></g>
    <path d="M36 10 L37 36" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="2"/></g>`),"King of Hearts":a(`kh`,`${i(`kh-rb`,`#e84458`,`#80101f`)}${i(`kh-cr`,`#fff0a0`,`#e0a400`)}${r(`kh-fur`,`#ffffff`,`#f2f0f5`,`#cfcbd8`)}${i(`kh-hr`,`#e4e4ea`,`#9a9aa8`)}`,`<path d="M4 100 Q8 76 50 74 Q92 76 96 100 Z" fill="url(#kh-rb)"/>
    ${c(50,94,1.4,`#ffd54f`)}
    <path d="M16 82 Q50 100 84 82 Q86 90 74 92 Q68 98 60 93 Q50 99 40 93 Q32 98 26 92 Q14 90 16 82 Z" fill="url(#kh-fur)"/>
    <circle cx="30" cy="90" r="1.1" fill="${e}" stroke="none"/><circle cx="50" cy="95.6" r="1.1" fill="${e}" stroke="none"/><circle cx="70" cy="90" r="1.1" fill="${e}" stroke="none"/>
    <ellipse cx="29" cy="54" rx="8" ry="13" fill="url(#kh-hr)"/><ellipse cx="71" cy="54" rx="8" ry="13" fill="url(#kh-hr)"/>
    ${s(`kh`,{y:57,rx:20,ry:19,mouth:!1,iris:`#6b4a2b`,brow:`#9a9aa8`,lips:`#d9647a`})}
    <path d="M38 67 Q44 61 50 66 Q56 61 62 67 Q56 73 50 69 Q44 73 38 67 Z" fill="url(#kh-hr)"/>
    <path d="M45 72 Q50 75.6 55 72" fill="none" stroke="#c4605f" stroke-width="1.6"/>
    <path d="M30 42 L30 24 L39 32 L50 18 L61 32 L70 24 L70 42 Z" fill="url(#kh-cr)"/>
    <path d="M30 42 Q50 48 70 42 L70 37.6 Q50 43.6 30 37.6 Z" fill="#c43a4a"/><path d="M30 42 Q50 48 70 42" fill="none" stroke="#e0a400" stroke-width="2"/>
    ${c(50,31,.8)}${c(30,25,.5)}${c(70,25,.5)}${c(50,17,.5)}`),King:a(`ki`,`${i(`ki-hr`,`#d9d9e0`,`#8d8d9a`)}${i(`ki-rb`,`#e0384a`,`#7a0f22`)}${i(`ki-cr`,`#fff0a0`,`#e0a400`)}${r(`ki-fur`,`#ffffff`,`#f2f0f5`,`#cfcbd8`)}`,`<path d="M6 100 Q10 78 50 76 Q90 78 94 100 Z" fill="url(#ki-rb)"/>
    <path d="M18 84 Q50 98 82 84 Q80 94 50 100 Q20 94 18 84 Z" fill="url(#ki-fur)"/>
    <circle cx="30" cy="90" r="1.1" fill="${e}" stroke="none"/><circle cx="44" cy="95" r="1.1" fill="${e}" stroke="none"/><circle cx="58" cy="95" r="1.1" fill="${e}" stroke="none"/><circle cx="70" cy="90" r="1.1" fill="${e}" stroke="none"/>
    <path d="M24 42 Q16 70 28 80 Q32 62 34 50 Z M76 42 Q84 70 72 80 Q68 62 66 50 Z" fill="url(#ki-hr)"/>
    ${s(`ki`,{y:55,rx:18,ry:19,mouth:!1,iris:`#5b6f8a`,brow:`#cfd0d8`})}
    <path d="M30 56 Q26 90 50 98 Q74 90 70 56 Q62 70 50 66 Q38 70 30 56 Z" fill="url(#ki-hr)"/>
    <path d="M38 74 Q36 86 44 92 M50 72 L50 94 M62 74 Q64 86 56 92" fill="none" stroke="#6f6f7c" stroke-width="1" stroke-opacity=".7"/>
    <path d="M38 62 Q44 58 50 62 Q56 58 62 62 Q56 69 50 66 Q44 69 38 62 Z" fill="url(#ki-hr)"/>
    <path d="M32 50 Q50 34 68 50 Q58 43 50 46 Q42 43 32 50 Z" fill="url(#ki-hr)"/>
    <path d="M28 40 L28 14 L39 26 L50 6 L61 26 L72 14 L72 40 Z" fill="url(#ki-cr)"/>
    <path d="M29 40 Q50 46 71 40 L71 35 Q50 41 29 35 Z" fill="#7a0f22"/><path d="M29 40 Q50 46 71 40" fill="none" stroke="#e0a400" stroke-width="2"/>
    <circle cx="50" cy="26" r="3.6" fill="#2d7bd8" stroke-width="1"/><circle cx="38" cy="34" r="2.2" fill="#e8173f" stroke-width=".8"/><circle cx="62" cy="34" r="2.2" fill="#e8173f" stroke-width=".8"/>
    <circle cx="28" cy="14" r="1.8" fill="#fff" stroke-width=".8"/><circle cx="72" cy="14" r="1.8" fill="#fff" stroke-width=".8"/><circle cx="50" cy="6" r="1.8" fill="#fff" stroke-width=".8"/>
    <path d="M36 20 L39 27" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>`),Toast:a(`to`,`${i(`to-cr`,`#b86a2e`,`#6f3a12`)}${r(`to-in`,`#ffe6a8`,`#eaaa4e`,`#c47a2a`)}${i(`to-bt`,`#fff6a8`,`#f0b81c`)}`,`<ellipse cx="50" cy="96" rx="38" ry="4" fill="#000" opacity=".25" stroke="none" filter="url(#to-b)"/>
    <path d="M20 90 L20 52 Q7 50 7 36 Q7 19 28 19 Q38 10 50 10 Q62 10 72 19 Q93 19 93 36 Q93 50 80 52 L80 90 Q80 95 75 95 L25 95 Q20 95 20 90 Z" fill="url(#to-cr)"/>
    <path d="M20 90 L20 52 Q7 50 7 36 Q7 19 28 19 Q38 10 50 10 Q62 10 72 19 Q93 19 93 36 Q93 50 80 52 L80 90 Q80 95 75 95 L25 95 Q20 95 20 90 Z" fill="url(#to-in)" stroke="none" transform="translate(50 53) scale(.86) translate(-50 -53)"/>
    <path d="M18 24 Q28 14 40 14" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.4"/>
    <g fill="#b9742f" stroke="none" opacity=".55"><circle cx="30" cy="62" r="1.4"/><circle cx="66" cy="70" r="1.2"/><circle cx="40" cy="80" r="1.3"/><circle cx="62" cy="42" r="1.2"/><circle cx="24" cy="38" r="1.3"/><circle cx="74" cy="30" r="1.2"/></g>
    <path d="M28 52 L72 52 M28 66 L72 66 M28 80 L72 80" stroke="#9a5a22" stroke-opacity=".35" stroke-width="2.2" fill="none"/>
    <path d="M32 46 L70 42 L72 62 L34 66 Z" fill="url(#to-bt)"/>
    <path d="M34 48 L68 44" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none"/>
    <path d="M60 62 Q64 70 62 74 Q58 70 58 64" fill="#f6c93a" stroke-width="1"/>`),"Breakfast Combo":a(`bc`,`${i(`bc-pl`,`#ffffff`,`#cfd6e6`)}${r(`bc-yk`,`#fff09a`,`#ffb300`,`#e07800`)}`,`<ellipse cx="50" cy="90" rx="46" ry="6" fill="#000" opacity=".25" stroke="none" filter="url(#bc-b)"/>
    <ellipse cx="50" cy="58" rx="46" ry="35" fill="url(#bc-pl)"/>
    <ellipse cx="50" cy="58" rx="34" ry="25" fill="none" stroke="#bcc4d8" stroke-width="2"/>
    <path d="M24 56 Q18 40 34 38 Q42 28 54 36 Q70 32 72 48 Q78 62 62 68 Q50 76 36 68 Q24 68 24 56 Z" fill="#fff" stroke-width="1.5"/>
    <path d="M30 62 Q28 52 34 46" fill="none" stroke="#e6e8f0" stroke-width="3"/>
    <circle cx="46" cy="52" r="11" fill="url(#bc-yk)"/>
    <ellipse cx="42" cy="47" rx="3.6" ry="2.2" fill="#fff" opacity=".85" stroke="none" transform="rotate(-30 42 47)"/>
    <g fill="${e}" stroke="none" opacity=".7"><circle cx="60" cy="48" r=".9"/><circle cx="64" cy="56" r=".9"/><circle cx="34" cy="62" r=".9"/><circle cx="58" cy="64" r=".9"/><circle cx="30" cy="48" r=".9"/></g>
    <path d="M66 24 Q76 32 66 40 Q56 48 66 56 Q74 62 70 68" fill="none" stroke="${e}" stroke-width="9.4"/>
    <path d="M66 24 Q76 32 66 40 Q56 48 66 56 Q74 62 70 68" fill="none" stroke="#c0392b" stroke-width="7" stroke-opacity="1"/>
    <path d="M66 24 Q76 32 66 40 Q56 48 66 56 Q74 62 70 68" fill="none" stroke="#f1948a" stroke-width="2.6" stroke-opacity="1"/>
    <path d="M78 30 Q86 38 78 46 Q70 54 78 62" fill="none" stroke="${e}" stroke-width="9.4"/>
    <path d="M78 30 Q86 38 78 46 Q70 54 78 62" fill="none" stroke="#b03427" stroke-width="7"/>
    <path d="M78 30 Q86 38 78 46 Q70 54 78 62" fill="none" stroke="#ee8a7e" stroke-width="2.6"/>`),"Orange Juice":a(`oj`,`${i(`oj-ju`,`#ffd45e`,`#f57c00`)}${i(`oj-gl`,`#f4fbff`,`#b9dcf0`)}`,`<ellipse cx="50" cy="95" rx="26" ry="3.5" fill="#000" opacity=".25" stroke="none" filter="url(#oj-b)"/>
    <path d="M24 20 L76 20 L69 90 Q50 99 31 90 Z" fill="url(#oj-gl)" fill-opacity=".6"/>
    <path d="M27 34 Q50 40 73 34 L69 88 Q50 96 31 88 Z" fill="url(#oj-ju)" stroke="none"/>
    <path d="M27 34 Q50 40 73 34" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.4"/>
    <g fill="#fff" fill-opacity=".45" stroke-width="1"><rect x="36" y="48" width="12" height="12" rx="2.5" transform="rotate(-12 42 54)"/><rect x="52" y="62" width="12" height="12" rx="2.5" transform="rotate(14 58 68)"/></g>
    <g fill="#ffe9a8" stroke="none" opacity=".8"><circle cx="38" cy="76" r="1.2"/><circle cx="60" cy="52" r="1"/><circle cx="46" cy="82" r="1"/><circle cx="64" cy="82" r="1.2"/></g>
    <path d="M52 6 L58 8 L50 44 L44 42 Z" fill="#fff"/><path d="M52.8 10 L55 11 L51.4 28 L49 27 Z M49 32 L51.8 33 L50 42 L47.6 41 Z" fill="#e53935" stroke="none"/>
    <path d="M29 30 Q31 60 36 86" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="3"/>
    <path d="M24 20 L76 20 L69 90 Q50 99 31 90 Z" fill="none"/>
    <circle cx="76" cy="22" r="13" fill="#ff9800"/><circle cx="76" cy="22" r="10.5" fill="#fff3d0" stroke-width="1"/><circle cx="76" cy="22" r="9" fill="#ffb238" stroke="none"/>
    <path d="M76 13 L76 31 M67 22 L85 22 M69.6 15.6 L82.4 28.4 M82.4 15.6 L69.6 28.4" stroke="#fff3d0" stroke-width="1.2" fill="none"/>`),Pancakes:a(`pa`,`${i(`pa-sd`,`#e7b062`,`#b87a30`)}${r(`pa-tp`,`#ffe3a0`,`#e8a85a`,`#c77a2c`)}${i(`pa-sy`,`#c8641c`,`#6e2c0a`)}${i(`pa-bt`,`#fff6a8`,`#f2c230`)}${i(`pa-pl`,`#ffffff`,`#cfd6e6`)}`,`<ellipse cx="50" cy="91" rx="46" ry="6" fill="#000" opacity=".25" stroke="none" filter="url(#pa-b)"/>
    <ellipse cx="50" cy="82" rx="46" ry="12" fill="url(#pa-pl)"/>
    ${u(64,36)}${u(50,34)}${u(36,32)}
    <path d="M20 36 Q24 30 36 31 Q42 27 52 30 Q64 26 72 32 Q82 33 80 38 Q74 46 64 42 Q56 48 48 42 Q38 46 30 41 Q22 42 20 36 Z" fill="url(#pa-sy)"/>
    <path d="M23 38 Q22 52 25 58 Q29 56 28 46 Z M40 44 Q40 58 43 64 Q47 62 45 50 Z M62 43 Q64 54 62 60 Q67 58 67 46 Z M76 38 Q80 48 78 56 Q83 52 80 42 Z" fill="url(#pa-sy)"/>
    <path d="M30 34 Q40 31 50 33" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
    <path d="M40 24 L60 22 L62 34 L42 36 Z" fill="url(#pa-bt)"/>
    <path d="M42 26 L58 24" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" fill="none"/>`),"Cheshire Cat":a(`cc`,`${r(`cc-fur`,`#e6a8ff`,`#b070dc`,`#6f3aa3`)}${r(`cc-ey`,`#f6ff9a`,`#c8e83a`,`#7fa51a`)}`,`<path d="M20 100 Q22 76 50 74 Q78 76 80 100 Z" fill="url(#cc-fur)"/>
    <path d="M28 98 Q32 86 42 80 M72 98 Q68 86 58 80 M50 100 L50 82" fill="none" stroke="#5a2a8a" stroke-width="2.4"/>
    <path d="M70 94 Q94 90 92 64 Q90 50 82 54 Q86 64 80 76" fill="none" stroke="#b070dc" stroke-width="7"/>
    <path d="M70 94 Q94 90 92 64 Q90 50 82 54" fill="none" stroke-width="1.5" stroke-opacity=".0"/>
    <path d="M22 44 L26 12 L46 28 Z M78 44 L74 12 L54 28 Z" fill="url(#cc-fur)"/>
    <path d="M27 36 L29 20 L40 29 Z M73 36 L71 20 L60 29 Z" fill="#ff9cc8" stroke="none"/>
    <ellipse cx="50" cy="54" rx="31" ry="25" fill="url(#cc-fur)"/>
    <path d="M42 32 L44 42 M50 30 L50 41 M58 32 L56 42 M22 52 L33 54 M24 62 L34 60 M78 52 L67 54 M76 62 L66 60" fill="none" stroke="#5a2a8a" stroke-width="2.6"/>
    <ellipse cx="36" cy="48" rx="8" ry="6.5" fill="url(#cc-ey)"/><ellipse cx="64" cy="48" rx="8" ry="6.5" fill="url(#cc-ey)"/>
    <ellipse cx="36" cy="48" rx="1.9" ry="5.6" fill="#0d0a14" stroke="none"/><ellipse cx="64" cy="48" rx="1.9" ry="5.6" fill="#0d0a14" stroke="none"/>
    <circle cx="33.4" cy="45.6" r="1.4" fill="#fff" stroke="none"/><circle cx="61.4" cy="45.6" r="1.4" fill="#fff" stroke="none"/>
    <path d="M28 41 Q36 37 44 42 M72 41 Q64 37 56 42" fill="none" stroke="#3a1a5a" stroke-width="1.8"/>
    <path d="M46 56 L54 56 L50 61 Z" fill="#ff7eb0" stroke-width="1.2"/>
    <path d="M22 60 Q50 98 78 60 Q50 76 22 60 Z" fill="#3a0f2a"/>
    <path d="M26 62 l2.6 6 2.6 -4.4 z M36 67.4 l2.6 6 2.6 -4.4 z M47 70.6 l2.6 6 2.6 -4.6 z M57 69.4 l2.6 5.4 2.4 -4.6 z M67 65 l2.4 4.8 2.2 -4.2 z" fill="#fff" stroke-width="1"/>
    <path d="M36 77 Q50 86 64 77" fill="none" stroke="#e8587a" stroke-width="2.4" stroke-opacity=".7"/>
    <path d="M10 56 L28 59 M10 64 L28 63 M90 56 L72 59 M90 64 L72 63" fill="none" stroke="#fff" stroke-width="1" stroke-opacity=".85"/>`),Alice:a(`al`,`${i(`al-hr`,`#ffeb8a`,`#d9a21b`)}${i(`al-dr`,`#7fc4ff`,`#2f6fc4`)}${i(`al-ap`,`#ffffff`,`#dfe3ee`)}`,`<path d="M22 44 Q10 82 24 96 Q50 88 76 96 Q90 82 78 44 Z" fill="url(#al-hr)"/>
    <path d="M10 100 Q14 80 50 78 Q86 80 90 100 Z" fill="url(#al-dr)"/>
    <path d="M30 100 L34 84 Q50 92 66 84 L70 100 Z" fill="url(#al-ap)"/>
    <path d="M38 80 Q50 88 62 80 L62 76 L38 76 Z" fill="#fff"/>
    <path d="M44 86 L50 92 L56 86" fill="none" stroke="#2f6fc4" stroke-width="1.6"/>
    <path d="M42 74 L42 82 Q50 86 58 82 L58 74 Z" fill="url(#al-sk)"/>
    ${s(`al`,{y:56,iris:`#3a86d6`,lips:`#d9647a`,brow:`#b8860b`})}
    <path d="M32 54 Q32 34 50 34 Q68 34 68 54 Q60 42 50 46 Q40 42 32 54 Z" fill="url(#al-hr)"/>
    <path d="M30 44 Q50 28 70 44" fill="none" stroke="#1d1530" stroke-width="3.5"/>
    <path d="M62 38 Q74 28 76 40 Q72 46 63 41 Z M62 38 Q74 52 70 54 Q62 50 62 38 Z" fill="#1d1530" stroke-width="1"/>
    <circle cx="62" cy="40" r="2" fill="#3a2a5e"/>`),"Eat Me":a(`ea`,`${i(`ea-ck`,`#f6d9a8`,`#c98f4a`)}${i(`ea-fr`,`#ffc2dc`,`#ee6fa6`)}${i(`ea-pl`,`#ffffff`,`#c9cfe0`)}`,`<ellipse cx="50" cy="90" rx="42" ry="8" fill="url(#ea-pl)"/>
    <ellipse cx="50" cy="88" rx="30" ry="4.5" fill="#e6e9f3" stroke="none"/>
    <path d="M16 56 L16 82 Q50 96 84 82 L84 56 Z" fill="url(#ea-ck)"/>
    <path d="M16 70 Q50 84 84 70" fill="none" stroke="#fff3c4" stroke-width="3"/>
    <path d="M16 56 Q50 70 84 56 Q50 30 16 56 Z" fill="url(#ea-fr)"/>
    <path d="M16 56 Q18 66 22 62 Q24 72 30 64 Q34 74 40 66 Q46 78 52 67 Q58 76 63 66 Q69 74 72 63 Q78 70 80 61 Q83 64 84 56 Q50 70 16 56 Z" fill="url(#ea-fr)"/>
    <path d="M26 52 Q40 44 52 44" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.5"/>
    <circle cx="36" cy="52" r="1.6" fill="#c2185b" stroke="none"/><circle cx="64" cy="50" r="1.6" fill="#c2185b" stroke="none"/><circle cx="50" cy="56" r="1.6" fill="#c2185b" stroke="none"/>
    <path d="M50 42 Q54 34 60 30" fill="none" stroke="#3e7d3a" stroke-width="2"/>
    <circle cx="50" cy="43" r="6" fill="#e8173f"/><circle cx="48" cy="41" r="1.8" fill="#fff" stroke="none" opacity=".8"/>
    <g transform="rotate(-5 50 74)"><rect x="26" y="64" width="48" height="19" rx="3" fill="#fff8e1"/>
    <rect x="29" y="67" width="42" height="13" rx="2" fill="none" stroke="#c98f4a" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="50" y="77.6" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="10" fill="#7b3a1d" stroke="none" letter-spacing=".5">EAT ME</text></g>`),"Drink Me":a(`dk`,`${i(`dk-gl`,`#e9f7ff`,`#a8d4ee`)}${i(`dk-lq`,`#c06bff`,`#5a1fa8`)}${i(`dk-ck`,`#c98f4a`,`#7a4b1f`)}`,`<ellipse cx="50" cy="94" rx="30" ry="5" fill="#000" opacity=".25" stroke="none" filter="url(#dk-b)"/>
    <path d="M42 36 Q16 44 16 70 Q16 94 50 94 Q84 94 84 70 Q84 44 58 36 Z" fill="url(#dk-gl)" fill-opacity=".85"/>
    <path d="M42 36 L42 16 L58 16 L58 36 Z" fill="url(#dk-gl)" fill-opacity=".85"/>
    <path d="M18 62 Q50 54 82 62 Q86 94 50 94 Q14 94 18 62 Z" fill="url(#dk-lq)" stroke="none"/>
    <path d="M18 62 Q34 58 50 62 Q66 66 82 62" fill="none" stroke="#e6c6ff" stroke-width="1.6" stroke-opacity=".8"/>
    <circle cx="30" cy="80" r="2.6" fill="#e6c6ff" opacity=".7" stroke="none"/><circle cx="70" cy="76" r="1.9" fill="#e6c6ff" opacity=".7" stroke="none"/><circle cx="64" cy="86" r="1.5" fill="#e6c6ff" opacity=".7" stroke="none"/>
    <path d="M24 56 Q26 48 36 44" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.6"/>
    <path d="M45 20 L45 34" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
    <rect x="43" y="6" width="14" height="12" rx="2.5" fill="url(#dk-ck)"/>
    <path d="M44 38 Q36 42 31 44" fill="none" stroke="#c98f4a" stroke-width="1.2"/>
    <g transform="rotate(-6 50 72)"><rect x="27" y="63" width="46" height="20" rx="3" fill="#fff8e1"/>
    <rect x="30" y="66" width="40" height="14" rx="2" fill="none" stroke="#5a1fa8" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="50" y="76.4" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="7.4" fill="#4a1a8a" stroke="none" letter-spacing=".2">DRINK ME</text></g>`),Witch:a(`wi`,`${r(`wi-gs`,`#d4ebb0`,`#9ccc65`,`#6a9a3a`)}${i(`wi-hat`,`#54406e`,`#1c1229`)}${i(`wi-cl`,`#3a2c52`,`#140d20`)}${i(`wi-hr`,`#463457`,`#1c1229`)}`,`<path d="M10 100 Q14 77 50 75 Q86 77 90 100 Z" fill="url(#wi-cl)"/>
    <path d="M24 46 Q14 82 28 94 Q50 86 72 94 Q86 82 76 46 Z" fill="url(#wi-hr)"/>
    ${s(`wi`,{y:59,skin:`wi-gs`,iris:`#d4a017`,lips:`#8e3a6b`,brow:`#2a1b3d`})}
    <circle cx="57.5" cy="65" r="1.5" fill="#5d7c2e" stroke-width=".8"/>
    <path d="M33 46 Q42 52 50 47 Q58 52 67 46" fill="none" stroke="#2a1b3d" stroke-width="2"/>
    <path d="M30 43 Q44 30 48 14 Q52 5 63 8 Q56 15 58 28 Q62 37 70 43 Z" fill="url(#wi-hat)"/>
    <path d="M44 20 Q48 14 50 10" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.5"/>
    <ellipse cx="50" cy="44" rx="35" ry="8" fill="url(#wi-hat)"/>
    <path d="M18 43 Q28 38 40 41" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="1.5"/>
    <path d="M34 40 Q50 45 66 40 L65 34 Q50 39 35 34 Z" fill="#7b1fa2"/>
    <rect x="46" y="35.5" width="8" height="6" rx="1" fill="#f2c230" stroke-width="1"/>`),Wizard:a(`wz`,`${i(`wz-rb`,`#5367d6`,`#1e2a78`)}${i(`wz-hat`,`#5a6fe0`,`#1e2a78`)}${i(`wz-bd`,`#ffffff`,`#d4d8e0`)}`,`<path d="M10 100 Q14 78 50 76 Q86 78 90 100 Z" fill="url(#wz-rb)"/>
    <path d="M30 100 Q50 84 70 100" fill="none" stroke="#ffd54f" stroke-width="2"/>
    ${s(`wz`,{y:52,rx:17,ry:18,mouth:!1,iris:`#6b8fb0`,brow:`#e9edf5`})}
    <path d="M28 54 Q22 88 50 99 Q78 88 72 54 Q64 66 50 63 Q36 66 28 54 Z" fill="url(#wz-bd)"/>
    <path d="M38 70 Q36 84 44 92 M50 70 Q50 84 50 94 M62 70 Q64 84 56 92 M33 62 Q31 76 37 84 M67 62 Q69 76 63 84" fill="none" stroke="#aeb6c6" stroke-width="1"/>
    <path d="M36 62 Q42 57 50 61 Q58 57 64 62 Q58 68 50 65 Q42 68 36 62 Z" fill="#f4f6fa"/>
    <path d="M28 41 Q41 22 45 4 Q64 14 72 41 Z" fill="url(#wz-hat)"/>
    <ellipse cx="50" cy="41" rx="34" ry="8" fill="url(#wz-hat)"/>
    <path d="M17 41 Q27 36 39 39" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.5"/>
    <path d="M55 22 l2 5 5.4 .5 -4.2 3.6 1.3 5.4 -4.5 -3 -4.5 3 1.3 -5.4 -4.2 -3.6 5.4 -.5 z" fill="#ffd600" stroke-width="1"/>
    <path d="M40 35 l1 2.4 2.6 .3 -2 1.7 .6 2.6 -2.2 -1.4 -2.2 1.4 .6 -2.6 -2 -1.7 2.6 -.3 z" fill="#ffd600" stroke-width=".8"/>`),Elf:a(`el`,`${i(`el-hr`,`#ffe27a`,`#d9a21b`)}${i(`el-hat`,`#5fbf5f`,`#1f6b2c`)}${i(`el-tn`,`#4caf50`,`#1f6b2c`)}`,`<path d="M12 100 Q16 80 50 78 Q84 80 88 100 Z" fill="url(#el-tn)"/>
    <path d="M34 80 L50 92 L66 80" fill="none" stroke="#ffd54f" stroke-width="2"/>
    <path d="M24 44 Q12 80 26 96 Q50 84 74 96 Q88 80 76 44 Z" fill="url(#el-hr)"/>
    <path d="M33 56 L5 40 L34 70 Z" fill="url(#el-sk)"/><path d="M30 57 L12 46 L32 66 Z" fill="#f0a98a" stroke="none" opacity=".7"/>
    <path d="M67 56 L95 40 L66 70 Z" fill="url(#el-sk)"/><path d="M70 57 L88 46 L68 66 Z" fill="#f0a98a" stroke="none" opacity=".7"/>
    ${s(`el`,{y:58,iris:`#2e9e5b`,lips:`#cf6a6a`,brow:`#b8860b`})}
    <path d="M31 52 Q40 36 50 42 Q62 36 69 52 Q60 46 52 49 Q42 45 31 52 Z" fill="url(#el-hr)"/>
    <path d="M32 47 Q38 16 66 12 Q58 28 70 47 Q50 38 32 47 Z" fill="url(#el-hat)"/>
    <path d="M64 14 Q86 4 92 24 Q80 14 70 25 Z" fill="#e64a4a" stroke-width="1.2"/>
    <path d="M70 19 Q80 14 86 17" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width=".8"/>`),"Slime Monster":a(`sl`,`${r(`sl-bd`,`#b9f6a3`,`#5fce5f`,`#1f8a3a`)}${r(`sl-ey`,`#ffffff`,`#ffffff`,`#cfe8cf`)}`,`<ellipse cx="50" cy="93" rx="38" ry="6" fill="#1f8a3a" opacity=".35" stroke="none" filter="url(#sl-b)"/>
    <path d="M9 88 Q2 48 32 28 Q50 18 68 28 Q98 48 91 88 Q87 97 78 90 Q74 101 64 90 Q56 99 48 90 Q40 101 32 90 Q22 97 9 88 Z" fill="url(#sl-bd)"/>
    <path d="M22 44 Q28 32 40 29" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3.5"/>
    <ellipse cx="78" cy="68" rx="3" ry="4.5" fill="#fff" opacity=".35" stroke="none"/>
    <circle cx="26" cy="74" r="3.5" fill="#bdf5b0" opacity=".6" stroke-width=".8"/><circle cx="72" cy="78" r="2.4" fill="#bdf5b0" opacity=".6" stroke-width=".8"/><circle cx="82" cy="52" r="2" fill="#bdf5b0" opacity=".6" stroke-width=".8"/>
    <circle cx="35" cy="52" r="11" fill="url(#sl-ey)"/><circle cx="65" cy="48" r="13" fill="url(#sl-ey)"/>
    <circle cx="37" cy="54" r="5.5" fill="#6a2fa0" stroke="none"/><circle cx="63" cy="50" r="6.5" fill="#6a2fa0" stroke="none"/>
    <circle cx="37" cy="54" r="3" fill="#0d0a14" stroke="none"/><circle cx="63" cy="50" r="3.6" fill="#0d0a14" stroke="none"/>
    <circle cx="39" cy="52" r="1.6" fill="#fff" stroke="none"/><circle cx="65.4" cy="47.4" r="1.9" fill="#fff" stroke="none"/>
    <path d="M30 72 Q50 94 70 72 Q50 76 30 72 Z" fill="#3a0f2a"/>
    <path d="M37 76 Q50 90 63 76 Q50 80 37 76 Z" fill="#e8587a" stroke="none"/>
    <path d="M36 73 l3 5 3 -4.5 z M56 73.5 l3 4.5 3 -5 z" fill="#fff" stroke-width="1"/>`),Fairy:a(`fa`,`${i(`fa-wg`,`#e1f5fe`,`#81d4fa`)}${i(`fa-wl`,`#f3e5f5`,`#ce93d8`)}${i(`fa-dr`,`#ffb3cf`,`#e0568c`)}${i(`fa-hr`,`#ffe27a`,`#e0a41a`)}`,`<g opacity=".92"><path d="M46 52 Q20 8 6 30 Q8 58 46 60 Z" fill="url(#fa-wg)"/><path d="M54 52 Q80 8 94 30 Q92 58 54 60 Z" fill="url(#fa-wg)"/>
    <path d="M46 62 Q22 62 14 84 Q36 92 46 68 Z" fill="url(#fa-wl)"/><path d="M54 62 Q78 62 86 84 Q64 92 54 68 Z" fill="url(#fa-wl)"/></g>
    <path d="M44 54 Q26 30 12 32 M44 56 Q28 46 10 38 M52 54 L66 40 M56 56 Q74 44 90 36" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width=".9"/>
    <path d="M38 78 Q50 74 62 78 L76 99 L24 99 Z" fill="url(#fa-dr)"/>
    <path d="M30 92 Q50 86 70 92" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>
    <circle cx="50" cy="30" r="9" fill="url(#fa-hr)"/>
    <path d="M33 56 Q30 36 50 36 Q70 36 67 56 Q58 44 50 47 Q42 44 33 56 Z" fill="url(#fa-hr)"/>
    ${s(`fa`,{y:56,rx:16,ry:17,iris:`#8e44ad`,lips:`#e0568c`,brow:`#b8860b`})}
    <path d="M40 38 l2 -6 2 6 M56 38 l2 -6 2 6" fill="#ffd54f" stroke-width="1"/>
    <path d="M84 10 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" fill="#fff59d" stroke-width="1"/>
    <path d="M12 70 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 z" fill="#fff59d" stroke-width=".8"/>`),Jester:a(`je`,`${i(`je-r`,`#ff6b5e`,`#b3201a`)}${i(`je-y`,`#ffe97a`,`#d9a400`)}${i(`je-p`,`#a07be0`,`#512e96`)}${r(`je-bell`,`#fff2a0`,`#f2b200`,`#a87400`)}`,`<path d="M12 100 Q16 78 50 76 L50 100 Z" fill="url(#je-r)"/>
    <path d="M88 100 Q84 78 50 76 L50 100 Z" fill="url(#je-y)"/>
    <path d="M42 74 L42 86 Q50 92 58 86 L58 74 Z" fill="url(#je-sk)"/>
    <path d="M16 86 L30 100 L50 88 L70 100 L84 86 L78 100 L22 100 Z" fill="url(#je-y)"/>
    <path d="M30 100 L40 90 L50 100 M50 100 L60 90 L70 100" fill="none" stroke="#b3201a" stroke-width="1.4"/>
    <path d="M26 47 Q2 44 6 14 Q26 18 46 38 Z" fill="url(#je-r)"/>
    <path d="M74 47 Q98 44 94 14 Q74 18 54 38 Z" fill="url(#je-y)"/>
    <circle cx="6" cy="14" r="5.5" fill="url(#je-bell)"/><circle cx="94" cy="14" r="5.5" fill="url(#je-bell)"/>
    <circle cx="4.4" cy="12.4" r="1.4" fill="#fff" stroke="none"/><circle cx="92.4" cy="12.4" r="1.4" fill="#fff" stroke="none"/>
    ${s(`je`,{y:62,rx:18,ry:19,iris:`#3b8f5a`,lips:`#d62b2b`,brow:`#2b1d3a`})}
    <path d="M62 56 l3 4 -3 4 -3 -4 z" fill="#512e96" stroke-width=".8"/>
    <circle cx="50" cy="60" r="2.4" fill="#e63b3b" stroke-width=".8"/>
    <path d="M30 51 Q50 20 70 51 Z" fill="url(#je-p)"/>
    <ellipse cx="50" cy="50" rx="21" ry="5.5" fill="url(#je-p)"/>
    <path d="M36 40 Q42 30 48 27" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1.5"/>
    <circle cx="50" cy="26" r="3.4" fill="url(#je-bell)" stroke-width="1"/>`),Queen:a(`qu`,`${i(`qu-hr`,`#9a5d3f`,`#4a2a1c`)}${i(`qu-dr`,`#e8447c`,`#8e1146`)}${i(`qu-cr`,`#fff0a0`,`#e0a400`)}${r(`qu-fur`,`#ffffff`,`#f2f0f5`,`#cfcbd8`)}`,`<path d="M22 42 Q12 90 30 99 L70 99 Q88 90 78 42 Z" fill="url(#qu-hr)"/>
    <path d="M8 100 Q12 80 50 78 Q88 80 92 100 Z" fill="url(#qu-dr)"/>
    <path d="M22 83 Q50 98 78 83 Q74 92 50 100 Q26 92 22 83 Z" fill="url(#qu-fur)"/>
    <circle cx="36" cy="90" r="1.1" fill="${e}" stroke="none"/><circle cx="50" cy="94" r="1.1" fill="${e}" stroke="none"/><circle cx="64" cy="90" r="1.1" fill="${e}" stroke="none"/>
    ${s(`qu`,{y:58,iris:`#3a7a4a`,lips:`#d11f4f`,brow:`#4a2a1c`})}
    <path d="M44 80 Q50 86 56 80" fill="none" stroke="#f4f0e0" stroke-width="1.6"/><circle cx="50" cy="86" r="2" fill="#e8447c" stroke-width=".8"/>
    <path d="M32 50 Q50 33 68 50 Q58 43 50 46 Q42 43 32 50 Z" fill="url(#qu-hr)"/>
    <path d="M30 40 L32 15 L41 28 L50 9 L59 28 L68 15 L70 40 Z" fill="url(#qu-cr)"/>
    <path d="M31 40 Q50 45 69 40 L69 36 Q50 41 31 36 Z" fill="#e0a400"/>
    <circle cx="50" cy="30" r="3.4" fill="#e8173f" stroke-width="1"/><circle cx="40" cy="36" r="2.2" fill="#2d7bd8" stroke-width=".8"/><circle cx="60" cy="36" r="2.2" fill="#2d7bd8" stroke-width=".8"/>
    <circle cx="32" cy="15" r="1.8" fill="#fff" stroke-width=".8"/><circle cx="68" cy="15" r="1.8" fill="#fff" stroke-width=".8"/><circle cx="50" cy="9" r="1.8" fill="#fff" stroke-width=".8"/>
    <path d="M38 22 L41 29" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>`),Unicorn:a(`un`,`${r(`un-hd`,`#ffffff`,`#f4f1fa`,`#c9c3dc`)}${i(`un-ma`,`#ff7eb6`,`#7e57c2`)}${i(`un-ma2`,`#7fd3ff`,`#ff7eb6`)}${i(`un-hn`,`#fff3a8`,`#e0a400`)}`,`<path d="M24 34 Q-2 56 12 94 Q26 84 32 66 Z" fill="url(#un-ma)"/>
    <path d="M76 34 Q102 56 88 94 Q74 84 68 66 Z" fill="url(#un-ma)"/>
    <path d="M18 56 Q10 72 16 86 M82 56 Q90 72 84 86" fill="none" stroke="url(#un-ma2)" stroke-width="3"/>
    <path d="M32 34 L26 8 L46 24 Z M68 34 L74 8 L54 24 Z" fill="url(#un-hd)"/>
    <path d="M32 30 L29 14 L40 24 Z M68 30 L71 14 L60 24 Z" fill="#f6b3c9" stroke="none"/>
    <path d="M30 56 Q28 30 50 26 Q72 30 70 56 Q70 74 62 86 Q50 96 38 86 Q30 74 30 56 Z" fill="url(#un-hd)"/>
    <path d="M50 2 L42 34 L58 34 Z" fill="url(#un-hn)"/>
    <path d="M46.6 18 L53.4 14 M44.8 26 L55.6 21.6 M43.4 32 L57 28" stroke-width="1.2" fill="none"/>
    <path d="M36 34 Q50 24 64 34 Q58 52 50 44 Q42 52 36 34 Z" fill="url(#un-ma)"/>
    <ellipse cx="50" cy="78" rx="14" ry="10" fill="#f8c6d8"/>
    <ellipse cx="44" cy="78" rx="2.4" ry="3" fill="#7a3a55" stroke="none"/><ellipse cx="56" cy="78" rx="2.4" ry="3" fill="#7a3a55" stroke="none"/>
    <path d="M44 86 Q50 89 56 86" fill="none" stroke-width="1.1"/>
    <circle cx="40" cy="60" r="4.8" fill="#3a1f5e"/><circle cx="60" cy="60" r="4.8" fill="#3a1f5e"/>
    <circle cx="41.6" cy="58.4" r="1.7" fill="#fff" stroke="none"/><circle cx="61.6" cy="58.4" r="1.7" fill="#fff" stroke="none"/>
    <path d="M34 56 Q40 52 45 56 M66 56 Q60 52 55 56" fill="none" stroke-width="1.6"/>
    <ellipse cx="34" cy="68" rx="3.4" ry="2.4" fill="#ff9db9" opacity=".5" stroke="none" filter="url(#un-b)"/><ellipse cx="66" cy="68" rx="3.4" ry="2.4" fill="#ff9db9" opacity=".5" stroke="none" filter="url(#un-b)"/>`),Dragon:a(`dr`,`${r(`dr-hd`,`#8fdc6a`,`#3f9a44`,`#1b5a2a`)}${r(`dr-sn`,`#a8e888`,`#5fb85a`,`#2c7a38`)}${i(`dr-hn`,`#fff3d1`,`#b9a77a`)}${i(`dr-fn`,`#ff9a5c`,`#c4391b`)}`,`<path d="M26 56 Q4 40 4 62 Q10 72 28 68 Z M74 56 Q96 40 96 62 Q90 72 72 68 Z" fill="url(#dr-fn)"/>
    <path d="M14 52 L26 60 M12 60 L26 64 M86 52 L74 60 M88 60 L74 64" stroke-width="1" fill="none" stroke-opacity=".6"/>
    <path d="M32 38 Q20 14 10 6 Q10 28 24 48 Z M68 38 Q80 14 90 6 Q90 28 76 48 Z" fill="url(#dr-hn)"/>
    <path d="M38 33 L41 18 L47 30 L50 14 L53 30 L59 18 L62 33 Z" fill="#2c7a38"/>
    <ellipse cx="50" cy="54" rx="29" ry="25" fill="url(#dr-hd)"/>
    <path d="M30 46 q2.5 -3 5 0 M40 40 q2.5 -3 5 0 M55 40 q2.5 -3 5 0 M65 46 q2.5 -3 5 0 M34 58 q2.5 -3 5 0 M61 58 q2.5 -3 5 0 M24 54 q2.5 -3 5 0 M71 54 q2.5 -3 5 0" fill="none" stroke="#1b5a2a" stroke-width="1" stroke-opacity=".6"/>
    <ellipse cx="50" cy="74" rx="20" ry="14" fill="url(#dr-sn)"/>
    <path d="M33 74 Q50 82 67 74" fill="none" stroke-width="1" stroke-opacity=".5"/>
    <ellipse cx="43" cy="72" rx="2.4" ry="1.8" fill="#143d1d" stroke="none"/><ellipse cx="57" cy="72" rx="2.4" ry="1.8" fill="#143d1d" stroke="none"/>
    <path d="M26 44 Q36 36 46 44 M74 44 Q64 36 54 44" fill="none" stroke="#1b5a2a" stroke-width="2.4"/>
    <ellipse cx="36" cy="49" rx="7.5" ry="6" fill="#ffd24a"/><ellipse cx="64" cy="49" rx="7.5" ry="6" fill="#ffd24a"/>
    <ellipse cx="36" cy="49" rx="1.9" ry="5.2" fill="#0d0a14" stroke="none"/><ellipse cx="64" cy="49" rx="1.9" ry="5.2" fill="#0d0a14" stroke="none"/>
    <circle cx="33.4" cy="46.6" r="1.3" fill="#fff" stroke="none"/><circle cx="61.4" cy="46.6" r="1.3" fill="#fff" stroke="none"/>
    <path d="M37 84 l2.6 6.5 2.6 -6.5 z M57.8 84 l2.6 6.5 2.6 -6.5 z" fill="#fffbe8" stroke-width="1.1"/>
    <path d="M44 22 q-3 -6 1 -11 M56 22 q3 -6 -1 -11" fill="none" stroke="#fff" stroke-opacity=".0"/>`),"Black Bear":a(`au1`,`${r(`au1-fr`,`#7a6a62`,`#3e322e`,`#15100e`)}${r(`au1-mz`,`#f0d4aa`,`#c8a070`,`#8a6a44`)}`,`<ellipse cx="50" cy="95" rx="32" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#au1-b)"/>
    <ellipse cx="50" cy="90" rx="36" ry="14" fill="url(#au1-fr)"/>
    <circle cx="25" cy="27" r="12" fill="url(#au1-fr)"/><circle cx="75" cy="27" r="12" fill="url(#au1-fr)"/>
    <circle cx="25" cy="28" r="6" fill="#b08a6a" stroke-width="1"/><circle cx="75" cy="28" r="6" fill="#b08a6a" stroke-width="1"/>
    <ellipse cx="50" cy="55" rx="33" ry="31" fill="url(#au1-fr)"/>
    <ellipse cx="50" cy="68" rx="17" ry="13" fill="url(#au1-mz)"/>
    <ellipse cx="50" cy="61" rx="6.4" ry="4.4" fill="#1a1210"/><ellipse cx="48" cy="59.6" rx="2" ry="1.2" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 65 V71 M50 71 Q44 77 39 72 M50 71 Q56 77 61 72" fill="none" stroke-width="1.5"/>
    <circle cx="37" cy="49" r="3.8" fill="#0d0a14"/><circle cx="63" cy="49" r="3.8" fill="#0d0a14"/>
    <circle cx="38.2" cy="47.8" r="1.2" fill="#fff" stroke="none"/><circle cx="64.2" cy="47.8" r="1.2" fill="#fff" stroke="none"/>
    <path d="M30 40 Q37 36 44 40 M56 40 Q63 36 70 40" fill="none" stroke="#1a1210" stroke-width="1.6"/>
    <path d="M26 44 Q34 32 50 30" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="3.4"/>`),"Pumpkin Pie":a(`au2`,`${r(`au2-cr`,`#f6d896`,`#d49a4a`,`#8a5a22`)}${r(`au2-fl`,`#ffb85a`,`#e0791a`,`#9a4a08`)}`,`<ellipse cx="50" cy="90" rx="42" ry="5" fill="#000" opacity=".28" stroke="none" filter="url(#au2-b)"/>
    <path d="M10 56 L10 72 Q50 96 90 72 L90 56 Z" fill="url(#au2-cr)"/>
    <path d="M14 62 Q50 84 86 62 M14 68 Q50 90 86 68" fill="none" stroke="#8a5a22" stroke-width="1" stroke-opacity=".5"/>
    <ellipse cx="50" cy="56" rx="40" ry="18" fill="url(#au2-cr)"/>
    <ellipse cx="50" cy="56" rx="30" ry="12.4" fill="url(#au2-fl)"/>
    <g fill="none" stroke="#8a5a22" stroke-width="1.2" stroke-opacity=".7"><path d="M14 52 l4 3 M22 44 l4 4 M34 40 l2 5 M50 38 l0 5 M66 40 l-2 5 M78 44 l-4 4 M86 52 l-4 3"/></g>
    <g stroke="none" fill="#8a3a0a" opacity=".6"><circle cx="30" cy="58" r="1"/><circle cx="40" cy="62" r="1"/><circle cx="62" cy="62" r="1"/><circle cx="72" cy="57" r="1"/><circle cx="52" cy="64" r="1"/></g>
    <ellipse cx="50" cy="50" rx="13" ry="7" fill="#fffaf0"/><ellipse cx="50" cy="45" rx="9" ry="5" fill="#fff"/><ellipse cx="50" cy="40.4" rx="5" ry="3.6" fill="#fffaf0"/><path d="M50 36 q2 -4 0 -6" fill="none" stroke="#fff" stroke-width="2.2"/>
    <path d="M44 48 Q48 44 50 41" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2"/>
    <g stroke="none" fill="#8a3a0a" opacity=".7"><circle cx="46" cy="44" r=".9"/><circle cx="54" cy="46" r=".9"/><circle cx="51" cy="49" r=".9"/></g>`),Chipmunk:a(`au3`,`${r(`au3-fr`,`#e8ac6a`,`#bf7e42`,`#6e4220`)}${r(`au3-bl`,`#fff3dc`,`#f0d6aa`,`#c8a070`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#au3-b)"/>
    <path d="M70 84 Q96 76 92 46 Q88 22 72 22 Q82 40 76 56 Q72 70 62 76 Z" fill="url(#au3-fr)"/>
    <path d="M86 34 Q90 50 82 64 M82 28 Q86 40 82 52" fill="none" stroke="#3a2010" stroke-width="2.2" stroke-opacity=".6"/>
    <ellipse cx="46" cy="72" rx="24" ry="22" fill="url(#au3-fr)"/><ellipse cx="46" cy="76" rx="14" ry="15" fill="url(#au3-bl)" stroke-width="1"/>
    <path d="M30 60 Q24 72 30 86 M62 60 Q68 72 62 86" fill="none" stroke="#3a2010" stroke-width="2.4" stroke-opacity=".55"/>
    <ellipse cx="22" cy="86" rx="8" ry="4.4" fill="url(#au3-fr)"/><ellipse cx="62" cy="88" rx="8" ry="4.4" fill="url(#au3-fr)"/>
    <circle cx="30" cy="26" r="7.6" fill="url(#au3-fr)"/><circle cx="62" cy="26" r="7.6" fill="url(#au3-fr)"/><circle cx="30" cy="27" r="3.8" fill="#e8a0a0" stroke-width="1"/><circle cx="62" cy="27" r="3.8" fill="#e8a0a0" stroke-width="1"/>
    <ellipse cx="46" cy="42" rx="22" ry="19" fill="url(#au3-fr)"/>
    <ellipse cx="29" cy="48" rx="9" ry="8" fill="url(#au3-bl)" stroke-width="1"/><ellipse cx="63" cy="48" rx="9" ry="8" fill="url(#au3-bl)" stroke-width="1"/>
    <path d="M46 24 V34 M38 25 Q36 32 38 36 M54 25 Q56 32 54 36" fill="none" stroke="#3a2010" stroke-width="2.2" stroke-opacity=".6"/>
    <ellipse cx="46" cy="49" rx="4" ry="3" fill="#2a1a14"/><path d="M46 52 V55 M46 55 Q42 58 40 55 M46 55 Q50 58 52 55" fill="none" stroke-width="1.2"/>
    <circle cx="37" cy="42" r="3.2" fill="#0d0a14"/><circle cx="55" cy="42" r="3.2" fill="#0d0a14"/><circle cx="38" cy="41" r="1" fill="#fff" stroke="none"/><circle cx="56" cy="41" r="1" fill="#fff" stroke="none"/>
    <ellipse cx="46" cy="68" rx="8" ry="6" fill="#b87a38"/><path d="M42 64 Q46 60 50 64 Z" fill="#7a4a20" stroke-width="1"/><path d="M46 60 V63" stroke-width="1.2" fill="none"/>`),Cornucopia:a(`au4`,`${i(`au4-bk`,`#e8c27a`,`#9a6a2a`)}${r(`au4-ap`,`#ff9a9a`,`#e0202a`,`#7a0612`)}${r(`au4-pk`,`#ffb454`,`#e8761a`,`#8a3a06`)}${r(`au4-gr`,`#b88aff`,`#7a3ad8`,`#3a1488`)}`,`<ellipse cx="50" cy="94" rx="40" ry="3.4" fill="#000" opacity=".26" stroke="none" filter="url(#au4-b)"/>
    <path d="M6 28 Q4 14 16 14 Q10 20 14 28 Q34 40 52 54 Q68 66 90 66 L88 92 Q50 98 28 70 Q10 50 6 28 Z" fill="url(#au4-bk)"/>
    <path d="M14 34 Q34 48 50 66 M10 28 Q28 54 40 78 M22 24 Q40 36 62 56 M30 22 Q46 34 66 50" fill="none" stroke="#6a4414" stroke-width="1.1" stroke-opacity=".6"/>
    <ellipse cx="86" cy="66" rx="10" ry="26" fill="#8a5a1e"/><ellipse cx="85" cy="66" rx="6" ry="22" fill="#4a2e0c" stroke="none"/>
    <path d="M70 62 Q52 42 40 52 Q34 64 44 76" fill="none" stroke="none"/>
    <circle cx="64" cy="56" r="11" fill="url(#au4-ap)"/><path d="M60 50 Q58 52 58 56" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.4"/><path d="M64 46 q1 -5 4 -6" fill="none" stroke="#4a2a10" stroke-width="1.6"/>
    <ellipse cx="86" cy="42" rx="12" ry="10" fill="url(#au4-pk)"/><path d="M80 34 Q78 42 80 50 M86 33 Q86 42 86 51 M92 34 Q94 42 92 50" fill="none" stroke="#8a3a06" stroke-width="1.1" stroke-opacity=".6"/><path d="M85 33 q2 -5 5 -5" fill="none" stroke="#4a7a2a" stroke-width="2.4"/>
    <g fill="url(#au4-gr)"><circle cx="76" cy="84" r="4.6"/><circle cx="84" cy="86" r="4.6"/><circle cx="68" cy="82" r="4.6"/><circle cx="80" cy="92" r="4.6"/><circle cx="72" cy="90" r="4.6"/></g>
    <path d="M74 76 q2 -5 6 -6" fill="none" stroke="#4a7a2a" stroke-width="1.8"/>
    <path d="M56 70 Q70 62 80 68 Q70 78 56 70 Z" fill="#f2c438"/><path d="M60 70 L78 68 M64 66 L66 73 M70 65 L72 72" fill="none" stroke="#a87a10" stroke-width="1"/>
    <path d="M52 62 Q60 74 74 74 Q66 80 56 74 Z" fill="#58bd4c" stroke-width="1.2"/>`),Scarecrow:a(`au5`,`${r(`au5-bu`,`#f0d494`,`#cfa860`,`#8a6428`)}${i(`au5-st`,`#f6dc6a`,`#c89a1a`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.4" fill="#000" opacity=".26" stroke="none" filter="url(#au5-b)"/>
    <rect x="46" y="70" width="8" height="26" rx="2" fill="#7a5028"/>
    <path d="M8 66 L92 66" stroke="#7a5028" stroke-width="5"/>
    <path d="M12 60 q-8 4 -6 12 M16 62 q-8 6 -6 14 M88 60 q8 4 6 12 M84 62 q8 6 6 14" fill="none" stroke="url(#au5-st)" stroke-width="2.4"/>
    <path d="M24 62 L76 62 L72 90 L28 90 Z" fill="#c0392b"/><path d="M34 62 V90 M44 62 V90 M56 62 V90 M66 62 V90 M24 72 H76 M26 82 H74" stroke="#7a1a12" stroke-width="1" stroke-opacity=".55" fill="none"/>
    <rect x="48" y="74" width="12" height="9" rx="1" fill="#6aa0d8" stroke-width="1"/><path d="M50 76 l8 5" stroke-width=".8" stroke="#2a4a7a"/>
    <path d="M26 44 q-12 2 -14 10 M28 48 q-12 6 -12 14 M74 44 q12 2 14 10 M72 48 q12 6 12 14" fill="none" stroke="url(#au5-st)" stroke-width="2.6"/>
    <circle cx="50" cy="44" r="19" fill="url(#au5-bu)"/>
    <path d="M32 50 Q50 66 68 50" fill="none" stroke="none"/>
    <circle cx="42" cy="42" r="3.4" fill="#2a1a10"/><circle cx="58" cy="42" r="3.4" fill="#2a1a10"/><circle cx="43" cy="41" r="1" fill="#fff" stroke="none"/><circle cx="59" cy="41" r="1" fill="#fff" stroke="none"/>
    <path d="M40 54 Q50 62 60 54" fill="none" stroke="#2a1a10" stroke-width="1.6"/><path d="M42 54 l-1 4 M46 57 l0 4 M50 58 l0 4 M54 57 l0 4 M58 54 l1 4" stroke="#2a1a10" stroke-width="1.2" fill="none"/>
    <path d="M60 36 l7 4 -3 5 z" fill="#8aa06a" stroke-width="1"/><path d="M62 38 l3 2" stroke="#2a1a10" stroke-width=".8" fill="none"/>
    <ellipse cx="50" cy="32" rx="30" ry="6" fill="url(#au5-st)"/><path d="M34 31 Q34 10 50 10 Q66 10 66 31 Z" fill="url(#au5-st)"/><path d="M34 28 Q50 34 66 28" fill="none" stroke="#7a3a1a" stroke-width="4"/>
    <path d="M26 33 l-6 3 M30 35 l-6 5 M74 33 l6 3 M70 35 l6 5 M40 12 l-2 -4 M50 10 l0 -5 M60 12 l2 -4" stroke="#c89a1a" stroke-width="1.6" fill="none"/>
    <path d="M32 22 Q36 12 46 10" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4"/>`),"Autumn Cat":a(`au6`,`${r(`au6-fr`,`#ffcc8a`,`#e88a2a`,`#9a4a0a`)}${r(`au6-lf`,`#ff8a4a`,`#d8321a`,`#7a1008`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.4" fill="#000" opacity=".26" stroke="none" filter="url(#au6-b)"/>
    <ellipse cx="50" cy="86" rx="28" ry="14" fill="url(#au6-fr)"/>
    <path d="M18 38 L16 12 L38 26 Z M82 38 L84 12 L62 26 Z" fill="url(#au6-fr)"/><path d="M22 32 L21 19 L33 27 Z M78 32 L79 19 L67 27 Z" fill="#f4a4a4" stroke-width="1"/>
    <ellipse cx="50" cy="52" rx="34" ry="29" fill="url(#au6-fr)"/>
    <path d="M42 24 V32 M50 22 V32 M58 24 V32 M18 52 H28 M20 60 L29 58 M82 52 H72 M80 60 L71 58" fill="none" stroke="#7a3a08" stroke-width="2.2" stroke-opacity=".6"/>
    <ellipse cx="50" cy="62" rx="14" ry="10" fill="#fff2dc" stroke-width="1"/>
    <path d="M46 56 Q50 60 54 56 Q50 63 46 56 Z" fill="#e87a8a" stroke-width="1"/><path d="M50 60 V65 M50 65 Q45 69 41 66 M50 65 Q55 69 59 66" fill="none" stroke-width="1.3"/>
    <path d="M34 58 L10 54 M34 62 L12 66 M66 58 L90 54 M66 62 L88 66" fill="none" stroke="#fff" stroke-width="1.1" stroke-opacity=".9"/>
    <ellipse cx="37" cy="46" rx="5.6" ry="6.4" fill="#cfee6a"/><ellipse cx="63" cy="46" rx="5.6" ry="6.4" fill="#cfee6a"/><ellipse cx="37" cy="46" rx="2" ry="5.2" fill="#0d0a14" stroke="none"/><ellipse cx="63" cy="46" rx="2" ry="5.2" fill="#0d0a14" stroke="none"/>
    <circle cx="38.6" cy="43.6" r="1.4" fill="#fff" stroke="none"/><circle cx="64.6" cy="43.6" r="1.4" fill="#fff" stroke="none"/>
    <path d="M50 8 L56 16 L64 12 L60 22 L70 24 L60 30 L62 38 L52 34 L50 44 L48 34 L38 38 L40 30 L30 24 L40 22 L36 12 L44 16 Z" transform="rotate(-14 50 26) translate(2 -4) scale(.82)" fill="url(#au6-lf)" stroke-width="1.2"/>
    <path d="M50 12 V36" transform="rotate(-14 50 26) translate(2 -4) scale(.82)" stroke="#5a1006" stroke-width="1" fill="none"/>`),"Pumpkin Puppy":a(`au7`,`${r(`au7-pk`,`#ffb454`,`#e8761a`,`#8a3a06`)}${r(`au7-fr`,`#f0cf9a`,`#c9965a`,`#7a5028`)}${r(`au7-ea`,`#b07a4a`,`#7a4a22`,`#3a200c`)}`,`<ellipse cx="50" cy="95" rx="38" ry="3.6" fill="#000" opacity=".28" stroke="none" filter="url(#au7-b)"/>
    <ellipse cx="50" cy="72" rx="38" ry="24" fill="url(#au7-pk)"/><ellipse cx="30" cy="72" rx="16" ry="24" fill="none" stroke="#8a3a06" stroke-width="1.1" stroke-opacity=".6"/><ellipse cx="70" cy="72" rx="16" ry="24" fill="none" stroke="#8a3a06" stroke-width="1.1" stroke-opacity=".6"/><ellipse cx="50" cy="72" rx="9" ry="24" fill="none" stroke="#8a3a06" stroke-width="1.1" stroke-opacity=".6"/>
    <path d="M18 62 Q22 54 30 52" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>
    <ellipse cx="30" cy="84" rx="9" ry="5" fill="url(#au7-fr)"/><ellipse cx="70" cy="84" rx="9" ry="5" fill="url(#au7-fr)"/>
    <path d="M46 20 Q44 8 50 4 Q56 8 54 20 Z" fill="#58903a"/><path d="M52 8 q10 -4 14 4" fill="none" stroke="#58903a" stroke-width="2.4"/>
    <path d="M24 30 Q10 34 12 54 Q24 56 30 42 Z" fill="url(#au7-ea)"/><path d="M76 30 Q90 34 88 54 Q76 56 70 42 Z" fill="url(#au7-ea)"/>
    <ellipse cx="50" cy="42" rx="26" ry="22" fill="url(#au7-fr)"/>
    <ellipse cx="50" cy="51" rx="13" ry="10" fill="#f8e6c8" stroke-width="1"/>
    <ellipse cx="50" cy="47" rx="5.4" ry="3.8" fill="#2a1a14"/><ellipse cx="48.6" cy="45.8" rx="1.8" ry="1" fill="#fff" opacity=".6" stroke="none"/>
    <path d="M50 51 V55 M50 55 Q45 58 42 55 M50 55 Q55 58 58 55" fill="none" stroke-width="1.3"/><path d="M46 56 Q50 66 54 56 Z" fill="#e87a8a" stroke-width="1"/>
    <circle cx="39" cy="38" r="3.6" fill="#0d0a14"/><circle cx="61" cy="38" r="3.6" fill="#0d0a14"/><circle cx="40.2" cy="36.8" r="1.2" fill="#fff" stroke="none"/><circle cx="62.2" cy="36.8" r="1.2" fill="#fff" stroke="none"/>
    <path d="M32 32 Q39 28 44 32 M56 32 Q61 28 68 32" fill="none" stroke="#5a3a1a" stroke-width="1.6"/>`),"Red Squirrel":a(`au8`,`${r(`au8-fr`,`#ee9a6a`,`#c45a2a`,`#6e2a10`)}${r(`au8-bl`,`#fff6e6`,`#f0dcc0`,`#c8a888`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.4" fill="#000" opacity=".28" stroke="none" filter="url(#au8-b)"/>
    <path d="M66 86 Q100 80 94 44 Q90 12 62 14 Q80 24 78 48 Q76 70 58 76 Z" fill="url(#au8-fr)"/>
    <path d="M84 24 Q92 44 84 66 M76 20 Q84 40 78 62" fill="none" stroke="#7a2a10" stroke-width="1.6" stroke-opacity=".5"/>
    <ellipse cx="44" cy="70" rx="24" ry="24" fill="url(#au8-fr)"/><ellipse cx="44" cy="74" rx="14" ry="17" fill="url(#au8-bl)" stroke-width="1"/>
    <ellipse cx="24" cy="86" rx="8" ry="4.4" fill="url(#au8-fr)"/><ellipse cx="62" cy="88" rx="8" ry="4.4" fill="url(#au8-fr)"/>
    <path d="M28 26 L24 8 L38 20 Z M60 26 L64 8 L50 20 Z" fill="url(#au8-fr)"/><path d="M26 20 L25 13 L32 19 Z M62 20 L63 13 L56 19 Z" fill="#3a1608" stroke="none"/>
    <ellipse cx="44" cy="40" rx="22" ry="19" fill="url(#au8-fr)"/>
    <ellipse cx="44" cy="48" rx="12" ry="9" fill="url(#au8-bl)" stroke-width="1"/>
    <ellipse cx="44" cy="44" rx="3.8" ry="2.8" fill="#2a1a14"/><path d="M44 47 V50 M44 50 Q40 53 37 50 M44 50 Q48 53 51 50" fill="none" stroke-width="1.2"/>
    <circle cx="34" cy="38" r="3.4" fill="#0d0a14"/><circle cx="54" cy="38" r="3.4" fill="#0d0a14"/><circle cx="35" cy="37" r="1.1" fill="#fff" stroke="none"/><circle cx="55" cy="37" r="1.1" fill="#fff" stroke="none"/>
    <ellipse cx="44" cy="66" rx="7" ry="6" fill="#b8782e"/><path d="M38 62 Q44 56 50 62 Z" fill="#6a4414" stroke-width="1"/><path d="M44 56 V60" stroke-width="1.2" fill="none"/>`),"Autumn Crow":a(`au9`,`${r(`au9-bd`,`#5a5a72`,`#262636`,`#0a0a12`)}${r(`au9-lf`,`#ffd45a`,`#f09a1a`,`#a84a08`)}${r(`au9-lr`,`#ff8a6a`,`#d8321a`,`#7a1008`)}`,`<ellipse cx="50" cy="96" rx="40" ry="3" fill="#000" opacity=".22" stroke="none" filter="url(#au9-b)"/>
    <path d="M4 78 Q40 68 96 74" fill="none" stroke="#6a4424" stroke-width="5"/><path d="M70 74 Q80 62 88 60 M30 74 Q26 62 18 60" fill="none" stroke="#6a4424" stroke-width="3"/>
    <path d="M84 62 q8 -8 14 -2 q-4 8 -14 2 z" fill="url(#au9-lf)" stroke-width="1.2"/><path d="M10 64 q-8 -8 -4 -14 q8 4 4 14 z" fill="url(#au9-lr)" stroke-width="1.2"/><path d="M92 80 q8 2 6 10 q-8 0 -6 -10 z" fill="url(#au9-lf)" stroke-width="1.2"/><path d="M6 82 q-6 4 -2 10 q8 -2 2 -10 z" fill="url(#au9-lr)" stroke-width="1.2"/>
    <path d="M24 56 L6 74 L28 66 Z" fill="url(#au9-bd)"/>
    <ellipse cx="44" cy="56" rx="26" ry="20" fill="url(#au9-bd)"/>
    <path d="M30 50 Q44 42 58 54 Q48 70 28 62 Z" fill="#1a1a28" stroke-width="1"/><path d="M34 52 Q44 48 54 54" fill="none" stroke="#8a8aa8" stroke-opacity=".6" stroke-width="1.6"/>
    <path d="M40 74 V82 M52 74 V82 M36 82 H44 M48 82 H56" fill="none" stroke="#c89a2a" stroke-width="2"/>
    <circle cx="66" cy="36" r="14" fill="url(#au9-bd)"/>
    <path d="M76 34 L96 40 L78 44 Z" fill="#6a6a80"/><path d="M78 38 L92 40" stroke="#3a3a50" stroke-width="1" fill="none"/>
    <circle cx="68" cy="33" r="3.6" fill="#ffe46a"/><circle cx="68.6" cy="33" r="1.8" fill="#0a0a12" stroke="none"/><circle cx="69.4" cy="32.2" r=".8" fill="#fff" stroke="none"/>
    <path d="M58 26 Q66 22 74 28" fill="none" stroke="#8a8aa8" stroke-opacity=".6" stroke-width="1.8"/>`),Turkey:a(`au10`,`${r(`au10-br`,`#a8764a`,`#7a4a26`,`#3e220e`)}${i(`au10-f1`,`#f0702a`,`#b83a08`)}${i(`au10-f2`,`#f6c438`,`#c88a08`)}${i(`au10-f3`,`#c8321a`,`#7a1208`)}`,`<ellipse cx="50" cy="95" rx="30" ry="3.2" fill="#000" opacity=".26" stroke="none" filter="url(#au10-b)"/>
    <g transform="translate(50 62)">
      <ellipse cx="-38" cy="-8" rx="9" ry="28" transform="rotate(-72)" fill="url(#au10-f3)"/>
      <ellipse cx="-34" cy="-26" rx="9" ry="28" transform="rotate(-48)" fill="url(#au10-f2)"/>
      <ellipse cx="-22" cy="-38" rx="9" ry="28" transform="rotate(-24)" fill="url(#au10-f1)"/>
      <ellipse cx="0" cy="-42" rx="9" ry="28" fill="url(#au10-f3)"/>
      <ellipse cx="22" cy="-38" rx="9" ry="28" transform="rotate(24)" fill="url(#au10-f1)"/>
      <ellipse cx="34" cy="-26" rx="9" ry="28" transform="rotate(48)" fill="url(#au10-f2)"/>
      <ellipse cx="38" cy="-8" rx="9" ry="28" transform="rotate(72)" fill="url(#au10-f3)"/>
    </g>
    <g fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.4"><path d="M50 30 V44 M30 34 L38 46 M70 34 L62 46 M20 46 L32 54 M80 46 L68 54"/></g>
    <ellipse cx="50" cy="66" rx="19" ry="20" fill="url(#au10-br)"/>
    <path d="M34 66 Q38 80 50 80 Q62 80 66 66 Q58 74 50 74 Q42 74 34 66 Z" fill="#c89a6a" stroke-width="1"/>
    <path d="M44 84 V92 M56 84 V92 M40 92 H48 M52 92 H60" fill="none" stroke="#e8a82a" stroke-width="2.4"/>
    <circle cx="50" cy="44" r="10" fill="#d8a47a"/>
    <path d="M52 50 Q58 52 58 60 Q52 62 48 54 Z" fill="#d8321a"/>
    <path d="M45 48 L38 52 L46 54 Z" fill="#f6c438" stroke-width="1"/>
    <circle cx="48" cy="41" r="2.4" fill="#0d0a14"/><circle cx="48.8" cy="40.2" r=".8" fill="#fff" stroke="none"/><circle cx="55" cy="41" r="2.4" fill="#0d0a14"/><circle cx="55.8" cy="40.2" r=".8" fill="#fff" stroke="none"/>`),"Pumpkin Spice Latte":a(`au11`,`${i(`au11-cu`,`#ffffff`,`#d8d8e4`)}${i(`au11-sl`,`#ffa040`,`#d8621a`)}${i(`au11-co`,`#a8683a`,`#5a2e12`)}`,`<ellipse cx="50" cy="94" rx="30" ry="3.4" fill="#000" opacity=".26" stroke="none" filter="url(#au11-b)"/>
    <path d="M24 44 L76 44 L68 92 L32 92 Z" fill="url(#au11-cu)"/>
    <path d="M26.6 58 L73.4 58 L69.2 80 L30.8 80 Z" fill="url(#au11-sl)" stroke-width="1.2"/>
    <path d="M50 62 q-9 5 -4 12 q9 3 12 -4 q1 -8 -8 -8 z" fill="#ffe8a8" stroke-width="1"/><path d="M50 64 V74" stroke="#a8601a" stroke-width="1" fill="none"/>
    <ellipse cx="50" cy="44" rx="27" ry="6.4" fill="#e8e0d4"/><ellipse cx="50" cy="43" rx="23" ry="4.6" fill="url(#au11-co)"/>
    <path d="M30 40 Q34 24 50 22 Q66 24 70 40 Q50 46 30 40 Z" fill="#fffaf0"/>
    <path d="M36 38 Q40 28 50 26 Q60 28 64 38" fill="none" stroke="#e8dcc8" stroke-width="2"/><path d="M42 34 Q50 24 58 34" fill="none" stroke="#fff" stroke-width="2.4"/>
    <ellipse cx="50" cy="22" rx="6" ry="4" fill="#fffaf0"/><path d="M50 18 q3 -5 0 -9" fill="none" stroke="#fffaf0" stroke-width="3"/>
    <g stroke="none" fill="#a8501a" opacity=".85"><circle cx="40" cy="36" r="1"/><circle cx="46" cy="30" r="1"/><circle cx="55" cy="33" r="1"/><circle cx="60" cy="38" r="1"/><circle cx="50" cy="37" r="1"/></g>
    <path d="M40 8 q-6 -8 0 -14 M52 6 q6 -8 0 -14 M64 10 q-6 -8 0 -14" fill="none" stroke="#fff" stroke-opacity=".0"/>`)},M=e=>e.map(e=>{let[t,n]=[].concat(e);return{name:t,art:j[t],chance:n}}),N=[{id:`medieval`,name:`Medieval Pack`,short:`Medieval`,icon:`🏰`,colors:[`#7e57c2`,`#4527a0`],characters:M([[`Witch`,13.4],[`Wizard`,13.4],[`Elf`,13.4],[`Fairy`,13.4],[`Slime Monster`,13.4],[`Jester`,9],[`Dragon`,9],[`Queen`,9],[`Unicorn`,5],[`King`,1]])},{id:`wonderland`,name:`Wonderland Pack`,short:`Wonderland`,icon:`🐇`,colors:[`#ef6aa7`,`#9c2a6a`],characters:M([[`Two of Spades`,15.2],[`Eat Me`,15],[`Drink Me`,15],[`Alice`,15],[`Queen of Hearts`,15],[`Dormouse`,6.5],[`White Rabbit`,6.5],[`Cheshire Cat`,6.5],[`Caterpillar`,2.5],[`Mad Hatter`,2.5],[`King of Hearts`,.3]])},{id:`breakfast`,name:`Breakfast Pack`,short:`Breakfast`,icon:`🍳`,colors:[`#ffa726`,`#d84315`],characters:M([[`Toast`,12.5],[`Cereal`,12.5],[`Yogurt`,12.5],[`Breakfast Combo`,12.5],[`Orange Juice`,12.5],[`Milk`,12.5],[`Waffle`,9],[`Pancakes`,9],[`French Toast`,5],[`Pizza`,2]])},{id:`space`,name:`Space Pack`,short:`Space`,icon:`🚀`,colors:[`#3f51b5`,`#161a5c`],characters:M([[`Earth`,18.75],[`Meteor`,18.75],[`Stars`,18.75],[`Alien`,18.75],[`Planet`,10],[`UFO`,10],[`Spaceship`,4.5],[`Astronaut`,.45],...[`Red`,`Orange`,`Yellow`,`Green`,`Blue`,`Purple`].map(e=>[`${e} Astronaut`,.05/6])])},{id:`bot`,name:`Bot Pack`,short:`Bot`,icon:`🤖`,colors:[`#00acc1`,`#073b46`],characters:M([[`Lil Bot`,19.5],[`Lovely Bot`,19.5],[`Angry Bot`,19.5],[`Happy Bot`,19.5],[`Watson`,9],[`Buddy Bot`,9],[`Brainy Bot`,3.7],[`Mega Bot`,.3]])},{id:`aquatic`,name:`Aquatic Pack`,short:`Aquatic`,icon:`🐠`,colors:[`#1e88e5`,`#0a3d8f`],characters:M([[`Old Boot`,15],[`Jellyfish`,15],[`Clownfish`,15],[`Frog`,15],[`Crab`,15],[`Pufferfish`,6.1],[`Blobfish`,6.1],[`Octopus`,6.1],[`Narwhal`,3],[`Dolphin`,3],[`Baby Shark`,.5],[`Megalodon`,.2]])},{id:`safari`,name:`Safari Pack`,short:`Safari`,icon:`🦁`,colors:[`#d4a62a`,`#6e4b0c`],characters:M([[`Panda`,15],[`Sloth`,15],[`Tenrec`,15],[`Flamingo`,15],[`Zebra`,15],[`Elephant`,7],[`Lemur`,7],[`Peacock`,7],[`Chameleon`,3.48],[`Lion`,.5],[`Rainbow Panda`,.02]])},{id:`dino`,name:`Dino Pack`,short:`Dino`,icon:`🦖`,colors:[`#7cb342`,`#2e5a14`],characters:M([[`Amber`,19.5],[`Dino Egg`,19.5],[`Dino Fossil`,19.5],[`Stegosaurus`,19.5],[`Velociraptor`,9],[`Brontosaurus`,9],[`Triceratops`,3.7],[`T. Rex`,.3]])},{id:`ice`,name:`Ice Monster Pack`,short:`Ice Monster`,icon:`🧊`,colors:[`#6fcff2`,`#1f5a9e`],characters:M([[`Ice Bat`,19.5],[`Ice Bug`,19.5],[`Ice Elemental`,19.5],[`Rock Monster`,19.5],[`Ding`,8.5],[`Donk`,8.5],[`Bush Monster`,4.5],[`Yeti`,.35],[`Ice Slime`,.08],[`Frozen Fossil`,.05],[`Ice Crab`,.02]])},{id:`outback`,name:`Outback Pack`,short:`Outback`,icon:`🦘`,colors:[`#e0702e`,`#6a2410`],characters:M([[`Dingo`,18.75],[`Echidna`,18.75],[`Koala`,18.75],[`Kookaburra`,18.75],[`Platypus`,7],[`Joey`,7],[`Kangaroo`,7],[`Crocodile`,3.6],[`Super Glider`,.37],[`Teal Platypus`,.03]])},{id:`pirate`,name:`Pirate Pack`,short:`Pirate`,icon:`🏴‍☠️`,colors:[`#b3261e`,`#240808`],characters:M([[`Deckhand`,16],[`Buccaneer`,16],[`Swashbuckler`,16],[`Treasure Map`,16],[`Seagull`,16],[`Jolly Pirate`,8],[`Pirate Ship`,8],[`Kraken`,3.67],[`Captain Blackbeard`,.3],[`Pirate Pufferfish`,.03]])},{id:`bug`,name:`Bug Pack`,short:`Bug`,icon:`🐛`,colors:[`#a0b83c`,`#3e3010`],characters:M([[`Ant`,19.625],[`Rhino Beetle`,19.625],[`Ladybug`,19.625],[`Fly`,19.625],[`Worm`,9],[`Bee`,9],[`Mantis`,2.97],[`Butterfly`,.5],[`Blue Butterfly`,.03]])},{id:`lunch`,name:`Lunch Pack`,short:`Lunch`,icon:`🥪`,colors:[`#ff5a5f`,`#8c1c2c`],characters:M([[`Banana`,18.75],[`Watermelon`,18.75],[`Cheese`,18.75],[`Doughnut`,18.75],[`Taco`,7],[`Bao`,7],[`Sushi`,7],[`Cheeseburger`,3.31],[`Sandwich`,.65],[`Half a Sandwich`,.04]])},{id:`dog`,name:`Dog Pack`,short:`Dog`,icon:`🐕`,colors:[`#c89a64`,`#5a3a1c`],characters:M([[`Jack Russell Terrier`,15],[`Chihuahua`,15],[`Yorkshire Terrier`,15],[`Poodle`,15],[`German Shepherd`,15],[`Saint Bernard`,7],[`Golden Retriever`,7],[`Dalmatian`,7],[`Bloodhound`,3.57],[`Old English Sheepdog`,.4],[`Robot Dog`,.03]])},{id:`spooky`,name:`Spooky Pack`,short:`Spooky`,icon:`🎃`,colors:[`#ff8a1c`,`#3a1466`],characters:M([[`Pumpkin`,15.2],[`Swamp Monster`,15.2],[`Frankenstein`,15.2],[`Vampire`,15.2],[`Zombie`,15.2],[`Mummy`,4],[`Candy Apple`,4],[`Candy Corn`,4],[`Crow`,4],[`Vampire Bat`,4],[`Werewolf`,1.65],[`Goo Monster`,1.65],[`Ghost`,.65],[`Spooky Moth`,.05]])},{id:`autumn`,name:`Autumn Pack`,short:`Autumn`,icon:`🍂`,colors:[`#e8761a`,`#6a2a0a`],characters:M([[`Black Bear`,15.6],[`Pumpkin Pie`,15.6],[`Chipmunk`,15.6],[`Cornucopia`,15.6],[`Scarecrow`,15.6],[`Autumn Cat`,6],[`Pumpkin Puppy`,6],[`Red Squirrel`,6],[`Autumn Crow`,2.95],[`Turkey`,1],[`Pumpkin Spice Latte`,.05]])}];function P(e,t=Math.random){let n=e=>e.chance??1,r=e.characters.reduce((e,t)=>e+n(t),0),i=t()*r;for(let t of e.characters)if(i-=n(t),i<0)return t;return e.characters[e.characters.length-1]}var F=e=>e.chance===void 0?``:`${Number(e.chance.toFixed(4))}%`,I=(e,t,n)=>`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/></linearGradient>`,L=(e,t)=>`<svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>${e}</defs><g stroke-linejoin="round" stroke-linecap="round">${t}</g></svg>`,R=(e,t,n,r=!1)=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-2" y="-8" width="4" height="8" fill="#6a4426"/><path d="M0 -40 L-11 -22 L11 -22 Z M0 -30 L-14 -10 L14 -10 Z M0 -20 L-17 0 L17 0 Z" transform="translate(0 -4)" fill="#2f8a3a"/>`+(r?`<path d="M0 -44 L-5 -35 L5 -35 Z M0 -34 L-8 -22 L8 -22 Z M0 -24 L-11 -12 L11 -12 Z" fill="#fff" opacity=".95"/>`:``)+`</g>`,z=(e,t)=>{let n=7,r=()=>(n=n*16807%2147483647)/2147483647;return Array.from({length:e},()=>`<circle cx="${(r()*200).toFixed(1)}" cy="${(r()*t).toFixed(1)}" r="${(.5+r()*.9).toFixed(1)}" fill="#fff" opacity="${(.5+r()*.5).toFixed(2)}"/>`).join(``)},B=(e,t=20,n=9,r=10)=>{let i=``;for(let e=0;e<r;e++){let r=e*n;i+=`M0 ${r+n} L200 ${r+n} `;for(let a=e%2?t/2:0;a<200;a+=t)i+=`M${a} ${r} L${a} ${r+n} `}return`<path d="${i}" fill="none" stroke="${e}" stroke-width=".7" opacity=".7"/>`},V=[{id:`plain`,name:`Plain`,icon:`⬜`,svg:``},{id:`cell`,name:`Cell`,icon:`🔒`,svg:L(`${I(`c-w`,`#6c7084`,`#454858`)}${I(`c-f`,`#4c4f5e`,`#262833`)}${I(`c-l`,`#d6ecff`,`#7fb0e8`)}${I(`c-m`,`#8a8fa2`,`#2c2f3c`)}`,`<rect width="200" height="120" fill="url(#c-w)"/>${B(`#2e3142`)}
      <path d="M0 84 L200 84 L200 120 L0 120 Z" fill="url(#c-f)"/><path d="M0 98 L200 98 M0 110 L200 110 M60 84 L36 120 M140 84 L164 120 M100 84 L100 120" stroke="#1c1e28" stroke-width=".8" fill="none" opacity=".7"/>
      <rect x="20" y="12" width="38" height="32" rx="2" fill="#1c2030" stroke="#14161e" stroke-width="1.4"/><rect x="23" y="15" width="32" height="26" fill="url(#c-l)"/>
      <path d="M31 15 L31 41 M39 15 L39 41 M47 15 L47 41" stroke="#20232e" stroke-width="2.2"/>
      <path d="M23 41 L55 41 L78 90 L2 90 Z" fill="#fff" opacity=".07"/>
      <rect x="82" y="18" width="62" height="70" fill="#161824" stroke="#8a8fa2" stroke-width="3"/>
      <path d="M92 18 L92 88 M102 18 L102 88 M112 18 L112 88 M122 18 L122 88 M132 18 L132 88" stroke="url(#c-m)" stroke-width="3.4"/><path d="M82 30 L144 30 M82 70 L144 70" stroke="#6a6f84" stroke-width="3"/>
      <rect x="136" y="48" width="6" height="12" rx="1.4" fill="#d6a838" stroke="#7a5a10" stroke-width=".8"/>
      <rect x="156" y="72" width="40" height="5" fill="#8a6a44"/><rect x="156" y="66" width="40" height="7" rx="3" fill="#9aa0b8"/><rect x="156" y="68" width="22" height="5" rx="2" fill="#c85a5a"/><ellipse cx="186" cy="66" rx="8" ry="3.4" fill="#e8ecf8"/>
      <path d="M158 77 L158 90 M194 77 L194 90" stroke="#5a4426" stroke-width="2.4"/>
      <circle cx="12" cy="74" r="2.6" fill="none" stroke="#2c2f3c" stroke-width="1.2"/><path d="M12 77 Q8 86 14 92" fill="none" stroke="#2c2f3c" stroke-width="1.2"/>`)},{id:`pool`,name:`Pool`,icon:`🏊`,svg:L(`${I(`p-s`,`#7fd0ff`,`#dff4ff`)}${I(`p-w`,`#6fe6f2`,`#1f94d8`)}${I(`p-d`,`#f6ecd4`,`#dccba0`)}`,`<rect width="200" height="58" fill="url(#p-s)"/><circle cx="172" cy="16" r="10" fill="#ffe14a"/><circle cx="172" cy="16" r="14" fill="#ffe14a" opacity=".3"/>
      <g fill="#fff" opacity=".95"><ellipse cx="40" cy="12" rx="14" ry="5"/><ellipse cx="50" cy="9" rx="10" ry="5"/><ellipse cx="116" cy="20" rx="13" ry="4.4"/><ellipse cx="124" cy="17" rx="8" ry="4"/></g>
      <rect y="56" width="200" height="64" fill="url(#p-d)"/><path d="M0 70 L200 70 M0 90 L200 90 M0 108 L200 108" stroke="#c4b080" stroke-width=".7" opacity=".6"/>
      <path d="M32 66 L200 66 L200 116 L14 116 Z" fill="#f4fbff"/><path d="M36 69 L200 69 L200 112 L22 112 Z" fill="url(#p-w)"/>
      <path d="M36 80 L200 80 M30 92 L200 92 M26 104 L200 104" stroke="#fff" stroke-width=".6" opacity=".35"/>
      <path d="M50 78 Q56 75 62 78 T74 78 T86 78 M100 90 Q106 87 112 90 T124 90 T136 90 M150 76 Q156 73 162 76 T174 76 M70 102 Q76 99 82 102 T94 102" fill="none" stroke="#fff" stroke-width="1.4" opacity=".7"/>
      <path d="M60 86 L200 86" stroke="#fff" stroke-width="1" opacity=".5"/><g><circle cx="70" cy="86" r="1.8" fill="#ff5a5a"/><circle cx="84" cy="86" r="1.8" fill="#fff"/><circle cx="98" cy="86" r="1.8" fill="#2a88e8"/><circle cx="112" cy="86" r="1.8" fill="#ff5a5a"/><circle cx="126" cy="86" r="1.8" fill="#fff"/><circle cx="140" cy="86" r="1.8" fill="#2a88e8"/><circle cx="154" cy="86" r="1.8" fill="#ff5a5a"/></g>
      <rect x="8" y="34" width="5" height="36" fill="#9aa0b4" stroke="#5a6078" stroke-width=".8"/><rect x="26" y="34" width="5" height="36" fill="#9aa0b4" stroke="#5a6078" stroke-width=".8"/>
      <path d="M13 40 L26 40 M13 48 L26 48 M13 56 L26 56 M13 64 L26 64" stroke="#7a8098" stroke-width="1.6"/>
      <rect x="4" y="30" width="40" height="5" rx="1" fill="#d8dcea" stroke="#5a6078" stroke-width=".8"/>
      <rect x="4" y="24" width="82" height="5" rx="2.4" fill="#2a88e8" stroke="#1a5ab0" stroke-width=".9"/><rect x="4" y="24" width="22" height="5" rx="2.4" fill="#dfeaf8" opacity=".8"/>
      <circle cx="184" cy="62" r="5" fill="none" stroke="#ff5a5a" stroke-width="3"/><path d="M180 59 L188 65 M188 59 L180 65" stroke="#fff" stroke-width="1.4"/>`)},{id:`trail`,name:`Trail`,icon:`🥾`,svg:L(`${I(`t-s`,`#a8dcff`,`#f2fbff`)}${I(`t-g`,`#78c850`,`#3f8a32`)}`,`<rect width="200" height="120" fill="url(#t-s)"/><circle cx="30" cy="20" r="9" fill="#fff6a8"/>
      <path d="M-4 74 L34 26 L56 52 L74 36 L106 74 Z M80 74 L124 22 L150 54 L170 40 L206 74 Z" fill="#8aa0c4" stroke="#6a80a4" stroke-width=".8"/>
      <path d="M34 26 L26 38 L34 34 L40 40 Z M124 22 L116 36 L124 32 L132 38 Z" fill="#fff"/>
      <rect y="70" width="200" height="50" fill="url(#t-g)"/><path d="M0 74 Q40 64 90 72 T200 70 L200 76 L0 78 Z" fill="#58a840"/>
      <path d="M94 70 Q102 88 80 102 Q70 110 62 120 L150 120 Q142 106 120 96 Q106 86 106 70 Z" fill="#c4a06c" stroke="#8a6a3c" stroke-width="1"/>
      <path d="M98 76 Q104 90 86 104 M104 76 Q106 88 118 98" fill="none" stroke="#a88650" stroke-width=".8"/>
      ${R(18,96,1.5)}${R(40,84,1)}${R(170,98,1.6)}${R(190,86,1.1)}${R(150,80,.8)}${R(60,78,.7)}
      <rect x="136" y="82" width="3.4" height="24" fill="#6a4426"/><rect x="124" y="84" width="28" height="9" rx="1.4" fill="#d8b070" stroke="#6a4426" stroke-width=".8"/><path d="M128 89 L146 89" stroke="#6a4426" stroke-width="1.4"/><path d="M150 88 L156 90 L150 92" fill="#d8b070" stroke="#6a4426" stroke-width=".8"/>
      <g stroke="#6e7488" stroke-width=".8"><ellipse cx="72" cy="108" rx="7" ry="4" fill="#9aa0b4"/><ellipse cx="160" cy="112" rx="5" ry="3" fill="#9aa0b4"/></g>
      <g stroke="none"><circle cx="30" cy="108" r="1.4" fill="#ff7a8a"/><circle cx="36" cy="112" r="1.4" fill="#ffe14a"/><circle cx="182" cy="110" r="1.4" fill="#fff"/><circle cx="52" cy="104" r="1.4" fill="#ffe14a"/><circle cx="130" cy="108" r="1.4" fill="#ff7a8a"/></g>`)},{id:`store`,name:`Store`,icon:`🏪`,svg:L(`${I(`s-w`,`#fff6d8`,`#f6e4b0`)}${I(`s-wd`,`#b8844a`,`#7a4e24`)}`,`<rect width="200" height="120" fill="url(#s-w)"/>
      <path d="M0 0 L200 0 L200 14 Q192 20 184 14 Q176 20 168 14 Q160 20 152 14 Q144 20 136 14 Q128 20 120 14 Q112 20 104 14 Q96 20 88 14 Q80 20 72 14 Q64 20 56 14 Q48 20 40 14 Q32 20 24 14 Q16 20 8 14 Q4 17 0 14 Z" fill="#e8484a" stroke="#a02a2c" stroke-width=".8"/>
      <path d="M16 0 L16 14 M32 0 L32 14 M48 0 L48 14 M64 0 L64 14 M80 0 L80 14 M96 0 L96 14 M112 0 L112 14 M128 0 L128 14 M144 0 L144 14 M160 0 L160 14 M176 0 L176 14 M192 0 L192 14" stroke="#fff" stroke-width="8" opacity=".9"/>
      <rect x="70" y="20" width="60" height="14" rx="2" fill="#3a2a7a" stroke="#1c1450" stroke-width="1"/><text x="100" y="30.4" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="9.4" fill="#ffe14a" stroke="none" letter-spacing="1">STORE</text>
      <rect x="10" y="42" width="110" height="4" fill="url(#s-wd)"/><rect x="10" y="68" width="110" height="4" fill="url(#s-wd)"/>
      <g stroke="#3a2a14" stroke-width=".6"><rect x="14" y="30" width="12" height="12" fill="#e8484a"/><rect x="28" y="34" width="9" height="8" fill="#4a9ae8"/><rect x="39" y="32" width="12" height="10" fill="#ffd23a"/><rect x="53" y="35" width="8" height="7" fill="#58bd4c"/><rect x="63" y="30" width="12" height="12" fill="#b070dc"/><rect x="77" y="34" width="10" height="8" fill="#ff9a3a"/><rect x="89" y="31" width="12" height="11" fill="#4ad0c0"/><rect x="103" y="34" width="12" height="8" fill="#e8484a"/>
      <rect x="14" y="56" width="9" height="12" fill="#ffd23a"/><rect x="25" y="58" width="12" height="10" fill="#58bd4c"/><rect x="39" y="54" width="10" height="14" fill="#e8484a"/><rect x="51" y="59" width="12" height="9" fill="#4a9ae8"/><rect x="65" y="56" width="9" height="12" fill="#ff9a3a"/><rect x="76" y="58" width="12" height="10" fill="#b070dc"/><rect x="90" y="55" width="11" height="13" fill="#ffd23a"/><rect x="103" y="59" width="12" height="9" fill="#58bd4c"/></g>
      <path d="M0 84 L200 84 L200 120 L0 120 Z" fill="#e8dcc0"/>${Array.from({length:12},(e,t)=>`<rect x="${t*17-(t%2,0)}" y="${t%2?90:84}" width="8.5" height="6" fill="#bfae88" opacity=".35"/>`).join(``)}
      <path d="M0 96 L200 96 M0 108 L200 108" stroke="#bfae88" stroke-width=".6" opacity=".6"/>
      <rect x="136" y="64" width="58" height="30" rx="2" fill="url(#s-wd)" stroke="#4a2a10" stroke-width="1"/><rect x="134" y="60" width="62" height="6" rx="2" fill="#d8a868" stroke="#4a2a10" stroke-width=".8"/>
      <rect x="168" y="46" width="20" height="14" rx="2" fill="#4a5068" stroke="#262a3a" stroke-width=".8"/><rect x="171" y="49" width="14" height="6" fill="#aef0b8"/><rect x="172" y="60" width="12" height="3" fill="#2a2e3e"/><text x="178" y="54" text-anchor="middle" font-family="Georgia, serif" font-size="4.6" font-weight="700" fill="#1a3a22" stroke="none">$$$</text>
      <path d="M150 0 L150 8 M150 8 Q150 18 142 18 L158 18 Q150 18 150 8" stroke="#6a4426" stroke-width="1" fill="none"/><path d="M142 18 L158 18 L154 24 L146 24 Z" fill="#ffd23a" stroke="#a07a10" stroke-width=".8"/><circle cx="150" cy="26" r="6" fill="#ffe97a" opacity=".35" stroke="none"/>`)},{id:`castle`,name:`Castle`,icon:`🏰`,svg:L(`${I(`k-w`,`#9a9fb2`,`#626678`)}${I(`k-f`,`#7c8094`,`#4a4e60`)}${I(`k-sky`,`#8fd0ff`,`#d6f0ff`)}${I(`k-c`,`#e8484a`,`#8a1a22`)}`,`<rect width="200" height="120" fill="url(#k-w)"/>${B(`#454a5c`,18,8,11)}
      <path d="M30 56 L30 24 Q42 8 54 24 L54 56 Z" fill="url(#k-sky)" stroke="#3a3e50" stroke-width="2"/><path d="M42 12 L42 56 M30 38 L54 38" stroke="#3a3e50" stroke-width="1.6"/>
      <path d="M146 56 L146 24 Q158 8 170 24 L170 56 Z" fill="url(#k-sky)" stroke="#3a3e50" stroke-width="2"/><path d="M158 12 L158 56 M146 38 L170 38" stroke="#3a3e50" stroke-width="1.6"/>
      <path d="M0 82 L200 82 L200 120 L0 120 Z" fill="url(#k-f)"/><path d="M0 92 L200 92 M0 104 L200 104 M30 82 L10 120 M70 82 L56 120 M130 82 L144 120 M170 82 L190 120" stroke="#3a3e50" stroke-width=".8" opacity=".7" fill="none"/>
      <path d="M84 82 L116 82 L148 120 L52 120 Z" fill="url(#k-c)" stroke="#6a1018" stroke-width=".8"/><path d="M86 82 L52 120 M114 82 L148 120" stroke="#ffd23a" stroke-width="1.4"/>
      <rect x="88" y="30" width="24" height="40" rx="3" fill="#d6a838" stroke="#7a5a10" stroke-width="1.4"/><rect x="82" y="46" width="36" height="10" rx="2" fill="#e8484a" stroke="#7a1a22" stroke-width="1"/><rect x="82" y="56" width="6" height="26" fill="#d6a838" stroke="#7a5a10" stroke-width="1"/><rect x="112" y="56" width="6" height="26" fill="#d6a838" stroke="#7a5a10" stroke-width="1"/><path d="M92 34 L108 34" stroke="#fff" stroke-width="1.4" opacity=".5"/>
      <path d="M64 10 L64 44 L72 38 L80 44 L80 10 Z" fill="#e8484a" stroke="#7a1a22" stroke-width=".9"/><circle cx="72" cy="24" r="3.4" fill="#ffd23a"/>
      <path d="M120 10 L120 44 L128 38 L136 44 L136 10 Z" fill="#e8484a" stroke="#7a1a22" stroke-width=".9"/><circle cx="128" cy="24" r="3.4" fill="#ffd23a"/>
      <g><rect x="9" y="50" width="3.4" height="16" fill="#4a3a2a"/><path d="M6 50 L16 50 L14 46 L8 46 Z" fill="#6a5a4a"/><path d="M10.7 46 Q4 36 10.7 28 Q17 36 10.7 46 Z" fill="#ff9a2a" stroke="#c4501a" stroke-width=".8"/><path d="M10.7 44 Q8 38 10.7 34 Q13 38 10.7 44 Z" fill="#ffe14a" stroke="none"/></g>
      <g><rect x="187" y="50" width="3.4" height="16" fill="#4a3a2a"/><path d="M184 50 L194 50 L192 46 L186 46 Z" fill="#6a5a4a"/><path d="M188.7 46 Q182 36 188.7 28 Q195 36 188.7 46 Z" fill="#ff9a2a" stroke="#c4501a" stroke-width=".8"/><path d="M188.7 44 Q186 38 188.7 34 Q191 38 188.7 44 Z" fill="#ffe14a" stroke="none"/></g>`)},{id:`wonderland`,name:`Wonderland`,icon:`🎩`,svg:L(`${I(`w-s`,`#ffb0dc`,`#b4a0ff`)}${I(`w-h`,`#5fbf5a`,`#2a7a34`)}${I(`w-st`,`#fff6e0`,`#e8dcc0`)}`,`<rect width="200" height="120" fill="url(#w-s)"/>
      <g stroke="none"><circle cx="36" cy="14" r="0" fill="none"/><path d="M0 8 C-3 4 -8 8 0 14 C8 8 3 4 0 8 Z" transform="translate(34 18) scale(1.2)" fill="#e8173f" opacity=".85"/><path d="M0 -6 C-9 3 -6 9 0 5 C6 9 9 3 0 -6 Z M0 3 L-3 9 L3 9 Z" transform="translate(88 14) scale(1)" fill="#2a1b3d" opacity=".8"/><path d="M0 -7 L6 0 L0 7 L-6 0 Z" transform="translate(20 40)" fill="#e8173f" opacity=".85"/><circle cx="66" cy="36" r="3" fill="#2a1b3d" opacity=".8"/><circle cx="62" cy="39" r="2.6" fill="#2a1b3d" opacity=".8"/><circle cx="70" cy="39" r="2.6" fill="#2a1b3d" opacity=".8"/></g>
      <path d="M128 22 Q150 44 172 22 Q150 34 128 22 Z" fill="#fff6a0" stroke="#e8c840" stroke-width="1"/><path d="M136 25 L137 29 M143 28 L143.6 32 M150 29 L150 33 M157 28 L156.4 32 M164 25 L163 29" stroke="#c8a010" stroke-width=".9" fill="none"/>
      <ellipse cx="139" cy="10" rx="2.4" ry="3.4" fill="#fff6a0" opacity=".9" stroke="none"/><ellipse cx="161" cy="10" rx="2.4" ry="3.4" fill="#fff6a0" opacity=".9" stroke="none"/>
      <path d="M0 84 L0 62 Q6 54 12 62 Q18 54 24 62 Q30 54 36 62 Q42 54 48 62 Q54 54 60 62 Q66 54 72 62 Q78 54 84 62 Q90 54 96 62 Q102 54 108 62 Q114 54 120 62 Q126 54 132 62 Q138 54 144 62 Q150 54 156 62 Q162 54 168 62 Q174 54 180 62 Q186 54 192 62 Q198 54 200 60 L200 84 Z" fill="url(#w-h)" stroke="#1f5a28" stroke-width="1"/>
      <g stroke="#7a1a22" stroke-width=".6"><circle cx="12" cy="66" r="3" fill="#ff5a7a"/><circle cx="44" cy="70" r="3" fill="#fff"/><circle cx="62" cy="64" r="3" fill="#ff5a7a"/><circle cx="82" cy="72" r="3" fill="#fff"/><circle cx="120" cy="68" r="3" fill="#ff5a7a"/><circle cx="142" cy="72" r="3" fill="#fff"/><circle cx="168" cy="66" r="3" fill="#ff5a7a"/><circle cx="190" cy="72" r="3" fill="#fff"/></g>
      <path d="M92 84 L92 72 Q96 66 100 72 L100 84 Z" fill="#8a5a2a" stroke="#4a2a10" stroke-width="1"/><circle cx="98" cy="79" r="1.1" fill="#ffd23a" stroke="none"/>
      <rect x="19" y="62" width="7" height="28" rx="2" fill="url(#w-st)" stroke="#a89870" stroke-width=".8"/><ellipse cx="22" cy="62" rx="19" ry="11" fill="#e8484a" stroke="#8a1a22" stroke-width="1"/><g fill="#fff" stroke="none"><circle cx="12" cy="60" r="2.4"/><circle cx="24" cy="55" r="2.8"/><circle cx="32" cy="62" r="2.2"/><circle cx="18" cy="66" r="1.8"/></g>
      <rect x="171" y="68" width="6" height="22" rx="2" fill="url(#w-st)" stroke="#a89870" stroke-width=".8"/><ellipse cx="174" cy="68" rx="14" ry="8" fill="#4a8ae8" stroke="#1a3a8a" stroke-width="1"/><g fill="#ffe14a" stroke="none"><circle cx="168" cy="66" r="2"/><circle cx="178" cy="64" r="2.2"/><circle cx="182" cy="70" r="1.6"/></g>
      <path d="M0 84 L200 84 L200 120 L0 120 Z" fill="#fff"/>${[[84,6,11],[90,8,14],[98,10,18],[108,12,24]].map(([e,t,n],r)=>Array.from({length:Math.ceil(200/n)+1},(i,a)=>(a+r)%2?`<rect x="${a*n-(r%2?n/2:0)}" y="${e}" width="${n}" height="${t}" fill="#2a1b3d"/>`:``).join(``)).join(``)}
      <path d="M0 84 L200 84" stroke="#2a1b3d" stroke-width="1"/>
      <ellipse cx="146" cy="100" rx="30" ry="6.4" fill="#fff" stroke="#a89ac8" stroke-width="1"/><path d="M118 100 Q118 106 146 108 Q174 106 174 100" fill="#e8e0f8" stroke="#a89ac8" stroke-width="1"/><path d="M132 106 L130 118 M160 106 L162 118" stroke="#8a5a2a" stroke-width="2.4"/>
      <path d="M138 96 Q138 86 148 88 Q152 90 150 96 Z" fill="#ff7aa8" stroke="#a02a5a" stroke-width=".9"/><path d="M150 90 Q156 88 156 92" fill="none" stroke="#a02a5a" stroke-width="1.6"/><path d="M137 92 Q132 92 133 96" fill="none" stroke="#a02a5a" stroke-width="1.4"/><circle cx="144" cy="86" r="1.6" fill="#ffd23a" stroke="#a02a5a" stroke-width=".6"/>
      <g stroke="#3a6ac0" stroke-width=".8"><path d="M124 96 L130 96 L129 99 L125 99 Z M164 96 L170 96 L169 99 L165 99 Z" fill="#cfe0ff"/></g>
      <path d="M154 98 L160 98 L159 94 L155 94 Z" fill="#ffe0a8" stroke="#a87a30" stroke-width=".7"/><circle cx="157" cy="93" r="1.4" fill="#e8173f" stroke="none"/>`)},{id:`beach`,name:`Beach`,icon:`🏖️`,svg:L(`${I(`b-s`,`#6fc8ff`,`#e6f7ff`)}${I(`b-w`,`#4ad8e8`,`#1f8ad8`)}${I(`b-sd`,`#f8e4a8`,`#e0c078`)}`,`<rect width="200" height="120" fill="url(#b-s)"/><circle cx="30" cy="22" r="11" fill="#ffe14a"/><circle cx="30" cy="22" r="16" fill="#ffe14a" opacity=".28" stroke="none"/>
      <g fill="#fff"><ellipse cx="110" cy="16" rx="16" ry="5"/><ellipse cx="120" cy="12" rx="10" ry="5"/><ellipse cx="164" cy="30" rx="13" ry="4"/></g>
      <rect y="50" width="200" height="32" fill="url(#b-w)"/><path d="M0 58 Q10 54 20 58 T40 58 T60 58 T80 58 T100 58 T120 58 T140 58 T160 58 T180 58 T200 58 M0 68 Q10 64 20 68 T40 68 T60 68 T80 68 T100 68 T120 68 T140 68 T160 68 T180 68 T200 68" fill="none" stroke="#fff" stroke-width="1.2" opacity=".6"/>
      <path d="M0 80 Q30 72 60 80 T120 80 T200 78 L200 120 L0 120 Z" fill="url(#b-sd)"/><path d="M0 80 Q30 72 60 80 T120 80 T200 78" fill="none" stroke="#fff" stroke-width="2.4" opacity=".85"/>
      <path d="M172 118 Q166 96 176 70" fill="none" stroke="#7a4e24" stroke-width="5"/><path d="M172 118 Q166 96 176 70" fill="none" stroke="#a87a44" stroke-width="3"/>
      <g fill="#3fa84a" stroke="#1f6a2a" stroke-width=".8"><path d="M176 70 Q158 58 148 70 Q162 64 176 70 Z M176 70 Q166 50 150 52 Q166 56 176 70 Z M176 70 Q184 50 200 54 Q186 58 176 70 Z M176 70 Q194 60 204 72 Q190 66 176 70 Z"/></g>
      <circle cx="174" cy="72" r="3" fill="#6a4426"/><circle cx="179" cy="74" r="2.6" fill="#6a4426"/>
      <path d="M44 100 L44 76 M44 78 Q28 74 24 88 Q36 82 44 88 Z" fill="none" stroke="#6a4426" stroke-width="1.6"/><path d="M24 90 Q44 66 64 90 Z" fill="#ff5a5a" stroke="#a02a2a" stroke-width=".9"/><path d="M34 82 L38 90 M44 78 L44 90 M54 82 L50 90" stroke="#fff" stroke-width="2" opacity=".85"/>
      <path d="M92 104 l3 -7 l3 7 l-7 -4.4 h8 z" fill="#ff9a3a" stroke="#c4601a" stroke-width=".8"/><path d="M130 108 q6 -8 12 0 q-6 4 -12 0 z" fill="#ffd8e0" stroke="#c88a98" stroke-width=".8"/>`)},{id:`ship`,name:`Pirate Ship`,icon:`🏴‍☠️`,svg:L(`${I(`sp-s`,`#7fd0ff`,`#eaf8ff`)}${I(`sp-w`,`#4ab6ec`,`#1062b8`)}${I(`sp-d`,`#b88450`,`#7a4e26`)}${I(`sp-r`,`#a8723c`,`#5a3818`)}${I(`sp-sl`,`#fffdf0`,`#e8dcb8`)}${I(`sp-g`,`#fff3a0`,`#ffb300`)}`,`<rect width="200" height="56" fill="url(#sp-s)"/><circle cx="168" cy="16" r="9" fill="#ffe14a"/><circle cx="168" cy="16" r="13" fill="#ffe14a" opacity=".3" stroke="none"/>
      <g fill="#fff"><ellipse cx="30" cy="14" rx="14" ry="4.6"/><ellipse cx="40" cy="11" rx="9" ry="4.4"/><ellipse cx="142" cy="30" rx="12" ry="4"/></g>
      <rect y="52" width="200" height="30" fill="url(#sp-w)"/>
      <path d="M0 60 Q8 56 16 60 T32 60 T48 60 T64 60 T80 60 T96 60 T112 60 T128 60 T144 60 T160 60 T176 60 T192 60 M0 70 Q8 66 16 70 T32 70 T48 70 T64 70 T80 70 T96 70 T112 70 T128 70 T144 70 T160 70 T176 70 T192 70" fill="none" stroke="#fff" stroke-width="1.2" opacity=".5"/>
      <path d="M150 54 L156 54 L153 48 Z" fill="#fff" stroke="#9aa0b0" stroke-width=".6"/><path d="M152.6 48 L152.6 54" stroke="#6a4a28" stroke-width=".8"/>
      <path d="M100 6 L8 78 M100 6 L192 78 M100 22 L22 78 M100 22 L178 78" stroke="#4a3018" stroke-width="1" fill="none" opacity=".85"/>
      <path d="M62 8 Q100 2 138 8 L134 52 Q100 60 66 52 Z" fill="url(#sp-sl)" stroke="#8a6a3a" stroke-width="1.4"/>
      <path d="M64 30 Q100 26 136 30" fill="none" stroke="#c8b888" stroke-width="1" opacity=".7"/>
      <circle cx="100" cy="30" r="7" fill="#1d1830" stroke="none"/><circle cx="97" cy="29" r="1.8" fill="#fff" stroke="none"/><circle cx="103" cy="29" r="1.8" fill="#fff" stroke="none"/><path d="M89 40 L111 46 M111 40 L89 46" stroke="#1d1830" stroke-width="3.4" fill="none"/>
      <rect x="97" y="0" width="6" height="86" fill="url(#sp-r)" stroke="#2a1408" stroke-width="1.2"/>
      <path d="M103 2 L128 -2 L128 12 L103 14 Z" fill="#1d1830" stroke="#000" stroke-width=".8"/><circle cx="116" cy="6" r="2.4" fill="#fff" stroke="none"/>
      <rect y="76" width="200" height="6" fill="url(#sp-r)" stroke="#2a1408" stroke-width="1"/>
      <path d="M10 76 L10 70 M30 76 L30 70 M50 76 L50 70 M70 76 L70 70 M130 76 L130 70 M150 76 L150 70 M170 76 L170 70 M190 76 L190 70" stroke="#5a3818" stroke-width="2.4" stroke-linecap="round"/>
      <rect y="82" width="200" height="38" fill="url(#sp-d)"/>
      <path d="M0 92 L200 92 M0 103 L200 103 M0 113 L200 113" stroke="#3a2010" stroke-width="1" opacity=".7"/>
      <path d="M30 82 L30 92 M70 92 L70 103 M110 82 L110 92 M150 92 L150 103 M20 103 L20 113 M60 113 L60 120 M100 103 L100 113 M140 113 L140 120 M180 103 L180 113 M190 82 L190 92" stroke="#3a2010" stroke-width="1" opacity=".6"/>
      <g stroke="#2a1408" stroke-width="1.2"><ellipse cx="22" cy="100" rx="13" ry="14" fill="#9a6a38"/><path d="M9 94 Q22 100 35 94 M9 106 Q22 112 35 106" fill="none"/><ellipse cx="22" cy="88" rx="13" ry="4" fill="#b88450"/><path d="M12 90 Q22 96 32 90" fill="none" stroke="#7a4e26"/></g>
      <g stroke="#2a1408" stroke-width="1.2"><rect x="44" y="94" width="18" height="18" fill="#a87040"/><path d="M44 94 L62 112 M62 94 L44 112" stroke="#7a4e26" fill="none"/></g>
      <g transform="translate(160 96)"><rect x="-18" y="0" width="38" height="18" rx="2" fill="#8a5a2c" stroke="#2a1408" stroke-width="1.4"/><path d="M-18 8 L20 8" stroke="#e0a400" stroke-width="2.6"/><rect x="-3" y="5" width="6" height="8" rx="1" fill="#e0a400" stroke="#7a5a10" stroke-width=".8"/>
      <path d="M-18 0 Q-18 -12 1 -12 Q20 -12 20 0 Z" fill="#a87040" stroke="#2a1408" stroke-width="1.4"/><path d="M-14 -2 Q1 -5 16 -2" fill="none" stroke="#e0a400" stroke-width="1.6"/>
      <g stroke="#a87a00" stroke-width=".8"><circle cx="-8" cy="-14" r="3.4" fill="url(#sp-g)"/><circle cx="0" cy="-16" r="3.4" fill="url(#sp-g)"/><circle cx="8" cy="-14" r="3.4" fill="url(#sp-g)"/><circle cx="14" cy="-11" r="3" fill="url(#sp-g)"/></g></g>
      <g transform="translate(138 82)" stroke="#2a1408" stroke-width="1.2"><circle cx="0" cy="0" r="10" fill="none" stroke-width="3.4" stroke="#8a5a2c"/><circle cx="0" cy="0" r="10" fill="none" stroke-width="1.2"/><circle cx="0" cy="0" r="3.4" fill="#e0a400"/><path d="M0 -14 L0 14 M-14 0 L14 0 M-10 -10 L10 10 M-10 10 L10 -10" stroke="#8a5a2c" stroke-width="2"/></g>
      <path d="M84 112 Q96 106 108 112 Q96 118 84 112 Z M88 112 Q96 108 104 112" fill="#d8c08a" stroke="#7a5a2a" stroke-width="1"/>`)},{id:`underwater`,name:`Underwater`,icon:`🐠`,svg:L(`${I(`u-w`,`#3ab0e8`,`#0a2a70`)}${I(`u-sd`,`#e8d498`,`#a88a50`)}`,`<rect width="200" height="120" fill="url(#u-w)"/>
      <path d="M30 0 L60 0 L90 100 L30 100 Z M90 0 L110 0 L140 100 L100 100 Z M150 0 L170 0 L190 100 L150 100 Z" fill="#fff" opacity=".07" stroke="none"/>
      <path d="M0 102 Q50 94 100 102 T200 100 L200 120 L0 120 Z" fill="url(#u-sd)"/>
      <g fill="none" stroke-width="5"><path d="M20 108 Q12 90 20 76 Q28 62 20 50" stroke="#1f6a2a"/><path d="M20 108 Q12 90 20 76 Q28 62 20 50" stroke="#58bd4c" stroke-width="3"/><path d="M34 108 Q42 94 34 82 Q28 72 34 62" stroke="#1f6a2a"/><path d="M34 108 Q42 94 34 82 Q28 72 34 62" stroke="#78d86a" stroke-width="3"/><path d="M174 108 Q166 92 174 78 Q182 64 174 52" stroke="#1f6a2a"/><path d="M174 108 Q166 92 174 78 Q182 64 174 52" stroke="#58bd4c" stroke-width="3"/></g>
      <g stroke-width=".9"><path d="M110 106 L110 84 M110 94 L102 84 M110 90 L118 80" stroke="#c8336a" fill="none" stroke-width="4"/><path d="M110 106 L110 84 M110 94 L102 84 M110 90 L118 80" stroke="#ff7aa8" fill="none" stroke-width="2.4"/><path d="M130 108 Q124 92 136 90 Q142 98 138 108 Z" fill="#ff9a3a" stroke="#c4601a"/><path d="M60 108 Q54 98 62 94 Q70 98 66 108 Z" fill="#b070dc" stroke="#6a3a94"/></g>
      <g fill="#dff6ff" fill-opacity=".35" stroke="#bfeaff" stroke-width=".8"><circle cx="56" cy="40" r="3.4"/><circle cx="62" cy="26" r="2.2"/><circle cx="150" cy="44" r="3"/><circle cx="144" cy="30" r="2"/><circle cx="100" cy="20" r="2.4"/></g>
      <ellipse cx="86" cy="106" rx="8" ry="4" fill="#8a8fa2" stroke="#4a4e60" stroke-width=".8"/>`)},{id:`snow`,name:`Snow`,icon:`❄️`,svg:L(`${I(`n-s`,`#1c3a82`,`#8fd0ff`)}${I(`n-g`,`#ffffff`,`#cfe6f6`)}${I(`n-a`,`#5fffa8`,`#2a98e0`)}`,`<rect width="200" height="120" fill="url(#n-s)"/>${z(26,40)}
      <path d="M10 40 Q60 6 110 30 T196 20 L196 32 Q150 44 106 40 T10 52 Z" fill="url(#n-a)" opacity=".35" stroke="none"/>
      <path d="M-4 78 L30 36 L52 62 L76 28 L112 78 Z M90 78 L134 34 L158 58 L180 38 L206 78 Z" fill="#cfe6f6" stroke="#8fb4d4" stroke-width=".8"/><path d="M30 36 L22 48 L30 44 L36 50 Z M76 28 L66 44 L76 40 L84 46 Z M134 34 L124 48 L134 44 L142 50 Z" fill="#fff" stroke="none"/>
      <path d="M0 80 Q40 70 90 78 T200 76 L200 120 L0 120 Z" fill="url(#n-g)"/><path d="M0 100 Q60 92 120 102 T200 98 L200 120 L0 120 Z" fill="#fff" opacity=".7" stroke="none"/>
      ${R(20,96,1.3,!0)}${R(42,86,.9,!0)}${R(176,100,1.5,!0)}${R(154,88,.9,!0)}
      <path d="M96 100 Q96 76 118 76 Q140 76 140 100 Z" fill="#fff" stroke="#8fb4d4" stroke-width="1.2"/><path d="M102 100 Q102 90 110 90 Q118 90 118 100 Z" fill="#2a3a5a" stroke="#14203a" stroke-width=".8"/><path d="M104 82 L110 82 M122 82 L132 82 M100 90 L106 90 M128 92 L136 92" stroke="#8fb4d4" stroke-width=".8"/>
      <g fill="#fff" stroke="none" opacity=".9"><circle cx="14" cy="14" r="1.2"/><circle cx="40" cy="30" r="1"/><circle cx="64" cy="12" r="1.2"/><circle cx="88" cy="40" r="1"/><circle cx="120" cy="20" r="1.2"/><circle cx="150" cy="44" r="1"/><circle cx="178" cy="28" r="1.2"/><circle cx="196" cy="56" r="1"/><circle cx="26" cy="60" r="1"/><circle cx="104" cy="62" r="1.2"/><circle cx="162" cy="70" r="1"/></g>`)},{id:`space`,name:`Space`,icon:`🚀`,svg:L(`${I(`x-s`,`#05061a`,`#1c1650`)}<radialGradient id="x-p" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#ffc7a0"/><stop offset=".6" stop-color="#e0674a"/><stop offset="1" stop-color="#5a2a6a"/></radialGradient><radialGradient id="x-e" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#9fe0ff"/><stop offset=".6" stop-color="#2a82d8"/><stop offset="1" stop-color="#0d3d8a"/></radialGradient>${I(`x-m`,`#b8bccb`,`#6a6e80`)}`,`<rect width="200" height="120" fill="url(#x-s)"/>${z(70,90)}
      <g transform="rotate(-18 40 34)"><path d="M6 34 A36 9 0 0 1 74 34" fill="none" stroke="#e8c88a" stroke-width="3.4"/></g><circle cx="40" cy="34" r="16" fill="url(#x-p)"/><path d="M26 30 Q40 26 54 32 M25 38 Q40 34 55 40" stroke="#fff2d0" stroke-width="2.2" opacity=".5" fill="none"/>
      <g transform="rotate(-18 40 34)"><path d="M6 34 A36 9 0 0 0 74 34" fill="none" stroke="#e8c88a" stroke-width="3.4"/></g>
      <circle cx="160" cy="26" r="10" fill="url(#x-e)"/><path d="M154 24 Q158 20 162 24 Q160 30 154 28 Z" fill="#58bd4c" opacity=".9" stroke="none"/>
      <path d="M0 98 Q40 88 90 96 T200 94 L200 120 L0 120 Z" fill="url(#x-m)" stroke="#4a4e60" stroke-width=".8"/>
      <g fill="#7a7e90" stroke="#4a4e60" stroke-width=".8"><ellipse cx="34" cy="108" rx="12" ry="3.6"/><ellipse cx="96" cy="104" rx="8" ry="2.6"/><ellipse cx="150" cy="110" rx="14" ry="4"/><ellipse cx="184" cy="100" rx="6" ry="2"/></g>`)},{id:`savanna`,name:`Savanna`,icon:`🦁`,svg:L(`${I(`v-s`,`#ff8a4a`,`#ffe0a0`)}${I(`v-g`,`#d8b858`,`#8a7a30`)}`,`<rect width="200" height="120" fill="url(#v-s)"/><circle cx="100" cy="68" r="26" fill="#ffd54a"/><circle cx="100" cy="68" r="34" fill="#fff0a0" opacity=".28" stroke="none"/>
      <path d="M0 74 Q30 64 60 72 T120 70 T200 72 L200 80 L0 80 Z" fill="#a8602a" opacity=".75" stroke="none"/>
      <rect y="76" width="200" height="44" fill="url(#v-g)"/>
      <g stroke="none"><rect x="31" y="56" width="3.4" height="22" fill="#4a2a14"/><path d="M12 56 Q32 44 54 56 Q32 50 12 56 Z" fill="#3a5a1c"/><path d="M12 56 Q32 50 54 56 Q32 60 12 56 Z" fill="#2a4414"/>
      <rect x="161" y="48" width="4" height="28" fill="#4a2a14"/><path d="M138 50 Q163 34 190 50 Q163 44 138 50 Z" fill="#3a5a1c"/><path d="M138 50 Q163 44 190 50 Q163 56 138 50 Z" fill="#2a4414"/></g>
      <g fill="none" stroke="#6a5a1c" stroke-width="1.2"><path d="M10 100 l2 -8 l2 8 M16 102 l2 -10 l2 10 M70 108 l2 -8 l2 8 M76 110 l2 -10 l2 10 M126 98 l2 -8 l2 8 M180 106 l2 -8 l2 8 M186 108 l2 -10 l2 10"/></g>
      <ellipse cx="108" cy="112" rx="10" ry="4" fill="#9a8a5a" stroke="#6a5a30" stroke-width=".8"/>`)},{id:`circuit`,name:`Circuit Board`,icon:`🔌`,svg:L(`${I(`b-g`,`#0e5a3a`,`#06301f`)}<radialGradient id="b-l" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff6a6a"/><stop offset="1" stop-color="#ff6a6a" stop-opacity="0"/></radialGradient><radialGradient id="b-n" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#6aff9a"/><stop offset="1" stop-color="#6aff9a" stop-opacity="0"/></radialGradient>`,`<rect width="200" height="120" fill="url(#b-g)"/>
      <g fill="none" stroke="#2fd088" stroke-width="1.3" opacity=".85"><path d="M0 14 H40 L48 22 H92 L100 14 H150 L158 22 H200"/><path d="M0 34 H28 L36 42 H70"/><path d="M130 34 H176 L184 42 H200"/><path d="M0 62 H22 L30 70 H60"/><path d="M0 86 H46 L54 94 H88 L96 86 H120"/><path d="M0 104 H34 L42 112 H200"/><path d="M104 40 V70 L112 78 V104"/><path d="M146 60 H176 L184 68 H200"/><path d="M172 70 V100 L164 108"/><path d="M24 22 V50 L16 58 V72"/></g>
      <g fill="none" stroke="#c9b36a" stroke-width=".8" opacity=".55"><path d="M60 8 H88 M60 11 H80 M120 52 H140 M120 55 H146 M150 84 H190 M150 87 H178 M8 24 H18 M8 27 H14"/></g>
      <rect x="56" y="46" width="44" height="30" rx="2" fill="#12161a" stroke="#4a5058" stroke-width="1"/><circle cx="62" cy="52" r="2" fill="#4a5058"/><text x="78" y="66" font-size="7" fill="#9aa6b0" text-anchor="middle" font-family="monospace" stroke="none">CPU</text>
      <g stroke="#c9ccd2" stroke-width="1.3"><path d="M62 46 V42 M70 46 V42 M78 46 V42 M86 46 V42 M94 46 V42 M62 76 V80 M70 76 V80 M78 76 V80 M86 76 V80 M94 76 V80 M56 54 H52 M56 62 H52 M56 70 H52 M100 54 H104 M100 62 H104 M100 70 H104"/></g>
      <rect x="132" y="74" width="26" height="16" rx="1.6" fill="#12161a" stroke="#4a5058" stroke-width=".8"/><g stroke="#c9ccd2" stroke-width="1.1"><path d="M138 74 V71 M145 74 V71 M152 74 V71 M138 90 V93 M145 90 V93 M152 90 V93"/></g>
      <g stroke="none"><rect x="120" y="12" width="12" height="5" rx="2" fill="#d8b878"/><rect x="123" y="12" width="2" height="5" fill="#8a3a1a"/><rect x="127" y="12" width="2" height="5" fill="#2a2a2a"/>
      <rect x="22" y="76" width="12" height="5" rx="2" fill="#d8b878"/><rect x="25" y="76" width="2" height="5" fill="#8a3a1a"/><rect x="29" y="76" width="2" height="5" fill="#2a2a2a"/>
      <rect x="176" y="14" width="8" height="12" rx="2" fill="#3a7ad8"/><rect x="176" y="14" width="3" height="12" rx="1" fill="#7aaaf0"/></g>
      <circle cx="40" cy="42" r="9" fill="url(#b-l)"/><circle cx="40" cy="42" r="3" fill="#ff5a5a" stroke="#a02020" stroke-width=".8"/>
      <circle cx="182" cy="42" r="9" fill="url(#b-n)"/><circle cx="182" cy="42" r="3" fill="#5aff8a" stroke="#1a8a40" stroke-width=".8"/>
      <circle cx="104" cy="104" r="9" fill="url(#b-n)"/><circle cx="104" cy="104" r="3" fill="#5aff8a" stroke="#1a8a40" stroke-width=".8"/>
      <g fill="#c9b36a" stroke="#6a5a20" stroke-width=".6"><circle cx="40" cy="14" r="2"/><circle cx="100" cy="14" r="2"/><circle cx="158" cy="22" r="2"/><circle cx="70" cy="42" r="2"/><circle cx="60" cy="70" r="2"/><circle cx="120" cy="86" r="2"/><circle cx="200" cy="112" r="2"/><circle cx="16" cy="72" r="2"/><circle cx="112" cy="40" r="2"/><circle cx="164" cy="108" r="2"/><circle cx="20" cy="114" r="2"/></g>
      <g fill="#0a1a12" stroke="#c9b36a" stroke-width=".8"><circle cx="8" cy="8" r="3.4"/><circle cx="192" cy="8" r="3.4"/><circle cx="8" cy="112" r="3.4"/><circle cx="192" cy="112" r="3.4"/></g>`)}],ee=N.flatMap(e=>e.characters),H=110;function U({board:e,scene:t,scenes:r,trash:i,tray:a,counter:o,texttools:s,sizebar:c,turnbar:l}){let u=[],d=1,f=1,p=null,m=null,h=null,g=null,_=()=>{o.textContent=u.length?`${u.length} on the screen`:`Nothing on the screen yet`},v=e=>{p?.el.classList.remove(`sel`),p=e,e?.el.classList.add(`sel`),w()},y=(t,n,r)=>{let i=e.getBoundingClientRect(),a=t.el.offsetWidth||H,o=t.el.offsetHeight||H;t.x=Math.max(0,Math.min(n,i.width-a)),t.y=Math.max(0,Math.min(r,i.height-o)),t.el.style.left=`${t.x}px`,t.el.style.top=`${t.y}px`},b=c.querySelector(`#size-range`),x=c.querySelector(`#size-label`),S=l.querySelector(`#turn-range`),C=l.querySelector(`#turn-label`);function w(){S.disabled=!p,l.querySelectorAll(`button`).forEach(e=>e.disabled=!p),S.value=p?Math.round(p.rot):0,C.textContent=p?`${Math.round(p.rot)}°`:`pick something first`,b.disabled=!p,c.querySelectorAll(`button`).forEach(e=>e.disabled=!p),p?(b.value=Math.round(p.scale*100),x.textContent=`${Math.round(p.scale*100)}%`):x.textContent=`pick something first`}function T(e,t){let n=Math.max(.4,Math.min(3,t)),r=e.el.offsetWidth,i=e.el.offsetHeight;e.scale=n,e.kind===`text`?e.el.style.setProperty(`--sc`,n):(e.el.style.width=`${H*n}px`,e.el.style.height=`${H*n}px`),y(e,e.x+(r-e.el.offsetWidth)/2,e.y+(i-e.el.offsetHeight)/2),e===p&&w()}function E(e,t){let n=((t+180)%360+360)%360-180;n===-180&&(n=180),e.rot=n,e.el.style.rotate=`${n}deg`,e===p&&w()}function D(t,r,i){let a=ee.find(e=>e.name===t);if(!a)return null;let o=e.getBoundingClientRect(),s=document.createElement(`div`);s.className=`item`,s.innerHTML=`<div class="pic">${n(a.art)}</div><button class="take-off" aria-label="Take ${a.name} off">✕</button><div class="resize" title="Drag to change the size"></div><div class="rotate-h" title="Drag around to turn it"></div>`,s.style.zIndex=++f;let c={id:d++,name:t,el:s,scale:1,rot:0};return s.dataset.id=c.id,s.title=a.name,e.append(s),u.push(c),y(c,r??(o.width-H)/2+(Math.random()-.5)*160,i??(o.height-H)/2+(Math.random()-.5)*100),v(c),_(),c}function O(t,n={},r,i){let a=String(t??``).trim();if(!a)return null;let o={...I,...n},s=e.getBoundingClientRect(),c=document.createElement(`div`);c.className=`item text size-${o.size}${o.bubble?` bubble`:``}`,c.style.setProperty(`--tc`,o.color);let l=document.createElement(`span`);l.textContent=a;let p=document.createElement(`button`);p.className=`take-off`,p.setAttribute(`aria-label`,`Take the words off`),p.textContent=`✕`;let m=document.createElement(`div`);m.className=`resize`,m.title=`Drag to change the size`;let h=document.createElement(`div`);h.className=`rotate-h`,h.title=`Drag around to turn it`,c.append(l,p,m,h),c.style.zIndex=++f,c.title=a;let g={id:d++,name:a,kind:`text`,el:c,scale:1,rot:0};return c.dataset.id=g.id,e.append(c),u.push(g),y(g,r??(s.width-c.offsetWidth)/2+(Math.random()-.5)*120,i??(s.height-c.offsetHeight)/2+(Math.random()-.5)*100),v(g),_(),g}function k(e){e&&u.includes(e)&&(u.splice(u.indexOf(e),1),e.el.remove(),p===e&&(p=null,w()),_())}let A=()=>[...u].forEach(k),j=e=>{let t=i.getBoundingClientRect();return e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom};e.addEventListener(`pointerdown`,t=>{let n=t.target.closest(`.item`);if(!n)return v(null);let r=u.find(e=>e.el===n);if(t.target.closest(`.take-off`))return k(r);if(t.target.closest(`.rotate-h`)){v(r);let e=n.getBoundingClientRect();g={item:r,cx:e.left+e.width/2,cy:e.top+e.height/2},n.setPointerCapture(t.pointerId);return}if(t.target.closest(`.resize`)){v(r);let e=n.getBoundingClientRect(),i=e.left+e.width/2,a=e.top+e.height/2;h={item:r,start:r.scale,dist:Math.hypot(t.clientX-i,t.clientY-a)||1,cx:i,cy:a},n.setPointerCapture(t.pointerId);return}v(r),n.style.zIndex=++f;let i=e.getBoundingClientRect();m={item:r,dx:t.clientX-i.left-r.x,dy:t.clientY-i.top-r.y},n.setPointerCapture(t.pointerId),n.classList.add(`held`)}),e.addEventListener(`pointermove`,t=>{if(g){E(g.item,Math.atan2(t.clientY-g.cy,t.clientX-g.cx)*180/Math.PI+90);return}if(h){T(h.item,h.start*Math.hypot(t.clientX-h.cx,t.clientY-h.cy)/h.dist);return}if(!m)return;let n=e.getBoundingClientRect();y(m.item,t.clientX-n.left-m.dx,t.clientY-n.top-m.dy),i.classList.toggle(`over`,j(t))});let M=e=>{g?g=null:h?h=null:m&&=(m.item.el.classList.remove(`held`),i.classList.remove(`over`),e.type===`pointerup`&&j(e)&&k(m.item),null)};e.addEventListener(`pointerup`,M),e.addEventListener(`pointercancel`,M),document.addEventListener(`keydown`,t=>{t.target.closest?.(`input, textarea, select`)||(t.key===`Delete`||t.key===`Backspace`)&&p&&e.offsetParent&&k(p)});function N(e){a.innerHTML=``;for(let t of e.characters){let e=document.createElement(`button`);e.className=`tray-item`,e.innerHTML=`<div class="pic">${n(t.art)}</div><div class="n">${t.name}</div>`,e.addEventListener(`click`,()=>D(t.name)),a.append(e)}}let P=`plain`;function F(e){let i=V.find(t=>t.id===e)??V[0];P=i.id,t.innerHTML=i.svg?n(i.svg):``,t.dataset.scene=i.id,r.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e.dataset.id===i.id))}for(let e of V){let t=document.createElement(`button`);t.dataset.id=e.id,t.textContent=`${e.icon} ${e.name}`,t.addEventListener(`click`,()=>F(e.id)),r.append(t)}F(`plain`);let I={size:`M`,color:`#ffffff`,bubble:!1},L=s.querySelector(`#text-input`),R=[`#ffffff`,`#ffe14a`,`#ff9ac8`,`#8fd6ff`,`#9be87a`,`#ffb347`],z=s.querySelector(`#text-colors`);for(let e of R){let t=document.createElement(`button`);t.className=`sw`,t.style.setProperty(`--c`,e),t.dataset.color=e,t.setAttribute(`aria-label`,`Color ${e}`),t.classList.toggle(`on`,e===I.color),t.addEventListener(`click`,()=>{I.color=e,z.querySelectorAll(`.sw`).forEach(e=>e.classList.toggle(`on`,e===t))}),z.append(t)}s.querySelectorAll(`#text-sizes button`).forEach(e=>e.addEventListener(`click`,()=>{I.size=e.dataset.size,s.querySelectorAll(`#text-sizes button`).forEach(t=>t.classList.toggle(`on`,t===e))}));let B=s.querySelector(`#text-bubble`);B.addEventListener(`click`,()=>{I.bubble=!I.bubble,B.classList.toggle(`on`,I.bubble),B.setAttribute(`aria-pressed`,String(I.bubble))});let U=()=>{O(L.value)&&(L.value=``),L.focus()};return s.querySelector(`#text-add`).addEventListener(`click`,U),L.addEventListener(`keydown`,e=>e.key===`Enter`&&U()),b.addEventListener(`input`,()=>p&&T(p,Number(b.value)/100)),c.querySelector(`#size-down`).addEventListener(`click`,()=>p&&T(p,p.scale-.1)),c.querySelector(`#size-up`).addEventListener(`click`,()=>p&&T(p,p.scale+.1)),S.addEventListener(`input`,()=>p&&E(p,Number(S.value))),l.querySelector(`#turn-left`).addEventListener(`click`,()=>p&&E(p,p.rot-15)),l.querySelector(`#turn-right`).addEventListener(`click`,()=>p&&E(p,p.rot+15)),w(),_(),{add:D,addText:O,setScale:T,setRot:E,remove:k,clear:A,showTray:N,setScene:F,items:u,get scene(){return P}}}var W=e=>document.getElementById(e),G=e=>new Promise(t=>setTimeout(t,e)),K={opened:0,current:null,busy:!1,owned:{},pack:N[0],run:0,mode:`packs`,autumn:!1};function q(){W(`shelf`).innerHTML=``;for(let e of K.pack.characters){let t=K.owned[e.name]||0,r=document.createElement(`li`);r.classList.toggle(`unknown`,!t),r.innerHTML=`<div class="pic">${n(e.art)}</div><div class="n">${t?e.name:`???`}</div><div class="x">${[F(e),t?`x${t}`:``].filter(Boolean).join(` · `)}</div>`,W(`shelf`).append(r)}let e=K.pack.characters.filter(e=>K.owned[e.name]).length;W(`found`).textContent=`(${e} of ${K.pack.characters.length})`}function J(){let e=K.pack;W(`pack`).style.setProperty(`--p1`,e.colors[0]),W(`pack`).style.setProperty(`--p2`,e.colors[1]),W(`crown`).textContent=e.icon,W(`label`).textContent=e.short,W(`title`).textContent=K.mode===`sandbox`?`Sandbox`:e.name,W(`reveal`).hidden=!0,document.querySelectorAll(`#packs button`).forEach(t=>t.classList.toggle(`on`,t.dataset.id===e.id)),q(),$.showTray(e)}var te=`M50 4 L58 24 L76 14 L72 36 L94 34 L80 52 L92 62 L66 66 L68 84 L52 76 L50 98 L48 76 L32 84 L34 66 L8 62 L20 52 L6 34 L28 36 L24 14 L42 24 Z`,ne=[`#e8761a`,`#c8321a`,`#f2b01e`,`#a8481a`,`#d85a1a`];function re(){let e=W(`leaves`);for(let t=0;t<16;t++){let n=22+t*7%5*7;e.insertAdjacentHTML(`beforeend`,`<svg viewBox="0 0 100 100" style="--x:${t*37%96}%;--y:${t*29%90}%;--s:${n}px;--t:${9+t%5*2}s;--d:${-(t*1.7%12).toFixed(1)}s;--dx:${(t%2?1:-1)*(40+t%4*25)}px"><path d="${te}" fill="${ne[t%5]}" stroke="#4a1a06" stroke-width="3" stroke-linejoin="round"/></svg>`)}}re();function Y(){document.body.classList.toggle(`autumn`,K.autumn&&K.mode===`packs`),W(`packs`).querySelector(`[data-id="autumn"]`).hidden=!K.autumn,!K.autumn&&K.pack.id===`autumn`&&Q(`medieval`)}var X=``;window.addEventListener(`keydown`,e=>{e.target.matches?.(`input, textarea`)||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(X=(X+e.key.toLowerCase()).slice(-6),X===`autumn`&&K.mode===`packs`&&(K.autumn=!K.autumn,X=``,Y()))});function Z(e){K.mode=e;let t=e===`sandbox`;W(`packs-view`).hidden=t,W(`sandbox-view`).hidden=!t,W(`mode-packs`).classList.toggle(`on`,!t),W(`mode-sandbox`).classList.toggle(`on`,t),W(`title`).textContent=t?`Sandbox`:K.pack.name,Y()}function Q(e){W(`pack`).classList.remove(`shake`,`gone`),K.run++,K.busy=!1,K.pack=N.find(t=>t.id===e),J()}async function ie(){if(K.busy)return null;K.busy=!0;let e=K.pack,t=K.run;if(W(`reveal`).hidden=!0,W(`pack`).classList.remove(`gone`),W(`pack`).classList.add(`shake`),await G(800),K.run!==t)return null;W(`pack`).classList.remove(`shake`),W(`pack`).classList.add(`gone`);let r=P(e);return K.current=r,K.opened++,K.owned[r.name]=(K.owned[r.name]||0)+1,W(`pic`).innerHTML=n(r.art),W(`name`).textContent=r.name,W(`chance`).textContent=F(r)&&`${F(r)} chance`,W(`reveal`).hidden=!1,W(`count`).textContent=`Packs opened: ${K.opened}`,q(),await G(1200),K.run===t&&(W(`pack`).classList.remove(`gone`),K.busy=!1),r}for(let e of N){let t=document.createElement(`button`);t.dataset.id=e.id,t.textContent=`${e.icon} ${e.short}`,t.style.setProperty(`--p1`,e.colors[0]),e.id===`autumn`&&(t.hidden=!0),t.addEventListener(`click`,()=>Q(e.id)),W(`packs`).append(t)}var $=U({board:W(`board`),scene:W(`scene`),scenes:W(`scenes`),trash:W(`trash`),tray:W(`tray`),counter:W(`board-count`),texttools:W(`texttools`),sizebar:W(`sizebar`),turnbar:W(`turnbar`)});W(`mode-packs`).addEventListener(`click`,()=>Z(`packs`)),W(`mode-sandbox`).addEventListener(`click`,()=>Z(`sandbox`)),W(`clear`).addEventListener(`click`,$.clear),W(`pack`).addEventListener(`click`,ie),J();