let mybutton=document.getElementById("btn-back-to-top");function scrollFunction(){mybutton.style.display=document.body.scrollTop>20||document.documentElement.scrollTop>20?"block":"none"}function backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},mybutton.addEventListener("click",backToTop);