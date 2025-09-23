// // Main JS: hamburger menu, smooth scroll, form validation, reveal-on-scroll, nav auto-close
// (function(){
//   // set year in footers
//   document.getElementById('year')?.textContent = new Date().getFullYear();
//   document.getElementById('year-2')?.textContent = new Date().getFullYear();
//   document.getElementById('year-3')?.textContent = new Date().getFullYear();
//   document.getElementById('year-4')?.textContent = new Date().getFullYear();

//   // Smooth scroll for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//       const targetId = this.getAttribute("href");
//       const targetEl = document.querySelector(targetId);
//       if (targetEl) {
//         e.preventDefault();
//         targetEl.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   // Nav toggle + animation
//   function setupNavToggle(toggleId, navId){
//     const btn = document.getElementById(toggleId);
//     const nav = document.getElementById(navId);
//     if(!btn || !nav) return;

//     btn.addEventListener('click', ()=>{
//       const expanded = btn.getAttribute('aria-expanded') === 'true';
//       btn.setAttribute('aria-expanded', String(!expanded));
//       nav.classList.toggle('open');
//     });
//   }
//   setupNavToggle('nav-toggle','main-nav');
//   setupNavToggle('nav-toggle-2','main-nav-2');
//   setupNavToggle('nav-toggle-3','main-nav-3');
//   setupNavToggle('nav-toggle-4','main-nav-4');

//   // Auto-close nav on link click
//   function setupNavAutoClose(navId, toggleId) {
//     const nav = document.getElementById(navId);
//     const btn = document.getElementById(toggleId);
//     if (!nav || !btn) return;

//     nav.querySelectorAll("a").forEach((link) => {
//       link.addEventListener("click", () => {
//         if (nav.classList.contains("open")) {
//           nav.classList.remove("open");
//           btn.setAttribute("aria-expanded", "false");
//         }
//       });
//     });
//   }
//   setupNavAutoClose("main-nav", "nav-toggle");
//   setupNavAutoClose("main-nav-2", "nav-toggle-2");
//   setupNavAutoClose("main-nav-3", "nav-toggle-3");
//   setupNavAutoClose("main-nav-4", "nav-toggle-4");

//   // reveal on scroll using IntersectionObserver
//   const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(ent=>{
//       if(ent.isIntersecting) ent.target.classList.add('is-visible');
//     });
//   },{threshold:0.12});
//   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

//   // contact form validation + fake submit
//   const form = document.getElementById('contact-form');
//   if(form){
//     form.addEventListener('submit', (e)=>{
//       e.preventDefault();
//       const status = document.getElementById('form-status');
//       const name = document.getElementById('name');
//       const email = document.getElementById('email');
//       const message = document.getElementById('message');

//       if(!name.value || name.value.trim().length < 2){ status.textContent = 'Please enter your name.'; name.focus(); return; }
//       if(!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){ status.textContent = 'Please enter a valid email.'; email.focus(); return; }
//       if(!message.value || message.value.trim().length < 10){ status.textContent = 'Message must be at least 10 characters.'; message.focus(); return; }

//       status.textContent = 'Sending...';

//       // simulate network call
//       setTimeout(()=>{
//         status.textContent = 'Message sent — thank you!';
//         form.reset();
//       },800);
//     });
//   }
// })();

const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

// Select all images that trigger the lightbox
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.lightbox .close');

// Open lightbox
lightboxTriggers.forEach(img => {
  img.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Close button
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});

// Close on overlay click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  }
});

