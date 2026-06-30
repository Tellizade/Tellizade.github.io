// ----- Yıl -----
document.getElementById("year").textContent = new Date().getFullYear();

// ----- Mobil menü -----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ----- Tema değiştirme -----
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// ----- İngilizce çeviriler -----
const translations = {
  nav_about: "About",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_achievements: "Achievements",
  nav_contact: "Contact",

  hero_greeting: "Hi, I'm",
  hero_role_prefix: "Software Developer",
  hero_role_accent: "· AI & Mobile",
  hero_tagline:
    "I know what it means to scribble an idea into a notebook late at night and turn it into a product that actually works months later. What matters is not the technology itself, but the real problem it solves.",
  hero_cta_projects: "View My Work",
  hero_cta_contact: "Get in Touch",

  stat_finals: "TEKNOFEST National Awards",
  stat_projects: "Completed Projects",
  stat_accuracy: "ML Model Accuracy",
  stat_captain: "Times Team Captain",

  about_title: "About Me",
  about_p1:
    "I'm an Information Systems & Technologies graduate with hands-on, end-to-end software development experience and a project-based learning mindset. I've worked across mobile and web development, artificial intelligence and machine learning, data analysis and database management.",
  about_p2:
    "From the idea stage to launching the product, I took active roles in design, development, testing and presentation. The team leadership, problem-solving and analytical thinking skills reinforced by my national rankings at TEKNOFEST turned into concrete results in accessibility, education, cybersecurity and agriculture technologies.",
  about_p3:
    "I'm a developer who is eager to learn new technologies quickly, works well in teams, and completes work meticulously.",
  about_card_edu: "Education",
  about_edu_dept: "Information Systems & Technologies (BSc)",
  about_edu_grad: "Expected Graduation",
  about_card_lang: "Languages",
  lang_tr: "Turkish — Native",
  lang_en: "English — B1 (Intermediate)",

  skills_title: "Technical Skills",
  skills_lang: "Programming Languages",
  skills_fw: "Frameworks & Libraries",
  skills_db: "Databases & Backend",
  skills_focus: "Focus Areas",
  focus_mobile: "Mobile Development",
  focus_ai: "Artificial Intelligence / ML",
  focus_data: "Data Analysis",
  focus_web: "Web Development",

  projects_title: "Projects & Achievements",
  badge_third: "3rd in Türkiye",
  badge_second: "2nd in Türkiye",
  badge_finalist: "Finalist",
  badge_finalist2: "Finalist",
  badge_team: "Team Member",
  role_dev: "Developer",
  role_captain: "Team Captain",
  role_captain2: "Team Captain",
  role_captain3: "Team Captain",

  proj1_title: "AI-Powered Mobile URL Security App",
  proj1_desc:
    "We built the UI with Flutter, a Python-based backend and a machine learning model. By analysing URLs extracted via OCR with a trained Random Forest model, we reached 98% accuracy.",
  proj2_title: "Learning My English Words",
  proj2_desc:
    "We designed a mobile game based on the scientific 'Spaced Repetition' technique. Using Unity and C#, we developed a dynamic algorithm that adapts to the user's learning speed for lasting retention.",
  proj3_title: "Barrier-Free Tomorrows Platform (Yades)",
  proj3_desc:
    "I managed the roadmap and task distribution and represented the team throughout TEKNOFEST. We designed a Firebase- and AI-based matching algorithm that automated the best caregiver–individual match based on user profiles.",
  proj4_title: "AI-Based Agricultural Productivity Platform",
  proj4_desc:
    "I managed team coordination and the project timeline. Using Python, Scikit-learn and Pandas, we completed data preprocessing, model training and prediction processes.",
  proj5_title: "Rhisos Rocket Team",
  proj5_sub: "Design & Software Team Member",
  proj5_desc:
    "I contributed as part of the team to software development and hardware integration for the rocket's avionics systems.",

  ach_title: "Leadership & Social Roles",
  ach1_title: "Fair Operations & Coordination Officer",
  ach1_desc:
    "TEKNOFEST Istanbul — At the largest event in the festival's history, I tracked the event flow and resolved on-site problems.",
  ach2_title: "President, Şarkışla Science, Art & Culture Club",
  ach2_desc:
    "I increased student participation by organising technology-focused seminars, workshops and social events.",
  ach3_title: "Student Representative, School Board",
  ach3_desc:
    "I strengthened communication by conveying students' academic and administrative views to the board.",
  ach4_title: "Member, Sivas Cumhuriyet University Student Senate",
  ach4_desc:
    "I contributed to decision-making processes regarding student rights and regulations across the university.",

  contact_title: "Contact",
  contact_lead:
    "I'm open to new opportunities and collaborations. Feel free to reach out about a project or a position.",
  footer_built: "Designed & coded by Emre Tellioğlu.",
};

// Türkçe orijinal metinleri sakla
const original = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  original[el.getAttribute("data-i18n")] = el.innerHTML;
});

const langToggle = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "tr";

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (lang === "en" && translations[key]) {
      el.innerHTML = translations[key];
    } else {
      el.innerHTML = original[key];
    }
  });
  document.documentElement.lang = lang;
  langToggle.textContent = lang === "en" ? "TR" : "EN";
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

langToggle.addEventListener("click", () => {
  applyLang(currentLang === "en" ? "tr" : "en");
});

if (currentLang === "en") applyLang("en");

// ----- Kaydırmada beliren animasyon -----
const revealEls = document.querySelectorAll(".section, .stat, .project");
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));
