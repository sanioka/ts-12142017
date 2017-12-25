type MenuList = {
    title: string;
    link?: string;
    items?: MenuList;
}[];
type MenuOpt = {
    element: HTMLElement,
    menuList: MenuList,
};

const menuList: MenuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            },
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            },
        ]
    }
];

abstract class MenuGenerator {
    protected abstract _clickHandler(this: HTMLElement, ev: MouseEvent): void;

    protected abstract _generateMenu(menuList: MenuList): string;
}

class Menu extends MenuGenerator {
    public element: HTMLElement;

    public constructor(
        opt: MenuOpt
    ) {
        super();
        opt.element.innerHTML = this._generateMenu(opt.menuList);
        opt.element.addEventListener('click', this._clickHandler);
        this.element = opt.element;
    }

    protected _clickHandler(this: void, ev: MouseEvent): void {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList: DOMTokenList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    }

    protected _generateMenu(list: MenuList): string {
        let content: string = `<ul>`;
        for (const a of list) {
            content += `<li><a ${a.items ? 'class=title' : ''}
            ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;
            if (!a.items) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`;
    }

    public getElem(): HTMLElement {
        return this.element;
    }

    public toggle(): void {
        this.element.classList.toggle('hidden');
    }

    public open(): void {
        this.element.classList.remove('hidden');
    }

    public close(): void {
        this.element.classList.add('hidden');    
    }

    
}

const element: HTMLElement = document.querySelector('.menu') as HTMLElement;
const nav: Menu = new Menu({
    element,
    menuList
});

console.log(nav.getElem());

const elToggle: HTMLButtonElement = document.getElementById("toggle") as HTMLButtonElement;
const elOpen: HTMLButtonElement = document.getElementById("open") as HTMLButtonElement;
const elClose: HTMLButtonElement = document.getElementById("close") as HTMLButtonElement;

if (elToggle) {
    elToggle.addEventListener("click", () => { nav.toggle() }, false);
}

if (elOpen) {
    elOpen.addEventListener("click", () => { nav.open() }, false);
}

if (elClose) {
    elClose.addEventListener("click", () => { nav.close() }, false);
}
