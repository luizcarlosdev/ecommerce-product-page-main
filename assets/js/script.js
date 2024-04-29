const arrayImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const sneakersDisplay = document.querySelector("#sneakers-display");

const sneakersDisplayImage = document.querySelector("#sneakers-display-image");

sneakersDisplayImage.setAttribute("src", arrayImages[0]);

const img01 = document.querySelector("#img01");
const img02 = document.querySelector("#img02");
const img03 = document.querySelector("#img03");
const img04 = document.querySelector("#img04");

function removeClassActive(element) {
  const selectImagesSneakers = Array.from(
    document.querySelectorAll(".select-images-sneakers")
  );
  selectImagesSneakers.forEach((sneakers) => {
    sneakers.classList.remove("active");
  });
  element.classList.add("active");
}

img01.addEventListener("click", (event) => {
  removeClassActive(event.target);
  sneakersDisplayImage.setAttribute("src", arrayImages[0]);
});

img02.addEventListener("click", (event) => {
  removeClassActive(event.target);
  sneakersDisplayImage.setAttribute("src", arrayImages[1]);
});

img03.addEventListener("click", (event) => {
  removeClassActive(event.target);
  sneakersDisplayImage.setAttribute("src", arrayImages[2]);
});

img04.addEventListener("click", (event) => {
  removeClassActive(event.target);
  sneakersDisplayImage.setAttribute("src", arrayImages[3]);
});

let value = 0;

const btnMinus = document.querySelector("#btn-minus");
const btnPlus = document.querySelector("#btn-plus");
const valuePrice = document.querySelector("#valuePrice p");
valuePrice.textContent = value;

btnPlus.addEventListener("click", () => {
  value++;
  valuePrice.textContent = value;
});

btnMinus.addEventListener("click", () => {
  value = value < 1 ? (value = 0) : (value = value - 1);
  valuePrice.textContent = value;
});


const container = document.querySelector(".container");
const sliderImagesImg = document.querySelector("#slider-images-img");
const btnPrevSlider = document.querySelector("#btn-prev-slider");
const btnNextSlider = document.querySelector("#btn-next-slider");
const closeAllX = document.querySelector("#close-all-x");

closeAllX.addEventListener("click", () => {
  container.style.display = "none";
});

sneakersDisplay.addEventListener("click", () => {
    container.style.display = "block";
  });

const groupImage01 = document.querySelector("#group-images-01");
const groupImage02 = document.querySelector("#group-images-02");
const groupImage03 = document.querySelector("#group-images-03");
const groupImage04 = document.querySelector("#group-images-04");

const groupImages = Array.from(document.querySelectorAll(".group-images-img"));

function ContainerRemoveClass(element) {
  groupImages.forEach((imgs) => {
    imgs.classList.remove("active");
  });
  element.classList.add("active");
}

let count = 0;

function nextSliderImageContainer() {
  count++;
  count = count > arrayImages.length - 1 ? 0 : count++;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
}

function prevSliderImageConteiner() {
  count--;
  count = count < 0 ? arrayImages.length - 1 : count--;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
}

btnPrevSlider.addEventListener("click", () => {
  console.log(count);
  prevSliderImageConteiner();
});

btnNextSlider.addEventListener("click", () => {
  nextSliderImageContainer();
});

groupImage01.addEventListener("click", () => {
  count = 0;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
});

groupImage02.addEventListener("click", () => {
  count = 1;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
});

groupImage03.addEventListener("click", () => {
  count = 2;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
});

groupImage04.addEventListener("click", () => {
  count = 3;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  if (count == 0) {
    ContainerRemoveClass(groupImage01);
  }
  if (count == 1) {
    ContainerRemoveClass(groupImage02);
  }
  if (count == 2) {
    ContainerRemoveClass(groupImage03);
  }
  if (count == 3) {
    ContainerRemoveClass(groupImage04);
  }
});

sliderImagesImg.setAttribute("src", arrayImages[count]);
