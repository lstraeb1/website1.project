const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbar');
const navbarCollapse = document.querySelector('.collapse');
const imgContainer = document.getElementById('classes-img-container');
const classSkillsHeader = document.getElementById('class-skills-header');
const classSkillsSubtitle = document.getElementById('class-skills-subtitle');
const classSkillsButtons = document.getElementById('class-skills-buttons');
const classOption1 = document.getElementById('class-option-1');
const classOption2 = document.getElementById('class-option-2');
const classOption3 = document.getElementById('class-option-3');
const classOption4 = document.getElementById('class-option-4');
const classOption5 = document.getElementById('class-option-5');

const classOptionsObject = [
    {
        name: "Brazilian Jiu-Jitsu",
        image: "../Photos/BJJ_Photo_homepage-removebg-preview.png",
        header: "Develop Resilience and Precision",
        subtitle: "Enhance your problem-solving, adaptability, and physical conditioning.",
    },
    {
        name: "Judo",
        image: "../Photos/judo-img-copy.png",
        header: "Fostering Strength and Technique",
        subtitle: "Master the art of adaptability, build inner strength, and hone precise techniques with Judo."
    },
    {
        name: "Youth Jiu-jitsu",
        image: "../Photos/youth-bjj-photo-copy.png",
        header: "Empowering Young Minds",
        subtitle: "Unleash the potential of your child as they build resilience and learn essential life skills."
    },
    {
        name: "Striking",
        image: "../Photos/striking-class-photo-copy.png",
        header: "Precision and Power Unleashed",
        subtitle: "Experience a journey of discipline, agility, and self-discovery, and unleash the fighter within you."
    },
    {
        name: "Beginner's Jiu-Jitsu",
        image: "../Photos/beginners-bjj-photo.png",
        header: "Discover the Basics in Beginners Jiu-Jitsu",
        subtitle: "Learn the fundamentals and build a solid foundation as you delve into the art of grappling and self-defense."
    }

];

const classOptionSelect = (index) => {
    const selectedClass = classOptionsObject[index];

    imgContainer.innerHTML = `<img src="${selectedClass.image}" class="img-fluid" height="300px">`;
    classSkillsHeader.textContent = selectedClass.header;
    classSkillsSubtitle.textContent = selectedClass.subtitle;

    const allButtons = [classOption1, classOption2, classOption3, classOption4, classOption5];
    allButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';  
    });

    const selectedButton = allButtons[index];
    selectedButton.style.backgroundColor = 'red';
    selectedButton.style.color = 'white';
}

classOption1.addEventListener('click', () => classOptionSelect(0));
classOption2.addEventListener('click', () => classOptionSelect(1));
classOption3.addEventListener('click', () => classOptionSelect(2));
classOption4.addEventListener('click', () => classOptionSelect(3));
classOption5.addEventListener('click', () => classOptionSelect(4));

classOptionSelect(0);

navToggleBtn.addEventListener('click', () => {
    if (navToggleBtn.classList.contains('collapsed')) {
      body.style.overflowY = 'auto';
    } else {
      body.style.overflowY = 'hidden';
      navbar.style.overflowY = 'auto';
    }
  });