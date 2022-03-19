// downcaseFileNames.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию (объект-дерево), 
// приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру. Результат в виде обработанной директории возвращается наружу.

// Примеры
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
// import downcaseFileNames from './downcaseFileNames.js';
 
// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);
 
// downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }

// @ts-check

import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';
  import _ from 'lodash';
  
  // BEGIN (write your solution here)
  const downcaseFileNames = (tree) => {
  
    const newName = getName(tree);
    const meta = _.cloneDeep(getMeta(tree));
  
    if (isFile(tree)) {
      return mkfile(newName.toLowerCase(), meta);
    }
  
    const ifChild = getChildren(tree);
  
    const newChilOwn = ifChild.map((item) => downcaseFileNames(item));
  
    return mkdir(newName, newChilOwn, meta);
  }
  
  export default downcaseFileNames;
  // END