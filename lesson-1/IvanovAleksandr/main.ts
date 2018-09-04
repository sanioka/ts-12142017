interface IMenuItem2 {
    title: string;
    items?: IMenuItem2[];
}

let menuData: IMenuItem2[] = [
    {
        title: "//3",
        items: [
            {
                title: "one",
                items: [
                    {
                        title: "two",
                        items: [
                            {
                                title: "end",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Животные",
        items: [
            {
                title: "Млекопитающие", items: [
                    {title: "Коровы"},
                    {title: "Ослы"},
                    {title: "Собаки"},
                    {title: "Тигры"},
                ],
            },
            {
                title: "Другие", items: [
                    {title: "Змеи"},
                    {title: "Птицы"},
                    {title: "Ящерицы"},
                ],
            },
        ],
    },
    {
        title: "Рыбы",
        items: [
            {
                title: "Аквариумные",
                items: [
                    {title: "Гуппи"},
                    {title: "Скалярии"},
                ],
            },
            {
                title: "Форель",
                items: [
                    {title: "Морская форель"},
                ],
            },
        ],
    },
];

/**
 * Рекурсивный генератор меню, вложенность может быть любой
 */
function generateRecursive(list: IMenuItem2[] | IMenuItem2): string {
    let content: string = "";
    let _list: IMenuItem2[];

    if (list && !Array.isArray(list)) {
        _list = [];
        _list.push(list);
    } else {
        _list = list;
    }

    for (const menuItem of _list) {

        if (menuItem.items && Array.isArray(menuItem.items)) {
            content += `<li><a class="title">${menuItem.title}</a>`;

            content += "<ul>";
            for (const item of menuItem.items) {
                const newList = [];
                newList.push(item);
                content += generateRecursive(newList);
            }
            content += `</ul></li>`;

        } else {
            // Конечная точка рекурсии
            content += `<li><a>${menuItem.title}</a></li>`;
        }

    }

    return content;
}

function generateMenu(list: IMenuItem2[]): string {
    return `<ul>${ generateRecursive(list) }</ul>`;
}

/**
 * Вариант 2, сокращенный код
 */
function generateMenuV2(list: IMenuItem2[]) {
    const result: string = list.map(({items, title}) => {

        if (items) {
            return `<li><a class="title">${title}</a>
                    ${generateMenuV2(items)}
                    </li>`;
        } else {
            return `<li><a>${title}</a></li>`;
        }

    }).join(" ");

    return `<ul>${result}</ul>`;
}

let navMenuList2: HTMLDivElement | null = document.querySelector(".menu");
if (navMenuList2) {
    navMenuList2.innerHTML = generateMenuV2(menuData);
    navMenuList2.onclick = (ev: MouseEvent) => {
        const el = ev.target as HTMLAnchorElement;
        const classList = el.classList;
        if (!classList.contains("title")) {
            return;
        }
        const parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle("menu-open");
    };
}
