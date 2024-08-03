(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
  type Shirt = {
    brand: string;
    color: string;
    size: Sizes;
    code: number;
  }

  // Function declaration with type annotations and inferred return
  function createShirtV1(brand: string, color: string, size: Sizes, code: number) {
    return {
      brand,
      color,
      size,
      code
    };
  }

  const shirt = createShirtV1('Nike', 'red', 'M', 123);
  console.log(shirt);
  console.log('Brand: ' + shirt.brand);
  console.log('Color: ' + shirt.color);
  console.log('Size: ' + shirt.size);
  console.log('Code: ' + shirt.code);

  // Arrow function with type annotations and explicit return
  const createShirtV2 = (brand: string, color: string, size: Sizes, code: number): Shirt => {
    return {
      brand,
      color,
      size,
      code
    };
  }

  const shirt2 = createShirtV2('Adidas', 'blue', 'L', 456);
  console.log(shirt2);
  console.log('Brand: ' + shirt2.brand);
  console.log('Color: ' + shirt2.color);
  console.log('Size: ' + shirt2.size);
  console.log('Code: ' + shirt2.code);
})();
