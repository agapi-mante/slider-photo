let slideIndex = 0; //изначальное значение слайдера
showSlides(slideIndex);

function plusSlides(n) { //функция перемещение слайдера вперёд
  showSlides(slideIndex += n);
}

function currentSlide(n) { //функция перемещение слайдера назад
  showSlides(slideIndex = n);
}

function showSlides(n) { //основные переменные действия 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { //основное значение находится на первом слайде(изначально)
    slideIndex = 1
  }
  if (n < 1) { //основное значение при возвращение на предыдущий слайд
    slideIndex=slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display= "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className= dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";  //показание на дисплее действия(переход на новый слайд)
  dots[slideIndex-1].className+= " active";  //(переход на прошлый слайд)
}
