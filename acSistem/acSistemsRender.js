//Модули
import { acSistemsContent } from "./acSistemsData.js";

//Скрипт рендера карточек аспирационных сетей
const acSistemList = document.querySelector(".acSistemList");

const acSistemItems = acSistemsContent.map((ac) =>
`<div class="acSistemItem" data-id="${ac.id}">
    <h3>АС №${ac.num}</h3>
    <h4>ИЗАВ:${ac.izav}</h4>
        <span>${ac.titleFilter}</span>
        <span>${ac.titleVent}</span>
        <span>Линия: ${ac.line}</span>
        <span>Этаж: ${ac.floor}</span>
        <span>Конструкция: ${ac.construction}</span>
        <button class="modalOpenButton" data-id="${ac.id}">Вся информация</button>
</div>`
).join("");

acSistemList.innerHTML = acSistemItems;

//Скрипты рендера модальных окон

//Рендерим модальное окно
const modalInfo = `
<div class="modal" id="acModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modalBody"></div>
    </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalInfo);

const modal = document.getElementById('acModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

//Ловим клик по конкретной кнопке и получаем id
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modalOpenButton')) {
        const itemId = e.target.getAttribute('data-id');
        openModal(itemId);
    }
});

//Открываем модальное окно по id
function openModal(itemId) {
    const item = acSistemsContent.find(ac => ac.id == itemId);
    
    if (item) {
        modalBody.innerHTML = `
            <h2>АС №${item.num}</h2>
            <h3>ИЗАВ: ${item.izav}</h3>
            <p><strong>Фильтр:</strong> ${item.titleFilter}</p>
            <p><strong>Вентилятор:</strong> ${item.titleVent}</p>
            <p><strong>Линия:</strong> ${item.line}</p>
            <p><strong>Этаж:</strong> ${item.floor}</p>
            <p><strong>Конструкция:</strong> ${item.construction}</p>
            <p><strong>ID системы:</strong> ${item.id}</p>
        `;
        modal.style.display = 'block';
    }
}

//Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
//Закрытие модального окна кликом за пределами окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
