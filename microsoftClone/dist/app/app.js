let x=false,y=false;
const goto_btn=document.querySelector(".goto-btn");
var swiper1= new Swiper(".first-swiper", {
  spaceBetween: 30,
  loop:true,
  speed:600,
  // autoplay:{
  //   delay:3000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:false
  },
});

var swiper2= new Swiper(".second-swiper", {
  spaceBetween: 30,
  loop:true,
  speed:600,
  // autoplay:{
  //   delay:3000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:false
  },
});
const play1=document.querySelector(".play-btn1");
const play2=document.querySelector(".play-btn2")
let c="c",d="d";
const changer=(a,play,check)=>{
  if(a===false){
  play.innerHTML=`<i class="fas fa-play-circle"></i>`;
  }
  else{
  play.innerHTML=`<i class="far fa-pause-circle"></i>`;
  }
  (check==="c")?x=!a:null;
  (check==="d")?y=!a:null;
  
  console.log(x,y)
}
//functions to pause/play 
const play=(bol,ele)=>{
  if(bol===true){
  ele.autoplay.stop();
  }
  else{
    ele.autoplay.start();
  }
}
  play1.addEventListener("click",()=>{
    changer(x,play1,c);
    play(x,swiper1);
  });
  play2.addEventListener("click",()=>{


    changer(y,play2,d);
    play(y,swiper2);
  });
  //goto top button
  const gotoTop=()=>{
    var offsetY = window.scrollY
    if(offsetY<710){
      goto_btn.style.display="none";
    }
    else{
      goto_btn.style.display="block";
    }
    console.log(offsetY)
  }
  window.addEventListener("scroll",gotoTop);
  goto_btn.addEventListener("click",()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
  })


  