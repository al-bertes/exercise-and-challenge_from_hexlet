// Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. 
// Под сжиманием понимается уменьшение свойства size в метаданных в два раза. 
// Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными, которые были внутри этой директории.

// Картинками считаются все файлы заканчивающиеся на .jpg.

// Примеры
// const tree = mkdir('my documents', [
//   mkfile('avatar.jpg', { size: 100 }),
//   mkfile('passport.jpg', { size: 200 }),
//   mkfile('family.jpg', { size: 150 }),
//   mkfile('addresses', { size: 125 }),
//   mkdir('presentations')
// ]);
 
// const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза


/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const compressImages = (tree) => {
const deti = getChildren(tree).map((item) => {
  if (!isFile(item) || getName(item).slice(getName(item).length-4) !== '.jpg') {
    return item;
  }
  const meta = _.cloneDeep(getMeta(item));
  meta.size /= 2;

  return mkfile(getName(item), meta);
})
  const newMeta = _.cloneDeep(getMeta(tree))
  return mkdir(getName(tree), deti, newMeta);
}

export { compressImages };
// END