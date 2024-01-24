import { faker } from '@faker-js/faker';

import {
  products,
  addProduct,
  updateProduct,
} from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    color: faker.color.human(),
    price: Number(faker.commerce.price({ min: 1000 })),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word()],
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.string.uuid(),
  });
}

console.log(products[products.length - 1]);
const product = products[0];

updateProduct(product.id, {
  title: 'new title',
  description: 'new description',
  stock: 75,
});
