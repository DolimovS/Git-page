
//nav_left

const acideBar=document.querySelector(".acide_bar");
const fa_xmark_left=document.querySelector("#fa_xmark_left")
const fa_bars_left=document.querySelector("#fa_bars_left")

acideBar.addEventListener("click",(e)=>{
    console.log(e.target.classList[0]);
    let qiymat=e.target.classList[0]
    if(qiymat=="acide_bar"){
    acideBar.classList.remove("hiddenadd")   
    }
    
})

fa_bars_left.addEventListener("click",()=>{
    acideBar.classList.toggle("hiddenadd")
})

fa_xmark_left.addEventListener("click",()=>{
    acideBar.classList.toggle("hiddenadd")
})

//nav_ringt


const create_acive=document.querySelector(".create_acive")
const nav_create_btn=document.querySelector(".nav_create_btn")

nav_create_btn.addEventListener("click",()=>{
    create_acive.classList.toggle("hiddenadd")
})

//capilot
const fa_caret_down_btn=document.querySelector(".fa_caret_down_btn")
const capilot_active=document.querySelector(".capilot_active")


fa_caret_down_btn.addEventListener("click",()=>{
    capilot_active.classList.toggle("hiddenadd")
})


// profil_img

const profil_btn=document.querySelector(".profil_btn")
const profil_active=document.querySelector(".profil_actives")
const ringht_fa_xmark=document.querySelector("#ringht_fa_xmark1")

profil_active.addEventListener("click",(e)=>{
    console.log(e.target.classList[0]);
    let qiymat=e.target.classList[0]
    if(qiymat=="profil_actives"){
    profil_active.classList.remove("hiddenadd")   
    }
    
})

profil_btn.addEventListener("click",()=>{
    profil_active.style.transform="translateX(0px)";
    profil_active.classList.toggle("hiddenadd")
})
ringht_fa_xmark.addEventListener("click",()=>{
    profil_active.style.transform="translateX(350px)";
    profil_active.classList.toggle("hiddenadd")
})

// box_left_content

const box_left_content=document.querySelector(".box_left_content")
const box_left_value=document.querySelector(".box_left_value")

console.log(box_left_value.innerHTML);

box_left_content.addEventListener("mouseenter",()=>{
    box_left_content.innerHTML = box_left_value.innerHTML;
})

//nav imput
const nav_search=document.querySelector(".nav_search")
const nav_buttom=document.querySelector(".nav_buttom")
const nav_search_fa_xmark =document.querySelector("#nav_search_fa_xmark")

nav_search_fa_xmark.addEventListener("click",()=>{
    console.log("dfdgdfdsfdgv");
    
    nav_search.classList.remove("hiddenadd")
})
nav_buttom.addEventListener("click",()=>{
    console.log("dfdgdfdsfdgv");
    nav_search.classList.add("hiddenadd")
})
