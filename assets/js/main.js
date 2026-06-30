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
  hero_eyebrow: "Sivas, Türkiye — Software Developer",
  hero_headline: "I turn ideas into products that actually work.",
  hero_intro:
    "Hi, I'm Emre Tellioğlu — an Information Systems & Technologies graduate. I build projects end to end, from mobile apps to AI models. What matters to me is not the technology itself, but the real problem it solves.",
  hero_cta_work: "View my work",
  hero_cta_contact: "Get in touch",
  fact_awards: "TEKNOFEST national awards",
  fact_acc: "ML model accuracy",
  fact_captain: "times team captain",
  fact_projects: "completed projects",

  about_title: "About",
  about_p1:
    "I've gained experience at every step of the software process, from the idea stage to launching the product. I've worked on mobile and web development, artificial intelligence and machine learning, data analysis and database management.",
  about_p2:
    "The leadership, problem-solving and analytical thinking reinforced by my national rankings at TEKNOFEST turned into concrete solutions across accessibility, education, cybersecurity and agriculture technologies. I'm a developer who learns new technologies quickly, works well in teams, and finishes work with care.",
  about_edu: "Education",
  about_edu_dept: "Information Systems & Technologies (BSc)",
  about_edu_grad: "Expected graduation",
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
    "Teamwork · Team leadership · Project management · Problem solving · Analytical thinking · Presentation & communication · Fast learning · Adaptability · Responsibility · Solution-oriented",

  work_title: "Selected Work",
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
    "I built the interface with Flutter and the backend with Python. By analysing OCR-extracted URLs with a trained Random Forest model, we reached 98% accuracy.",
  w2_title: "Learning My English Words",
  w2_desc:
    "We designed a mobile game based on the scientific 'Spaced Repetition' technique. Using Unity and C#, we built a dynamic algorithm adapting to the user's learning speed for lasting retention.",
  w3_title: "Barrier-Free Tomorrows Platform (Yades)",
  w3_desc:
    "I managed the roadmap and task distribution and represented the team. With a Firebase- and AI-based matching algorithm, we automated the best caregiver–individual match based on user profiles.",
  w4_title: "AI-Based Agricultural Productivity Platform",
  w4_desc:
    "I managed team coordination and the project timeline. Using Python, Scikit-learn and Pandas, we completed data preprocessing, model training and prediction.",
  w5_title: "Rhisos Rocket Team",
  w5_role: "Design & Software Team Member",
  w5_desc:
    "I contributed as part of the team to software development and hardware integration for the rocket's avionics systems.",
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

  path_title: "Experience & Roles",
  p1_title: "Fair Operations & Coordination Officer",
  p1_desc: "Tracked the event flow and resolved on-site problems at the largest event in the festival's history.",
  p2_title: "President — Şarkışla Science, Art & Culture Club",
  p2_desc: "Increased student participation by organising technology seminars, workshops and social events.",
  p3_title: "Student Representative — School Board",
  p3_desc: "Strengthened communication by conveying students' academic and administrative views to the board.",
  p4_title: "Member — Sivas Cumhuriyet University Student Senate",
  p4_desc: "Contributed to decision-making processes on student rights and regulations.",

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
