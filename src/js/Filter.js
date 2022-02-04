export default class Filter {
    get SELECTORS () {
        return {
            filterWrapper : '.filterbar',
            filterHead : '.filterbar__head',
            filterBody : '.filterbar__body'
        }
    }

    get MODIFIERS () {
        return {
            headOpen : 'filterbar__head--open',
            bodyOpen : 'filterbar__body--open'
        }
    }

    constructor() {
        this.buttons = document.querySelectorAll(this.SELECTORS.filterHead);
        this.contents = document.querySelectorAll(this.SELECTORS.filterBody);
        this.buttons.forEach((item) => {
            item.addEventListener("click", (e) => {
                this.toggleFilter(e);
            })
        })
    }

    toggleFilter(event) {
        const trigger = event.target;
        const target = event.target.nextElementSibling;
        trigger.classList.toggle(this.MODIFIERS.headOpen)
        target.classList.toggle(this.MODIFIERS.bodyOpen)
    }
}