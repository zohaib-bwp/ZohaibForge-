(function(){
  var menu=document.getElementById('menuButton'),mobile=document.getElementById('mobileMenu');
  if(menu&&mobile){menu.addEventListener('click',function(){var open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});mobile.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');});});}
  var year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});items.forEach(function(item){observer.observe(item);});}else{items.forEach(function(item){item.classList.add('visible');});}
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var card=document.querySelector('.hero-visual');
  if(card&&!reduce){document.addEventListener('mousemove',function(e){var x=(e.clientX/window.innerWidth-.5)*8,y=(e.clientY/window.innerHeight-.5)*-8;card.style.transform='perspective(900px) rotateY('+x+'deg) rotateX('+y+'deg)';});}
  var lines=document.querySelectorAll('.code-lines span');
  if(!reduce&&lines.length){lines.forEach(function(line,i){var original=line.innerHTML;line.dataset.text=original;line.innerHTML='';setTimeout(function(){var n=0;var timer=setInterval(function(){line.innerHTML=original.slice(0,++n);if(n>=original.length)clearInterval(timer);},18);},500+i*650);});}
  var title=document.querySelector('.hero h1');
  if(title&&!reduce){setInterval(function(){if(Math.random()>.65){title.classList.add('glitch-now');setTimeout(function(){title.classList.remove('glitch-now');},120);}},2500);}
})();
