import { faker } from '@faker-js/faker';

import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    color: faker.color.human(),
    price: Number(faker.commerce.price({ min: 1000 })),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word()],
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  });
}

console.log(products[products.length - 1]);
