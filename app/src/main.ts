import 'virtual:windi.css'
import "./style.css";

enum IDsClassesAndElements {
    NAVBAR = '#nav',
    NAV_BTN = '#nav-btn',
    CLOSE_BTN = '#close-btn',
    SIDEBAR = '#sidebar',
    BACKDROP = '#backdrop',
    DATE = "#date",
    FIXED = "fixed",
    HIDDEN = "hidden",
    NEG_TRANSLATE_X_FULL = "-translate-x-full",
} 

const { body } = document

const numberOfPixelsDownIntoThePageRequiredToTriggerTheScroll = 80;


const navbar = body.querySelector(IDsClassesAndElements.NAVBAR);
const navBtn = body.querySelector(IDsClassesAndElements.NAV_BTN);
const closeBtn = body.querySelector(IDsClassesAndElements.CLOSE_BTN);
const backdrop = body.querySelector(IDsClassesAndElements.BACKDROP);
const date = body.querySelector(IDsClassesAndElements.DATE);



if (navbar && navBtn && closeBtn && backdrop && date) {

const sidebar = backdrop.querySelector(IDsClassesAndElements.SIDEBAR);
  
    window.addEventListener("scroll", function () {
  if (window.pageYOffset > numberOfPixelsDownIntoThePageRequiredToTriggerTheScroll) {
    navbar.classList.add(IDsClassesAndElements.FIXED);
  } else {
    navbar.classList.remove(IDsClassesAndElements.FIXED);
  }
});
// show sidebar
navBtn.addEventListener("click", function () {

  backdrop?.classList.remove(IDsClassesAndElements.HIDDEN);

  sidebar?.classList.remove(IDsClassesAndElements.NEG_TRANSLATE_X_FULL)

});

closeBtn.addEventListener("click", function () {
  backdrop?.classList.add(IDsClassesAndElements.HIDDEN);
  sidebar?.classList.add(IDsClassesAndElements.NEG_TRANSLATE_X_FULL)

});
// set year
    date.innerHTML = new Date().getFullYear().toString();

} else {

  console.error(
    `one of these elements doesnt have an id  ${JSON.stringify({
      navBtn,
      navbar,
      closeBtn,
      backdrop,
      date
    })} `
  )
}






// // add fixed class to navbar
//