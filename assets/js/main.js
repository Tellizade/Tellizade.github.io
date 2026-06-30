// Yıl
document.getElementById("year").textContent = new Date().getFullYear();

// Mobil menü
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Tema
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  if (dark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// İngilizce çeviriler
const translations = {
  nav_about: "About",
  nav_skills: "Skills",
  nav_work: "Work",
  nav_path: "Experience",
  nav_contact: "Contact",

  hero_status: "Open to opportunities",
  hero_eyebrow: "Software Developer",
  hero_headline: "I turn ideas into products that actually work.",
  hero_intro:
    "Hi, I'm Emre Tellioğlu — an Information Systems & Technologies graduate. I build projects end to end, from mobile apps to AI models. What matters to me is not the technology itself, but the real problem it solves.",
  hero_cta_work: "View my work",
  hero_cta_cv: "Download CV",
  hero_cta_contact: "Get in touch",

  about_title: "About",
  about_p1:
    "I've gained experience at every step of the software process, from the idea stage to launching the product. I've worked on mobile and web development, artificial intelligence and machine learning, data analysis and database management.",
  about_p2:
    "The leadership, problem-solving and analytical thinking reinforced by my national rankings at TEKNOFEST turned into concrete solutions across accessibility, education, cybersecurity, agriculture and mining technologies. I'm a developer who learns new technologies quickly, works well in teams, and finishes work with care.",
  about_edu: "Education",
  about_edu_dept: "Information Systems & Technologies (BSc)",
  about_edu_grad: "Graduated",
  about_gpa: "GPA",
  about_lang: "Languages",
  lang_tr: "Turkish",
  lang_tr_lvl: "Native",
  lang_en: "English",

  skills_title: "Skills & Qualities",
  skills_lang: "Languages",
  skills_fw: "Frameworks & Libraries",
  skills_db: "Databases & Backend",
  skills_tools: "Tools & Practices",
  skills_soft: "Qualities",
  skills_soft_list:
    "Teamwork · Team leadership · Project management · Problem solving · Analytical thinking · Presentation & communication · Fast learning · Adaptability · Time management · Responsibility · Solution-oriented",

  work_title: "Selected Work",
  award_dev: "In Development",
  award_ongoing: "Competition Ongoing",
  w0_sub: "Congress & Paper Management Platform",
  w0_role: "Product Development · Web Platform",
  w0_desc:
    "A web platform we are actively developing to give academics back the time they lose on congress and paper workflows. It offers separate, clean panels for authors, reviewers and participants, bringing the whole flow — paper submission, double-blind review, revision loop, payment step and automatic post-presentation digital certificates — into a single account. It automates manual, scattered tasks like reviewer matching, status tracking and proceedings preparation to reduce editor and secretariat workload. Currently a live product in development, tested with real congresses.",
  w0_link: "congremy.com →",
  wm_title: "AI & Spectral Analysis Powered Hybrid Mineral Exploration App",
  wm_desc:
    "An exploration technology aiming to optimise the costly, environmentally harmful blind-drilling process in mining with AI. We use the biogeochemical stress signals that underground minerals create in vegetation as 'natural sensors'. From satellite and UAV multispectral data we extract features with NDVI, EVI and SAVI indices and reached ~84.8% average accuracy on pilot regions with a Random Forest model. As team captain I worked on data analysis and process management; the project is currently at the live presentation stage.",
  role_capm: "Team Captain",
  award_3rd: "3rd in Türkiye",
  award_2nd: "2nd in Türkiye",
  award_finalist: "Finalist",
  award_finalist2: "Finalist",
  award_team: "Team Member",
  role_dev: "Developer",
  role_cap: "Team Captain",
  role_cap2: "Team Captain",
  role_cap3: "Team Captain",

  w1_title: "AI-Powered Mobile URL Security Application",
  w1_desc:
    "An AI-powered mobile security app aiming to protect users from malicious and fake links. I built the user interface with Flutter, set up the Python-based backend and took an active role in training the machine learning model. By analysing OCR-extracted URLs with a trained Random Forest model we reached 98% accuracy and won 3rd place in Türkiye at the TEKNOFEST 2024 TÜBİTAK Project Competition.",
  w2_title: "Learning My English Words",
  w2_desc:
    "A mobile game based on the scientific 'Spaced Repetition' technique, designed to make language learning lasting and fun. As team captain I led the concept design and project management. Using Unity and C#, we built a dynamic algorithm that adapts to the user's learning speed, offering each user lasting retention at their own pace. The project won 2nd place in Türkiye at the TEKNOFEST 2023 TÜBİTAK Project Competition.",
  w3_title: "Barrier-Free Tomorrows Platform (Yades)",
  w3_desc:
    "An accessibility-focused platform that makes it easier to match individuals in need of care with suitable caregivers. As team captain I built the roadmap, distributed tasks and represented the team throughout TEKNOFEST. With a Firebase- and AI-based matching algorithm, we automated the best caregiver–individual match based on user profiles. Our project, Yades, competed and reached the finals in the first-ever Champions League at TEKNOFEST.",
  w4_title: "AI-Based Agricultural Productivity Platform",
  w4_desc:
    "A data-driven, AI-supported decision platform to increase productivity in agriculture. As team captain I managed team coordination and the project timeline. Using Python, Scikit-learn and Pandas we completed data preprocessing, model training and prediction end to end, turning agricultural data into meaningful, actionable outputs. The project was a finalist in the TEKNOFEST 2025 TRNC Agriculture Technologies category.",
  w5_title: "Rhisos Rocket Team",
  w5_role: "Design & Software Team Member",
  w5_desc:
    "One of my earliest team experiences, within an interdisciplinary engineering team in rocketry. As a Design & Software Team member, I contributed to software development and hardware integration for the rocket's avionics systems, gaining field experience in real-time data acquisition and hardware–software compatibility.",
  w5_stack: "Avionics · Software · Hardware Integration",

  more_title: "Academic & Coursework Projects",
  more_intro:
    "Alongside my competition projects, I built many course, term and final projects throughout my degree, applying different technologies hands-on.",
  more1_title: "Mobile App Coursework",
  more1_desc: "Course and term projects built with Flutter & Dart.",
  more2_title: "Database & Backend Projects",
  more2_desc: "Data modelling and application projects with PostgreSQL and SQL.",
  more3_title: "Machine Learning Studies",
  more3_desc: "Data analysis and model experiments with Python, Scikit-learn and Pandas.",

  path_title: "Responsibilities & Roles",
  p1_title: "Fair Operations & Coordination Officer",
  p1_desc: "Tracked the event flow and resolved on-site problems at the largest event in the festival's history.",
  p2_title: "President — Şarkışla Science, Art & Culture Club",
  p2_desc: "Increased student participation by organising technology seminars, workshops and social events.",
  p3_title: "Student Representative & Quality Control Member",
  p3_desc: "Strengthened communication by conveying students' academic and administrative views to the administration; also took part in the department's quality control processes.",
  p4_title: "Member — Sivas Cumhuriyet University Student Senate",
  p4_desc: "Represented my school at the university-wide Student Senate meetings and contributed to decision-making on student rights and regulations.",

  contact_title: "Contact",
  contact_lead:
    "I'm open to new opportunities and collaborations. Feel free to reach out about a position or a project.",
  contact_email: "Email",
  contact_phone: "Phone",
};

const original = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  original[el.getAttribute("data-i18n")] = el.innerHTML;
});

const langToggle = document.getElementById("langToggle");
let lang = localStorage.getItem("lang") || "tr";

function applyLang(next) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (next === "en" && translations[key]) el.innerHTML = translations[key];
    else el.innerHTML = original[key];
  });
  document.documentElement.lang = next;
  langToggle.textContent = next === "en" ? "TR" : "EN";
  localStorage.setItem("lang", next);
  lang = next;
}

langToggle.addEventListener("click", () => applyLang(lang === "en" ? "tr" : "en"));
if (lang === "en") applyLang("en");

// Kaydırma ilerleme çubuğu
const progress = document.getElementById("progress");
function updateProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progress.style.transform = `scaleX(${scrolled || 0})`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Aktif menü vurgusu
const sections = ["about", "skills", "work", "path", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navMap = {};
document.querySelectorAll(".nav__links a").forEach((a) => {
  navMap[a.getAttribute("href").slice(1)] = a;
});
const navIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const link = navMap[e.target.id];
      if (!link) return;
      if (e.isIntersecting) {
        Object.values(navMap).forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => navIO.observe(s));

// Kaydırmada beliren animasyon
const items = document.querySelectorAll(".block, .work__item, .mini, .path__item");
items.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
items.forEach((el) => io.observe(el));
