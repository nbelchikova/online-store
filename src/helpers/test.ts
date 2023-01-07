
import {itemsData} from '../helpers/item';

test('1-First value for itemsData', () => {
  expect(itemsData[0].id).toBe(1);
});

test('2-itemsData length', () => {
  expect(itemsData).toHaveLength(30);
});

test('3-itemsData to contain ', () => {
  expect(itemsData[0].name).toContain('елк');
});



