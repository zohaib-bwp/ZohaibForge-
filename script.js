const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),1900));

const typed=document.getElementById("typed");
const phrases=["Full Stack Web Developer","Software Developer","IT Support Professional","Telecom Technical Support"];
let p=0,c=0,deleting=false;
function type(){
  const word=phrases[p];
  typed.textContent=deleting?word.slice(0,c--):word.slice(0,c++);
  let speed=deleting?45:85;
  if(!deleting&&c>word.length){deleting=true;speed=1400}
  if(deleting&&c<0){deleting=false;p=(p+1)%phrases.length;c=0;speed=300}
  setTimeout(type,speed);
}
type();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const links=[...document.querySelectorAll(".navbar nav a")];
const sections=[...document.querySelectorAll("main section[id]")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navbar nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
links.forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

document.getElementById("year").textContent=new Date().getFullYear();
