// Cart.js
// Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:


// 1. addItem(item, count) – добавляет в корзину товары и их количество. 
//     Товар это объект у которого два свойства: name – имя и price – стоимость.

// 2. getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]

// 3. getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается 
//     как стоимость всех добавленных товаров с учетом их количества.

// 4. getCount – возвращает количество товаров в корзине

export default class Cart {

     constructor (item, count) {
         this.item = item;
         this.count = count;
         this.goods = [];
     }
     addItem(item, count) {
        const itemm = {
            item,
            count
        };
        this.goods.push(itemm);
    }
     getItems() {
        return this.goods;
     }
    
     getCost() {
        const result = this.goods.reduce((acc, {item:{price}, count}) => acc +(count * price), 0)
     
       return result;
    }

     getCount() {
         const result = this.goods.reduce((acc, {count}) => acc + count, 0)
      
        return result;
     }
}



