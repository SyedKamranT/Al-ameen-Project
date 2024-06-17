const joinbutton = document.getElementById("join-now")
joinbutton.addEventListener('click',()=>{
    window.location.href="loginpage.html"
})

const enrollnow = document.getElementById("enroll-now")
enrollnow.addEventListener('click',()=>{
    window.location.href="loginpage.html"
})

const leftbtn = document.getElementById("leftbtn")
leftbtn.addEventListener('click',()=>{
    //erite the code here
})

const rightbtn = document.getElementById("rightbtn")
rightbtn.addEventListener('click',()=>{
    //erite the code here
})

const readmore = document.getElementById("readmore")
const morecontent = document.getElementById("morecontent")
readmore.addEventListener('click',()=>{
   if(morecontent.style.display ==="none"){
    morecontent.style.display="inline"
    readmore.textContent = "Read less"
   }
   else{
      morecontent.style.display = "none"
      readmore.textContent = "Read more"
   }
})