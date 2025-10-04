export function createNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    
    const menuItems = [
        { title: "Цеха", url: "/../index.html", page: "index.html" },
        { title: "Аспирационные сети", url: "/acSistem/acSistem.html", page: "acSistem.html" },
        { title: "Журналы ВРУ", url: "/vry/vry.html", page: "vry.html" },
        { title: "Паспорта сетей", url: "/pasports/pasports.html", page: "pasports.html" },
        { title: "Пылимеры", url: "/dustMeters/dustMeters.html", page: "dustMeters.html" },
        { title: "Блоки встряхивания", url: "/shakingBlocks/shakingBlocks.html", page: "shakingBlocks.html" },
        { title: "ППР", url: "/ppr/ppr.html", page: "ppr.html" }
    ];

    const menuHTML = menuItems.map(item => `
        <li>
            <a class="menu-link ${currentPage === item.page ? 'active-link' : ''}" 
                href="${item.url}">
                ${item.title}
            </a>
        </li>
    `).join('');

    return `
    <nav class="nav-bar">
        <ul class="menu">
            ${menuHTML}
        </ul>
    </nav>
    `;
}

export function initNavigation(containerSelector = '.main-container') {
    const container = document.querySelector(containerSelector);
    const navigation = createNavigation();
    container.insertAdjacentHTML('afterbegin', navigation);
}