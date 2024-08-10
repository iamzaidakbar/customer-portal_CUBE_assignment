import { faker } from '@faker-js/faker';

export const generateRandomPhotos = (count: number) => {
    return Array.from({ length: count }, () => faker.image.urlPicsumPhotos());
  };