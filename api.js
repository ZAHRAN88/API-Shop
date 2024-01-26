// Array to store products
let products = [];

// Fetch products from the API
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    products = data;
    displayproducts(products);
  })
  .catch(error => console.error(error));

// Function to display products
function displayproducts(productsToDisplay) {
  let cartona = "";
  for (let index = 0; index < productsToDisplay.length; index++) {
    cartona += `
      <div class="col-lg-4">
        <div class="card mt-5">
          <img class="card-img-top" src="${productsToDisplay[index].image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${productsToDisplay[index].title}</h5>
            <button type="button" class="btn btn-outline-info mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" data-product-index="${index}">
              View Product
            </button>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("products").innerHTML = cartona;

  // Add a click event listener to the "View Product" buttons
  const viewProductButtons = document.querySelectorAll('[data-bs-target="#exampleModalCenter"]');
  viewProductButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productIndex = event.target.getAttribute('data-product-index');
      const product = productsToDisplay[productIndex];
alert("a7a")
      document.getElementById('modalProductTitle').textContent = product.title;
      document.getElementById('modalProductImage').src = product.image;
      document.getElementById('modalProductDescription').textContent = product.description;
    });
  });
}

// Add a keyup event listener to the search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
  displayproducts(filteredProducts);
});
const xx= document.getElementById("closeHover");
xx.addEventListener("mouseover" ,function (){

xx.classList.add("fa-solid")

})
xx.addEventListener("mouseleave" ,function (){

   xx.classList.remove("fa-solid")
})