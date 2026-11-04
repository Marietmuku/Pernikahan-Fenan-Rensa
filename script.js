const CONFIG={whatsappNumber:'6281338861276',accountNumber:'715501009943538',accountOwner:'Laurensia Muku',weddingDate:'2026-11-13T07:00:00'};
const music=document.getElementById('music');
document.getElementById('openInvitation').addEventListener('click',()=>{document.getElementById('cover').classList.add('hidden');document.getElementById('content').classList.remove('hidden');music.play().catch(()=>{});window.scrollTo({top:0,behavior:'smooth'});});
const message=encodeURIComponent('Halo, saya ingin mengonfirmasi kehadiran pada pernikahan Fenan dan Rensa, 13 November 2026.');
document.getElementById('rsvp').href=`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
document.getElementById('wish').href=`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Selamat berbahagia Fenan dan Rensa. Doa dan ucapan saya: ')}`;
function countdown(){let d=new Date(CONFIG.weddingDate).getTime()-Date.now();let v=d>0?[Math.floor(d/86400000),Math.floor(d%86400000/3600000),Math.floor(d%3600000/60000),Math.floor(d%60000/1000)]:[0,0,0,0];['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=v[i]);}
countdown();setInterval(countdown,1000);
document.getElementById('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(CONFIG.accountNumber);document.getElementById('feedback').textContent='Nomor rekening berhasil disalin.';}catch(e){document.getElementById('feedback').textContent='Silakan salin nomor rekening: '+CONFIG.accountNumber;}});
if(CONFIG.accountOwner)document.getElementById('owner').textContent=CONFIG.accountOwner;