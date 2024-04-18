const usability = document.getElementById("usability");
const internal = document.getElementById("internal");
const mainComponents = document.querySelector("#mainComponent");
const hiddenSlider = document.querySelector(".hiddenSlider");
let child = document.querySelector(".child");
let remove = document.querySelector(".remove");
let hidden = document.querySelector(".hidden");
let cancel = document.querySelector(".cancel");
let download = document.querySelector(".download");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
//animation changer variables
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icon5 = document.querySelector(".icon5");
let icon6 = document.querySelector(".icon6");
let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");
let content3 = document.querySelector(".content3");
let content4 = document.querySelector(".content4");
let content5 = document.querySelector(".content5");
let content6 = document.querySelector(".content6");
let test = true;
let x = 0;
cancel.addEventListener('click', () => {
    download.style.display = "none";
})
const slider = () => {
    if (test === true) {
        internal.style.borderBottom = "none";
        usability.style.color = "#c30c96";
        internal.style.color = "gray";
        usability.style.borderBottom = "1px solid";
        icon1.innerHTML = `<i class="bi bi-phone-flip" style="font-size:70px;"></i>`;
        content1.innerHTML = `Mobile-first design`;
        icon2.innerHTML = `<i
        class="bi bi-journal-bookmark-fill"></i>`;
        content2.innerHTML = `Tax breakdowns`;
        icon3.innerHTML = `<i class="bi bi-receipt-cutoff"></i>`;
        content3.innerHTML = `Smart-attach receipts`;
        icon4.innerHTML = `<i class="bi bi-arrow-clockwise"></i>`;
        content4.innerHTML = `Single sign-on`;
        icon5.innerHTML = `<i
        class="bi bi-check-square"></i>`;
        content5.innerHTML = `Easy approvals`;
        icon6.innerHTML = `<i class="bi bi-person-badge"></i>`;
        content6.innerHTML = `Proxy user access`;
    }
    else {
        usability.style.borderBottom = "none";
        internal.style.color = "#c30c96";
        usability.style.color = "gray";
        internal.style.borderBottom = "1px solid";
        icon1.innerHTML = `<i class="bi bi-journal-bookmark"></i>`;
        content1.innerHTML = `Reporting`;
        icon2.innerHTML = `<i class="bi bi-postcard-fill"></i>`;
        content2.innerHTML = `Card reconciliation`;
        icon3.innerHTML = `<i class="bi bi-nintendo-switch"></i>`;
        content3.innerHTML = `Role-based access`;
        icon4.innerHTML = `<i class="bi bi-motherboard-fill"></i>`;
        content4.innerHTML = `Policy alerts`;
        icon5.innerHTML = `<i class="bi bi-journal-code"></i>`;
        content5.innerHTML = `Approvals by budget area`;
        icon6.innerHTML = `<i class="bi bi-cassette-fill"></i>`;
        content6.innerHTML = `Audit history `;
    }
}
function slider1() {
    test = true;
    slider();
}
function slider2() {
    test = false;
    slider();
}
usability.addEventListener("click", slider1);
internal.addEventListener("click", slider2);
//starting of gsap
//gsap.registerPluggin(scrollTrigger);

gsap.from(".topic", {
    x: 150,
    duration: 1,
    opacity: 0,
    delay: .5
})
gsap.from(".section1", {
    y: 100,
    duration: 1,
    opacity: 0,
    delay: .5
})
gsap.to("#section2", {
    scrollTrigger: {
        start: "top center",
        end: "center top",
        trigger: "#section2",
        toggleActions: "restart pause reverse pause",
        scrub: 2,
    },
    y: 30,
    duration: 2
})
gsap.to("#section1", {
    scrollTrigger: {
        start: "top center",
        end: "center top",
        trigger: "#section1",
        toggleActions: "restart pause reverse pause",
        scrub: 2,
    },
    y: -40,
    delay: 6,
    duration: 1
})
gsap.to("#section3", {
    scrollTrigger: {
        start: "top center",
        end: "center top",
        trigger: "#section3",
        toggleActions: "restart pause reverse pause",
        scrub: 2,
    },
    y: -50,
    duration: 1
})
let showData = document.querySelectorAll(".showData");
let childs = document.querySelectorAll(".child");
let icons = document.querySelectorAll(".icon");
showData.forEach((value, index) => {
    let child = value.querySelector(".child");
    let icon = value.querySelector(".icon");
icon.addEventListener("click",()=>{
   for(let i=0;i<showData.length;i++){
    if(showData[i]!=value){
        showData[i].classList.remove("expand");
    }
    else{
        value.classList.toggle("expand");
    }
   }
})

})

const display = () => {
    hidden.style.top = 0 + "%";
}
const hide = () => {
    hidden.style.top = "-" + 500 + "px";
}
const goTop = () => {
    window.scrollTo({ top: -100, behavior: "smooth" });
}
let a=0;
const slideLeft=()=>{
    a++;
    const mover=document.querySelector(".mover").classList.toggle("slideMe");
    const iconChange=document.querySelector(".iconChange");
    if(a%2===1){
iconChange.innerHTML='<i class="bi bi-x"></i>';
    }
    else{
        iconChange.innerHTML='<i class="bi bi-list"></i>';
    }
}