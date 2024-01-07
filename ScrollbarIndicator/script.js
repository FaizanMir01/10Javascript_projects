const scrollbarIndicator = document.querySelector(".scrollIndicator");

const totalScrollheight = document.body.scrollHeight - window.innerHeight;

function scrollbars(){
    const scrollPercentage = (window.scrollY /totalScrollheight)*100;

    scrollbarIndicator.style.width= scrollPercentage +"%";
}
window.addEventListener("scroll",scrollbars)