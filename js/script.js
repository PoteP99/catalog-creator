const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const productImage = document.querySelector("#product-image");
const addVariantBtn = document.querySelector("#add-variant-btn");
const addProductBtn = document.querySelector("#add-product-btn");
const variantName1 = document.getElementById("variant1-name");
const variantPrice1 = document.getElementById("variant1-price");

let productList = [];
let currentVariants = [];

addVariantBtn.addEventListener("click", () => {
  const newVariant = {
    id: 1,
    title: variantName1.value,
    price: variantPrice1.value,
  };

  currentVariants.push(newVariant);
  console.log(currentVariants);
});

addProductBtn.addEventListener("click", () => {
  const newProductObj = {
    id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Unique time-base id
    name: productName.value,
    description: productDescription.value,
    img: productImage.value,
    variant: currentVariants,
  };

  currentVariants = [];

  console.log(newProductObj);
  console.log(currentVariants);
});
