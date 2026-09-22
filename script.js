(function(){
  var menu=document.getElementById('menuButton');
  var mobile=document.getElementById('mobileMenu');
  if(menu&&mobile){
    menu.addEventListener('click',function(){
      var open=mobile.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
      menu.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    mobile.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');});});
  }
  var year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
    items.forEach(function(item){observer.observe(item);});
  }else{items.forEach(function(item){item.classList.add('visible');});}
})();
