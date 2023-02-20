const controls = document.querySelectorAll(".item");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const leg1 = document.querySelector('#legens1')

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    img1 = e.target.classList.contains("im1");
    img2 = e.target.classList.contains("im2");
    img3 = e.target.classList.contains("im3");
    img4 = e.target.classList.contains("im4");
    img5 = e.target.classList.contains("im5");

    if (img1) {
      currentItem = 0;
    } 
    if(img2){
      currentItem = 1;
    }
     if(img3){
      currentItem = 2;
    }
     if(img4){
      currentItem = 3;
    }
     if(img5){
      currentItem = 4;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
  
   

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center", 
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
    
    
  });
}
);

