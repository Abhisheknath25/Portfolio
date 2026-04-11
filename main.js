import './style.css';
import { initScene } from './scene.js';
import { skills, projects, contacts } from './data.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize 3D Scene
initScene();

// 1. Populate Skills
const skillsGrid = document.getElementById('skills-grid');
skills.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `
    <img src="${skill.logoUrl}" alt="${skill.name}" style="width:40px; height:40px; object-fit:contain;" />
    <span>${skill.name}</span>
  `;
  skillsGrid.appendChild(card);
});

// 2. Populate Projects
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => {
  const pCard = document.createElement('div');
  pCard.className = 'project-card';
  
  const techString = project.tech.map(t => `<span>${t}</span>`).join('');

  pCard.innerHTML = `
    <div class="project-image-wrapper">
      <img src="${project.image}" alt="${project.title}" />
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <div class="project-desc">
        <p>${project.description}</p>
      </div>
      <div class="project-tech">
        ${techString}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="btn primary-btn">GitHub</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(pCard);
});

// 3. Populate Contacts
const contactLinks = document.getElementById('contact-links');
contacts.forEach(contact => {
  const cLink = document.createElement('a');
  cLink.href = contact.url;
  cLink.target = contact.url.startsWith('http') ? '_blank' : '_self';
  cLink.className = 'contact-logo';
  cLink.innerHTML = `
    ${contact.svg}
    <span>${contact.name}</span>
  `;
  contactLinks.appendChild(cLink);
});


// 4. GSAP Scroll Animations
// Fade in the hero immediately
gsap.to('#hero .fade-in', {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

// Trigger scroll animations for all other sections
const fadeElements = document.querySelectorAll('section:not(#hero) .fade-in');
fadeElements.forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
});

// Parallax for project images
const projectImages = document.querySelectorAll('.project-image-wrapper');
projectImages.forEach(img => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: -30
  });
});

// Contact row pop animation at the end of the page
gsap.from('#contact-links', {
  scrollTrigger: {
    trigger: '#contact',
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});
