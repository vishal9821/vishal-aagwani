const boxes = document.querySelectorAll(".box");
const video = document.querySelector("video");
const nextbtn = document.querySelector(".carousel-control-next");
const prevbtn = document.querySelector(".carousel-control-prev");
const footer = document.querySelector(".my_work");
const footerbox = document.querySelector(".box-bottom")
const year = document.querySelector("#year")
const btn_open = document.querySelector(".btn-open");
const btn_close = document.querySelector(".btn-close");
const nav = document.querySelectorAll(".nav");

window.addEventListener('scroll' , scrollbox)
scrollbox();

// video.addEventListener('mouseenter',()=>{
//     video.play();
// });

// video.addEventListener('mouseleave',()=>{
//     video.pause();
// });
// nextbtn.addEventListener('mouseenter',()=>{
//     video.play();
// });

// nextbtn.addEventListener('mouseleave',()=>{
//     video.pause();
// });
// prevbtn.addEventListener('mouseenter',()=>{
//     video.play();
// });

// prevbtn.addEventListener('mouseleave',()=>{
//     video.pause();
// });

function scrollbox(){
    const triggerbotton = window.innerHeight/1.4;
    const tr2 = footer.getBoundingClientRect().bottom;
    
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;
        if(boxtop<triggerbotton){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
         }
    });

    if(tr2<window.innerHeight){
        footerbox.classList.add('show');
    }else{
        footerbox.classList.remove('show');
    };
};

const dt = new Date();
year.innerHTML = dt.getFullYear();

btn_open.addEventListener("click",()=>{
    nav.forEach(nav_el=>nav_el.classList.add('visible'));
    btn_open.style.visibility = "hidden";
})

btn_close.addEventListener("click",()=>{
    nav.forEach(nav_el=>nav_el.classList.remove('visible'));
    setTimeout(()=>btn_open.style.visibility = "visible",600);
})