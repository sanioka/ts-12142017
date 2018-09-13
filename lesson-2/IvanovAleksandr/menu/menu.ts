// 5) Улучшите класс с менюшкой добавив публичные методы
// getElem -возвращает елемент в котором генерится меню;
// toggle открыть/закрыть элемент меню по метке;
// close закрыть элемент меню по метке;
// open открыть элемент меню по метке

type MenuList = {
    title: string;
    link?: string;
    items?: MenuList;
}[];

type MenuOpt = {
    element: HTMLElement,
    menuList: MenuList,
    toggleElement: HTMLElement,
};

const menuList: MenuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
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
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'}
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

    private readonly _element: HTMLElement;

    // Свойства домашнего задания — переключатель "Раскрыть/скрыть всё меню"
    private _toggleElement: HTMLElement;
    private _toggleStatus: boolean;

    public constructor(
        opt: MenuOpt
    ) {
        super();
        opt.element.innerHTML = this._generateMenu(opt.menuList);
        opt.element.addEventListener('click', this._clickHandler);
        this._element = opt.element;

        this._toggleElement = opt.toggleElement;
        this._toggleElement.addEventListener('click', this._toggleHandler, false);
        this._toggleStatus = false;

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

    public getElem() {
        return this._element;
    }

    protected _toggleHandler = (ev: MouseEvent): void => {
        this._toggleStatus = !this._toggleStatus;
        console.log(this._toggleStatus);

        let titleList = this._element.querySelectorAll('.title');
        for (let item of titleList) {
            const parentLi: HTMLLIElement = item.parentNode as HTMLLIElement;
            if (this._toggleStatus) {
                parentLi.classList.add('menu-open');
            } else {
                parentLi.classList.remove('menu-open');
            }

        }
    }
}

const element: HTMLElement = document.querySelector('.menu') as HTMLElement;
const toggleElement: HTMLElement = document.getElementById('toggle-menu') as HTMLElement;

const nav: Menu = new Menu({
    element,
    menuList,
    toggleElement
});

// console.log('_element = ', nav.getElem());