(async () => {
  const myCart: { price: number }[] = [];
  const products: { price: number }[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('https://api.escuelajs.co/api/v1/products', {method: 'GET'});
    const data = await rta.json();
    products.push(...(data as { price: number }[]));
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() < limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();

  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {name: 'Nicolas', lastName: 'Molina'};
  // const rta = person + limit;
  // console.log(rta);
})();
