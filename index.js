// variables
let hamburger = document.querySelector('#hamburger');
let section = document.querySelector('#section');
let cancel = document.querySelector('#cancel');
let sunIcon = document.querySelector("#sun");
let moonIcon = document.querySelector("#moon");
const sectionMoonIcon = document.querySelector("#section-moon");
const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme)
// functions
const removeHidden = () => {
    section.classList.remove('hidden');
}

const addHidden = () => {
    section.classList.add('hidden')
}

const iconToggle = () => {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
};

// event listeners
hamburger.addEventListener('click', ()=> {
    removeHidden();
})

cancel.addEventListener('click', ()=> {
    addHidden();
});

moonIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme')
    }   
})


sectionMoonIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme')
    }   
})


