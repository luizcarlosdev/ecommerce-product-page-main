const arrayImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const menuHamburgerBtn = document.querySelector("#menu-hamburger-btn");
menuHamburgerBtn.addEventListener("click", () => {
  const sideMenu = document.querySelector("#side-menu");
  sideMenu.style.display = "block";
});

const menuHeaderImage = document.querySelector("#menu-header-image");
menuHeaderImage.addEventListener("click", () => {
  const sideMenu = document.querySelector("#side-menu");
  sideMenu.style.display = "none";
})

let changeImage = 0;

const sliderFirstImage = document.querySelector("#slider-first-image");
sliderFirstImage.setAttribute("src", arrayImages[changeImage]);

const sliderFistBtn01 = document.querySelector("#slider-first-btn1");

const sliderFistBtn02 = document.querySelector("#slider-first-btn2");

sliderFistBtn01.addEventListener("click", () => {
  changeImage--;
  changeImage = changeImage < 0 ? arrayImages.length - 1 : changeImage--;
  sliderFirstImage.setAttribute("src", arrayImages[changeImage]);
})

sliderFistBtn02.addEventListener("click", () => {
  changeImage++;
  changeImage = changeImage > arrayImages.length - 1 ? 0 : changeImage++;
  sliderFirstImage.setAttribute("src", arrayImages[changeImage]);
});

const sneakersDisplay = document.querySelector("#sneakers-display");

const sneakersDisplayImage = document.querySelector("#sneakers-display-image");

sneakersDisplayImage.setAttribute("src", arrayImages[0]);

const img01 = document.querySelector("#img01");
const img02 = document.querySelector("#img02");
const img03 = document.querySelector("#img03");
const img04 = document.querySelector("#img04");

const cartProducts = document.querySelector("#products-resume");
const resumeCart = document.querySelector("#resume-cart");
const itemsCart = document.querySelector("#items-cart");
const quantBuy = document.querySelector("#quant-buy");
const finalPrice = document.querySelector("#final-price");

cartProducts.addEventListener("click", () => {
  cartProducts.classList.toggle("openCartProducts");
  if (cartProducts.classList.contains("openCartProducts")) {
    resumeCart.style.display = "block";
  } else {
    resumeCart.style.display = "none";
  }
});

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

const cartEmpty = document.createElement("div");
cartEmpty.setAttribute("id", "cart-empty");
resumeCart.appendChild(cartEmpty);

const cartEmptyParagraph = document.createElement("p");
cartEmptyParagraph.textContent = "Your cart is empty.";
cartEmpty.appendChild(cartEmptyParagraph);

const resumeCartBody = document.createElement("div");
resumeCartBody.setAttribute("id", "resume-cart-body");
//change;

const resumeCartImage = document.createElement("div");
resumeCartImage.setAttribute("id", "resume-cart-image");
resumeCartBody.appendChild(resumeCartImage);

const resumeCartImg = document.createElement("img");
resumeCartImg.setAttribute("src", "./images/image-product-2-thumbnail.jpg");
resumeCartImage.appendChild(resumeCartImg);

const resumeCartDescription = document.createElement("div");
resumeCartDescription.setAttribute("id", "resume-cart-description");
resumeCartBody.appendChild(resumeCartDescription);

const resumeCartDescriptionTittle = document.createElement("div");
resumeCartDescriptionTittle.setAttribute(
  "id",
  "resume-cart-description-tittle"
);
resumeCartDescriptionTittle.textContent = "Fall Limited Edition Sneakers";
resumeCartDescription.appendChild(resumeCartDescriptionTittle);

const resumeCartDescriptionBody = document.createElement("div");
resumeCartDescriptionBody.setAttribute("id", "resume-cart-description-body");
resumeCartDescription.appendChild(resumeCartDescriptionBody);

const currentPriceView = document.createElement("span");
currentPriceView.setAttribute("id", "current-price-view");
currentPriceView.textContent = "$125.00 x"; // muaDinamica
resumeCartDescriptionBody.appendChild(currentPriceView);

const quantSneakersBuy = document.createElement("span");
quantSneakersBuy.setAttribute("id", "quant-buy");
quantSneakersBuy.textContent = "0"; // muaDinamica
resumeCartDescriptionBody.appendChild(quantSneakersBuy);

const finalSneakersPrice = document.createElement("span");
finalSneakersPrice.setAttribute("id", "final-price");
finalSneakersPrice.textContent = "$0.00"; //mudaDinamica
resumeCartDescriptionBody.appendChild(finalSneakersPrice);

const resumeCartDeleteItems = document.createElement("div");
resumeCartDeleteItems.setAttribute("id", "resume-cart-delete-items");
resumeCartBody.appendChild(resumeCartDeleteItems);

const resumeCartDeleteItemsImg = document.createElement("img");
resumeCartDeleteItemsImg.setAttribute("id", "imageDelete");
resumeCartDeleteItemsImg.setAttribute("src", "./images/icon-delete.svg");
resumeCartDeleteItems.appendChild(resumeCartDeleteItemsImg);

const resumeCartButton = document.createElement("div");
resumeCartButton.setAttribute("id", "resume-cart-button");

const resumeCartButtonElement = document.createElement("button");
resumeCartButtonElement.textContent = "Checkout";
resumeCartButton.appendChild(resumeCartButtonElement);

const addCartBtn = document.querySelector("#add-cart-btn");

resumeCartDeleteItemsImg.addEventListener("click", () => {
  resumeCart.classList.toggle("monde");
  if (resumeCart.classList.toggle("monde")) {
    cartEmpty.classList.toggle("removeEmpty")
  }
  if (value > 0 && addCartBtn.click()) {
    resumeCart.appendChild(cartEmpty);
    if (resumeCart.appendChild(cartEmpty)) {
      resumeCart.appendChild(cartEmpty);
    } 
  }
  resumeCart.appendChild(cartEmpty);
  resumeCart.removeChild(resumeCartBody);
  resumeCart.removeChild(resumeCartButton);
});

addCartBtn.addEventListener("click", () => {
  if (value == 0) {
    cartEmpty.classList.toggle("removeEmpty")
    resumeCart.appendChild(cartEmpty);
  }
  itemsCart.textContent = value;
  if (value > 0) {
    cartEmpty.classList.toggle("removeEmpty");
    if (cartEmpty.classList.contains("removeEmpty")) {
      resumeCart.removeChild(cartEmpty);
    } else {
      cartEmpty.classList.toggle("removeEmpty")
    }
    quantSneakersBuy.textContent = value;
    finalSneakersPrice.textContent = `$${125 * value}.00`;
    resumeCart.appendChild(resumeCartBody);
    resumeCart.appendChild(resumeCartButton);
  } else {
    resumeCart.appendChild(cartEmpty);
    resumeCart.removeChild(resumeCartBody);
    resumeCart.removeChild(resumeCartButton);
  }
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

function alternateFilterClass() {
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

function nextSliderImageContainer() {
  count++;
  count = count > arrayImages.length - 1 ? 0 : count++;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  alternateFilterClass();
}

function prevSliderImageConteiner() {
  count--;
  count = count < 0 ? arrayImages.length - 1 : count--;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  alternateFilterClass();
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
  alternateFilterClass();
});

groupImage02.addEventListener("click", () => {
  count = 1;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  alternateFilterClass();
});

groupImage03.addEventListener("click", () => {
  count = 2;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  alternateFilterClass();
});

groupImage04.addEventListener("click", () => {
  count = 3;
  sliderImagesImg.setAttribute("src", arrayImages[count]);
  alternateFilterClass();
});

sliderImagesImg.setAttribute("src", arrayImages[count]);
