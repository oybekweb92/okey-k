window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  imgs();
  function imgs() {
    if (window.pageYOffset < 1800) {
      //document.querySelector('.img2').style.opacity =  '0';
      document.querySelector(".img2").style.transform = "scale(0)";
    } else {
      //document.querySelector('.img2').style.opacity =  '1';
      document.querySelector(".img2").style.transform = "scale(1)";
    }

    if (window.pageYOffset < 2400) {
      //document.querySelector('.img2').style.opacity =  '0';
      document.querySelector(".img3").style.transform = "scale(0)";
    } else {
      //document.querySelector('.img2').style.opacity =  '1';
      document.querySelector(".img3").style.transform = "scale(1)";
    }

    if (window.pageYOffset < 3100) {
      //document.querySelector('.img2').style.opacity =  '0';
      document.querySelector(".img4").style.transform = "scale(0)";
    } else {
      //document.querySelector('.img2').style.opacity =  '1';
      document.querySelector(".img4").style.transform = "scale(1)";
    }
  }
});

document.querySelector(".fa-bars").addEventListener("click", function () {
  let nav = document.querySelector(".header__menu");
  nav.style.transform = "translateX(0%)";
});

document.querySelector(".fa-close").addEventListener("click", function () {
  let nav = document.querySelector(".header__menu");
  nav.style.transform = "translateX(-101%)";
});
