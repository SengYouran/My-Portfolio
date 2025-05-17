function hiddenShow() {
  const ctMe = document.querySelector(".check");
  const icon = document.querySelector(".socail1");
  const fristAbt = document.querySelector(".caption");
  const secAbt = document.querySelector(".abtMr");
  const btnAbt = document.querySelector(".firstAbt");
  const btnCancelAbt = document.querySelector(".cancel");
  ctMe.addEventListener("click", () => {
    icon.style.opacity = 1;
    icon.style.transform = "translateY(0rem)";
    ctMe.style.display = "none";
  });
  btnAbt.addEventListener("click", () => {
    fristAbt.style.display = "none";
    secAbt.style.display = "block";
    btnAbt.style.display = "none";
    btnCancelAbt.style.display = "block";
  });
  btnCancelAbt.addEventListener("click", () => {
    fristAbt.style.display = "block";
    secAbt.style.display = "none";
    btnAbt.style.display = "block";
    btnCancelAbt.style.display = "none";
  });
}
function showHidden() {
    const faBars = document.querySelector(".fa-bars");
    const faXmark = document.querySelector(".fa-xmark");
    const mbLink = document.querySelector(".mb-links");
    const a = document.querySelectorAll(".a");
  
    faBars.addEventListener("click", () => {
      mbLink.style.transform = "translateX(0)";
      faXmark.style.display = "block";
      faBars.style.display = "none";
    });
    faXmark.addEventListener("click", () => {
      mbLink.style.transform = "translateX(20rem)";
      faXmark.style.display = "none";
      faBars.style.display = "block";
    });
    a.forEach((links) => {
      links.addEventListener("click", () => {
        mbLink.style.transform = "translateX(20rem)";
        faXmark.style.display = "none";
        faBars.style.display = "block";
      });
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        faXmark.style.display = "none";
        faBars.style.display = "block";
      } else {
        faXmark.style.display = "none";
        faBars.style.display = "none";
        mbLink.style.transform = "translateX(20rem)";
      }
    });
}
const option = {
    threshold: 0.2,
};
function observer() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      }, option);
    });
    const ani = document.querySelectorAll(".scroll-item");
    const ani1 = document.querySelectorAll(".ani1");
    const aniLeft = document.querySelectorAll(".ani-left");
    const aniRight = document.querySelectorAll(".ani-right");
    ani.forEach((el) => observer.observe(el));
    ani1.forEach((el) => observer.observe(el));
    aniLeft.forEach((el) => observer.observe(el));
    aniRight.forEach((el) => observer.observe(el));
}
function dataHeaderProcess(){
    const header = document.querySelector(".header");
    const mapHeader = dataHeader.map((item)=>{
        const {id, image, logoTxt, linkone, linktwo, linkthree, linkfour} =item;
        return `
        <div class="logo" id-h="${id}">
          <img class="point4star" src="${image}" alt="Logo" />
          <h2 class="logo-text">${logoTxt}</h2>
        </div>
        <div class="links">
          <a href="#profileMe">${linkone}</a>
          <a href="#educationMe">${linktwo}</a>
          <a href="#aboutMe">${linkthree}</a>
          <a href="#project">${linkfour}</a>
        </div>
        <div class="socail">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-solid fa-square-envelope"></i>
        </div> `
    })
   header.innerHTML = mapHeader.join("");
}
function profileMEProcess(){
    const profile = document.querySelector(".container")
    const mapProfileME = profileME.map((item)=>{
        const {id, position, skill, ability, ability2, contact, image} = item;
        return `
         <div class="desc" id-p="${id}">
            <h2 class="position">
              ${position} <br /><span class="span"
                >${skill}<i class="fa-solid fa-gear"></i
              ></span>
            </h2>
            <p class="ability">
              ${ability} <br />${ability2}
            </p>
            <h2 class="check">${contact}</h2>
            <div class="socail1">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-solid fa-square-envelope"></i>
            </div>
          </div>
          <div class="image">
            <img class="img" src="${image}" alt="My picture" />
          </div>
        `
    })
    profile.innerHTML = mapProfileME.join("");
}
function educationProcess(){
    const education = document.querySelector(".education");
    const mapEducation = educationdData.map((item)=>{
        const {id, school, txtY, year, txtM, major} = item;
        return `
        <h2 class="skill-txt">Education</h2>
        <div class="height"></div>
            <div class="height1"></div>
            <div class="height1"></div>
            <div class="height1"></div>
        <div class="school" id-e="${id}">
            <div class="ic">
              <p class="icon fa-solid fa-user-secret"></p>
                <h2 class="uni-name">${school}</h2>
            </div>
              <ul>
                <li class="li">${txtY} <span class="liSp">${year}</span></li>
                  <li class="li">
                    ${txtM} <span class="liSp">${major}</span>
                  </li>
              </ul>
        </div>
        `
        })
    education.innerHTML = mapEducation.join("");
}
function skill(){
  const containerSkill = document.querySelector(".mySkill");
  const mapSkill = skillData.map((item)=>{
    const {id, subject, percentage} = item;
    return `
              <label class="html" for="${subject}">${subject}</label>
              <div class="progress-bar" id-bar="${id}">
                <div class="progress" id="${subject}"></div>
              </div>
              <p class="p">${percentage}</p>
    `
  }) 
  containerSkill.innerHTML = mapSkill.join("");
}



export {dataHeaderProcess, profileMEProcess, educationProcess ,hiddenShow, showHidden, observer, skill};
import { dataHeader,profileME, educationdData, skillData,} from "./data.js";