const productDescription = document.getElementById("product-description");
const productImage = document.querySelector("#product-image");
const addVariantBtn = document.querySelector("#add-variant-btn");
const addProductBtn = document.querySelector("#add-product-btn");

addProductBtn.addEventListener("click", () => {
  const productName = document.getElementById("product-name");
  alert(productName.value);
});

let productList = [];

let productObj = {
  name: null,
  description: null,
  img: null,
  variants: [],
  id: null,
};
