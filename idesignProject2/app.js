let cancel=document.querySelector(".cancel");
let download=document.querySelector(".download");
let first=document.querySelector(".first");
let experience=document.querySelector(".experience");
let annual=document.querySelector(".annual");
let users=document.querySelector(".users");
let finished=document.querySelector(".finished");
let hidden=document.querySelector(".hidden");
let x=0,y=0,a=0,b=0;
//let expense=document.querySelector(".expense");
cancel.addEventListener('click',()=>{
download.style.display="none";
})
gsap.from('.first',{
    y:200,
    duration:1,
    opacity:0,
    delay:1
})
//gsap.registerPluggin(scrollTrigger);
gsap.from(".expense",{
    scrollTrigger:{
        trigger:".expense",
        start:"top center",
        end:"bottom center",
        toggleActions:"restart pause reverse pause",
        scrub:2,

    },
    x:900,
    duration:2
})
let mm=gsap.matchMedia();
mm.add("(min-width:992px)",()=>{
    gsap.to(".business",{
        scrollTrigger:{
            trigger:".business",
            start:"top top",
            end:"center center",
            toggleActions:"restart pause reverse pause",
            scrub:2,
            pin:true
        },
        x:"-100%",
        duration:3
    })
    gsap.to(".joins",{
        scrollTrigger:{
            trigger:".joins",
            start:"top top",
            end:"center center",
            toggleActions:"restart pause reverse pause",
            scrub:2,
        },
        x:"-100%",
        duration:1
    })
})
gsap.from(".numbers",{
    scrollTrigger:{
        trigger:".numbers",
        start:"top bottom",
        toggleActions:"restart pause reverse pause"
    },
    y:100,
    duration:2,
    onStart:()=>{
        setInterval(()=>{
            x++;
            if(x<=20){
            experience.innerHTML=x;
            }
        },90)
        
        setInterval(()=>{
            y++;
            if(y<=98){
                annual.innerHTML=y+"%";
                }
        },20)
        setInterval(()=>{
            a++;
            if(a<=200){
                users.innerHTML=a+"K";
                }
        },10)
        setInterval(()=>{
            b++;
            if(b<=100){
                finished.innerHTML=b+"%";
                }
        },20)
    }
})
const display=()=>{
    hidden.style.top="0px";
}
const hide=()=>{
    hidden.style.top="-"+500+"px";
}
const goTop=()=>{
window.scrollTo({top:-100,behavior:"smooth"});
}
let c=0;
const slideLeft=()=>{
    c++;
    const mover=document.querySelector(".mover").classList.toggle("slideMe");
    const iconChange=document.querySelector(".iconChange");
    if(c%2===1){
iconChange.innerHTML='<i class="bi bi-x"></i>';
    }
    else{
        iconChange.innerHTML='<i class="bi bi-list"></i>';
    }
}