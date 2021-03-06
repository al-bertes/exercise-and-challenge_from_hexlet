// В этом упражнении нужно реализовать логику добавления алертов по клику на кнопку.

// Изначально на странице есть одна кнопка. Вёрстка выглядит так:

// <button id="alert-generator" class="btn btn-primary">Generate Alert</button>
// <div class="alerts m-5"></div>
// После клика на кнопку, в контейнер с классом alerts добавляется алерт, с названием Alert 1:

// <div class="alerts m-5">
//   <div class="alert alert-primary">Alert 1</div>
// </div>
// Последующий клик добавляет новый алерт сверху:

// <div class="alerts m-5">
//   <div class="alert alert-primary">Alert 2</div>
//   <div class="alert alert-primary">Alert 1</div>
// </div>
// Каждый клик добавляет новый алерт, меняя число в его имени.

// src/application.js
// Реализуйте обработчик события click на кнопке в соответствии с логикой выше.

// Подсказки
// Саму кнопку можно получить в коде через ее id
// После выполнения задания, подумайте над тем, как добавить возможность скрывать алерты.
// Поэкспериментируйте с отладкой в этом упражнении, опирайтесь на наш гайд, чтобы разобраться с тестами

// @ts-check

export default () => {
    // BEGIN (write your solution here)
    const button = document.querySelector('#alert-generator');
    const container = document.querySelector(".alerts.m-5");
  
    button.addEventListener('click', () => {
      const el = document.createElement('div');
      el.classList.add('alert');
      el.classList.add('alert-primary');
      const valueAlert = container.children.length + 1;
      el.textContent = `Alert ${valueAlert}`;
      container.prepend(el);
    })
    // END
  };