

// MENU SHOW and HIDDEN

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// ----------SKILLS---------

const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  let itemClass = this.parentNode.classList;

  // Close all skills
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close';
  }

  // Open the clicked skill
  if (itemClass.contains('skills_close')) {
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

// ----------------------Qualification Tabs-----------------

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


 tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
    
  })
 })     

//  ======================Services modal===========
const modalviews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

 let modal = function(modalClick){
     modalviews[modalClick].classList.add('active-modal')
 }

 modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
 })

 modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalviews.forEach((modalview) =>{
      modalview.classList.remove('active-modal')
    })
  })
 })

// ---------Projects Modal---------

const modal2 = document.getElementById("project-modal");

const projects = {
  blood: {
  title: "BloodAid",
  image: "image/blodaid-image.jpeg",
  tech: "React, Node.js, MongoDB, Firebase, Stripe",
  description:
    "BloodAid is a full-stack blood donation management system connecting donors, volunteers, and admins. It streamlines donation requests, ensures role-based access, and helps people find blood quickly by group and location.",
  challenges:
    "Implementing role-based access, managing donation requests, real-time updates, and secure payment processing.",
  future:
    "Mobile app version, push notifications, AI-based donor suggestions, and enhanced reporting features.",
  live: "https://blood-aid-client.netlify.app/",
  github: "https://github.com/marufaakter1947/Blood-Aid",
},
  food: {
    title: "Food Share",
    image: "image/foodshare.png",
    tech: "React, Node.js, MongoDB, Firebase",
    description:
      "A community-based food donation platform to reduce waste and help people in need.",
    challenges:
      "Managing donation status, authentication, and real-time updates.",
    future:
      "Notification system, mobile app.",
    live: "https://food-share-client-by-marufa.netlify.app/",
    github: "https://github.com/yourname/food-share-client",
  },

  skill: {
    title: "SkillShare",
    image: "image/Skill.png",
    tech: "React, Firebase, Tailwind CSS",
    description:
      "A local skill exchange platform to connect people and share knowledge.",
    challenges:
      "Skill matching and role-based access.",
    future:
      "Chat system, rating, premium features.",
    live: "https://skill-share-project-by-marufa.netlify.app/",
    github: "https://github.com/yourname/skillshare-client",
  },

  hero: {
    title: "Hero Apps",
    image: "image/Hero.png",
    tech: "React, Chart.js, REST API",
    description:
      "An app discovery platform with charts and ratings.",
    challenges:
      "Dynamic chart rendering and performance optimization.",
    future:
      "Reviews, authentication, admin panel.",
    live: "https://hero-apps-by-marufa.netlify.app/",
    github: "https://github.com/yourname/hero-apps-client",
  },
  taxiBurger: {
  title: "TaxiBurger",
  image: "image/taxiburger-img.png",
  tech: "React, Node.js, API integration",
  description:
    "TaxiBurger is an online food ordering platform that allows users to browse menus, place orders in real-time.",
  challenges:
    "Managing real-time order updates and authentication.",
  future:
    "Add delivery tracking map, push notifications, and loyalty rewards system.",
  live: "https://taxi-burger-a98216.netlify.app/",
  github: "https://github.com/marufaakter1947/Taxi-Burger-Restaurant",
},

};

function openModal(key) {
  const data = projects[key];

  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-image").src = data.image;
  document.getElementById("modal-tech").innerText = data.tech;
  document.getElementById("modal-description").innerText = data.description;
  document.getElementById("modal-challenges").innerText = data.challenges;
  document.getElementById("modal-future").innerText = data.future;
  document.getElementById("modal-live").href = data.live;
  document.getElementById("modal-github").href = data.github;

  modal2.classList.add("active-modal");
}

function closeModal() {
  modal2.classList.remove("active-modal");
}



// =============Scroll section active link==========

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// ==================Change background header===================
function scrollHeader() {
  const nav = document.getElementById('header')
  //when the scroll is greater than 80 viewport height, add the scroll header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ==============Show scroll up=============
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is heigher than 500 viewport height, add the show scroll class  to the a tag with the scroll.
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ===============Dark light theme============

document.addEventListener("DOMContentLoaded", () => {

  // ===== Theme Button =====
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-sun';

  // Previously selected
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
  }

  // Theme toggle
  if(themeButton){
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }

  // ===== EmailJS Contact Form =====
  (function(){
    emailjs.init("mwPQTd-w_0CthJjqa");
  })();

  const contactForm = document.getElementById("contact-form");

  if(contactForm){
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();

      emailjs.sendForm(
        "service_obhmjvn",
        "template_osi7bpc",
        this
      ).then(
        () => {
          Toastify({
      text: "Message sent successfully!",
      duration: 3000,         
      gravity: "top",          
      position: "right",       
      style: {
        background: "green",
        color: "white"
      }
    }).showToast();
          contactForm.reset();
        },
        (error) => {
          alert("Failed to send message!");
          console.log(error);
        }
      );
    });
  }

});

