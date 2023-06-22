//start loader

const loader = document.getElementById("loader");

function loaderPage()
{
   myVar = setTimeout(showPage , 2000);
}

function showPage()
{
   loader.style.display = 'none';
}

//end loader

//When the page is scrolled, the menu will remain fixed

document.addEventListener("scroll" , () =>{

   const nav = document.querySelector("nav");
   const menu = document.querySelector(".section-menu");

   if(window.scrollY > 0)
   {
      nav.classList.add("scrolled");
      menu.classList.add("scrolled");

   }else{
      nav.classList.remove("scrolled");
      menu.classList.remove("scrolled");

   }
});

//end scroll menu

//menu

let menu = document.querySelector(".section-menu");
let openBar = document.querySelector(".bar-menu");
let closeBar = document.querySelector(".bar-close")

function showMenu()
{
   openBar.classList.add("responsive");
   menu.classList.add("responsive");
   closeBar.classList.add("responsive");
}


//end menu


//text typing


const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".cursor");
let textArray = ["Angel Evana" , "Web Developer" , "Photographer"];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {

    if (charIndex < textArray[textArrayIndex].length) {

        if(!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");

        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length)
            textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// counter

window.addEventListener("scroll" , scrollCount);

const offset = document.querySelector(".counter").offsetTop;

const counters = document.querySelectorAll(".value");
const speed = 200;

function count()
{
    counters.forEach(counter => {

        const value = +counter.getAttribute("akhi");
        const data = +counter.innerText;

        const time = value / speed;

        if(data < value){
            counter.innerHTML = Math.ceil(data + time);
            setTimeout(count , 400);
        }else{
            counter.innerHTML = value;
        }  

});

}


function scrollCount()
{
    if(document.documentElement.scrollTop  > 2000)
    {
        count();
    }
}


//gallery project


//add active class to current button

filterSelection("column");

function filterSelection(c) {

    var x, i;


    x = document.getElementsByClassName("column");
 
    
    

    if (c == "column") 
      c = "";
      
    for (i = 0; i < x.length; i++) {

     removeClass(x[i], "show");

     
      if (x[i].className.indexOf(c) > -1) {
        addClass(x[i], "show");
      }
        
      if(c === "branding" || c === "web" || c === "photography")
        {
            addClass(x[i] , "test");
        }else{
            removeClass(x[i] , "test");
        }
      
    }
    
 
    

  }

function addClass(element, name) {
    var i, arr1, arr2;

    arr1 = element.className.split(" ");
    
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {

      if (arr1.indexOf(arr2[i]) == -1) {

        element.className += " " + arr2[i];

      }
    }
  }

  function removeClass(element, name) {

    var i, arr1, arr2;

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {

      while (arr1.indexOf(arr2[i]) > -1) {

        arr1.splice(arr1.indexOf(arr2[i]), 1);

      }
    }

    element.className = arr1.join(" ");

  }

var btns = document.getElementsByClassName("btn-ptoject");
var lengthBtn = btns.length;

for(let i = 0 ; i< lengthBtn; i++)
{
    btns[i].addEventListener("click" , function(){
        var current = document.getElementsByClassName("active");
        
        current[0].className = current[0].className.replace(" active" , "");

        this.className += " active";
         

    });
}
// slider testimonials

let slideIndex= 0;
slideShow() 

function slideShow() 
{
    let i;
    let imgBox = document.getElementsByClassName("slider-box");
    let dots = document.getElementsByClassName("dot");
    
    for(i = 0 ; i< imgBox.length; i++)
    {
        imgBox[i].style.display = "none";
    }
    slideIndex++;

    if(slideIndex > imgBox.length)
    {
        slideIndex = 1
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" dot-active" , "");
    }
    imgBox[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";

    setTimeout(slideShow , 4000)
}
