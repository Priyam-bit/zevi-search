import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';
import { Brand, Product, Rating } from '../Models/Product';

export function 
    createRandomUser(brand : Brand, minPrice : number, maxPrice : number, rating : Rating): Product {
    const originalPrice = faker.commerce.price(minPrice, maxPrice);
    return {
        _id: faker.datatype.uuid(),
        name : faker.commerce.productName(),
        brand : brand,
        originalPrice : originalPrice,
        discountedPrice : Math.min(300, parseFloat(originalPrice) - randomInt(200)),
        rating : rating,
        reviews : randomInt(1,100),
        imageUrl : faker.image.fashion()
  };
}

