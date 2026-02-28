let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1","mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(0, 2);



function plusSlides(n, no) {
  //input the slide index plus 1
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  //x is equal to the slide class and its index
  let x = document.getElementsByClassName(slideId[no]);
  //if n is greater than the amount of slides, set the slide to the first index
  if (n > x.length) {slideIndex[no] = 1}
  //if n is less than 1 then set the class index to the last index in array
  if (n < 1) {slideIndex[no] = x.length}
  //iterate through the slides and set display style to none
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //get the current slide index and set it to block display
  x[slideIndex[no]-1].style.display = "block";
} 