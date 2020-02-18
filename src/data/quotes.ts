import faker from "faker";
import { QUOTES_COUNT } from "../config";

const generateQuotes = (length: number) => {
  const items = [];

  for (let i = 0; i < length; i++) {
    const sentence = faker.lorem.sentence();

    const item = {
      sentence: sentence.length > 30 ? sentence.slice(0, 30) : sentence,
      author: `${faker.name.firstName()} ${faker.name.lastName()}`
    };
    items.push(item);
  }

  return items;
};

export const quotes = generateQuotes(QUOTES_COUNT);
