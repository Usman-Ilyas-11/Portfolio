
function toggleCard(card) {
  const allCards = document.querySelectorAll('.card:not(.project-card)');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}

function toggleProjectDetails(card) {
  const allProjectCards = document.querySelectorAll('.project-card');
  allProjectCards.forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}


function calculateAge() {
  const dob = new Date("2005-09-02");
  const now = new Date();

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = `${years} Years, ${months} Months, ${days} Days`;
  }
}

window.onload = calculateAge;

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};
