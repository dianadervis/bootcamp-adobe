PRODUCT_URL = "https://dummyjson.com/products?limit=20"

async function init() {
  const res = await fetch("https://dummyjson.com/products?limit=20")
  const resolve = await res.json()
  console.log(resolve)
  render(resolve.products)
}

function render(products) {
  const itemsContainer = document.querySelector(".items-container");
  products.forEach((item) => {
    const title = document.createElement("h4");
    const titleContent = document.createTextNode(item.title);
    title.appendChild(titleContent);

    //adaugam descriere > span (item.description)
    const descript = document.createElement("span");
    descript.appendChild(document.createTextNode(item.description))
    //adaugam un buton (cu text X)
    const buton = document.createElement("button");
    buton.appendChild(document.createTextNode("X"))

    const itemCard = document.createElement("li")
    itemCard.appendChild(title);
    itemCard.appendChild(descript);
    itemCard.appendChild(buton);

    itemsContainer.appendChild(itemCard);
  })
}

async function loadMore() {
  const lis = document.querySelectorAll("li");
  const res = await fetch(`${PRODUCT_URL}&skip=${lis.length}`);
  const resolve = await res.json();
  render(resolve.products);
}