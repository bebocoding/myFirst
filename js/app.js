/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const navBar = document.querySelector('#navbar__list');
const docFrag = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const btnUp = document.createElement('button');//whe will use this button to go to page's top
const footer = document.querySelector('footer');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createLi(section){
    /*Creating the li element, stroing  section's data-nave attribute,setting it to the li element */
    const li = document.createElement('li');
    const nav = section.getAttribute('data-nav');
    li.setAttribute('data-nav',nav);
    
    li.textContent = nav;// setting li content--> dat-nav value

    /*Adding click Event Listener to li elements */
    li.addEventListener('click',function(){
        section.scrollIntoView(); // // Scroll to section on link click
    });

    docFrag.appendChild(li); // using DocumentFragment for better Performance
    
}
// button display logic
function buttonShow(){
    if(document.documentElement.scrollTop>100||document.body.scrollTop>100){
        btnUp.style.display = 'block';
    }
    else btnUp.style.display = 'none';
    
}
// transforms the user to page's top
function goToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // for safary users
}


/**
 * End Helper Functions
 */


//build the nav
function buildNav(){
    
    sections.forEach(createLi); // applying the createLi function for each Elements
    navBar.appendChild(docFrag);// now we can add the Fragment With contains all li elements to the navBar
}
// setting to top button
function buttonSetter(){
    footer.appendChild(btnUp)
    btnUp.innerHTML = '^';
    btnUp.setAttribute('onClick',"goToTop()");
    
}




// Add class 'active' to section when near top of viewport

function setActiveSection(){
    sections.forEach(function(section){
        const rect = section.getBoundingClientRect();// using bounding to get section's position in the view port


        if(rect.top>-270&&rect.top <458){
            // first we remove class from all sections
            sections.forEach(function(sc){
                sc.removeAttribute('class');
                
            });
            // then add class name to the Active section
            section.className = 'your-active-class';
            
            
        }
        
    });
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
    buildNav();
// Button set
    buttonSetter();


// Set sections as active
window.addEventListener('scroll',buttonShow);

// Button Display

window.addEventListener('scroll',setActiveSection);

