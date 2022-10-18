// Selectors
var buttons = document.getElementsByClassName('info-button');
let cover = document.getElementById('cover');
var upArrows = document.getElementsByClassName('up-arrow');
var downArrows = document.getElementsByClassName('down-arrow');
let welcomePage = document.getElementById('welcome-page');

let aboutmebutton = document.getElementById('AboutMe');
let experiencebutton = document.getElementById('Experience');
let projectsbutton = document.getElementById('Projects');
let hobbiesbutton = document.getElementById('Hobbies');
let gamingbutton = document.getElementById('Gaming');
let animebutton = document.getElementById('Anime');
let musicbutton = document.getElementById('Music');

let hobbiessection = document.getElementById('HobbiesSection');

let aboutmearrow = document.getElementById('aboutme-arrow');
let experiencearrow = document.getElementById('experience-arrow');
let projectsarrow = document.getElementById('projects-arrow');
let hobbiesarrow = document.getElementById('hobbies-arrow');
let gamingarrow = document.getElementById('gaming-arrow');
let animearrow = document.getElementById('anime-arrow');
let musicarrow = document.getElementById('music-arrow');

let aboutmepage = document.getElementById('aboutme-page');
let experiencepage = document.getElementById('experience-page');
let projectspage = document.getElementById('projects-page');
let gamingpage = document.getElementById('gaming-page');
let animepage = document.getElementById('anime-page');
let musicpage = document.getElementById('music-page');

let titlepagemovebutton = document.getElementById('fullscreen-warning');

// Event Listeners
cover.addEventListener('click', coverDown);                             // Turn cover on after clicking button
hobbiesbutton.addEventListener('mouseover', hobbiesExtendOn);           // Extend the hobbies tab
aboutmebutton.addEventListener('mouseover', hobbiesExtendOff);          // Retract the hobbies tab
experiencebutton.addEventListener('mouseover', hobbiesExtendOff);       // Retract the hobbies tab
projectsbutton.addEventListener('mouseover', hobbiesExtendOff);         // Retract the hobbies tab

aboutmebutton.addEventListener('mouseover', aboutmeArrowToggle);        // Extend about me arrow
aboutmebutton.addEventListener('mouseout', aboutmeArrowToggle);         // Retract about me arrow

experiencebutton.addEventListener('mouseover', experienceArrowToggle);  // Extend experience arrow
experiencebutton.addEventListener('mouseout', experienceArrowToggle);   // Retract experience arrow

projectsbutton.addEventListener('mouseover', projectsArrowToggle);      // Extend projects arrow
projectsbutton.addEventListener('mouseout', projectsArrowToggle);       // Retract projects arrow

hobbiesbutton.addEventListener('mouseover', hobbiesArrowToggle);        // Extend hobbies arrow
hobbiesbutton.addEventListener('mouseout', hobbiesArrowToggle);         // Retract hobbies arrow

gamingbutton.addEventListener('mouseover', gamingArrowToggle);          // Extend gaming arrow
gamingbutton.addEventListener('mouseout', gamingArrowToggle);           // Retract gaming arrow

animebutton.addEventListener('mouseover', animeArrowToggle);            // Extend anime arrow
animebutton.addEventListener('mouseout', animeArrowToggle);             // Retract anime arrow

musicbutton.addEventListener('mouseover', musicArrowToggle);            // Extend music arrow
musicbutton.addEventListener('mouseout', musicArrowToggle);             // Retract music arrow

aboutmebutton.addEventListener('click', aboutmePageToggle);             // Proper shift between screens
experiencebutton.addEventListener('click', experiencePageToggle);       // Proper shift between screens
projectsbutton.addEventListener('click', projectsPageToggle);           // Proper shift between screens
gamingbutton.addEventListener('click', gamingPageToggle);               // Proper shift between screens
animebutton.addEventListener('click', animePageToggle);                 // Proper shift between screens
musicbutton.addEventListener('click', musicPageToggle);                 // Proper shift between screens

titlepagemovebutton.addEventListener('click', tanglePageToggle);

// Tracking Vars
var aboutmeToggle = 0;
var experienceToggle = 0;
var projectsToggle = 0;
var gamingToggle = 0;
var animeToggle = 0;
var musicToggle = 0;


// Functions
// Give all buttons click event
for (var i = 0; i < buttons.length; i++) {
    if (i != 3) {
        buttons[i].addEventListener('click', coverUp);
    }
}

function coverUp() {
    cover.classList.remove('cover-down');
    cover.classList.add('cover-on');
    this.classList.add('info-button-hover');
}

function coverDown() {
    cover.classList.remove('cover-on');
    cover.classList.add('cover-down');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('info-button-hover');
    }
    if (aboutmeToggle == 1) {
        aboutmepage.classList.toggle('toggle');
        aboutmeToggle = 0;
    }
    if (experienceToggle == 1) {
        experiencepage.classList.toggle('toggle');
        experienceToggle = 0;
    }
    if (projectsToggle == 1) {
        projectspage.classList.toggle('toggle');
        projectsToggle = 0;
    }
    if (gamingToggle == 1) {
        gamingpage.classList.toggle('toggle');
        gamingToggle = 0;
    }
    if (animeToggle == 1) {
        animepage.classList.toggle('toggle');
        animeToggle = 0;
    }
    if (musicToggle == 1) {
        musicpage.classList.toggle('toggle');
        musicToggle = 0;
    }
}

function hobbiesExtendOn() {
    hobbiessection.classList.add('hobbies-extend-on');
    hobbiessection.classList.remove('hobbies-extend-off');
}

function hobbiesExtendOff() {
    hobbiessection.classList.remove('hobbies-extend-on');
    hobbiessection.classList.add('hobbies-extend-off');
}


// Arrow Toggling
function aboutmeArrowToggle() {
    aboutmearrow.classList.toggle('toggle');
}

function experienceArrowToggle() {
    experiencearrow.classList.toggle('toggle');
}

function projectsArrowToggle() {
    projectsarrow.classList.toggle('toggle');
}

function hobbiesArrowToggle() {
    hobbiesarrow.classList.toggle('toggle');
}

function gamingArrowToggle() {
    gamingarrow.classList.toggle('toggle');
}

function animeArrowToggle() {
    animearrow.classList.toggle('toggle');
}

function musicArrowToggle() {
    musicarrow.classList.toggle('toggle');
}


// Page Toggling
function aboutmePageToggle() {
    aboutmepage.classList.toggle('toggle');
    aboutmeToggle = 1;
}

function experiencePageToggle() {
    experiencepage.classList.toggle('toggle');
    experienceToggle = 1;
}

function projectsPageToggle() {
    projectspage.classList.toggle('toggle');
    projectsToggle = 1;
}

function gamingPageToggle() {
    gamingpage.classList.toggle('toggle');
    gamingToggle = 1;
}

function animePageToggle() {
    animepage.classList.toggle('toggle');
    animeToggle = 1;
}

function musicPageToggle() {
    musicpage.classList.toggle('toggle');
    musicToggle = 1;
}



// Welcome Page
function tanglePageToggle() {

    setTimeout(function() {
        welcomePage.classList.add('cover-down'); 
    }, 650);

    for (var i = 0; i < upArrows.length; i++) {
        (function (i) {
            setTimeout(function() {
                upArrows[i].classList.add('welcome-up');
            }, 10 * i);
        })(i);
    };

    for (var j = 0; j < downArrows.length; j++) {
        (function (j) {
            setTimeout(function() {
                downArrows[j].classList.add('welcome-down');
            }, 10 * j);
        })(j);
    };
}