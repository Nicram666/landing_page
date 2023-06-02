class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const singleProduct = document.createElement("li");
    singleProduct.className = "product-item";
    singleProduct.innerHTML = `
            <div>
            <h1>${this.product.title}</h1>
            <h2>${this.product.price}<h2>
            <p>${this.product.description}</p>
            <button>dodaj ${this.product.title} do koszyka</button>
            </div>
            `;
    return singleProduct;
  }
}

class ProductList {
  products = [
    new Product("poduszka", 10, "to jest opis poduszki"),
    new Product("dywan", 80, "to jest opis dywanu"),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const listOfProducts = document.createElement("ul");
    listOfProducts.className = "product-list";
    renderHook.append(listOfProducts);
    for (const product of this.products) {
      const productToBeRendered = new ProductItem(product);
      listOfProducts.append(productToBeRendered.render());
    }
  }
}

const productList = new ProductList();
console.log(productList);
productList.render();
