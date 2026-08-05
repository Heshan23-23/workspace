// Small interaction library: typewriter + reveal on scroll + smooth nav
document.addEventListener('DOMContentLoaded',()=>{
  // Typewriter-like slow reveal for the typing line
  const typing = document.querySelector('.typing');
  if(typing){
    const text = typing.textContent;
    typing.textContent = '';
    let i=0;
    const tick = ()=>{
      if(i<=text.length){
        typing.textContent = text.slice(0,i);
        i++;
        setTimeout(tick,30 + Math.random()*40);
      }
    };
    tick();
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  reveals.forEach(r=>io.observe(r));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  
  // Simple carousel initializer for index thumbnails (if present)
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(car=>{
    const prev = car.querySelector('.prev');
    const next = car.querySelector('.next');
    const img = car.querySelector('img');
    const slides = car.dataset.slides ? car.dataset.slides.split(',') : null;
    if(!slides || !img) return;
    let i=0;
    const show = (n)=>{ i = (n + slides.length)%slides.length; img.src = slides[i]; };
    if(prev) prev.addEventListener('click',()=>show(i-1));
    if(next) next.addEventListener('click',()=>show(i+1));
  });
});
