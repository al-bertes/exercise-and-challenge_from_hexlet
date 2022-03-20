// Во многих операционных системах (Linux, MacOS) существует утилита du. Она умеет подсчитывать занимаемое место указанными файлами и директориями. Например, так:

//  tmp$ du -sh *
//   0B    com.docker.vmnetd.socket
//  10M    credo
// 4.0K    debug.mjs
//   0B    filesystemui.socket
// 4.0K    index.php
//  37M    node_modules
//  88K    package-lock.json
//  22M    taxdome
// Перед тем, как делать упражнение, обязательно попробуйте поиграйть с этой утилитой в терминале, посмотрите её опции через man du. 
// Экспериментировать нужно в локально установленной операционной системе.

// du.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию и возвращает список вложенных узлов (директорий и файлов) 
// в указанную директорию на один уровень, а так же место, которое они занимают. Размер файла задается в метаданных. 
// Размер директории складывается из сумм всех размеров файлов, находящихся внутри во всех поддиректориях. Сами директории размера не имеют.

// Пример
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
// import du from '../du.js';
 
// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('apache'),
//     mkdir('nginx', [
//       mkfile('nginx.conf', { size: 800 }),
//     ]),
//     mkdir('consul', [
//       mkfile('config.json', { size: 1200 }),
//       mkfile('data', { size: 8200 }),
//       mkfile('raft', { size: 80 }),
//     ]),
//   ]),
//   mkfile('hosts', { size: 3500 }),
//   mkfile('resolve', { size: 1000 }),
// ]);
 
// du(tree);
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
// Примечания
// Обратите внимание на структуру результирующего массива. Каждый элемент — массив с двумя значениями: именем директории и размером файлов внутри.
// Результат отсортирован по размеру в обратном порядке. То есть сверху самые тяжёлые, внизу самые лёгкие.
// Подсказки
// sort

import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren, mkdir, mkfile
} from '@hexlet/immutable-fs-trees';

const getSize = (tree) => {
    if (isFile(tree)) {
        return getMeta(tree).size;
    }

    const child = getChildren(tree).map(item => getSize(item));
    return _.sum(child);
}

const du = (tree) => {

    const child = getChildren(tree);

    const result = child.map( item => {
        if (isFile(item)) {
            return [getName(item), getSize(item)];
            }

        return [getName(item), getSize(item)];
    });

    return result.sort(([, size1], [, size2]) => size2 - size1);;
}

export default du;